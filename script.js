document.querySelector(".menu").addEventListener("touchstart", menu);


function menu() {
  document.querySelector(".test").style.display = "block";
  document.querySelector(".menu").style.display = "none";
  
}
var slider = document.getElementById("myRange");
var output = document.getElementById("rangePrice");


output.innerHTML = "от " + slider.value + " до ";
slider.oninput = function () {
  output.innerHTML = "от " + this.value + " до ";
};
document.querySelector(".up").addEventListener("touchstart", up);

function up() {

  document.querySelector(".test").style.display = "none";
  document.querySelector(".menu").style.display = "block";
}