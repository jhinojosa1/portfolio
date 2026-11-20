const mobileNavQuery = window.matchMedia('(max-width: 720px)');

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
  toggle.innerHTML = '<span class="nav-toggle-lines" aria-hidden="true"></span><span>Menu</span>';
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
    if (event.key === 'Escape' && nav.classList.contains('is-menu-open')) {
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

document.querySelectorAll('.nav-links a, .about-nav a').forEach((link) => {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const href = link.getAttribute('href');
  if (href === currentPath) {
    link.setAttribute('aria-current', 'page');
  } else if (
    (link.hasAttribute('data-experience-link') && ['education.html', 'interests.html'].includes(currentPath)) ||
    (link.closest('.nav-links') && href === 'projects.html' && currentPath.startsWith('case-study-'))
  ) {
    link.setAttribute('aria-current', 'location');
  }
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
  const begin = (x, y) => { startX = x; startY = y; };
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
  const cancel = () => { startX = null; startY = null; };

  if ('PointerEvent' in window) {
    element.addEventListener('pointerdown', (event) => { if (event.isPrimary) begin(event.clientX, event.clientY); });
    element.addEventListener('pointerup', (event) => { if (event.isPrimary) finish(event.clientX, event.clientY); });
    element.addEventListener('pointercancel', cancel);
  } else {
    element.addEventListener('touchstart', (event) => { const t = event.changedTouches[0]; if (t) begin(t.clientX, t.clientY); }, { passive: true });
    element.addEventListener('touchend', (event) => { const t = event.changedTouches[0]; if (t) finish(t.clientX, t.clientY); }, { passive: true });
    element.addEventListener('touchcancel', cancel, { passive: true });
  }
};

document.querySelectorAll('[data-project-carousel]').forEach((carousel) => {
  const previews = carousel.querySelector('.project-previews');
  const slides = Array.from(previews.querySelectorAll('.project-preview'));
  if (slides.length < 2) return;

  const controls = carousel.querySelector('.project-carousel-controls');
  const rotation = controls.querySelector('[data-project-rotation]');
  const counter = controls.querySelector('[data-project-count]');
  const status = carousel.querySelector('[data-project-status]');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let current = 0;
  let rotating = !reducedMotion.matches;
  let timer;

  const show = (index, announce = false) => {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, position) => slide.toggleAttribute('inert', position !== current));
    counter.textContent = `${current + 1} / ${slides.length}`;
    if (announce) {
      const title = slides[current].querySelector('h3').textContent;
      status.textContent = `${title}, project ${current + 1} of ${slides.length}`;
    }
  };

  const updateTimer = () => {
    clearInterval(timer);
    if (rotating && !document.hidden) {
      timer = setInterval(() => {
        if (!slides[current].contains(document.activeElement)) show(current + 1);
      }, 7000);
    }
  };

  const setRotation = (enabled) => {
    rotating = enabled;
    const action = rotating ? 'Pause' : 'Play';
    rotation.textContent = action;
    rotation.setAttribute('aria-label', `${action} project rotation`);
    updateTimer();
  };

  const step = (direction) => {
    show(current + direction, true);
    updateTimer();
  };

  rotation.addEventListener('click', () => setRotation(!rotating));
  controls.querySelector('[data-project-prev]').addEventListener('click', () => step(-1));
  controls.querySelector('[data-project-next]').addEventListener('click', () => step(1));
  controls.addEventListener('keydown', (event) => {
    if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
    event.preventDefault();
    step(event.key === 'ArrowLeft' ? -1 : 1);
  });
  document.addEventListener('visibilitychange', updateTimer);
  reducedMotion.addEventListener('change', (event) => {
    if (event.matches) setRotation(false);
  });
  addSwipeGesture(previews, step);

  show(0);
  previews.classList.add('is-enhanced');
  carousel.setAttribute('aria-roledescription', 'carousel');
  controls.hidden = false;
  setRotation(rotating);
});

document.querySelectorAll('[data-athlete-carousel]').forEach((carousel) => {
  const slides = Array.from(carousel.querySelectorAll('.athlete-slide'));
  const dots = Array.from(carousel.querySelectorAll('[data-athlete-dot]'));
  const counter = carousel.querySelector('[data-athlete-counter]');
  let current = 0;
  const show = (next) => {
    current = (next + slides.length) % slides.length;
    slides.forEach((slide, index) => {
      const active = index === current;
      slide.classList.toggle('is-active', active);
      slide.setAttribute('aria-hidden', String(!active));
    });
    dots.forEach((dot, index) => dot.classList.toggle('is-active', index === current));
    if (counter) counter.textContent = `${current + 1} / ${slides.length}`;
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

const contactForm = document.querySelector('[data-contact-form]');
if (contactForm) {
  const submitButton = contactForm.querySelector('button[type="submit"]');
  const fields = contactForm.querySelector('fieldset');
  const status = contactForm.querySelector('[data-contact-status]');
  const endpoint = new URL(contactForm.action);
  endpoint.pathname = '/ajax' + endpoint.pathname;

  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (submitButton.disabled) return;

    const data = Object.fromEntries(new FormData(contactForm));
    data._captcha = 'false';
    submitButton.disabled = true;
    fields.disabled = true;
    status.textContent = 'Sending…';

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
        signal: AbortSignal.timeout?.(15000)
      });
      const result = await response.json();
      const accepted = result.success === true || result.success === 'true';
      const needsActivation = /activat|confirm your email/i.test(result.message || '');
      if (!response.ok || !accepted || needsActivation) {
        status.textContent = 'The form could not send your message. Please try again or use the email address on this page.';
        return;
      }
      contactForm.reset();
      status.textContent = 'Thank you. Your message was submitted.';
    } catch {
      status.textContent = 'The form could not confirm submission. Please try again or use the email address on this page.';
    } finally {
      submitButton.disabled = false;
      fields.disabled = false;
    }
  });
}

