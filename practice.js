
//ADD YOUR FIREBASE LINKS

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAyPdtSXaVrJaRRbT8OO8SsqP42rfU5u_s",
    authDomain: "kwitter-practice-fc735.firebaseapp.com",
    databaseURL: "https://kwitter-practice-fc735-default-rtdb.firebaseio.com",
    projectId: "kwitter-practice-fc735",
    storageBucket: "kwitter-practice-fc735.appspot.com",
    messagingSenderId: "914310521511",
    appId: "1:914310521511:web:9e0c782f96266a8a29b182"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser(){
    user_name=document.getElementById("user_name").value
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}