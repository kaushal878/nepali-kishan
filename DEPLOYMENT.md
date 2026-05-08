# 🚀 Deployment Guide

This guide covers deploying the Nepali Kishan application to various platforms.

## 📋 Prerequisites

### Required Accounts
- **GitHub**: Source code management
- **Vercel**: Frontend hosting (recommended)
- **Supabase**: Database and authentication
- **Cloudinary**: File storage
- **OpenRouter**: AI services

### Environment Variables
Create a `.env.production` file with:
```env
# Database
DATABASE_URL="postgresql://username:password@host:5432/database"
NEXT_PUBLIC_SUPABASE_URL="your_supabase_url"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your_supabase_anon_key"
SUPABASE_SERVICE_ROLE_KEY="your_supabase_service_key"

# Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
CLERK_SECRET_KEY="your_clerk_secret_key"

# AI Services
OPENROUTER_API_KEY="your_openrouter_api_key"

# File Storage
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="your_cloudinary_name"
NEXT_PUBLIC_CLOUDINARY_API_KEY="your_cloudinary_api_key"
CLOUDINARY_API_SECRET="your_cloudinary_secret"

# External APIs
WEATHER_API_KEY="your_weather_api_key"
MARKET_API_KEY="your_market_api_key"

# Application
NEXTAUTH_URL="https://your-domain.com"
NEXTAUTH_SECRET="your_nextauth_secret"
```

## 🌐 Vercel Deployment (Recommended)

### Step 1: Prepare Repository
1. Push code to GitHub repository
2. Ensure all environment variables are set in repository secrets

### Step 2: Vercel Setup
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Select "Next.js" framework
5. Configure build settings:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "installCommand": "npm install",
  "framework": "nextjs"
}
```

### Step 3: Environment Variables
In Vercel dashboard, add all environment variables:
1. Go to Project Settings → Environment Variables
2. Add each variable from the prerequisites section
3. Select appropriate environments (Production, Preview, Development)

### Step 4: Deploy
1. Click "Deploy"
2. Wait for build to complete
3. Your app will be available at `.vercel.app`

### Step 5: Custom Domain
1. Go to Project Settings → Domains
2. Add your custom domain
3. Configure DNS records as provided by Vercel
4. Enable HTTPS (automatic with Vercel)

## 🗄️ Supabase Setup

### Database Configuration
1. Create new project at [supabase.com](https://supabase.com)
2. Note your project URL and anon key
3. Run database migrations:

```bash
# Install Supabase CLI
npm install -g supabase

# Link to your project
supabase link --project-ref your-project-ref

# Run migrations
supabase db push
```

### Authentication Setup
1. Go to Authentication → Settings
2. Enable phone number authentication
3. Configure SMS provider (Twilio recommended)
4. Set up email provider for password recovery

### Storage Setup
1. Create storage buckets:
   - `uploads` for user files
   - `avatars` for profile pictures
   - `tutorials` for educational content

2. Set up Row Level Security (RLS) policies

## ☁️ Cloudinary Configuration

### Account Setup
1. Create account at [cloudinary.com](https://cloudinary.com)
2. Note your cloud name, API key, and secret

### Folder Structure
Create organized folders:
- `avatars/` - Profile pictures
- `tutorials/` - Educational content
- `posts/` - Community posts
- `crops/` - Crop images
- `livestock/` - Animal photos

### Upload Presets
Create upload presets for different content types:
- Avatar images (200x200, face detection)
- Tutorial thumbnails (1280x720)
- Post images (auto format, quality 80)

## 🔧 Railway Deployment (Alternative)

### Backend API Deployment
1. Create account at [railway.app](https://railway.app)
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your repository
4. Configure service settings:

```yaml
# railway.toml
[build]
builder = "NIXPACKS"

[deploy]
startCommand = "npm start"
healthcheckPath = "/api/health"
healthcheckTimeout = 100
restartPolicyType = "ON_FAILURE"
restartPolicyMaxRetries = 10
```

### Database Setup
1. Add PostgreSQL service in Railway
2. Get connection string
3. Update environment variables
4. Run migrations

## 📱 Mobile App Deployment

### Progressive Web App
The PWA is automatically deployed with the web app:
- Service worker registration
- Offline functionality
- App install prompts
- Push notifications

### Native Apps (Future)
For React Native deployment:
```bash
# Install Expo CLI
npm install -g @expo/cli

# Build for Android
expo build:android

# Build for iOS
expo build:ios
```

## 🔍 SEO Optimization

### Meta Tags
Ensure proper meta tags in `layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: "नेपाली किसान - Nepali Kishan",
  description: "AI-powered agricultural app for Nepali farmers",
  keywords: ["agriculture", "farming", "nepal", "crop", "disease"],
  openGraph: {
    title: "नेपाली किसान",
    description: "AI-powered agricultural app",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/twitter-image.png"],
  },
}
```

### Sitemap Generation
Create `sitemap.xml`:
```typescript
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://nepalikishan.com',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    // Add other pages
  ]
}
```

## 📊 Analytics Setup

### Vercel Analytics
1. Enable in Vercel dashboard
2. Install analytics package:
```bash
npm install @vercel/analytics
```

### Google Analytics
1. Create account at [analytics.google.com](https://analytics.google.com)
2. Add tracking script to `layout.tsx`
3. Configure goals and events

### Hotjar (Optional)
For user behavior analysis:
1. Create account at [hotjar.com](https://hotjar.com)
2. Add tracking script
3. Set up heatmaps and recordings

## 🔒 Security Configuration

### HTTPS
- Automatic with Vercel
- Force HTTPS redirects
- HSTS headers

### Environment Security
- Use Vercel environment variables
- Never commit secrets to Git
- Rotate keys regularly

### Content Security Policy
Add to `next.config.js`:
```javascript
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline';
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https:;
  font-src 'self';
  connect-src 'self' https://api.openai.com;
