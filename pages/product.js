let sliderInitialized = false;

function waitForSliderInit() {
  const observer = new MutationObserver(() => {
    const next = document.getElementById('next');
    const prev = document.getElementById('prev');
    const items = document.querySelectorAll('.item');

    if (!next || !prev || items.length === 0) {
      sliderInitialized = false;
      return;
    }

    if (!sliderInitialized && items.length >= 2) {
      sliderInitialized = true;
      initSlider();
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}

function initSlider() {
  let positions = ['pos-main', 'pos-1', 'pos-2', 'pos-3'];

  const next = document.getElementById('next');
  const prev = document.getElementById('prev');

  if (!next || !prev) return;

  function applyPositions() {
    const items = document.querySelectorAll('.item');

    items.forEach((item, i) => {
      item.className = 'item ' + (positions[i] || '');

      if (positions[i] === 'pos-main') {
        item.classList.add('active');
      }
    });
  }

  next.onclick = () => {
    positions.unshift(positions.pop());
    applyPositions();
  };

  prev.onclick = () => {
    positions.push(positions.shift());
    applyPositions();
  };

  applyPositions();
}

waitForSliderInit();
