
var signIn = function(email,password){
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
    
            var errorMessage = error.message;
            if (errorCode == 'auth/weak-password') {
                alert('The password is too weak.');
              } else {
                alert(errorMessage);
              }
              console.log(error);
              
        // ...
    });
};


(function($){
    $('#button-login').on('click', function(evt){
        evt.preventDefault();
        var email = $('#input-username').val();
        var password = $('#input-password').val();

        signIn(email, password);
    
    });
    

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            window.location = './profile.html'
          var displayName = user.displayName;
          var email = user.email;
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;

          console.log('Display Name:', displayName, 'E-mail:', email, 'User ID:', uid);
          
          // ...
        } else {
          // User is signed out.
          // ...
        }
      });
})(jQuery);
