
//ADD YOUR FIREBASE LINKS
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

  function adduser(){
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose: "adding user"
      });
  }