const slide = document.getElementById("slider");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");

btn1.onclick = function () {
  slide.style.transform = "translateX(0px)";
  btn1.classList.add("active");
  btn2.classList.remove("active");
  btn3.classList.remove("active");
  btn4.classList.remove("active");
};
btn2.onclick = function () {
  slide.style.transform = "translateX(-100%)";
  btn1.classList.remove("active");
  btn2.classList.add("active");
  btn3.classList.remove("active");
  btn4.classList.remove("active");
};
btn3.onclick = function () {
  slide.style.transform = "translateX(-200%)";
  btn1.classList.remove("active");
  btn2.classList.remove("active");
  btn3.classList.add("active");
  btn4.classList.remove("active");
};
btn4.onclick = function () {
  slide.style.transform = "translateX(-300%)";
  btn1.classList.remove("active");
  btn2.classList.remove("active");
  btn3.classList.remove("active");
  btn4.classList.add("active");
};
