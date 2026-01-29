// =============================================
// MOCK DATA
// =============================================
const productData = {
  hoses: {
    title: "ผลิตภัณฑ์สินค้าสายยาง",
    type: "hose",
    items: [
      {
        id: 1,
        name: "สายยางใส",
        description: "ผลิตจากพลาสติก PVC คุณภาพดี มองเห็นการไหลของของเหลวได้ชัดเจน ปราศจากสารโลหะหนัก และสารที่เป็นอันตรายต่อสิ่งแวดล้อม",
        image: "./images/clearhose.jpg",
        alt: "สายยางใส"
      },
      {
        id: 2,
        name: "สายยางฟ้า",
        description: "มีการผสมเนื้อยางพิเศษลงในพลาสติก เพื่อให้มีความยืดหยุ่นสูงเป็นพิเศษ เมื่อโดนรถทับหรือพับงอ จะคืนตัวกลับมาทรงเดิมได้ทันที ไม่หักคา",
        image: "./images/bluehose.jpg",
        alt: "สายยางสีฟ้า"
      },
      {
        id: 3,
        name: "สายยางเขียว",
        description: "ด้วยเนื้อยางที่ทึบแสง 100% รังสี UV ไม่สามารถทะลุผ่านได้ จึงช่วยลดการเกิดของตะไคร่น้ำ ทำให้ไม่มีการอุดตันของหัวฉีดหรือสปริงเกอร์",
        image: "./images/greenhose.jpg",
        alt: "สายยางสีเขียว"
      },
    ]
  },
  pondliners: {
    title: "ผลิตภัณฑ์สินค้าก่อสร้าง",
    type: "construct",
    items: [
      {
        id: 5,
        name: "ตาข่ายลวด MT (ชุบกัลวาไนซ์)",
        description: "เป็นการเคลือบสังกะสีแบบจุ่มร้อน ทำให้มีความทนทานต่อการกัดกร่อนจากสภาพอากาศ และแรงกระแทกจากสัตว์หรือสิ่งของได้ดี",
        image: "./images/pondliner.png",
        alt: "ตาข่ายลวด MT (ชุบกัลวาไนซ์)"
      },
      {
        id: 6,
        name: "ลวดเชื่อม KOBE-30",
        description: "เป็นลวดเชื่อมไฟฟ้าที่มียอดขายอันดับ 1 ตามมาตรฐาน AWS A5.1 E6013 การอาร์คคงที่ สม่ำเสมอ ไม่มีสะดุด",
        image: "./images/pondlinerfightingfishwhite.png",
        alt: "ลวดเชื่อม KOBE-30"
      },
      {
        id: 7,
        name: "ใบตัด SUMO Fast Cut",
        description: "ผลิตจากเม็ดทรายอลูมินั่มออกไซด์เกรดพิเศษ หนาเพียง 1.0 มม. ทำให้รอยตัดเล็ก คมกริบ ออกแบบมาเพื่อตัดสแตนเลส และเหล็กได้ทุกชนิด",
        image: "./images/pondlinerfightingfishblack.png",
        alt: "ใบตัด SUMO Fast Cut"
      }
    ]
  },
  uvs: {
    title: "ผลิตภัณฑ์สินค้ากรองแสง",
    type: "uv",
    items: [
      {
        id: 8,
        name: "กรองแสงสีฟ้า",
        description: "กรองแสงสีฟ้านั้นสามารถสะท้อนแสงได้ปานกลาง ทำให้ช่วยลดอุณหภูมิได้ดี ทั้งยังมีส่วนช่วยในเรื่องของใบให้มีสีเข้มมากยิ่งขึ้นอีกด้วย",
        image: "./images/sunshadenet blue.jpg",
        alt: "กรองแสง ผืนสีฟ้า"
      },
      {
        id: 9,
        name: "กรองแสงสีแดง",
        description: "สีแดงเป็นสีที่ส่งผลต่อแมลงบางชนิด ซึ่งช่วยลดแมลงไม่ให้ใกล้พื้นที่เพาะปลูกแล้วยังช่วยให้พืชมีอัตราติดดอกมากขึ้น",
        image: "./images/sunshadenet red.jpg",
        alt: "กรองแสง ผืนสีแดง"
      },
      {
        id: 10,
        name: "กรองแสงสีขาว",
        description: "ช่วยลดอุณหภูมิ ลดแรงลม ลดความแรงของเม็ดฝน รวมไปถึงการลดอัตราการไหม้ของใบ",
        image: "./images/sunshadenet white.jpg",
        alt: "กรองแสง ผืนสีขาว"
      },
      {
        id: 11,
        name: "กรองแสงสีเงิน",
        description: "ช่วยสะท้อนความร้อน ลดอุณหภูมิโรงเรือน และกระจายแสงได้ทั่วถึง ทำให้พืชโตไว และประหยัดน้ำ",
        image: "./images/sunshadenet gray.jpg",
        alt: "กรองแสง ผืนสีเงิน"
      },
      {
        id: 12,
        name: "กรองแสงสีเขียว",
        description: "เหมาะกับบ่อน้ำ บ่อเลี้ยงกบ หรือสระน้ำที่ต้องการลดการเติบโตของตะไคร่น้ำภายในบ่อ",
        image: "./images/sunshadenet green.jpg",
        alt: "กรองแสง ผืนสีเขียว"
      },
      {
        id: 13,
        name: "กรองแสงสีดำ",
        description: "แสงที่ผ่านลงมานั้นเป็นแสงขาวตามธรรมชาติ ซึ่งเหมาะแก่การสร้างร่มเงาให้พืช หรือนำไปสร้างร่มเงาให้กับบ้านของเราได้",
        image: "./images/sunshadenet black.jpg",
        alt: "กรองแสง ผืนสีดำ"
      }
    ]
  }
};

