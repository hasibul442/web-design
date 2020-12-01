$(document).ready(function () {

    $("#owl-slider").owlCarousel({
      loop: true,
      nav: true,
      dots: true,
      center: true,
      items:2,
      //default settings:
      autoplay: true,
      autoplayTimeout: 5000,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        960: {
          items: 4
        }
      }
    });

  });

  $(document).ready(function () {

    $("#news-slider").owlCarousel({
      loop: true,
      nav: true,
      dots: true,
      center: true,
      items:2,
      rtl:false,
      //default settings:
      autoplay: true,
      autoplayTimeout: 5000,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        960: {
          items: 4
        }
      }
    });

  });