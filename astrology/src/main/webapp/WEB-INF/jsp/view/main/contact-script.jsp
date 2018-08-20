<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC1iYs4jh9N5Mz6ZkFPHkVJbWjqQhW-fjg&callback=initMap"></script>
<script type="text/javascript">
function initMap() {
    var uluru = {lat: 25.039548, lng: 121.577478};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 18,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  };
</script>
<script type="text/javascript">
	app.controller('controller', function ($scope,$http) {
		
	});
</script>