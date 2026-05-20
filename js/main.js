document.addEventListener('DOMContentLoaded', function () {

    /* ========================================
       i18n initialization
       ======================================== */
    if (typeof I18N !== 'undefined') { I18N.init(); }

    /* ========================================
       Typed.js-style typing effect
       Original: Typed('#typing-target', { strings: ['The World Speaks, We Translate.'], typeSpeed: 80, loop: false })
       ======================================== */
    var typingTarget = document.getElementById('typing-target');
    if (typingTarget) {
        var text = (typeof I18N !== 'undefined') ? I18N.getTypedText() : 'The World Speaks, We Translate.';
        var charIndex = 0;
        function typeChar() {
            if (charIndex < text.length) {
                typingTarget.textContent += text.charAt(charIndex);
                charIndex++;
                setTimeout(typeChar, 80);
            }
        }
        setTimeout(typeChar, 600);
    }

    /* ========================================
       Divi-style scroll animations
       Matching exact et_animation_data from original:
       fade, slideBottom, slideLeft, slideRight, bounce
       with per-element duration, delay, and easing
       ======================================== */
    var animatedElements = document.querySelectorAll('.et-animated');

    function applyAnimation(el) {
        var anim = el.dataset.anim;
        var duration = parseInt(el.dataset.duration) || 1000;
        var delay = parseInt(el.dataset.delay) || 0;
        var easing = el.dataset.easing || 'ease-in-out';

        if (anim === 'bounce') {
            el.style.transition = 'none';
            setTimeout(function () {
                el.style.animation = 'etBounce ' + duration + 'ms ' + easing + ' forwards';
                el.classList.add('et-animated-visible');
            }, delay);
        } else {
            setTimeout(function () {
                el.style.transition = 'opacity ' + duration + 'ms ' + easing + ', transform ' + duration + 'ms ' + easing + ', visibility 0s';
                el.classList.add('et-animated-visible');
            }, delay);
        }
    }

    if ('IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    applyAnimation(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

        animatedElements.forEach(function (el) { observer.observe(el); });
    } else {
        animatedElements.forEach(function (el) {
            el.classList.add('et-animated-visible');
            el.style.transition = 'none';
        });
    }

    /* ========================================
       Counter animation (Divi number_counter)
       Original: data-number-value, data-number-separator
       ======================================== */
    var counterElements = document.querySelectorAll('.et_pb_number_counter');

    function animateCounter(el) {
        var target = parseInt(el.dataset.numberValue);
        var separator = el.dataset.separator || '';
        var valueEl = el.querySelector('.percent-value');
        if (!valueEl) return;
        var duration = 2000;
        var start = Date.now();

        function update() {
            var elapsed = Date.now() - start;
            var progress = Math.min(elapsed / duration, 1);
            var easeOut = 1 - Math.pow(1 - progress, 3);
            var current = Math.floor(easeOut * target);
            valueEl.textContent = separator ? current.toLocaleString('en-US') : current;
            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                valueEl.textContent = separator ? target.toLocaleString('en-US') : target;
            }
        }
        update();
    }

    if ('IntersectionObserver' in window) {
        var counterObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        counterElements.forEach(function (el) { counterObserver.observe(el); });
    }

    /* ========================================
       FAQ Toggles (Divi et_pb_toggle)
       Original: click toggles open/close class
       ======================================== */
    var toggleTitles = document.querySelectorAll('.et_pb_toggle_title');
    toggleTitles.forEach(function (title) {
        title.addEventListener('click', function () {
            var toggle = this.closest('.et_pb_toggle');
            var isOpen = toggle.classList.contains('et_pb_toggle_open');

            document.querySelectorAll('.et_pb_toggle.et_pb_toggle_open').forEach(function (t) {
                t.classList.remove('et_pb_toggle_open');
                t.classList.add('et_pb_toggle_close');
            });

            if (!isOpen) {
                toggle.classList.remove('et_pb_toggle_close');
                toggle.classList.add('et_pb_toggle_open');
            }
        });
    });

    /* ========================================
       Fixed header behavior
       Original: Divi et-fixed-header with top bar hide on scroll
       ======================================== */
    var header = document.getElementById('main-header');
    var topHeader = document.getElementById('top-header');

    window.addEventListener('scroll', function () {
        var scrollY = window.scrollY;
        if (scrollY > 50) {
            header.classList.add('et-fixed-header-scrolled');
            if (topHeader) topHeader.style.transform = 'translateY(-100%)';
            if (topHeader) topHeader.style.transition = 'transform .3s ease';
        } else {
            header.classList.remove('et-fixed-header-scrolled');
            if (topHeader) topHeader.style.transform = 'translateY(0)';
        }
    });

    /* ========================================
       Scroll to top button
       Original: .et_pb_scroll_top with .et-visible class
       ======================================== */
    var scrollTopBtn = document.getElementById('scroll-top');
    if (scrollTopBtn) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 500) {
                scrollTopBtn.classList.add('et-visible');
            } else {
                scrollTopBtn.classList.remove('et-visible');
            }
        });
        scrollTopBtn.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    /* ========================================
       Mobile nav toggle
       Original: Divi mobile_menu_bar toggle with .opened/.closed
       ======================================== */
    var mobileBar = document.querySelector('.mobile_menu_bar');
    var mobileNav = document.querySelector('.mobile_nav');
    if (mobileBar && mobileNav) {
        mobileBar.addEventListener('click', function () {
            if (mobileNav.classList.contains('closed')) {
                mobileNav.classList.remove('closed');
                mobileNav.classList.add('opened');
            } else {
                mobileNav.classList.remove('opened');
                mobileNav.classList.add('closed');
            }
        });
    }

    /* ========================================
       Smooth scroll for anchor links
       ======================================== */
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var target = this.getAttribute('href');
            if (target === '#' || target === '#pll_switcher') return;
            var el = document.querySelector(target);
            if (el) {
                e.preventDefault();
                var headerH = header ? header.offsetHeight : 0;
                var topH = topHeader ? topHeader.offsetHeight : 0;
                var offset = el.getBoundingClientRect().top + window.scrollY - headerH - topH;
                window.scrollTo({ top: offset, behavior: 'smooth' });
            }
        });
    });

    /* ========================================
       Clickable blurbs (Divi et_clickable)
       Original: et_link_options_data makes entire blurb clickable
       ======================================== */
    document.querySelectorAll('.et_clickable').forEach(function (blurb) {
        blurb.addEventListener('click', function () {
            var link = this.querySelector('a');
            if (link) link.click();
        });
    });

});
