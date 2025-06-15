function loadFooter(locale = 'en') {
    const file = locale === 'ru' ? '/footerru.html' : '/footer.html';
    fetch(file)
        .then(response => response.text())
        .then(data => {
            const container = document.getElementById('footer-container');
            if (container) {
                container.innerHTML = data;
            }
        });
}
