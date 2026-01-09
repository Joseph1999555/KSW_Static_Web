function waitForElement(selector, callback) {
  const el = document.querySelector(selector);
  if (el) return callback(el);

  const observer = new MutationObserver(() => {
    const el = document.querySelector(selector);
    if (el) {
      observer.disconnect();
      callback(el);
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

waitForElement('#next', () => {
  const items = document.querySelectorAll('.item');
  const next = document.getElementById('next');
  const prev = document.getElementById('prev');

  if (!items.length || !next || !prev) {
    console.warn('Slider element not found');
    return;
  }

  let positions = ['pos-main', 'pos-1', 'pos-2', 'pos-3'];

  function applyPositions() {
    items.forEach((item, i) => {
      // reset class
      item.className = 'item ' + positions[i];

      // ใส่ active ให้ตัวหลัก เพื่อให้ text แสดง
      if (positions[i] === 'pos-main') {
        item.classList.add('active');
      }
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
});
