fetch("header/Header.html")
    .then(res => res.text())
    .then(html => {
        document.getElementById("header").innerHTML = html;
    });

function navigate(path) {
  loadPage(path);

  const link = document.querySelector(
    `[data-link][href="${path}"]`
  );

  document.getElementById("page-title").textContent =
    link?.dataset.title || "หน้าแรก";
}

document.addEventListener("click", e => {
    const link = e.target.closest("[data-link]");
    if (!link) return;

    e.preventDefault();
    const path = link.getAttribute("href");
    const title = link.dataset.title;

});
