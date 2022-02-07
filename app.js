let url = 'https://api.documenu.com/v2/restaurants/state/NY?key=60301177efaa8635e35c293b98ac13a1'

//console.log(url);

url = 'data.json'
//let restaurantNames = []

let dataArray = []

fetch(url)
  .then(function (response) {
    console.log(response);
    return response.json();

  }).then(function (obj) {

    //const objects = obj.data

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
    const pizzaCusisines = objects.filter(
      (element) => element.cuisines == "Chinese"
      );
    console.log(pizzaCusisines);
    

    /* var el = document.getElementById('restaurant-names');
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

const button = document.querySelector("button");
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

/* restaurantList.innerHTML = data.map(element => `<div style="color: blue">
<ul>
<li>${element.restaurant_name}</li>
<li>${element.hours}</li>
<li>${element.cuisines}</li>
</ul>
</div>`).join(''); */
/* console.log(obj);
console.log(obj.data);

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


