
function initMap() {
    var options = {
        zoom: 8,
        center: { lat: 33.774830, lng: -84.296310 }
    }
    var map = new
        google.maps.Map(document.getElementById('map'), options);

    // Listen for click on map to make a button
    google.maps.event.addListener(map, 'click', function (event) {
        //add marker
        addMarker({ coords: event.latLng });
    });


    //Array of markers
    var markers = [
        {
            coords: { lat: 33.774830, lng: -84.296310 },
            iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
            content: ''
        },
        {
            coords: { lat: 33.792519, lng: -84.323999 },
            content: ''
        },
    ];

    for (var i = 0; i < markers.length; i++) {
        addMarker(markers[i]);
    }

    //Add marker Function
    function addMarker(props) {
        var marker = new google.maps.Marker({
            position: props.coords,
            map: map,

        });
        //Check for customicon
        if (props.iconImage) {
            //set icon image. 
            marker.setIcon(props.iconImage);
        }
        //Check for content
        if (props.content) {
            var infowindow = new google.maps.InfoWindow({
                content: props.content
            });
            marker.addListener('click', function () {
                infowindow.open(map, marker);
            });
        }
    }
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
// Call Geocode
//geocode();

// Get location form
var locationForm = document.getElementById('location-form');

// Listen for submiot
locationForm.addEventListener('submit', geocode);

function geocode(e) {
    // Prevent actual submit
    e.preventDefault();

    var location = document.getElementById('location-input').value;

    axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
        params: {
            address: location,
            key: 'AIzaSyDw4uEwl1d37AvxFfOLcpUM5OWcJAolAFE'
        }
    })
        .then(function (response) {
            // Log full response
            console.log(response);

            // Formatted Address
            var formattedAddress = response.data.results[0].formatted_address;
            var formattedAddressOutput = `
          <ul class="list-group">
            <li class="list-group-item">${formattedAddress}</li>
          </ul>
        `;

            // Address Components
            var addressComponents = response.data.results[0].address_components;
            var addressComponentsOutput = '<ul class="list-group">';
            for (var i = 0; i < addressComponents.length; i++) {
                addressComponentsOutput += `
            <li class="list-group-item"><strong>${addressComponents[i].types[0]}</strong>: ${addressComponents[i].long_name}</li>
          `;
            }
            addressComponentsOutput += '</ul>';

            // Geometry
            var lat = response.data.results[0].geometry.location.lat;
            var lng = response.data.results[0].geometry.location.lng;
            var geometryOutput = `
          <ul class="list-group">
            <li class="list-group-item"><strong>Latitude</strong>: ${lat}</li>
            <li class="list-group-item"><strong>Longitude</strong>: ${lng}</li>
          </ul>
        `;

            // Output to app
            document.getElementById('formatted-address').innerHTML = formattedAddressOutput;
            document.getElementById('address-components').innerHTML = addressComponentsOutput;
            document.getElementById('geometry').innerHTML = geometryOutput;
        })
        .catch(function (error) {
            console.log(error);
        });
}