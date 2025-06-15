function loadHeader(locale = 'en') {
    const file = locale === 'ru' ? '/headerru.html' : '/header.html';
    fetch(file)
        .then(response => response.text())
        .then(data => {
            const container = document.getElementById('header-container');
            if (container) {
                container.innerHTML = data;
                initializeMenuToggle();
                initializeHeaderOpacity();
            }
        });
}

function loadFooter(locale = 'en') {
    const file = locale === 'ru' ? '/footerru.html' : '/footer.html';
    fetch(file)
        .then(response => response.text())
        .then(html => {
            const container = document.getElementById('footer-container');
            if (container) {
                container.innerHTML = html;
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
    const button = document.querySelector('.mobile-menu-button');
    if (button) button.classList.toggle('active');
}

function initializeHeaderOpacity() {
    window.addEventListener('scroll', handleHeaderOpacity);
    handleHeaderOpacity();

    const header = document.querySelector('header');
    if (header) {
        header.addEventListener('mouseover', function() {
            this.classList.add('hovered');
            this.style.backgroundColor = 'rgba(5, 5, 5, 0.95)';
            this.style.backdropFilter = 'blur(10px)';
        });
        header.addEventListener('mouseout', function() {
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
