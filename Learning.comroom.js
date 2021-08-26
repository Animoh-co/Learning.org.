
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAIZ7bAb8FR2EThGOxv6ULg9Jz73VppXZc",
  authDomain: "learningorg-68a83.firebaseapp.com",
  databaseURL: "https://learningorg-68a83-default-rtdb.firebaseio.com",
  projectId: "learningorg-68a83",
  storageBucket: "learningorg-68a83.appspot.com",
  messagingSenderId: "194879409444",
  appId: "1:194879409444:web:d3476f5bc6a0d5894877b1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);






Username = localStorage.getItem("Nameuser");
document.getElementById("welcomeuser").innerHTML = "Welcome " + Username;


function addroom(){
  roomname = document.getElementById("addrooms").value;
  firebase.database().ref("/").child(roomname).update({
    Purpose : "adding user"
  });

  localStorage.setItem("Room", roomname);
  window.location="Kwitter_Chat.html";
}


function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      //Start code
      
row = "<div class='room_name' id=" +Room_names+" onclick='redirecttoroom(this.id)'>" +Room_names+ "</div><hr>";
document.getElementById("output").innerHTML += row;


      //End code
    });
  });
}
getData();



function redirecttoroom(names){
  console.log(names);
localStorage.setItem("Room", names);

window.location="Kwitter_Chat.html";


}