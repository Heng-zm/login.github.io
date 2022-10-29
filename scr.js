 function validate(){
     var password = document.getElementById('pass')
     var length = document.getElementById('length')
     if (password.value.length >=8) {
         alert("login succesfull");
         window.locatoin.replace("new.html");
         return false;
     }
     else{
         alert("login failed");
     }
 }