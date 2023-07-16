const box = document.querySelector(".password-box")

var results = document.querySelectorAll(".lol");
let created = false;

function generatePass(){
   var PossibleChar = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
   var pass = "";

   for(var i = 0; i < 16; i++){
      var RandIndex = Math.floor(Math.random() * PossibleChar.length);
      pass += PossibleChar.charAt(RandIndex);
   }
   document.querySelector(".pass-results").textContent = pass;
   
}
document.getElementById("button").addEventListener("click", generatePass);