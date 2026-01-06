fetch("header/Header.html")
    .then(res => res.text())
    .then(html => {
        document.getElementById("header").innerHTML = html;
    });

document.addEventListener("click", e => {
    const link = e.target.closest("[data-link]");
    if (!link) return;

    e.preventDefault();
    const path = link.getAttribute("href");
    const title = link.dataset.title;

    navigate(path);
    document.getElementById("page-title").textContent = title;
});
