/*
@codekit-prepend "vendors/jquery.flexslider-min.js"
@codekit-prepend "vendors/jquery.jscroll.min.js"
*/

$(document).ready(function() {
	
	$('.flexslider').flexslider({
		'pauseOnAction': false,
		'directionNav': false,
		'slideshowSpeed': 8300,
		'animationSpeed': 1300
	});

	$('.content-1').flexslider({
		'animation': 'slide',
		'directionNav': false,
		'slideshowSpeed': 4000,
		'animationSpeed': 900
	});

	$('body').removeClass('preload');
	$('body').addClass('loaded');

	// $('.stories .container').jscroll({
	//     padding: 20,
	//     nextSelector: 'a.next-set',
	//     contentSelector: '.row'
	// });
});