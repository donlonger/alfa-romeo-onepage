(function(fn) {
    'use strict';
	fn.scrollTop = $(this).scrollTop();

	fn.updateVars = function() {
		fn.window = {
			x: $(window).width(),
			y: $(window).height()
		};
		fn.scrollTop = $(window).scrollTop();
	};

	fn.getWindow = function() {
		return fn.window;
	};

	fn.getScrollTop = function() {
		return fn.scrollTop;
	};
}(window.fn = window.fn || {}));  

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
            navigation : true  
        });

    AOS.init();

    $(".nav-bar #burger").click(function () {
		$(this).toggleClass("open");
        $(this).next(".menu").fadeToggle();
        $(this).prev(".logo").toggleClass("open");
    });

	$(".nav-bar  .menu a").click(function () {
        $(".nav-bar  #burger").removeClass("open");
        $(".nav-bar  .menu").fadeOut();
        $(".nav-bar  .logo").removeClass("open");
    });

    $(window).scroll(function() {
        fn.updateVars();
        console.log(fn);
        if (fn.scrollTop > 110) {
            $(".top-wrapper").addClass("fixed");        
        } else if (fn.scrollTop <= 110) {
            $(".top-wrapper").removeClass("fixed");    
        }
    });

  });
