let slickInitialized = false;

function handleSlickSlider() {
    const $slidebox = $('.slidebox');

    if (window.innerWidth < 992) {
        if (!slickInitialized) {
            $slidebox.slick({
                infinite: true,
                speed: 300,
                slidesToShow: 3,
                slidesToScroll: 3,
                autoplay: true,
                autoplaySpeed: 2000,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                        }
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
                    }
                ]
            });
            slickInitialized = true;
        }
    } else {
        if (slickInitialized) {
            $slidebox.slick('unslick');
            slickInitialized = false;
        }
    }
}

window.addEventListener('load', handleSlickSlider);
window.addEventListener('resize', () => {
    clearTimeout(window._resizeTimeout);
    window._resizeTimeout = setTimeout(handleSlickSlider, 150);
});
