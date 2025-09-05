// // About page JavaScript functionality

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }


//     // Animate statistics on scroll
    const animateStats = () => {
        const stats = document.querySelectorAll('.stat h4');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    const finalValue = target.textContent;
                    const isNumber = /^\d+/.test(finalValue);
                    
                    if (isNumber) {
                        const number = parseInt(finalValue.match(/\d+/)[0]);
                        animateCounter(target, number, finalValue);
                    }
                    observer.unobserve(target);
                }
            });
        }, { threshold: 0.5 });

        stats.forEach(stat => observer.observe(stat));
    };

//     // Counter animation function
    const animateCounter = (element, target, originalText) => {
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = originalText;
                clearInterval(timer);
            } else {
                element.textContent = originalText.replace(/\d+/, Math.floor(current));
            }
        }, 16);
    };

    // Parallax effect for hero section
    const parallaxEffect = () => {
        const hero = document.querySelector('.hero');
        if (!hero) return;

        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = hero.querySelector('.hero-content');
            if (parallax) {
                const speed = scrolled * 0.5;
                parallax.style.transform = `translateY(${speed}px)`;
            }
        });
    };

//     // Team member hover effects
    const teamHoverEffects = () => {
        const teamMembers = document.querySelectorAll('.team-member');
        
        teamMembers.forEach(member => {
            member.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-15px) scale(1.02)';
            });
            
            member.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
    };


//     // Initialize all functions
    animateStats();
    parallaxEffect();
    teamHoverEffects();
    addScrollAnimations();

    // Add loading animation
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Hide/show navbar on scroll
        if (currentScroll > lastScroll && currentScroll > 100) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
    });
});

// Add some CSS for enhanced animations
const style = document.createElement('style');
style.textContent = `
    .nav-menu.active {
        display: flex !important;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        flex-direction: column;
        background: var(--secondary-color);
        border-top: 1px solid var(--border-color);
        padding: 20px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    }
    
    .hamburger.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    
    .hamburger.active span:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }
    
    .navbar.scrolled {
        background: rgba(24, 29, 33, 0.95);
        backdrop-filter: blur(20px);
    }
    
    .loaded .hero-title {
        animation: slideInFromLeft 1s ease-out;
    }
    
    .loaded .hero-description {
        animation: slideInFromRight 1s ease-out 0.3s both;
    }
    
    @keyframes slideInFromLeft {
        from {
            opacity: 0;
            transform: translateX(-50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideInFromRight {
        from {
            opacity: 0;
            transform: translateX(50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @media (max-width: 768px) {
        .nav-menu {
            display: none;
        }
        
        .hamburger {
            display: flex !important;
        }
    }
`;

document.head.appendChild(style);
