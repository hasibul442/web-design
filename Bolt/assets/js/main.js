(function($) {
  
  "use strict";  

  $(window).on('load', function() {

     /* Page Loader active
    ========================================================*/
    $('#preloader').fadeOut();

  // Sticky Nav
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 200) {
            $('.scrolling-navbar').addClass('top-nav-collapse');
        } else {
            $('.scrolling-navbar').removeClass('top-nav-collapse');
        }
    });

    /* slicknav mobile menu active  */
    $('.mobile-menu').slicknav({
      prependTo: '.navbar-header',
      parentTag: 'liner',
      allowParentLinks: true,
      duplicate: true,
      label: '',
      closedSymbol: '<i class="icon-arrow-right"></i>',
      openedSymbol: '<i class="icon-arrow-down"></i>',
    });

    /* ==========================================================================
    countdown timer
    ========================================================================== */
     jQuery('#clock').countdown('2021/12/31',function(event){
      var $this=jQuery(this).html(event.strftime(''
      +'<div class="time-entry days" style="background-color:#f72585;"><span>%-D</span> Days</div> '
      +'<div class="time-entry hours" style="background-color:#b5179e;"><span>%H</span> Hours</div> '
      +'<div class="time-entry minutes" style="background-color:#7209b7;"><span>%M</span> Minutes</div> '
      +'<div class="time-entry seconds" style="background-color:#560bad;"><span>%S</span> Seconds</div> '));
    });

    /* WOW Scroll Spy
    ========================================================*/
     var wow = new WOW({
      //disabled for mobile
        mobile: false
    });
    wow.init();

    // one page navigation 
    $('.onepage-nev').onePageNav({
            currentClass: 'active'
    }); 

    /* Back Top Link active
    ========================================================*/
      var offset = 200;
      var duration = 500;
      $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
          $('.back-to-top').fadeIn(400);
        } else {
          $('.back-to-top').fadeOut(400);
        }
      });

      $('.back-to-top').on('click',function(event) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: 0
        }, 600);
        return false;
      });

  });      

}(jQuery));