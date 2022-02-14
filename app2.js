let url = 'https://api.documenu.com/v2/restaurants/state/NY?key=60301177efaa8635e35c293b98ac13a1'

//console.log(url);

url = 'data.json'
//let restaurantNames = []

let dataArray = []
const restaurantList = document.getElementById('restaurant-names');

fetch(url)
  .then(function (response) {
    console.log(response);
    return response.json();

  }).then(function (obj) {

    //const objects = obj.data

    //let restaurantList = document.getElementById("restaurant-names");
    const objects = obj.data

    // GET ARRAY OF ALL RESTAURANT NAMES
    const names = objects.map((element) => element.restaurant_name);
    console.log(names);

    // GET ARRAY OF ALL RESTAURANT COUISINES
    const cuisines = objects.map((element) => element.cuisines);
    console.log(cuisines);

    // GET ARRAY OF NAME AND CUISINES
    const restaurantObj = objects.map((element) => ({
      name: element.restaurant_name,
      cuisines: element.cuisines,
      hours: element.hours
    }));
    console.log(restaurantObj);

        // FILTER ON CUISINES: CHINESE
    

    // LIST WITH RESTURANTS

    restaurantList.innerHTML = objects.map(element => `
    <ul>
      <li>
        <h2>${element.restaurant_name}</h2>
        <p>${element.cuisines}</p>
        <p>${element.hours}</p>
      </li>
    </ul>`).join('');

    const button = document.querySelector("button");
    button.addEventListener("click", () => {
  
      const pizzaCusisines = objects.filter(
        (element) => element.cuisines == "Chinese");
        console.log(pizzaCusisines);
        restaurantList.innerHTML = pizzaCusisines.map(element =>`
        <ul>
          <li>
            <h2>${element.restaurant_name}</h2>
            <p>${element.cuisines}</p>
            <p>${element.hours}</p>
          </li>
        </ul>`).join('');
    });


    //var el = document.getElementById('restaurant-names');
    /* var arr = obj.data
      
    var newArr = arr.map(function(element){
        return {element};
    })
      
    console.log(newArr)
      
    el.innerText = JSON.stringify(newArr); */

    /*
    const filterFunc3 = (element) => {return element.restaurant_name == "Strip House"};
 
    const filteredNumbers2 = objects.filter(filterFunc3);
 
    console.log(filteredNumbers2) 

    el.textContent = (filteredNumbers2);

    document.getElementById("restaurant-names").innerText = Object.values(filteredNumbers2);
    
    */

    // create an array with all the data from json-file
    //result = obj.data
    //dataArray.push(result);
    //console.log(result);

    /*
    // create a list for the liteitems
      obj.data.forEach(element => {

      let restaurantList = document.getElementById("restaurant-names")
      let listItems = document.createElement("li");
      listItems.className = "restaurantCard";
      listItems.dataset.restaurantName = element.restaurant_name;
      //listItems.dataset.foodOptions = element.cuisines;

      // create listitems and conntect to the list
      listItems.appendChild(document.createTextNode(element.restaurant_name));
      listItems.appendChild(document.createTextNode(element.cuisines));
      listItems.appendChild(document.createTextNode(element.hours));

      restaurantList.appendChild(listItems); 
    }); */

    /*console.log(obj);
    console.log(obj.data);

    result = obj.data;

    result.forEach((obj) => {
      let cuisines = "";
      obj.cuisines.forEach((str) => {
        cuisines += `${str},`;
        console.log()
      })
      let restaurantCard = `<div class = "restaurantcard" data-name="${obj.restaurant_name}"><h2>${obj.restaurant_name}</h2>
    <h4>${obj.restaurant_phone}</h4>
    </div>`;
      restaurantList.innerHTML = restaurantCard;
    }) */

    //}).then (obj => render(obj))

  }).catch(function (error) {

  }).finally(function () {

  });



 



/*
let filteredArray = dataArray.filter((obj) => {
  return (restaurant_name == "Ho Lee")
});


console.log(button);
button.addEventListener("click", () => {
  let elementList = document.querySelectorAll(".restaurantCard");

  elementList.forEach((itemObj) => {
    if (itemObj.dataset.restaurantName != "Ho Lee") {
      itemObj.style.display = "none";
    }
  });
});

function render(obj)
obj.data.forEach(element => {
  result.innerHTML +=
  <p>${element.name}</p>

  })

  function sort(obj) 

/*
//const objects = data.json;
//const filterFunc3 = (element) => {return element.cuisines === 'Pizza'}
//const filteredNumbers2 = objects.filter(filterFunc3); 
//console.log(filteredNumbers2) */

/*

result = obj.data;

result.forEach((obj) => {
  let cuisines = "";
  obj.cuisines.forEach((str) => {
    cuisines += `${str},`
  })
  let restaurantCard = `<div class = "restaurantcard" data-name="${obj.restaurant_name}"><h2>${obj.restaurant_name}</h2>
    <h4>${obj.restaurant_phone}</h4>
    </div>`;
  restaurantList.innerHTML = restaurantCard;
}) */


/* SHOW CUISINES 

let showPizza = document.getElementById("b-two");
showPizza.addEventListener("click", () => {
  if(foodFilter.className === "hilo") {

    let pizzaHilo = result.filter(
      (element) => element.cuisines.includes("Pizza"));
      result = pizzaHilo;
  }})

  let showChinese = document.getElementById("b-three");
  showChinese.addEventListener("click", () => {
    if(foodFilter.className === "hilo") {

      let chineseHilo = result.filter(
        (element) => element.cuisines.includes("Chinese"));
        result = chineseHilo;
    }})

    let showCoffee = document.getElementById("b-four");
    showCoffee.addEventListener("click", () => {
      if(foodFilter.className === "hilo") {

        let coffeeHilo = result.filter(
          (element) => element.cuisines.includes("Coffee & Tea"));
          result = coffeeHilo;
      }})

      
    let showIcecream = document.getElementById("b-five");
    showIcecream.addEventListener("click", () => {
      if(foodFilter.className === "hilo") {

        let icecreamHilo = result.filter(
          (element) => element.cuisines.includes("Ice cream"));
          result = icecreamHilo;
      }})

      let showDrinks = document.getElementById("b-six");
      showDrinks.addEventListener("click", () => {
        if(foodFilter.className === "hilo") {
  
          let drinksHilo = result.filter(
            (element) => element.cuisines.includes("Drinks"));
            result = drinksHilo;
        }})
 */
        