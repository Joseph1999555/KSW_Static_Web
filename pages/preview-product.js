

// ===== Mock Data =====
const productData = {
  hoses: {
    title: "ผลิตภัณฑ์สินค้าสายยาง",
    type: "hose",
    items: [
      {
        id: 1,
        name: "สายยาง สีเขียว",
        description: "สายยางผลิตจากพลาสติกคุณภาพสูง มีความยืดหยุ่นดี แข็งแรง ทนทาน เหมาะกับการใช้งานทั่วไป",
        image: "./images/greenhose.jpg",
        alt: "สายยางสีเขียว"
      },
      {
        id: 2,
        name: "สายยางใส",
        description: "ผลิตจากวัตถุดิบคุณภาพ ทนต่ออากาศร้อนชื้น ไม่กรอบแตกง่าย",
        image: "./images/clearhose.jpg",
        alt: "สายยางใส"
      },
      {
        id: 3,
        name: "สายยาง สีฟ้า",
        description: "โครงสร้างแข็งแรง ป้องกัน UV ใช้งานได้ยาว ๆ",
        image: "./images/bluehose.jpg",
        alt: "สายยางสีฟ้า"
      },
      {
        id: 4,
        name: "สายยาง สีส้ม",
        description: "ทนทานพิเศษ เหมาะสำหรับงานหนัก",
        image: "./images/bluehose.jpg",
        alt: "สายยางสีส้ม"
      }
    ]
  },
  // เพิ่ม product type อื่นได้ตรงนี้
  pondliners: {
    title: "ผลิตภัณฑ์สินค้าปูบ่อ",
    type: "pondliner",
    items: [
      {
        id: 5,
        name: "ปูบ่อใส แบบม้วน",
        description: "สายยางผลิตจากพลาสติกคุณภาพสูง ที่มีความยืดหยุ่นดี ผ่านกระบวนการผลิต มาตรฐาน ทำให้ได้ขนาดและรูปทรงที่แม่นยำ มีให้เลือกหลากหลายประเภทตามลักษณะการใช้งาน รองรับทั้งงานทั่วไปและงานเฉพาะทาง",
        image: "./images/pondliner.png",
        alt: "ปูบ่อใส แบบม้วน"
      },
      {
        id: 6,
        name: "ปูบ่อปลากัดสีขาว แบบม้วน",
        description: "ตาข่ายพลาสติกคุณภาพสูง ผลิตจากวัตถุดิบที่คัดสรรอย่างพิถีพิถัน ผ่านกระบวนการผลิตด้วยเครื่องจักรมาตรฐาน อุตสาหกรรม และสูตรผสมเฉพาะของเรา ทำให้ทนต่อสภาพอากาศร้อนชื้น ไม่กรอบหรือแตกง่าย แข็งแรง ทนทาน",
        image: "./images/pondlinerfightingfishwhite.png",
        alt: "ปูบ่อปลากัดสีขาว แบบม้วน"
      },
      {
        id: 7,
        name: "ปูบ่อปลากัดสีดำ แบบม้วน",
        description: "ผลิตภัณฑ์พลาสติกกรองแสงคุณภาพสูง ผลิตจากวัตถุดิบเกรด A ด้วยกระบวนการผลิตแบบ ระบบการทอ ที่เสริมความแข็งแรงของเนื้อวัสดุด้วย โครงสร้างกระดูกงูเป็นช่วง ๆ พร้อมสารป้องกันรังสี อัลตราไวโอเลต (UV)",
        image: "./images/pondlinerfightingfishblack.png",
        alt: "ปูบ่อปลากัดสีดำ แบบม้วน"
      }
    ]
  },
  uvs: {
    title: "ผลิตภัณฑ์สินค้ากรองแสง",
    type: "uv",
    items: [
      {
        id: 8,
        name: "กรองแสง ผืนสีเขียว",
        description: "สายยางผลิตจากพลาสติกคุณภาพสูง ที่มีความยืดหยุ่นดี ผ่านกระบวนการผลิต มาตรฐาน ทำให้ได้ขนาดและรูปทรงที่แม่นยำ มีให้เลือกหลากหลายประเภทตามลักษณะการใช้งาน รองรับทั้งงานทั่วไปและงานเฉพาะทาง",
        image: "./images/sunshadenet green.jpg",
        alt: "กรองแสง ผืนสีเขียว"
      },
      {
        id: 9,
        name: "กรองแสง ผืนสีเทา",
        description: "ตาข่ายพลาสติกคุณภาพสูง ผลิตจากวัตถุดิบที่คัดสรรอย่างพิถีพิถัน ผ่านกระบวนการผลิตด้วยเครื่องจักรมาตรฐาน อุตสาหกรรม และสูตรผสมเฉพาะของเรา ทำให้ทนต่อสภาพอากาศร้อนชื้น ไม่กรอบหรือแตกง่าย แข็งแรง ทนทาน",
        image: "./images/sunshadenet gray.jpg",
        alt: "กรองแสง ผืนสีเทา"
      },
      {
        id: 10,
        name: "กรองแสง ผืนสีแดง",
        description: "ผลิตภัณฑ์พลาสติกกรองแสงคุณภาพสูง ผลิตจากวัตถุดิบเกรด A ด้วยกระบวนการผลิตแบบ ระบบการทอ ที่เสริมความแข็งแรงของเนื้อวัสดุด้วย โครงสร้างกระดูกงูเป็นช่วง ๆ พร้อมสารป้องกันรังสี อัลตราไวโอเลต (UV)",
        image: "./images/sunshadenet red.jpg",
        alt: "กรองแสง ผืนสีแดง"
      }
    ]
  }
};

