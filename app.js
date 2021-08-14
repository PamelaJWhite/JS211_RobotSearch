// //access and display a drink
// fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
// .then(function(response){
// console.log("response status", response)
// return response.json();
// }).then(function(json){
// console.log("response payload:", json)
// //do something with the json payload
// // processJson(json)
// console.log(json)
// // const imageObjectURL = URL.createObjectURL(json.drinks[0].strDrinkThumb)
//     //set this temporary url as the source for the image tag
//     document.getElementById("image2").src = json.drinks[0].strDrinkThumb
// })

// let drinksArray = []
// function makeDrink(){
let clickCount = 0  ;
let random = null;
let getDrinks = function(){
    // for(let i=0; i< 6; i++){
        fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
            .then(function(response){
                return response.json();
            }).then(function(json){
                //save the url as a variable
                let drinkImage = json.drinks[0].strDrinkThumb
                console.log(drinkImage)
                // console.log(`I've made this drink ${drinkImage}`)
                // let currentImg = document.createElement("img")
                // currentImg.src = drinkImage
                // //create an id for the img
                // let imgId = "id" + i
                // //set the img id 
                // currentImg.setAttribute("id", imgId)
                // //append img to body
                processJson(json)
            }) 
        // }
      
}

let processJson = function(json) {
        let drink = json.drinks[0].strDrinkThumb
        console.log(drink)
        displayDrink(drink)
//         // assignID()
}

// let getMoreDrinks = function(){
//     for (let i=0; i<2; i++){

//     }
// }
function getRandomInt(max) {
         return Math.floor(Math.random() * max);
}
//display drinks
let displayDrink = function(drink){
        //create img element
        for (let i= 0; i<16; i++){
        console.log(`Making this drink: ${drink}`)
        let currentImg = document.createElement("img")
        //assign current arrayOfDrinks[i] to its src
        currentImg.src = drink
        // //create an id for the img
        // let imgId = "id" + i
        // //set the img id 
        // currentImg.setAttribute("id", imgId)
        // //append img to body
        let drinkDisplay = document.querySelector("#drinkContainer")
        drinkDisplay.appendChild(currentImg)
        
        currentImg.addEventListener("click", function(){
            //create and update a random number upon the first click
            if (clickCount == 0) {
                random = getRandomInt(16)
                console.log(random)
                 }
            if (random == clickCount){
                console.log(`they match`)
                showRobot()
                //need to change img here to Robot
            }  
            if (currentImg.className == "noDisplay") {
                return false
            }
            else {currentImg.className = "noDisplay"
            clickCount = clickCount + 1
            console.log(clickCount)
            return clickCount
             }   
            })
         }
         
    } 

let showRobot = function(){
    //fetch robot(s?)
    //how do i connect the robot to the current image?
        //turn a class on
        //this means it would need to have a class
        //which would mean I need to get the image with said class
            //and append it to that image
        //but right now, all the images have the same class(es): either none or noDisplay
        //instead, I could give the current image an id (in the previous/parent function)
        //and the id could match the random number, or be a variable outside the 
        //then grab that img by id
        //and append this robot to it
}
//onclick, 
//if display, then switch to class no display and
//add to click count
//if no display, return false
//and do not add to click count
//if count = random number between ---- and ----
//change display to robot
 //fetch would go here?


// displayDrink(drink)
// let assignID = function() {
//     for (let i=0; i<=drinksArray.length; i++) {
//         console.log(drinksArray.i)
//     }
// }
    
getDrinks()


//This creates and array of robots:
// let arrayOfRobots = []

// function createRobotArray(){

//     for (i=0; i<4; i++){
//         let random = Math.random();

//         fetch("https://robohash.org/"+ random)
//         .then(function(response){
//             return response.blob();
//         }).then(function(binaryData){
//             //make a temporary url that regerences this binary data
//             const imageObjectURL = URL.createObjectURL(binaryData)
//             //add to an array
//             arrayOfRobots.push(imageObjectURL)
//             console.log(arrayOfRobots)
//         }) .then(function(){for(let i=0; i<= arrayOfRobots.length; i++){
//             //create img element
//             console.log(`current robot: ${arrayOfRobots[i]}`)
//             let currentImg = document.createElement("img")
//             //assign current arrayOfRobots[i] to its src
//             currentImg.src = arrayOfRobots[i]
//             //create an id for the img
//             let imgId = "id" + i
//             //set the img id 
//             currentImg.setAttribute("id", imgId)
//             //append img to body
//             document.body.appendChild(currentImg)
// }
            
//         })
// }
// }
// createRobotArray()

// // function displayRobots(){
// //     //loop over robots array
// //     }
// // }

// // displayRobots()


// let arrayOfDrinks = []

// function createDrinkArray(){

//     for (i=0; i<4; i++){
//         let random = Math.random();

//         fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
//         .then(function(response){
//             return response.blob();
//         }).then(function(binaryData){
//             //make a temporary url that regerences this binary data
//             const imageObjectURL = URL.createObjectURL(binaryData)
//             //add to an array
//             arrayOfDrinks.push(imageObjectURL)
//             console.log(arrayOfDrinks)
//         }) 
//         .then(function(){for(let i=0; i<= arrayOfDrinks.length; i++){
//             //create img element
//             console.log(`current robot: ${arrayOfDrinks[i]}`)
//             let currentImg = document.createElement("img")
//             //assign current arrayOfRobots[i] to its src
//             currentImg.src = arrayOfDrinks[i]
//             //create an id for the img
//             let imgId = "id" + i
//             //set the img id 
//             currentImg.setAttribute("id", imgId)
//             //append img to body
//             document.body.appendChild(currentImg)
// }
            
//         })
// }
// }
// createDrinkArray()






















