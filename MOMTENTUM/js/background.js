/* const images = ["1.jpeg","2.jpeg","3.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// //html에 적용시킬 수 없기 때문에 img작업
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
document.body.appendChild(bgImage); */


const body = document.querySelector("body");
const IMG_NUMBER=6;

function getNumber(){
    return Math.ceil(Math.random()* IMG_NUMBER);
}

// make random number
function init() {
    const randomNumber = getNumber();
    showImage(randomNumber);
}

// load image
function showImage(imgNumber) {
    const img = new Image();
    img.src = `img/${imgNumber}.jpeg`;
    img.classList.add("bgImg");
    body.prepend(img);
}

init();
// 1) 가독성 측면 2) 전역객체를 보호 3)초기화

