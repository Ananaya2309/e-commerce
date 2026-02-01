const products = [
    {name:"Smartphone", price:15000, rating:4.5, category:"Electronics"},
    {name:"Laptop", price:55000, rating:4.7, category:"Electronics"},
    {name:"Headphones", price:2000, rating:4.2, category:"Electronics"},
    {name:"Smart Watch", price:3000, rating:4.0, category:"Electronics"},
    {name:"T-Shirt", price:800, rating:4.1, category:"Clothing"},
    {name:"Jeans", price:1800, rating:4.3, category:"Clothing"},
    {name:"Jacket", price:2500, rating:4.6, category:"Clothing"},
    {name:"Sneakers", price:3500, rating:4.4, category:"Clothing"},
    {name:"Novel Book", price:400, rating:4.2, category:"Books"},
    {name:"Science Book", price:650, rating:4.5, category:"Books"},
    {name:"Comic Book", price:300, rating:4.0, category:"Books"},
    {name:"Notebook", price:150, rating:3.9, category:"Books"},
    {name:"Sunglasses", price:1200, rating:4.3, category:"Accessories"},
    {name:"Wallet", price:900, rating:4.1, category:"Accessories"},
    {name:"Backpack", price:2200, rating:4.6, category:"Accessories"},
    {name:"Watch", price:3200, rating:4.4, category:"Accessories"},
    {name:"Tablet", price:20000, rating:4.5, category:"Electronics"},
    {name:"Keyboard", price:1500, rating:4.2, category:"Electronics"},
    {name:"Cap", price:500, rating:4.0, category:"Clothing"},
    {name:"Scarf", price:700, rating:4.1, category:"Accessories"}
];

let filteredProducts = [...products];

const container = document.getElementById("productContainer");
const sortSelect = document.getElementById("sortSelect");
const categoryFilter = document.getElementById("categoryFilter");

function displayProducts(list) {
    container.innerHTML = "";
    list.forEach(p => {
        container.innerHTML += `
            <div class="product">
                <h3>${p.name}</h3>
                <p>Price: ₹${p.price}</p>
                <p>Rating: ⭐ ${p.rating}</p>
                <p>Category: ${p.category}</p>
            </div>
        `;
    });
}

sortSelect.addEventListener("change", () => {
    const value = sortSelect.value;

    if (value === "priceAsc") filteredProducts.sort((a,b)=>a.price-b.price);
    if (value === "priceDesc") filteredProducts.sort((a,b)=>b.price-a.price);
    if (value === "nameAsc") filteredProducts.sort((a,b)=>a.name.localeCompare(b.name));
    if (value === "nameDesc") filteredProducts.sort((a,b)=>b.name.localeCompare(a.name));
    if (value === "ratingAsc") filteredProducts.sort((a,b)=>a.rating-b.rating);
    if (value === "ratingDesc") filteredProducts.sort((a,b)=>b.rating-a.rating);

    displayProducts(filteredProducts);
});

categoryFilter.addEventListener("change", () => {
    const category = categoryFilter.value;
    filteredProducts = category === "All"
        ? [...products]
        : products.filter(p => p.category === category);

    displayProducts(filteredProducts);
});

displayProducts(filteredProducts);
