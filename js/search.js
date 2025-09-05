// Search page JavaScript functionality

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

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const searchSuggestions = document.getElementById('searchSuggestions');
    const resultsTitle = document.getElementById('resultsTitle');
    const resultsCount = document.getElementById('resultsCount');
    const categoryGrid = document.getElementById('categoryGrid');
    const searchResults = document.getElementById('searchResults');
    const noResults = document.getElementById('noResults');

    // Sample data for search
    const sampleDishes = [
        { id: 1, name: 'Butter Chicken', restaurant: 'Spice Garden', price: 320, rating: 4.5, time: 25, category: 'indian', type: 'dish', image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&h=300&fit=crop&crop=center' },
        { id: 2, name: 'Margherita Pizza', restaurant: 'Pizza Palace', price: 280, rating: 4.7, time: 20, category: 'italian', type: 'dish', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop&crop=center' },
        { id: 3, name: 'Chicken Biryani', restaurant: 'Biryani House', price: 350, rating: 4.6, time: 30, category: 'indian', type: 'dish', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlPQXFO4B201Ry8o7_Soa7dwhJBrtcwJdE0w&s' },
        { id: 4, name: 'Classic Burger', restaurant: 'Burger Junction', price: 220, rating: 4.4, time: 15, category: 'fast-food', type: 'dish', image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop&crop=center' },
        { id: 5, name: 'Chocolate Cake', restaurant: 'Sweet Treats', price: 180, rating: 4.8, time: 10, category: 'desserts', type: 'dish', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop&crop=center' },
        { id: 6, name: 'Iced Coffee', restaurant: 'Coffee Corner', price: 120, rating: 4.3, time: 5, category: 'beverages', type: 'dish', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop&crop=center' },
        { id: 7, name: 'Hakka Noodles', restaurant: 'China Town', price: 240, rating: 4.2, time: 20, category: 'chinese', type: 'dish', image: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=400&h=300&fit=crop&crop=center' },
        { id: 8, name: 'Paneer Tikka', restaurant: 'Spice Garden', price: 280, rating: 4.4, time: 25, category: 'indian', type: 'dish', image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&h=300&fit=crop&crop=center' }
    ];

    const sampleRestaurants = [
        { id: 1, name: 'Spice Garden', cuisine: 'Indian', rating: 4.5, deliveryTime: 25, type: 'restaurant' },
        { id: 2, name: 'Pizza Palace', cuisine: 'Italian', rating: 4.7, deliveryTime: 20, type: 'restaurant' },
        { id: 3, name: 'Biryani House', cuisine: 'Indian', rating: 4.6, deliveryTime: 30, type: 'restaurant' },
        { id: 4, name: 'Burger Junction', cuisine: 'Fast Food', rating: 4.4, deliveryTime: 15, type: 'restaurant' },
        { id: 5, name: 'China Town', cuisine: 'Chinese', rating: 4.2, deliveryTime: 20, type: 'restaurant' }
    ];

    // Search input events
    searchInput.addEventListener('input', handleSearchInput);
    searchInput.addEventListener('focus', showSuggestions);
    searchInput.addEventListener('blur', hideSuggestions);
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    // Filter buttons
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            filterResults(this.dataset.filter);
        });
    });

    // Sort functionality
    const sortSelect = document.getElementById('sortSelect');
    sortSelect.addEventListener('change', sortResults);

    // Category cards
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.dataset.category;
            searchByCategory(category);
        });
    });

    // Suggestion items
    const suggestionItems = document.querySelectorAll('.suggestion-item');
    suggestionItems.forEach(item => {
        item.addEventListener('click', function() {
            const searchTerm = this.textContent.replace(/Recent:|Trending:/, '').trim();
            searchInput.value = searchTerm;
            performSearch();
        });
    });

    // Add to cart functionality
    function addToCart(dishId) {
        // Update cart count
        const cartCount = document.querySelector('.cart-count');
        let currentCount = parseInt(cartCount.textContent) || 0;
        cartCount.textContent = currentCount + 1;
        
        // Show animation
        cartCount.style.transform = 'scale(1.3)';
        cartCount.style.background = '#27ae60';
        
        setTimeout(() => {
            cartCount.style.transform = 'scale(1)';
            cartCount.style.background = 'var(--primary-color)';
        }, 300);
        
        // Show notification
        showNotification('Item added to cart!', 'success');
        
        // Add some visual feedback to the button
        const buttons = document.querySelectorAll(`button[onclick="addToCart(${dishId})"]`);
        buttons.forEach(button => {
            const originalText = button.innerHTML;
            button.innerHTML = '<i class="fas fa-check"></i> Added!';
            button.style.background = '#27ae60';
            button.disabled = true;
            
            setTimeout(() => {
                button.innerHTML = originalText;
                button.style.background = 'linear-gradient(135deg, var(--primary-color), var(--accent-color))';
                button.disabled = false;
            }, 1500);
        });
    }

    // Make addToCart globally accessible
    window.addToCart = addToCart;

    // Initialize scroll animations
    initScrollAnimations();

    // Initialize navbar scroll effect
    initNavbarScrollEffect();

    // Initialize image loading
    initImageLoading();

    // Search input handler
    function handleSearchInput() {
        const query = searchInput.value.trim();
        if (query.length > 0) {
            updateSuggestions(query);
        }
    }

    // Show search suggestions
    function showSuggestions() {
        searchSuggestions.classList.add('show');
    }

    // Hide search suggestions
    function hideSuggestions() {
        setTimeout(() => {
            searchSuggestions.classList.remove('show');
        }, 200);
    }

    // Update suggestions based on input
    function updateSuggestions(query) {
        // This would typically fetch from an API
        // For now, we'll show the existing suggestions
        showSuggestions();
    }

    // Perform search
    function performSearch() {
        const query = searchInput.value.trim().toLowerCase();
        if (!query) return;

        // Hide category grid and show results
        categoryGrid.style.display = 'none';
        searchResults.style.display = 'grid';
        noResults.style.display = 'none';

        // Filter results based on query
        const dishResults = sampleDishes.filter(dish => 
            dish.name.toLowerCase().includes(query) ||
            dish.restaurant.toLowerCase().includes(query) ||
            dish.category.toLowerCase().includes(query)
        );

        const restaurantResults = sampleRestaurants.filter(restaurant =>
            restaurant.name.toLowerCase().includes(query) ||
            restaurant.cuisine.toLowerCase().includes(query)
        );

        const allResults = [...dishResults, ...restaurantResults];

        // Update results header
        resultsTitle.textContent = `Search Results for "${query}"`;
        resultsCount.textContent = `Found ${allResults.length} result${allResults.length !== 1 ? 's' : ''}`;

        // Display results
        if (allResults.length > 0) {
            displayResults(allResults);
        } else {
            showNoResults();
        }

        // Hide suggestions
        hideSuggestions();
    }

    // Search by category
    function searchByCategory(category) {
        categoryGrid.style.display = 'none';
        searchResults.style.display = 'grid';
        noResults.style.display = 'none';

        const results = sampleDishes.filter(dish => dish.category === category);
        
        resultsTitle.textContent = `${category.charAt(0).toUpperCase() + category.slice(1)} Dishes`;
        resultsCount.textContent = `Found ${results.length} dish${results.length !== 1 ? 'es' : ''}`;

        displayResults(results);
    }

    // Display search results
    function displayResults(results) {
        searchResults.innerHTML = '';

        results.forEach(item => {
            const resultCard = createResultCard(item);
            searchResults.appendChild(resultCard);
        });
    }

    // Create result card
    function createResultCard(item) {
        const card = document.createElement('div');
        
        if (item.type === 'dish') {
            card.className = 'dish-card';
            card.innerHTML = `
                <div class="dish-image">
                    ${item.image ? 
                        `<img src="${item.image}" alt="${item.name}" loading="lazy">` : 
                        `<i class="fas fa-${getDishIcon(item.category)}"></i>`
                    }
                    <div class="dish-badge">
                        <i class="fas fa-star"></i>
                        <span>${item.rating}</span>
                    </div>
                </div>
                <div class="dish-content">
                    <h3>${item.name}</h3>
                    <p class="restaurant-name">${item.restaurant}</p>
                    <div class="dish-details">
                        <span class="price">₹${item.price}</span>
                        <span class="delivery-time">
                            <i class="fas fa-clock"></i>
                            ${item.time} min
                        </span>
                    </div>
                    <button class="add-to-cart-btn" onclick="addToCart(${item.id})">
                        <i class="fas fa-plus"></i>
                        Add to Cart
                    </button>
                </div>
            `;
        } else {
            card.className = 'restaurant-card';
            card.innerHTML = `
                <div class="restaurant-header">
                    <h3>${item.name}</h3>
                    <div class="restaurant-rating">
                        <i class="fas fa-star"></i>
                        <span>${item.rating}</span>
                    </div>
                </div>
                <p class="restaurant-cuisine">${item.cuisine} Cuisine</p>
                <div class="restaurant-details">
                    <span class="delivery-time">
                        <i class="fas fa-clock"></i>
                        ${item.deliveryTime} min delivery
                    </span>
                </div>
                <button class="view-menu-btn">
                    <i class="fas fa-eye"></i>
                    View Menu
                </button>
            `;
        }

        return card;
    }

    // Get dish icon based on category
    function getDishIcon(category) {
        const icons = {
            'indian': 'pepper-hot',
            'italian': 'pizza-slice',
            'chinese': 'utensils',
            'fast-food': 'hamburger',
            'desserts': 'ice-cream',
            'beverages': 'coffee'
        };
        return icons[category] || 'utensils';
    }

    // Filter results
    function filterResults(filter) {
        const cards = searchResults.querySelectorAll('.dish-card, .restaurant-card');
        cards.forEach(card => {
            if (filter === 'all') {
                card.style.display = 'block';
            } else if (filter === 'dishes' && card.classList.contains('dish-card')) {
                card.style.display = 'block';
            } else if (filter === 'restaurants' && card.classList.contains('restaurant-card')) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Sort results
    function sortResults() {
        const sortBy = sortSelect.value;
        const cards = Array.from(searchResults.children);
        
        cards.sort((a, b) => {
            // Extract data for sorting (this is simplified)
            const aRating = parseFloat(a.querySelector('.dish-badge span, .restaurant-rating span')?.textContent || 0);
            const bRating = parseFloat(b.querySelector('.dish-badge span, .restaurant-rating span')?.textContent || 0);
            
            switch(sortBy) {
                case 'rating':
                    return bRating - aRating;
                case 'price-low':
                    const aPrice = parseInt(a.querySelector('.price')?.textContent.replace('₹', '') || 0);
                    const bPrice = parseInt(b.querySelector('.price')?.textContent.replace('₹', '') || 0);
                    return aPrice - bPrice;
                case 'price-high':
                    const aPriceHigh = parseInt(a.querySelector('.price')?.textContent.replace('₹', '') || 0);
                    const bPriceHigh = parseInt(b.querySelector('.price')?.textContent.replace('₹', '') || 0);
                    return bPriceHigh - aPriceHigh;
                default:
                    return 0;
            }
        });
        
        // Re-append sorted cards
        cards.forEach(card => searchResults.appendChild(card));
    }

    // Show no results
    function showNoResults() {
        searchResults.style.display = 'none';
        noResults.style.display = 'block';
    }

    // Clear search
    window.clearSearch = function() {
        searchInput.value = '';
        categoryGrid.style.display = 'grid';
        searchResults.style.display = 'none';
        noResults.style.display = 'none';
        resultsTitle.textContent = 'Popular Searches';
        resultsCount.textContent = 'Showing popular dishes and restaurants';
    };

    // Show notification
    function showNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'success' ? '#27ae60' : '#e74c3c'};
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            z-index: 10000;
            animation: slideInRight 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    // Scroll animations
    function initScrollAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        const animatedElements = document.querySelectorAll('.category-card, .dish-card');
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }

    // Initialize image loading
    function initImageLoading() {
        const images = document.querySelectorAll('.dish-image img');
        
        images.forEach(img => {
            // Add loading animation
            img.addEventListener('load', function() {
                this.style.opacity = '1';
            });
            
            // Handle image load errors
            img.addEventListener('error', function() {
                const dishImage = this.parentElement;
                const category = this.alt.toLowerCase();
                const icon = getDishIconFromName(category);
                
                // Hide the image and show icon
                this.style.display = 'none';
                const iconElement = document.createElement('i');
                iconElement.className = `fas fa-${icon}`;
                iconElement.style.fontSize = '4rem';
                iconElement.style.color = 'white';
                dishImage.appendChild(iconElement);
            });
        });
    }

    // Get dish icon from dish name
    function getDishIconFromName(dishName) {
        if (dishName.includes('chicken') || dishName.includes('meat')) return 'drumstick-bite';
        if (dishName.includes('pizza')) return 'pizza-slice';
        if (dishName.includes('biryani') || dishName.includes('rice')) return 'bowl-rice';
        if (dishName.includes('burger')) return 'hamburger';
        if (dishName.includes('cake') || dishName.includes('dessert')) return 'birthday-cake';
        if (dishName.includes('coffee') || dishName.includes('drink')) return 'coffee';
        if (dishName.includes('noodles') || dishName.includes('pasta')) return 'utensils';
        return 'utensils';
    }
});

