var signOut = function(){
    firebase.auth().signOut().then(function() {
        console.log('Signed Out');
      }, function(error) {
        console.error('Sign Out Error', error);
      });
      window.location = './index.html'
};

(function($){
    $('#button-logout').on('click', function(evt){
        evt.preventDefault();
        signOut(); 
    });
})(jQuery);