`
```

## 🚨 Monitoring Setup

### Error Tracking
Install Sentry:
```bash
npm install @sentry/nextjs
```

Configure in `sentry.client.config.js`:
```javascript
import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: 'your-sentry-dsn',
  environment: process.env.NODE_ENV,
})
```

### Performance Monitoring
1. Enable Vercel Speed Insights
2. Set up Core Web Vitals tracking
3. Monitor bundle size

### Uptime Monitoring
Use services like:
- Uptime Robot
- Pingdom
- Statuspage for public status

## 🔄 CI/CD Pipeline

### GitHub Actions
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm test
      - run: npm run lint

  deploy:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

### Branch Strategy
- `main`: Production deployment
- `develop`: Staging deployment
- `feature/*`: Preview deployments

## 📱 Mobile Optimization

### Responsive Design
- Mobile-first approach
- Touch-friendly interfaces
- Optimized for slow connections
- PWA capabilities

### Performance
- Image optimization
- Code splitting
- Lazy loading
- Service worker caching

## 🌍 CDN Configuration

### Vercel Edge Network
- Automatic CDN deployment
- Global edge locations
- Smart caching
- Image optimization

### Custom CDN (Optional)
For additional control:
- Cloudflare
- AWS CloudFront
- Fastly

## 🔧 Domain Configuration

### DNS Settings
For custom domain `nepalikishan.com`:
```
A     1.2.3.4
CNAME vercel.app
MX    mail.nepalikishan.com
TXT   v=spf1 include:_spf.vercel.com
```

### SSL Certificate
- Automatic with Vercel
- Wildcard certificate
- Auto-renewal

## 📈 Scaling Strategy

### Vertical Scaling
- Database read replicas
- CDN edge locations
- Load balancers

### Horizontal Scaling
- Container orchestration
- Microservices architecture
- Serverless functions

## 🔄 Backup Strategy

### Database Backups
- Automated daily backups
- Point-in-time recovery
- Cross-region replication
- Backup verification

### File Backups
- Cloudinary to S3 sync
- Version control for assets
- Disaster recovery plan

## 🧪 Testing in Production

### A/B Testing
- Feature flags
- Gradual rollouts
- Performance comparison
- User behavior analysis

### Canary Deployments
- Deploy to subset of users
- Monitor performance
- Full rollout if stable

## 📞 Support Setup

### Error Reporting
- User feedback forms
- Error tracking integration
- Performance monitoring
- Automated alerts

### Documentation
- Public knowledge base
- API documentation
- Troubleshooting guides
- Video tutorials

## 🎯 Post-Deployment Checklist

### Immediate Checks
- [ ] Application loads correctly
- [ ] All pages accessible
- [ ] Database connections working
- [ ] Authentication functioning
- [ ] File uploads working
- [ ] API endpoints responding

### Performance Checks
- [ ] Page load times < 3 seconds
- [ ] Mobile performance acceptable
- [ ] Core Web Vitals green
- [ ] No console errors
- [ ] Images optimized

### Security Checks
- [ ] HTTPS enforced
- [ ] No sensitive data exposed
- [ ] CSP headers working
- [ ] Rate limiting active
- [ ] Input validation working

### SEO Checks
- [ ] Meta tags correct
- [ ] Sitemap accessible
- [ ] Robots.txt configured
- [ ] Social media previews working
- [ ] Search engine indexing

## 🚀 Rollback Procedures

### Quick Rollback
```bash
# Vercel rollback
vercel rollback --to <deployment-url>

# Railway rollback
railway rollback
```

### Database Rollback
```bash
# Prisma rollback
npx prisma migrate reset
npx prisma migrate deploy
```

## 📊 Maintenance

### Regular Tasks
- Update dependencies
- Monitor performance
- Check security advisories
- Review analytics
- Update documentation

### Scheduled Maintenance
- Database optimization
- Cache clearing
- Log rotation
- Backup verification

---

## 🆘 Troubleshooting

### Common Issues

#### Build Failures
- Check Node.js version (18+ required)
- Verify environment variables
- Clear node_modules and reinstall
- Check for syntax errors

#### Database Issues
- Verify connection string
- Check migration status
- Review query performance
- Monitor connection pool

#### Performance Issues
- Analyze bundle size
- Check image optimization
- Review caching strategy
- Monitor API response times

#### Authentication Issues
- Verify API keys
- Check callback URLs
- Review session configuration
- Test phone number format

### Debug Mode
Enable debug logging:
```bash
DEBUG=* npm run dev
```

### Health Checks
Monitor application health:
```bash
curl https://your-domain.com/api/health
```

---

For additional support, contact: support@nepalikishan.com
