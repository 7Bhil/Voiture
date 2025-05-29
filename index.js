const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.navbar ul');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Animation douce au scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Message après l'envoi du formulaire
document.querySelector('.contact-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.");
    this.reset(); // Réinitialise le formulaire
});
  // Script pour le diaporama hero
        document.addEventListener('DOMContentLoaded', function() {
            const slides = document.querySelectorAll('.hero-slide');
            let currentSlide = 0;
            const slideInterval = 3000; // 3 secondes
            
            function nextSlide() {
                // Marque la slide actuelle comme "sortante"
                slides[currentSlide].classList.remove('active');
                slides[currentSlide].classList.add('exiting');
                
                // Passe à la slide suivante
                currentSlide = (currentSlide + 1) % slides.length;
                
                // Réinitialise l'état de la nouvelle slide
                slides[currentSlide].classList.remove('exiting');
                slides[currentSlide].classList.add('active');
            }
            
            // Démarre le diaporama
            let slideTimer = setInterval(nextSlide, slideInterval);
            
            // Gère le survol pour arrêter le diaporama
            const hero = document.querySelector('.hero');
        
        });
        
        // Script pour améliorer le diaporama des marques
        document.addEventListener('DOMContentLoaded', function() {
            const slider = document.querySelector('.brand-slider-container');
            const slides = document.querySelectorAll('.brand-slide');
            const slideWidth = slides[0].offsetWidth;
            
            // Clone les slides pour une boucle infinie
            slider.innerHTML += slider.innerHTML;
            
            // Animation
            let position = 0;
            const speed = 1;
            
            function animate() {
                position -= speed;
                if (position <= -slider.scrollWidth / 2) {
                    position = 0;
                }
                slider.style.transform = `translateX(${position}px)`;
                requestAnimationFrame(animate);
            }
            
            animate();
        });