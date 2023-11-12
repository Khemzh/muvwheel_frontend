// const directionsService = new window.google.maps.DirectionsService();
// const directionsRenderer = new window.google.maps.DirectionsRenderer();

// function initMaps() {
//     const map = new window.google.maps.Map(document.getElementById('map'), {
//         center: { lat: 13.7563, lng: 100.5018 },
//         zoom: 8,
//         gestureHandling: "greedy",
//     });
//     return map
// }

// function marker_api() {
//     const position = { lat: 13.7563, lng: 100.5018 };
//     const marker = new window.google.maps.Marker({
//         map: initMaps(),
//         position: position,
//     });
//     return marker
// }

// function draggableMarker() {
//     const infoWindow = new window.google.maps.InfoWindow();
//     const draggableMarker = new window.google.maps.Marker({
//       map: initMaps(),
//       position: { lat: 37.39094933041195, lng: -122.02503913145092 },
//       gmpDraggable: true,
//       title: "This marker is draggable.",
//     });

//     draggableMarker.addListener("dragend", (event) => {
//       const position = draggableMarker.position;

//       infoWindow.close();
//       infoWindow.setContent(
//         `Pin dropped at: ${position.lat()}, ${position.lng()}`,
//       );
//       infoWindow.open(draggableMarker.map, draggableMarker);
//     });
// }

// function calcRoute() {
//     var start = document.getElementById('start').value;
//     var end = document.getElementById('end').value;
//     var request = {
//       origin: start,
//       destination: end,
//       travelMode: 'BUS'
//     };
//     directionsService.route(request, function(result, status) {
//       if (status == 'OK') {
//         directionsRenderer.setDirections(result);
//       }
//     });
// }

// function drawingManager() {
//     const drawingManager = new window.google.maps.drawing.DrawingManager({
//         drawingMode: window.google.maps.drawing.OverlayType.MARKER,
//         drawingControl: true,
//         drawingControlOptions: {
//           position: window.google.maps.ControlPosition.TOP_CENTER,
//           drawingModes: [
//             window.google.maps.drawing.OverlayType.MARKER,
//             window.google.maps.drawing.OverlayType.CIRCLE,
//             window.google.maps.drawing.OverlayType.POLYGON,
//             window.google.maps.drawing.OverlayType.POLYLINE,
//             window.google.maps.drawing.OverlayType.RECTANGLE,
//           ],
//         },
//         markerOptions: {
//           icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
//         },
//         circleOptions: {
//           fillColor: "#ffff00",
//           fillOpacity: 1,
//           strokeWeight: 5,
//           clickable: false,
//           editable: true,
//           zIndex: 1,
//         },
//       });
//       return drawingManager
// }
const { Loader } = require("@googlemaps/js-api-loader");
var map = null;
var google = window.google;
async function initMap() {

    const loader = new Loader({
        apiKey: "AIzaSyCUP4lwuTEXSPnFmJIY_eGSEnOGDGPxMRg",
        version: "weekly"
    });

    loader.load().then(async () => {
        const { Map } = await window.google.maps.importLibrary("maps");

        map = new Map(document.getElementById("map"), {
            center: { lat: 13.7563, lng: 100.5018 },
            zoom: 17,
        });
    });
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var userLatLng = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            // Center the map on the user's location
            map.setCenter(userLatLng);

            // Add a marker at the user's location
            var userMarker = new google.maps.Marker({
                position: userLatLng,
                map: map,
                title: 'Your Location'
            });

        }, function (err) {
            window.alert("Please allow location access.\nerr:\n"+err.message);
        });
    } else {
        // Browser doesn't support geolocation
        window.alert("Browser doesn't support geolocation");
    }
}
// function marker_api() {
//     const position = { lat: 13.7563, lng: 100.5018 };
//     const marker = new window.google.maps.Marker({
//         map: initMaps(),
//         position: position,
//     });
//     return marker
// }

// function draggableMarker() {
//     const infoWindow = new window.google.maps.InfoWindow();
//     const draggableMarker = new window.google.maps.Marker({
//         map: initMaps(),
//         position: { lat: 37.39094933041195, lng: -122.02503913145092 },
//         gmpDraggable: true,
//         title: "This marker is draggable.",
//     });

//     draggableMarker.addListener("dragend", (event) => {
//         const position = draggableMarker.position;

//         infoWindow.close();
//         infoWindow.setContent(
//             `Pin dropped at: ${position.lat()}, ${position.lng()}`,
//         );
//         infoWindow.open(draggableMarker.map, draggableMarker);
//     });
// }

function calcRoute() {
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    // var start = document.getElementById('start').value;
    // var end = document.getElementById('end').value;
    var request = {
        origin: "หอพักนิสิตจุฬา",
        destination: "โรงแรมปิคนิค",
        travelMode: 'TRANSIT',
        transitOptions: {
            modes: ['BUS'],  // ระบุว่าคุณต้องการใช้รถบัส
        },
    };
    directionsService.route(request, function (result, status) {
        if (status == 'OK') {
            directionsRenderer.setDirections(result);
            directionsRenderer.setMap(map);
        } else {
            window.alert("ไม่พบเส้นทาง");
        }
    });
}

// function drawingManager() {
//     const drawingManager = new window.google.maps.drawing.DrawingManager({
//         drawingMode: window.google.maps.drawing.OverlayType.MARKER,
//         drawingControl: true,
//         drawingControlOptions: {
//             position: window.google.maps.ControlPosition.TOP_CENTER,
//             drawingModes: [
//                 window.google.maps.drawing.OverlayType.MARKER,
//                 window.google.maps.drawing.OverlayType.CIRCLE,
//                 window.google.maps.drawing.OverlayType.POLYGON,
//                 window.google.maps.drawing.OverlayType.POLYLINE,
//                 window.google.maps.drawing.OverlayType.RECTANGLE,
//             ],
//         },
//         markerOptions: {
//             icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
//         },
//         circleOptions: {
//             fillColor: "#ffff00",
//             fillOpacity: 1,
//             strokeWeight: 5,
//             clickable: false,
//             editable: true,
//             zIndex: 1,
//         },
//     });
//     return drawingManager
// }
window.addEventListener('load', initMap);
// window.addEventListener('click', calcRoute);
module.exports = { initMap, calcRoute }