//header mobile menu animation

const buttonMenu = document.getElementById("buttonMenu");
const headerNav = document.getElementById("headerNav");

buttonMenu.addEventListener("click", element => {
    buttonMenu.classList.toggle("active");
    headerNav.classList.toggle("active");
});
