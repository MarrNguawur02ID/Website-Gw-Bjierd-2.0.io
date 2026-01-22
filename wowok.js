document.addEventListener('DOMContentLoaded', function() {
    
    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const icon = themeToggle.querySelector('i');
    
    // Check for saved theme preference or use preferred color scheme
    const savedTheme = localStorage.getItem('theme') || 
                       (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    // Apply the saved theme
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        if (currentTheme === 'dark') {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Update URL without page reload
                history.pushState(null, null, targetId);
            }
        });
    });
    
    // Track scroll direction for hobby bars
    let lastScrollPosition = window.pageYOffset;
    let scrollDirection = 'down';
    
    const handleScrollDirection = () => {
        const currentScrollPosition = window.pageYOffset;
        
        if (currentScrollPosition > lastScrollPosition) {
            scrollDirection = 'down';
        } else {
            scrollDirection = 'up';
        }
        
        lastScrollPosition = currentScrollPosition;
    };
    
    // Animate progress bars with directional effect
    const animateBarsOnScroll = () => {
        const bars = document.querySelectorAll('.hobby-item');
        const windowHeight = window.innerHeight;
        
        bars.forEach((bar, index) => {
            const barPosition = bar.getBoundingClientRect().top;
            const barVisible = barPosition < windowHeight * 0.8;
            
            if (barVisible) {
                // Delay each bar slightly for staggered effect
                const delay = index * 100;
                
                setTimeout(() => {
                    if (scrollDirection === 'down') {
                        bar.style.transform = 'translateX(-20px)';
                        setTimeout(() => {
                            bar.style.transform = 'translateX(0)';
                            bar.querySelector('.bar').style.width = bar.querySelector('.bar').getAttribute('data-width');
                        }, 300);
                    } else {
                        bar.style.transform = 'translateX(20px)';
                        setTimeout(() => {
                            bar.style.transform = 'translateX(0)';
                            bar.querySelector('.bar').style.width = bar.querySelector('.bar').getAttribute('data-width');
                        }, 300);
                    }
                }, delay);
            }
        });
    };
    
    // Initialize bar widths
    document.querySelectorAll('.bar').forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        bar.setAttribute('data-width', width);
    });
    
    // Run scroll handlers
    window.addEventListener('scroll', () => {
        handleScrollDirection();
        animateBarsOnScroll();
    });
    
    // Run once on load
    animateBarsOnScroll();
    
    // Zoom effect for all elements with zoomable class
    document.querySelectorAll('.zoomable').forEach(element => {
        element.addEventListener('click', function() {
            this.style.transform = 'scale(1.1)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 300);
        });
    });
    
    // Intersection Observer for section animations
    const sections = document.querySelectorAll('.section');
    
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(section);
    });
    
    // Profile picture click effect
    const profilePic = document.getElementById('profile-pic');
    if (profilePic) {
        profilePic.addEventListener('click', function() {
            this.classList.toggle('zoomed');
        });
    }
//MUSIK CIK MUSIK🗣🔥💥📈🤯
const musicIcon = document.getElementById('music-icon');
const musicSelect = document.getElementById('music-select');
const audioPlayer = document.getElementById('audio-player');

musicSelect.addEventListener('change', () => {
  if (musicSelect.value) {
    audioPlayer.src = musicSelect.value;
    audioPlayer.play();
  }
});

musicIcon.addEventListener('click', () => {
  if (!audioPlayer.src) return;

  if (audioPlayer.paused) {
    audioPlayer.play();
  } else {
    audioPlayer.pause();
  }
});
});

