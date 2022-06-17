// HAMBURGER BUTTON START

let elHeroBurger = document.querySelector(".header__menu-btn");
let elHeaderNav = document.querySelector(".header__nav");
let elRotate = document.querySelector(".header__menu-line");

elHeroBurger.addEventListener("click", () => {
  elHeaderNav.classList.toggle("heightControl");
  elRotate.classList.toggle("rotate-it");
});

// HAMBURGER BUTTON END
// FILTER OFFCANVAS BTN START

let elFilterBtn = document.querySelector(".category__filter-offcanvas-btn");
let elCategory = document.querySelector(".category");
let elBoxShadow = document.querySelector(".category__box-shadow");

elFilterBtn.addEventListener("click", () => {
  elCategory.classList.add("openFilter");
  elBoxShadow.classList.add("openBoxShadow");
});

elBoxShadow.addEventListener("click", () => {
  elCategory.classList.remove("openFilter");
  elBoxShadow.classList.remove("openBoxShadow");
})

// FILTER OFFCANVAS BTN END
// FILTER RANGE START

window.onload = function() {
  sliderOne();
  sliderTwo();
}

let elSliderOne = document.querySelector("#category__slider-one");
let elSliderTwo = document.querySelector("#category__slider-two");
let valOne = document.querySelector(".val-one");
let valTwo = document.querySelector(".val-two");
let minGap = 0;
let sliderTrack = document.querySelector(".category__slider-track");
let sliderMaxValue = document.querySelector("#category__slider-one").max;

function sliderOne() {
  if(+(elSliderTwo.value) - +(elSliderOne.value) <= minGap){
    elSliderOne.value = +(elSliderTwo.value) - minGap;
  }
  valOne.textContent = elSliderOne.value;
  fillColor();
}

function sliderTwo() {
  if(+(elSliderTwo.value) - +(elSliderOne.value) <= minGap){
    elSliderTwo.value = +(elSliderOne.value) + minGap;
  }
  valTwo.textContent = elSliderTwo.value;
  fillColor();
}

function fillColor() {
  percent1 = (elSliderOne.value / sliderMaxValue) * 100;
  percent2 = (elSliderTwo.value / sliderMaxValue) * 100;
  sliderTrack.style.background = `linear-gradient(to right, rgba(70, 163, 88, 0.2) ${percent1}%, #46a358 ${percent1}%, #46a358 ${percent2}%, rgba(70, 163, 88, 0.2) ${percent2}%)`
}