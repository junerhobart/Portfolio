// Configuration file for JK Inc. - Creative Development Studio
// Modify these settings to customize your portfolio easily!

const PORTFOLIO_CONFIG = {
    // Brand Configuration
    brand: {
        name: "JK Inc.",
        tagline: "Creative Development Studio",
        logo: "", // Add your logo URL here
        favicon: "", // Add your favicon URL here
        emoji: "⚡" // Add your brand emoji
    },

    // Team Members - Easy to customize with profile pictures
    team: {
        members: [
            {
                name: "June",
                role: "Creative Director & Roblox Scripter",
                avatar: "https://cdn.discordapp.com/avatars/1131239669225488476/cbde418b9ecd374f317e1ed81ed54ad0?size=1024", // Add your profile picture here
                skills: ["Luau", "Game Design", "Web Development", "Discord Bots", "Frontend"],
                bio: "Specialized in Roblox game development with expertise in Lua scripting, game mechanics, and user experience design.",
                social: {
                    roblox: "https://www.roblox.com/users/7150123636/profile", // Your Roblox profile
                    discord: "https://discordapp.com/users/1131239669225488476" // Your Discord profile
                }
            },
            {
                name: "Kaison",
                role: "Technical Lead & Web Developer",
                avatar: "https://cdn.discordapp.com/avatars/1278537947976700026/a_d4c6e952dc852f7ad4b6a94860913e2d?size=1024", // Add your profile picture here
                skills: ["Luau", "Backend", "Web Development", "Discord Bots", "Frontend"],
                bio: "Full-stack developer with expertise in modern web technologies, backend architecture, and scalable application development.",
                social: {
                    roblox: "https://www.roblox.com/users/378626111/profile", // Your Roblox profile
                    discord: "https://discordapp.com/users/1278537947976700026" // Your Discord profile
                }
            }
        ]
    },

            // Portfolio Database - Sections only appear if they have projects
        portfolio: {
            // Roblox Scripting Projects - Easy to add your scripts
            roblox: [
                {
                    title: "Example Roblox Script",
                    description: "A sample Roblox scripting project",
                    category: "Example",
                    image: "assets/scripts/example.jpg",
                    robloxUrl: "https://www.roblox.com/communities/34728000/Mauve-Games#!/about",
                    lines: "1K+",
                    performance: "90%",
                    features: ["Example Feature 1", "Example Feature 2", "Example Feature 3"],
                    status: "inactive" // Set to "active" when you have real projects
                }
            ],

            // Web Development Projects
            web: [
                {
                    title: "Example Web Project",
                    description: "A sample web development project",
                    category: "Example",
                    image: "assets/web/example.jpg",
                    liveUrl: "https://example.com",
                    githubUrl: "https://github.com/example",
                    technologies: ["HTML", "CSS", "JavaScript"],
                    features: ["Example Feature 1", "Example Feature 2", "Example Feature 3"],
                    status: "inactive" // Set to "active" when you have real projects
                }
            ],

            // Discord Bots
            discord: [
                {
                    name: "Example Discord Bot",
                    description: "A sample Discord bot project",
                    category: "Example",
                    icon: "fas fa-robot",
                    inviteUrl: "https://discord.com/api/oauth2/authorize?client_id=example&permissions=8&scope=bot",
                    features: ["Example Feature 1", "Example Feature 2", "Example Feature 3"],
                    commands: ["!example1", "!example2", "!example3"],
                    servers: "0",
                    status: "inactive" // Set to "active" when you have real projects
                }
            ]
        },

    // Contact Information - Focused on Discord Support
    contact: {
        email: "hello@jkinc.dev",
        discord: {
            june: "https://discordapp.com/users/1131239669225488476",
            kaison: "https://discordapp.com/users/1278537947976700026",
            support: "https://discord.gg/4vBxaNBCyv" // Your Discord support server
        },
        roblox: {
            june: "kizznall",
            kaison: "woodskai001"
        },
        social: {
            roblox: "https://www.roblox.com/communities/34728000/Mauve-Games#!/about", // Your Roblox group
            discord: "https://discord.gg/4vBxaNBCyv" // Your Discord server
        }
    },

    // Theme Configuration - Dark and Simple with Personality
    theme: {
        colors: {
            primary: "#ffffff",
            secondary: "#cccccc",
            accent: "#888888",
            background: "#0a0a0a",
            card: "#1e1e1e",
            border: "#333333",
            // Accent colors for personality
            blue: "#4a9eff",
            purple: "#a855f7",
            green: "#10b981",
            orange: "#f59e0b"
        },
        darkMode: {
            enabled: true,
            default: true
        },
        animations: {
            enabled: true,
            duration: 300,
            easing: "ease-out"
        }
    },

    // Animation Settings
    animations: {
        enabled: true,
        duration: 600,
        easing: "ease-out",
        stagger: 100,
        scrollAnimations: true,
        hoverEffects: true
    },

    // SEO Configuration
    seo: {
        title: "JK Inc. - Creative Development Studio",
        description: "Professional development studio specializing in Roblox scripting, web applications, and Discord bots. Building exceptional digital experiences with technical excellence.",
        keywords: ["jk inc", "roblox", "lua scripting", "web development", "discord bots", "creative studio"],
        author: "JK Inc.",
        ogImage: "", // Add Open Graph image URL
        twitterCard: "summary_large_image"
    },

    // Analytics
    analytics: {
        googleAnalytics: "", // Add Google Analytics ID
        googleTagManager: "", // Add Google Tag Manager ID
        hotjar: "" // Add Hotjar ID
    },

    // Form Configuration
    form: {
        enabled: false, // Contact form disabled
        emailService: "formspree", // Options: formspree, netlify, custom
        formspreeId: "", // Add Formspree form ID
        netlifyForm: false,
        customEndpoint: "", // Add custom form endpoint
        fields: {
            name: { required: true, minLength: 2 },
            email: { required: true, type: "email" },
            service: { required: true, type: "select" },
            message: { required: true, minLength: 10 }
        },
        services: [
            "Roblox Scripting",
            "Web Development", 
            "Discord Bot",
            "Other"
        ]
    },

    // Performance Settings
    performance: {
        lazyLoading: true,
        imageOptimization: true,
        minifyCSS: true,
        minifyJS: true,
        cacheControl: true
    },

    // Custom Content
    customContent: {
        aboutText: "We're a professional development studio specializing in Roblox scripting, web development, and Discord bot creation. Our expertise combines technical precision with innovative design to deliver exceptional digital solutions.",
        heroSubtitle: "Creative Development Studio",
        footerText: "Building exceptional digital experiences",
        // Professional content styling
        personality: {
            emoji: "⚡",
            catchphrase: "Building exceptional digital experiences",
            mood: "professional and innovative"
        }
    },

    // Portfolio Management System
    portfolioManager: {
        // Get active projects for a specific category
        getActiveProjects: function(category) {
            if (!this.portfolio || !this.portfolio[category]) {
                return [];
            }
            return this.portfolio[category].filter(project => project.status === 'active');
        },

        // Check if a section should be shown (has active projects)
        shouldShowSection: function(category) {
            const activeProjects = this.getActiveProjects(category);
            return activeProjects.length > 0;
        },

        // Get all visible sections (sections with active projects)
        getVisibleSections: function() {
            const categories = ['roblox', 'web', 'discord'];
            return categories.filter(category => this.shouldShowSection(category));
        },

        // Add a new project to a category
        addProject: function(category, project) {
            if (!this.portfolio[category]) {
                this.portfolio[category] = [];
            }
            this.portfolio[category].push(project);
            this.updatePortfolio();
        },

        // Remove a project from a category
        removeProject: function(category, projectTitle) {
            if (this.portfolio[category]) {
                this.portfolio[category] = this.portfolio[category].filter(
                    project => project.title !== projectTitle && project.name !== projectTitle
                );
                this.updatePortfolio();
            }
        },

        // Update project status (active, inactive, coming-soon)
        updateProjectStatus: function(category, projectTitle, newStatus) {
            if (this.portfolio[category]) {
                const project = this.portfolio[category].find(
                    p => p.title === projectTitle || p.name === projectTitle
                );
                if (project) {
                    project.status = newStatus;
                    this.updatePortfolio();
                }
            }
        },

        // Update portfolio and trigger re-render
        updatePortfolio: function() {
            console.log('Portfolio updated:', this.portfolio);
            this.renderPortfolio();
        },

        // Render portfolio sections based on active projects
        renderPortfolio: function() {
            const visibleSections = this.getVisibleSections();
            this.updateNavigation(visibleSections);
            this.toggleSections(visibleSections);
        },

        // Update navigation to show/hide section links
        updateNavigation: function(visibleSections) {
            const navLinks = document.querySelectorAll('nav a[href^="#"]');
            navLinks.forEach(link => {
                const section = link.getAttribute('href').substring(1);
                if (['roblox', 'web', 'discord'].includes(section)) {
                    if (visibleSections.includes(section)) {
                        link.style.display = 'block';
                    } else {
                        link.style.display = 'none';
                    }
                }
            });
        },

        // Toggle section visibility
        toggleSections: function(visibleSections) {
            const sections = document.querySelectorAll('#roblox, #web, #discord');
            sections.forEach(section => {
                const sectionId = section.id;
                if (visibleSections.includes(sectionId)) {
                    section.style.display = 'block';
                } else {
                    section.style.display = 'none';
                }
            });
        }
    }
};

