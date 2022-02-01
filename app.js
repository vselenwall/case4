let url = 'https://api.documenu.com/v2/restaurants/state/NY?key=60301177efaa8635e35c293b98ac13a1'

console.log(url);

//url = 'data.json'
let restaurantNames = []

fetch(url) 
.then(function (response) {
    console.log(response);
    return response.json();

}).then(function (obj) {
    console.log(obj.data);
    //skapa loop

    obj.data.forEach(element => {
        
        // document.write(element.restaurant_name)
        let lists = document.getElementById("restaurant-names");
        let theList = document.createElement("li");

        theList.appendChild(document.createTextNode(element.restaurant_name));
        theList.appendChild(document.createTextNode(element.cuisines));
        lists.appendChild(theList);
    });

    restaurantNames = obj.data
    //här ska renderContent sen
    //obj.data.forEach(element => {
        //document.write(element.restaurant_name)
    //})
    
    
    

}).catch(function(error) {

}).finally(function() {

}); 