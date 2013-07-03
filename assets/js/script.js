/*
@codekit-prepend "vendors/jquery.flexslider-min.js"
@codekit-prepend "vendors/jquery.jscroll.min.js"
@codekit-prepend "vendors/jquery.google-maps.tooltip.js"
@codekit-prepend "vendors/googlemaps.js"
*/

if( !window.location.hash && window.addEventListener ){
	window.addEventListener("load",function() {
		setTimeout(function(){
			window.scrollTo(0, 0);
		}, 0);
	});
}

$(document).ready(function() {
	
	$('.flexslider').flexslider({
		pauseOnAction: false,
		directionNav: false,
		slideshowSpeed: 8300,
		animationSpeed: 1300
	});

	$('.content-1').flexslider({
		animation: 'slide',
		directionNav: false,
		slideshowSpeed: 4000,
		animationSpeed: 900
	});

	$('.list').flexslider({
	    animation: "slide",
	    animationLoop: false,
	    directionNav: false,
	    itemWidth: 300,
	    itemMargin: 5,
	    randomize: true,
	    slideshow: false,
	    pauseOnHover: true,
	    controlNav: false
	});

	$('body').removeClass('preload');
	$('body').addClass('loaded');

	// $('.stories .container').jscroll({
	//     padding: 20,
	//     nextSelector: 'a.next-set',
	//     contentSelector: '.row'
	// });
	
	$('.icon-menu').click( function() {
		$('.menu').toggleClass('expanded');
	});

});