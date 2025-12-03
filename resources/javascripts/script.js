// Logo animation on page load and make it a functional home button
document.addEventListener('DOMContentLoaded', function() {
  const logoDiv = document.querySelector('.logo');
  const logoImg = document.querySelector('.logo img');

  if (logoImg && logoDiv) {
    // Add cursor:pointer to show it's clickable
    logoDiv.style.cursor = 'pointer';
    logoDiv.setAttribute('role', 'button');
    logoDiv.setAttribute('aria-label', 'Go to home');
    logoDiv.setAttribute('tabindex', '0');

    // Animate logo on page load with glow effect
    logoImg.style.opacity = '0';
    logoDiv.style.boxShadow = 'none';

    // Trigger animation after a brief delay
    setTimeout(() => {
      logoImg.style.transition = 'opacity 800ms ease-out';
      logoImg.style.opacity = '1';
      logoDiv.style.transition = 'box-shadow 800ms ease-out';
      logoDiv.style.boxShadow = '0 0 30px rgba(255, 255, 255, 0.5)';
    }, 200);

    // Remove glow after animation completes
    setTimeout(() => {
      logoDiv.style.boxShadow = '0 0 15px rgba(255, 255, 255, 0.3)';
      logoDiv.style.transition = 'box-shadow 300ms ease';
    }, 1000);

    // Add click listener to scroll to top (home)
    logoDiv.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    // Also handle keyboard Enter/Space
    logoDiv.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    });

    // Add hover effect feedback (glow intensifies)
    logoDiv.addEventListener('mouseenter', function() {
      logoDiv.style.boxShadow = '0 0 35px rgba(255, 255, 255, 0.6)';
    });

    logoDiv.addEventListener('mouseleave', function() {
      logoDiv.style.boxShadow = '0 0 15px rgba(255, 255, 255, 0.3)';
    });
  }
});
