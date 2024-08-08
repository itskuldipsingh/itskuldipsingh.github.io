function toggleMenu() {
    var menu = document.querySelector('nav');
    var menuBar = document.querySelector('.menu-bar');
    
    if (menu.style.display === 'none') {
        menu.style.display = 'block';
        menuBar.classList.add('active');
    } else {
        menu.style.display = 'none';
        menuBar.classList.remove('active');
    }
}

document.querySelector('.menu-bar').addEventListener('click', toggleMenu);
