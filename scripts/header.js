function toggleMenu() {
    document.body.classList.toggle('menu-active');
    // Add a class toggle to the button as well
    document.querySelector('.mobile-menu-button').classList.toggle('active');
}

// Add the existing JavaScript code here for header opacity and modal functionality

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

window.addEventListener('scroll', handleHeaderOpacity);

// Apply initial settings on load
document.addEventListener('DOMContentLoaded', handleHeaderOpacity);

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

function switchLanguage(lang) {
    if (lang === 'ru') {
        window.location.href = window.location.pathname.replace('/aboutus', '/aboutus/ru');
    } else {
        window.location.href = window.location.pathname.replace('/aboutus/ru', '/aboutus');
    }
}
