document.addEventListener("DOMContentLoaded", () => {
    const loginIcon = document.querySelector('.loginIcon');
    const loginLink = document.querySelector(".loginLink");

    const email = localStorage.getItem('user');
    if (email) {
        loginIcon.style.display = 'none';
        loginLink.href = '#'; 
        loginLink.textContent = email.split('@')[0];
        loginLink.addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.removeItem('user');
            location.reload();
        });
    }
});