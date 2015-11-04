

(function($) {
  $(document).ready(function() {

    $("#menu-button").on("click", function() {
      $("#main_header nav").toggle();
    });

    var animating = false;



    $(document).scroll(function() {
      var x = $(document).scrollTop();
      var mh = $("#main_header");
      var mhHeight = $("#main_header").height;
      if (x > 100) {
        mh.addClass("scrolled");
      } else {
        mh.removeClass("scrolled");
      }


      $("h1").css("opacity", 1 - $(window).scrollTop() / 380);


    });


    function smoothScroll(target) {
      animating = true;
      $('body,html').animate({
        'scrollTop': target.offset().top
      }, 500, function() {
        animating = false;
      });
    }
  });
})(require('jquery'));
