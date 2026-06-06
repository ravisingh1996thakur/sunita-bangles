// Run immediately + on DOMContentLoaded
(function () {
  function init() {
    // ===== MOBILE MENU (use event delegation - works even if button added later) =====
    document.addEventListener('click', function (e) {
      var t = e.target;
      // Toggle button
      if (t.closest && t.closest('.mobile-toggle')) {
        e.preventDefault();
        var m = document.querySelector('.mobile-menu');
        var o = document.querySelector('.menu-overlay');
        if (m) m.classList.add('open');
        if (o) o.classList.add('show');
        document.body.style.overflow = 'hidden';
        return;
      }
      // Close button
      if (t.closest && t.closest('.mobile-close')) {
        e.preventDefault();
        closeMenu();
        return;
      }
      // Overlay click
      if (t.classList && t.classList.contains('menu-overlay')) {
        closeMenu();
        return;
      }
      // Any link inside menu closes it
      if (t.closest && t.closest('.mobile-menu a')) {
        closeMenu();
        // let the link continue
        return;
      }
    });

    function closeMenu() {
      var m = document.querySelector('.mobile-menu');
      var o = document.querySelector('.menu-overlay');
      if (m) m.classList.remove('open');
      if (o) o.classList.remove('show');
      document.body.style.overflow = '';
    }

    // ===== FILTER TOGGLE =====
    var filterToggle = document.querySelector('.filter-toggle');
    var filters = document.querySelector('.filters');
    if (filterToggle && filters) {
      filterToggle.addEventListener('click', function () {
        filters.classList.toggle('open');
      });
    }

    // ===== Product gallery thumbs =====
    document.querySelectorAll('.pd-thumb').forEach(function (thumb) {
      thumb.addEventListener('click', function () {
        document.querySelectorAll('.pd-thumb').forEach(function (t) { t.classList.remove('active'); });
        thumb.classList.add('active');
        var mainImg = document.querySelector('.pd-main-img img');
        var thumbImg = thumb.querySelector('img');
        if (mainImg && thumbImg) {
          mainImg.src = thumbImg.src.replace('w=200', 'w=800');
        }
      });
    });

    // ===== Quantity controls =====
    document.querySelectorAll('.qty-control').forEach(function (qc) {
      var input = qc.querySelector('input');
      var minus = qc.querySelector('.qty-minus');
      var plus = qc.querySelector('.qty-plus');
      if (minus) minus.addEventListener('click', function () {
        var v = parseInt(input.value) || 1;
        if (v > 1) input.value = v - 1;
      });
      if (plus) plus.addEventListener('click', function () {
        input.value = (parseInt(input.value) || 1) + 1;
      });
    });

    // ===== Add to cart =====
    document.querySelectorAll('.add-cart').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var badges = document.querySelectorAll('.cart-badge, .mobile-bottom-bar .badge');
        badges.forEach(function (b) {
          var cur = parseInt(b.textContent) || 0;
          b.textContent = cur + 1;
          b.style.transform = 'scale(1.4)';
          setTimeout(function () { b.style.transform = 'scale(1)'; }, 200);
        });
        btn.style.background = 'var(--maroon)';
        btn.style.color = '#fff';
        btn.style.borderColor = 'var(--maroon)';
        btn.innerHTML = '✓';
        setTimeout(function () {
          btn.style.background = '';
          btn.style.color = '';
          btn.style.borderColor = '';
          btn.innerHTML = '+';
        }, 1500);
      });
    });

    // ===== Wishlist =====
    document.querySelectorAll('.wishlist').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var filled = btn.classList.toggle('filled');
        btn.innerHTML = filled ? '♥' : '♡';
        btn.style.background = filled ? 'var(--maroon)' : '';
        btn.style.color = filled ? '#fff' : '';
      });
    });

    // ===== Fade in =====
    document.body.style.opacity = '0';
    requestAnimationFrame(function () {
      document.body.style.transition = 'opacity .5s ease';
      document.body.style.opacity = '1';
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
