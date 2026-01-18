// Normal режим: 1 слайд (моб), 2 (планшет), 3 (десктоп) + стрелки + точки. без проверки на gallery--single
(function () {
  function initGallerySwiper() {
    var gallerySection = document.querySelector('.gallery');
    if (!gallerySection) return;

    var swiperEl = gallerySection.querySelector('.gallery-swiper');
    if (!swiperEl) return;

    if (typeof Swiper === 'undefined') return;

    var swiperConfig = {
      slidesPerView: 1,
      spaceBetween: 15,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      grabCursor: true,
      breakpoints: {
        576: { slidesPerView: 2, spaceBetween: 15 },
        768: { slidesPerView: 2, spaceBetween: 20 },
        992: { slidesPerView: 3, spaceBetween: 20 },
      },
    };

    new Swiper(swiperEl, swiperConfig);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGallerySwiper);
  } else {
    initGallerySwiper();
  }
})();