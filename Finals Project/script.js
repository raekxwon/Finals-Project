// Scroll reveal animation
document.querySelector('footer p').textContent = `© ${new Date().getFullYear()} Raekwon`;
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, {
    threshold: 0.1
  });
  
  // Observe all sections
  document.querySelectorAll('section').forEach(sec => {
    observer.observe(sec);
  });