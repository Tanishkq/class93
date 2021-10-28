
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyDGGupCOIugEQIY7blotmtYku44Feda2lQ",
      authDomain: "kwitter-b5f6c.firebaseapp.com",
      projectId: "kwitter-b5f6c",
      storageBucket: "kwitter-b5f6c.appspot.com",
      messagingSenderId: "737750658103",
      appId: "1:737750658103:web:f7beb6f7cd6d63faa063b2"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
