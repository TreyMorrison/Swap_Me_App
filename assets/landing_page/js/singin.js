function toggleSignIn() {
    if (firebase.auth().currentUser) {
        // [START signout]
        firebase.auth().signOut();
        // [END signout]
        window.location.replace("../../profile/profile.html");
    } else {
        var email = document.getElementById('input-username').value;
        var password = document.getElementById('input-password').value;
        if (email.length < 4) {
            alert('Please enter an email address.');
            return;
        }
        if (password.length < 4) {
            alert('Please enter a password.');
            return;
        }
        // Sign in with email and pass.
        // [START authwithemail]
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // [START_EXCLUDE]
            if (errorCode === 'auth/wrong-password') {
                alert('Wrong password.');
            } else {
                alert(errorMessage);
            }
            console.log(error);
            document.getElementById('button-signup').disabled = false;
            // [END_EXCLUDE]

        });
        // [END authwithemail]

        window.location.replace("../../profile/profile.html");


    }
    //document.getElementById('button-signup').disabled = true;
}

