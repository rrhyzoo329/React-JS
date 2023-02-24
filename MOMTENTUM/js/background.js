/* const images = ["1.jpeg","2.jpeg","3.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// //html에 적용시킬 수 없기 때문에 img작업
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
document.body.appendChild(bgImage); */


// const body = document.querySelector("#images");
// const IMG_NUMBER=6;

// function getNumber(){
//     return Math.ceil(Math.random()* IMG_NUMBER);
// }

// // make random number
// function init() {
//     const randomNumber = getNumber();
//     showImage(randomNumber);
// }

// // load image
// function showImage(imgNumber) {
//     const img = new Image();
//     img.src = `img/${imgNumber}.jpeg`;
//     img.classList.add("bgImg");
//     body.prepend(img);
// }

// init();
// init : 1) 가독성 측면 2) 전역객체를 보호 3)초기화


const opensettingButton = document.querySelector("#settingButton")
const settingScreen = document.querySelector("#list-wrapper")

opensettingButton.addEventListener("click", function() {
  settingScreen.classList.toggle("hidden")
});


const images = [
    "1.jpeg","2.jpeg","3.jpeg"
  ];
  const changeBtn = document.querySelector(".changeBgBtn");
  const backgroundImg = document.querySelector("body");
  
  function changeBg() {
    const chosenImage = images[Math.floor(Math.random() * images.length)];
    backgroundImg.style.width = "100vw";
    backgroundImg.style.height = "100vh";
    backgroundImg.style.background = `url(./img/${chosenImage}) no-repeat center / cover`;
  }
  
  changeBg();
  changeBtn.addEventListener("click", changeBg);


// "use strick";

// const darkModeBtn = document.querySelector(".changeMode");
// let darkMode = localStorage.getItem("darkMode");

// const DARK_MODE = "darkMode";












// const modeSwitch = document.querySelector(".switch");
// const light = modeSwitch.querySelector("#nightOff");
// const night = modeSwitch.querySelector("#nightOn");
// const modeChk = modeSwitch.querySelector("#switch");

// let mode;
// const DARKMODE = {
//   theme: 'dark'
// };
// const LIGHTMODE = {
//   theme: 'light'
// };
// const SHOW = 'show';

// // 현재 시간으로 렌더링
// const hours = new Date().getHours();
// hours > 5 && hours < 18 ? mode = LIGHTMODE.theme : mode = DARKMODE.theme;

// function renderNightAndDay(mode){
//   document.documentElement.setAttribute('color-theme', mode);
//   mode == DARKMODE.theme ? modeChk.checked = true : modeChk.checked = false;
// }
  
// renderNightAndDay(mode);

// modeChk.addEventListener('change', (e) => {
//   const checkedYn = e.target.checked;
//   if(checkedYn) mode = DARKMODE.theme;
//   else mode = LIGHTMODE.theme;
//   renderNightAndDay(mode)
// });