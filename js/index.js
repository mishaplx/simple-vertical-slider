// const up = document.getElementById("up");
// const right = document.querySelector(".right");
// const left = document.querySelector(".left");
// const down = document.getElementById("down");
// const html = document.querySelector(".container");
// //////////////
// let counter = 0;

// up.addEventListener("click", upFun);

// down.addEventListener("click", downFun);

// function upFun() {
//   const objImages = [
//     {
//       id: 0,
//       images: `url(../images/img${countupImg()}.jpg)`,
//       background: `#${(Math.random().toString(16) + '000000').substring(2,8).toUpperCase()}`,
//     },
//   ];
//   function countupImg() {
//     counter++;
//     if (counter === 5) {
//       counter = 0;
//       return counter;
//     }
//     return counter;
//   }
//   right.classList.add = 'show'
//   right.style.background = objImages[0].images;
//   left.style.background = objImages[0].background;
// }

// function downFun() {
//   const objImages = [
//     {
//       id: 0,
//       images: `url(../images/img${countdownImg()}.jpg)`,
//       background: `#${(Math.random().toString(16) + '000000').substring(2,8).toUpperCase()}`,
//     },
//   ];
//   function countdownImg() {
//     counter--;
//     if (counter === -1) {
//       counter = 4;
//       return counter;
//     }
//     return counter;
//   }
//   right.style.background = objImages[0].images;
//   left.style.background = objImages[0].background;
// }
// //////////////




const downBtn = document.querySelector(".down-button");
const upBtn = document.querySelector(".up-button");
const sidebar = document.querySelector(".sidebar");
const mainSlider = document.querySelector(".main-slider");
const slideCount = mainSlider.querySelectorAll("div").length;
const container = document.querySelector(".container");

let activeSlideIndex = 0;
sidebar.style.top = `-${(slideCount - 1) * 100}vh`
function changeSlide(direction) {
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex === slideCount) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slideCount - 1;
    }
  }
  const height = container.clientHeight
  mainSlider.style.transform = `translateY(-${activeSlideIndex * height}px)`;
  sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}

upBtn.addEventListener("click", () => {
  changeSlide("up");
});
downBtn.addEventListener("click", () => {
  changeSlide("down");
});
document.addEventListener("keydown", (event) => {
  if (event.code == "ArrowUp" || "PageUp") {
    changeSlide("up");
  } else if (event.code == "ArrowDown" || "PageDown") {
    changeSlide("down");
  }
});
document.body.addEventListener("mousewheel", (e) => {
  e = e || window.event;
  var delta = e.deltaY || e.detail || e.wheelDelta;
  if (delta > 0) {
    changeSlide("up");
  } else if (delta < 0) {
    changeSlide("down");
  }
});