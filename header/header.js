fetch("header/header.html")
    .then(res => res.text())
    .then(html => {
        document.getElementById("header").innerHTML = html;
        initHeader();
    });

function initHeader() {
    const bannerEl = document.querySelector('.site-header');
    const titleEl = document.getElementById('page-title');

    function setHeaderBg(bg) {
        // reset bg classes that start with 'bg-'
        bannerEl.className = bannerEl.className.split(' ').filter(c => !c.startsWith('bg-')).join(' ');
        if (!bg) return;
        // If bg looks like a hex color, set inline style; otherwise use class 'bg-<name>'
        if (bg.startsWith('#') || bg.startsWith('rgb')) {
            bannerEl.style.background = bg;
        } else {
            bannerEl.classList.add('bg-' + bg);
            bannerEl.style.background = '';
        }
    }

    function updateFromPath() {
        // support both hash (/#/page) and pathname (/page) routing
        const path = (location.hash ? location.hash.replace('#', '') : location.pathname) || '/';

        // try data-path first, then compare href values (exact or ending match)
        let link = document.querySelector(`.main-nav a[data-path="${path}"]`);
        if (!link) {
            link = Array.from(document.querySelectorAll('.main-nav a')).find(a => {
                const href = a.getAttribute('href') || '';
                return href === path || href === `#${path}` || href.endsWith(path);
            });
        }

        if (link) {
            const title = link.dataset.title || '';
            const bg = link.dataset.bg || '';
            titleEl.textContent = title;
            setHeaderBg(bg);
        } else {
            // no match => clear title/bg
            titleEl.textContent = '';
            setHeaderBg('');
        }
    }

    // initial sync
    updateFromPath();

    // handle SPA navigation clicks inside header
    document.addEventListener('click', e => {
        const link = e.target.closest('[data-link]');
        if (!link) return;

        e.preventDefault();
        const href = link.getAttribute('href');
        // Call the global navigate function (defined in index.js) with href
        navigate(href);

        // update header based on the clicked link's data attributes
        const title = link.dataset.title;
        const bg = link.dataset.bg;
        if (title) titleEl.textContent = title;
        setHeaderBg(bg);
    });

    // handle browser back/forward
    window.addEventListener('popstate', updateFromPath);
}

