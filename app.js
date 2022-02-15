let url3 = 'https://api.documenu.com/v2/restaurants/state/HI?key=60301177efaa8635e35c293b98ac13a1'

url3 = 'data-hi.json'

let result = [];

const restaurantList = document.getElementById('restaurant-names');

fetch(url3)
        .then(response => response.json())
        .then(obj => filter(obj))
        .then(obj => render(obj))
        //.catch(error => renderError(error));

    function filter(obj) {
      return obj;
  
    } 

    function render(obj){
      result = obj.data
      listWithRestaurants();
    } 



// Shows all the restaurants from API

function listWithRestaurants() {

  restaurantList.innerHTML = result.map(element => `
<ul>
<div class="imagediv"></div>
  <li>
    <h2>${element.restaurant_name}</h2>
    <h3>${element.cuisines}</h3>
    <p><span class="iconify map" data-icon="bx:map"></span>
    ${element.address.street}</p>
    <p>${element.restaurant_phone}</p>
  </li>
</ul>`).join(' ');
}

// Shows all the render restaurants from API

function renderRestaurants(result){
  restaurantList.innerHTML = result.map(element => `
  <ul>
  <div class="imagediv"></div>
    <li>
      <h2>${element.restaurant_name}</h2>
      <h3>${element.cuisines}</h3>
      <p><span class="iconify map" data-icon="bx:map"></span>
      ${element.address.street}</p>
      <p>${element.restaurant_phone}</p>
    </li>
  </ul>`).join(' ');
}

// Function for filter and render choosen city and cuisine

  function filterAndRender(event){
  console.log("hej");

  let button = event.target.closest("button");
  let cuisine = button.firstElementChild.getAttribute("data-cuisine");
  console.log(button, cuisine);
  
  let filteredList = result.filter((restaurant) => {

    let matchCity = false;
    let matchCuisine = false;
  
    if(stateOpt.value === "all") {
      matchCity = true;
    } else {
      if(stateOpt.value === restaurant.address.city.toLowerCase()){
        matchCity = true;
      }
    }

    if(cuisine == undefined || cuisine == "" || cuisine === "all"){
      matchCuisine = true;
    } 

    restaurant.cuisines.forEach(str => {
      if(str.trim().toLowerCase() === cuisine.trim().toLowerCase()) {
        matchCuisine = true;
      }
    });

    return matchCity && matchCuisine;
  })

  renderRestaurants(filteredList);
} 


// Functions for "Choose city"

function chooseCityHonolulu() {
  const chooseCity = result.filter(
    (element) => element.address.city.includes("Honolulu" && "HONOLULU"));
    console.log(chooseCity);
    renderRestaurants(chooseCity);
}

function chooseCityHilo(){
  const chooseCityHilo = result.filter(
    (element) => element.address.city.includes("Hilo" && "HILO"));
    console.log(chooseCityHilo);
    renderRestaurants(chooseCityHilo);
}

function chooseCityHickam(){
  const chooseCityHickam = result.filter(
    (element) => element.address.city.includes("Hickam Village" && "Hickam AFB"));
    console.log(chooseCityHickam);
    renderRestaurants(chooseCityHickam);
}

function chooseCityHanalei(){
  const chooseCityHanalei = result.filter(
    (element) => element.address.city.includes("Hanalei"));
    
    console.log(chooseCityHanalei);
    renderRestaurants(chooseCityHanalei);
}

function chooseCityHolualoa(){
  const chooseCityHolualoa = result.filter(
    (element) => element.address.city.includes("Holualoa"));
    
    console.log(chooseCityHolualoa);
    renderRestaurants(chooseCityHolualoa);
}

function chooseCityHaleiwa(){
  const chooseCityHaleiwa = result.filter(
    (element) => element.address.city.includes("Haleiwa"));
    
    console.log(chooseCityHaleiwa);
    renderRestaurants(chooseCityHaleiwa);
}


// Eventlisteners for the "cuisines buttons"

// Burgers
let buttonOne = document.getElementById("b-one");
buttonOne.addEventListener("click", filterAndRender);

// Pizza
const buttonTwo = document.getElementById("b-two");
buttonTwo.addEventListener("click", filterAndRender);

// Chinese
const buttonThree = document.getElementById("b-three");
buttonThree.addEventListener("click", filterAndRender);

// Coffee & Tea
const buttonFour = document.getElementById("b-four");
buttonFour.addEventListener("click", filterAndRender);

// Ice cream
const buttonFive = document.getElementById("b-five");
buttonFive.addEventListener("click", filterAndRender);

// Drinks
const buttonSix = document.getElementById("b-six");
buttonSix.addEventListener("click", filterAndRender);

// Sandwiches
const buttonSeven = document.getElementById("b-seven");
buttonSeven.addEventListener("click", filterAndRender);

// Barbecue
const buttonEigth = document.getElementById("b-eigth");
buttonEigth.addEventListener("click", filterAndRender);


// Function for dropdown: Choose city

let stateOpt = document.getElementById("states");
stateOpt.addEventListener("change", dropdownCity);

function dropdownCity(){

  if(stateOpt.value === "hilo") {
    console.log("Hilo");

    chooseCityHilo();

  } else if(stateOpt.value === "honolulu") {
    console.log("Honolulu");

    chooseCityHonolulu();

  } else if(stateOpt.value === "hickamvillage") {
    console.log("Hickam Village");

    chooseCityHickam();

  } else if(stateOpt.value === "hanalei") {
    console.log("Hanalei")

    chooseCityHanalei();

    } else if(stateOpt.value === "holualoa") {
      console.log("Holuola");
      
      chooseCityHolualoa();

    } else if(stateOpt.value === "haleiwa") {
      console.log("Haleiwa");

      chooseCityHaleiwa();
    } else {
    listWithRestaurants();
    console.log("fel");
  }
      }

     
     function getImage (element) {
        if(element.cuisines === "Burgers"){
          let image = document.getElementById("pic");
          image.setAttribute("class", "imagediv");
    
        }
      }