//header mobile menu animation

const buttonMenu = document.getElementById("buttonMenu");
const headerNav = document.getElementById("headerNav");

buttonMenu.addEventListener("click", element => {
    buttonMenu.classList.toggle("active");
    headerNav.classList.toggle("active");
});

//banner background slider 

const sliderButton = document.querySelectorAll(".banner__slider-button");
const sliderImg = document.querySelectorAll(".background__img");

var currentSlide;

const sliderNav = function(element) {
    sliderImg.forEach((sliderImg) => {
        sliderImg.classList.remove("current");

        sliderButton.forEach((sliderButton) => {
            sliderButton.classList.remove("active");
        });
    });

    sliderButton[element].classList.add("current");
    sliderImg[element].classList.add("current");
};

sliderButton.forEach((sliderButton, i) => {
    sliderButton.addEventListener('click', () => {
        sliderNav(i);
        currentSlide = i;
    });
});

//categories button animation 

const categoriesButton = document.querySelectorAll(".section__button-container");
const sectionParagraph = document.querySelectorAll(".section__paragraph");

categoriesButton.forEach((categoriesButton, i) => {
    categoriesButton.addEventListener('click', () => {
        categoriesButton.classList.toggle("active");
        sectionParagraph[i].classList.toggle("active");
    });
});