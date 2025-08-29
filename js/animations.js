// Animations JavaScript for June & Kaison Inc. Portfolio

// Animation Controller
class AnimationController {
    constructor() {
        this.animations = new Map();
        this.observers = new Map();
        this.init();
    }

    init() {
        this.setupScrollAnimations();
        this.setupParallaxEffects();
        this.setupMouseEffects();
        this.setupLoadingAnimations();
        this.setupTextAnimations();
    }

    // Scroll-based animations
    setupScrollAnimations() {
        const animatedElements = document.querySelectorAll('[data-animate]');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const animation = entry.target.getAttribute('data-animate');
                    const delay = entry.target.getAttribute('data-delay') || 0;
                    
                    setTimeout(() => {
                        this.playAnimation(entry.target, animation);
                    }, delay);
                    
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        animatedElements.forEach(el => observer.observe(el));
    }

    // Parallax effects
    setupParallaxEffects() {
        const parallaxElements = document.querySelectorAll('[data-parallax]');
        
        const handleParallax = () => {
            const scrolled = window.pageYOffset;
            
            parallaxElements.forEach(element => {
                const speed = element.getAttribute('data-parallax') || 0.5;
                const yPos = -(scrolled * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });
        };

        window.addEventListener('scroll', this.throttle(handleParallax, 16));
    }

    // Mouse interaction effects
    setupMouseEffects() {
        const interactiveElements = document.querySelectorAll('[data-mouse-effect]');
        
        interactiveElements.forEach(element => {
            element.addEventListener('mousemove', (e) => {
                this.handleMouseMove(e, element);
            });
            
            element.addEventListener('mouseleave', () => {
                this.handleMouseLeave(element);
            });
        });
    }

    // Loading animations
    setupLoadingAnimations() {
        const loadingElements = document.querySelectorAll('[data-loading]');
        
        loadingElements.forEach(element => {
            const loadingType = element.getAttribute('data-loading');
            this.createLoadingAnimation(element, loadingType);
        });
    }

    // Text animations
    setupTextAnimations() {
        const textElements = document.querySelectorAll('[data-text-animate]');
        
        textElements.forEach(element => {
            const animationType = element.getAttribute('data-text-animate');
            this.animateText(element, animationType);
        });
    }

    // Play specific animation
    playAnimation(element, animationType) {
        const animations = {
            'fade-in': () => this.fadeIn(element),
            'fade-in-up': () => this.fadeInUp(element),
            'fade-in-down': () => this.fadeInDown(element),
            'fade-in-left': () => this.fadeInLeft(element),
            'fade-in-right': () => this.fadeInRight(element),
            'scale-in': () => this.scaleIn(element),
            'bounce-in': () => this.bounceIn(element),
            'slide-in-up': () => this.slideInUp(element),
            'slide-in-down': () => this.slideInDown(element),
            'slide-in-left': () => this.slideInLeft(element),
            'slide-in-right': () => this.slideInRight(element),
            'rotate-in': () => this.rotateIn(element),
            'flip-in': () => this.flipIn(element)
        };

        if (animations[animationType]) {
            animations[animationType]();
        }
    }

    // Individual animation methods
    fadeIn(element) {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        
        requestAnimationFrame(() => {
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        });
    }

    fadeInUp(element) {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        
        requestAnimationFrame(() => {
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        });
    }

    fadeInDown(element) {
        element.style.opacity = '0';
        element.style.transform = 'translateY(-30px)';
        
        requestAnimationFrame(() => {
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        });
    }

    fadeInLeft(element) {
        element.style.opacity = '0';
        element.style.transform = 'translateX(-30px)';
        
        requestAnimationFrame(() => {
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateX(0)';
        });
    }

    fadeInRight(element) {
        element.style.opacity = '0';
        element.style.transform = 'translateX(30px)';
        
        requestAnimationFrame(() => {
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateX(0)';
        });
    }

    scaleIn(element) {
        element.style.opacity = '0';
        element.style.transform = 'scale(0.8)';
        
        requestAnimationFrame(() => {
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            element.style.opacity = '1';
            element.style.transform = 'scale(1)';
        });
    }

    bounceIn(element) {
        element.style.opacity = '0';
        element.style.transform = 'scale(0.3)';
        
        requestAnimationFrame(() => {
            element.style.transition = 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
            element.style.opacity = '1';
            element.style.transform = 'scale(1)';
        });
    }

    slideInUp(element) {
        element.style.transform = 'translateY(100%)';
        
        requestAnimationFrame(() => {
            element.style.transition = 'transform 0.6s ease';
            element.style.transform = 'translateY(0)';
        });
    }

    slideInDown(element) {
        element.style.transform = 'translateY(-100%)';
        
        requestAnimationFrame(() => {
            element.style.transition = 'transform 0.6s ease';
            element.style.transform = 'translateY(0)';
        });
    }

    slideInLeft(element) {
        element.style.transform = 'translateX(-100%)';
        
        requestAnimationFrame(() => {
            element.style.transition = 'transform 0.6s ease';
            element.style.transform = 'translateX(0)';
        });
    }

    slideInRight(element) {
        element.style.transform = 'translateX(100%)';
        
        requestAnimationFrame(() => {
            element.style.transition = 'transform 0.6s ease';
            element.style.transform = 'translateX(0)';
        });
    }

    rotateIn(element) {
        element.style.opacity = '0';
        element.style.transform = 'rotate(-200deg)';
        
        requestAnimationFrame(() => {
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            element.style.opacity = '1';
            element.style.transform = 'rotate(0deg)';
        });
    }

    flipIn(element) {
        element.style.opacity = '0';
        element.style.transform = 'perspective(400px) rotateY(90deg)';
        
        requestAnimationFrame(() => {
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            element.style.opacity = '1';
            element.style.transform = 'perspective(400px) rotateY(0deg)';
        });
    }

    // Mouse interaction handlers
    handleMouseMove(e, element) {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    }

    handleMouseLeave(element) {
        element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    }

    // Loading animation creator
    createLoadingAnimation(element, type) {
        const loadingTypes = {
            'spinner': this.createSpinner,
            'dots': this.createDots,
            'bars': this.createBars,
            'pulse': this.createPulse
        };

        if (loadingTypes[type]) {
            loadingTypes[type](element);
        }
    }

    createSpinner(element) {
        element.innerHTML = '<div class="spinner"></div>';
    }

    createDots(element) {
        element.innerHTML = '<div class="loading-dots">Loading</div>';
    }

    createBars(element) {
        element.innerHTML = `
            <div class="loading-bars">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
            </div>
        `;
    }

    createPulse(element) {
        element.innerHTML = '<div class="loading-pulse"></div>';
    }

    // Text animation
    animateText(element, type) {
        const text = element.textContent;
        element.textContent = '';
        
        const animationTypes = {
            'typewriter': () => this.typewriterEffect(element, text),
            'fade-in': () => this.textFadeIn(element, text),
            'slide-up': () => this.textSlideUp(element, text),
            'character-by-character': () => this.characterAnimation(element, text)
        };

        if (animationTypes[type]) {
            animationTypes[type]();
        }
    }

    typewriterEffect(element, text) {
        let i = 0;
        element.style.borderRight = '2px solid var(--primary-color)';
        
        const typeWriter = () => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                element.style.borderRight = 'none';
            }
        };
        
