<html>
<head>
<script src='http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js' type='text/javascript'></script>
<script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?sensor=false"></script>
<script type="text/javascript">

  var markers;
  var map;
    var infowindow = new google.maps.InfoWindow();

  function initialize() {
    markers = new Array();
    var mapOptions = {
      zoom: 6,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };

    map = new google.maps.Map(document.getElementById("map"),
            mapOptions);

    $("#map_list ul li").each(function(index) {

        var marker = new google.maps.Marker({
        position: new google.maps.LatLng($(this).children(".marker_long").text(), $(this).children(".marker_lat").text()),
        map: map,
        animation: google.maps.Animation.DROP,
        title : $(this).children(".marker_title").text(),
        brief: $(this).children(".marker_brief").text()
        });

        google.maps.event.addListener(marker, 'click', function() {
          map.panTo(new google.maps.LatLng(marker.position.Sa, marker.position.Ta));
          infowindow.setContent(marker.brief);  
          infowindow.open(map,marker);
        });

        markers.push(marker);
    });
  }

$(document).ready(function(){
  $("#map_list ul li").click(function(){
        marker = markers[this.id];
        markerContent = $("div.marker_brief",this).html();
        varLong = $("div.marker_long",this).html();
        varLat = $("div.marker_lat",this).html();
        map.panTo(new google.maps.LatLng(varLong, varLat));
        infowindow.setContent(markerContent)
        infowindow.open(map,marker);

  });
});
</script>
</head>
<body onload='initialize();'>
<div id="map" style="width: 450px; height: 350px;"></div>
<div id="map_list">
<ul>
<li id="0">
    <div class="marker_title">Salt Lake City</div>
    <div class="marker_brief">Capital of Utah</div>
    <div class="marker_long">40.763901</div>
    <div class="marker_lat">-111.901245</div>
</li>
<li id="1">
    <div class="marker_title">Provo</div>
    <div class="marker_brief">Location of BYU</div>
    <div class="marker_long">40.25228</div>
    <div class="marker_lat">-111.659546</div>
</li>
</ul>
</div>
</body>
</html>