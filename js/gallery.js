//   iosotop
$(".photo-gallery").isotope({
  itemSelector: ".grid-item",
  percentPosition: true,
  columnWidth: ".grid-item",
  masonry: {
    // use outer width of grid-sizer for columnWidth
    columnWidth: 1,
  },
}) //   iosotop

//portfolio
var $grid = $(".photo-gallery").isotope({
  itemSelector: ".grid-item",
  percentPosition: true,
  masonry: {
    // use outer width of grid-sizer for columnWidth
    columnWidth: 1,
  },
})

var $container = $(".photo-gallery")
$container.isotope({
  filter: "*",
  animationOptions: {
    duration: 750,
    easing: "linear",
    queue: false,
  },
})

$(".photo-menu a").click(function () {
  $(".photo-menu .active").removeClass("active")
  $(this).addClass("active")

  var selector = $(this).attr("data-filter")
  $container.isotope({
    filter: selector,
    animationOptions: {
      duration: 750,
      easing: "linear",
      queue: false,
    },
  })
  return false
})

$(".popup-gallery").magnificPopup({
  delegate: "a",
  type: "image",
  tLoading: "Loading image #%curr%...",
  mainClass: "mfp-img-mobile",
  gallery: {
    enabled: true,
    navigateByImgClick: true,
    preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
  },
  image: {
    tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
    titleSrc: function (item) {
      return item.el.attr("title") + "<small>preata</small>"
    },
  },
})
