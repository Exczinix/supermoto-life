function toggleMenu() {
    let menu = document.getElementById("menu");
    menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
}

function openTab(tabName) {
    let tabs = document.getElementsByClassName("tab-content");
    for (let t of tabs) {
        t.classList.remove("active");
    }
    document.getElementById(tabName).classList.add("active");
    document.getElementById("menu").style.display = "none";
}

/* COUNTDOWN */
let targetDate = new Date("Dec 31, 2025 00:00:00").getTime();
setInterval(function () {
    let now = new Date().getTime();
    let distance = targetDate - now;

    let days = Math.floor(distance / (1000*60*60*24));
    let hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
    let minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
    let seconds = Math.floor((distance % (1000*60)) / 1000);

    document.getElementById("timer").innerHTML =
        days + "d " + hours + "h " + minutes + "m " + seconds + "s";
}, 1000);

/* LIGHTBOX */
function openLightbox(img) {
    document.getElementById('lightbox').style.display = 'flex';
    document.getElementById('lightbox-img').src = img.src;
}
function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

/* BESTEL FORM */
function openOrderForm(productName) {
    document.getElementById('order-form').style.display = 'block';
    document.getElementById('product-name').innerText = productName;
    document.getElementById('form-product').value = productName;
}
function closeOrderForm() {
    document.getElementById('order-form').style.display = 'none';
}
