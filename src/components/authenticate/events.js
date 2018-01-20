(function($){
    $('#submit').on('click', function(evt){
        evt.preventDefault();
        var email = $('#email').val();
        var password = $('#password').val();

        signIn(email, password);
    });

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
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