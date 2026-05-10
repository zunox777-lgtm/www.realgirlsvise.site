document.addEventListener('DOMContentLoaded', () => {
    console.log("Site initialized");

    // Horizontal Scroll with Mouse Wheel for the gallery
    const gallery = document.querySelector('.media-gallery');
    if (gallery) {
        gallery.addEventListener('wheel', (evt) => {
            evt.preventDefault();
            gallery.scrollLeft += evt.deltaY;
        });
    }

    // Smooth scroll for anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.id === 'installLink') return; // handled separately
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
