let url = 'https://api.documenu.com/v2/restaurants/state/NY?key=60301177efaa8635e35c293b98ac13a1'
let url2 = 'https://api.documenu.com/v2/restaurants/state/FL?key=60301177efaa8635e35c293b98ac13a1'
let url3 = 'https://api.documenu.com/v2/restaurants/state/HI?key=60301177efaa8635e35c293b98ac13a1'
let url4 = 'https://api.documenu.com/v2/restaurants/state/CA?key=60301177efaa8635e35c293b98ac13a1'
let url5 = 'https://api.documenu.com/v2/restaurants/state/WA?key=60301177efaa8635e35c293b98ac13a1'

//console.log(url5);

url = 'data.json'
url2 = 'data-fl.json'
url3 = 'data-hi.json'
url4 = 'data-ca.json'
url5 = 'data-wa.json'

//let restaurantNames = []
//const objects = obj.data
//let dataArray = []
let result = {};
let resulttwo = {};

const restaurantList = document.getElementById('restaurant-names');


/* fetch(url3)
        .then(response => response.json())
        .then(object => filter(object))
        .then(object => render(object))
        //.catch(error => renderError(error));

    function render(object){
      resulttwo = object.data
      listWithRestaurants();
      console.log(resulttwo);
    }

    function filter(object) {
      return object;
    } */


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

 


/* fetch(url)
  .then(function (response) {
    console.log(response);
    return response.json();

  }).then(function (obj) {

    result = obj.data
    //const objects = obj.data
    //console.log(result);

    // LIST WITH RESTURANTS

    listWithRestaurants();


  }).catch(function (error) {

  }).finally(function () {

  });
 */

function listWithRestaurants() {
  //result = obj.data
  restaurantList.innerHTML = result.map(element => `
<ul>
<div class="imagediv"></div>
  <li>
    <h2>${element.restaurant_name}</h2>
    <p>${element.cuisines}</p>
    <p>${element.hours}</p>
  </li>
</ul>`).join('');
}

function renderRestaurants(result){
  restaurantList.innerHTML = result.map(element => `
  <ul>
  <div class="imagediv"></div>
    <li>
      <h2>${element.restaurant_name}</h2>
      <p>${element.cuisines}</p>
      <p>${element.hours}</p>
    </li>
  </ul>`).join('');

}



// FILTER CUISINES
// Burgers

const buttonOne = document.getElementById("b-one");
buttonOne.addEventListener("click", burgersCuisines);

function burgersCuisines() {

  const burgersCusisines = result.filter(
    (element) => element.cuisines.includes("Burgers"));
  console.log(burgersCusisines);
  renderRestaurants(burgersCusisines);

};

// American

const buttonTwo = document.getElementById("b-two");
buttonTwo.addEventListener("click", pizzaCusisines);

function pizzaCusisines() {
  const pizzaCusisines = result.filter(
    (element) => element.cuisines.includes("Pizza"));
  console.log(pizzaCusisines);
  renderRestaurants(pizzaCusisines);

};

// Pizza

const buttonThree = document.getElementById("b-three");
buttonThree.addEventListener("click", chineseCusisines);

function chineseCusisines() {
  const chineseCusisines = result.filter(
    (element) => element.cuisines.includes("Chinese"));
  console.log(chineseCusisines);
  renderRestaurants(chineseCusisines);
};

// Sushi

const buttonFour = document.getElementById("b-four");
buttonFour.addEventListener("click", coffeeCusisines);

function coffeeCusisines() {
  const coffeeCusisines = result.filter(
    (element) => element.cuisines.includes("Coffee & Tea"));
  console.log(coffeeCusisines);
  renderRestaurants(coffeeCusisines);

};

const buttonFive = document.getElementById("b-five");
buttonFive.addEventListener("click", icecreamCusisines);

function icecreamCusisines() {
  const icecreamCusisines = result.filter(
    (element) => element.cuisines.includes("Ice cream"));
  console.log(icecreamCusisines);
  renderRestaurants(icecreamCusisines);

};

const buttonSix = document.getElementById("b-six");
buttonSix.addEventListener("click", drinksCusisines);

function drinksCusisines() {
  const drinksCusisines = result.filter(
    (element) => element.cuisines.includes("Drinks"));
  console.log(drinksCusisines);
  renderRestaurants(drinksCusisines);

};

// Places Nearby

/*
const restaurantsNearby = document.getElementById("search");
restaurantsNearby.addEventListener("click", geoLat);

function geoLat() {
  const geoLat = result.filter(
    (element) => element.geo.lat === 40.733691 && element.geo.lon === -73.992963);
  console.log(geoLat);
  restaurantList.innerHTML = geoLat.map(element => `
        <ul>
          <li>
            <h2>${element.restaurant_name}</h2>
            <p>${element.cuisines}</p>
            <p>${element.hours}</p>
          </li>
        </ul>`).join('');
}; */

/* const cityHonolulu = document.getElementById("honolulu");
cityHonolulu.addEventListener("click", chooseCityHonolulu); */

function chooseCityHonolulu() {
  const chooseCity = result.filter(
    (element) => element.address.city.includes("Honolulu" && "HONOLULU"));
    console.log(chooseCity);
    renderRestaurants(chooseCity);
}

/* const cityPicoRivera = document.getElementById("picorivera");
cityPicoRivera.addEventListener("click", chooseCityPico); */

function chooseCityHilo(){
  const chooseCityPico = result.filter(
    (element) => element.address.city.includes("Hilo" && "HILO"));
    console.log(chooseCityPico);
    renderRestaurants(chooseCityPico);
}

/* const cityHickam = document.getElementById("hickam");
cityHickam.addEventListener("click", chooseCityHickam); */

function chooseCityHickam(){
  const chooseCityHickam = result.filter(
    (element) => element.address.city.includes("Hickam Village" && "Hickam AFB"));
    console.log(chooseCityHickam);
    renderRestaurants(chooseCityHickam);
}



//document.getElementById("mySelect").selectedIndex = "2";
//var select = document.getElementById('language'); 
let stateOpt = document.getElementById("states");
stateOpt.addEventListener("change", dropdownCity);
//var value = stateOpt.options[stateOpt.selectedIndex].value;
//console.log(value);

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

  } else {
    listWithRestaurants();
    console.log("fel");
  }
      }


      //block.setAttribute("style", "text-align:center");
     
     
     /* function getImage (element) {
        if(element.cuisines === "Burgers"){
          imagediv.createElement("class")
        }
      }


      /*
      // ADD PICTURES

      switch (element) {
        case element.cuisines === "Burgers"
        ul.setAttribute("class");
          
          break;
      
        default:
          break;
      }*/