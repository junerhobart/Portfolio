// Main JavaScript for June & Kaison Inc. Portfolio

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Initialize the application
function initializeApp() {
    setupNavigation();
    setupSmoothScrolling();
    setupScrollAnimations();
    setupContactForm();
    setupFloatingElements();
    setupTypingEffect();
    setupDraggableCodeWindow();
}

// Navigation Setup
function setupNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Active navigation link highlighting
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) navLink.classList.add('active');
            }
        });
    });

    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Smooth Scrolling
function setupSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll Animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                // Add stagger animation to children
                const children = entry.target.querySelectorAll('.animate-stagger > *');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.style.opacity = '1';
                        child.style.transform = 'translateY(0)';
                    }, index * 100);
                });
            }
        });
    }, observerOptions);

    // Observe elements with scroll-animate class
    const animatedElements = document.querySelectorAll('.scroll-animate, .animate-stagger');
    animatedElements.forEach(el => observer.observe(el));
}

// Contact Form Setup
function setupContactForm() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Validate form
            if (validateForm(data)) {
                // Show loading state
                const submitBtn = this.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Sending...';
                submitBtn.disabled = true;
                
                // Simulate form submission (replace with actual form handling)
                setTimeout(() => {
                    showNotification('Message sent successfully!', 'success');
                    this.reset();
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }, 2000);
            }
        });
    }
}

// Form Validation
function validateForm(data) {
    const errors = [];
    
    if (!data.name || data.name.trim().length < 2) {
        errors.push('Name must be at least 2 characters long');
    }
    
    if (!data.email || !isValidEmail(data.email)) {
        errors.push('Please enter a valid email address');
    }
    
    if (!data.subject || data.subject.trim().length < 5) {
        errors.push('Subject must be at least 5 characters long');
    }
    
    if (!data.message || data.message.trim().length < 10) {
        errors.push('Message must be at least 10 characters long');
    }
    
    if (errors.length > 0) {
        showNotification(errors.join('\n'), 'error');
        return false;
    }
    
    return true;
}

// Email Validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification System
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--bg-card);
        border: 1px solid var(--border-color);
        border-radius: var(--radius-md);
        padding: var(--spacing-md);
        z-index: 10000;
        max-width: 400px;
        box-shadow: var(--shadow-lg);
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Floating Elements Animation
function setupFloatingElements() {
    const floatingElements = document.querySelectorAll('.floating-element');
    
    floatingElements.forEach(element => {
        const speed = element.getAttribute('data-speed') || 1;
        
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5 * speed;
            element.style.transform = `translateY(${rate}px)`;
        });
    });
}

// Typing Effect
function setupTypingEffect() {
    const typingElements = document.querySelectorAll('.typing-effect');
    
    typingElements.forEach(element => {
        const text = element.textContent;
        element.textContent = '';
        element.style.borderRight = '2px solid var(--primary-color)';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                element.style.borderRight = 'none';
            }
        };
        
        // Start typing when element is visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    typeWriter();
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(element);
    });
}

// Utility Functions

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
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

