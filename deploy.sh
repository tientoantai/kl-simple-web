#!/bin/bash
# Kim Loan Chemicals - Production Deployment Script
# Usage: ./deploy.sh [environment]
# Example: ./deploy.sh production

set -e  # Exit on any error

ENVIRONMENT=${1:-production}
DOMAIN=${2:-"your-domain.com"}
EMAIL=${3:-"admin@your-domain.com"}

echo "🚀 Deploying Kim Loan Chemicals to $ENVIRONMENT environment..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Docker is installed
check_docker() {
    print_status "Checking Docker installation..."
    if ! command -v docker &> /dev/null; then
        print_error "Docker is not installed. Please install Docker first."
        echo "Run: curl -fsSL https://get.docker.com -o get-docker.sh && sudo sh get-docker.sh"
        exit 1
    fi
    
    if ! command -v docker-compose &> /dev/null; then
        print_error "Docker Compose is not installed."
        echo "Run: sudo curl -L \"https://github.com/docker/compose/releases/latest/download/docker-compose-\$(uname -s)-\$(uname -m)\" -o /usr/local/bin/docker-compose"
        echo "Then: sudo chmod +x /usr/local/bin/docker-compose"
        exit 1
    fi
    
    print_success "Docker and Docker Compose are installed"
}

# Set up SSL certificates
setup_ssl() {
    if [ "$ENVIRONMENT" = "production" ]; then
        print_status "Setting up SSL certificates for $DOMAIN..."
        
        if ! command -v certbot &> /dev/null; then
            print_status "Installing Certbot..."
            sudo apt update
            sudo apt install -y certbot
        fi
        
        # Stop any existing containers to free up port 80
        print_status "Stopping existing containers..."
        docker-compose down || true
        
        # Get SSL certificate
        print_status "Obtaining SSL certificate..."
        sudo certbot certonly --standalone \
            -d $DOMAIN \
            --email $EMAIL \
            --agree-tos \
            --non-interactive \
            --expand || print_warning "SSL certificate setup failed or already exists"
            
        print_success "SSL certificates configured"
    fi
}

# Update Nginx configuration
update_nginx_config() {
    if [ "$ENVIRONMENT" = "production" ]; then
        print_status "Updating Nginx configuration for $DOMAIN..."
        
        # Backup original config
        cp nginx.conf nginx.conf.backup
        
        # Update domain in nginx config
        sed -i "s/localhost/$DOMAIN/g" nginx.conf
        sed -i "s/your-domain.com/$DOMAIN/g" nginx.conf
        
        print_success "Nginx configuration updated"
    fi
}

# Build and deploy
deploy() {
    print_status "Building Docker image..."
    
    # Stop existing containers
    docker-compose down || true
    
    # Build with no cache for fresh deployment
    docker-compose build --no-cache
    
    # Start services based on environment
    if [ "$ENVIRONMENT" = "production" ]; then
        print_status "Starting production services..."
        docker-compose --profile production up -d
    else
        print_status "Starting development services..."
        docker-compose up -d
    fi
    
    # Wait for services to start
    print_status "Waiting for services to start..."
    sleep 10
    
    # Check if container is running
    if docker-compose ps | grep -q "Up"; then
        print_success "Deployment completed successfully!"
        
        if [ "$ENVIRONMENT" = "production" ]; then
            print_success "Website is now live at: https://$DOMAIN"
            print_status "HTTP traffic will be automatically redirected to HTTPS"
        else
            print_success "Website is now live at: http://localhost:3000"
        fi
    else
        print_error "Deployment failed. Checking logs..."
        docker-compose logs
        exit 1
    fi
}

# Health check
health_check() {
    print_status "Performing health check..."
    
    if [ "$ENVIRONMENT" = "production" ]; then
        URL="https://$DOMAIN"
    else
        URL="http://localhost:3000"
    fi
    
    # Wait a bit more for the service to be fully ready
    sleep 5
    
    if curl -f -s "$URL" > /dev/null; then
        print_success "Health check passed! Website is responding"
    else
        print_warning "Health check failed. Website might still be starting..."
        print_status "You can check logs with: docker-compose logs"
    fi
}

# Setup firewall (production only)
setup_firewall() {
    if [ "$ENVIRONMENT" = "production" ]; then
        print_status "Configuring firewall..."
        
        if command -v ufw &> /dev/null; then
            sudo ufw --force enable
            sudo ufw allow ssh
            sudo ufw allow 80
            sudo ufw allow 443
            print_success "Firewall configured"
        else
            print_warning "UFW not found. Please configure firewall manually."
        fi
    fi
}

