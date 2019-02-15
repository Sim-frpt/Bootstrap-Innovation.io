
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap'
import team from "/_shared/img/Team/*.jpeg"
import logos from "/_shared/img/*.png"
import logos2 from "/_shared/img/*.jpg"
import reflexion from "/_shared/img/Reflexion.jpg"
import joy from "/_shared/img/Joy.jpg"
import climber from "/_shared/img/Climber.jpg"
import jamal from "/_shared/img/Jamal.png"



let submit = document.querySelector("#submitButton");

submit.addEventListener("click", function() {
  document.querySelector("#inputEmail").value = "";
  document.querySelector("#MessageField").value = "";
});
