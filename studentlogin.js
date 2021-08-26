function studentloginname(){
    studentname= document.getElementById("Username").value;
    studentpass= document.getElementById("pass").value;
    console.log(studentname);
    localStorage.setItem("stdname", studentname);
    localStorage.setItem("passstd", studentpass);
    window.location="learningmainpgs.html";
}