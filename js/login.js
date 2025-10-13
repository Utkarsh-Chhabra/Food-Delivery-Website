const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const form = document.querySelector("form");
const url = "http://localhost:3000/users";

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {
        alert("Please enter both email and password.");
        return;
    }

    try {
        const response = await fetch(url);
        const data = await response.json();
        const users = data;

        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            window.location.href = "banner.html";
        } else {
            alert("Invalid email or password.");
        }
    } catch (error) {
        console.error(error);
        alert("An error occurred. Please try again.");
    }
});