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

function getPath() {
  return location.hash.replace("#", "") || "/";
}

function loadPage() {
  const path = getPath();
  const page = routes[path] || routes["/"];

  fetch(page)
    .then(r => r.text())
    .then(html => {
      document.getElementById("app").innerHTML = html;
      loadIncludes();
    });
}



// ดักคลิก
document.addEventListener("click", e => {
  const link = e.target.closest("a[data-link]");
  if (!link) return;

  e.preventDefault();
  location.hash = link.getAttribute("href");
});

// เปลี่ยน hash
window.addEventListener("hashchange", loadPage);

// โหลดครั้งแรก
loadPage();


