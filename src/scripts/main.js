$(document).ready(function(){
    $('.owl-carousel').owlCarousel();

    AOS.init();

    $("#top #burger").click(function () {
		$(this).toggleClass("open");
        $(this).next(".menu").fadeToggle();
        $(this).prev(".logo").toggleClass("open");
    });

	$("#top .menu a").click(function () {
        $("#top #burger").removeClass("open");
        $("#top .menu").fadeOut();
        $("#top .logo").removeClass("open");
    });
  });