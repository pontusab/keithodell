function addRaster() {
    var dv = document.createElement("DIV");
    dv.className = "raster";

    var mc = document.getElementById("map-canvas");
    mc.childNodes[0].childNodes[0].childNodes[0].appendChild(dv);
}

function initialize() {

    var locations = [
        ['France', 46.227638,2.213749, '/story.php'],
        ['Linköping', 58.410807,15.621373, '/story.php'],
        ['New York', 40.714353,-74.005973, '/story.php'],
        ['Spain', 40.463667,-3.74922, '/story.php'],
        ['Stockholm', 59.32893,18.06491, '/story.php'],
        ['Africa', -8.783195,34.508523, '/story.php'],
        ['Canada', 56.130366,-106.346771, '/story.php'],
        ['Greenland', 71.706936,-42.604303, '/story.php'],
        ['Cuba', 21.521757,-77.781167, '/story.php'],
        ['Ireland', 53.41291,-8.24389, '/story.php'],
        ['Paraguay', -23.442503,-58.443832, '/story.php'],
        ['New Zeland', -40.900557,174.885971, '/story.php'],
        ['Madagascar', -18.766947,46.869107, '/story.php'],
        ['India', 20.593684,78.96288, '/story.php'],
    ];

    var style = [{
        "stylers": [{
            "visibility": "off"
        }]
    },
    {
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


    var mapOptions = {
	    disableDefaultUI: true,
        backgroundColor: '#eae4d6',
        minZoom: 2,
	    mapTypeId: google.maps.MapTypeId.ROADMAP
	  }

    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    map.setOptions({
        styles: style
    });

    var image = {
        url: 'assets/img/point.png',
    };

    var selected = {
        url: 'assets/img/point-selected.png',
    };

    var bounds = new google.maps.LatLngBounds();

    for( i = 0; i < locations.length; i++ ) {
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map,
            icon: image
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
                window.location.href = locations[i][3];
                }
        })(marker, i));

    }

    map.fitBounds(bounds);

    var listener = google.maps.event.addListener(map, "idle", function () {
        map.setZoom(2);
        google.maps.event.removeListener(listener);
    });

    setTimeout( addRaster, 200 );
}


function loadScript() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' + 'callback=initialize';
    document.body.appendChild(script);
}

window.onload = loadScript;
