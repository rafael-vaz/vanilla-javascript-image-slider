window.onload = function(){

const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");

//Buttons
const nextBtn = document.querySelector("#nextBtn");
const prevBtn = document.querySelector("#prevBtn");

//Counter

let counter = 1;

const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = "translateX(" + -size * counter + "px)";

//Buttons Listeners

nextBtn.addEventListener("click", () => {
  carouselSlide.style.transition = "transform 0.4 ease-in-out";
  counter++;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";

  if (carouselImages[counter].id === "lastClone") {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - 2;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }

  if (carouselImages[counter].id === "firstClone") {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - counter;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }
});

prevBtn.addEventListener("click", () => {
  carouselSlide.style.transition = "transform 0.4 ease-in-out";
  counter--;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";

  if (carouselImages[counter].id === "lastClone") {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - 2;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }

  if (carouselImages[counter].id === "firstClone") {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - counter;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }
});

}