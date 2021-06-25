//YOUR FIREBASE LINKS

 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyBsFo14J_e6wugplR8eWpcbsD8I6bXYOrI",
      authDomain: "class-test-5c164.firebaseapp.com",
      databaseURL: "https://class-test-5c164-default-rtdb.firebaseio.com",
      projectId: "class-test-5c164",
      storageBucket: "class-test-5c164.appspot.com",
      messagingSenderId: "881910835774",
      appId: "1:881910835774:web:ae9887db14eb40593dff6f"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;


//Start code
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");


//End code
      } });  }); }
getData();


function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref("room_name").push({
           name: user_name,
           message: msg,
           like: 0
      });

      document.getElementById("msg").value = "";

}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
