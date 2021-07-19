const slides = document.querySelectorAll("slide");
// const btn1 = document.getElementById("btn1");
// const btn2 = document.getElementById("btn2");
// const btn3 = document.getElementById("btn3");
// const btn4 = document.getElementById("btn4");

// btn1.onclick = function () {
//   slide.style.transform = "translateX(0px)";
// };
// btn2.onclick = function () {
//   slide.style.transform = "translateX(-100%)";

//   btn3.onclick = function () {
//     slide.style.transform = "translateX(-200%)";
//   };
//   btn4.onclick = function () {
//     slide.style.transform = "translateX(-300%)";
//   };

var btns = document.querySelectorAll("#btn");

var navs = function (nav) {
  slides.forEach((slide) => {
    slide.classList.remove("active");
    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
  });
  btns[nav].classList.add("active");
  slides[nav].classList.add("active");
};

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    navs(i);
  });
});
