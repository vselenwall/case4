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
let result = [];
//let resulttwo = {};

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
      //listWithRestaurants();
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
    <h3>${element.cuisines}</h3>
    <p>${element.hours}</p>
    <p>${element.address.street}</p>
  </li>
</ul>`).join(' ');

}


function renderRestaurants(result){
  restaurantList.innerHTML = result.map(element => `
  <ul>
  <div class="imagediv"></div>
    <li>
      <h2>${element.restaurant_name}</h2>
      <h3>${element.cuisines}</h3>
      <p>${element.hours}</p>
      <p>${element.address.street}</p>
    </li>
  </ul>`).join(' ');

}

/* let str = document.getElementsByTagName("p").innerHTML; 
let res = str.replace(/,/ , "test");
document.getElementsByTagName("p").innerHTML = res; */


// FILTER CUISINES
// Burgers

let buttonOne = document.getElementById("b-one");
buttonOne.addEventListener("click", filterAndRender);


 function filterCuisines(cuisine){

  const burgersCusisines = result.filter(
    (element) => element.cuisines.includes(cuisine));
  console.log(burgersCusisines);

  renderRestaurants(burgersCusisines);

} 

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

function burgersCuisines() {

  const burgersCusisines = result.filter(
    (element) => element.cuisines.includes("Burgers"));
  console.log(burgersCusisines);

  renderRestaurants(burgersCusisines);

};

// American

const buttonTwo = document.getElementById("b-two");
buttonTwo.addEventListener("click", filterAndRender);


/* document.addEventListener("keydown", e => {
  if(e.key == "g"){
    filterAndRender("Burgers");
  }
}) */

function pizzaCusisines() {
  const pizzaCusisines = result.filter(
    (element) => element.cuisines.includes("Pizza"));
  console.log(pizzaCusisines);
  renderRestaurants(pizzaCusisines);

};

// Pizza

const buttonThree = document.getElementById("b-three");
buttonThree.addEventListener("click", filterAndRender);

function chineseCusisines() {
  const chineseCusisines = result.filter(
    (element) => element.cuisines.includes("Chinese"));
  console.log(chineseCusisines);

  renderRestaurants(chineseCusisines);
};

// Sushi

const buttonFour = document.getElementById("b-four");
buttonFour.addEventListener("click", filterAndRender);

function coffeeCusisines() {
  const coffeeCusisines = result.filter(
    (element) => element.cuisines.includes("Coffee & Tea"));
  console.log(coffeeCusisines);
  renderRestaurants(coffeeCusisines);

};

const buttonFive = document.getElementById("b-five");
buttonFive.addEventListener("click", filterAndRender);

function icecreamCusisines() {
  const icecreamCusisines = result.filter(
    (element) => element.cuisines.includes("Ice cream"));
  console.log(icecreamCusisines);
  renderRestaurants(icecreamCusisines);

};

const buttonSix = document.getElementById("b-six");
buttonSix.addEventListener("click", filterAndRender);

function drinksCusisines() {
  const drinksCusisines = result.filter(
    (element) => element.cuisines.includes("Drinks"));
  console.log(drinksCusisines);
  renderRestaurants(drinksCusisines);

};

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
  const chooseCityHilo = result.filter(
    (element) => element.address.city.includes("Hilo" && "HILO"));
    console.log(chooseCityHilo);
    renderRestaurants(chooseCityHilo);

}

/* const cityHickam = document.getElementById("hickam");
cityHickam.addEventListener("click", chooseCityHickam); */

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

// FILTER ON CITY

/*
const test = document.getElementById("test");
test.addEventListener("click", filteredArray);

function cityFilter(){
  chooseCityHonolulu(pizzaCusisines());
}

function filteredArray() {
var filteredArray  = chooseCityHonolulu.filter(
  (element) => element(pizzaCusisines));
  console.log(filteredArray);
  renderRestaurants(filteredArray);
} */


//document.getElementById("mySelect").selectedIndex = "2";
//var select = document.getElementById('language'); 
let stateOpt = document.getElementById("states");
stateOpt.addEventListener("change", dropdownCity);
//var value = stateOpt.options[stateOpt.selectedIndex].value;
//console.log(value);

/*
function cityHiloBurger () {
    if(foodFilter.className === "hilo") {
      console.log("It works")
    }
  } */

  /*
  let showBurger = document.getElementById("b-one");
  showBurger.addEventListener("click", () => {
    let asArray = result.filter((ele) => ele.city.address === "Hilo");
    console.log(asArray);
  }) */

function dropdownCity(){

  if(stateOpt.value === "hilo") {
    console.log("Hilo");

   /*  let foodFilter = document.getElementById("restaurant-names");
    foodFilter.setAttribute("class", "hilo"); */

    chooseCityHilo();
  
    /* let showBurger = document.getElementById("b-one");
    showBurger.addEventListener("click", () => {
      if(foodFilter.className === "hilo") {

        let burgerHilo = result.filter(
          (element) => element.cuisines.includes("Burgers"));
          result = burgerHilo;
      }
    }) */


  // HONOLULU FILTER BY CUISINES

  } else if(stateOpt.value === "honolulu") {
    console.log("Honolulu");

  /*   let foodFilter = document.getElementById("restaurant-names");
    foodFilter.setAttribute("class", "honolulu"); */

    chooseCityHonolulu();


  } else if(stateOpt.value === "hickamvillage") {
    console.log("Hickam Village");

    chooseCityHickam();

  } else if(stateOpt.value === "hanalei") {
    console.log("Hanalei")

    chooseCityHanalei();

    }else {
    listWithRestaurants();
    console.log("fel");
  }
      }



       switch (result.element) {
        
        case cuisines = "Burgers":

        //imagediv.setAttribute("class", "imagediv")
        //let div = document.getElementsByTagName("div").setAttribute("class", "imagediv");
        let div = document.getElementById("pic");
        div.setAttribute("class", "imagediv");
          
          break;
    
      } 
     


      //block.setAttribute("style", "text-align:center");
     
     
     function getImage (element) {
        if(element.cuisines === "Burgers"){
          let image = document.getElementById("pic");
          image.setAttribute("class", "imagediv");
    
        }
      }

      

     /*  array.forEach(element => {
          element.cuisines.includes("Burgers");
          let image = document.getElementById("pic");
          image.setAttribute("class", "imagediv");
      }); */

      /*
      // ADD PICTURES

      switch (element) {
        case element.cuisines === "Burgers"
        ul.setAttribute("class");
          
          break;
      
        default:
          break;
      }*/