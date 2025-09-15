#!/bin/bash
# Kim Loan Chemicals - Monitoring and Maintenance Script

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

print_header() {
    echo -e "${BLUE}=================================="
    echo -e "🔍 $1"
    echo -e "==================================${NC}"
}

print_status() {
    echo -e "${GREEN}✓${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

print_error() {
    echo -e "${RED}✗${NC} $1"
}

# Check system resources
check_system() {
    print_header "SYSTEM RESOURCES"
    
    # CPU Usage
    cpu_usage=$(top -bn1 | grep "Cpu(s)" | awk '{print $2}' | awk -F'%' '{print $1}')
    echo "CPU Usage: ${cpu_usage}%"
    
    # Memory Usage
    memory_info=$(free -m | awk 'NR==2{printf "%.1f/%.1fGB (%.2f%%)", $3/1024, $2/1024, $3*100/$2}')
    echo "Memory Usage: $memory_info"
    
    # Disk Usage
    disk_usage=$(df -h / | awk 'NR==2{print $5}')
    echo "Disk Usage: $disk_usage"
    
    # Load Average
    load_avg=$(uptime | awk -F'load average:' '{print $2}')
    echo "Load Average:$load_avg"
    echo
}

# Check Docker containers
check_containers() {
    print_header "DOCKER CONTAINERS"
    
    if docker-compose ps | grep -q "Up"; then
        print_status "Containers are running"
        docker-compose ps
    else
        print_error "Some containers are not running"
        docker-compose ps
        echo
        echo "Recent logs:"
        docker-compose logs --tail=10
    fi
    echo
}

# Check website health
check_website() {
    print_header "WEBSITE HEALTH CHECK"
    
    # Check if running locally or production
    if docker-compose ps | grep -q "nginx.*Up"; then
        # Production with nginx
        if curl -f -s -o /dev/null -w "%{http_code}" http://localhost:80; then
            print_status "Website responding on HTTP (port 80)"
        else
            print_error "Website not responding on HTTP"
        fi
        
        if curl -f -s -o /dev/null -w "%{http_code}" https://localhost:443 2>/dev/null; then
            print_status "Website responding on HTTPS (port 443)"
        else
            print_warning "HTTPS not available or SSL not configured"
        fi
    else
        # Development mode
        if curl -f -s -o /dev/null -w "%{http_code}" http://localhost:3000; then
            print_status "Website responding on port 3000"
        else
            print_error "Website not responding on port 3000"
        fi
    fi
    echo
}

# Check SSL certificates
check_ssl() {
    print_header "SSL CERTIFICATE STATUS"
    
    # Get domain from environment or config
    DOMAIN=$(grep DOMAIN .env.production 2>/dev/null | cut -d'=' -f2)
    
    if [ -z "$DOMAIN" ] || [ "$DOMAIN" = "your-domain.com" ]; then
        print_warning "Domain not configured in .env.production"
        return
    fi
    
    if [ -f "/etc/letsencrypt/live/$DOMAIN/fullchain.pem" ]; then
        expiry_date=$(openssl x509 -enddate -noout -in "/etc/letsencrypt/live/$DOMAIN/fullchain.pem" | cut -d= -f2)
        expiry_timestamp=$(date -d "$expiry_date" +%s)
        current_timestamp=$(date +%s)
        days_until_expiry=$(( (expiry_timestamp - current_timestamp) / 86400 ))
        
        if [ $days_until_expiry -gt 30 ]; then
            print_status "SSL certificate valid for $days_until_expiry days"
        elif [ $days_until_expiry -gt 7 ]; then
            print_warning "SSL certificate expires in $days_until_expiry days"
        else
            print_error "SSL certificate expires in $days_until_expiry days - URGENT RENEWAL NEEDED"
        fi
    else
        print_warning "SSL certificate not found"
    fi
    echo
}

# Check logs for errors
check_logs() {
    print_header "RECENT ERROR LOGS"
    
    # Check container logs for errors
    error_logs=$(docker-compose logs --since="1h" 2>/dev/null | grep -i "error\|fail\|exception" | head -5)
    
    if [ -n "$error_logs" ]; then
        print_warning "Recent errors found:"
        echo "$error_logs"
    else
        print_status "No recent errors in container logs"
    fi
    
    # Check system logs
    system_errors=$(journalctl --since="1 hour ago" -p err --no-pager -q | head -3)
    if [ -n "$system_errors" ]; then
        print_warning "Recent system errors:"
        echo "$system_errors"
    else
        print_status "No recent system errors"
    fi
    echo
}

# Performance metrics
check_performance() {
    print_header "PERFORMANCE METRICS"
    
    # Container resource usage
    if command -v docker stats &> /dev/null; then
        echo "Container Resource Usage (5 second sample):"
        timeout 5 docker stats --no-stream kim-loan-chemicals-website 2>/dev/null || echo "Container not found or not running"
    fi
    echo
}

# Check disk space
check_disk_space() {
    print_header "DISK SPACE ANALYSIS"
    
    # Check Docker space usage
    echo "Docker Space Usage:"
    docker system df 2>/dev/null || echo "Docker not available"
    echo
    
    # Check log files
    if [ -d "/var/log" ]; then
        large_logs=$(find /var/log -name "*.log" -size +100M 2>/dev/null | head -5)
        if [ -n "$large_logs" ]; then
            print_warning "Large log files found:"
            echo "$large_logs"
        fi
    fi
    echo
}

# Maintenance actions
maintenance() {
    print_header "MAINTENANCE ACTIONS"
    
    echo "Available maintenance commands:"
    echo "1. Clean Docker images: docker system prune -a"
    echo "2. Restart services: docker-compose restart"
    echo "3. View detailed logs: docker-compose logs -f"
    echo "4. Update SSL: sudo certbot renew"
    echo "5. Backup data: ./backup.sh"
    echo
}

# Generate report
generate_report() {
    TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
    REPORT_FILE="monitoring-report-$(date +%Y%m%d-%H%M%S).txt"
    
    {
        echo "Kim Loan Chemicals - System Report"
        echo "Generated: $TIMESTAMP"
        echo "=========================================="
        echo
        
        check_system
        check_containers
        check_website
        check_ssl
        check_logs
        check_performance
        check_disk_space
    } > "$REPORT_FILE"
    
    print_status "Report saved to: $REPORT_FILE"
}

# Main menu
show_menu() {
    echo "🔍 Kim Loan Chemicals - Monitoring Tool"
    echo
    echo "1) System Overview"
    echo "2) Check Containers"
    echo "3) Website Health"
    echo "4) SSL Status"
    echo "5) Error Logs"
    echo "6) Performance"
    echo "7) Disk Space"
    echo "8) Generate Report"
    echo "9) Maintenance Info"
    echo "0) Run All Checks"
    echo
    echo "q) Quit"
    echo
}

# Handle menu choice
handle_choice() {
    case $1 in
        1) check_system ;;
        2) check_containers ;;
        3) check_website ;;
        4) check_ssl ;;
        5) check_logs ;;
        6) check_performance ;;
        7) check_disk_space ;;
        8) generate_report ;;
        9) maintenance ;;
        0) 
            check_system
            check_containers
            check_website
            check_ssl
            check_logs
            check_performance
            check_disk_space
            ;;
        q) exit 0 ;;
        *) echo "Invalid option" ;;
    esac
}

