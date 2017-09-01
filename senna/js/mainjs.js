$(document).ready(function(){
  $("body").niceScroll({
    cursorcolor: "rgba(219,209,161,0.5)",
    cursorborder: "rgba(219,209,161,0.5)",
    cursorwidth: "2px",
    zindex: "3",
  });
  $('.menudiv').click(function()
	{
    $('#close,.menudiv,.scroll').toggle(700);
    $('.menu').fadeIn(800);
    $('.menu ul, .menu h1').delay(700).fadeIn(700);
	});
  $('#close').click(function()
	{
    $('#close, .menudiv,.scroll').toggle(700);
    $('.menu').fadeOut(800);
    $('.menu ul, .menu h1').delay(700).fadeOut(700);
	});

});
