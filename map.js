function initMap() {
  // The location of willis Tower
  var willis = {lat: 41.8789, lng: 87.6359};
  // The map, centered at willis
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 8, center: willis});
  // The marker, positioned at willis Tower
  var marker = new google.maps.Marker({position: willis, map: map});
}
