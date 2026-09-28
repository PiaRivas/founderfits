const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

mainNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

const toast = document.getElementById('toast');
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
}

const messages = [
  'Added to cart. Series A term sheet not included.',
  'Added to cart. Board seat still pending.',
  'Added to cart. "We" energy shipping in 5-7 business days.',
];

document.getElementById('addToCart').addEventListener('click', () => {
  const msg = messages[Math.floor(Math.random() * messages.length)];
  showToast(msg);
});
