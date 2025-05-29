# Deployment Guide - Nuvem Labs Website

## 🚀 Recommended: Vercel (Free Hosting)

### Why Vercel?
- ✅ **Zero configuration** for React/Vite projects
- ✅ **Free custom domain** support (nuvemlabs.co.nz)
- ✅ **Auto-deployment** from GitHub commits
- ✅ **Global CDN** for fast performance
- ✅ **Free SSL** certificates
- ✅ **Preview deployments** for branches

### 📋 Deployment Steps

#### 1. Deploy to Vercel
1. Visit [vercel.com](https://vercel.com)
2. Sign up/login with your GitHub account
3. Click "New Project"
4. Import `danielpmo1371/nuvemlabs.site` repository
5. Vercel will auto-detect Vite settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Click "Deploy"

#### 2. Add Custom Domain
1. In Vercel dashboard → Go to your project
2. Settings → Domains
3. Add domains:
   - `nuvemlabs.co.nz`
   - `www.nuvemlabs.co.nz`

#### 3. Configure DNS at Domain Registrar
Update your DNS settings for `nuvemlabs.co.nz`:

```
Type    Name    Value
A       @       76.76.19.61
CNAME   www     cname.vercel-dns.com
```

#### 4. Verify Deployment
- ✅ Visit https://nuvemlabs.co.nz
- ✅ Check SSL certificate is active
- ✅ Test all pages and functionality

---

## 🥈 Alternative: Netlify

### Netlify Setup
1. Visit [netlify.com](https://netlify.com)
2. Connect GitHub account
3. Import `danielpmo1371/nuvemlabs.site`
4. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Add custom domain in Site Settings

### Netlify DNS Configuration
```
Type    Name    Value
A       @       75.2.60.5
CNAME   www     [your-site-name].netlify.app
```

---

## 🛠️ Build Verification

The project builds successfully with:
- **Build size**: ~326KB JS, ~70KB CSS
- **Build time**: ~1.7 seconds
- **Output**: Static files in `dist/` directory

### Local Testing
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📊 Performance Optimization

The website is already optimized with:
- ✅ Vite build optimization
- ✅ Code splitting
- ✅ CSS optimization
- ✅ Tree shaking
- ✅ Modern browser targets

### Additional Recommendations
- [ ] Add `robots.txt` (already included)
- [ ] Configure Open Graph meta tags
- [ ] Add favicon (already included)
- [ ] Set up analytics (Google Analytics/Plausible)

---

## 🔄 Continuous Deployment

Both Vercel and Netlify offer automatic deployments:
- **Main branch** → Production deployment
- **Feature branches** → Preview deployments
- **Pull requests** → Preview links in GitHub

This means every git push automatically updates your live website!

---

## 💰 Cost Analysis

### Vercel Free Tier
- ✅ 100GB bandwidth/month
- ✅ Unlimited personal projects
- ✅ Custom domains
- ✅ SSL certificates
- ✅ Global CDN

### Netlify Free Tier  
- ✅ 100GB bandwidth/month
- ✅ 300 build minutes/month
- ✅ Custom domains
- ✅ SSL certificates
- ✅ Form handling (100 submissions/month)

Both are excellent free options for your website! 