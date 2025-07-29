document.addEventListener("DOMContentLoaded", function() {
    // Fade in effect
    document.body.style.opacity = 0;
    setTimeout(() => {
        document.body.style.opacity = 1;
    }, 500);

    // Smooth scroll
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Toggle theme
    const toggleButton = document.getElementById('toggle-theme');
    toggleButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            document.body.style.backgroundColor = '#333';
            document.body.style.color = '#f0f0f0';
        } else {
            document.body.style.backgroundColor = '#f0f0f0';
            document.body.style.color = '#333';
        }
    });
});
