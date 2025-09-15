#!/bin/bash
# Kim Loan Chemicals - Server Deployment Script
# For deploying pre-built Docker images to production servers

set -e

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

print_status() { echo -e "${BLUE}[INFO]${NC} $1"; }
print_success() { echo -e "${GREEN}[SUCCESS]${NC} $1"; }
print_warning() { echo -e "${YELLOW}[WARNING]${NC} $1"; }
print_error() { echo -e "${RED}[ERROR]${NC} $1"; }

# Configuration
DOCKER_IMAGE="kim-loan-chemicals:latest"
DOMAIN=${1:-"your-domain.com"}
EMAIL=${2:-"admin@your-domain.com"}
ENVIRONMENT=${3:-"production"}

echo "🚀 Kim Loan Chemicals - Server Deployment"
echo "Domain: $DOMAIN"
echo "Email: $EMAIL"
echo "Environment: $ENVIRONMENT"
echo

# Check if Docker is installed
check_docker() {
    print_status "Checking Docker installation..."
    
    if ! command -v docker &> /dev/null; then
        print_error "Docker not found. Installing Docker..."
        curl -fsSL https://get.docker.com -o get-docker.sh
        sudo sh get-docker.sh
        sudo usermod -aG docker $USER
        print_success "Docker installed. Please logout and login again, then re-run this script."
        exit 1
    fi
    
    if ! command -v docker-compose &> /dev/null; then
        print_error "Docker Compose not found. Installing..."
        sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
        sudo chmod +x /usr/local/bin/docker-compose
    fi
    
    print_success "Docker and Docker Compose are ready"
}

# Create necessary directories
setup_directories() {
    print_status "Setting up directories..."
    
    mkdir -p ssl-certs
    mkdir -p logs/nginx
    
    print_success "Directories created"
}

