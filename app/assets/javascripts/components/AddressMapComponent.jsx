 var AddressMapComponent = React.createClass({
	render: function() {
		return (
			<div className="mapcontainer">
			<form onSubmit={this.CheckRouteTime}>
				<input className="CurrentLocation" ref="CurrentLocation" type="text" placeholder="Current Location" />
				<input className="DesiredLocation" ref="DesiredLocation" type="text" placeholder="Desired Location" />
				<input className="LatestTime" ref="LatestTime" type="text" placeholder="Latest time to leave" />
				<button className="btnroute" type="submit">ROUTE</button>
			</form>
			<div className="googlemap" id="map"></div>
			</div>
		);
	},
	 CheckRouteTime: function(e) {
		var CurrentLocation= this.refs.CurrentLocation.getDOMNode().value
		var DesiredLocation = this.refs.DesiredLocation.getDOMNode().value
		var LatestTime = this.refs.LatestTime.getDOMNode().value
		setUpMap(CurrentLocation,DesiredLocation);
		e.preventDefault();
		setInterval(CheckTime, 10000);
		function CheckTime(){
			calculateDistances(CurrentLocation, DesiredLocation,function(e){
				var duration = e.rows[0].elements[0].duration.value
				if (duration>LatestTime*60){
					alert ('Traffic is good to go')
					$.get('HIS URL',function(){
					alert ('text has been sent')
					})
				}
			});


		}
	}
});	
function calculateDistances(origin1,destinationA,callback) {
  var service = new google.maps.DistanceMatrixService();
  service.getDistanceMatrix(
    {
      origins: [origin1],
      destinations: [destinationA],
      durationInTraffic: true,
      travelMode: google.maps.TravelMode.DRIVING,
    }, callback);
}

var geocoder, map;

function setUpMap(address,endaddress) {
    geocoder = new google.maps.Geocoder();
    geocoder.geocode({
        'address': address
    }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            var myOptions = {
                zoom: 8,
                center: results[0].geometry.location,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            }
            map = new google.maps.Map(document.getElementById("map"), myOptions);

            var marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location
            });
            addMarker(endaddress,true);
        }
    });
}
function addMarker(location, isDestination) {
  var bounds = new google.maps.LatLngBounds();
  geocoder.geocode({'address': location}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      bounds.extend(results[0].geometry.location);
      // map.fitBounds(bounds);
      var marker = new google.maps.Marker({
        map: map,
        position: results[0].geometry.location,
      });
      markersArray.push(marker);
    } else {
      alert('Geocode was not successful for the following reason: '
        + status);
    }
  });
}







