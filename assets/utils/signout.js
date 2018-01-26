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
})(jQuery);
