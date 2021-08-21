//global variable to hold tracked clicks
let clickCount = 0  ;
//global variable to hold a random number (to be created later)
let random = null;
//global variable to hold the trigger to clear the board
let updateEnd = true;

//function to create a random number between two whole numbers
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max-min) + min);
}

//function to fetch 12 drink images from thecocktaildb
let getDrinks = function(){
    for(let i=0; i< 12; i++){
        fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
            .then(function(response){
                return response.json();
            }).then(function(json){
                //local variable to save the image
                let drinkImage = json.drinks[0].strDrinkThumb
                
                console.log(`1. click count before displayOneDrink: ${clickCount}`)
                displayOneDrink(drinkImage)
                // searchForRobot
                
                // drinkTray.push(drinkImage)
                // console.log(`array of drinks:  ${drinkTray.length}`)
                // if (drinkTray.length == 12){
                //     console.log(`drnk tray is full`)
            
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
        clickToRemove(currentImg, currentDiv)
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
            if (clickCount == 0) {
                console.log(`clickToRemove called`)
                random = getRandomInt(1, 12)
              
                console.log(`Random number created: ${random}`)
                 }
            //when you make the randomly assigned number of clicks... 
            if (random == clickCount){
               
                // prepareRobot(currentDiv, currentImg)
                //change img to Robot
                prepareRobot(currentImg, currentDiv)
                showRobot()
                // displayEndMessage()
                // updateEnd = false
                }
            //Because previously clicked images were given the class "noDisplay", if you click on an empty space, nothing happens
            if (currentImg.className == "noDisplay") {
                return false
                }
            if (updateEnd == false){
                    document.getElementById("end").style.opacity = "0%"
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
        console.log(`moveOne`)
        console.log(`random click count reached`)
    
        prepareRobot(currentDiv, currentImg)
        //change img to Robot
        // showRobot(currentDiv, currentImg)//I moved this to a new then
        // displayEndMessage()
        // updateEnd = false
        }
}
let prepareRobot = function(currentImg, currentDiv) {
    console.log(`they match`)
                ///set the current image id to robotId so that ---
                currentImg.setAttribute("id", "robotId")
                //set the current div id to found so that ---
                currentDiv.setAttribute("id", "found")
                //style the current image, which now ha robotId, with a blur of zero, so the other images will blur but this one won't
                document.getElementById("robotId").style.filter = "blur(0px)"
}

let showRobot = function(currentImg){
    console.log(`showRobot() called`)
    //fetch robot
    fetch("https://robohash.org/"+ random)
        .then(function(response){
            return response.blob();
        }).then(function(binaryData){
            //make a temporary url that references this binary data
            const imageObjectURL = URL.createObjectURL(binaryData)
            console.log(`imageObjectURL: ${imageObjectURL}`)

            //save current image as a variable
            let robotImgTag = document.getElementById("robotId");
            console.log(`Is this robotImgTag null? ${robotImgTag}`)
            //update current image's (robot id),  src to this url
            robotImgTag.src = imageObjectURL
            //using id, set the image style to 100% opacity to show
            robotImgTag.style.opacity = "100%"
            
            //
            endMessage = document.getElementById("end") 
            let currentDiv = document.getElementById("found")
            currentDiv.appendChild(endMessage)
            endMessage.style.opacity = "100%"
            updateEnd = false
            // updateEnd = true
            console.log(updateEnd)
            return true
        })     
}
// let searchForRobot = function() {
//     if (document.getElementById("robotId") == true){
//     showRobot()
//     console.log(`robotId found`)
//     return false
// }
// else {
//     console.log(`searching`)
//     searchForRobot()
// }
// }


let clickToBlur = function(currentDiv){
    // let currentDiv = document.querySelectorAll(".imgageContainers")
    // currentDiv.addEventListener("click", function(){
        console.log(`click to blur called`)
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
        
    // })
}



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
















