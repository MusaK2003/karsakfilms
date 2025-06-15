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

function initializeMenuToggle() {
  document.body.addEventListener('click', function(e) {
    const menuButton = e.target.closest('.mobile-menu-button');
    const mobileLink = e.target.closest('.mobile-menu a');

    if (menuButton) {
      toggleMenu();
      menuButton.classList.toggle('active');
    } else if (mobileLink) {
      toggleMenu();  // closes menu on clicking link
      document.querySelector('.mobile-menu-button').classList.remove('active');
    }
  });
}

function toggleMenu() {
  document.body.classList.toggle('menu-active');
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
