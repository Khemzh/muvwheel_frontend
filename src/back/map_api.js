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
const loader = new Loader({
    apiKey: "AIzaSyCUP4lwuTEXSPnFmJIY_eGSEnOGDGPxMRg",
    version: "weekly"
});
window.directionsService = new google.maps.DirectionsService();
window.directionsRenderer = new google.maps.DirectionsRenderer();


async function initMap() {
    loader.load().then(async () => {
        const { Map } = await google.maps.importLibrary("maps");
        map = await new Map(document.getElementById("map"), {
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
            localStorage.setItem('originPlace', JSON.stringify(userLatLng));
            // Center the map on the user's location
            map.setCenter(userLatLng);

            // Add a marker at the user's location
            var userMarker = new google.maps.Marker({
                position: userLatLng,
                map: map,
                title: 'Your Location',
                // icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
            });

        }, function (err) {
            window.alert("Please allow location access.\nerr:\n" + err.message);
        });
    } else {
        // Browser doesn't support geolocation
        window.alert("Browser doesn't support geolocation");
    }
}

async function calcRoute() {
    // var start = document.getElementById('start').value;
    // var end = document.getElementById('end').value;
    let originplace = localStorage.getItem('originPlace')
    let destinationplace = localStorage.getItem('destinationPlace')
    try {
        // if originplace is latlng (curent location)
        originplace = JSON.parse(originplace);
    } catch (e) {
        console.error('Error parsing originplace:', e);
    }
    var request = {
        origin: originplace,
        // บริษัท เอ็มเอสเอ็ม เวนดิ้ง ซัพพลาย แอนด์ เซอร์วิส จำกัด
        destination: destinationplace,
        travelMode: 'TRANSIT',
        transitOptions: {
            modes: ['BUS'],  // ระบุว่าคุณต้องการใช้รถบัส
        },
        language: 'th' // Add this line to request directions in Thai language
    };
    let c = false
    await window.directionsService.route(request, function (result, status) {
        if (status == 'OK') {

            const transitDetails = result.routes[0].legs[0].steps
            // .filter(step => step.travel_mode === 'TRANSIT')
            // .map(step => step.instructions);
            localStorage.setItem('transitDetails', JSON.stringify(transitDetails));
            console.log(transitDetails);
            window.directionsRenderer.setDirections(result);
            window.directionsRenderer.setMap(map);
            // setListStep(transitDetails);
            // Download result as JSON file
            // const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(result));
            // const downloadAnchorNode = document.createElement('a');
            // downloadAnchorNode.setAttribute("href", dataStr);
            // downloadAnchorNode.setAttribute("download", "directions.json");
            // document.body.appendChild(downloadAnchorNode); // required for firefox
            // downloadAnchorNode.click();
            // downloadAnchorNode.remove();
            c = true
        } else {
            window.alert("ไม่พบเส้นทาง\nfrom : "+originplace+"\n to : "+destinationplace);
            c = false;
        }
    })
    return c
}

function initAutocomplete(element) {
    let searchBar = null
    searchBar = new google.maps.places.Autocomplete(element, {
        componentRestrictions: { 'country': ['TH'] },
        fields: ['place_id', 'geometry', 'name'],
    });
    searchBar.addListener("place_changed", function () { let id = `${element.id}`;onPlaceChanged(searchBar, id) })
}

function onPlaceChanged(element, id) {
    var place = element.getPlace()

    if (!place.geometry) {
        //User did not select a prediction; reset the input field
        element.value = ""
    } else {
        if (id === 'origin') {
            localStorage.setItem('originPlace', place.name);
        } else if (id === 'destination') {
            localStorage.setItem('destinationPlace', place.name)
        }

        // window.directionsRenderer.set('directions', null);
        // calcRoute(place.name)
    }
}

// function setListStep(transitDetails) {
//     const listStep = document.getElementById('listOfStep')
//     const homecss = {
//         number: "number-class",
//         busToBus: "bus-to-bus-class",
//         whiteLine: "white-line-class"
//     };
//     listStep.innerHTML = ""
//     transitDetails.forEach(step => {
//         const p1 = document.createElement('p');
//         p1.className = homecss.number;
//         p1.innerText = transitDetails[0].instructions;

//         const p2 = document.createElement('p');
//         p2.className = homecss.busToBus;
//         p2.innerHTML = 'A &rarr; B <div className=${homecss.whiteLine}></div>';

//         // Assuming you have a parent element to append these to:
//         listStep.appendChild(p1);
//         listStep.appendChild(p2);
//     })
// }

window.addEventListener('load', initMap);
// window.addEventListener('click', calcRoute);
module.exports = { initMap, calcRoute, initAutocomplete, onPlaceChanged }