document.querySelectorAll('[data-automation-grid]').forEach((grid) => {
  const automations = Array.from(grid.querySelectorAll('[data-automation]'));
  const search = document.querySelector('[data-automation-search]');
  const searchToggle = document.querySelector('[data-automation-search-toggle]');
  const searchPanel = document.getElementById('automation-search-panel');
  const clearSearch = document.querySelector('[data-automation-search-clear]');
  const filters = Array.from(document.querySelectorAll('[data-automation-filter]'));
  const count = document.querySelector('[data-automation-count]');
  const empty = document.querySelector('[data-automation-empty]');
  const params = new URLSearchParams(window.location.search);
  const requestedCategory = params.get('category');
  const featuredQuery = params.get('q')?.trim() || '';
  if (search && featuredQuery) search.value = featuredQuery;
  let activeCategory = filters.some((button) => button.dataset.automationFilter === requestedCategory) ? requestedCategory : 'all';

  const updateAutomations = () => {
    const query = (search?.value || '').trim().toLowerCase();
    searchToggle?.classList.toggle('has-query', Boolean(query));
    if (clearSearch) clearSearch.hidden = !query;
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

  if (search && searchToggle && searchPanel) {
    const setSearchOpen = (open, moveFocus = true) => {
      searchPanel.hidden = !open;
      searchToggle.setAttribute('aria-expanded', String(open));
      searchToggle.setAttribute('aria-label', open ? 'Close automation search' : 'Open automation search');
      if (moveFocus) (open ? search : searchToggle).focus();
    };
    searchToggle.addEventListener('click', () => setSearchOpen(searchPanel.hidden));
    searchPanel.addEventListener('keydown', (event) => {
      if (event.key !== 'Escape') return;
      event.preventDefault();
      setSearchOpen(false);
    });
    clearSearch?.addEventListener('click', () => {
      search.value = '';
      updateAutomations();
      search.focus();
    });
    if (featuredQuery) setSearchOpen(true, false);
  }

  search?.addEventListener('input', updateAutomations);
  filters.forEach((filter) => {
    const active = filter.dataset.automationFilter === activeCategory;
    filter.classList.toggle('is-active', active);
    filter.setAttribute('aria-pressed', String(active));
  });
  updateAutomations();

  if (featuredQuery) {
    const visible = automations.filter((automation) => !automation.hidden);
    if (visible.length === 1) visible[0].querySelector('details')?.setAttribute('open', '');
  }

  let activeLightbox = null;
  let lastTrigger = null;
  const closeLightbox = () => {
    if (!activeLightbox) return;
    activeLightbox.remove();
    activeLightbox = null;
    if (lastTrigger) {
      lastTrigger.focus();
      lastTrigger = null;
    }
  };

  grid.addEventListener('click', (event) => {
    const link = event.target.closest('.automation-gallery a');
    if (!link || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const img = link.querySelector('img');
    if (!img) return;
    event.preventDefault();
    lastTrigger = link;

    const backdrop = document.createElement('div');
    backdrop.className = 'lightbox-backdrop';
    backdrop.setAttribute('role', 'dialog');
    backdrop.setAttribute('aria-modal', 'true');
    backdrop.setAttribute('aria-label', img.alt || 'Automation screenshot preview');

    const dialog = document.createElement('div');
    dialog.className = 'lightbox-dialog';
    const bar = document.createElement('div');
    bar.className = 'lightbox-bar';
    const caption = document.createElement('p');
    caption.className = 'lightbox-caption';
    caption.textContent = img.alt || 'Automation screenshot';
    const closeBtn = document.createElement('button');
    closeBtn.className = 'lightbox-close';
    closeBtn.type = 'button';
    closeBtn.textContent = 'Close';
    closeBtn.addEventListener('click', closeLightbox);

    const previewImg = document.createElement('img');
    previewImg.className = 'lightbox-img';
    previewImg.src = link.getAttribute('href');
    previewImg.alt = img.alt || '';

    bar.append(caption, closeBtn);
    dialog.append(bar, previewImg);
    backdrop.append(dialog);
    backdrop.addEventListener('click', (e) => { if (e.target === backdrop) closeLightbox(); });
    document.body.append(backdrop);
    activeLightbox = backdrop;
    closeBtn.focus();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && activeLightbox) closeLightbox();
  });
});

// An embedded PDF never matches :focus, so mirror its focus onto the frame that draws the ring.
document.querySelectorAll('.resume-frame').forEach((wrap) => {
  const frame = wrap.querySelector('iframe');
  if (!frame) return;
  const sync = () => wrap.classList.toggle('is-focused', document.activeElement === frame);
  window.addEventListener('blur', () => setTimeout(sync, 0));
  window.addEventListener('focus', sync);
  document.addEventListener('focusin', sync);
  document.addEventListener('focusout', () => setTimeout(sync, 0));
});
