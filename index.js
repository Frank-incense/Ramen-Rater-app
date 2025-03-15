const ramens = [
    { 
        id: 1, 
        name: "Shoyu Ramen", 
        restaurant: "Ichiran", 
        image: "images/shoyu.jpg", 
        rating: 5, 
        comment: "Delicious!" 
    },
    { 
        id: 2, 
        name: "Gyokotsu Ramen", 
        restaurant: "Menya", 
        image: "images/gyukotsu.jpg", 
        rating: 4, 
        comment: "Very flavorful!" 
    },
    { 
        id: 3, 
        name: "Kojiro Ramen", 
        restaurant: "Ramen-ya", 
        image: "images/kojiro.jpg" 
    },
    { 
        id: 4, 
        name: "Naruto Ramen", 
        restaurant: "Menya", 
        image: "images/naruto.jpg", 
        rating: 4, 
        comment: "Very flavorful!" 
    },
    { 
        id: 5, 
        name: "Nirvana Ramen", 
        restaurant: "Menya", 
        image: "images/nirvana.jpg", 
        rating: 4, 
        comment: "Very flavorful!" 
    },
 ];
const restaurants = []
 document.addEventListener("DOMContentLoaded", function(){
    ramens.forEach(function(picture){
        addrestaurant(picture)
        
        addpicture(picture)

    })
 })
 function addpicture(picture) {
    const image = document.getElementById(picture.id);
    image.src = picture.image
 }
 function addrestaurant(picture){
    const restaurant = document.getElementById("restaurantList")
    const li = document.createElement("li");
    if (!check(picture.restaurant)){
        restaurant.appendChild(li)
        restaurants.push(picture.restaurant)
    }
    li.textContent = picture.restaurant;
    // console.log(restaurants)
 }
 function check(name)
{
    for (let restaurant of restaurants){
        if (restaurant === name)
        {
            return true;
        }
    }
    return false

} 