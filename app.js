let url = 'https://api.documenu.com/v2/restaurants/state/NY?key=60301177efaa8635e35c293b98ac13a1'
let url2 = 'https://api.documenu.com/v2/restaurants/state/FL?key=60301177efaa8635e35c293b98ac13a1'

//console.log(url2);

url = 'data.json'
url2 = 'data2.json'
//let restaurantNames = []
//const objects = obj.data
//let dataArray = []
let result = {};

const restaurantList = document.getElementById('restaurant-names');

fetch(url)
  .then(function (response) {
    console.log(response);
    return response.json();

  }).then(function (obj) {

    result = obj.data
    //const objects = obj.data
    //console.log(result);

    /*// GET ARRAY OF NAME AND CUISINES
    const restaurantObj = objects.map((element) => ({
      name: element.restaurant_name,
      cuisines: element.cuisines,
      hours: element.hours
    }));
    console.log(restaurantObj); */

    // LIST WITH RESTURANTS
  
    listWithRestaurants();
    

  }).catch(function (error) {

  }).finally(function () {

  });

  function listWithRestaurants() {
    //result = obj.data
    restaurantList.innerHTML = result.map(element => `
<ul>
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
    
    function burgersCuisines(){
  
      const burgersCusisines = result.filter(
        (element) => element.cuisines.includes("Burgers"));
        console.log(burgersCusisines); 

       restaurantList.innerHTML = burgersCusisines.map(element =>`
        <ul>
          <li>
            <h2>${element.restaurant_name}</h2>
            <p>${element.cuisines}</p>
            <p>${element.hours}</p>
          </li>
        </ul>`).join('');
    }; 

    // American

    const buttonTwo = document.getElementById("b-two");
    buttonTwo.addEventListener("click", pizzaCusisines);
  
    function pizzaCusisines() {
      const pizzaCusisines = result.filter(
        (element) => element.cuisines.includes("Pizza"));
        console.log(pizzaCusisines); 
       restaurantList.innerHTML = pizzaCusisines.map(element =>`
        <ul>
          <li>
            <h2>${element.restaurant_name}</h2>
            <p>${element.cuisines}</p>
            <p>${element.hours}</p>
          </li>
        </ul>`).join(''); 
    }; 

    // Pizza

    const buttonThree = document.getElementById("b-three");
    buttonThree.addEventListener("click", chineseCusisines);
  
    function chineseCusisines() {
      const chineseCusisines = result.filter(
        (element) => element.cuisines.includes("Chinese"));
        console.log(chineseCusisines); 
       restaurantList.innerHTML = chineseCusisines.map(element =>`
        <ul>
          <li>
            <h2>${element.restaurant_name}</h2>
            <p>${element.cuisines}</p>
            <p>${element.hours}</p>
          </li>
        </ul>`).join(''); 
    }; 

    // Sushi

    const buttonFour = document.getElementById("b-four");
    buttonFour.addEventListener("click", sushiCusisines);
  
    function sushiCusisines() {
      const sushiCusisines = result.filter(
        (element) => element.cuisines.includes("Sushi"));
        console.log(sushiCusisines); 
        
        restaurantList.innerHTML = sushiCusisines.map(element =>`
        <ul>
          <li>
            <h2>${element.restaurant_name}</h2>
            <p>${element.cuisines}</p>
            <p>${element.hours}</p>
          </li>
        </ul>`).join(''); 
    }; 


    // Places Nearby

    const restaurantsNearby = document.getElementById("search");
    restaurantsNearby.addEventListener("click", geoLat);
  
    function geoLat() {
      const geoLat = result.filter(
        (element) => element.geo.lat === 40.733691 && element.geo.lon === -73.992963);
        console.log(geoLat); 
       restaurantList.innerHTML = geoLat.map(element =>`
        <ul>
          <li>
            <h2>${element.restaurant_name}</h2>
            <p>${element.cuisines}</p>
            <p>${element.hours}</p>
          </li>
        </ul>`).join(''); 
    }; 