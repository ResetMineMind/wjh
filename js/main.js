document.addEventListener('DOMContentLoaded', function () {

    if (typeof I18N !== 'undefined') I18N.init();

    /* Header scroll effect */
    var header = document.querySelector('.site-header');
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

    /* Scroll animations — trigger early so elements appear before user reaches them */
    var fadeEls = document.querySelectorAll('.fade-up');
    if ('IntersectionObserver' in window && fadeEls.length) {
        var obs = new IntersectionObserver(function (entries) {
            entries.forEach(function (e) {
                if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
            });
        }, { threshold: 0.01, rootMargin: '0px 0px 120px 0px' });
        fadeEls.forEach(function (el) { obs.observe(el); });
    }

    /* Workflow accordion */
    document.querySelectorAll('.workflow-header').forEach(function (h) {
        h.addEventListener('click', function () {
            var item = this.closest('.workflow-item');
            var wasActive = item.classList.contains('active');
            document.querySelectorAll('.workflow-item.active').forEach(function (i) { i.classList.remove('active'); });
            if (!wasActive) item.classList.add('active');
        });
    });

    /* Blog expand */
    document.querySelectorAll('.blog-full-card').forEach(function (card) {
        var rm = card.querySelector('.read-more');
        if (rm) {
            rm.addEventListener('click', function (e) {
                e.preventDefault();
                card.classList.toggle('expanded');
                var isOpen = card.classList.contains('expanded');
                var expand = card.querySelector('.blog-expand');
                if (expand) expand.style.maxHeight = isOpen ? expand.scrollHeight + 'px' : '0';
            });
        }
    });

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

    /* Scroll spy — highlight active nav link based on visible section */
    var navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    var sections = [];
    var spyPaused = false;
    navLinks.forEach(function (link) {
        var id = link.getAttribute('href').substring(1);
        var sec = document.getElementById(id);
        if (sec) sections.push({ el: sec, link: link });
    });
    if (sections.length) {
        function updateActiveNav() {
            if (spyPaused) return;
            var scrollY = window.scrollY + (header ? header.offsetHeight : 0) + 60;
            var current = null;
            for (var i = 0; i < sections.length; i++) {
                if (sections[i].el.offsetTop <= scrollY) {
                    current = sections[i];
                }
            }
            navLinks.forEach(function (l) { l.classList.remove('active'); });
            if (current) current.link.classList.add('active');
        }
        navLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                spyPaused = true;
                navLinks.forEach(function (l) { l.classList.remove('active'); });
                this.classList.add('active');
                setTimeout(function () { spyPaused = false; }, 600);
            });
        });
        window.addEventListener('scroll', updateActiveNav);
        updateActiveNav();
    }

    /* Page transition — fade out before navigating to another page */
    document.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function (e) {
            var href = this.getAttribute('href');
            if (!href) return;
            if (href.startsWith('#')) return;
            if (href.startsWith('javascript:')) return;
            if (this.target === '_blank') return;
            var isExternal = href.startsWith('http') && !href.includes(location.host);
            if (isExternal) return;
            e.preventDefault();
            document.body.classList.remove('ready');
            var target = href;
            setTimeout(function () { window.location.href = target; }, 200);
        });
    });

    /* Smooth scroll for anchor links */
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
        a.addEventListener('click', function (e) {
            var href = this.getAttribute('href');
            if (href === '#') return;
            var target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                var offset = (header ? header.offsetHeight : 0) + 16;
                window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
            }
        });
    });

    /* Pricing form (prevent real submit) */
    var form = document.querySelector('.pricing-form form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            var btn = form.querySelector('.btn-submit');
            if (btn) {
                var orig = btn.textContent;
                btn.textContent = '✓';
                btn.style.background = '#059669';
                setTimeout(function () { btn.textContent = orig; btn.style.background = ''; }, 2000);
            }
        });
    }
});
