//trends product data obtaining 

const requestURL = "https://github.com/Baheryan/shady-rhymes/blob/main/package.json";
const request = new XMLHttpRequest();

request.open("GET", requestURL);
request.responseType = "json";
request.send();

var response = request.response;

request.onload = () => {
    pullData(response);
};


const pullData = () => {
    const productName = document.querySelector(".product__name").textContent;
    productName.textContent = response[0]["name"];
};