const mobileNavQuery = window.matchMedia('(max-width: 680px)');

document.querySelectorAll('.site-nav').forEach((nav, navIndex) => {
  const shell = nav.querySelector('.nav-shell');
  const links = nav.querySelector('.nav-links');
  if (!shell || !links) return;

  const menuId = links.id || `primary-navigation-${navIndex + 1}`;
  links.id = menuId;
  const toggle = document.createElement('button');
  toggle.className = 'nav-toggle';
  toggle.type = 'button';
  toggle.setAttribute('aria-controls', menuId);
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Open navigation menu');
  toggle.innerHTML = '<span class="nav-toggle-lines" aria-hidden="true"></span>';
  shell.insertBefore(toggle, links);
  nav.classList.add('has-menu-toggle');

  const setMenuOpen = (open) => {
    nav.classList.toggle('is-menu-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
  };

  toggle.addEventListener('click', () => setMenuOpen(!nav.classList.contains('is-menu-open')));
  links.addEventListener('click', (event) => {
    if (event.target.closest('a')) setMenuOpen(false);
  });
  document.addEventListener('click', (event) => {
    if (!nav.contains(event.target)) setMenuOpen(false);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      setMenuOpen(false);
      toggle.focus();
    }
  });

  const closeDesktopMenu = (event) => {
    if (!event.matches) setMenuOpen(false);
  };
  if (mobileNavQuery.addEventListener) mobileNavQuery.addEventListener('change', closeDesktopMenu);
  else mobileNavQuery.addListener(closeDesktopMenu);
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  if (link.getAttribute('href') === currentPath) link.setAttribute('aria-current', 'page');
});

document.querySelectorAll('[data-interest-tabs]').forEach((tabList) => {
  const tabs = Array.from(tabList.querySelectorAll('[data-interest-tab]'));
  const panels = Array.from(document.querySelectorAll('[data-interest-panel]'));

  const activateInterest = (name, focusTab = false) => {
    tabs.forEach((tab) => {
      const active = tab.dataset.interestTab === name;
      tab.classList.toggle('is-active', active);
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
      if (active && focusTab) tab.focus();
    });
    panels.forEach((panel) => {
      panel.hidden = panel.dataset.interestPanel !== name;
    });
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => activateInterest(tab.dataset.interestTab));
    tab.addEventListener('keydown', (event) => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      let nextIndex = index;
      if (event.key === 'ArrowLeft') nextIndex = (index - 1 + tabs.length) % tabs.length;
      if (event.key === 'ArrowRight') nextIndex = (index + 1) % tabs.length;
      if (event.key === 'Home') nextIndex = 0;
      if (event.key === 'End') nextIndex = tabs.length - 1;
      activateInterest(tabs[nextIndex].dataset.interestTab, true);
    });
  });
});

const addSwipeGesture = (element, onSwipe) => {
  let startX = null;
  let startY = null;

  const begin = (x, y) => {
    startX = x;
    startY = y;
  };
  const finish = (x, y) => {
    if (startX === null || startY === null) return;
    const distanceX = x - startX;
    const distanceY = y - startY;
    if (Math.abs(distanceX) > 50 && Math.abs(distanceX) > Math.abs(distanceY)) {
      onSwipe(distanceX > 0 ? -1 : 1);
    }
    startX = null;
    startY = null;
  };
  const cancel = () => {
    startX = null;
    startY = null;
  };

  if ('PointerEvent' in window) {
    element.addEventListener('pointerdown', (event) => {
      if (event.isPrimary) begin(event.clientX, event.clientY);
    });
    element.addEventListener('pointerup', (event) => {
      if (event.isPrimary) finish(event.clientX, event.clientY);
    });
    element.addEventListener('pointercancel', cancel);
  } else {
    element.addEventListener('touchstart', (event) => {
      const touch = event.changedTouches[0];
      if (touch) begin(touch.clientX, touch.clientY);
    }, { passive: true });
    element.addEventListener('touchend', (event) => {
      const touch = event.changedTouches[0];
      if (touch) finish(touch.clientX, touch.clientY);
    }, { passive: true });
    element.addEventListener('touchcancel', cancel, { passive: true });
  }
};
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealItems = document.querySelectorAll('.reveal');