// Add custom styles for search functionality
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
    
    .restaurant-card {
        background: var(--card-bg);
        border-radius: 15px;
        border: 1px solid var(--border-color);
        padding: 20px;
        transition: all 0.3s ease;
    }
    
    .restaurant-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 20px 40px rgba(243, 156, 18, 0.2);
    }
    
    .restaurant-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
    }
    
    .restaurant-header h3 {
        color: var(--text-light);
        font-size: 1.3rem;
    }
    
    .restaurant-rating {
        display: flex;
        align-items: center;
        gap: 5px;
        background: rgba(255, 215, 0, 0.1);
        padding: 5px 10px;
        border-radius: 20px;
        font-size: 0.9rem;
    }
    
    .restaurant-rating i {
        color: #ffd700;
    }
    
    .restaurant-cuisine {
        color: var(--text-muted);
        margin-bottom: 15px;
    }
    
    .view-menu-btn {
        width: 100%;
        background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
        border: none;
        padding: 12px;
        border-radius: 8px;
        color: white;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
    }
    
    .view-menu-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(243, 156, 18, 0.3);
    }
    
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    
    @media (max-width: 768px) {
        .nav-menu {
            display: none;
        }
        
        .hamburger {
            display: flex !important;
        }
        
        .search-suggestions {
            left: 10px;
            right: 10px;
        }
    }
`;

document.head.appendChild(style);
