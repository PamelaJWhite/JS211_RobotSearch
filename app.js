// // //access and display a drink
// // fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
// // .then(function(response){
// // console.log("response status", response)
// // return response.json();
// // }).then(function(json){
// // console.log("response payload:", json)
// // //do something with the json payload
// // // processJson(json)
// // console.log(json)
// // // const imageObjectURL = URL.createObjectURL(json.drinks[0].strDrinkThumb)
// //     //set this temporary url as the source for the image tag
// //     document.getElementById("image2").src = json.drinks[0].strDrinkThumb
// // })


// let clickCount = 0  ;
// let random = null;
// let updateEnd = true;

// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
// }
// let getDrinks = function(){
//     // for(let i=0; i< 6; i++){
//         fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
//             .then(function(response){
//                 return response.json();
//             }).then(function(json){
//                 //save the url as a variable
//                 let drinkImage = json.drinks[0].strDrinkThumb
//                 console.log(drinkImage)
//                 processJson(json)
//             })   
// }

// let processJson = function(json) {
//         let drink = json.drinks[0].strDrinkThumb
//         console.log(drink)
//         displayDrink(drink)
// //         // assignID()
// }

// //display drinks
// let displayDrink = function(drink){
//         clickCount = 0 ;
//         //create img element
//         for (let i= 0; i<15; i++){
//         console.log(`Making this drink: ${drink}`)
//         let drinkDisplay = document.querySelector("#drinkContainer")
//         let currentDiv = document.createElement("div")
//         currentDiv.classList.add("imageContainers")
//         drinkDisplay.appendChild(currentDiv)
//         let currentImg = document.createElement("img")
//         currentImg.src = drink
//         currentDiv.appendChild(currentImg)
        
//         currentImg.addEventListener("click", function(){
//             //create and update a random number upon the first click
//             if (clickCount == 0) {
//                 random = getRandomInt(14)
//                 console.log(random)
//                  }
//             if (updateEnd == false){
//                     clearBoard()
//                     getDrinks()
//                 }   
//             if (random == clickCount){
//                 console.log(`they match`)
//                 ///id the current image
//                 currentImg.setAttribute("id", "robotId")
//                 //id the current div
//                 currentDiv.setAttribute("id", "found")
//                 //change img here to Robot
//                 showRobot()
//                 displayEndMessage()
//                 updateEnd = false
//                 }
//             if (currentImg.className == "noDisplay") {
//                 return false
//                 }
//             else {currentImg.className = "noDisplay"
//             clickCount = clickCount + 1
//             console.log(clickCount)
//             return clickCount
//              }   
//             })
//          }
//     } 

// let showRobot = function(){
//     console.log(`showRobot() called`)
//     //fetch robot(s?)
//     fetch("https://robohash.org/"+ random)
//         .then(function(response){
//             return response.blob();
//         }).then(function(binaryData){
//             //make a temporary url that regerences this binary data
//             const imageObjectURL = URL.createObjectURL(binaryData)
//             console.log(`imageObjectURL: ${imageObjectURL}`)

//             //save current image as a variable
//             let robotImgTag = document.getElementById("robotId");
//             //update current image's (robot id),  src to this url
//             robotImgTag.src = imageObjectURL
//             //set the image to display using a class
//             robotImgTag.classList.toggle("noDisplay")
//             robotImgTag.classList.add("robot")
//             endMessage = document.getElementById("end") 

//             let currentDiv = document.getElementById("found")
//             currentDiv.appendChild(endMessage)
//             return true
//         })     
// }

// let displayEndMessage = function(){
//     //get p element and save
//     let endMessage = document.getElementById("end")
//     //show end mssage using class
//     endMessage.setAttribute("class", "display")
// }

// let clearBoard = function(){
//     console.log(`clear board called`)
//     //put the end message "back" so it doesn't get deleted when we clear the inner HTML of the board
//     endMessage = document.getElementById("end")
//     document.body.appendChild(endMessage)
//     //and reset the message's classes, so it's not showing
//     endMessage.classList.remove("class", "display")
//     endMessage.classList.toggle("noDisplay")
//     let board = document.getElementById("drinkContainer")
//         board.innerHTML = "" 
//         clickCount = 0 ;
//         random = null;
//         updateEnd = true;
//         return true
// }
// getDrinks()
//---------ABOVE THIS LINE WORKS------------------
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


//--------PLAY WITH ACCESSING MULTIPLE DRINKS (Again)-------

// let x=0
// //access and display a drink
// let fetchDrink = function(){
//     fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
// .then(function(response){
// console.log("response status", response)
// return response.json();
// }).then(function(json){
// console.log("response payload:", json)
// //console.log the json payload so I know it's working
// console.log(json)
// //save the URL in a variable
// let drinkURL = json.drinks[0].strDrinkThumb
// //set the image2 with this drinkURL
// document.getElementById("image2").src = drinkURL
// //make it available by returning it
// return drinkURL
// }).then(function(drinkURL){
//     serveDrinks()
//     //can I use recursion? How do i make it stop?
//     // x++
//     // if (x > 4) return
//     // serveDrinks()
//     // return x
    
    
// })
// }

