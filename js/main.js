// $(document).ready(function () {
//   $('.features__list').bxSlider();
// });

$(window).on('resize', function (e) {
  checkScreenSize();
});

checkScreenSize();

function checkScreenSize() {
  slider = $('.features__list').bxSlider({
    infiniteLoop: true,
    minSlides: 1,
    maxSlides: 3,
    slideWidth: 350,
    shrinkItems: true,
    slideSelector: '.features__item',
  });

  var newWindowWidth = $(window).width();
  if (newWindowWidth >= 1050) {
    // destroy slider
    slider.destroySlider();
  }
}