// Get element position
function getElementPosition(element) {
    const rect = element.getBoundingClientRect();
    return {
        top: rect.top + window.pageYOffset,
        left: rect.left + window.pageXOffset,
        width: rect.width,
        height: rect.height
    };
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Add CSS class with animation
function addClassWithAnimation(element, className) {
    element.classList.add(className);
    element.addEventListener('animationend', function() {
        element.classList.remove(className);
    }, { once: true });
}

// Remove CSS class with animation
function removeClassWithAnimation(element, className) {
    element.classList.remove(className);
}

// Draggable Code Window Setup
function setupDraggableCodeWindow() {
    const codePreview = document.querySelector('.code-preview');
    if (!codePreview) return;

    let isDragging = false;
    let isClosed = false;
    let startX, startY, startLeft, startTop;
    let originalPosition = { left: 0, top: 0 };

    // Store original position
    const rect = codePreview.getBoundingClientRect();
    originalPosition.left = rect.left;
    originalPosition.top = rect.top;

    // Make window draggable by header
    const codeHeader = codePreview.querySelector('.code-header');
    const codeContent = codePreview.querySelector('.code-content');
    
    if (codeHeader) {
        codeHeader.style.cursor = 'grab';
        codeHeader.style.userSelect = 'none';

        codeHeader.addEventListener('mousedown', startDragging);
        codeHeader.addEventListener('mouseup', stopDragging);
        codeHeader.addEventListener('mouseleave', stopDragging);
    }

    // Setup traffic light buttons
    setupTrafficLightButtons();
    
    // Prevent animation system from interfering with code preview
    codePreview.setAttribute('data-no-animation', 'true');
    codePreview.setAttribute('data-mouse-effect', 'false');

    function startDragging(e) {
        if (isClosed) return;
        
        e.preventDefault(); // Prevent default behavior
        e.stopPropagation(); // Stop event bubbling
        
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        
        // Get current position relative to viewport
        const rect = codePreview.getBoundingClientRect();
        startLeft = rect.left;
        startTop = rect.top;
        
        // Set initial fixed positioning
        codePreview.style.position = 'fixed';
        codePreview.style.left = startLeft + 'px';
        codePreview.style.top = startTop + 'px';
        codePreview.style.zIndex = '1000';
        codePreview.style.transform = 'none'; // Remove transforms during drag
        codePreview.style.transition = 'none';
        codeHeader.style.cursor = 'grabbing';
        
        // Prevent text selection during drag
        document.body.style.userSelect = 'none';
        document.body.style.webkitUserSelect = 'none';
        document.body.style.mozUserSelect = 'none';
        document.body.style.msUserSelect = 'none';
        
        // Disable pointer events on code content during drag
        if (codeContent) {
            codeContent.style.pointerEvents = 'none';
        }
        
        document.addEventListener('mousemove', drag);
        document.addEventListener('mouseup', stopDragging);
    }

    function drag(e) {
        if (!isDragging) return;
        
        e.preventDefault(); // Prevent default behavior
        
        const deltaX = e.clientX - startX;
        const deltaY = e.clientY - startY;
        
        const newLeft = startLeft + deltaX;
        const newTop = startTop + deltaY;
        
        // Keep window within viewport bounds
        const maxX = window.innerWidth - codePreview.offsetWidth;
        const maxY = window.innerHeight - codePreview.offsetHeight;
        
        codePreview.style.left = Math.max(0, Math.min(newLeft, maxX)) + 'px';
        codePreview.style.top = Math.max(0, Math.min(newTop, maxY)) + 'px';
        codePreview.style.position = 'fixed';
        codePreview.style.zIndex = '1000';
        codePreview.style.transform = 'none'; // Remove any transforms during drag
    }

    function stopDragging() {
        isDragging = false;
        codePreview.style.transition = 'all 0.3s ease';
        if (codeHeader) {
            codeHeader.style.cursor = 'grab';
        }
        
        // Restore text selection
        document.body.style.userSelect = '';
        document.body.style.webkitUserSelect = '';
        document.body.style.mozUserSelect = '';
        document.body.style.msUserSelect = '';
        
        // Re-enable pointer events on code content
        if (codeContent) {
            codeContent.style.pointerEvents = '';
        }
        
        document.removeEventListener('mousemove', drag);
        document.removeEventListener('mouseup', stopDragging);
    }

    function setupTrafficLightButtons() {
        const dots = codePreview.querySelectorAll('.dot');
        
        // Close button (red)
        dots[0].addEventListener('click', closeWindow);
        
        // Minimize button (yellow) - Rick Roll
        dots[1].addEventListener('click', minimizeWindow);
        
        // Expand button (green) - Rick Roll
        dots[2].addEventListener('click', expandWindow);
    }

    function closeWindow() {
        isClosed = true;
        codePreview.style.transform = 'scale(0.8)';
        codePreview.style.opacity = '0';
        
        setTimeout(() => {
            codePreview.style.display = 'none';
            
            // Pop back up after 2 seconds
            setTimeout(() => {
                resetWindow();
            }, 2000);
        }, 300);
    }

    function minimizeWindow() {
        // Rick Roll - Open Never Gonna Give You Up
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
    }

    function expandWindow() {
        // Rick Roll - Open Never Gonna Give You Up
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
    }

    function resetWindow() {
        isClosed = false;
        codePreview.style.display = 'block';
        codePreview.style.animation = 'window-pop 0.6s ease-out';
        codePreview.style.transform = 'scale(1) perspective(1000px) rotateX(5deg)';
        codePreview.style.opacity = '1';
        codePreview.style.left = '';
        codePreview.style.top = '';
        codePreview.style.position = 'relative';
        codePreview.style.zIndex = '';
        
        // Reset animation after it completes
        setTimeout(() => {
            codePreview.style.animation = 'float-code 6s ease-in-out infinite';
        }, 600);
    }
}

// Export functions for use in other modules
window.PortfolioApp = {
    showNotification,
    validateForm,
    isValidEmail,
    debounce,
    throttle,
    getElementPosition,
    isInViewport,
    addClassWithAnimation,
    removeClassWithAnimation
};
