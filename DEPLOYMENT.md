# Deployment Guide for June & Kaison Inc. Portfolio

## GitHub Pages Deployment

### Method 1: Automatic Deployment (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial portfolio website"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click on "Settings"
   - Scroll down to "Pages" section
   - Under "Source", select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

3. **Your site will be available at:**
   `https://yourusername.github.io/your-repo-name`

### Method 2: Using GitHub Actions

1. **Create `.github/workflows/deploy.yml`**
   ```yaml
   name: Deploy to GitHub Pages
   
   on:
     push:
       branches: [ main ]
   
   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
       - uses: actions/checkout@v2
       
       - name: Deploy to GitHub Pages
         uses: peaceiris/actions-gh-pages@v3
         with:
           github_token: ${{ secrets.GITHUB_TOKEN }}
           publish_dir: ./
   ```

## Netlify Deployment

1. **Connect to GitHub**
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Choose GitHub and select your repository

2. **Configure Build Settings**
   - Build command: (leave empty for static site)
   - Publish directory: `/` (root)

3. **Deploy**
   - Click "Deploy site"
   - Your site will be live with a Netlify subdomain

## Vercel Deployment

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow the prompts**
   - Link to existing project or create new
   - Your site will be deployed instantly

## Custom Domain Setup

### GitHub Pages
1. Go to repository Settings > Pages
2. Add your custom domain in "Custom domain" field
3. Create a `CNAME` file in your repository root with your domain
4. Update your DNS settings to point to GitHub Pages

### Netlify
1. Go to Site settings > Domain management
2. Click "Add custom domain"
3. Follow the DNS configuration instructions

## Environment Variables

Create a `.env` file for sensitive data:
```env
FORMSPREE_ID=your_formspree_id
GOOGLE_ANALYTICS_ID=your_ga_id
```

## Performance Optimization

### Before Deployment
1. **Optimize Images**
   - Use WebP format where possible
   - Compress images using tools like TinyPNG
   - Implement lazy loading

2. **Minify Assets**
   ```bash
   # Install minification tools
   npm install -g clean-css-cli uglify-js
   
   # Minify CSS
   cleancss -o css/main.min.css css/main.css
   
   # Minify JS
   uglifyjs js/main.js -o js/main.min.js
   ```

3. **Enable Compression**
   - Most hosting platforms enable gzip automatically
   - For custom servers, configure gzip compression

## SEO Optimization

1. **Update Meta Tags**
   - Edit `index.html` meta tags
   - Add Open Graph tags
   - Add Twitter Card tags

2. **Create sitemap.xml**
   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://yourdomain.com/</loc>
       <lastmod>2024-01-01</lastmod>
       <changefreq>monthly</changefreq>
       <priority>1.0</priority>
     </url>
   </urlset>
   ```

3. **Add robots.txt**
   ```
   User-agent: *
   Allow: /
   Sitemap: https://yourdomain.com/sitemap.xml
   ```

## Analytics Setup

### Google Analytics
1. Create a Google Analytics account
2. Get your tracking ID
3. Add to `config.js`:
   ```javascript
   analytics: {
     googleAnalytics: "GA_MEASUREMENT_ID"
   }
   ```

### Google Search Console
1. Add your site to Google Search Console
2. Verify ownership (usually via HTML file or meta tag)
3. Submit your sitemap

## Form Handling

### Formspree
1. Sign up at [Formspree](https://formspree.io)
2. Create a new form
3. Get your form ID
4. Update `config.js`:
   ```javascript
   form: {
     emailService: "formspree",
     formspreeId: "your_form_id"
   }
   ```

### Netlify Forms
1. Add `netlify` attribute to your form
2. Update `config.js`:
   ```javascript
   form: {
     emailService: "netlify",
     netlifyForm: true
   }
   ```

## Security

1. **HTTPS**
   - Most platforms provide SSL certificates automatically
   - Ensure your site redirects HTTP to HTTPS

2. **Content Security Policy**
   Add to your HTML head:
   ```html
   <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com;">
   ```

## Monitoring

1. **Uptime Monitoring**
   - Set up monitoring with services like UptimeRobot
   - Monitor your site's availability

2. **Performance Monitoring**
   - Use Google PageSpeed Insights
   - Monitor Core Web Vitals
   - Set up alerts for performance issues

## Troubleshooting

### Common Issues

1. **Images not loading**
   - Check file paths
   - Ensure images are committed to repository
   - Verify image URLs in config

2. **Forms not working**
   - Check form service configuration
   - Verify API keys and endpoints
   - Test form submission

3. **Styling issues**
   - Clear browser cache
   - Check CSS file paths
   - Verify CSS is being loaded

4. **JavaScript errors**
   - Check browser console for errors
   - Verify script file paths
   - Test JavaScript functionality

### Support

For issues specific to this portfolio template:
- Check the configuration in `config.js`
- Review the documentation in code comments
- Test locally before deploying

## Maintenance

1. **Regular Updates**
   - Keep dependencies updated
   - Monitor for security vulnerabilities
   - Update content regularly

2. **Backup**
   - Keep local backups of your site
   - Use version control (Git) for tracking changes
   - Backup any custom configurations

3. **Performance Monitoring**
   - Regularly check site performance
   - Monitor loading times
   - Optimize based on analytics data
