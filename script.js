(function () {
    // Mobile menu
    var toggle = document.querySelector('.nav-toggle');
    var nav = document.getElementById('site-nav');

    function setNav(open) {
        toggle.setAttribute('aria-expanded', String(open));
        toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
        nav.classList.toggle('is-open', open);
    }

    if (toggle && nav) {
        toggle.addEventListener('click', function () {
            setNav(toggle.getAttribute('aria-expanded') !== 'true');
        });
        nav.addEventListener('click', function (e) {
            if (e.target.closest('a')) setNav(false);
        });
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && nav.classList.contains('is-open')) {
                setNav(false);
                toggle.focus();
            }
        });
    }

    // Floating call button: show only after the call button at the top has scrolled away
    var callBtn = document.querySelector('.call-btn');
    var topSection = document.querySelector('.hero, .page-header');
    if (callBtn && topSection && 'IntersectionObserver' in window) {
        new IntersectionObserver(function (entries) {
            callBtn.classList.toggle('is-visible', !entries[0].isIntersecting);
        }).observe(topSection);
    } else if (callBtn) {
        callBtn.classList.add('is-visible');
    }
})();