// Helper functions for easy customization
const PortfolioHelpers = {
    // Add a new Roblox script
    addRobloxScript: function(title, description, category, robloxUrl, image = "") {
        const script = {
            title,
            description,
            category,
            robloxUrl,
            image,
            lines: "0",
            performance: "0%",
            features: [],
            status: "active"
        };
        PORTFOLIO_CONFIG.portfolioManager.addProject('roblox', script);
    },

    // Add a new web project
    addWebProject: function(title, description, category, liveUrl, githubUrl = "", image = "") {
        const project = {
            title,
            description,
            category,
            liveUrl,
            githubUrl,
            image,
            technologies: [],
            features: [],
            status: "active"
        };
        PORTFOLIO_CONFIG.portfolioManager.addProject('web', project);
    },

    // Add a new Discord bot
    addDiscordBot: function(name, description, category, inviteUrl, features = []) {
        const bot = {
            name,
            description,
            category,
            inviteUrl,
            features,
            commands: [],
            servers: "0+",
            status: "active"
        };
        PORTFOLIO_CONFIG.portfolioManager.addProject('discord', bot);
    },

    // Remove a project
    removeProject: function(category, projectTitle) {
        PORTFOLIO_CONFIG.portfolioManager.removeProject(category, projectTitle);
    },

    // Hide a project (set status to inactive)
    hideProject: function(category, projectTitle) {
        PORTFOLIO_CONFIG.portfolioManager.updateProjectStatus(category, projectTitle, 'inactive');
    },

    // Show a project (set status to active)
    showProject: function(category, projectTitle) {
        PORTFOLIO_CONFIG.portfolioManager.updateProjectStatus(category, projectTitle, 'active');
    },

    // Get all active projects
    getActiveProjects: function(category) {
        return PORTFOLIO_CONFIG.portfolioManager.getActiveProjects(category);
    },

    // Check if section should be shown
    shouldShowSection: function(category) {
        return PORTFOLIO_CONFIG.portfolioManager.shouldShowSection(category);
    },

    // Update profile picture
    updateAvatar: function(memberName, avatarUrl) {
        const member = PORTFOLIO_CONFIG.team.members.find(m => m.name === memberName);
        if (member) {
            member.avatar = avatarUrl;
            console.log("Avatar updated!");
        }
    },

    // Update social links
    updateSocial: function(memberName, socialLinks) {
        const member = PORTFOLIO_CONFIG.team.members.find(m => m.name === memberName);
        if (member) {
            member.social = socialLinks;
            console.log("Social links updated!");
        }
    },

    // Quick Discord support setup
    setupDiscordSupport: function(supportServerUrl) {
        PORTFOLIO_CONFIG.contact.discord.support = supportServerUrl;
        console.log("Discord support server updated!");
    },

    // Quick theme customization
    updateTheme: function(newColors) {
        Object.assign(PORTFOLIO_CONFIG.theme.colors, newColors);
        console.log("Theme colors updated!");
    },

    // Quick content updates
    updateContent: function(newContent) {
        Object.assign(PORTFOLIO_CONFIG.customContent, newContent);
        console.log("Content updated!");
    },

    // Initialize portfolio
    initPortfolio: function() {
        PORTFOLIO_CONFIG.portfolioManager.renderPortfolio();
    }
};

// Export configuration and helpers
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PORTFOLIO_CONFIG, PortfolioHelpers };
} else {
    window.PORTFOLIO_CONFIG = PORTFOLIO_CONFIG;
    window.PortfolioHelpers = PortfolioHelpers;
    
    // Initialize portfolio when DOM is loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            PortfolioHelpers.initPortfolio();
        });
    } else {
        PortfolioHelpers.initPortfolio();
    }
}
