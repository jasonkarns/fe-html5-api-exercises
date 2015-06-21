function mapUrlFor(lat, lon) {
  return JST['app/templates/map-url.us']({lat:lat, lon:lon});
}

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position){
    document.getElementById('map').src = mapUrlFor(position.coords.latitude, position.coords.longitude);
  }, function(message) { console.log(message); });
}
