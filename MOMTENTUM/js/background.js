const images = ["1.jpeg","2.jpeg","3.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// //html에 적용시킬 수 없기 때문에 img작업
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
document.body.appendChild(bgImage);



// const IMAGE_LENGTH = 6;
// const images = [];

// for (let i = 0; i < IMAGE_LENGTH; i++) {
//   images.push(`${i}.jpeg`);
// }

// const chosenImage = images[Math.floor(Math.random() * images.length)];

// document.body.style.backgroundImage = `url(img/${chosenImage})`;