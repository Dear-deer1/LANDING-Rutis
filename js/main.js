document.addEventListener('DOMContentLoaded', () => {
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
});
