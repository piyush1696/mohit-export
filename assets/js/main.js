(function() {
  // Mobile nav toggle
  const btnMobile = document.getElementById('btn-mobile');
  const mobilePanel = document.getElementById('mobile-panel');
  btnMobile.addEventListener('click', () => {
    mobilePanel.classList.toggle('hidden');
  });

  // Basic contact form behavior (client-side only)
  document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('This is a static prototype. To enable form submissions, connect this form to an email/API endpoint.');
    this.reset();
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if(href.length > 1) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

})();