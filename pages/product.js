let sliderInitialized = false;

function waitForSliderInit() {
  const observer = new MutationObserver(() => {
    const track = document.querySelector('.slider-track');
    const next = document.getElementById('next');
    const prev = document.getElementById('prev');
    const items = document.querySelectorAll('.item');

    if (!track || !next || !prev || items.length < 3) return;

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
  let current = 1; // pos-2 เริ่มที่ item กลาง
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
    setTimeout(() => isAnimating = false, 600);
  }

  function prev() {
    if (isAnimating) return;
    isAnimating = true;
    current = (current - 1 + total) % total;
    render();
    setTimeout(() => isAnimating = false, 600);
  }

  document.getElementById('next').onclick = next;
  document.getElementById('prev').onclick = prev;

  render();
}

waitForSliderInit();
