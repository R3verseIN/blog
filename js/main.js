// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Add scroll behavior for navbar
    const navbar = document.querySelector('nav');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('backdrop-blur-md');
                navbar.classList.add('shadow-lg');
            } else {
                navbar.classList.remove('backdrop-blur-md');
                navbar.classList.remove('shadow-lg');
            }
        });
    }

    // Newsletter form submission
    
    // Contact form submission
    
    // Filter buttons in posts page
    const filterButtons = document.querySelectorAll('.filter-btn');
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => {
                    btn.classList.remove('bg-secondary', 'text-white');
                    btn.classList.add('bg-gray-800', 'text-gray-300', 'hover:bg-secondary', 'hover:text-white');
                });
                
                // Add active class to clicked button
                this.classList.remove('bg-gray-800', 'text-gray-300', 'hover:bg-secondary', 'hover:text-white');
                this.classList.add('bg-secondary', 'text-white');
                
                // Here you would actually filter the posts
                // This is just a UI demonstration
            });
        });
    }

    // Search functionality for the posts page
    const searchInput = document.getElementById('search');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            // Here you would implement the search functionality
            console.log('Searching for:', this.value);
        });
    }

    // Add smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset for fixed navbar
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add scroll-based animations
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.scroll-animate');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animate');
            }
        });
    };

    // Parallax effect for background elements
    const parallaxElements = document.querySelectorAll('.parallax');
    if (parallaxElements.length > 0) {
        window.addEventListener('scroll', function() {
            parallaxElements.forEach(element => {
                const speed = element.getAttribute('data-speed') || 0.5;
                const yPos = -(window.scrollY * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });
        });
    }

    // Add hover effects for cards
    const cards = document.querySelectorAll('.hover-card-rise');
    if (cards.length > 0) {
        cards.forEach(card => {
            card.addEventListener('mousemove', function(e) {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                // Calculate the tilt amount
                const tiltX = (y - rect.height / 2) / 20;
                const tiltY = (rect.width / 2 - x) / 20;
                
                // Apply the transform
                card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-8px) scale(1.02)`;
            });
            
            card.addEventListener('mouseleave', function() {
                card.style.transform = '';
            });
        });
    }

    // Run on initial load
    animateOnScroll();
    
    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);
}); 