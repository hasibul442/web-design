$(document).ready(function () {

    $("#owl-demo").owlCarousel({
      loop: true,
      nav: true,
      dots: true,
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

    $("#owl-review").owlCarousel({
      loop: true,
      nav: true,
      dots: true,
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
          items: 3
        }
      }
    });

  });