function onGeoSuccess(position) {
  console.log(position);
  console.log(position.coords.latitude, position.coords.longitude);
}

function onGeoError(error) {
  console.log(error);
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);