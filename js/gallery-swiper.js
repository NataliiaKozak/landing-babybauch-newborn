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
        el: gallerySection.querySelector('.swiper-pagination'),
        clickable: true,
      },
      navigation: {
        nextEl: gallerySection.querySelector('.swiper-button-next'),
        prevEl: gallerySection.querySelector('.swiper-button-prev'),
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

(function () {
  function initServicesSwiper() {
    var section = document.querySelector('.services');
    if (!section) return;

    var swiperEl = section.querySelector('.services-swiper');
    if (!swiperEl) return;

    if (typeof Swiper === 'undefined') return;

    new Swiper(swiperEl, {
      slidesPerView: 1,
      spaceBetween: 15,
      loop: true,
      pagination: {
        el: section.querySelector('.services-pagination'),
        clickable: true,
      },
      navigation: {
        nextEl: section.querySelector('.services-button-next'),
        prevEl: section.querySelector('.services-button-prev'),
      },
      grabCursor: true,
      breakpoints: {
        576: { slidesPerView: 2, spaceBetween: 15 },
        768: { slidesPerView: 2, spaceBetween: 20 },
        992: { slidesPerView: 3, spaceBetween: 20 },
      },
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initServicesSwiper);
  } else {
    initServicesSwiper();
  }
})();
