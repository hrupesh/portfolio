const menubtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menunav = document.querySelector('.menu-nav');
const menubranding = document.querySelector('.menu-branding');
const navitems = document.querySelectorAll('.nav-item');

window.onkeydown = function(event) {
    if (event.keyCode == 27 || event.keyCode == 8) {
        menubtn.classList.remove('close');
        menu.classList.remove('show');
        menunav.classList.remove('show');
        menubranding.classList.remove('show');
        navitems.forEach(item => item.classList.remove('show'));
        showmenu = false;
    }
};

let showmenu = false;

menubtn.addEventListener('click', togglemenu);

function togglemenu() {
    if (!showmenu) {
        menubtn.classList.add('close');
        menu.classList.add('show');
        menunav.classList.add('show');
        menubranding.classList.add('show');
        navitems.forEach(item => item.classList.add('show'));
        showmenu = true;
    } else {
        menubtn.classList.remove('close');
        menu.classList.remove('show');
        menunav.classList.remove('show');
        menubranding.classList.remove('show');
        navitems.forEach(item => item.classList.remove('show'));
        showmenu = false;
    }
}