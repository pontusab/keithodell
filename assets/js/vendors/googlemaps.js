var markers;
var map;
var infowindow;
var image;
var selected;

function initialize() 
{
   markers = new Array();

    var mapOptions = 
    {
        disableDefaultUI: true,
        backgroundColor: '#eae4d6',
        minZoom: 2,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    map        = new google.maps.Map( document.getElementById( 'map-canvas' ), mapOptions );
    bounds     = new google.maps.LatLngBounds();
    infowindow = new InfoBubble(
    {
        minHeight: 30,
        minWidth: 50,
        map: map,
        padding: 0,
        shadowStyle: 'transperant',
        backgroundColor: '#000',
        borderRadius: 0,
        borderColor: '#020202',
        arrowSize: 7,
        borderWidth: 0,
        disableAutoPan: true,
        hideCloseButton: true,
        arrowPosition: 50,
        backgroundClassName: 'tooltip',
    });

    style = [{
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "landscape",
            "stylers": [{
            "visibility": "on"
        }, {
            "color": "#C7B9A1"
        }]
    }, {
        "featureType": "water",
            "stylers": [{
            "visibility": "on"
        }, {
            "color": "#eae4d6"
        }]
    }, {
        "elementType": "labels",
            "stylers": [{
            "visibility": "off"
        }]
    }];

    map.setOptions(
    {
        styles: style
    });

    image = 
    {
        url: 'assets/img/point.png',
    };

    selected = 
    {
        url: 'assets/img/point-selected.png',
    };

    for( i = 0; i < data.length; i ++ ) 
    {
        var marker = new google.maps.Marker(
        {
            position: new google.maps.LatLng(data[i][1], data[i][2]),
            map: map,
            icon: image,
            animation: google.maps.Animation.DROP,
            title: data[i][4]
        });

        bounds.extend(marker.position);

        google.maps.event.addListener(marker, 'mouseover', (function (marker, i) 
        {
            return function() 
            {
                marker.setIcon(selected);
                infowindow.setContent( data[i][0] );
                infowindow.open( map, marker );
            }
        })(marker, i));

        google.maps.event.addListener(marker, 'mouseout', (function (marker, i) 
        {
            return function() 
            {
                marker.setIcon(image);
            }
        })(marker, i));

        google.maps.event.addListener(marker, 'click', (function (marker, i) 
        {
            return function() 
            {
                window.location.href = data[i][3];
            }
        })(marker, i));

        markers.push( marker );
    }

    map.fitBounds(bounds);

    setTimeout( addRaster, 200 );
}

function addRaster() 
{
    var dv = document.createElement("DIV");
    dv.className = "raster";

    var mc = document.getElementById("map-canvas");
    mc.childNodes[0].childNodes[0].childNodes[0].appendChild(dv);
}
