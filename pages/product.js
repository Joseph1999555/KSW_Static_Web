let sliderInitialized = false;

function waitForSliderInit() {
  const observer = new MutationObserver(() => {
    const track = document.querySelector('.slider-track');
    const next = document.getElementById('next');
    const prev = document.getElementById('prev');
    const items = document.querySelectorAll('.item');

    if (!track || items.length < 3) return;

    if (!sliderInitialized) {
      sliderInitialized = true;
      initSlider();
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

function initSlider() {
  const items = Array.from(document.querySelectorAll('.item'));
  const total = items.length;

  let current = 1; // pos-2 อยู่กลาง
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

  // ===== Desktop buttons =====
  const nextBtn = document.getElementById('next');
  const prevBtn = document.getElementById('prev');

  if (nextBtn && prevBtn) {
    nextBtn.onclick = next;
    prevBtn.onclick = prev;
  }

  // ===== Mobile swipe =====
  enableMobileSwipe({
    items,
    next,
    prev
  });

  render();
}

/* ===============================
   MOBILE SWIPE (FOLLOW FINGER)
================================ */
function enableMobileSwipe({ items, next, prev }) {
  let startX = 0;
  let currentX = 0;
  let startTime = 0;
  let dragging = false;

  const DISTANCE_THRESHOLD = 5; // ต้องลากไกลจริง
  const TIME_THRESHOLD = 50;     // ms ป้องกัน flick เร็ว
  // const DAMPING = 0.1;            // แรงต้าน (ยิ่งน้อยยิ่งหนืด)

  const slider = document.querySelector('.slider');
  if (!slider) return;

  slider.addEventListener('touchstart', e => {
    if (window.innerWidth > 768) return;

    startX = e.touches[0].clientX;
    currentX = startX;
    startTime = Date.now();
    dragging = true;

    items.forEach(item => {
      item.style.transition = 'none';
    });
  }, { passive: true });

  slider.addEventListener('touchmove', e => {
    if (!dragging || window.innerWidth > 768) return;

    currentX = e.touches[0].clientX;
    const deltaX = (currentX - startX) * DAMPING;

    items.forEach(item => {
      item.style.transform =
        item.style.transform.replace(/translateX\([^)]+\)/g, '') +
        ` translateX(${deltaX}px)`;
    });
  }, { passive: true });

  slider.addEventListener('touchend', () => {
    if (!dragging || window.innerWidth > 768) return;

    const distance = currentX - startX;
    const elapsed = Date.now() - startTime;

    items.forEach(item => {
      item.style.transition =
        'transform .6s cubic-bezier(.4,0,.2,1), opacity .6s ease';
      item.style.transform = '';
    });

    if (
      Math.abs(distance) > DISTANCE_THRESHOLD &&
      elapsed > TIME_THRESHOLD
    ) {
      if (distance < 0) next();
      else prev();
    }

    dragging = false;
    startX = 0;
    currentX = 0;
    startTime = 0;
  });
}

waitForSliderInit();
