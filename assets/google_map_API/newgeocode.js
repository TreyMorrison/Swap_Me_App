var map;
    var fromLocation;
    var destLocation;
    var callbackCounter=0;

    function initMap() {

        console.log("Map initialisation");

        map = new google.maps.Map(document.getElementById('map'), {
            center: {lat:42.742189,lng:-93.19717100000003}, // TODO change to start location
            zoom: 10, // continent level
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        var directionService = new google.maps.DirectionsService();
        var directionRender = new google.maps.DirectionsRenderer({
            map: map
        }); 

        var markerA = new google.maps.Marker({
            position: fromLocation,
            title: "Point A",
            label: "A",
            map:map
        });

        var markerB = new google.maps.Marker({
            position: destLocation,
            title: "Point B",
            label:"B",
            map:map
        });
        

        // renderRoute == not a function!!
        // Missing in the question...
        // Temporarly commented out.
        //
        //renderRoute(directionService, directionRender, fromLocation, destLocation);

    } // end of initMap

    function getLatLng(geocoder, address) {
        geocoder.geocode({'address': address}, function(results, status) {

            if (status === 'OK') {
                if(results[0].geometry.location){
                    console.log("Successfully Lat/Lng converted");

                    // Only to see clearly in console.log()
                    var latlong = JSON.stringify(results[0].geometry.location);
                    console.log( latlong );

                    latlong = JSON.parse(latlong);
                    callbackCounter++;

                    // Set from
                    if(callbackCounter==1){
                        fromLocation = latlong;
                    }

                    // Set dest
                    if(callbackCounter==2){
                        destLocation = latlong;
                    }

                    // Function end.
                    return;
                }
                else{
                    console.log("Couldn't properly convert");
                }
            } else {
                console.log('Geocode was not successful for the following reason: ' + status);
            }
        });
    }
//get the address
    var add = document.getElementById("address").innerText
    console.log(add)
    function doGeocode(){
        var geocoder = new google.maps.Geocoder();
        //I need the firebase Data to be connected in order to bounce back the addresses from the data. 
        getLatLng(geocoder, add);
        getLatLng(geocoder, add);

        // Wait for from and dest locations found ( Geocoder get delay )
        var waitForCoords = setInterval(function(){
            console.log("--- Interval");

            if(callbackCounter==2){
                clearInterval(waitForCoords);
                console.log("--- Interval cleared");

                // Ready to initialise the map!
                initMap();
            }

        },50);
    }


    