document.addEventListener('DOMContentLoaded', () => {

  /* ── Burger menu ── */
  const nav    = document.getElementById('main-nav');
  const burger = nav && nav.querySelector('.nav__burger');

  if (burger) {
    const toggle = (force) => {
      const isOpen = force !== undefined ? force : !nav.classList.contains('nav--open');
      nav.classList.toggle('nav--open', isOpen);
      burger.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    };

    burger.addEventListener('click', () => toggle());

    nav.querySelectorAll('.nav__link').forEach((link) => {
      link.addEventListener('click', () => toggle(false));
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') toggle(false);
    });
  }

  /* ── FAQ accordion ── */
  document.querySelectorAll('.faq__question').forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq__item');
      const isOpen = item.classList.contains('faq__item--open');

      document.querySelectorAll('.faq__item--open').forEach((el) => {
        el.classList.remove('faq__item--open');
        el.querySelector('.faq__question').setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        item.classList.add('faq__item--open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  /* ── Slide-in backgrounds on scroll ── */
  [
    { selector: '.steps', cls: 'steps--revealed' },
    { selector: '.faq',   cls: 'faq--revealed'   },
  ].forEach(({ selector, cls }) => {
    const el = document.querySelector(selector);
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { el.classList.add(cls); obs.unobserve(el); }
        });
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
  });

  /* ── About text colour reveal on scroll ── */
  const about = document.querySelector('.about');
  if (about) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              about.classList.add('about--revealed');
            }, 200);
            observer.unobserve(about);
          }
        });
      },
      { threshold: 0, rootMargin: '-40% 0px -20% 0px' }
    );
    observer.observe(about);
  }

});
