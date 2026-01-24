let productScrollInited = false;

function initProductScroll() {
  if (productScrollInited) return;
  productScrollInited = true;
  
  const track = document.getElementById("cardTrack");
  const indicator = document.getElementById("indicator");
  if (!track || !indicator) return;

  const originalCards = Array.from(track.children);
  const cardCount = originalCards.length;
  const gap = 16;
  const cardWidth = originalCards[0].offsetWidth + gap;

  // ===== สร้าง infinite loop (clone 2 รอบ) =====
  const cloneSets = 2; // clone ทั้งชุด 2 รอบ
  
  for (let set = 0; set < cloneSets; set++) {
    originalCards.forEach(card => {
      const clone = card.cloneNode(true);
      clone.classList.add("clone");
      track.appendChild(clone);
    });
  }

  // ===== ตั้งตำแหน่งเริ่มต้น =====
  let currentIndex = 0;
  track.scrollLeft = 0;

  // ===== indicator =====
  indicator.innerHTML = "";
  for (let i = 0; i < cardCount; i++) {
    const dot = document.createElement("div");
    dot.className = "dot";
    if (i === 0) dot.classList.add("active");

    dot.onclick = () => {
      currentIndex = i;
      const currentSet = Math.floor(track.scrollLeft / (cardCount * cardWidth));
      track.scrollTo({
        left: (currentSet * cardCount + i) * cardWidth,
        behavior: "smooth"
      });
    };

    indicator.appendChild(dot);
  }

  const dots = indicator.querySelectorAll(".dot");

  function updateIndicator(index) {
    dots.forEach(d => d.classList.remove("active"));
    dots[index]?.classList.add("active");
  }

  // ===== scroll logic =====
  let isResetting = false;

  track.addEventListener("scroll", () => {
    if (isResetting) return;
    
    const scrollLeft = track.scrollLeft;
    const totalWidth = cardCount * cardWidth;
    const maxScroll = totalWidth * (cloneSets + 1);
    
    // คำนวณ index ปัจจุบัน
    const rawIndex = scrollLeft / cardWidth;
    const index = Math.round(rawIndex) % cardCount;
    
    if (index !== currentIndex) {
      currentIndex = index;
      updateIndicator(currentIndex);
    }
    
    // เลื่อนถึงชุดสุดท้าย → กระโดดกลับชุดกลาง (ไม่มีอาการกระตุก)
    if (scrollLeft >= maxScroll - cardWidth) {
      isResetting = true;
      track.style.scrollBehavior = 'auto';
      track.scrollLeft = totalWidth;
      track.style.scrollBehavior = '';
      setTimeout(() => isResetting = false, 50);
    }
    
    // เลื่อนถอยหลังถึงต้น → กระโดดไปชุดกลาง
    if (scrollLeft <= cardWidth) {
      isResetting = true;
      track.style.scrollBehavior = 'auto';
      track.scrollLeft = totalWidth;
      track.style.scrollBehavior = '';
      setTimeout(() => isResetting = false, 50);
    }
  });
}

function watchProductScroll() {
  const observer = new MutationObserver(() => {
    const track = document.getElementById("cardTrack");
    if (!track) return;

    initProductScroll();
    observer.disconnect();
  });

  observer.observe(document.getElementById("app"), {
    childList: true,
    subtree: true
  });
}

watchProductScroll();