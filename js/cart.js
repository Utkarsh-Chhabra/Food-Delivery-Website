// ------------------- CART SYSTEM -------------------
const body = document.querySelector('body');
const cartIcon = document.querySelector('.fa-shopping-cart');
const closeCartBtn = document.querySelector('.cartTab .close');
const listCart = document.querySelector('.listCart');
const cartCount = document.querySelector('.cart-count');
const totalAmount = document.getElementById('cartTotalAmount');
const addBtns = document.querySelectorAll('.btn-add');

let cart = JSON.parse(localStorage.getItem('cart')) || [];

// ---- Open / Close Cart ----
cartIcon.addEventListener('click', (e) => {
  e.preventDefault();
  body.classList.add('showCart');
  updateCart(); // refresh display
});
closeCartBtn.addEventListener('click', () => {
  body.classList.remove('showCart');
});

// ---- Add item to cart ----
addBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const dish = btn.closest('.dish-card');
    const name = dish.querySelector('h3').innerText;
    const price = parseInt(dish.querySelector('.dish-price').innerText.replace('₹', ''));
    const imgSrc = dish.querySelector('img').src;

    addToCart(name, price, imgSrc);
  });
});

function addToCart(name, price, imgSrc) {
  const existing = cart.find(item => item.name === name);
  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ name, price, imgSrc, quantity: 1 });
  }
  saveCart();
  updateCart();
}

// ---- Save to localStorage ----
function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// ---- Update cart display ----
function updateCart() {
  listCart.innerHTML = '';
  let totalItems = 0;
  let totalPrice = 0;

  cart.forEach((item, index) => {
    totalItems += item.quantity;
    totalPrice += item.price * item.quantity;

    const div = document.createElement('div');
    div.classList.add('item');
    div.innerHTML = `
      <div class="image"><img src="${item.imgSrc}" alt=""></div>
      <div class="name">${item.name}</div>
      <div class="totalPrice">₹${item.price * item.quantity}</div>
      <div class="quantity" data-index="${index}">
        <span class="plus">+</span>
        <span>${item.quantity}</span>
        <span class="minus">-</span>
      </div>
    `;
    listCart.appendChild(div);
  });

  cartCount.textContent = totalItems;
  totalAmount.textContent = `₹${totalPrice}`;
}

// ---- Handle Quantity Buttons (Event Delegation) ----
listCart.addEventListener('click', (e) => {
  const parent = e.target.closest('.quantity');
  if (!parent) return; // Click outside buttons

  const index = parent.dataset.index;

  if (e.target.classList.contains('plus')) {
    cart[index].quantity++;
  } else if (e.target.classList.contains('minus')) {
    if (cart[index].quantity > 1) {
      cart[index].quantity--;
    } else {
      cart.splice(index, 1);
    }
  }

  saveCart();
  updateCart();
});

// ---- Load cart on startup ----
document.addEventListener('DOMContentLoaded', updateCart);
