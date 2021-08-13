// fetch("https://deckofcardsapi.com/api/deck/new/shuffle")
// .then(function(response){
//     return response.blob();
// }).then(function(binaryData){
//     //make a temporary url that regerences this binary data
//     const imageObjectURL = URL.createObjectURL(binaryData)
//     // set this temporary url as the source for the image tag
//     document.getElementById("image2").src = imageObjectURL
// })

// fetch("https://deckofcardsapi.com/api/deck/new/shuffle")
//     .then(function(response){
//     console.log("response status", response.status)
//     return response.json();
//     }).then(function(json){
//     console.log("response payload:", json)
//     //do something with the json payload
//     // processJson(json)
//     console.log(json.deck_id)
//     })

// let arrayOfRobots = []

// function createRobotArray(){

//     for (i=0; i<4; i++){
//         let random = Math.random();

//        fetch("https://deckofcardsapi.com/api/deck/new/shuffle")
// .then(function(response){
//     console.log("response status", response)
//     return response.json();
//         }).then(function(binaryData){
//             //make a temporary url that references this binary data
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

// fetch("http://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
// .then(function(response){
//     return response.blob();
// }).then(function(binaryData){
//     //make a temporary url that regerences this binary data
//     const imageObjectURL = URL.createObjectURL(binaryData)
//     // set this temporary url as the source for the image tag
//     document.getElementById("image2").src = imageObjectURL
// })

fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
.then(function(response){
console.log("response status", response)
return response.json();
}).then(function(json){
console.log("response payload:", json)
//do something with the json payload
// processJson(json)
console.log(json)
// const imageObjectURL = URL.createObjectURL(json.drinks[0].strDrinkThumb)
    //set this temporary url as the source for the image tag
    document.getElementById("image2").src = json.drinks[0].strDrinkThumb
})

// https://deckofcardsapi.com/api/deck/new/shuffle
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






















