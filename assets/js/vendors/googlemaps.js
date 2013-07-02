function addRaster() {
    var dv = document.createElement("DIV");
    dv.className = "raster";

    var mc = document.getElementById("map-canvas");
    mc.childNodes[0].childNodes[0].childNodes[0].appendChild(dv);
}

function initialize() {
	var map;

    var chHtml ="<h3><a href='http://en.wikipedia.org/wiki/Chicago,_Illinois'"
+" target='_blank'>Chicago, Illinois</a></h3><div>"
+"<img src='http://upload.wikimedia.org/wikipedia/commons/thumb/0/06/20070909_"
+"Chicago_Half_Marathon.JPG/220px-20070909_Chicago_Half_Marathon.JPG'"
+" width='220' hieght='174' />"
+"</div><div>Chicago is the largest city in the U.S. state of Illinois.</div>";

    var locations = [
        ['France', 46.227638,2.213749, 3],
        ['Linköping', 58.410807,15.621373, 2],
        ['New York', 40.714353,-74.005973, 2],
        ['Spain', 40.463667,-3.74922, 2],
        ['Stockholm', 59.32893,18.06491, 2],
        ['Africa', -8.783195,34.508523, 2],
        ['Canada', 56.130366,-106.346771, 2],
        ['Greenland', 71.706936,-42.604303, 2],
        ['Cuba', 21.521757,-77.781167, 2],
        ['Ireland', 53.41291,-8.24389, 2],
        ['Paraguay', -23.442503,-58.443832, 2],
        ['New Zeland', -40.900557,174.885971, 2],
        ['Madagascar', -18.766947,46.869107, 2],
        ['India', 20.593684,78.96288, 2],
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
        //draggable: false,
        backgroundColor: '#eae4d6',
        minZoom: 2,
	    mapTypeId: google.maps.MapTypeId.ROADMAP
	  }

    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    map.setOptions({
        styles: style
    });


    var image = {
        url: 'assets/img/pointer.png',
    };

    var infowindow = new google.maps.InfoWindow();

    var bounds = new google.maps.LatLngBounds();

    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map,
            icon: image,
        });

        bounds.extend(marker.position);

        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
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
