(function () {
    if (!matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const root = document.documentElement;

    const dot = document.createElement('div');
    dot.className = 'cursor-dot';
    const ring = document.createElement('div');
    ring.className = 'cursor-ring';
    document.body.append(ring, dot);

    root.classList.add('custom-cursor');

    let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;
    let visible = false;

    document.addEventListener('mousemove', e => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;

        if (!visible) {
            visible = true;
            ringX = mouseX;
            ringY = mouseY;
            root.classList.add('cursor-visible');
        }
    });

    const smoothing = 0.14;
    function animate() {
        ringX += (mouseX - ringX) * smoothing;
        ringY += (mouseY - ringY) * smoothing;
        ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
        requestAnimationFrame(animate);
    }
    animate();

    document.addEventListener('mouseover', e => {
        ring.classList.toggle('is-hovering', !!e.target.closest('a, button, [role="button"]'));
    });

    document.addEventListener('mousedown', () => ring.classList.add('is-pressed'));
    document.addEventListener('mouseup', () => ring.classList.remove('is-pressed'));

    document.addEventListener('mouseleave', () => root.classList.remove('cursor-visible'));
    document.addEventListener('mouseenter', () => { if (visible) root.classList.add('cursor-visible'); });
})();