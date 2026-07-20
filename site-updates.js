document.querySelectorAll('[data-athlete-carousel]').forEach((carousel) => {
  const slides = Array.from(carousel.querySelectorAll('.athlete-slide'));
  const dots = Array.from(carousel.querySelectorAll('[data-athlete-dot]'));
  let current = 0;

  const show = (next) => {
    current = (next + slides.length) % slides.length;
    slides.forEach((slide, index) => slide.classList.toggle('is-active', index === current));
    dots.forEach((dot, index) => dot.classList.toggle('is-active', index === current));
  };

  carousel.querySelector('[data-athlete-prev]')?.addEventListener('click', () => show(current - 1));
  carousel.querySelector('[data-athlete-next]')?.addEventListener('click', () => show(current + 1));
  dots.forEach((dot, index) => dot.addEventListener('click', () => show(index)));
});

const contactForm = document.querySelector('[data-email-form]');
contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(contactForm);
  const subject = encodeURIComponent(data.get('subject') || 'Portfolio inquiry');
  const body = encodeURIComponent(`Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`);
  window.location.href = `mailto:hinojosasb72@gmail.com?subject=${subject}&body=${body}`;
});

