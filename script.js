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







let first_page = document.getElementById('fish');
let second_page = document.getElementById('fish2');


let startingX;

function touchStart(evt) {
  startingX = evt.touches[0].clientX;

}

function touchMove(evt) {
  let touch = evt.touches[0];
  let change = startingX - touch.clientX;
  if (change < 0) {
    return;
  }
  first_page.style.left = '-' + change + 'px';
  second_page.style.display = 'block';
  second_page.style.left = (screen.width - change) + 'px';
  if (evt.cancelable)
    evt.preventDefault();
}

function touchEnd(evt) {
  let change = startingX - evt.changedTouches[0].clientX;
  let threshold = screen.width / 3;
  if (change < threshold && evt.cancelable) {
    first_page.style.left = 0;
    second_page.style.left = '100%';
    second_page.style.display = 'none';
    evt.preventDefault();
  } else {
    first_page.style.transition = 'all .3s';
    second_page.style.transition = 'all .3s';
    first_page.style.left = '-100%';
    second_page.style.left = '0';
    second_page.style.display = 'block';
  }
}