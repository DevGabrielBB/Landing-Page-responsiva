// ── Back to top ──
const backTop = document.getElementById('back-top');
window.addEventListener('scroll', () => {
  backTop.classList.toggle('vis', window.scrollY > 400);
});

// ── Fade in on scroll ──
const fadeEls = document.querySelectorAll('.fade-in');
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const delay = Array.from(e.target.parentElement.children).indexOf(e.target) * 80;
      setTimeout(() => e.target.classList.add('visible'), delay);
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

fadeEls.forEach(el => io.observe(el));
