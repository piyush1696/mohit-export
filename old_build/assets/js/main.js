(function() {
  // Mobile nav toggle
  const btnMobile = document.getElementById('btn-mobile');
  const mobilePanel = document.getElementById('mobile-panel');
  btnMobile.addEventListener('click', () => {
    mobilePanel.classList.toggle('hidden');
  });

  // Basic contact form behavior (client-side only)
  document.getElementById('contactForm').addEventListener('submit', function(e) {
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

  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(this);

    const url = "https://script.google.com/macros/s/AKfycbxYlVn5qJ_eYcNxe8Q7kRZtaS-oiL__cVd4aMi4CCcWWP1vDv5N95HZa_vnNl-WTR60/exec";

    fetch(url, {
      method: 'POST',
      body: formData
    })
    .then(response => response.text())
    .then(data => {
      alert("Your enquiry is registered with us. We will contact you soon.");
      document.getElementById('contactForm').reset();
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });

})();