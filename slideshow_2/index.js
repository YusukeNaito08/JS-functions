const images = ["./img/2.jpg", "./img/3.jpg", "./img/4.jpg"];
const target = document.getElementById("slide");
const right = document.getElementById("right");
const left = document.getElementById("left");

let count = 0;
function change() {
  target.style.backgroundImage = images[count];

  function goNext() {
    if (count == 2) {
      count = 0;
    } else {
      count++;
    }
    change();
  }
  function goBack() {
    if (count == 0) {
      count = 2;
    } else {
      count--;
    }
    change();
  }
  right.addEventListener("click", goNext, false);
  left.addEventListener("click", goBack, false);
}
