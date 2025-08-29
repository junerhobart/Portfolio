// Portfolio Management System
// Handles dynamic rendering of portfolio sections based on available projects

class PortfolioRenderer {
    constructor() {
        this.config = window.PORTFOLIO_CONFIG;
        this.helpers = window.PortfolioHelpers;
        this.init();
    }

    init() {
        this.renderPortfolio();
        this.setupEventListeners();
    }

    renderPortfolio() {
        const visibleSections = this.config.portfolioManager.getVisibleSections();
        console.log("Rendering portfolio with visible sections:", visibleSections);
        
        this.updateNavigation(visibleSections);
        this.toggleSections(visibleSections);
        this.renderProjects();
    }

    updateNavigation(visibleSections) {
        const navMenu = document.querySelector('.nav-menu');
        if (navMenu) {
            const navItems = navMenu.querySelectorAll('li');
            navItems.forEach(item => {
                const link = item.querySelector('a');
                if (link) {
                    const href = link.getAttribute('href');
                    if (href === '#roblox' && !visibleSections.includes('roblox')) {
                        item.style.display = 'none';
                    } else if (href === '#web' && !visibleSections.includes('web')) {
                        item.style.display = 'none';
                    } else if (href === '#discord' && !visibleSections.includes('discord')) {
                        item.style.display = 'none';
                    } else {
                        item.style.display = 'block';
                    }
                }
            });
        }
    }

    toggleSections(visibleSections) {
        const sections = {
            'roblox': document.querySelector('#roblox'),
            'web': document.querySelector('#web'),
            'discord': document.querySelector('#discord')
        };

        Object.keys(sections).forEach(sectionKey => {
            const section = sections[sectionKey];
            if (section) {
                if (visibleSections.includes(sectionKey)) {
                    section.style.display = 'block';
                } else {
                    section.style.display = 'none';
                }
            }
        });
    }

    renderProjects() {
        // Render Roblox projects
        this.renderRobloxProjects();
        
        // Render Web projects
        this.renderWebProjects();
        
        // Render Discord projects
        this.renderDiscordProjects();
    }

    renderRobloxProjects() {
        const robloxSection = document.querySelector('#roblox .roblox-grid');
        if (!robloxSection) return;

        const activeProjects = this.config.portfolioManager.getActiveProjects('roblox');
        
        if (activeProjects.length === 0) {
            robloxSection.innerHTML = '<p class="no-projects">No Roblox projects available at the moment.</p>';
            return;
        }

        robloxSection.innerHTML = activeProjects.map(project => `
            <div class="roblox-item" data-category="${project.category}">
                <div class="roblox-image">
                    <div class="placeholder-image">
                        <i class="fas fa-code"></i>
                    </div>
                </div>
                <div class="roblox-overlay">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="roblox-stats">
                        <span class="stat">Lines: ${project.lines}</span>
                        <span class="stat">Performance: ${project.performance}</span>
                    </div>
                    <div class="roblox-links">
                        <a href="${project.robloxUrl}" class="roblox-link" target="_blank">
                            <i class="fas fa-external-link-alt"></i>
                            View Scripts
                        </a>
                    </div>
                </div>
            </div>
        `).join('');
    }

    renderWebProjects() {
        const webSection = document.querySelector('#web .web-grid');
        if (!webSection) return;

        const activeProjects = this.config.portfolioManager.getActiveProjects('web');
        
        if (activeProjects.length === 0) {
            webSection.innerHTML = '<p class="no-projects">No web projects available at the moment.</p>';
            return;
        }

        webSection.innerHTML = activeProjects.map(project => `
            <div class="web-item" data-category="${project.category}">
                <div class="web-image">
                    <div class="placeholder-image">
                        <i class="fas fa-globe"></i>
                    </div>
                </div>
                <div class="web-overlay">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                </div>
            </div>
        `).join('');
    }

    renderDiscordProjects() {
        const discordSection = document.querySelector('#discord .discord-grid');
        if (!discordSection) return;

        const activeProjects = this.config.portfolioManager.getActiveProjects('discord');
        
        if (activeProjects.length === 0) {
            discordSection.innerHTML = '<p class="no-projects">No Discord bots available at the moment.</p>';
            return;
        }

        discordSection.innerHTML = activeProjects.map(project => `
            <div class="discord-item" data-category="${project.category}">
                <div class="discord-icon">
                    <i class="fab fa-discord"></i>
                </div>
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <div class="discord-features">
                    ${project.features.map(feature => `<span class="feature">${feature}</span>`).join('')}
                </div>
                <div class="discord-links">
                    <a href="${project.inviteUrl}" class="discord-link">
                        <i class="fas fa-plus"></i>
                        Add to Server
                    </a>
                </div>
            </div>
        `).join('');
    }

    setupEventListeners() {
        // Add event listeners for dynamic updates
        window.addEventListener('portfolio-updated', () => {
            this.renderPortfolio();
        });
    }
}

// Initialize portfolio renderer when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        new PortfolioRenderer();
    });
} else {
    new PortfolioRenderer();
}

// Global helper functions for easy portfolio management
window.PortfolioManager = {
    // Add a new project
    addProject: function(category, project) {
        PORTFOLIO_CONFIG.portfolioManager.addProject(category, project);
        window.dispatchEvent(new Event('portfolio-updated'));
    },

    // Remove a project
    removeProject: function(category, projectTitle) {
        PORTFOLIO_CONFIG.portfolioManager.removeProject(category, projectTitle);
        window.dispatchEvent(new Event('portfolio-updated'));
    },

    // Hide a project
    hideProject: function(category, projectTitle) {
        PORTFOLIO_CONFIG.portfolioManager.updateProjectStatus(category, projectTitle, 'inactive');
        window.dispatchEvent(new Event('portfolio-updated'));
    },

    // Show a project
    showProject: function(category, projectTitle) {
        PORTFOLIO_CONFIG.portfolioManager.updateProjectStatus(category, projectTitle, 'active');
        window.dispatchEvent(new Event('portfolio-updated'));
    },

    // Get active projects
    getActiveProjects: function(category) {
        return PORTFOLIO_CONFIG.portfolioManager.getActiveProjects(category);
    },

    // Check if section should be shown
    shouldShowSection: function(category) {
        return PORTFOLIO_CONFIG.portfolioManager.shouldShowSection(category);
    },

    // Refresh portfolio
    refresh: function() {
        window.dispatchEvent(new Event('portfolio-updated'));
    }
};
