
// Navbar supaya sticky
(function($) {"use strict";

	var $navbar = $(".nav"),
	y_pos = $navbar.offset().top,
	height = $navbar.height();

    //scroll sticky
    $(document).scroll(function() {
    	var scrollTop = $(this).scrollTop();
    	if (scrollTop > 0) {
    		$navbar.addClass("sticky");
    	} else {
    		$navbar.removeClass("sticky");  
    	}
    });
    
})(jQuery, undefined);

// Untuk toggle bar open
$(".menu").click(function(){
	$("#nav").toggleClass("open");
});

// Untuk Scrolling
$("a").on("click", function(event) {
	if (this.hash !== "") {
		event.preventDefault();
		var hash = this.hash;
		$("html, body").animate({
			scrollTop: $(hash).offset().top
		},800,
		function() {
			window.location.hash = hash;
		}
		);
	}
});