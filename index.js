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
    { 
        id: 6, 
        name: "Tsukemen Ramen", 
        restaurant: "Ichiran", 
        image: "images/tsukemen.jpg", 
        rating: 4, 
        comment: "Very flavorful!" 
    },
 ];

function displayRamens(){
    ramens.forEach(function(picture){
        addpicture(picture)
    })   
}
 
function addpicture(picture) {
    const imageContainer = document.getElementById("ramen-menu")
    const menuItem = document.createElement('div')
    const image = document.createElement('img');
    menuItem.appendChild(image)
    buildRamen(menuItem, picture)
    image.src = picture.image
    image.id = picture.id
    image.alt = picture.name
    imageContainer.appendChild(menuItem)
}
function buildRamen(card, picture){
    const p = document.createElement('p');
    p.textContent = picture.name
    card.appendChild(p)
    card.style.textAlign = "center";
}

function handleClick(e){
    console.log(e.target)
}
function addSubmitListener(){

}
function main(){
    document.addEventListener("DOMContentLoaded", function(){
        displayRamens();
        document.addEventListener("click", handleClick)
    })
}

main()