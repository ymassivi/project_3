<script>
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
    </script>
    <!--Load the API from the specified URL
    * The async attribute allows the browser to render the page while the API loads
    * The key parameter will contain your own API key (which is not needed for this tutorial)
    * The callback parameter executes the initMap() function
    -->
    <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAWJwWNbCAS-WJmRqQVj9O6A_CItmP1uvU&callback=initMap">
    </script>
