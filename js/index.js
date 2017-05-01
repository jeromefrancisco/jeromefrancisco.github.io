$(document).ready(function(){
  $(function() {
    $(".js-nav a").click(function(e) {
      e.preventDefault();
      $('body, html').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
      }, 750);
    });
  });
});
