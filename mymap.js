
// Initialize and add the map
function initMap() {
  // The location of Uluru
  var uluru = {lat:41.677963  , lng:-91.585011};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 16, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}

