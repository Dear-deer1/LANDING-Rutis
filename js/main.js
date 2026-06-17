document.addEventListener('DOMContentLoaded', () => {

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
