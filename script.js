window.addEventListener('load', function () {
    var loader = document.getElementById('loader');
    loader.style.display = 'none';
});

function toggleSidebar() {
    var menuOverlay = document.querySelector('.menu-overlay');
    var menu = document.querySelector('.menu');

    if (menuOverlay && menu) {
        menuOverlay.style.display = (menu.style.left === '-100%' || menu.style.left === '') ? 'block' : 'none';
        menu.style.left = (menu.style.left === '0%') ? '-100%' : '0%';
    }
}