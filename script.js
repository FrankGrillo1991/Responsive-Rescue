// Hamburger menu toggle
const navToggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('main-nav');
if (navToggle && nav) {
  navToggle.addEventListener('click', function() {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', !expanded);
    nav.classList.toggle('open');
  });
}
