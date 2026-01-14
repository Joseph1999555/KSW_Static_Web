let sliderInitialized = false;

function waitForSliderInit() {
  const observer = new MutationObserver(() => {
    document.querySelectorAll('.product').forEach(section => {
      const track = section.querySelector('.slider-track');
      const items = section.querySelectorAll('.item');
      const nextBtn = section.querySelector('#next');
      const prevBtn = section.querySelector('#prev');

      if (!track || items.length < 3 || !nextBtn || !prevBtn) return;

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

  section.querySelector('#next').onclick = next;
  section.querySelector('#prev').onclick = prev;

  enableMobileSwipe({
    items,
    next,
    prev,
    slider: section.querySelector('.slider')
  });

  render();
}
/* ===============================
   MOBILE SWIPE (FOLLOW FINGER)
================================ */
function enableMobileSwipe({ items, next, prev, slider }) {
  if (!slider) return;

  let startX = 0;
  let currentX = 0;
  let startTime = 0;
  let dragging = false;

  const DISTANCE_THRESHOLD = 30;
  const TIME_THRESHOLD = 50;

  slider.addEventListener('touchstart', e => {
    if (window.innerWidth > 768) return;

    e.stopPropagation();

    startX = e.touches[0].clientX;
    currentX = startX;
    startTime = Date.now();
    dragging = true;

    items.forEach(item => {
      item.style.transition = 'none';
    });
  }, { passive: false });

  slider.addEventListener('touchmove', e => {
    if (!dragging || window.innerWidth > 768) return;

    e.preventDefault();   // ❗ สำคัญ
    e.stopPropagation();

    currentX = e.touches[0].clientX;
  }, { passive: false });

  slider.addEventListener('touchend', e => {
    if (!dragging || window.innerWidth > 768) return;

    e.stopPropagation();

    const distance = currentX - startX;
    const elapsed = Date.now() - startTime;

    items.forEach(item => {
      item.style.transition =
        'transform .6s cubic-bezier(.4,0,.2,1), opacity .6s ease';
      item.style.transform = '';
    });

    if (Math.abs(distance) > DISTANCE_THRESHOLD && elapsed > TIME_THRESHOLD) {
      distance < 0 ? next() : prev();
    }

    dragging = false;
    startX = 0;
    currentX = 0;
    startTime = 0;
  });
}
waitForSliderInit();
