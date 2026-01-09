function initProductSlider() {
  const items = document.querySelectorAll('.item');
  const next = document.getElementById('next');
  const prev = document.getElementById('prev');

  if (!items.length || !next || !prev) return;

  let positions = ['pos-main', 'pos-1', 'pos-2', 'pos-3'];

  function applyPositions() {
    items.forEach((item, i) => {
      item.className = 'item ' + positions[i];
    });
  }

  next.addEventListener('click', () => {
    positions.unshift(positions.pop());
    applyPositions();
  });

  prev.addEventListener('click', () => {
    positions.push(positions.shift());
    applyPositions();
  });

  applyPositions();
}

/* ===== รอให้ buttonNP ปรากฏก่อน ===== */
const observer = new MutationObserver(() => {
  const buttonNP = document.querySelector('.buttonNP');
  if (buttonNP) {
    observer.disconnect(); // หยุดสังเกต
    initProductSlider();  // เริ่มทำงานจริง
  }
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});
