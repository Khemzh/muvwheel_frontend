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
    console.log("{system} init map done");
    return map
}


async function calcRoute2() {
    let originplace = localStorage.getItem('originPlace')
    let destinationplace = localStorage.getItem('destinationPlace')
    try {
        // if originplace is latlng (curent location)
        originplace = JSON.parse(originplace);
    } catch (e) {
        console.error('Error parsing originplace:', e);
    }

    var routesResponses = [];
    //nomal search
    await window.directionsService.route({
        origin: originplace,
        destination: destinationplace,
        travelMode: 'TRANSIT',
        transitOptions: {
            modes: ['BUS'],  // ระบุว่าคุณต้องการใช้รถบัส
        },
        language: 'th',
        provideRouteAlternatives: true,
    }, function (response, status) {
        if (status === google.maps.DirectionsStatus.OK) {
            routesResponses.push(response);
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });
    //avoiding tolls
    await window.directionsService.route({
        origin: originplace,
        destination: destinationplace,
        travelMode: 'TRANSIT',
        transitOptions: {
            modes: ['BUS'],  // ระบุว่าคุณต้องการใช้รถบัส
        },
        language: 'th',
        provideRouteAlternatives: true,
        avoidTolls: true,
    }, function (response, status) {
        if (status === google.maps.DirectionsStatus.OK) {
            routesResponses.push(response);
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });
    //avoiding highways
    await window.directionsService.route({
        origin: originplace,
        destination: destinationplace,
        travelMode: 'TRANSIT',
        transitOptions: {
            modes: ['BUS'],  // ระบุว่าคุณต้องการใช้รถบัส
        },
        language: 'th',
        provideRouteAlternatives: true,
        avoidHighways: true,
    }, function (response, status) {
        if (status === google.maps.DirectionsStatus.OK) {
            routesResponses.push(response);
        } else {
            window.alert('Directions request failed due to ' + status);
        }

        //Results analysis and drawing of routes
        var fastest = Number.MAX_VALUE,
            shortest = Number.MAX_VALUE;
        var fastestRoute = null,
            shortestRoute = null;
        routesResponses.forEach(function (res) {
            res.routes.forEach(function (rou, index) {
                let s = rou.legs[0].steps.filter(step => step.travel_mode === 'TRANSIT').length;
                let t = rou.legs[0].duration.value;
                console.log("number of bus in route " + index + ": ", s);
                console.log("duration of route " + index + ": ", t);
                if (s < shortest || shortestRoute != null && shortestRoute.legs[0].duration.value > t) {
                    shortest = s;
                    shortestRoute = rou;
                }
                if (t < fastest || fastestRoute != null && fastestRoute.legs[0].steps.filter(step => step.travel_mode === 'TRANSIT').length > s) {
                    fastest = t;
                    fastestRoute = rou;
                }

            })
        })
        console.log("shortest: ", shortest);
        console.log("fastest: ", fastest);
        window.routes = { fastestRoute: fastestRoute, shortestRoute: shortestRoute, all: routesResponses[0] };
    });
    console.log("{system} calculate route done");
    if (routesResponses != []) {
        return true
    } else {
        return false
    }

}

function initAutocomplete(element) {
    let searchBar = null
    searchBar = new google.maps.places.Autocomplete(element, {
        componentRestrictions: { 'country': ['TH'] },
        fields: ['place_id', 'geometry', 'name'],
    });
    searchBar.addListener("place_changed", function () { let id = `${element.id}`; onPlaceChanged(searchBar, id) })
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

module.exports = { initMap, initAutocomplete, onPlaceChanged, calcRoute2 }