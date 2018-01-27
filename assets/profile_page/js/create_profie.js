(function($) {
    $('#profile-button').on('click', function (evt) {
        evt.preventDefault();

        var uid = firebase.auth().currentUser.uid;
        var displayName = $('#first-name-input').val() + " " + $('#last-name-input').val();
        var streetAddress = $('#street-address-line-input1').val();
        var aptNumber = $('#street-address-line-input2').val();
        var city= $('#city-input').val();
        var state= $('#state-input').val();
        var zipCode= $('#zip-input').val();
       // var country= $('#street-address-line-input2').val();
        var company= $('#company-name-input').val();
       // var institution= $('#street-address-line-input2').val();
       // var skill= $('#street-address-line-input2').val();


        firebase.database().ref().child('profile').child(uid).set({
            userId: uid,
            displayName: displayName,
            photoURL: null,
            phoneNumber: null,
            addressLine1: streetAddress,
            addressLine2: aptNumber,
            city: city,
            state: state,
            zip: zipCode,
            //county:county,
            //country: country

        });

        firebase.database().ref('/profile' + uid).on("value", function() {
            window.location = './profile.html';
        });



    })
})(jQuery);