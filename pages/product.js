let sliderInitialized = false;

function waitForSliderInit() {
  const observer = new MutationObserver(() => {
    document.querySelectorAll('.product').forEach(section => {
      const track = section.querySelector('.slider-track');
      const items = section.querySelectorAll('.item');

      // ❗ ไม่เช็คปุ่มอีกต่อไป
      if (!track || items.length < 3) return;

      if (track.dataset.initialized === 'true') return;

      track.dataset.initialized = 'true';
      initSlider(section);
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}

function initSlider(section) {
  const items = Array.from(section.querySelectorAll('.item'));
  const total = items.length;

  let current = 1;
  let isAnimating = false;

  function render() {
    items.forEach((item, i) => {
      item.className = 'item';

      const diff = (i - current + total) % total;

      if (diff === 0) item.classList.add('pos-2');
      else if (diff === 1) item.classList.add('pos-3');
      else if (diff === total - 1) item.classList.add('pos-1');
      else if (diff < total / 2) item.classList.add('off-right');
      else item.classList.add('off-left');
    });
  }

  function next() {
    if (isAnimating) return;
    isAnimating = true;
    current = (current + 1) % total;
    render();
    setTimeout(() => (isAnimating = false), 600);
  }

  function prev() {
    if (isAnimating) return;
    isAnimating = true;
    current = (current - 1 + total) % total;
    render();
    setTimeout(() => (isAnimating = false), 600);
  }

  /* ❗ ไม่มีปุ่มก็ไม่เป็นไร */
  const nextBtn = section.querySelector('#next');
  const prevBtn = section.querySelector('#prev');

  if (nextBtn) nextBtn.onclick = next;
  if (prevBtn) prevBtn.onclick = prev;

  /* ✅ swipe ทำงานจริง */
  enableMobileSwipe({
    items,
    next,
    prev,
    slider: section.querySelector('.slider-track')
  });

  render();
}

/* ===============================
   MOBILE SWIPE (FOLLOW FINGER)
================================ */
function enableMobileSwipe({ items, next, prev, slider }) {
  if (!slider) return;

  slider.style.touchAction = 'pan-y';

  let startX = 0;
  let currentX = 0;
  let dragging = false;

  const DISTANCE_THRESHOLD = 25;

  slider.addEventListener('touchstart', e => {
    if (window.innerWidth > 768) return;

    startX = e.touches[0].clientX;
    currentX = startX;
    dragging = true;
  }, { passive: true });

  slider.addEventListener('touchmove', e => {
    if (!dragging || window.innerWidth > 768) return;

    currentX = e.touches[0].clientX;
  }, { passive: true });

  slider.addEventListener('touchend', () => {
    if (!dragging || window.innerWidth > 768) return;

    const distance = currentX - startX;

    if (Math.abs(distance) > DISTANCE_THRESHOLD) {
      distance < 0 ? next() : prev();
    }

    dragging = false;
  });
}

waitForSliderInit();
