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

const productTrack = document.getElementById('productTrack');
if (productTrack) {
  const slides = Array.from(productTrack.children);
  const total = slides.length;
  let index = 0;
  let timer;

  function goTo(i) {
    index = (i + total) % total;
    productTrack.style.transform = `translateX(-${index * 100}%)`;
  }

  function next() { goTo(index + 1); }
  function prev() { goTo(index - 1); }

  function restartAutoplay() {
    clearInterval(timer);
    timer = setInterval(next, 4000);
  }

  document.getElementById('prodNext').addEventListener('click', () => {
    next();
    restartAutoplay();
  });
  document.getElementById('prodPrev').addEventListener('click', () => {
    prev();
    restartAutoplay();
  });

  restartAutoplay();
}
