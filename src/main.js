/* Mobile nav toggle */
const nav = document.getElementById('nav');
const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('open');
});

/* Scroll reveal */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

document
  .querySelectorAll('.cases-grid .case-card, .timeline li')
  .forEach((el) => observer.observe(el));

/* Dynamic year */
document.getElementById('year').textContent = new Date().getFullYear();

/* Fake form submit */
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('¡Gracias! Nos pondremos en contacto pronto.');
  e.target.reset();
});
