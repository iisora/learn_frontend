document.addEventListener('DOMContentLoaded', function() {

    const els = document.querySelectorAll('.animate-title');
    const cb = function(entries, observer) {
        entries.forEach(entry => {
            /* isIntersectiongのスペルミス注意 */
            if(entry.isIntersecting) {
                const ta = new TextAnimation(entry.target);
                ta.animate();
                /* 配列で要素が渡される時に用いることが多い */
                observer.unobserve(entry.target);
            } else {         
            }
        });
    };
    const options = {
        root: null,
        rootMargin: "0px",
        /* 閾値 */
        threshold: 0
    };
    const io = new IntersectionObserver(cb, options);
    /* 配列を回してobserveメソッドで監視する */
    els.forEach(el => io.observe(el));
});