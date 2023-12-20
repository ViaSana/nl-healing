// Line Decoration Responsive
$(function() {
  function calculateDistanceToEdge() {
    var boxOffset = $('#line-box').offset().left;
    $('.deco-lines').each(function() {
      $(this).css('left', -boxOffset + 'px');
    });
  }
  // Call the function
  calculateDistanceToEdge();

  $(window).on("resize", calculateDistanceToEdge);
});

// Hamburger Menu
$('.hamburger-button').on("click", function(){
  $('.mobile-menu').fadeToggle(100);
});