// ===== Render Product Sections =====
function renderProductSections() {
  const container = document.getElementById("productSection");
  if (!container) return;

  container.innerHTML = '';

  Object.keys(productData).forEach(key => {
    const category = productData[key];
    const sectionId = `section-${category.type}`;
    const trackId = `cardTrack-${category.type}`;
    const indicatorId = `indicator-${category.type}`;
    const navLeftId = `navLeft-${category.type}`;
    const navRightId = `navRight-${category.type}`;

    const sectionHTML = `
      <div class="product-category" data-type="${category.type}">
        <h2 class="section-title">${category.title}</h2>
        <div class="card-wrapper">
          <button class="nav-btn nav-btn-left" id="${navLeftId}">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          
          <button class="nav-btn nav-btn-right" id="${navRightId}">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
          
          <div class="card-viewport">
            <div class="card-track" id="${trackId}">
              ${category.items.map(item => `
                <div class="product-card" data-id="${item.id}">
                  <img src="${item.image}" alt="${item.alt}">
                  <div class="card-body">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
        <div class="scroll-indicator" id="${indicatorId}"></div>
      </div>
    `;

    container.insertAdjacentHTML('beforeend', sectionHTML);
  });
}

// ===== Init All =====
function initAllProductSections() {
  renderProductSections();
  
  Object.keys(productData).forEach(key => {
    const type = productData[key].type;
    initProductScroll(type);
  });
}

// ===== Initialize Each Product Section =====
let isProductSystemInitialized = false;
let productObserver = null;
let initializedSections = new Set();
let lastIsMobile = window.innerWidth <= 768;

function initProductScroll(type) {
  if (initializedSections.has(type)) return;
  initializedSections.add(type);
  
  const track = document.getElementById(`cardTrack-${type}`);
  const indicator = document.getElementById(`indicator-${type}`);
  const navLeft = document.getElementById(`navLeft-${type}`);
  const navRight = document.getElementById(`navRight-${type}`);
  
  if (!track || !indicator) return;

  const originalCards = Array.from(track.querySelectorAll('.product-card:not(.clone)'));
  const cardCount = originalCards.length;
  const gap = 16;
  const cardWidth = originalCards[0].offsetWidth + gap;
  const isMobile = window.innerWidth <= 768;

  let currentIndex = 0;

  // ===== Desktop: Clone cards for infinite loop =====
if (!isMobile) {
  // Clone 1 ชุดไว้หน้า, 1 ชุดไว้หลัง
  const cloneBefore = [];
  const cloneAfter = [];
  
  originalCards.forEach(card => {
    const cloneBef = card.cloneNode(true);
    const cloneAft = card.cloneNode(true);
    cloneBef.classList.add("clone");
    cloneAft.classList.add("clone");
    cloneBefore.push(cloneBef);
    cloneAfter.push(cloneAft);
  });
  
  // ใส่ clone หน้าไว้ก่อน
  cloneBefore.forEach(clone => {
    track.insertBefore(clone, originalCards[0]);
  });
  
  // ใส่ clone หลังไว้ท้าย
  cloneAfter.forEach(clone => {
    track.appendChild(clone);
  });
  
  // เริ่มที่ชุดกลาง (ชุดจริง)
  track.scrollLeft = cardCount * cardWidth;
}

  // ===== indicator =====
  indicator.innerHTML = "";
  for (let i = 0; i < cardCount; i++) {
    const dot = document.createElement("div");
    dot.className = "dot";
    if (i === 0) dot.classList.add("active");

    dot.onclick = () => {
      currentIndex = i;
      updateIndicator(currentIndex);
      
      if (isMobile) {
        track.scrollTo({
          left: i * cardWidth,
          behavior: "smooth"
        });
      } else {
        const currentSet = Math.floor(track.scrollLeft / (cardCount * cardWidth));
        track.scrollTo({
          left: (currentSet * cardCount + i) * cardWidth,
          behavior: "smooth"
        });
      }
    };

    indicator.appendChild(dot);
  }

  const dots = indicator.querySelectorAll(".dot");

  function updateIndicator(index) {
    dots.forEach(d => d.classList.remove("active"));
    dots[index]?.classList.add("active");
  }

  // ===== Desktop Navigation Buttons =====
  if (!isMobile && navLeft && navRight) {
    navLeft.style.display = 'flex';
    navRight.style.display = 'flex';

    navLeft.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + cardCount) % cardCount;
      const currentSet = Math.floor(track.scrollLeft / (cardCount * cardWidth));
      track.scrollTo({
        left: (currentSet * cardCount + currentIndex) * cardWidth,
        behavior: "smooth"
      });
      updateIndicator(currentIndex);
    });

    navRight.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % cardCount;
      const currentSet = Math.floor(track.scrollLeft / (cardCount * cardWidth));
      track.scrollTo({
        left: (currentSet * cardCount + currentIndex) * cardWidth,
        behavior: "smooth"
      });
      updateIndicator(currentIndex);
    });

    let isResetting = false;
    
    track.addEventListener("scroll", () => {
      if (isResetting) return;
      
      const scrollLeft = track.scrollLeft;
      const totalWidth = cardCount * cardWidth;
      const maxScroll = totalWidth * 3;
      
      const rawIndex = scrollLeft / cardWidth;
      const index = Math.round(rawIndex) % cardCount;
      
      if (index !== currentIndex) {
        currentIndex = index;
        updateIndicator(currentIndex);
      }
      
      if (scrollLeft >= maxScroll - cardWidth) {
        isResetting = true;
        track.style.scrollBehavior = 'auto';
        track.scrollLeft = totalWidth;
        track.style.scrollBehavior = '';
        setTimeout(() => isResetting = false, 50);
      }
      
      if (scrollLeft <= cardWidth) {
        isResetting = true;
        track.style.scrollBehavior = 'auto';
        track.scrollLeft = totalWidth;
        track.style.scrollBehavior = '';
        setTimeout(() => isResetting = false, 50);
      }
    });
  }

  // ===== Mobile: Simple scroll =====
  if (isMobile) {
    if (navLeft) navLeft.style.display = 'none';
    if (navRight) navRight.style.display = 'none';
    
    track.addEventListener("scroll", () => {
      const rawIndex = track.scrollLeft / cardWidth;
      const index = Math.round(rawIndex);
      
      if (index !== currentIndex && index >= 0 && index < cardCount) {
        currentIndex = index;
        updateIndicator(currentIndex);
      }
    });
  }
}

// ===== Main Init =====
function initAllProductSections() {
  renderProductSections();
  
  // Initialize all sections
  Object.keys(productData).forEach(key => {
    const type = productData[key].type;
    initProductScroll(type);
  });
}

// ===== Watch (ใช้ flag ป้องกันซ้ำ) =====
function watchProductScroll() {
  if (isProductSystemInitialized) return;
  
  const container = document.getElementById("productSection");
  
  if (container) {
    initAllProductSections();
    isProductSystemInitialized = true;
  } else {
    if (productObserver) productObserver.disconnect();
    
    productObserver = new MutationObserver(() => {
      if (document.getElementById("productSection")) {
        initAllProductSections();
        isProductSystemInitialized = true;
        productObserver.disconnect();
      }
    });

    productObserver.observe(document.body, {
      childList: true,
      subtree: true
    });
  }
}

watchProductScroll();

// ===== Re-init on resize =====
// let resizeTimer;
// window.addEventListener('resize', () => {
//   clearTimeout(resizeTimer);
//   resizeTimer = setTimeout(() => {
//     initializedSections.clear();
//     initAllProductSections();
//   }, 250);
// });

// ===== Start (รันครั้งเดียว) =====
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', watchProductScroll);
} else {
  watchProductScroll();
}