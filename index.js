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
        image: "images/kojiro.jpg",
        rating: 4, 
        comment: "Very flavorful!" 
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
    const ramenMenu = document.getElementById("ramen-menu")
    ramens.forEach(function(picture){
        const p = document.createElement("p")
        const imageDiv = document.createElement('div')
        const image = document.createElement('img');
        imageDiv.appendChild(image)
        imageDiv.appendChild(p)
        image.src = picture.image;
        image.id = picture.id;
        ramenMenu.appendChild(imageDiv);
        image.addEventListener('click', handleClick);
    })
}
function handleClick(e){
    const image = e.target
    const parent = image.parentNode
    const sibling = image.nextSibling
    ramens.forEach(function(picture){
        if (picture.id === Number(image.id)){
            if (sibling.innerHTML === ""){
                sibling.innerHTML = ` <span>Name: ${picture.name}</span><br>
                                <span>Restaurant: ${picture.restaurant}</span><br>
                                <span>Rating: ${picture.rating}</span><br>`;
            }
            else {
                sibling.innerHTML = "";
            }
        }
    })
}

function addSubmitListener(){
    const form = document.getElementById("form")
    form.addEventListener('submit', function(e){
        e.preventDefault();
        let picture = {id: ramens.length+1}
        const children = e.target.children
        for (let child of children){
            if (child.id && child.id !== "submit"){
                
                picture[child.id] = child.value
            }
        }
        ramens.push(picture)
        console.log(ramens)
    })
}
 
function main(){
    document.addEventListener("DOMContentLoaded", function(){  
        addSubmitListener();
        displayRamens();
    })
}

main()