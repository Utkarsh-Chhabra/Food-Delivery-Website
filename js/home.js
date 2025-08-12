// Menu category functionality
document.addEventListener('DOMContentLoaded', function() {
    const categoryCards = document.querySelectorAll('.category-card');
    const addToCartButtons = document.querySelectorAll('.btn-add');
    const offerButtons = document.querySelectorAll('.btn-offer');
    
    // Add click effect to category cards
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            // Remove active class from all cards
            categoryCards.forEach(el => el.classList.remove('active'));
            
            // Add active class to clicked card
            this.classList.add('active');
            
            // Get category and filter items (placeholder functionality)
            const category = this.dataset.category;
            console.log(`Selected category: ${category}`);
            
            // Add visual feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    
    // Add to cart functionality
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const dishCard = this.closest('.dish-card');
            const dishName = dishCard.querySelector('h3').textContent;
            const dishPrice = dishCard.querySelector('.dish-price').textContent;
            
            // Visual feedback
            this.textContent = 'Added!';
            // this.style.background = 'linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)';
            
            // Update cart count
            const cartCount = document.querySelector('.cart-count');
            const currentCount = parseInt(cartCount.textContent);
            cartCount.textContent = currentCount + 1;
            
            // Reset button after 2 seconds
            setTimeout(() => {
                this.textContent = 'Add to Cart';
                this.style.background = '';
            }, 2000);
            
            console.log(`Added ${dishName} (${dishPrice}) to cart`);
        });
    });

    // Offer button functionality
    offerButtons.forEach(button => {
        button.addEventListener('click', function() {
            const offerCard = this.closest('.offer-card');
            const offerTitle = offerCard.querySelector('h3').textContent;
            
            // Visual feedback
            const originalText = this.textContent;
            this.textContent = 'Applied!';
            this.style.background = 'linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)';
            
            // Add shake animation to offer card
            offerCard.style.animation = 'shake 0.5s ease-in-out';
            
            // Reset after animation
            setTimeout(() => {
                this.textContent = originalText;
                this.style.background = '';
                offerCard.style.animation = '';
            }, 2000);
            
            console.log(`Applied offer: ${offerTitle}`);
        });
    });
    
    // Countdown timer functionality
    function updateCountdown() {
        const now = new Date();
        const midnight = new Date();
        midnight.setHours(24, 0, 0, 0); // Next midnight
        
        const timeDiff = midnight - now;
        
        const hours = Math.floor(timeDiff / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
        
        const hoursElement = document.getElementById('hours');
        const minutesElement = document.getElementById('minutes');
        const secondsElement = document.getElementById('seconds');
        
        if (hoursElement) hoursElement.textContent = hours.toString().padStart(2, '0');
        if (minutesElement) minutesElement.textContent = minutes.toString().padStart(2, '0');
        if (secondsElement) secondsElement.textContent = seconds.toString().padStart(2, '0');
    }
    
    // Update countdown every second
    updateCountdown();
    setInterval(updateCountdown, 1000);
    
    // Smooth scrolling for navigation links
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
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.category-card, .dish-card, .feature, .offer-card').forEach(el => {
        observer.observe(el);
    });
});

// CSS for additional animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
    
    .category-card.active {
        background: rgba(243, 156, 18, 0.2);
        border-color: var(--primary-color);
        transform: translateY(-5px);
    }
`;
document.head.appendChild(style);

// Close mobile menu when clicking on a nav link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Cart functionality (demo)
let cartCount = 0;
const cartCountElement = document.querySelector('.cart-count');

function updateCartCount(count) {
    cartCount = count;
    cartCountElement.textContent = cartCount;
}

// 3D Model Animation Enhancement
document.addEventListener('DOMContentLoaded', function() {
    const modelViewer = document.getElementById('food-model');
    const modelContainer = document.querySelector('.model-container');
    
    if (modelViewer) {
        // Enhanced model loading
        modelViewer.addEventListener('load', function() {
            console.log('3D Model loaded successfully');
            
            // Add entrance animation
            modelViewer.style.opacity = '0';
            modelViewer.style.transform = 'scale(0.8)';
            
            setTimeout(() => {
                modelViewer.style.transition = 'opacity 1s ease, transform 1s ease';
                modelViewer.style.opacity = '1';
                modelViewer.style.transform = 'scale(1)';
            }, 500);
        });
        
        // Intersection Observer for scroll animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                } else {
                    entry.target.classList.remove('animate-in');
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(modelContainer);
    }
    
    // 3D Food Slider Functionality
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    
    function showSlide(index) {
        // Hide all slides
        slides.forEach((slide, i) => {
            slide.classList.remove('active', 'prev');
            if (i < index) {
                slide.classList.add('prev');
            } else if (i === index) {
                slide.classList.add('active');
            }
        });
        
        // Update dots
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        
        currentSlide = index;
    }
    
    function nextSlide() {
        const next = (currentSlide + 1) % slides.length;
        showSlide(next);
    }
    
    function prevSlide() {
        const prev = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(prev);
    }
    
    // Event listeners
    if (nextBtn) {
        nextBtn.addEventListener('click', nextSlide);
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', prevSlide);
    }
    
    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });
    
    // Auto-slide functionality (optional)
    setInterval(() => {
        nextSlide();
    }, 5000); // Change slide every 5 seconds
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    });
    
    // Touch/Swipe support for mobile
    let startX = 0;
    let endX = 0;
    
    const sliderTrack = document.getElementById('sliderTrack');
    
    if (sliderTrack) {
        sliderTrack.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });
        
        sliderTrack.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            handleSwipe();
        });
        
        function handleSwipe() {
            const threshold = 50; // Minimum swipe distance
            const diff = startX - endX;
            
            if (Math.abs(diff) > threshold) {
                if (diff > 0) {
                    nextSlide(); // Swipe left - next slide
                } else {
                    prevSlide(); // Swipe right - previous slide
                }
            }
        }
    }
});