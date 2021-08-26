function teacherloginname(){
    teachername= document.getElementById("Usernamet").value;
    teacherpass= document.getElementById("Passt").value;
    console.log(teachername);
    localStorage.setItem("teachname", teachername);
    localStorage.setItem("tpass", teacherpass);
    window.location="learningmainpgt.html";

}