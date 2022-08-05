$(document).ready(function() {
  var divsToHide = document.getElementsByClassName("move-top");
  for(var i = 0; i < divsToHide.length; i++) {
    divsToHide[i].getElementsByClassName.display = "none";
  }

  $(window).scroll(function() {
    if ($(this).scrollTop() <= 2900) {
      $('.move-top').fadeOut();
      
    } else {
      console.log('Hide');
      $('.move-top').fadeIn();
    }
    if ($(this).scrollTop() == 0 || $(this).scrollTop() >= 0 && $(this).scrollTop() < 2800 || $(this).scrollTop() <= 0) {
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