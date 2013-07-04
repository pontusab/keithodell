/*
@codekit-prepend "vendors/jquery.flexslider-min.js"
@codekit-append "vendors/googlemaps.js"
*/

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

	$('.story-items').flexslider({
	    animation: "slide",
	    animationLoop: false,
	    itemWidth: 300,
	    itemMargin: 0,
	    slideshow: false,
	    pauseOnHover: true,
	    controlNav: false,
	    prevText: '',         
		nextText: '', 
		animationLoop: true
	});

	$('body').removeClass('preload');
	$('body').addClass('loaded');
	
	$('.icon-menu').click( function() {
		$('.menu').toggleClass('expanded');
	});

	var closed = localStorage.getItem('closed');

	$('.toggle').click( function() {

		// var key    = 'closed';
		// var closed = localStorage.getItem(key);

		// localStorage.removeItem(key);
		// localStorage[key] = true;

		$('.list').toggleClass('closed');
	});


	$('.slides li').hover( function() {
		var current = $(this).data('id');
		var infowindow = new google.maps.InfoWindow();
        map.panTo( new google.maps.LatLng( locations[current][1], locations[current][2] ) );
        // infowindow.setContent(locations[current][0]);
        // infowindow.open( map, marker );
	});
});