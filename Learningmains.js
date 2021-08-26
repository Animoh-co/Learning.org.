Usernames = localStorage.getItem("stdname");
document.getElementById("usernames").innerHTML = "Welcome " + Usernames;




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



  function chatclick(){
    window.location="Learningchat.html";
  }

  function Logoutid(){
    localStorage.removeItem("stdname");
  localStorage.removeItem("passstd");
  window.location.replace("Learning.html");
 }
  
  