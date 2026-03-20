document.addEventListener('DOMContentLoaded', function() {
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
          });
      });
  });

  // Add animation on scroll
  const animateOnScroll = () => {
      const elements = document.querySelectorAll('.process-step, .product-card');
      elements.forEach(element => {
          const elementTop = element.getBoundingClientRect().top;
          const elementBottom = element.getBoundingClientRect().bottom;
          
          if (elementTop < window.innerHeight && elementBottom > 0) {
              element.style.opacity = '1';
              element.style.transform = 'translateY(0)';
          }
      });
  };

  // Initial check
  animateOnScroll();

  // Add scroll event listener
  window.addEventListener('scroll', animateOnScroll);
});

document.addEventListener('DOMContentLoaded', function() {
  const map = document.getElementById('map');
  map.innerHTML = '<iframe title="map" width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14763.94363499214!2d73.16081216745654!3d22.316372674798455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc95966221d97%3A0xd33f75544929ce84!2sYogi%20Krupa%20Apartment!5e0!3m2!1sen!2sin!4v1774018883286!5m2!1sen!2sin"></iframe>';
});