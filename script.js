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

document.querySelectorAll('.product-media').forEach((media) => {
  const track = media.querySelector('.product-track');
  const arrows = media.querySelectorAll('.carousel-arrow');
  if (!track || arrows.length < 2) return;

  const total = track.children.length;
  let index = 0;
  let timer;

  function goTo(i) {
    index = (i + total) % total;
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  function restartAutoplay() {
    clearInterval(timer);
    timer = setInterval(() => goTo(index + 1), 4000);
  }

  arrows[0].addEventListener('click', () => { goTo(index - 1); restartAutoplay(); });
  arrows[1].addEventListener('click', () => { goTo(index + 1); restartAutoplay(); });

  restartAutoplay();
});
