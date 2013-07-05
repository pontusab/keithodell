/*
@codekit-prepend "vendors/jquery.flexslider-min.js"
@codekit-prepend "vendors/infobubble-compiled.js"
@codekit-prepend "vendors/googlemaps.js"
@codekit-prepend "vendors/jquery.sharrre-1.3.4.min.js"

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
		$('.innerwrapper').toggleClass('closed');
		$('.menu').toggleClass('expanded');
	});


	// Add expanded to the storiespicker
	$('.toggle').click( function() 
	{
		google.maps.event.trigger( map, 'resize' );
		map.setZoom( 2 );
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
			if( currentZoom > 0 )
			{
				var currentZoom = parseFloat( currentZoom ) - 1;
			}
		}

  		map.setZoom( currentZoom );
	});



	// Control the map by mouseover 
	$('.stories .slides li').mouseenter( function() 
	{
		index = $(this).data('id');
		marker = markers[index];
		marker.setIcon( selected );
        map.panTo( new google.maps.LatLng( data[index][1], data[index][2] ) );
        infowindow.setContent( data[index][0] );
        infowindow.open( map, marker );
	});

	// Control the map by mouseout 
	$('.stories .slides li').mouseout( function() 
	{
		marker.setIcon( image );
	});

	$('.share .fb').sharrre(
	{
		share: 
		{
			facebook: true
		},
		enableHover: false,
		enableTracking: true,
		enableCounter: false,
		click: function(api, options)
		{
			api.simulateClick();
			api.openPopup('facebook');
		}
	});

	$('.share .gp').sharrre(
	{
		share: 
		{
			googlePlus: true
		},
		enableHover: false,
		enableTracking: true,
		enableCounter: false,
		click: function(api, options)
		{
			api.simulateClick();
			api.openPopup('googlePlus');
		}
	});

	$('.share .tw').sharrre(
	{
		share: 
		{
			twitter: true
		},
		enableHover: false,
		enableTracking: true,
		enableCounter: false,
		click: function(api, options){
			api.simulateClick();
			api.openPopup('twitter');
		}
	});
});

