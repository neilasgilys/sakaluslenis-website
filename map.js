    function initMap() {
      var location = {lat: 55.936090, lng: 22.345365};
      var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: location
      });
      
      var marker = new google.maps.Marker({
          position: location,
          map: map
      });
    }