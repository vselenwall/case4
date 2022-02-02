let url = 'https://api.documenu.com/v2/restaurants/state/NY?key=60301177efaa8635e35c293b98ac13a1'

//console.log(url);

url = 'data.json'
//let restaurantNames = []

fetch(url) 
.then(function (response) {
    console.log(response);
    return response.json();

}).then(function (obj) {
    //console.log(obj.data);

    obj.data.forEach(element => {

        let restaurantList = document.getElementById("restaurant-names");
        let listItems = document.createElement("li");

        listItems.appendChild(document.createTextNode(element.restaurant_name));
        listItems.appendChild(document.createTextNode(element.cuisines));
        listItems.appendChild(document.createTextNode(element.hours));
        restaurantList.appendChild(listItems);


}).catch(function(error) {

}).finally(function() {

});


/* const myDiv = document.getElementById('restaurant-names');
 
myDiv.innerHTML = data.map(element => `<div style="color: blue">
<ul>
    <li>${element.restaurant_name}</li>
    <li>${element.hours}</li>
    <li>${element.cuisines}</li>
</ul>
</div>`).join(''); */

/*
const button = document.querySelector("button");

console.log(button);
button.addEventListener("click", () => {
    console.log("formies");
}); */

/*
//const objects = data.json;
//const filterFunc3 = (element) => {return element.cuisines === 'Pizza'}; 
//const filteredNumbers2 = objects.filter(filterFunc3); 
//console.log(filteredNumbers2) */