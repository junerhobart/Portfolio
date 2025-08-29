# Quick Setup Guide - June & Kaison Inc. Roblox Portfolio

## 🚀 Quick Start

1. **Add Your Profile Pictures**
   - Create an `assets` folder
   - Add your profile pictures as:
     - `assets/june-avatar.jpg`
     - `assets/kaison-avatar.jpg`
   - Or update the paths in `config.js`

2. **Add Your Roblox Games**
   - Edit `config.js` → `robloxGames` array
   - Add your game screenshots to `assets/games/`
   - Update Roblox game URLs

3. **Add Your Projects**
   - Edit `config.js` → `webProjects` array
   - Edit `config.js` → `discordBots` array
   - Add project screenshots to `assets/web/`

4. **Update Contact Info**
   - Edit `config.js` → `contact` section
   - Add your real Discord usernames
   - Add your Roblox usernames

## 📁 File Structure

```
📁 Portfolio/
├── 📄 index.html              # Main website
├── 📁 css/                    # Styles
├── 📁 js/                     # JavaScript
├── 📄 config.js               # Easy customization
├── 📁 assets/                 # Your images
│   ├── 📄 june-avatar.jpg     # June's profile picture
│   ├── 📄 kaison-avatar.jpg   # Kaison's profile picture
│   ├── 📁 games/              # Game screenshots
│   └── 📁 web/                # Project screenshots
└── 📄 SETUP.md                # This guide
```

## 🎮 Adding Roblox Games

### Method 1: Edit config.js directly
```javascript
// In config.js, find robloxGames array and add:
{
    title: "Your Game Name",
    description: "Your game description",
    category: "RPG", // or "Tycoon", "Horror", etc.
    image: "assets/games/your-game.jpg",
    robloxUrl: "https://www.roblox.com/games/your-game-id",
    visits: "5K+",
    likes: "97%",
    features: ["Feature 1", "Feature 2", "Feature 3"]
}
```

### Method 2: Use helper function
```javascript
// In browser console or your script:
PortfolioHelpers.addGame(
    "Your Game Name",
    "Your game description", 
    "RPG",
    "https://www.roblox.com/games/your-game-id",
    "assets/games/your-game.jpg"
);
```

## 🌐 Adding Web Projects

### Method 1: Edit config.js directly
```javascript
// In config.js, find webProjects array and add:
{
    title: "Your Project",
    description: "Project description",
    category: "E-commerce",
    image: "assets/web/your-project.jpg",
    liveUrl: "https://your-site.com",
    githubUrl: "https://github.com/your-repo",
    technologies: ["React", "Node.js"],
    features: ["Feature 1", "Feature 2"]
}
```

### Method 2: Use helper function
```javascript
PortfolioHelpers.addWebProject(
    "Your Project",
    "Project description",
    "E-commerce",
    "https://your-site.com",
    "https://github.com/your-repo",
    "assets/web/your-project.jpg"
);
```

## 🤖 Adding Discord Bots

### Method 1: Edit config.js directly
```javascript
// In config.js, find discordBots array and add:
{
    name: "Your Bot Name",
    description: "Bot description",
    category: "Moderation",
    icon: "fas fa-shield-alt",
    inviteUrl: "https://discord.com/api/oauth2/authorize?client_id=your-bot-id&permissions=8&scope=bot",
    features: ["Feature 1", "Feature 2"],
    commands: ["!command1", "!command2"],
    servers: "100+"
}
```

### Method 2: Use helper function
```javascript
PortfolioHelpers.addDiscordBot(
    "Your Bot Name",
    "Bot description",
    "Moderation",
    "https://discord.com/api/oauth2/authorize?client_id=your-bot-id&permissions=8&scope=bot",
    ["Feature 1", "Feature 2"]
);
```

## 👤 Updating Profile Information

### Update Profile Picture
```javascript
PortfolioHelpers.updateAvatar("June", "assets/june-new-avatar.jpg");
PortfolioHelpers.updateAvatar("Kaison", "assets/kaison-new-avatar.jpg");
```

### Update Social Links
```javascript
PortfolioHelpers.updateSocial("June", {
    roblox: "https://www.roblox.com/users/your-id/profile",
    discord: "June#1234",
    github: "https://github.com/your-github",
    twitter: "https://twitter.com/your-twitter"
});
```

## 🎨 Customizing Colors

Edit the theme colors in `config.js`:
```javascript
theme: {
    colors: {
        primary: "#ffffff",      // Main text color
        secondary: "#cccccc",    // Secondary text
        accent: "#888888",       // Accent color
        background: "#0a0a0a",   // Background color
        card: "#1e1e1e",         // Card background
        border: "#333333"        // Border color
    }
}
```

## 📧 Setting Up Contact Form

### Option 1: Formspree (Recommended)
1. Go to [Formspree](https://formspree.io)
2. Create a new form
3. Copy your form ID
4. Add to `config.js`:
```javascript
form: {
    emailService: "formspree",
    formspreeId: "your-form-id-here"
}
```

### Option 2: Netlify Forms
1. Add `netlify` attribute to form in `index.html`
2. Update `config.js`:
```javascript
form: {
    emailService: "netlify",
    netlifyForm: true
}
```

## 🚀 Deployment

### GitHub Pages
1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Select "Deploy from a branch"
4. Choose "main" branch and "/ (root)"
5. Your site will be live at `https://yourusername.github.io/your-repo-name`

### Netlify
1. Go to [Netlify](https://netlify.com)
2. Drag and drop your folder
3. Your site is live instantly

## 📱 Adding Images

### Profile Pictures
- Recommended size: 200x200px
- Format: JPG or PNG
- Place in: `assets/june-avatar.jpg` and `assets/kaison-avatar.jpg`

### Game Screenshots
- Recommended size: 400x300px
- Format: JPG or PNG
- Place in: `assets/games/your-game-name.jpg`

### Project Screenshots
- Recommended size: 400x300px
- Format: JPG or PNG
- Place in: `assets/web/your-project-name.jpg`

## 🔧 Quick Customization Checklist

- [ ] Add profile pictures to `assets/` folder
- [ ] Update team member info in `config.js`
- [ ] Add your Roblox games to `robloxGames` array
- [ ] Add your web projects to `webProjects` array
- [ ] Add your Discord bots to `discordBots` array
- [ ] Update contact information
- [ ] Update social media links
- [ ] Set up contact form (Formspree or Netlify)
- [ ] Test the website locally
- [ ] Deploy to GitHub Pages or Netlify

## 🎯 Example: Adding a New Roblox Game

1. **Add the game to config.js:**
```javascript
{
    title: "Dragon Quest RPG",
    description: "Epic dragon hunting adventure",
    category: "RPG",
    image: "assets/games/dragon-quest.jpg",
    robloxUrl: "https://www.roblox.com/games/1234567890/Dragon-Quest",
    visits: "50K+",
    likes: "99%",
    features: ["Dragon Hunting", "Character Classes", "Guild System"]
}
```

2. **Add the screenshot:**
   - Save your game screenshot as `assets/games/dragon-quest.jpg`
   - Make sure it's 400x300px for best display

3. **The game will automatically appear on your website!**

## 🆘 Need Help?

- Check the browser console for errors
- Make sure all image paths are correct
- Verify your Roblox game URLs work
- Test the contact form before deploying

## 🎨 Theme Customization

The website uses a dark, simple theme perfect for Roblox developers. If you want to change colors:

1. Edit the CSS variables in `css/main.css`
2. Or update the theme colors in `config.js`
3. The website will automatically update with your changes

That's it! Your Roblox portfolio is ready to showcase your amazing games and projects! 🎮✨
