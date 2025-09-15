# Kim Loan Chemicals - Deployment Guide

This guide covers multiple deployment options for the Kim Loan Chemicals website, from development to production-ready solutions.

## Quick Start (Development)

```bash
# Build and run locally
docker build -t kim-loan-chemicals .
docker run -p 3000:3000 kim-loan-chemicals

# Or using docker-compose
docker-compose up
```

Visit `http://localhost:3000`

## Production Deployment Options

### 1. VPS/Cloud Server (Recommended for Small-Medium Business)

**Requirements:**
- VPS with 2GB+ RAM, 20GB+ storage
- Ubuntu 20.04+ or similar Linux distribution
- Domain name pointed to your server IP

**Step-by-Step:**

```bash
# 1. Connect to your server
ssh root@your-server-ip

# 2. Install Docker and Docker Compose
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# 3. Clone your repository
git clone <your-repo-url>
cd cosmetic-ingredients

# 4. Set up SSL with Let's Encrypt (for HTTPS)
sudo apt update
sudo apt install certbot
sudo certbot certonly --standalone -d yourdomain.com

# 5. Update nginx.conf with your domain and SSL paths
# (See SSL configuration section below)

# 6. Deploy with production setup
docker-compose --profile production up -d
```

### 2. Digital Ocean App Platform

**Simple one-click deployment:**

1. Fork this repository to your GitHub
2. Go to Digital Ocean App Platform
3. Create new app from GitHub repository
4. Configure:
   - **Build Command:** `docker build -t kim-loan-chemicals .`
   - **Run Command:** `docker run -p 3000:3000 kim-loan-chemicals`
   - **Port:** 3000
5. Deploy and get automatic HTTPS

**Cost:** ~$5-12/month

### 3. Railway

**Super simple deployment:**

```bash
# Install Railway CLI
npm install -g @railway/cli

# Deploy
railway login
railway init
railway up
```

**Cost:** ~$5/month with automatic scaling

### 4. Vercel (Static Export Option)

For static deployment, modify `next.config.ts`:

```typescript
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};
```

Then deploy:
```bash
npm run build
npx vercel --prod
```

### 5. AWS ECS (Enterprise)

Use the provided `docker-compose.yml` with AWS ECS for enterprise-scale deployment.

## SSL Configuration

Update `nginx.conf` for HTTPS:

```nginx
server {
    listen 443 ssl http2;
    server_name yourdomain.com;
    
    ssl_certificate /etc/letsencrypt/live/yourdomain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/yourdomain.com/privkey.pem;
    
    # Security headers
    add_header X-Content-Type-Options nosniff;
    add_header X-Frame-Options DENY;
    add_header X-XSS-Protection "1; mode=block";
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains";
    
    location / {
        proxy_pass http://kim-loan-chemicals:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}

server {
    listen 80;
    server_name yourdomain.com;
    return 301 https://$server_name$request_uri;
}
```

## Environment Variables

Create `.env.production`:

```bash
NODE_ENV=production
PORT=3000
NEXT_TELEMETRY_DISABLED=1
```

## Production Monitoring

### Health Check Endpoint

The app automatically provides health checks at:
- `http://yourdomain.com/api/health` (if you add this endpoint)

### Log Monitoring

```bash
# View container logs
docker logs kim-loan-chemicals-website

# Follow logs in real-time
docker logs -f kim-loan-chemicals-website
```

### Resource Monitoring

```bash
# Check container resource usage
docker stats kim-loan-chemicals-website
```

## Backup Strategy

### Database Backup (if using database later)
```bash
# Create backup script
#!/bin/bash
docker exec kim-loan-chemicals-website pg_dump -U user database > backup-$(date +%Y%m%d).sql
```

### Code Backup
- Use Git with multiple remotes (GitHub, GitLab, etc.)
- Set up automated deployments on code push

## Update Deployment

```bash
# Pull latest changes
git pull origin main

# Rebuild and redeploy
docker-compose down
docker-compose build --no-cache
docker-compose --profile production up -d
```

## Troubleshooting

### Common Issues:

1. **Port 80/443 already in use:**
   ```bash
   sudo lsof -i :80
   sudo lsof -i :443
   sudo systemctl stop apache2  # or nginx if running
   ```

2. **Docker permission denied:**
   ```bash
   sudo usermod -aG docker $USER
   # Logout and login again
   ```

3. **SSL certificate issues:**
   ```bash
   sudo certbot renew --dry-run
   sudo certbot renew
   ```

4. **Container won't start:**
   ```bash
   docker logs kim-loan-chemicals-website
   ```

## Performance Optimization

### CDN Setup (Optional)
- Use Cloudflare for global CDN
- Configure caching rules for static assets

### Image Optimization
- Use WebP format for images
- Implement lazy loading

### Monitoring Tools
- **Free:** Google Analytics, Search Console
- **Paid:** New Relic, Datadog, Sentry

## Security Checklist

- ✅ HTTPS enabled
- ✅ Security headers configured
- ✅ Non-root user in Docker
- ✅ Regular updates scheduled
- ✅ Firewall configured (UFW recommended)
- ✅ Fail2ban for intrusion prevention

## Estimated Costs

| Platform | Monthly Cost | Pros | Cons |
|----------|--------------|------|------|
| VPS (2GB RAM) | $5-20 | Full control, customizable | Requires server management |
| Digital Ocean App | $5-12 | Managed, easy setup | Less control |
| Railway | $5+ | Very simple, auto-scaling | Limited customization |
| Vercel | $0-20 | Great for static, fast CDN | Static only for free tier |
| AWS ECS | $10+ | Enterprise features | Complex setup |

## Support

For deployment issues:
1. Check container logs: `docker logs kim-loan-chemicals-website`
2. Verify port availability: `sudo lsof -i :3000`
3. Test locally first: `docker run -p 3000:3000 kim-loan-chemicals`

---

**Recommended for Kim Loan Chemicals:**
- **Start with:** VPS + Docker Compose (most cost-effective)
- **Scale to:** Digital Ocean App Platform or AWS (when traffic grows)
- **Always use:** HTTPS, regular backups, monitoring