# Setup SSL certificates
setup_ssl() {
    if [ "$ENVIRONMENT" = "production" ]; then
        print_status "Setting up SSL certificates for $DOMAIN..."
        
        if [ "$DOMAIN" = "your-domain.com" ]; then
            print_warning "Please update the domain name: ./deploy-server.sh yourdomain.com admin@yourdomain.com"
            return 1
        fi
        
        # Install certbot if not present
        if ! command -v certbot &> /dev/null; then
            print_status "Installing Certbot..."
            sudo apt update
            sudo apt install -y certbot
        fi
        
        # Stop any services on port 80
        print_status "Stopping services on port 80/443..."
        sudo pkill -f nginx || true
        docker-compose -f docker-compose.prod.yml down || true
        
        # Get SSL certificate
        print_status "Obtaining SSL certificate..."
        sudo certbot certonly --standalone \
            --preferred-challenges http \
            -d $DOMAIN \
            --email $EMAIL \
            --agree-tos \
            --non-interactive \
            --expand || {
                print_warning "SSL certificate setup failed. Will use self-signed certificates for testing."
                create_self_signed_cert
            }
        
        # Copy certificates to ssl-certs directory
        if [ -f "/etc/letsencrypt/live/$DOMAIN/fullchain.pem" ]; then
            sudo cp /etc/letsencrypt/live/$DOMAIN/fullchain.pem ssl-certs/
            sudo cp /etc/letsencrypt/live/$DOMAIN/privkey.pem ssl-certs/
            sudo chown $(whoami):$(whoami) ssl-certs/*.pem
            print_success "SSL certificates configured"
        fi
    fi
}

# Create self-signed certificates for testing
create_self_signed_cert() {
    print_status "Creating self-signed certificates for testing..."
    
    openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
        -keyout ssl-certs/privkey.pem \
        -out ssl-certs/fullchain.pem \
        -subj "/C=VN/ST=HoChiMinh/L=HoChiMinh/O=KimLoan/CN=$DOMAIN"
    
    print_warning "Using self-signed certificates (not secure for production)"
}

# Update Nginx configuration with domain
update_nginx_config() {
    print_status "Updating Nginx configuration..."
    
    # Create a copy of nginx config with the correct domain
    sed "s/server_name _;/server_name $DOMAIN;/g" nginx.prod.conf > nginx.prod.conf.tmp
    mv nginx.prod.conf.tmp nginx.prod.conf
    
    print_success "Nginx configuration updated for $DOMAIN"
}

# Check if Docker image exists
check_docker_image() {
    print_status "Checking for Docker image: $DOCKER_IMAGE..."
    
    if ! docker image inspect $DOCKER_IMAGE >/dev/null 2>&1; then
        print_error "Docker image '$DOCKER_IMAGE' not found!"
        echo
        echo "Please build the image first:"
        echo "  docker build -t kim-loan-chemicals:latest ."
        echo
        echo "Or pull from registry:"
        echo "  docker pull your-registry/kim-loan-chemicals:latest"
        echo "  docker tag your-registry/kim-loan-chemicals:latest kim-loan-chemicals:latest"
        echo
        exit 1
    fi
    
    print_success "Docker image found"
}

# Deploy application
deploy() {
    print_status "Deploying Kim Loan Chemicals..."
    
    # Stop existing containers
    docker-compose -f docker-compose.prod.yml down || true
    
    # Start based on environment
    if [ "$ENVIRONMENT" = "production" ]; then
        print_status "Starting production services..."
        docker-compose -f docker-compose.prod.yml --profile production up -d
    else
        print_status "Starting development services..."
        docker-compose -f docker-compose.prod.yml up -d kim-loan-chemicals
    fi
    
    # Wait for services to start
    print_status "Waiting for services to start..."
    sleep 15
    
    # Check if containers are running
    if docker-compose -f docker-compose.prod.yml ps | grep -q "Up"; then
        print_success "Deployment successful!"
        
        if [ "$ENVIRONMENT" = "production" ]; then
            print_success "🌟 Website is live at: https://$DOMAIN"
        else
            print_success "🌟 Website is live at: http://localhost:3000"
        fi
    else
        print_error "Deployment failed. Checking logs..."
        docker-compose -f docker-compose.prod.yml logs
        exit 1
    fi
}

# Health check
health_check() {
    print_status "Performing health check..."
    
    sleep 5
    
    if [ "$ENVIRONMENT" = "production" ]; then
        if curl -k -f -s "https://localhost:443" > /dev/null; then
            print_success "✓ HTTPS health check passed"
        else
            print_warning "HTTPS health check failed"
        fi
        
        if curl -f -s "http://localhost:80" > /dev/null; then
            print_success "✓ HTTP redirect working"
        else
            print_warning "HTTP redirect not working"
        fi
    else
        if curl -f -s "http://localhost:3000" > /dev/null; then
            print_success "✓ Application health check passed"
        else
            print_warning "Application health check failed"
        fi
    fi
}

# Setup firewall
setup_firewall() {
    if [ "$ENVIRONMENT" = "production" ]; then
        print_status "Configuring firewall..."
        
        if command -v ufw &> /dev/null; then
            sudo ufw --force enable
            sudo ufw allow ssh
            sudo ufw allow 80/tcp
            sudo ufw allow 443/tcp
            print_success "Firewall configured"
        else
            print_warning "UFW not found. Please configure firewall manually."
        fi
    fi
}

# Setup SSL renewal
setup_ssl_renewal() {
    if [ "$ENVIRONMENT" = "production" ] && [ -f "/etc/letsencrypt/live/$DOMAIN/fullchain.pem" ]; then
        print_status "Setting up SSL renewal..."
        
        # Create renewal script
        cat > renew-ssl.sh << 'EOF'
#!/bin/bash
# Renew SSL certificates and update containers

DOMAIN=$1
if [ -z "$DOMAIN" ]; then
    echo "Usage: $0 <domain>"
    exit 1
fi

# Renew certificates
certbot renew --quiet

# Copy new certificates
if [ -f "/etc/letsencrypt/live/$DOMAIN/fullchain.pem" ]; then
    cp /etc/letsencrypt/live/$DOMAIN/fullchain.pem ssl-certs/
    cp /etc/letsencrypt/live/$DOMAIN/privkey.pem ssl-certs/
    
    # Reload nginx
    docker-compose -f docker-compose.prod.yml exec nginx nginx -s reload
    
    echo "SSL certificates renewed and nginx reloaded"
else
    echo "Certificate files not found"
fi
EOF
        
        chmod +x renew-ssl.sh
        
        # Add to crontab for automatic renewal
        (crontab -l 2>/dev/null; echo "0 12 * * * $(pwd)/renew-ssl.sh $DOMAIN") | crontab -
        
        print_success "SSL auto-renewal configured"
    fi
}

# Create management scripts
create_management_scripts() {
    print_status "Creating management scripts..."
    
    # Start script
    cat > start.sh << 'EOF'
#!/bin/bash
echo "Starting Kim Loan Chemicals..."
docker-compose -f docker-compose.prod.yml --profile production up -d
EOF
    
    # Stop script
    cat > stop.sh << 'EOF'
#!/bin/bash
echo "Stopping Kim Loan Chemicals..."
docker-compose -f docker-compose.prod.yml down
EOF
    
    # Restart script
    cat > restart.sh << 'EOF'
#!/bin/bash
echo "Restarting Kim Loan Chemicals..."
docker-compose -f docker-compose.prod.yml restart
EOF
    
    # Update script
    cat > update.sh << 'EOF'
#!/bin/bash
echo "Updating Kim Loan Chemicals..."
docker-compose -f docker-compose.prod.yml pull
docker-compose -f docker-compose.prod.yml --profile production up -d
EOF
    
    # Logs script
    cat > logs.sh << 'EOF'
#!/bin/bash
docker-compose -f docker-compose.prod.yml logs -f ${1:-kim-loan-chemicals}
EOF
    
    chmod +x *.sh
    
    print_success "Management scripts created (start.sh, stop.sh, restart.sh, update.sh, logs.sh)"
}

# Show deployment summary
show_summary() {
    echo
    echo "🎉 ====================================="
    echo "   DEPLOYMENT COMPLETED SUCCESSFULLY"
    echo "====================================="
    echo
    echo "📝 Configuration:"
    echo "  Domain: $DOMAIN"
    echo "  Environment: $ENVIRONMENT"
    
    if [ "$ENVIRONMENT" = "production" ]; then
        echo "  Website: https://$DOMAIN"
        echo "  SSL: Let's Encrypt"
        echo "  Auto-renewal: Enabled"
    else
        echo "  Website: http://localhost:3000"
    fi
    
    echo
    echo "🛠️  Management Commands:"
    echo "  Start:    ./start.sh"
    echo "  Stop:     ./stop.sh"  
    echo "  Restart:  ./restart.sh"
    echo "  Update:   ./update.sh"
    echo "  Logs:     ./logs.sh"
    echo "  Monitor:  ./monitoring.sh"
    echo
    echo "🔍 Quick Status Check:"
    echo "  docker-compose -f docker-compose.prod.yml ps"
    echo
    echo "📊 View Logs:"
    echo "  docker-compose -f docker-compose.prod.yml logs -f"
    echo
}

# Main execution
main() {
    if [ "$1" = "--help" ]; then
        echo "Usage: $0 [domain] [email] [environment]"
        echo
        echo "Examples:"
        echo "  $0 kimloan.vn admin@kimloan.vn production"
        echo "  $0 localhost admin@test.com development"
        echo
        exit 0
    fi
    
    if [ "$ENVIRONMENT" = "production" ]; then
        echo "⚠️  Production Deployment"
        echo "This will set up:"
        echo "- SSL certificates for $DOMAIN"
        echo "- Nginx reverse proxy"
        echo "- Firewall rules"
        echo "- Auto-renewal for SSL"
        echo
        read -p "Continue? (y/N) " -n 1 -r
        echo
        if [[ ! $REPLY =~ ^[Yy]$ ]]; then
            echo "Deployment cancelled."
            exit 0
        fi
    fi
    
    check_docker
    check_docker_image
    setup_directories
    setup_ssl
    update_nginx_config
    deploy
    health_check
    setup_firewall
    setup_ssl_renewal
    create_management_scripts
    show_summary
    
    print_success "🎉 Kim Loan Chemicals deployed successfully!"
}

# Run main function
main "$@"