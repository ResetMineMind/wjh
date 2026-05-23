document.addEventListener('DOMContentLoaded', function () {

    /* Detect iframe mode — if inside iframe, hide shell and report height to parent */
    var isInIframe = window !== window.top;
    if (isInIframe) {
        document.documentElement.classList.add('in-iframe');
        if (typeof I18N !== 'undefined') I18N.init();

        document.querySelectorAll('.fade-up').forEach(function (el) {
            el.classList.add('visible');
        });

        document.querySelectorAll('.blog-full-card').forEach(function (card) {
            var rm = card.querySelector('.read-more');
            if (rm) {
                rm.addEventListener('click', function (e) {
                    e.preventDefault();
                    card.classList.toggle('expanded');
                    var isOpen = card.classList.contains('expanded');
                    var expand = card.querySelector('.blog-expand');
                    if (expand) expand.style.maxHeight = isOpen ? expand.scrollHeight + 'px' : '0';
                    setTimeout(sendHeight, 50);
                });
            }
        });

        function sendHeight() {
            var h = document.documentElement.scrollHeight;
            window.parent.postMessage({ type: 'iframe-height', height: h }, '*');
        }
        sendHeight();
        setTimeout(sendHeight, 100);
        setTimeout(sendHeight, 300);
        setTimeout(sendHeight, 1000);
        new ResizeObserver(sendHeight).observe(document.body);

        return;
    }

    /* === Main page logic (only runs on top-level window) === */

    if (typeof I18N !== 'undefined') I18N.init();

    var header = document.querySelector('.site-header');
    var footer = document.querySelector('.site-footer');
    var pageContent = document.getElementById('page-content');
    var currentPage = '';

    /* Header scroll effect */
    if (header) {
        window.addEventListener('scroll', function () {
            header.classList.toggle('scrolled', window.scrollY > 20);
        });
    }

    /* Language switcher toggle */
    var langSwitcher = document.querySelector('.lang-switcher');
    var langBtn = document.querySelector('.lang-btn');
    if (langBtn && langSwitcher) {
        langBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            langSwitcher.classList.toggle('open');
        });
        document.addEventListener('click', function () { langSwitcher.classList.remove('open'); });
    }

    /* Mobile nav */
    var toggle = document.querySelector('.mobile-toggle');
    var mobileMenu = document.querySelector('.mobile-menu');
    if (toggle && mobileMenu) {
        toggle.addEventListener('click', function () {
            toggle.classList.toggle('open');
            mobileMenu.classList.toggle('open');
        });
        mobileMenu.querySelectorAll('a').forEach(function (a) {
            a.addEventListener('click', function () {
                toggle.classList.remove('open');
                mobileMenu.classList.remove('open');
            });
        });
    }

    /* Scroll to top */
    var scrollBtn = document.querySelector('.scroll-top');
    if (scrollBtn) {
        window.addEventListener('scroll', function () {
            scrollBtn.classList.toggle('visible', window.scrollY > 400);
        });
        scrollBtn.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    /* Pricing form */
    var form = document.querySelector('.pricing-form form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            var btn = form.querySelector('.btn-submit');
            if (btn) {
                var orig = btn.textContent;
                btn.textContent = '\u2713';
                btn.style.background = '#059669';
                setTimeout(function () { btn.textContent = orig; btn.style.background = ''; }, 2000);
            }
        });
    }

    /* ============================================
       SPA Router via iframe (one iframe per page, cached)
       ============================================ */

    var frames = {};
    var frameContainer = document.createElement('div');
    frameContainer.id = 'frame-container';
    if (footer) {
        footer.parentNode.insertBefore(frameContainer, footer);
    } else {
        pageContent.after(frameContainer);
    }

    function getOrCreateFrame(page) {
        if (frames[page]) return frames[page];
        var f = document.createElement('iframe');
        f.className = 'page-frame';
        f.style.display = 'none';
        f.src = page;
        frameContainer.appendChild(f);

        f.onload = function () {
            try {
                if (typeof I18N !== 'undefined') {
                    var innerI18N = f.contentWindow.I18N;
                    if (innerI18N) innerI18N.apply(I18N.lang());
                }
            } catch (e) {}
        };

        frames[page] = f;
        return f;
    }

    function showHome() {
        pageContent.style.display = '';
        Object.keys(frames).forEach(function (k) { frames[k].style.display = 'none'; });
        if (footer) footer.style.cssText = '';
        currentPage = '';
        updateNavActive('');
    }

    function showSubPage(page) {
        Object.keys(frames).forEach(function (k) { frames[k].style.display = 'none'; });
        var f = getOrCreateFrame(page);
        f.style.display = 'block';
        pageContent.style.display = 'none';
        if (footer) footer.style.cssText = 'display:none !important';
        currentPage = page;
        updateNavActive(page);
        window.scrollTo(0, 0);
    }

    function updateNavActive(page) {
        document.querySelectorAll('.nav-menu a, .mobile-menu a').forEach(function (link) {
            link.classList.remove('active');
            if (!page) return;
            var href = link.getAttribute('href');
            if (href && href.split('#')[0] === page) {
                link.classList.add('active');
            }
        });
    }

    /* Listen for height messages from iframes */
    window.addEventListener('message', function (e) {
        if (e.data && e.data.type === 'iframe-height') {
            Object.keys(frames).forEach(function (k) {
                try {
                    if (frames[k].contentWindow === e.source) {
                        frames[k].style.height = e.data.height + 'px';
                    }
                } catch (ex) {}
            });
        }
    });

    /* Global click interception */
    document.addEventListener('click', function (e) {
        var a = e.target.closest('a');
        if (!a) return;

        var href = a.getAttribute('href');
        if (!href || href === '#') return;
        if (a.target === '_blank') return;
        if (href.startsWith('mailto:') || href.startsWith('javascript:')) return;
        if (href.startsWith('http') && !href.includes(location.host)) return;
        if (a.hasAttribute('data-lang')) return;

        var hashIdx = href.indexOf('#');
        var page = hashIdx !== -1 ? href.substring(0, hashIdx) : href;
        var anchor = hashIdx !== -1 ? href.substring(hashIdx) : '';

        var isSubPage = page && page !== 'index.html' && page.endsWith('.html');
        var isHome = page === 'index.html' || page === '';

        if (isSubPage) {
            e.preventDefault();
            if (page !== currentPage) showSubPage(page);
            return;
        }

        if (isHome || (!page && anchor)) {
            e.preventDefault();
            if (currentPage) showHome();
            if (anchor) {
                setTimeout(function () {
                    var el = document.querySelector(anchor);
                    if (el) {
                        var offset = (header ? header.offsetHeight : 0) + 16;
                        window.scrollTo({ top: el.offsetTop - offset, behavior: 'smooth' });
                    }
                }, currentPage ? 50 : 0);
            }
            return;
        }
    });

    /* Scroll spy for home sections */
    var spyLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    var sections = [];
    spyLinks.forEach(function (link) {
        var id = link.getAttribute('href').substring(1);
        if (!id) return;
        var sec = document.getElementById(id);
        if (sec) sections.push({ el: sec, link: link });
    });

    if (sections.length) {
        window.addEventListener('scroll', function () {
            if (currentPage) return;
            var scrollY = window.scrollY + (header ? header.offsetHeight : 0) + 60;
            var current = null;
            for (var i = 0; i < sections.length; i++) {
                if (sections[i].el.offsetTop <= scrollY) current = sections[i];
            }
            spyLinks.forEach(function (l) { l.classList.remove('active'); });
            if (current) current.link.classList.add('active');
        });
    }

    /* Preload all sub-page iframes in background so switching is instant */
    setTimeout(function () {
        ['about.html', 'blog.html', 'services.html'].forEach(function (p) {
            getOrCreateFrame(p);
        });
    }, 500);
});
