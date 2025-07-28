// Smooth scroll and section activation
        document.addEventListener('DOMContentLoaded', function() {
            // Navigation click handler
            const navLinks = document.querySelectorAll('.nav-link');
            
            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    // Remove active class from all links
                    navLinks.forEach(l => l.classList.remove('active'));
                    
                    // Add active class to clicked link
                    this.classList.add('active');
                    
                    // Get target section
                    const targetId = this.getAttribute('href');
                    const targetSection = document.querySelector(targetId);
                    
                    // Smooth scroll to section
                    targetSection.scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });
            
            // Section activation on scroll
            const sections = document.querySelectorAll('.section');
            
            function checkSectionInView() {
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.clientHeight;
                    const scrollPosition = window.scrollY + window.innerHeight * 0.6;
                    
                    if (scrollPosition > sectionTop && window.scrollY < sectionTop + sectionHeight) {
                        if (!section.classList.contains('active')) {
                            section.classList.add('active');
                            
                            // Update active nav link
                            const id = section.getAttribute('id');
                            navLinks.forEach(link => {
                                if (link.getAttribute('href') === `#${id}`) {
                                    link.classList.add('active');
                                } else {
                                    link.classList.remove('active');
                                }
                            });
                        }
                    }
                });
            }
            
            // Initial check
            checkSectionInView();
            
            // Check on scroll
            window.addEventListener('scroll', checkSectionInView);
            
            // Animation for grid items on scroll
            const gridItems = document.querySelectorAll('.grid-item');
            
            function animateGridItems() {
                gridItems.forEach(item => {
                    const itemPosition = item.getBoundingClientRect().top;
                    const screenPosition = window.innerHeight * 0.8;
                    
                    if (itemPosition < screenPosition) {
                        item.classList.add('slide-up');
                    }
                });
            }
            
            // Initial animation
            animateGridItems();
            
            // Animate on scroll
            window.addEventListener('scroll', animateGridItems);
        });
