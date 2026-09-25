// Открытие/закрытие бокового меню
function toggleMenu() {
    const menu = document.getElementById('sideMenu');
    const overlay = document.getElementById('menuOverlay');
    menu.classList.toggle('open');
    overlay.classList.toggle('open');
}

function closeMenu() {
    const menu = document.getElementById('sideMenu');
    const overlay = document.getElementById('menuOverlay');
    menu.classList.remove('open');
    overlay.classList.remove('open');
}

// Раскрытие подменю "Мероприятия"
function toggleSubmenu() {
    const submenu = document.getElementById('eventsSubmenu');
    const arrow = document.getElementById('eventsArrow');
    submenu.classList.toggle('open');
    arrow.classList.toggle('rotated');
}

// Закрытие меню при клике на оверлей
document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.getElementById('menuOverlay');
    if (overlay) {
        overlay.addEventListener('click', closeMenu);
    }
});
