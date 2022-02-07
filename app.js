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

    const objects = obj.data

    // GET ARRAY OF NAME AND CUISINES
    const restaurantObj = objects.map((element) => ({
      name: element.restaurant_name,
      cuisines: element.cuisines,
      hours: element.hours
    }));
    console.log(restaurantObj);

    // LIST WITH RESTURANTS
    objects.forEach(element => {
      restaurantList.innerHTML = objects.map(element => `
  <ul>
    <li>
      <h2>${element.restaurant_name}</h2>
      <p>${element.cuisines}</p>
      <p>${element.hours}</p>
    </li>
  </ul>`).join('');
    });

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

  }).catch(function (error) {

  }).finally(function () {

  });
