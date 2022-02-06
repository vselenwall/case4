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

    var el = document.getElementById('restaurant-names');
    /* var arr = obj.data
      
    var newArr = arr.map(function(element){
        return {element};
    })
      
    console.log(newArr)
      
    el.innerText = JSON.stringify(newArr); */

    
    const objects = obj.data
 
    const filterFunc3 = (element) => {return element.restaurant_name == "Strip House"};
 
    const filteredNumbers2 = objects.filter(filterFunc3);
 
    console.log(filteredNumbers2) 

    el.textContent = (filteredNumbers2);

    document.getElementById("restaurant-names").innerText = Object.values(filteredNumbers2);
    

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

  }).catch(function (error) {

  }).finally(function () {

  });

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


