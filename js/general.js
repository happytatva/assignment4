function header_adj() {
  var headerHeight = $(".header").outerHeight();
  $(".main-wrap").css({ "padding-top": headerHeight + "px" });
}
function footer_adj() {
  var footerHeight = $(".footer").outerHeight();
  $(".wrapper").css({ "padding-bottom": footerHeight + "px" });
  $(".footer").css({ "margin-top": -footerHeight + "px" });
}

$(window).on("load", function () {
  header_adj();
  footer_adj();
});

$(document).ready(function () {
  $(".hamburger").click(function () {
    $("body").toggleClass("open-menu");
  });
  $(".banner-slider").slick({
     infinite: false,
     slidesToShow: 1,
     slidesToScroll: 1,
     dots: true,
     arrows: false
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
    var headerHeight = $(".header").height();
    $("body .navbar-nav").css("top", headerHeight);
  }
});
// ------setting top value of open menu while resizing--------
$(window).on("resize", function () {
  setTimeout(function () {
    header_adj();
    footer_adj();
  }, 300);

  if ($(window).width() < 1025) {
    // Get the height + padding + border of `header-wrapper`
    setTimeout(function () {
      var headerHeight = $(".header").outerHeight();
      $("body .navbar-nav").css("top", headerHeight);
    }, 500);
  }
});

//for scoll using up-arrow
var upArrowbtn = $(".up-arrow-link");

$(window).scroll(function () {
  if ($(window).scrollTop() > 500) {
    upArrowbtn.addClass("show-arrow");
  } else {
    upArrowbtn.removeClass("show-arrow");
  }
});

upArrowbtn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 },800);
});
