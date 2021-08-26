

Usernamet = localStorage.getItem("teachname");
document.getElementById("usernamet").innerHTML = "Welcome " + Usernamet;







function Logoutid(){
    localStorage.removeItem("teachname");
  localStorage.removeItem("tpass");
  window.location.replace("Learning.html");
 }
  