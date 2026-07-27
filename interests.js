(() => {
  const carousel = document.querySelector('[data-coaching-carousel]');
  if (!carousel) return;

  const slides = [...carousel.querySelectorAll('[data-coaching-slide]')];
  const dots = [...carousel.querySelectorAll('[data-coaching-dot]')];
  const previous = carousel.querySelector('[data-coaching-previous]');
  const next = carousel.querySelector('[data-coaching-next]');
  const status = carousel.querySelector('[data-coaching-status]');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let current = 0;
  let timer;

  const show = (index) => {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      const active = slideIndex === current;
      slide.classList.toggle('is-active', active);
      slide.setAttribute('aria-hidden', String(!active));
    });
    dots.forEach((dot, dotIndex) => {
      const active = dotIndex === current;
      dot.classList.toggle('is-active', active);
      dot.setAttribute('aria-pressed', String(active));
    });
    if (status) status.textContent = `Photo ${current + 1} of ${slides.length}`;
  };

  const stop = () => window.clearInterval(timer);
  const start = () => {
    stop();
    if (!reduceMotion) timer = window.setInterval(() => show(current + 1), 5000);
  };
  const move = (direction) => {
    show(current + direction);
    start();
  };

  previous?.addEventListener('click', () => move(-1));
  next?.addEventListener('click', () => move(1));
  dots.forEach((dot, index) => dot.addEventListener('click', () => {
    show(index);
    start();
  }));
  carousel.addEventListener('pointerenter', stop);
  carousel.addEventListener('pointerleave', start);
  carousel.addEventListener('focusin', stop);
  carousel.addEventListener('focusout', (event) => {
    if (!carousel.contains(event.relatedTarget)) start();
  });
  document.addEventListener('visibilitychange', () => document.hidden ? stop() : start());

  show(0);
  start();
})();
(() => {
  const carousel = document.querySelector('[data-achievement-carousel]');
  if (!carousel) return;

  const slides = [...carousel.querySelectorAll('[data-achievement-slide]')];
  const dots = [...carousel.querySelectorAll('[data-achievement-dot]')];
  const previous = carousel.querySelector('[data-achievement-previous]');
  const next = carousel.querySelector('[data-achievement-next]');
  const status = carousel.querySelector('[data-achievement-status]');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let current = 0;
  let timer;

  const show = (index) => {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      const active = slideIndex === current;
      slide.classList.toggle('is-active', active);
      slide.setAttribute('aria-hidden', String(!active));
    });
    dots.forEach((dot, dotIndex) => {
      const active = dotIndex === current;
      dot.classList.toggle('is-active', active);
      dot.setAttribute('aria-pressed', String(active));
    });
    if (status) status.textContent = `Achievement ${current + 1} of ${slides.length}`;
  };

  const stop = () => window.clearInterval(timer);
  const start = () => {
    stop();
    if (!reduceMotion) timer = window.setInterval(() => show(current + 1), 5500);
  };
  const move = (direction) => {
    show(current + direction);
    start();
  };

  previous?.addEventListener('click', () => move(-1));
  next?.addEventListener('click', () => move(1));
  dots.forEach((dot, index) => dot.addEventListener('click', () => {
    show(index);
    start();
  }));
  carousel.addEventListener('pointerenter', stop);
  carousel.addEventListener('pointerleave', start);
  carousel.addEventListener('focusin', stop);
  carousel.addEventListener('focusout', (event) => {
    if (!carousel.contains(event.relatedTarget)) start();
  });
  document.addEventListener('visibilitychange', () => document.hidden ? stop() : start());

  show(0);
  start();
})();