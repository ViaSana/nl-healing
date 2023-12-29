// Testimonial Slider
$('.testimonial-container').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    adaptiveHeight: true,
    speed: 600,
    fade: true,
    cssEase: 'ease-in-out',
    autoplaySpeed: 4000,
    autoplay: false,
  }
);

// Retreat Gallery
$('.retreat-gallery').slick({
  asNavFor: '.slider-nav',
  arrows: false,
  fade: true,
});
$('.slider-nav').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.retreat-gallery',
  centerMode: true,
  focusOnSelect: true,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      // MD Break
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        slidesToShow: 3
      }
    },
    {
      // SM Break
      breakpoint: 640,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 2,
      }
    }
  ]
});