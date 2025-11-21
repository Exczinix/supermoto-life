// Hamburger menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Countdown instellen (aanpasbaar)
const countdownDate = new Date("Dec 31, 2025 00:00:00").getTime();
const countdownText = document.getElementById("countdown-text");

setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000*60*60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000*60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownText.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

}, 1000);
