//https://developers.google.com/maps/documentation/javascript/cloud-customization/overview?hl=th for frontend

const directionsService = new window.google.maps.DirectionsService();
const directionsRenderer = new window.google.maps.DirectionsRenderer();

function initMaps() {
    const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 13.7563, lng: 100.5018 },
        zoom: 8,
        gestureHandling: "greedy",
    });
    return map
}

function marker_api() {
    const position = { lat: 13.7563, lng: 100.5018 };
    const marker = new window.google.maps.Marker({
        map: initMaps(),
        position: position,
    });
    return marker
}

function draggableMarker() {
    const infoWindow = new window.google.maps.InfoWindow();
    const draggableMarker = new window.google.maps.Marker({
      map: initMaps(),
      position: { lat: 37.39094933041195, lng: -122.02503913145092 },
      gmpDraggable: true,
      title: "This marker is draggable.",
    });
  
    draggableMarker.addListener("dragend", (event) => {
      const position = draggableMarker.position;
  
      infoWindow.close();
      infoWindow.setContent(
        `Pin dropped at: ${position.lat()}, ${position.lng()}`,
      );
      infoWindow.open(draggableMarker.map, draggableMarker);
    });
}

function calcRoute() {
    var start = document.getElementById('start').value;
    var end = document.getElementById('end').value;
    var request = {
      origin: start,
      destination: end,
      travelMode: 'BUS'
    };
    directionsService.route(request, function(result, status) {
      if (status == 'OK') {
        directionsRenderer.setDirections(result);
      }
    });
}

function drawingManager() {
    const drawingManager = new window.google.maps.drawing.DrawingManager({
        drawingMode: window.google.maps.drawing.OverlayType.MARKER,
        drawingControl: true,
        drawingControlOptions: {
          position: window.google.maps.ControlPosition.TOP_CENTER,
          drawingModes: [
            window.google.maps.drawing.OverlayType.MARKER,
            window.google.maps.drawing.OverlayType.CIRCLE,
            window.google.maps.drawing.OverlayType.POLYGON,
            window.google.maps.drawing.OverlayType.POLYLINE,
            window.google.maps.drawing.OverlayType.RECTANGLE,
          ],
        },
        markerOptions: {
          icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
        },
        circleOptions: {
          fillColor: "#ffff00",
          fillOpacity: 1,
          strokeWeight: 5,
          clickable: false,
          editable: true,
          zIndex: 1,
        },
      });
      return drawingManager
}

module.exports = {initMaps, marker_api, draggableMarker,calcRoute, drawingManager}