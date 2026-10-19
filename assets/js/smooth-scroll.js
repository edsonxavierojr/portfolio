(function () {
    const NAVBAR_OFFSET = 0;
    const DURATION = 600;

    const ease = t => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

    function scrollToTarget(target) {
        const start = window.scrollY;
        const end = target.getBoundingClientRect().top + start - NAVBAR_OFFSET;
        let startTime = null;

        function step(now) {
            if (!startTime) startTime = now;
            const progress = Math.min((now - startTime) / DURATION, 1);
            window.scrollTo({ top: start + (end - start) * ease(progress), behavior: 'instant' });
            if (progress < 1) requestAnimationFrame(step);
        }

        requestAnimationFrame(step);
    }

    document.addEventListener('click', e => {
        const link = e.target.closest('a[href^="#"]');
        if (!link) return;

        const hash = link.getAttribute('href');
        const target = hash.length > 1 ? document.querySelector(hash) : null;
        if (!target) return;

        e.preventDefault();
        scrollToTarget(target);
        history.pushState(null, '', hash);
    });
})();