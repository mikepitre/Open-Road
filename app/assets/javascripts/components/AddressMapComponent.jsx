 // var AddressMapComponent = React.createClass({
	// render: function() {
	// 	return (
	// 		<div className="mapcontainer">
	// 		<form onSubmit={this.CheckRouteTime}>
	// 			<input className="CurrentLocation" ref="CurrentLocation" type="text" placeholder="Current Location" />
	// 			<input className="DesiredLocation" ref="DesiredLocation" type="text" placeholder="Destination" />
	// 			<input className="LatestTime" ref="LatestTime" type="text" placeholder="In minutes" />
	// 			<button className="btnroute" type="submit">ROUTE</button>
	// 		</form>
	// 		<div className="googlemap" id="map"></div>
	// 		</div>


// ....................................


 var AddressMapComponent = React.createClass({
  render: function() {
    return (

<div className="background-img">

    <p className="welcome"> Your trip info </p>

      <div className="main">

              <div className="signInContainer">

                    <div className="mapcontainer">

                         <form onSubmit={this.CheckRouteTime}>

                              <div className="position_3">
                                  <input className="CurrentLocation formtext_map" ref="CurrentLocation" type="text" placeholder="Current location" />
                                  <input className="DesiredLocation formtext_map" ref="DesiredLocation" type="text" placeholder="Destination" />
                                  <input className="LatestTime formtext_map" ref="LatestTime" type="text" placeholder="Travel time in minutes" />
                                  <button className="btnroute btn" type="submit">ROUTE</button>
                              </div>

                         </form>

                    </div>

               </div>

        </div>



       <div className="googlemap" id="map"></div>
      

 </div>      


// ....................................

		);
	},
	 CheckRouteTime: function(e) {
		var CurrentLocation= this.refs.CurrentLocation.getDOMNode().value
		var DesiredLocation = this.refs.DesiredLocation.getDOMNode().value
		var LatestTime = this.refs.LatestTime.getDOMNode().value
		setUpMap(CurrentLocation,DesiredLocation);
		e.preventDefault();
		 var timer = setInterval(CheckTime, 10000);
		function CheckTime(){
			calculateDistances(CurrentLocation, DesiredLocation,function(e){
				var duration = e.rows[0].elements[0].duration.value
				if (duration>LatestTime*60){
          
					$.post('/trips/notify',function(){
            alert('Time to go!')
					clearInterval(timer);
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
            calcRoute(address,endaddress);
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
    } else {
      alert('Geocode was not successful for the following reason: '
        + status);
    }
  });
}
function calcRoute(start,end) {
  var directionsService = new google.maps.DirectionsService();
  var directionsDisplay;
  directionsDisplay = new google.maps.DirectionsRenderer();
  directionsDisplay.setMap(map);
  var request = {
    origin:start,
    destination:end,
    travelMode: google.maps.TravelMode.DRIVING
  };
  directionsService.route(request, function(result, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(result);
    }
  });
}







