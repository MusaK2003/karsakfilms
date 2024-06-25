function loadHeader() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;
            // After loading the header, initialize the menu toggle and scroll effects
            initializeMenuToggle();
            initializeHeaderOpacity();
        });
}

function initializeMenuToggle() {
    document.querySelector('.mobile-menu-button').addEventListener('click', toggleMenu);
}

function toggleMenu() {
    document.body.classList.toggle('menu-active');
    document.querySelector('.mobile-menu-button').classList.toggle('active');
}

function initializeHeaderOpacity() {
    window.addEventListener('scroll', handleHeaderOpacity);
    handleHeaderOpacity(); // Initial call to set the header state on load

    // Handling header hover effects
    var header = document.querySelector('header');
    header.addEventListener('mouseover', function() {
        this.classList.add('hovered');
        this.style.backgroundColor = 'rgba(5, 5, 5, 0.95)';
        this.style.backdropFilter = 'blur(10px)'; // Maximum blur value on hover
    });

    header.addEventListener('mouseout', function() {
        this.classList.remove('hovered');
        handleHeaderOpacity();
    });
}

function handleHeaderOpacity() {
    var top = window.pageYOffset || document.documentElement.scrollTop;
    var opacity = 0;
    var blurValue = 0;
    
    if (top <= 50) {
        opacity = 1;
        blurValue = 1;
    } else {
        opacity = 0.85;
        blurValue = 10; // Maximum blur value
    }

    var header = document.querySelector('header');
    if (!header.classList.contains('hovered')) {
        header.style.backgroundColor = `rgba(5, 5, 5, ${opacity})`;
        header.style.backdropFilter = `blur(${blurValue}px)`; // Set the blur value
    }
}

document.addEventListener('DOMContentLoaded', loadHeader);
