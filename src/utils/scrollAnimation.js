export const setupScrollAnimation = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    {
      root: null,
      threshold: 0.1,
      rootMargin: '0px'
    }
  );

  // Observe all sections
  document.querySelectorAll('section').forEach((section) => {
    observer.observe(section);
  });
}; 