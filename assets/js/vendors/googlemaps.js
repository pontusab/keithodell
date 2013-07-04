var markers;
var marker;
var map;
var infowindow;

function initialize() {
   // markers = new Array();

    var mapOptions = {
        disableDefaultUI: true,
        backgroundColor: '#eae4d6',
        minZoom: 2,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL,
            position: google.maps.ControlPosition.TOP_RIGHT
        },
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    map = new google.maps.Map( document.getElementById( 'map-canvas' ), mapOptions );
    var bounds = new google.maps.LatLngBounds();
    var infowindow = new google.maps.InfoWindow();

    var style = [{
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

    map.setOptions({
        styles: style
    });

    var image = {
        url: 'assets/img/point.png',
    };

    var selected = {
        url: 'assets/img/point-selected.png',
    };

    for( i = 0; i < locations.length; i++ ) {
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map,
            icon: image,
            animation: google.maps.Animation.DROP,
            title: locations[i][4]
        });

        bounds.extend(marker.position);

        google.maps.event.addListener(marker, 'mouseover', (function (marker, i) {
            return function () {
                marker.setIcon(selected);
            }
        })(marker, i));

        google.maps.event.addListener(marker, 'mouseout', (function (marker, i) {
            return function () {
                marker.setIcon(image);
            }
        })(marker, i));

        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                // infowindow.setContent(locations[i][0]);
                // infowindow.open(map, marker);
                window.location.href = locations[i][3];
            }
        })(marker, i));

    }

    map.fitBounds(bounds);

    setTimeout( addRaster, 200 );
}

function addRaster() {
    var dv = document.createElement("DIV");
    dv.className = "raster";

    var mc = document.getElementById("map-canvas");
    mc.childNodes[0].childNodes[0].childNodes[0].appendChild(dv);
}
