var uid = '0qCtg3FnkWWwZUBWZcBz2Gbbozf2';
var displayName = 'Kishon';
var streetAddress = '7771 Pleasant Hill Rd';
var aptNumber = '';
var city  = 'Lithonia';
var state = 'GA';
var zipCode = '30058';
var county= '';
var country = '';
firebase.database().ref().child('profile').child(uid).set({
   // email: user.email,
    userId: uid,
    displayName: displayName,
    photoURL: null,
    phoneNumber: null,
    addressLine1: streetAddress,
    addressLine2: aptNumber,
    city: city,
    state: state,
    zip: zipCode,
    county:county,
    country: country



});