if (reduceMotion || !('IntersectionObserver' in window)) {
  revealItems.forEach((item) => item.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver((entries, revealObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => observer.observe(item));
}

document.querySelectorAll('[data-athlete-carousel]').forEach((carousel) => {
  const slides = Array.from(carousel.querySelectorAll('.athlete-slide'));
  const dots = Array.from(carousel.querySelectorAll('[data-athlete-dot]'));
  let current = 0;
  const show = (next) => {
    current = (next + slides.length) % slides.length;
    slides.forEach((slide, index) => {
      const active = index === current;
      slide.classList.toggle('is-active', active);
      slide.setAttribute('aria-hidden', String(!active));
    });
    dots.forEach((dot, index) => dot.classList.toggle('is-active', index === current));
  };
  carousel.querySelector('[data-athlete-prev]')?.addEventListener('click', () => show(current - 1));
  carousel.querySelector('[data-athlete-next]')?.addEventListener('click', () => show(current + 1));
  dots.forEach((dot, index) => dot.addEventListener('click', () => show(index)));
  carousel.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') show(current - 1);
    if (event.key === 'ArrowRight') show(current + 1);
  });
  addSwipeGesture(carousel, (direction) => show(current + direction));
  show(0);
});

document.querySelectorAll('[data-email-form]').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const subject = encodeURIComponent(data.get('subject') || 'Portfolio inquiry');
    const body = encodeURIComponent('Name: ' + data.get('name') + '\nEmail: ' + data.get('email') + '\n\n' + data.get('message'));
    window.location.href = 'mailto:jhinojosa0@tutamail.com?subject=' + subject + '&body=' + body;
  });
});
document.querySelectorAll('[data-automation-grid]').forEach((grid) => {
  const automations = Array.from(grid.querySelectorAll('[data-automation]'));
  const search = document.querySelector('[data-automation-search]');
  const filters = Array.from(document.querySelectorAll('[data-automation-filter]'));
  const count = document.querySelector('[data-automation-count]');
  const empty = document.querySelector('[data-automation-empty]');
  let activeCategory = 'all';

  const updateAutomations = () => {
    const query = (search?.value || '').trim().toLowerCase();
    let visible = 0;
    automations.forEach((automation) => {
      const categories = (automation.dataset.category || '').split(' ');
      const searchText = (automation.dataset.search || '') + ' ' + automation.textContent.toLowerCase();
      const categoryMatch = activeCategory === 'all' || categories.includes(activeCategory);
      const searchMatch = !query || searchText.includes(query);
      const show = categoryMatch && searchMatch;
      automation.hidden = !show;
      if (show) visible += 1;
    });
    if (count) count.textContent = String(visible);
    if (empty) empty.hidden = visible !== 0;
  };

  filters.forEach((filter) => {
    filter.addEventListener('click', () => {
      activeCategory = filter.dataset.automationFilter || 'all';
      filters.forEach((button) => {
        const active = button === filter;
        button.classList.toggle('is-active', active);
        button.setAttribute('aria-pressed', String(active));
      });
      updateAutomations();
    });
  });
  search?.addEventListener('input', updateAutomations);
  filters.forEach((filter, index) => filter.setAttribute('aria-pressed', String(index === 0)));
  updateAutomations();
});

if (!document.querySelector('.site-footer')) {
  const onContactPage = window.location.pathname.toLowerCase().endsWith('/contact.html');
  const onHomePage = window.location.pathname.toLowerCase().endsWith('/index.html') || window.location.pathname === '/';
  const onEducationPage = window.location.pathname.toLowerCase().endsWith('/education.html');
  const onResumePage = window.location.pathname.toLowerCase().endsWith('/resume.html');
  const footerAction = onContactPage
    ? '<a class="site-footer-button" href="mailto:jhinojosa0@tutamail.com">Email me directly ↗</a>'
    : '<a class="site-footer-button" href="contact.html">Start a conversation ↗</a>';
  if (!onResumePage) document.body.insertAdjacentHTML('beforeend', `<footer class="site-footer">
    <div class="editorial-shell">
      ${onHomePage || onEducationPage || onResumePage ? '' : `<div class="site-footer-cta"><p class="section-index">Work together</p><h2>Engineering that works in the field—and holds up in the details.</h2>${footerAction}</div>`}
      <div class="site-footer-meta"><p>Jorge Hinojosa · Mechanical Engineer · Houston, Texas</p><nav aria-label="Footer navigation"><a href="mailto:jhinojosa0@tutamail.com">Email</a><a href="resume.html">Résumé</a><a href="projects.html">Projects</a><a href="https://github.com/jhinojosa1" target="_blank" rel="noopener">GitHub ↗</a></nav></div>
    </div>
  </footer>`);
}
