//global variable to hold tracked clicks
let clickCount = 0  ;
//global variable to hold a random number (to be created later)
let random = null;
//global variable to hold the trigger to clear the board
let updateEnd = false;
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
                //call the function that creates and displays each drink
                displayOneDrink(drinkImage)
            })
    }           
}
//function the create, display, add event listener to each drink
//has one parameter, drinkImage
//takes the drink URL as an argument
let displayOneDrink = function(drinkImage) {
    //grab the outer/ original div 
    let drinkDisplay = document.querySelector("#drinkContainer");
    //create a div for the current drink image
    let currentDiv = document.createElement("div")
    //add the class name "imageContainers" to the new div
    currentDiv.classList.add("imageContainers")
    //attach the currentDiv (div that will hold one drink image) 
    //to drinkDisplay (the original div that will hold all the divs with drinks)
    drinkDisplay.appendChild(currentDiv)
    //create an image tag
    let currentImg = document.createElement("img")
    //assign the current URL element to the img just created
    currentImg.src = drinkImage
    //assign the className "drinkImg" to that img
    currentImg.className = "drinkImg"
    //attach the image to the recently created div
    currentDiv.appendChild(currentImg)
    //add an event listenter to the div with an image in it
    currentDiv.addEventListener("click", function(){
        //function removes current image
        //and triggers other changes based on click count
        clickToRemove(currentImg, currentDiv)
        // function increasingl blurs the images given clicks
        clickToBlur(currentImg)
    })
}
//the main purpose of this function is to remove the images
//removing the images triggers a click to be counted
//and this function also does several other things 
//it's a bit like frankenstein, and I don't really like it
//but I couldn't think of a logical way to split it up into separate functions
let clickToRemove = function(currentImg, currentDiv){
    //create and update a random number upon the first click
    if (clickCount == 0) {
        //after the first click, but before it is counted (later in this function)
        //a random number between 1 and 12 is created
        //this random number will be used to trigger the robot to display
        random = getRandomInt(1, 12)
        }
    //when the number of clicks equals that random number...
    if (random == clickCount){
        //call the function that creates the robot
        prepareRobot(currentImg, currentDiv)
        //call the function that displays the robot
        showRobot()
        }
    //Because previously clicked images were given the class "noDisplay", 
    //if you click on an empty space, nothing happens
    if (currentImg.className == "noDisplay") {
        return false
        }
    //update end is changed from false to true after the robot is displayed
    //so the click after the robot is displayed will trigger update end
    if (updateEnd == true){
        //call the function that clears the board
        clearBoard()
        //call the function that resets the board
        getDrinks()
        } 
    else {
        //sets the current image's class to "noDisplay"
        //which sets the opacity to 0% so it can't be seen
        currentImg.className = "noDisplay"
        //increments the click count by 1
        clickCount = clickCount + 1
        }   
    }
let clickToBlur = function(currentDiv){
    //grab all images
    let allImg = document.querySelectorAll(".drinkImg")
    //for each image
    for (let i = 0; i< allImg.length; i++){
        // let blur = clickCount*0.3
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
            
           
//funciton that takes the current image and current div as arguments
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
            updateEnd = true
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
















