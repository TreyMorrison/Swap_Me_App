

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCZtIRh1OQ8q_ySc2QWOeIoXsearNv9nbg",
    authDomain: "ganggreen-10c76.firebaseapp.com",
    databaseURL: "https://ganggreen-10c76.firebaseio.com",
    projectId: "ganggreen-10c76",
    storageBucket: "ganggreen-10c76.appspot.com",
    messagingSenderId: "574389336628"
};

firebase.initializeApp(config);




function initApp() {
    // Listening for auth state changes.
    // [START authstatelistener]
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
            // [START_EXCLUDE]
            document.getElementById('button-login-status').textContent = 'Signed in';
            document.getElementById('button-login').textContent = 'Sign out';
            document.getElementById('quickstart-account-details').textContent = JSON.stringify(user, null, '  ');
            // [END_EXCLUDE]
        } else {
            // User is signed out.
            // [START_EXCLUDE]
            document.getElementById('button-login-status').textContent = 'Signed out';
            document.getElementById('button-login').textContent = 'Sign in';
            document.getElementById('quickstart-account-details').textContent = 'null';
            // [END_EXCLUDE]
        }
        // [START_EXCLUDE]
        document.getElementById('button-login').disabled = false;
        // [END_EXCLUDE]
    });
    // [END authstatelistener]
    document.getElementById('button-login').addEventListener('click', toggleSignIn, false);
}
function getHashValue(key) {
    var matches = location.hash.match(new RegExp(key+'=([^&]*)'));
    return matches ? matches[1] : null;
}
window.onload = function() {
    initApp();
    // If a token has been passed in the hash fragment we display it in the UI and start the sign in process.
   // document.getElementById('tokentext').value = getHashValue('token') || '';
    /*if (document.getElementById('tokentext').value) {
        firebase.auth().signInWithCustomToken(getHashValue('token'));
    }*/
};