# Main execution
if [ $# -eq 0 ]; then
    # Interactive mode
    while true; do
        show_menu
        read -p "Choose an option: " choice
        echo
        handle_choice "$choice"
        echo
        read -p "Press Enter to continue..."
        clear
    done
else
    # Command line mode
    case $1 in
        --all|-a) 
            check_system
            check_containers
            check_website
            check_ssl
            check_logs
            check_performance
            ;;
        --system|-s) check_system ;;
        --containers|-c) check_containers ;;
        --website|-w) check_website ;;
        --ssl) check_ssl ;;
        --logs|-l) check_logs ;;
        --performance|-p) check_performance ;;
        --report|-r) generate_report ;;
        --help|-h)
            echo "Usage: $0 [option]"
            echo
            echo "Options:"
            echo "  --all, -a         Run all checks"
            echo "  --system, -s      Check system resources"
            echo "  --containers, -c  Check Docker containers"
            echo "  --website, -w     Check website health"
            echo "  --ssl            Check SSL certificates"
            echo "  --logs, -l       Check error logs"
            echo "  --performance, -p Performance metrics"
            echo "  --report, -r     Generate full report"
            echo "  --help, -h       Show this help"
            echo
            echo "No arguments: Interactive mode"
            ;;
        *)
            echo "Unknown option: $1"
            echo "Use --help for usage information"
            exit 1
            ;;
    esac
fi