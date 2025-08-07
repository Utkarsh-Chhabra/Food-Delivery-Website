// // Mobile menu toggle
// const hamburger = document.querySelector('.hamburger');
// const navMenu = document.querySelector('.nav-menu');

// hamburger.addEventListener('click', function() {
//     hamburger.classList.toggle('active');
//     navMenu.classList.toggle('active');
// });

// // Close mobile menu when clicking on a nav link
// document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
//     hamburger.classList.remove('active');
//     navMenu.classList.remove('active');
// }));

// // Cart functionality (demo)
// let cartCount = 0;
// const cartCountElement = document.querySelector('.cart-count');

// function updateCartCount(count) {
//     cartCount = count;
//     cartCountElement.textContent = cartCount;
// }

// // 3D Model Animation Enhancement
// document.addEventListener('DOMContentLoaded', function() {
//     const modelViewer = document.getElementById('food-model');
//     const modelContainer = document.querySelector('.model-container');
    
//     if (modelViewer) {
//         // Enhanced model loading
//         modelViewer.addEventListener('load', function() {
//             console.log('3D Model loaded successfully');
            
//             // Add entrance animation
//             modelViewer.style.opacity = '0';
//             modelViewer.style.transform = 'scale(0.8)';
            
//             setTimeout(() => {
//                 modelViewer.style.transition = 'opacity 1s ease, transform 1s ease';
//                 modelViewer.style.opacity = '1';
//                 modelViewer.style.transform = 'scale(1)';
//             }, 500);
//         });
        
//         // Intersection Observer for scroll animations
//         const observer = new IntersectionObserver((entries) => {
//             entries.forEach(entry => {
//                 if (entry.isIntersecting) {
//                     entry.target.classList.add('animate-in');
//                 } else {
//                     entry.target.classList.remove('animate-in');
//                 }
//             });
//         }, { threshold: 0.1 });
        
//         observer.observe(modelContainer);
//     }
    
//     // 3D Food Slider Functionality
//     const slides = document.querySelectorAll('.slide');
//     const prevBtn = document.getElementById('prevBtn');
//     const nextBtn = document.getElementById('nextBtn');
//     const dots = document.querySelectorAll('.dot');
//     let currentSlide = 0;
    
//     function showSlide(index) {
//         // Hide all slides
//         slides.forEach((slide, i) => {
//             slide.classList.remove('active', 'prev');
//             if (i < index) {
//                 slide.classList.add('prev');
//             } else if (i === index) {
//                 slide.classList.add('active');
//             }
//         });
        
//         // Update dots
//         dots.forEach((dot, i) => {
//             dot.classList.toggle('active', i === index);
//         });
        
//         currentSlide = index;
//     }
    
//     function nextSlide() {
//         const next = (currentSlide + 1) % slides.length;
//         showSlide(next);
//     }
    
//     function prevSlide() {
//         const prev = (currentSlide - 1 + slides.length) % slides.length;
//         showSlide(prev);
//     }
    
//     // Event listeners
//     if (nextBtn) {
//         nextBtn.addEventListener('click', nextSlide);
//     }
    
//     if (prevBtn) {
//         prevBtn.addEventListener('click', prevSlide);
//     }
    
//     // Dot navigation
//     dots.forEach((dot, index) => {
//         dot.addEventListener('click', () => {
//             showSlide(index);
//         });
//     });
    
//     // Auto-slide functionality (optional)
//     setInterval(() => {
//         nextSlide();
//     }, 5000); // Change slide every 5 seconds
    
//     // Keyboard navigation
//     document.addEventListener('keydown', (e) => {
//         if (e.key === 'ArrowLeft') {
//             prevSlide();
//         } else if (e.key === 'ArrowRight') {
//             nextSlide();
//         }
//     });
    
//     // Touch/Swipe support for mobile
//     let startX = 0;
//     let endX = 0;
    
//     const sliderTrack = document.getElementById('sliderTrack');
    
//     if (sliderTrack) {
//         sliderTrack.addEventListener('touchstart', (e) => {
//             startX = e.touches[0].clientX;
//         });
        
//         sliderTrack.addEventListener('touchend', (e) => {
//             endX = e.changedTouches[0].clientX;
//             handleSwipe();
//         });
        
//         function handleSwipe() {
//             const threshold = 50; // Minimum swipe distance
//             const diff = startX - endX;
            
//             if (Math.abs(diff) > threshold) {
//                 if (diff > 0) {
//                     nextSlide(); // Swipe left - next slide
//                 } else {
//                     prevSlide(); // Swipe right - previous slide
//                 }
//             }
//         }
//     }
// });