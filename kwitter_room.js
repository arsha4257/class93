
var firebaseConfig = {
      apiKey: "AIzaSyCDKGdVw8HuohiRrylXJ0GKAyGZ6l9PIoY",
      authDomain: "kwitter-1e780.firebaseapp.com",
      databaseURL: "https://kwitter-1e780-default-rtdb.firebaseio.com",
      projectId: "kwitter-1e780",
      storageBucket: "kwitter-1e780.appspot.com",
      messagingSenderId: "1046272879512",
      appId: "1:1046272879512:web:b3ecc35e8722e60fbb19ed"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
