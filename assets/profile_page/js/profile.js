(function($) {

    $( window ).on( "load", function() {
        var user = firebase.auth().currentUser;
        var profile = firebase.database().ref('/profile/');
        console.log(profile);
        profile.on('child_added', function(snapshot) {
           var firs= (snapshot.val() && snapshot.val().username) || 'Anonymous';
           console.log(user);
    })



})(jQuery);