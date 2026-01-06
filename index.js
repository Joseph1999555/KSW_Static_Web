// โหลด header / footer
document.querySelectorAll("[data-include]").forEach(el => {
  fetch(el.dataset.include)
    .then(r => r.text())
    .then(html => el.innerHTML = html);
});

// router
const routes = {
  "/": "pages/main.html",
  "/news": "pages/news.html",
  "/product": "pages/product.html",
  "/order": "pages/order.html",
  "/about": "pages/about.html",
  "/review": "pages/review.html",
  "/contact": "pages/contact.html"
};

function navigate(path) {
  const page = routes[path] || routes["/"];

  fetch(page)
    .then(r => r.text())
    .then(html => {
      document.getElementById("app").innerHTML = html;
      history.pushState({}, "", path);
    });
}

// ดักคลิกลิงก์
document.addEventListener("click", e => {
  const link = e.target.closest("[data-link]");
  if (!link) return;

  e.preventDefault();
  navigate(link.getAttribute("href"));
});

// back / forward
window.addEventListener("popstate", () => {
  navigate(location.pathname);
});

// โหลดครั้งแรก
navigate(location.pathname);
