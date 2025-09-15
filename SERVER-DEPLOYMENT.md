# Kim Loan Chemicals - Server Deployment Guide

Deploy your pre-built Docker image to any server with a single command.

## Quick Deployment

### 1. Build Image Locally
```bash
# Build the Docker image
docker build -t kim-loan-chemicals:latest .
```

### 2. Deploy to Server

**Option A: One-Command Deployment**
```bash
# Copy files to server and deploy
scp -r docker-compose.prod.yml nginx.prod.conf deploy-server.sh monitoring.sh user@your-server:/opt/kim-loan/
ssh user@your-server "cd /opt/kim-loan && ./deploy-server.sh yourdomain.com admin@yourdomain.com production"
```

**Option B: Deploy on Server**
```bash
# On your server
git clone <your-repo>
cd cosmetic-ingredients

# Build image on server
docker build -t kim-loan-chemicals:latest .

# Deploy with production setup
./deploy-server.sh yourdomain.com admin@yourdomain.com production
```

**Option C: Use Pre-built Image from Registry**
```bash
# Push to registry first (locally)
docker tag kim-loan-chemicals:latest your-registry/kim-loan-chemicals:latest
docker push your-registry/kim-loan-chemicals:latest

# On server
docker pull your-registry/kim-loan-chemicals:latest
docker tag your-registry/kim-loan-chemicals:latest kim-loan-chemicals:latest
./deploy-server.sh yourdomain.com admin@yourdomain.com production
```

## What Gets Deployed

### Services Included
- **kim-loan-chemicals**: Main Next.js application
- **nginx**: Reverse proxy with SSL termination
- **watchtower**: Automatic container updates (optional)

### Features
- ✅ **HTTPS with Let's Encrypt SSL**
- ✅ **Nginx reverse proxy with caching**
- ✅ **Health checks and monitoring**
- ✅ **Automatic SSL renewal**
- ✅ **Security headers and rate limiting**
- ✅ **Firewall configuration**
- ✅ **Log rotation and management**

## File Structure
```
/opt/kim-loan/
├── docker-compose.prod.yml    # Production compose file
├── nginx.prod.conf            # Nginx configuration
├── deploy-server.sh           # Deployment script
├── monitoring.sh              # Monitoring tools
├── ssl-certs/                 # SSL certificates
├── logs/                      # Application logs
└── management scripts (*.sh)  # Created during deployment
```

## Management Commands

After deployment, these scripts are created:

```bash
# Start services
./start.sh

# Stop services  
./stop.sh

# Restart services
./restart.sh

# Update containers
./update.sh

# View logs
./logs.sh [service-name]

# Monitor system
./monitoring.sh
```

## Docker Compose Profiles

### Default (Development)
```bash
docker-compose -f docker-compose.prod.yml up -d
# Runs only: kim-loan-chemicals on port 3000
```

### Production Profile
```bash
docker-compose -f docker-compose.prod.yml --profile production up -d
# Runs: kim-loan-chemicals + nginx (ports 80/443)
```

### Auto-Update Profile
```bash
docker-compose -f docker-compose.prod.yml --profile production --profile autoupdate up -d
# Adds: watchtower for automatic updates
```

## Environment Variables

Set these in `.env` or directly in compose file:

```bash
NODE_ENV=production
PORT=3000
NEXT_TELEMETRY_DISABLED=1

# Optional
DOMAIN=yourdomain.com
SSL_EMAIL=admin@yourdomain.com
```

## SSL Configuration

### Automatic (Let's Encrypt)
```bash
# Handled automatically by deploy-server.sh
./deploy-server.sh yourdomain.com admin@yourdomain.com production
```

### Manual SSL
```bash
# Copy your certificates to ssl-certs/
cp your-cert.pem ssl-certs/fullchain.pem
cp your-key.pem ssl-certs/privkey.pem

# Deploy
docker-compose -f docker-compose.prod.yml --profile production up -d
```

