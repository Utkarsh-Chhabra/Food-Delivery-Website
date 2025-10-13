const form = document.querySelector("form");
const url = "http://localhost:3000/users";

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const altNumber = document.getElementById("alt-number").value.trim();
    const password = document.getElementById("password").value.trim();
    const address = document.getElementById("address").value.trim();

    if (!fullname || !email || !phone || !password || !address) {
        alert("Please fill in all required fields.");
        return;
    }

    const emailInput = document.getElementById("email");
    if (!emailInput.checkValidity()) {
        alert("Please enter a valid email address.");
        return;
    }

    try {
        const checkResponse = await fetch(url);
        const users = await checkResponse.json();
        const existingUser = users.find(u => u.email === email);

        if (existingUser) {
            alert("An account with this email already exists.");
            return;
        }

        const newUser = {
            fullname,
            email,
            phone,
            altNumber,
            password,
            address
        };

        const postResponse = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        });

        if (postResponse.ok) {
            window.location.href = "logIn.html";
        } else {
            alert("Failed to create account. Please try again.");
        }
    } catch (error) {
        console.error("Error during signup:", error);
        alert("An error occurred. Please try again.");
    }
});