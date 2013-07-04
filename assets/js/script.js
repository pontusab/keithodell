/*
@codekit-prepend "vendors/jquery.flexslider-min.js"
@codekit-prepend "vendors/infobubble-compiled.js"
@codekit-prepend "vendors/googlemaps.js"
*/

$(document).ready(function() 
{
	// Add some clases for css3 transisions
	$('body').removeClass('preload');
	$('body').addClass('loaded');
	
	// Slides
	$('.flexslider').flexslider(
	{
		pauseOnAction: false,
		directionNav: false,
		slideshowSpeed: 8300,
		animationSpeed: 1300
	});

	// Slides
	$('.content-1').flexslider(
	{
		animation: 'slide',
		directionNav: false,
		slideshowSpeed: 4000,
		animationSpeed: 900
	});

	// Slides
	$('.story-items').flexslider(
	{
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

	// Add expanded to mobilemenu
	$('.icon-menu').click( function() 
	{
		$('.menu').toggleClass('expanded');
		$('.innerwrapper').toggleClass('closed');
	});


	// Add expanded to the storiespicker
	$('.toggle').click( function() 
	{
		google.maps.event.trigger( map, 'resize' );
		$('.list').toggleClass('closed');
		$('.map').toggleClass('expanded');
	});


	$('.control div').click( function() 
	{
		var currentZoom = map.getZoom();

		if( $(this).text() == '+') 
		{
			if( currentZoom < 5 )
			{
				var currentZoom = parseFloat( currentZoom ) + 1;
			}
		} 
		else
		{
			if( currentZoom > 2 )
			{
				var currentZoom = parseFloat( currentZoom ) - 1;
			}
		}

  		map.setZoom( currentZoom );
	});



	// Control the map by mouseover 
	$('.slides li').mouseenter( function() 
	{
		index = $(this).data('id');
		marker = markers[index];
		marker.setIcon( selected );
        map.panTo( new google.maps.LatLng( data[index][1], data[index][2] ) );
        infowindow.setContent( data[index][0] );
        infowindow.open( map, marker );
	});

	// Control the map by mouseout 
	$('.slides li').mouseout( function() 
	{
		marker.setIcon( image );
	});
});