// let serveDrinks = function(){
//     //can I access a drink in here? yes
//     fetchDrink()
//     console.log(`result of fetchDrink in serveDrinks: ${fetchDrink()}`)
//     // let drinkURL = fetchDrink()
//     // console.log(`fetchDrink assigned to variable drinkURL within serveDrinks: ${drinkURL}`)
//     //loop
//     // for (let i = 0; i < 1; i++){
//     //     console.log(`In the loop`)
//     //     //fetch a drink URL
//     //     let drinkURL = fetchDrink();
//     //     //assign is as the next img's source
//     //     document.getElementById("image2").src = drinkURL;
//     // }
// }


// //do I have access to drink out here?? NO
// // console.log(`drink on the outside: ${drink}`)

// ---------------------Play with BLURRING IMAGE/ CREATING VARIED DRINKS------------------------

let clickCount = 0  ;
let random = null;
let updateEnd = true;
let drinkTray = [];
//this needs to have a min of 
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let getDrinks = function(){
    for(let i=0; i< 12; i++){
    
        fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
            .then(function(response){
                return response.json();
            }).then(function(json){
                //save the url as a variable
                let drinkImage = json.drinks[0].strDrinkThumb
                console.log(drinkImage)
                console.log(`1. click count before displayOneDrink: ${clickCount}`)
                displayOneDrink(drinkImage)
                
                // if (random == clickCount){
                //     //set the ids of this div and img so they can be manipulated later; it's really more like preparing the robot's home
                //     prepareRobot(currentDiv, currentImg)
                //     //change img to Robot
                //     showRobot(currentDiv, currentImg)
                //     displayEndMessage()
                //     updateEnd = false
                //     }
                // drinkTray.push(drinkImage)
                // console.log(`array of drinks:  ${drinkTray.length}`)
                // if (drinkTray.length == 12){
                //     console.log(`drnk tray is full`)
                //     displayDrink()s
                // }
            
            })
        //.then(function(){
        // console.log(`last then `)
        //     })
    }           
}

let displayOneDrink = function(drinkImage) {
    console.log(`2. click count in displayOneDrink: ${clickCount}`)
    //get the original div
    let drinkDisplay = document.querySelector("#drinkContainer");
    //create a div for the current drink image
    let currentDiv = document.createElement("div")
    //add this class name to that div
    currentDiv.classList.add("imageContainers")
    //attach the currentDiv (div that will hold one drink image) to drinkDisplay (the original div that will hold all the divs with drinks)
    drinkDisplay.appendChild(currentDiv)
    //create an image tag
    let currentImg = document.createElement("img")
    //assign the current URL element of the drinkTray array to the img we just created
    currentImg.src = drinkImage
    //assign the className drinkImg to that img
    currentImg.className = "drinkImg"
    //attach the image to the recently created div
    currentDiv.appendChild(currentImg)

    currentDiv.addEventListener("click", function(){
        console.log(`3 click count inside event listener: ${clickCount}`)
        //clickToRemove removes current image, 
        // clickToRemove(currentImg, currentDiv)
        // moveOn(currentImg, currentDiv)
        clickToBlur(currentImg)
    })
}


//this function is a bit like frankenstein - it's all pieced together and definitely not just removing images
let clickToRemove = function(currentImg, currentDiv){
    console.log("i've been clicked and clickToRemove")
    console.log(`clickCount inside clicktoRemove: ${clickCount}`)
    // let currentDiv = document.querySelector(".imageContainers") 
            //create and update a random number upon the first click
            if (clickCount == 1) {
                random = getRandomInt(12)
                console.log(`Random number created: ${random}`)
                 }
            //when you make the randomly assigned number of clicks... 
            // if (random == clickCount){
            //     //set the ids of this div and img so they can be manipulated later; it's really more like preparing the robot's home
            //     //RIGHT HERE! It's taking EACH current div and current img and trying to apply prepare robot >:/
            //     //?? Should I put this func, remove item, in an if statement??
            //     prepareRobot(currentDiv, currentImg)
            //     //change img to Robot
            //     showRobot(currentDiv, currentImg)
            //     displayEndMessage()
            //     updateEnd = false
            //     }
            //if you click on an empty space, nothing happens
            if (currentDiv.className == "noDisplay") {
                return false
                }
            if (updateEnd == false){
                    clearBoard()
                    getDrinks()
                } 
            else {currentImg.className = "noDisplay"
            clickCount = clickCount + 1
            console.log(clickCount)
            return clickCount
             }   
    }
let moveOn = function(currentDiv, currentImg) {
    if (random == clickCount){
        console.log(`random click count reached`)
        //set the ids of this div and img so they can be manipulated later; it's really more like preparing the robot's home
        //RIGHT HERE! It's taking EACH current div and current img and trying to apply prepare robot >:/
        //?? Should I put this func, remove item, in an if statement??
        prepareRobot(currentDiv, currentImg)
        //change img to Robot
        showRobot(currentDiv, currentImg)
        displayEndMessage()
        updateEnd = false
        }
}
let prepareRobot = function(currentDiv, currentImg) {
    console.log(`they match`)
                ///set the current image id to robotId so that ---
                currentImg.setAttribute("id", "robotId")
                //set the current div id to found so that ---
                currentDiv.setAttribute("id", "found")
                //style the current image, which now ha robotId, with a blur of zero, so the other images will blur but this one won't
                document.getElementById("robotId").style.filter = "blur(0px)"
}