# Setup automatic SSL renewal
setup_ssl_renewal() {
    if [ "$ENVIRONMENT" = "production" ]; then
        print_status "Setting up automatic SSL renewal..."
        
        # Create renewal script
        cat > /tmp/renew-ssl.sh << 'EOF'
#!/bin/bash
# Renew SSL certificates and reload nginx
certbot renew --quiet
docker-compose exec nginx nginx -s reload
EOF
        
        sudo mv /tmp/renew-ssl.sh /usr/local/bin/renew-ssl.sh
        sudo chmod +x /usr/local/bin/renew-ssl.sh
        
        # Add to crontab
        (crontab -l 2>/dev/null; echo "0 12 * * * /usr/local/bin/renew-ssl.sh") | crontab -
        
        print_success "Automatic SSL renewal configured"
    fi
}

# Create backup script
create_backup_script() {
    print_status "Creating backup script..."
    
    cat > backup.sh << 'EOF'
#!/bin/bash
# Kim Loan Chemicals Backup Script

BACKUP_DIR="/opt/kim-loan-chemicals-backups"
DATE=$(date +%Y%m%d_%H%M%S)

mkdir -p $BACKUP_DIR

# Backup application files
tar -czf "$BACKUP_DIR/app-backup-$DATE.tar.gz" \
    --exclude=node_modules \
    --exclude=.next \
    --exclude=.git \
    .

# Backup docker images
docker save kim-loan-chemicals:latest | gzip > "$BACKUP_DIR/docker-image-$DATE.tar.gz"

# Clean old backups (keep last 7 days)
find $BACKUP_DIR -name "*.tar.gz" -mtime +7 -delete

echo "Backup completed: $BACKUP_DIR/app-backup-$DATE.tar.gz"
EOF
    
    chmod +x backup.sh
    print_success "Backup script created"
}

# Show deployment info
show_info() {
    echo
    echo "=================================="
    echo "🎉 DEPLOYMENT SUMMARY"
    echo "=================================="
    echo "Environment: $ENVIRONMENT"
    echo "Domain: $DOMAIN"
    
    if [ "$ENVIRONMENT" = "production" ]; then
        echo "Website URL: https://$DOMAIN"
        echo "SSL: Enabled with Let's Encrypt"
        echo "Firewall: Configured"
        echo "Auto-renewal: Enabled"
    else
        echo "Website URL: http://localhost:3000"
        echo "SSL: Not configured (development)"
    fi
    
    echo
    echo "📋 USEFUL COMMANDS:"
    echo "View logs: docker-compose logs -f"
    echo "Restart: docker-compose restart"
    echo "Stop: docker-compose down"
    echo "Update: git pull && ./deploy.sh $ENVIRONMENT"
    echo "Backup: ./backup.sh"
    echo
    echo "📊 MONITORING:"
    echo "Container status: docker-compose ps"
    echo "Resource usage: docker stats"
    echo "System resources: htop"
    echo
}

# Main execution
main() {
    echo "🌟 Kim Loan Chemicals Deployment Script"
    echo "Environment: $ENVIRONMENT"
    echo "Domain: $DOMAIN"
    echo "Email: $EMAIL"
    echo
    
    # Confirmation for production
    if [ "$ENVIRONMENT" = "production" ]; then
        echo "⚠️  You are about to deploy to PRODUCTION"
        echo "This will:"
        echo "- Set up SSL certificates for $DOMAIN"
        echo "- Configure firewall"
        echo "- Set up automatic SSL renewal"
        echo "- Deploy with Nginx reverse proxy"
        echo
        read -p "Continue? (y/N) " -n 1 -r
        echo
        if [[ ! $REPLY =~ ^[Yy]$ ]]; then
            echo "Deployment cancelled."
            exit 0
        fi
    fi
    
    check_docker
    setup_ssl
    update_nginx_config
    deploy
    health_check
    setup_firewall
    setup_ssl_renewal
    create_backup_script
    show_info
    
    print_success "🎉 Deployment completed successfully!"
}

# Handle script arguments
if [ "$1" = "--help" ] || [ "$1" = "-h" ]; then
    echo "Usage: $0 [environment] [domain] [email]"
    echo
    echo "Arguments:"
    echo "  environment  Environment to deploy (development|production) [default: production]"
    echo "  domain       Domain name for production deployment [default: your-domain.com]"
    echo "  email        Email for SSL certificate [default: admin@your-domain.com]"
    echo
    echo "Examples:"
    echo "  $0                                    # Deploy to production with defaults"
    echo "  $0 development                        # Deploy to development"
    echo "  $0 production kimloan.vn admin@kimloan.vn  # Deploy to production with domain"
    exit 0
fi

# Run main function
main