// =============================================
// STATE MANAGEMENT
// =============================================
let isProductSystemInitialized = false;
let productObserver = null;
let initializedSections = new Set();

// =============================================
// RENDER FUNCTIONS
// =============================================
function renderProductSections() {
  const container = document.getElementById("productSection");
  if (!container) return;

  container.innerHTML = '';

  Object.keys(productData).forEach(key => {
    const category = productData[key];
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

// =============================================
// SCROLL INITIALIZATION
// =============================================
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

  // Clone cards for desktop infinite loop
  if (!isMobile) {
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
    
    cloneBefore.forEach(clone => {
      track.insertBefore(clone, originalCards[0]);
    });
    
    cloneAfter.forEach(clone => {
      track.appendChild(clone);
    });
    
    track.scrollLeft = cardCount * cardWidth;
  }

  // Setup indicator dots
  setupIndicator(indicator, cardCount, cardWidth, track, isMobile);

  // Setup navigation
  if (isMobile) {
    setupMobileNavigation(track, cardWidth, cardCount, updateIndicator);
    if (navLeft) navLeft.style.display = 'none';
    if (navRight) navRight.style.display = 'none';
  } else {
    setupDesktopNavigation(track, navLeft, navRight, cardWidth, cardCount, updateIndicator);
  }

  function updateIndicator(index) {
    const dots = indicator.querySelectorAll(".dot");
    dots.forEach(d => d.classList.remove("active"));
    dots[index]?.classList.add("active");
    currentIndex = index;
  }
}

// =============================================
// HELPER FUNCTIONS
// =============================================
function setupIndicator(indicator, cardCount, cardWidth, track, isMobile) {
  indicator.innerHTML = "";
  
  for (let i = 0; i < cardCount; i++) {
    const dot = document.createElement("div");
    dot.className = "dot";
    if (i === 0) dot.classList.add("active");

    dot.onclick = () => {
      const dots = indicator.querySelectorAll(".dot");
      dots.forEach(d => d.classList.remove("active"));
      dot.classList.add("active");
      
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
}

function setupMobileNavigation(track, cardWidth, cardCount, updateIndicator) {
  track.addEventListener("scroll", () => {
    const rawIndex = track.scrollLeft / cardWidth;
    const index = Math.round(rawIndex);
    
    if (index >= 0 && index < cardCount) {
      updateIndicator(index);
    }
  });
}

function setupDesktopNavigation(track, navLeft, navRight, cardWidth, cardCount, updateIndicator) {
  if (!navLeft || !navRight) return;
  
  navLeft.style.display = 'flex';
  navRight.style.display = 'flex';

  let currentIndex = 0;
  let isResetting = false;

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

// =============================================
// INITIALIZATION
// =============================================
function initAllProductSections() {
  renderProductSections();
  
  Object.keys(productData).forEach(key => {
    const type = productData[key].type;
    initProductScroll(type);
  });
}

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

// =============================================
// START
// =============================================
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', watchProductScroll);
} else {
  watchProductScroll();
}