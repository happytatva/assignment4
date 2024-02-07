$(document).ready(function () {
  $(".hamburger").click(function () {
    $("body").toggleClass("open-menu");
  });
  $(".logo-slider").slick({
    infinite: false,
    slidesToShow: 8,
    slidesToScroll: 1,
    responsive: [
     {
          breakpoint: 991,
          settings: {
            slidesToShow: 5,
          },
        },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 3,
        },
      },
      {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
          },
        },
    ],
  });
  //   ----setting top value of open menu---------
  if ($(window).width() < 1025) {
    var headerWrapperHeight1 = $(".header-wrapper").height();
    $("body .navbar-nav").css("top", headerWrapperHeight1);
  }
});
// ------setting top value of open menu while resizing--------
$(window).on("resize", function () {
     if ($(window).width() < 1025) {
       // Get the height + padding + border of `header-wrapper`
       setTimeout(function () {
         var headerWrapperHeight = $(".header-wrapper").outerHeight();
         $("body .navbar-nav").css("top", headerWrapperHeight);
       }, 500);
     }
   });
   
