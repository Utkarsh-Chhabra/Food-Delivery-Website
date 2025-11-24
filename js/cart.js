// Simple vanilla cart system for ZestyBite
(function () {
    console.log('cart script loaded');
    const STORAGE_KEY = 'zestyCart';
    let cartItems = [];

    const currency = (value) => `₹${value.toFixed(2)}`;

    const styleBlock = `
    .cart-count{position:absolute;top:-6px;right:-6px;background:linear-gradient(135deg,#f39c12,#f8921e);color:#fff;border-radius:999px;padding:0 6px;font-size:0.75rem;font-weight:700;line-height:1.4;min-width:20px;text-align:center}
    .cart-backdrop{position:fixed;inset:0;background:rgba(0,0,0,0.6);opacity:0;pointer-events:none;transition:opacity .3s ease;z-index:998}
    .cart-backdrop.active{opacity:1;pointer-events:all}
    .cart-panel{position:fixed;top:0;right:-420px;width:360px;height:100vh;background:#101418;color:#f5f5f5;box-shadow:-10px 0 30px rgba(0,0,0,0.45);transition:right .3s ease;z-index:999;display:flex;flex-direction:column;font-family:'Cairo Play',sans-serif;}
    .cart-panel.active{right:0}
    .cart-header{padding:20px;border-bottom:1px solid rgba(255,255,255,0.08);display:flex;justify-content:space-between;align-items:center;font-size:1.2rem;font-weight:700}
    .cart-close{cursor:pointer;font-size:1.4rem;border:none;background:none;color:inherit}
    .cart-items{flex:1;overflow-y:auto;padding:10px 20px}
    .cart-item{display:flex;gap:12px;padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.07)}
    .cart-item img{width:64px;height:64px;border-radius:8px;object-fit:cover}
    .cart-item-info{flex:1}
    .cart-item-name{font-weight:600;font-size:1rem;margin-bottom:4px}
    .cart-item-meta{display:flex;justify-content:space-between;font-size:0.9rem;color:#bfbfbf}
    .cart-actions{display:flex;align-items:center;gap:6px;margin-top:8px}
    .qty-btn{width:28px;height:28px;border-radius:50%;background:#1f252b;color:#fff;border:1px solid rgba(255,255,255,0.1);cursor:pointer}
    .remove-btn{margin-left:auto;background:none;border:none;color:#ff6b6b;cursor:pointer;font-size:0.85rem}
    .cart-footer{padding:20px;border-top:1px solid rgba(255,255,255,0.08)}
    .cart-total{display:flex;justify-content:space-between;font-size:1.1rem;margin-bottom:12px}
    .checkout-btn{width:100%;padding:12px;border:none;border-radius:8px;background:linear-gradient(135deg,#f39c12,#f8921e);color:#fff;font-weight:700;cursor:pointer}
    .empty-cart{padding:30px;text-align:center;color:#bfbfbf}
    @media(max-width:420px){.cart-panel{width:100%;}.cart-panel.active{right:0}}
    `;

    function injectStyles() {
        if (document.getElementById('cart-styles')) return;
        const style = document.createElement('style');
        style.id = 'cart-styles';
        style.textContent = styleBlock;
        document.head.appendChild(style);
    }

    function loadCart() {
        try {
            cartItems = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
        } catch {
            cartItems = [];
        }
    }

    function saveCart() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems));
        updateCartCount();
    }

    function updateCartCount() {
        const count = cartItems.reduce((acc, item) => acc + item.qty, 0);
        document.querySelectorAll('.cart-count').forEach(el => el.textContent = count);
    }

    function ensureCartMarkup() {
        if (document.querySelector('[data-cart-panel]')) return;
        const backdrop = document.createElement('div');
        backdrop.className = 'cart-backdrop';
        backdrop.dataset.cartBackdrop = 'true';

        const panel = document.createElement('div');
        panel.className = 'cart-panel';
        panel.dataset.cartPanel = 'true';
        panel.innerHTML = `
            <div class="cart-header">
                <span>Your Cart</span>
                <button class="cart-close" aria-label="Close cart">&times;</button>
            </div>
            <div class="cart-items" data-cart-items></div>
            <div class="cart-footer">
                <div class="cart-total">
                    <span>Total</span>
                    <strong data-cart-total>₹0.00</strong>
                </div>
                <button class="checkout-btn" type="button">Proceed to Checkout</button>
            </div>
        `;

        document.body.append(backdrop, panel);
    }

    function toggleCart(open) {
        console.log('toggleCart called with', open);
        const panel = document.querySelector('[data-cart-panel]');
        const backdrop = document.querySelector('[data-cart-backdrop]');
        console.log('panel found:', !!panel, 'backdrop found:', !!backdrop);
        if (!panel || !backdrop) return;
        const shouldOpen = open !== undefined ? open : !panel.classList.contains('active');
        console.log('shouldOpen:', shouldOpen);
        panel.classList.toggle('active', shouldOpen);
        backdrop.classList.toggle('active', shouldOpen);
    }

    function renderCart() {
        const container = document.querySelector('[data-cart-items]');
        if (!container) return;
        container.innerHTML = '';
        if (!cartItems.length) {
            container.innerHTML = '<div class="empty-cart">Your cart is empty. Add some dishes!</div>';
        } else {
            cartItems.forEach(item => {
                const div = document.createElement('div');
                div.className = 'cart-item';
                div.innerHTML = `
                    ${item.image ? `<img src="${item.image}" alt="${item.name}">` : ''}
                    <div class="cart-item-info">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-meta">
                            <span>${currency(item.price)}</span>
                            <span>x ${item.qty}</span>
                        </div>
                        <div class="cart-actions">
                            <button class="qty-btn" data-qty="-1" data-id="${item.id}">-</button>
                            <span>${item.qty}</span>
                            <button class="qty-btn" data-qty="1" data-id="${item.id}">+</button>
                            <button class="remove-btn" data-remove="${item.id}">Remove</button>
                        </div>
                    </div>
                `;
                container.appendChild(div);
            });
        }
        const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
        const totalEl = document.querySelector('[data-cart-total]');
        if (totalEl) totalEl.textContent = currency(total);
        updateCartCount();
    }

    function normalizeId(value) {
        return value.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    }

    function addItem(payload) {
        if (!payload || !payload.name) return;
        const id = payload.id || normalizeId(payload.name);
        const existing = cartItems.find(item => item.id === id);
        if (existing) {
            existing.qty += 1;
        } else {
            cartItems.push({
                id,
                name: payload.name,
                price: Number(payload.price) || 0,
                image: payload.image || '',
                qty: 1,
            });
        }
        saveCart();
        renderCart();
        toggleCart(true);
    }

    function changeQty(id, delta) {
        const item = cartItems.find(i => i.id === id);
        if (!item) return;
        item.qty += delta;
        if (item.qty <= 0) {
            cartItems = cartItems.filter(i => i.id !== id);
        }
        saveCart();
        renderCart();
    }

    function removeItem(id) {
        cartItems = cartItems.filter(i => i.id !== id);
        saveCart();
        renderCart();
    }

    function parsePrice(text) {
        if (!text) return 0;
        const value = parseFloat(text.replace(/[^0-9.]/g, ''));
        return isNaN(value) ? 0 : value;
    }

    function handleAddToCartClick(event) {
        const btn = event.target.closest('.add-to-cart-btn, .btn-add');
        if (!btn) return;
        const card = btn.closest('.dish-card') || btn.closest('[data-dish]') || btn.closest('.offer-card');
        const nameEl = card ? (card.querySelector('h3, h4, .dish-name') || card.querySelector('.offer-content h3')) : null;
        const priceEl = card ? card.querySelector('.price, .dish-price') : null;
        const imageEl = card ? card.querySelector('img') : null;

        const payload = {
            id: btn.dataset.id,
            name: btn.dataset.name || (nameEl ? nameEl.textContent.trim() : 'Dish'),
            price: btn.dataset.price ? Number(btn.dataset.price) : parsePrice(priceEl ? priceEl.textContent : btn.dataset.price),
            image: btn.dataset.image || (imageEl ? imageEl.src : ''),
        };
        addItem(payload);
    }

    function wireCartToggle() {
        console.log('wiring cart toggle');
        document.querySelectorAll('.cart-toggle').forEach(el => {
            console.log('found toggle element:', el);
            el.addEventListener('click', (e) => {
                console.log('cart toggle clicked', el);
                e.preventDefault();
                toggleCart();
            });
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') toggleCart(false);
        });

        document.body.addEventListener('click', (e) => {
            if (e.target.matches('[data-cart-backdrop]')) toggleCart(false);
        });
    }

    function wireCartPanelActions() {
        document.body.addEventListener('click', (e) => {
            if (e.target.matches('[data-cart-panel] .cart-close')) {
                toggleCart(false);
            }
            if (e.target.matches('.qty-btn')) {
                const id = e.target.dataset.id;
                const delta = Number(e.target.dataset.qty);
                changeQty(id, delta);
            }
            if (e.target.matches('.remove-btn')) {
                removeItem(e.target.dataset.remove);
            }
        });
    }

    function init() {
        console.log('cart init');
        injectStyles();
        ensureCartMarkup();
        loadCart();
        renderCart();
        wireCartToggle();
        wireCartPanelActions();
        document.body.addEventListener('click', handleAddToCartClick);
        window.zestyCart = {
            add: addItem,
            items: () => [...cartItems],
            clear: () => { cartItems = []; saveCart(); renderCart(); }
        };
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
