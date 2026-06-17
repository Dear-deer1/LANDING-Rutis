document.addEventListener('DOMContentLoaded', () => {
  // Sticky header shadow on scroll
  const header = document.querySelector('.header');
  const onScroll = () => {
    header.classList.toggle('header--scrolled', window.scrollY > 0);
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  // Animate elements into view
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el));
});
