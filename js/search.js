let menuData = [];
const url = "http://localhost:8000/menu"

// fetch("../DB/menu.json")
//     .then((response) => response.json())
//     .then((data) => {
//         menuData = data.menu;
//         console.log("Menu data loaded");
//     })
//     .catch((error) => {
//         console.error("Error loading menu data:", error);
//     });

async function loadMenuData() {
    const data = await fetch(url);
    menuData = await data.json();
    console.log("Menu data loaded");
}

loadMenuData();

function performSearch() {
    const query = document
        .querySelector("#searchInput")
        .value.toLowerCase()
        .trim();
    const resultsContainer = document.querySelector("#searchResults");
    const noResultsEl = document.querySelector("#noResults");

    if (!query) {
        resultsContainer.innerHTML = "";
        return;
    }

    const allItems = menuData.flatMap((category) => category.items);

    const filteredItems = allItems.filter(
        (item) =>
            item.name.toLowerCase().includes(query) ||
            item.tags.some((tag) => tag.toLowerCase() === query)
    );


    resultsContainer.innerHTML = "";
    resultsContainer.style.display = "grid";

    if (filteredItems.length === 0) {
        resultsContainer.style.display = "none";
        noResultsEl.style.display = "block";
        return;
    }

    filteredItems.forEach((item) => {
        noResultsEl.style.display = 'none';
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("dish-card");

        itemDiv.innerHTML = `
        <div class="dish-image">
            <img src="../${item.image_url}" alt="${item.name}" loading="lazy">
            <div class="dish-badge">
                <i class="fas fa-star"></i>
                <span>${item.rating}</span>
            </div>
        </div>
        <div class="dish-content">
            <h3>${item.name}</h3>
            <p class="restaurant-name">ZestyBite</p>
            <div class="dish-details">
                <span class="price">₹${item.price}</span>
                <span class="delivery-time"><i class="fas fa-clock"></i> 20-30 min</span>
            </div>
            <button class="add-to-cart-btn">
                <i class="fas fa-plus"></i>
                Add to Cart
            </button>
        </div>
    `;

        resultsContainer.appendChild(itemDiv);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const searchBtn = document.getElementById("searchBtn");
    const searchInput = document.getElementById("searchInput");

    if (!searchBtn || !searchInput) {
        console.error("Search button or input not found!");
        return;
    }

    searchInput.addEventListener("input", performSearch);
});
