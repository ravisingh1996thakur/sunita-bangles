// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.mobile-toggle');
  const nav = document.querySelector('nav');
  if (toggle) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('mobile-open');
    });
  }

  // Product gallery thumbs
  document.querySelectorAll('.pd-thumb').forEach(thumb => {
    thumb.addEventListener('click', () => {
      document.querySelectorAll('.pd-thumb').forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
      const mainImg = document.querySelector('.pd-main-img');
      if (mainImg) mainImg.innerHTML = thumb.innerHTML;
    });
  });

  // Quantity controls
  document.querySelectorAll('.qty-control').forEach(qc => {
    const input = qc.querySelector('input');
    const minus = qc.querySelector('.qty-minus');
    const plus = qc.querySelector('.qty-plus');
    if (minus) minus.addEventListener('click', () => {
      const v = parseInt(input.value) || 1;
      if (v > 1) input.value = v - 1;
    });
    if (plus) plus.addEventListener('click', () => {
      input.value = (parseInt(input.value) || 1) + 1;
    });
  });

  // Add to cart animation
  document.querySelectorAll('.add-cart').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation();
      const badge = document.querySelector('.cart-badge');
      if (badge) {
        const cur = parseInt(badge.textContent) || 0;
        badge.textContent = cur + 1;
        badge.style.transform = 'scale(1.5)';
        setTimeout(() => badge.style.transform = 'scale(1)', 200);
      }
      btn.style.background = '#2D5016';
      btn.innerHTML = '✓';
      setTimeout(() => {
        btn.style.background = '';
        btn.innerHTML = '+';
      }, 1500);
    });
  });

  // Smooth scroll fade-in on load
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity .6s ease';
    document.body.style.opacity = '1';
  }, 50);
});
