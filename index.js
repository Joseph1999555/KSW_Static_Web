console.log("main script loaded");

// include partials
function loadIncludes() {
  document.querySelectorAll("[data-include]").forEach(el => {
    fetch(el.dataset.include)
      .then(r => r.text())
      .then(html => el.innerHTML = html);
  });
}

// routes
const routes = {
  "/": "pages/main.html",
  "/news": "pages/news.html",
  "/product": "pages/product.html",
  "/order": "pages/order.html",
  "/about": "pages/about.html",
  "/review": "pages/review.html",
  "/contact": "pages/contact.html"
};

// ดึง path ปัจจุบัน
function getPath() {
  return location.pathname || "/";
}

window.navigate = function (path) {
    history.pushState({}, "", path);
    loadPage(path); // หรือฟังก์ชัน render ของมึง
};


// โหลดหน้าเพจ
function loadPage() {
  const path = getPath();
  const page = routes[path] || routes["/"];

  showSkeleton();
  const start = Date.now();

  fetch(page)
    .then(res => res.text())
    .then(html => {
      const elapsed = Date.now() - start;
      const delay = Math.max(0, 400 - elapsed);

      setTimeout(() => {
        document.getElementById("app").innerHTML = html;
        loadIncludes();
      }, delay);
    })
    .catch(() => {
      document.getElementById("app").innerHTML =
        "<h2>โหลดไม่สำเร็จ</h2>";
    });
}


// ดักคลิก
document.addEventListener("click", e => {
  const link = e.target.closest("a[data-link]");
  if (!link) return;

  e.preventDefault();
  const path = link.getAttribute("href");

  history.pushState({}, "", path);
  loadPage();
});


// loader functions
function showSkeleton() {
  const tpl = document.getElementById("skeleton-template");
  console.log("tpl:", tpl);
  document.getElementById("app").innerHTML = tpl.innerHTML;
}

// เปลี่ยน hash
window.addEventListener("hashchange", loadPage);

// โหลดครั้งแรก
loadPage();


