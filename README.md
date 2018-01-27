# iSwap.me

Everyone has a craft they are skilled at performing.  
At iSwap.me we want to connect individuals with skills that they are willing to trade for another set of skills they are lacking.    
The GREAT part is there is NO NEED FOR CASH!

# Authors

* Junghoon Yoon https://github.com/juhuyoon/ 
* Kishon Hamilton https://github.com/kishonhamilton 
* Nickolas Buchanan https://github.com/nickolasbuchanan 
* TC Twidt https://github.com/twidt 
* Stephen Morrison III https://github.com/TreyMorrison 

## Getting Started

In order to get started CREATE an account and LOGIN and GET SWAPPING.   
If you would like to work with the code the repository can be found [here](https://github.com/juhuyoon/Swap_Me_App)

## Built With

* [Bootstrap](https://getbootstrap.com/) - The web styling used
* [Firebase](https://firebase.google.com/) - The database used
* [Google Maps API](https://developers.google.com/maps/) - Map interface
* [Geocode API](https://developers.google.com/maps/documentation/geocoding/start) - Finding coordinates via Street Address

### JavaScript Code Snippets

* How to create a interactive google map. [Google Map API]  

    ```function initMap() {    
        console.log("Map initialisation");    
        map = new google.maps.Map(document.getElementById('map'), {    
            center: {    
                lat: {coords},    
                lng: {coords}    
            }, // TODO change to start location    
            zoom: #,    
            mapTypeId: google.maps.MapTypeId.ROADMAP    
        });  
    ``` 
* How to get the coordinates of a location via Street Address [Geocode API]  
```
 function getLatLng(geocoder, address) {  
        geocoder.geocode({'address': address}, function(results, status) {  
                (results[0].geometry.location)  
                    var latlong = JSON.stringify(results[0].geometry.location);  
```
*  Converting the Street Addresses after pulling from the DOM.  
 ``` function doGeocode(){  
        var geocoder = new google.maps.Geocoder();  
        getLatLng(geocoder, address);  
```





## Acknowledgments

* John McSwain
* Georgia Tech Coding Boot Camp
* startbootstrap.com for themes


### Prerequisites

This web application is for use by anyone over the age of 18 years old or above legal age of consent in your area, region or country. Under no circumstances is iSwap.me to be used for any sexual activities or activities illegal in your respective area.
