

    //ADD YOUR FIREBASE LINKS HERE
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
  

    user_name = localStorage.getItem("user_name");
    document.getElementById(user_name).innerHTML = "Welcome" + user_name + " ! ";

    function addroom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
        purpose:"adding room name"

      });

      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
      
    }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

console.log("Room name-" + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='RedirectToRoomName(this.id)'> # "+ room_names+" </div> <hr>";
document.getElementById("output").innerHTML += row;




      //End code
      });});}


getData();

function RedirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", name );
  window.location = "kwitter_page.html";


}


function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";

}