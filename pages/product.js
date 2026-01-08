const items = document.querySelectorAll('.item');
let index = 0;

document.getElementById('next').onclick = () => {
  index = (index + 1) % items.length;
  update();
};

document.getElementById('prev').onclick = () => {
  index = (index - 1 + items.length) % items.length;
  update();
};

function update() {
  items.forEach((item, i) => {
    item.classList.remove('active');
    const pos = (i - index + items.length) % items.length;

    if (pos === 0) item.classList.add('active');
    item.style.zIndex = 10 - pos;
  });
}

