// Hamburger menu
const mobileMenu = document.getElementById('mobile-menu');
const nav = document.querySelector('nav ul');

if(mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
}
