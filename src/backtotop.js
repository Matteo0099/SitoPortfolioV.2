$(document).ready(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 2500) {
        $('.move-top').fadeIn();
      } else {
        $('.move-top').fadeOut();
      }
    });
  
    $('.move-top').click(function() {
      $("html, body").animate({
        scrollTop: 0
      }, 600);
      return false;
    });
});