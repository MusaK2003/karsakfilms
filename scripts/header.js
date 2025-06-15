4dhmhm-codex/refactor-pages-to-use-header.js
function loadHeader(lang) {
    const url = lang === 'ru' ? '/headerru.html' : '/header.html';
    fetch(url)
        .then(response => response.text())
        .then(html => {
            const container = document.getElementById('header-container');
            if (container) {
                container.innerHTML = html;
=======
function loadHeader(locale = 'en') {
    const file = locale === 'ru' ? '/headerru.html' : '/header.html';
    fetch(file)
        .then(response => response.text())
        .then(data => {
            const container = document.getElementById('header-container');
            if (container) {
                container.innerHTML = data;
 main
                initializeMenuToggle();
                initializeHeaderOpacity();
            }
        });
}

function initializeMenuToggle() {
    const menuButton = document.querySelector('.mobile-menu-button');
    if (menuButton) {
        menuButton.addEventListener('click', toggleMenu);
    }
}

function toggleMenu() {
    document.body.classList.toggle('menu-active');
 4dhmhm-codex/refactor-pages-to-use-header.js
    const menuButton = document.querySelector('.mobile-menu-button');
    if (menuButton) {
        menuButton.classList.toggle('active');
    }
=======
    const button = document.querySelector('.mobile-menu-button');
    if (button) button.classList.toggle('active');
 main
}

function initializeHeaderOpacity() {
    window.addEventListener('scroll', handleHeaderOpacity);
    handleHeaderOpacity();

    const header = document.querySelector('header');
    if (header) {
 4dhmhm-codex/refactor-pages-to-use-header.js
        header.addEventListener('mouseover', function () {
=======
        header.addEventListener('mouseover', function() {
 main
            this.classList.add('hovered');
            this.style.backgroundColor = 'rgba(5, 5, 5, 0.95)';
            this.style.backdropFilter = 'blur(10px)';
        });
 4dhmhm-codex/refactor-pages-to-use-header.js

        header.addEventListener('mouseout', function () {
=======
        header.addEventListener('mouseout', function() {
 main
            this.classList.remove('hovered');
            handleHeaderOpacity();
        });
    }
}

function handleHeaderOpacity() {
    const top = window.pageYOffset || document.documentElement.scrollTop;
    let opacity = 0;
    let blurValue = 0;

    if (top <= 50) {
        opacity = 1;
        blurValue = 1;
    } else {
        opacity = 0.85;
        blurValue = 10;
    }

    const header = document.querySelector('header');
    if (header && !header.classList.contains('hovered')) {
        header.style.backgroundColor = `rgba(5, 5, 5, ${opacity})`;
        header.style.backdropFilter = `blur(${blurValue}px)`;
    }
}