        typeWriter();
    }

    textFadeIn(element, text) {
        element.textContent = text;
        element.style.opacity = '0';
        
        requestAnimationFrame(() => {
            element.style.transition = 'opacity 1s ease';
            element.style.opacity = '1';
        });
    }

    textSlideUp(element, text) {
        element.textContent = text;
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        
        requestAnimationFrame(() => {
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        });
    }

    characterAnimation(element, text) {
        const characters = text.split('');
        characters.forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char;
            span.style.opacity = '0';
            span.style.transform = 'translateY(20px)';
            element.appendChild(span);
            
            setTimeout(() => {
                span.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                span.style.opacity = '1';
                span.style.transform = 'translateY(0)';
            }, index * 50);
        });
    }

    // Utility methods
    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    // Chain animations
    chainAnimations(elements, animationType, stagger = 100) {
        elements.forEach((element, index) => {
            setTimeout(() => {
                this.playAnimation(element, animationType);
            }, index * stagger);
        });
    }

    // Stagger animation for children
    staggerChildren(parent, animationType, stagger = 100) {
        const children = Array.from(parent.children);
        this.chainAnimations(children, animationType, stagger);
    }
}

// Particle System
class ParticleSystem {
    constructor(container, options = {}) {
        this.container = container;
        this.particles = [];
        this.options = {
            count: options.count || 50,
            size: options.size || 2,
            speed: options.speed || 1,
            color: options.color || '#6366f1',
            opacity: options.opacity || 0.5,
            ...options
        };
        
        this.init();
    }

    init() {
        this.createParticles();
        this.animate();
    }

    createParticles() {
        for (let i = 0; i < this.options.count; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.cssText = `
                position: absolute;
                width: ${this.options.size}px;
                height: ${this.options.size}px;
                background: ${this.options.color};
                border-radius: 50%;
                opacity: ${this.options.opacity};
                pointer-events: none;
            `;
            
            this.container.appendChild(particle);
            this.particles.push({
                element: particle,
                x: Math.random() * this.container.offsetWidth,
                y: Math.random() * this.container.offsetHeight,
                vx: (Math.random() - 0.5) * this.options.speed,
                vy: (Math.random() - 0.5) * this.options.speed
            });
        }
    }

    animate() {
        this.particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            if (particle.x < 0 || particle.x > this.container.offsetWidth) {
                particle.vx *= -1;
            }
            if (particle.y < 0 || particle.y > this.container.offsetHeight) {
                particle.vy *= -1;
            }
            
            particle.element.style.left = particle.x + 'px';
            particle.element.style.top = particle.y + 'px';
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize animation controller
    window.animationController = new AnimationController();
    
    // Initialize particle systems
    const particleContainers = document.querySelectorAll('[data-particles]');
    particleContainers.forEach(container => {
        const options = JSON.parse(container.getAttribute('data-particles') || '{}');
        new ParticleSystem(container, options);
    });
    
    // Add scroll animations to sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.setAttribute('data-animate', 'fade-in-up');
        section.setAttribute('data-delay', index * 100);
    });
    
    // Add stagger animations to service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        card.setAttribute('data-animate', 'scale-in');
        card.setAttribute('data-delay', index * 150);
    });
    
    // Add stagger animations to portfolio items
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach((item, index) => {
        item.setAttribute('data-animate', 'fade-in-up');
        item.setAttribute('data-delay', index * 100);
    });
});

// Export for use in other modules
window.AnimationController = AnimationController;
window.ParticleSystem = ParticleSystem;
