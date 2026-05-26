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

        /* Intercept all navigation links and forward to parent SPA */
        document.addEventListener('click', function (e) {
            var a = e.target.closest('a');
            if (!a) return;
            var href = a.getAttribute('href');
            if (!href || href === '#') return;
            if (a.target === '_blank') return;
            if (href.startsWith('mailto:') || href.startsWith('javascript:')) return;
            if (href.startsWith('http')) return;
            e.preventDefault();
            window.parent.postMessage({ type: 'iframe-navigate', href: href }, '*');
        });

        /* Listen for language changes from parent */
        window.addEventListener('message', function (e) {
            if (e.data && e.data.type === 'lang-change' && e.data.lang) {
                if (typeof I18N !== 'undefined') I18N.apply(e.data.lang);
                setTimeout(sendHeight, 50);
            }
        });

        var lastSentHeight = 0;
        function sendHeight() {
            var h = document.documentElement.scrollHeight;
            if (h !== lastSentHeight) {
                lastSentHeight = h;
                window.parent.postMessage({ type: 'iframe-height', height: h }, '*');
            }
        }
        sendHeight();
        setTimeout(sendHeight, 100);
        setTimeout(sendHeight, 400);
        setTimeout(sendHeight, 1000);
        setTimeout(sendHeight, 2500);
        setTimeout(sendHeight, 5000);
        new ResizeObserver(sendHeight).observe(document.body);
        new MutationObserver(function () { setTimeout(sendHeight, 50); })
            .observe(document.body, { childList: true, subtree: true, attributes: true });
        window.addEventListener('load', function () {
            sendHeight();
            setTimeout(sendHeight, 300);
        });
        document.querySelectorAll('img').forEach(function (img) {
            if (!img.complete) img.addEventListener('load', sendHeight);
        });

        return;
    }

    /* === Main page logic (only runs on top-level window) === */

    if (typeof I18N !== 'undefined') I18N.init();

    var header = document.querySelector('.site-header');
    var footer = document.querySelector('.site-footer');
    var pageContent = document.getElementById('page-content');
    var currentPage = '';

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
        scrollBtn.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    /* Unified scroll handler (rAF-throttled) */
    var scrollTicking = false;
    window.addEventListener('scroll', function () {
        if (scrollTicking) return;
        scrollTicking = true;
        requestAnimationFrame(function () {
            var y = window.scrollY;
            if (header) header.classList.toggle('scrolled', y > 20);
            if (scrollBtn) scrollBtn.classList.toggle('visible', y > 400);
            scrollTicking = false;
        });
    }, { passive: true });

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
    var loadedFrames = {};
    var heightReady = {};
    var frameContainer = document.createElement('div');
    frameContainer.id = 'frame-container';
    if (footer) {
        footer.parentNode.insertBefore(frameContainer, footer);
    } else {
        pageContent.after(frameContainer);
    }

    function revealFrame(page) {
        var f = frames[page];
        if (!f || f.classList.contains('visible')) return;
        if (!loadedFrames[page] || !heightReady[page]) return;
        if (currentPage !== page) return;
        Object.keys(frames).forEach(function (k) {
            if (k !== page) frames[k].className = 'page-frame';
        });
        f.className = 'page-frame visible';
        frameContainer.classList.add('active');
        pageContent.style.display = 'none';
        if (footer) footer.style.cssText = 'display:none !important';
        window.scrollTo(0, 0);
    }

    function getOrCreateFrame(page) {
        if (frames[page]) return frames[page];
        var f = document.createElement('iframe');
        f.className = 'page-frame hidden';
        f.src = page;
        frameContainer.appendChild(f);

        f.onload = function () {
            loadedFrames[page] = true;
            try {
                if (typeof I18N !== 'undefined') {
                    f.contentWindow.postMessage({ type: 'lang-change', lang: I18N.lang() }, '*');
                }
            } catch (e) {}
            revealFrame(page);
        };

        frames[page] = f;
        return f;
    }

    function showHome() {
        pageContent.style.display = '';
        frameContainer.classList.remove('active');
        Object.keys(frames).forEach(function (k) { frames[k].className = 'page-frame'; });
        if (footer) footer.style.cssText = '';
        currentPage = '';
        updateNavActive('');
        if (typeof window._globeResume === 'function') window._globeResume();
    }

    function showSubPage(page) {
        var f = getOrCreateFrame(page);
        currentPage = page;
        updateNavActive(page);
        if (typeof window._globePause === 'function') window._globePause();
        revealFrame(page);
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

    /* Listen for messages from iframes */
    window.addEventListener('message', function (e) {
        if (!e.data) return;

        if (e.data.type === 'iframe-height') {
            var src = e.source;
            var newH = e.data.height + 'px';
            Object.keys(frames).forEach(function (k) {
                try {
                    if (frames[k].contentWindow === src) {
                        if (frames[k].style.height !== newH) {
                            frames[k].style.height = newH;
                        }
                        if (!heightReady[k] && e.data.height > 0) {
                            heightReady[k] = true;
                            revealFrame(k);
                        }
                    }
                } catch (ex) {}
            });
        }

        if (e.data.type === 'iframe-navigate') {
            var href = e.data.href;
            var hashIdx = href.indexOf('#');
            var page = hashIdx !== -1 ? href.substring(0, hashIdx) : href;
            var anchor = hashIdx !== -1 ? href.substring(hashIdx) : '';

            var isSubPage = page && page !== 'index.html' && page.endsWith('.html');

            if (isSubPage) {
                if (page !== currentPage) showSubPage(page);
            } else {
                if (currentPage) showHome();
                if (anchor) {
                    setTimeout(function () {
                        var el = document.querySelector(anchor);
                        if (el) {
                            var offset = (header ? header.offsetHeight : 0) + 16;
                            window.scrollTo({ top: el.offsetTop - offset, behavior: 'smooth' });
                        }
                    }, 50);
                }
            }
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
        var spyTicking = false;
        window.addEventListener('scroll', function () {
            if (currentPage || spyTicking) return;
            spyTicking = true;
            requestAnimationFrame(function () {
                spyTicking = false;
                var scrollY = window.scrollY + (header ? header.offsetHeight : 0) + 60;
                var current = null;
                for (var i = 0; i < sections.length; i++) {
                    if (sections[i].el.offsetTop <= scrollY) current = sections[i];
                }
                spyLinks.forEach(function (l) { l.classList.remove('active'); });
                if (current) current.link.classList.add('active');
            });
        }, { passive: true });
    }

    /* Sync language changes to all loaded iframes via postMessage */
    new MutationObserver(function () {
        var currentLang = (typeof I18N !== 'undefined') ? I18N.lang() : null;
        if (!currentLang) return;
        Object.keys(frames).forEach(function (k) {
            try { frames[k].contentWindow.postMessage({ type: 'lang-change', lang: currentLang }, '*'); } catch (e) {}
        });
    }).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });

    /* Preload all sub-page iframes in background so switching is instant */
    setTimeout(function () {
        ['about.html', 'blog.html'].forEach(function (p) {
            getOrCreateFrame(p);
        });
    }, 500);
});
