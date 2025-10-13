const cartCount = document.querySelector('.cart-count');
const CountButton = document.querySelectorAll('.btn-add');
let count = 0;


CountButton.forEach((btn) => {
    btn.addEventListener("click", () => {
        count++;
        cartCount.textContent = count;
    });
});