let showRobot = function(){
    console.log(`showRobot() called`)
    //fetch robot(s?)
    fetch("https://robohash.org/"+ random)
        .then(function(response){
            return response.blob();
        }).then(function(binaryData){
            //make a temporary url that references this binary data
            const imageObjectURL = URL.createObjectURL(binaryData)
            console.log(`imageObjectURL: ${imageObjectURL}`)

            //save current image as a variable
            let robotImgTag = document.getElementById("robotId");
            //update current image's (robot id),  src to this url
            robotImgTag.src = imageObjectURL
            //set the image to display using a class
            currentImg.classList.toggle("noDisplay")
            endMessage = document.getElementById("end") 

            // let currentDiv = document.getElementById("found")
            currentDiv.appendChild(endMessage)
            return true
        })     
}
let clickToBlur = function(currentDiv){
    // let currentDiv = document.querySelectorAll(".imgageContainers")
    currentDiv.addEventListener("click", function(){
        console.log(`I can do two click events at once`)
        //get all images
        let allImg = document.querySelectorAll(".drinkImg")
        console.log(`all img: ${allImg}`)
        //for each image
        for (let i = 0; i< allImg.length; i++){
            if (clickCount == 1) {
                allImg[i].style.filter = "blur(0.3px)"
            }
            if (clickCount == 2) {
                allImg[i].style.filter = "blur(0.6px)" 
            }
            if (clickCount == 3) {
                allImg[i].style.filter = "blur(1px)"
            }
            if (clickCount == 4) {
                allImg[i].style.filter = "blur(1.3px)"
            }
            if (clickCount == 5) {
                allImg[i].style.filter = "blur(1.6px)"
            }
            if (clickCount == 6) {
                allImg[i].style.filter = "blur(2px)"
            }
            if (clickCount == 7) {
                allImg[i].style.filter = "blur(2.3px)"
            }
            if (clickCount == 8) {
                allImg[i].style.filter = "blur(2.6px)"
            }
            if (clickCount == 9) {
                allImg[i].style.filter = "blur(3px)"
            }
            if (clickCount == 10) {
                allImg[i].style.filter = "blur(3.3px)"
            }
            if (clickCount == 11) {
                allImg[i].style.filter = "blur(3.6px)"
            }
        }
        
       
        

//         //change style using JS
//         //change it incrementally with each click
//         //if clicks === something, then style changes to blurrier
        
//     })
// }



let displayEndMessage = function(){
    //get p element and save
    let endMessage = document.getElementById("end")
    //show end mssage using class
    endMessage.setAttribute("class", "display")
}

let clearBoard = function(){
    console.log(`clear board called`)
    //put the end message "back" so it doesn't get deleted when we clear the inner HTML of the board
    endMessage = document.getElementById("end")
    document.body.appendChild(endMessage)
    //and reset the message's classes, so it's not showing
    endMessage.classList.remove("class", "display")
    endMessage.classList.toggle("noDisplay")
    let board = document.getElementById("drinkContainer")
        board.innerHTML = "" 
        clickCount = 0 ;
        random = null;
        updateEnd = true;
        return true
}
getDrinks()

//this is just extra code, likely delete. it was this way from previous project from demonstration
// let processJson = function(json) {
//         let drink = json.drinks[0].strDrinkThumb
//         console.log(drink)
//         displayDrink(drink)
// //         // assignID()
// display drinks using array

//old display drink with extra loop, waiting for array to be filled
// let displayDrink = function(){
//         console.log(` access drinkTray in displayDrink: ${drinkTray.length}`)
//         console.log(`the first element of drinkTray array: ${drinkTray[0]}`)
//         clickCount = 0 ;
//         //grab the original div, id drinkContainter
       
//         console.log(`what does the original drink container div look like? ${drinkDisplay}`)
       
//         //need to loop over the drink array and display each 
//         for (i=0; i< drinkTray.length; i++){
        
          
            
//         }
//         //do these need to go here? or in the previous func?? i think here bc they need those variables

//         clickToRemove()
//         clickToDoMore()
//     }
     
//display drinks
// let displayDrink = function(drink){
//         clickCount = 0 ;
//         //create img element
//         for (let i= 0; i<12; i++){
//         console.log(`Making this drink: ${drink}`)
//         let drinkDisplay = document.querySelector("#drinkContainer")
//         let currentDiv = document.createElement("div")
//         currentDiv.classList.add("imageContainers")
//         drinkDisplay.appendChild(currentDiv)
//         let currentImg = document.createElement("img")
//         currentImg.src = drink
//         currentImg.className = "drinkImg"
//         currentDiv.appendChild(currentImg)
//         clickToRemove(currentImg, currentDiv)
//         clickToDoMore(currentImg, currentDiv)
//          }
//     }
















