var navbarVisible = false;

function toggleNavbar() {
    var navbar = document.getElementById('navbar');
    var close = document.getElementById('close');
    var menuIcon = document.getElementById('menu-icon');
    var windowWidth = window.innerWidth;

    if (windowWidth < 576) {
        if (!navbarVisible) {
            navbar.style.display = 'block';
            close.style.display = 'block';
            menuIcon.style.display = 'none';
            navbarVisible = true;
        } else {
            navbar.style.display = 'none';
            close.style.display = 'none';
            menuIcon.style.display = 'block';
            navbarVisible = false;
        }
    } else {
        navbar.style.display = 'block';
        close.style.display = 'none';
        menuIcon.style.display = 'none';
    }

}

function setActiveLink(event) {
    const menuBtns = document.querySelectorAll('.menu-btn');

    menuBtns.forEach(menuBtn => {
        menuBtn.classList.remove('active-link');
    });

    event.target.classList.add('active-link');
    toggleNavbar();
}


