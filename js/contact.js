// Contact page JavaScript functionality

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

    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }

    // Form validation
    const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea, .contact-form select');
    formInputs.forEach(input => {
        input.addEventListener('blur', validateField);
        input.addEventListener('input', clearValidation);
    });

    // FAQ accordion functionality
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => toggleFAQ(item));
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Contact cards hover animation
    const contactCards = document.querySelectorAll('.contact-card');
    contactCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Initialize scroll animations
    initScrollAnimations();

    // Navbar scroll effect
    initNavbarScrollEffect();
});

// Form submission handler
function handleFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    
    // Validate all fields
    let isValid = true;
    const requiredFields = form.querySelectorAll('[required]');
    
    requiredFields.forEach(field => {
        if (!validateField({ target: field })) {
            isValid = false;
        }
    });
    
    if (!isValid) {
        showMessage('Please fill in all required fields correctly.', 'error');
        return;
    }
    
    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        // Success simulation
        showMessage('Thank you for your message! We\'ll get back to you within 24 hours.', 'success');
        form.reset();
        clearAllValidation();
        
        // Reset button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, 2000);
}

// Field validation
function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    const fieldGroup = field.closest('.form-group');
    
    // Remove existing validation classes
    fieldGroup.classList.remove('success', 'error');
    
    // Validation rules
    let isValid = true;
    let errorMessage = '';
    
    if (field.hasAttribute('required') && !value) {
        isValid = false;
        errorMessage = 'This field is required.';
    } else if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
            errorMessage = 'Please enter a valid email address.';
        }
    } else if (field.type === 'tel' && value) {
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        if (!phoneRegex.test(value.replace(/\s/g, ''))) {
            isValid = false;
            errorMessage = 'Please enter a valid phone number.';
        }
    }
    
    // Show validation result
    if (isValid && value) {
        fieldGroup.classList.add('success');
        removeErrorMessage(fieldGroup);
    } else if (!isValid) {
        fieldGroup.classList.add('error');
        showFieldError(fieldGroup, errorMessage);
    }
    
    return isValid;
}

// Clear validation on input
function clearValidation(e) {
    const field = e.target;
    const fieldGroup = field.closest('.form-group');
    fieldGroup.classList.remove('success', 'error');
    removeErrorMessage(fieldGroup);
}

// Clear all validation
function clearAllValidation() {
    const formGroups = document.querySelectorAll('.form-group');
    formGroups.forEach(group => {
        group.classList.remove('success', 'error');
        removeErrorMessage(group);
    });
}

// Show field error message
function showFieldError(fieldGroup, message) {
    removeErrorMessage(fieldGroup);
    const errorDiv = document.createElement('div');
    errorDiv.className = 'form-message error';
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
    fieldGroup.appendChild(errorDiv);
}

// Remove error message
function removeErrorMessage(fieldGroup) {
    const existingError = fieldGroup.querySelector('.form-message');
    if (existingError) {
        existingError.remove();
    }
}

// Show general message
function showMessage(message, type) {
    // Remove existing messages
    const existingMessages = document.querySelectorAll('.general-message');
    existingMessages.forEach(msg => msg.remove());
    
    // Create new message
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message ${type} general-message`;
    messageDiv.textContent = message;
    messageDiv.style.display = 'block';
    messageDiv.style.marginTop = '20px';
    messageDiv.style.textAlign = 'center';
    
    // Insert after form
    const form = document.getElementById('contactForm');
    form.parentNode.insertBefore(messageDiv, form.nextSibling);
    
    // Auto-remove success messages
    if (type === 'success') {
        setTimeout(() => {
            messageDiv.remove();
        }, 5000);
    }
}

// FAQ toggle functionality
function toggleFAQ(item) {
    const isActive = item.classList.contains('active');
    
    // Close all FAQ items
    document.querySelectorAll('.faq-item').forEach(faq => {
        faq.classList.remove('active');
    });
    
    // Open clicked item if it wasn't active
    if (!isActive) {
        item.classList.add('active');
    }
}

// Scroll animations
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Stagger animation for contact cards
                if (entry.target.classList.contains('contact-card')) {
                    const cards = document.querySelectorAll('.contact-card');
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, index * 100);
                    });
                }
            }
        });
    }, { threshold: 0.1 });

    // Add animation classes to elements
    const animatedElements = document.querySelectorAll('.contact-card, .faq-item, .contact-form');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Navbar scroll effect
function initNavbarScrollEffect() {
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
}

// Add some CSS for enhanced animations and mobile responsiveness
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
    
    .form-group.success input,
    .form-group.success textarea,
    .form-group.success select {
        border-color: var(--success-color);
        box-shadow: 0 0 0 3px rgba(39, 174, 96, 0.1);
    }
    
    .form-group.error input,
    .form-group.error textarea,
    .form-group.error select {
        border-color: var(--error-color);
        box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.1);
    }
    
    .form-message {
        margin-top: 10px;
        padding: 10px;
        border-radius: 5px;
        font-size: 0.9rem;
        display: none;
    }
    
    .form-message.success {
        background: rgba(39, 174, 96, 0.1);
        color: var(--success-color);
        border: 1px solid var(--success-color);
    }
    
    .form-message.error {
        background: rgba(231, 76, 60, 0.1);
        color: var(--error-color);
        border: 1px solid var(--error-color);
    }
    
    .faq-item.active .faq-answer {
        padding: 0 25px 25px;
        max-height: 200px;
    }
    
    .faq-item.active .faq-question i {
        transform: rotate(45deg);
    }
    
    @keyframes pulse {
        0% { box-shadow: 0 0 0 0 rgba(243, 156, 18, 0.4); }
        70% { box-shadow: 0 0 0 10px rgba(243, 156, 18, 0); }
        100% { box-shadow: 0 0 0 0 rgba(243, 156, 18, 0); }
    }
    
    .contact-card:hover .contact-icon {
        animation: pulse 1.5s infinite;
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
