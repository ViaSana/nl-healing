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

$('.retreat-gallery').slick({
  asNavFor: '.slider-nav',
  arrows: false,
  fade: true,
});
$('.slider-nav').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  asNavFor: '.retreat-gallery',
  centerMode: true,
  focusOnSelect: true,
  autoplay: true,
  autoplaySpeed: 3000,
});