var signOut = function(){
    firebase.auth().signOut().then(function() {
        console.log('Signed Out');
      }, function(error) {
        console.error('Sign Out Error', error);
      });
      window.location = './landing_page.html'
      
};

(function($){
    $('#button-logout').on('click', function(evt){
        evt.preventDefault();
        signOut(); 
    });
    

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
        
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
