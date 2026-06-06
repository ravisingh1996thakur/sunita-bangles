// ===== MOBILE MENU =====
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.mobile-toggle');
  const menu = document.querySelector('.mobile-menu');
  const close = document.querySelector('.mobile-close');
  const overlay = document.querySelector('.menu-overlay');

  function openMenu() {
    menu?.classList.add('open');
    overlay?.classList.add('show');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    menu?.classList.remove('open');
    overlay?.classList.remove('show');
    document.body.style.overflow = '';
  }

  toggle?.addEventListener('click', openMenu);
  close?.addEventListener('click', closeMenu);
  overlay?.addEventListener('click', closeMenu);
  document.querySelectorAll('.mobile-menu a').forEach(a => a.addEventListener('click', closeMenu));

  // ===== FILTER TOGGLE on Shop =====
  const filterToggle = document.querySelector('.filter-toggle');
  const filters = document.querySelector('.filters');
  filterToggle?.addEventListener('click', () => {
    filters?.classList.toggle('open');
  });

  // ===== Product gallery thumbs =====
  document.querySelectorAll('.pd-thumb').forEach(thumb => {
    thumb.addEventListener('click', () => {
      document.querySelectorAll('.pd-thumb').forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
      const mainImg = document.querySelector('.pd-main-img img');
      const thumbImg = thumb.querySelector('img');
      if (mainImg && thumbImg) {
        mainImg.src = thumbImg.src.replace('w=200', 'w=800');
      }
    });
  });

  // ===== Quantity controls =====
  document.querySelectorAll('.qty-control').forEach(qc => {
    const input = qc.querySelector('input');
    const minus = qc.querySelector('.qty-minus');
    const plus = qc.querySelector('.qty-plus');
    minus?.addEventListener('click', () => {
      const v = parseInt(input.value) || 1;
      if (v > 1) input.value = v - 1;
    });
    plus?.addEventListener('click', () => {
      input.value = (parseInt(input.value) || 1) + 1;
    });
  });

  // ===== Add to cart animation =====
  document.querySelectorAll('.add-cart').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation();
      const badge = document.querySelector('.cart-badge');
      const bottomBadge = document.querySelector('.mobile-bottom-bar .badge');
      [badge, bottomBadge].forEach(b => {
        if (b) {
          const cur = parseInt(b.textContent) || 0;
          b.textContent = cur + 1;
          b.style.transform = 'scale(1.4)';
          setTimeout(() => b.style.transform = 'scale(1)', 200);
        }
      });
      btn.style.background = 'var(--maroon)';
      btn.style.color = '#fff';
      btn.style.borderColor = 'var(--maroon)';
      btn.innerHTML = '✓';
      setTimeout(() => {
        btn.style.background = '';
        btn.style.color = '';
        btn.style.borderColor = '';
        btn.innerHTML = '+';
      }, 1500);
    });
  });

  // ===== Wishlist toggle =====
  document.querySelectorAll('.wishlist').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation();
      const filled = btn.classList.toggle('filled');
      btn.innerHTML = filled ? '♥' : '♡';
      btn.style.background = filled ? 'var(--maroon)' : '';
      btn.style.color = filled ? '#fff' : '';
    });
  });

  // ===== Smooth fade-in =====
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity .5s ease';
    document.body.style.opacity = '1';
  }, 50);
});