## Health Monitoring

### Built-in Health Checks
- Application: `http://localhost:3000`
- Nginx: `https://yourdomain.com/health`
- Container health checks every 30 seconds

### Monitoring Script
```bash
./monitoring.sh --all          # Run all checks
./monitoring.sh --website      # Website health only  
./monitoring.sh --containers   # Container status
./monitoring.sh --ssl          # SSL certificate check
```

## Troubleshooting

### Common Issues

**1. Port Already in Use**
```bash
# Check what's using the port
sudo lsof -i :80
sudo lsof -i :443

# Stop conflicting services
sudo systemctl stop apache2
sudo systemctl stop nginx
```

**2. SSL Certificate Issues**
```bash
# Check certificate validity
openssl x509 -in ssl-certs/fullchain.pem -text -noout

# Manual renewal
sudo certbot renew
./renew-ssl.sh yourdomain.com
```

**3. Container Won't Start**
```bash
# Check logs
docker-compose -f docker-compose.prod.yml logs kim-loan-chemicals

# Check image
docker image inspect kim-loan-chemicals:latest
```

**4. Nginx Configuration Issues**
```bash
# Test configuration
docker-compose -f docker-compose.prod.yml exec nginx nginx -t

# Reload configuration
docker-compose -f docker-compose.prod.yml exec nginx nginx -s reload
```

### Log Locations
- Application logs: `docker-compose logs kim-loan-chemicals`
- Nginx logs: `logs/nginx/access.log`, `logs/nginx/error.log`
- System logs: `/var/log/syslog`

## Updates

### Application Updates
```bash
# Rebuild image
docker build -t kim-loan-chemicals:latest .

# Restart with new image
./restart.sh
```

### Automatic Updates (Watchtower)
```bash
# Enable automatic updates
docker-compose -f docker-compose.prod.yml --profile production --profile autoupdate up -d

# Watchtower checks daily and updates containers automatically
```

## Backup Strategy

### Manual Backup
```bash
# Backup application data
tar -czf backup-$(date +%Y%m%d).tar.gz \
    docker-compose.prod.yml \
    nginx.prod.conf \
    ssl-certs/ \
    logs/

# Backup Docker image
docker save kim-loan-chemicals:latest | gzip > kim-loan-backup-$(date +%Y%m%d).tar.gz
```

### Automated Backup
```bash
# Add to crontab
0 2 * * * /opt/kim-loan/backup.sh
```

## Security Checklist

- ✅ HTTPS enforced
- ✅ Security headers configured  
- ✅ Rate limiting enabled
- ✅ Firewall configured
- ✅ Non-root container user
- ✅ SSL auto-renewal
- ✅ Log monitoring
- ✅ Health checks

## Performance Optimization

### Nginx Caching
- Static files cached for 1 year
- Gzip compression enabled
- HTTP/2 support

### Container Optimization
- Multi-stage Docker build
- Health checks with retries
- Resource limits (can be added)

## Support

**Check Status:**
```bash
docker-compose -f docker-compose.prod.yml ps
```

**View Logs:**
```bash
./logs.sh                    # All services
./logs.sh kim-loan-chemicals # Application only
./logs.sh nginx             # Nginx only
```

**Get Help:**
```bash
./deploy-server.sh --help
./monitoring.sh --help
```

---

## Quick Commands Reference

```bash
# Deploy to production
./deploy-server.sh yourdomain.com admin@yourdomain.com production

# Deploy development
./deploy-server.sh localhost admin@test.com development

# Start services
docker-compose -f docker-compose.prod.yml --profile production up -d

# Stop services  
docker-compose -f docker-compose.prod.yml down

# View status
docker-compose -f docker-compose.prod.yml ps

# Follow logs
docker-compose -f docker-compose.prod.yml logs -f
```

This setup provides a production-ready deployment that can be launched with a single command on any Docker-capable server.