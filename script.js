function showPage(pageId) {
    document.querySelectorAll(".page").forEach(page => {
        page.style.display = "none";
    });
    document.getElementById(pageId).style.display = "block";
}

function orderFood(item, price) {
    alert("🍽️ Order placed for " + item + " (₹" + price + ")");
}

let cart = [];
let total = 0;

function addToCart(item, price) {
    cart.push(item);
    total += price;
    document.getElementById("cartItems").innerHTML += `<li>${item}</li>`;
    document.getElementById("cartTotal").innerText = "Total: ₹" + total;
    orderAnimation();
}


function searchFood() {
    let value = document.getElementById("searchBox").value.toLowerCase();
    document.querySelectorAll(".menu-card").forEach(card => {
        card.style.display = card.dataset.name.includes(value) ? "block" : "none";
    });
}

function orderAnimation() {
    let icon = document.createElement("div");
    icon.innerText = "🍕";
    icon.style.position = "fixed";
    icon.style.right = "20px";
    icon.style.bottom = "20px";
    icon.style.fontSize = "40px";
    document.body.appendChild(icon);
    setTimeout(() => icon.remove(), 600);
}