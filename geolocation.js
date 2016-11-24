if ("geolocation" in navigator) {
  var button = document.getElementById('where-am-i');
  button.addEventListener('click', getLocation);
} else {
  alert("Geolocation is not available")
}

function getLocation() {
  console.log('Getting your location...'); 
  navigator.geolocation.getCurrentPosition(onLocation, onError, options);
}

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function onLocation (position) {
  console.log("We got it!");
  var lat = position.coords.latitude;
  var lon = position.coords.longitude;
  document.getElementById('location').innerHTML = "Your posititon is " + lat + " latitude and " + lon + " longitude.";
  displayMap(lat, lon);
}

function onError(error) {
  console.log("Getting location failed: " + error);
}

function displayMap(lat, lon) {
  var urlRoot = "https://maps.googleapis.com/maps/api/staticmap?center=";
  var urlParams = "&zoom=20&size=640x640";
  var url = urlRoot + lat + "," + lon + urlParams;
  var map = document.getElementById('map');
  map.setAttribute("src", url);
  console.log(url);
}