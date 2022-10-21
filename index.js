"use strict";

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

//contact form validation

const contactForm = document.querySelector(".contact__form");
const contactInput = document.querySelector(".contact__input");
const contactMessage = document.querySelector(".contact__message");

const validation = () => {
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let inputValue = contactInput.value;
    if(!pattern.test(inputValue)) {
        contactMessage.classList.add("invalid");
        contactMessage.classList.remove("valid");
        contactMessage.innerHTML = "Email address is not valid";
    }

    else {
        contactMessage.classList.remove("invalid");
        contactMessage.classList.add("valid");
        contactMessage.innerHTML = "Your email has been sent. Thanks for contacting!";
        clearInput();
    }

    if(inputValue == "") {
        contactMessage.innerHTML = "Email field cannot be empty";
    }
};

contactForm.addEventListener("submit", element => {
    element.preventDefault();
    validation();
});

contactInput.addEventListener("focus", () => {
    contactMessage.innerHTML = "";
});

const clearInput = () => {
    contactInput.value = "";
};