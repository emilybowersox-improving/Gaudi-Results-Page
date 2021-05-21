const imageArray = ["imgs/1.jpg", "imgs/2.jpg", "imgs/3.jpg", "imgs/4.jpg", "imgs/5.jpg", "imgs/6.jpg", "imgs/7.jpg"];

const images = document.querySelector('#images');




for (i=0; i < imageArray.length; i++) {
    const newImage = document.createElement('img');
    newImage.src = imageArray[i]; 
    images.appendChild(newImage);
}   




