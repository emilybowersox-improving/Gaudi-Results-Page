const imageArray = ["imgs/1.jpg", "imgs/2.jpg", "imgs/3.jpg", "imgs/4.jpg", "imgs/5.jpg", "imgs/6.jpg", "imgs/7.jpg"];

const images = document.querySelector('#images');

for (i=0; i < 100; i++) {
    const random = Math.floor(Math.random() * imageArray.length); 
    const newImage = document.createElement('img');
    newImage.src = imageArray[random]; 
    images.appendChild(newImage);
    console.log(random);
}   




// //hiding container 
//https://css-tricks.com/comparing-various-ways-to-hide-things-in-css/
// ^ Method 1 

// const button = document.querySelectorAll("button");
// button.forEach((button) =>
//   button.addEventListener("click", () => alert("You clicked a button"))
// );

// // Demo only

// const checkbox = document.getElementById("toggle");
const hiddenDiv = document.getElementById("hide");

// checkbox.addEventListener("change", (e) => {
//   hiddenButton.classList.toggle("hidden");
// });
