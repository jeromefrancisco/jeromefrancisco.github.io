$(function() {
  //Animates scroll when clicking on nav links
  $(".js-nav a").click(function(e) {
    e.preventDefault();
    $('body, html').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 750);
  });
});
