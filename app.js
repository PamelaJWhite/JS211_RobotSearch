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
        // function increasingly blurs the images given clicks
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
        //a random number between 1 and 11 is created
        //this random number will be used to trigger the robot to display 
        //sometime before the last drink
        random = getRandomInt(1, 11)
        }
    //Because previously clicked images were given the class "noDisplay", 
    //if you click on an empty space, nothing happens
    if (currentImg.className == "noDisplay") {
        return false
        }
    //when the number of clicks equals that random number...
    if (random == clickCount){
        //call the function that creates the robot
        prepareRobot(currentImg, currentDiv)
        //call the function that displays the robot
        showRobot()
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
//funciton that takes the current image and current div as arguments
let prepareRobot = function(currentImg, currentDiv) {
    console.log(`they match`)
                ///set the current image id to robotId so that this currentImg can be manipulated
                //it is not differentiated from the other images
                currentImg.setAttribute("id", "robotId")
                //set the current div id to found so that so that this currentDiv can be manipulated
                //it is not differentiated from the other divs
                currentDiv.setAttribute("id", "found")
                //style the current image, which now ha robotId, with a blur of zero
                //so the other images will blur but this one (which will be the robot) won't blur
                document.getElementById("robotId").style.filter = "blur(0px)"
}
//function that displays the robot
let showRobot = function(){
    console.log(`showRobot() called`)
    //fetch robot
    fetch("https://robohash.org/"+ random)
        .then(function(response){
            return response.blob();
        }).then(function(binaryData){
            //make a temporary url that references this binary data
            const imageObjectURL = URL.createObjectURL(binaryData)
            //save current image tag as a variable
            let robotImgTag = document.getElementById("robotId");
            //update current image's (robot id) src to this url
            robotImgTag.src = imageObjectURL
            //because any clicked image was set to 0% opacity to make it disappear
            //set this image style to 100% opacity to show robot
            robotImgTag.style.opacity = "100%"
            //grab the paragraph that has the end message 
            //hold that value in endMessage variable
            let endMessage = document.getElementById("end") 
            //grab the div that was just id'd as "found" (in the prepareRobot function)
            //and hold that value in currentDiv variable
            let currentDiv = document.getElementById("found")
            //add the end message to the current div
            currentDiv.appendChild(endMessage)
            //show the end message by changing its opacity to 100%
            endMessage.style.opacity = "100%"
            //change updateEnd to true, so the third if statement in clickToRemove
            //will have true condition
            //and call clearBoard and displayRobots 
            updateEnd = true
            return true
        })     
}
let clickToBlur = function(currentDiv){
    //grab all images
    let allImg = document.querySelectorAll(".drinkImg")
    //variable to hold incremental blur amount based on clicks
    let blurAmount = clickCount*0.3
    //add blurAmount to string to indicate blur correctly
    //store in variable blurString
    let blurString = `blur(${blurAmount}px)`
    //for each image
    for (let i = 0; i< allImg.length; i++){
        //style each image with incremental blurAmount using blurString
        allImg[i].style.filter = blurString
        }
}
//function that clears all the images and divs that were added during getDrink
//so there is space for new drinks/ a new board
let clearBoard = function(){
    console.log(`clear board called`)
    //grab the end message paragraph
    endMessage = document.getElementById("end")
    //put it back in the body so it doesn't get cleared
    //when the board div is cleared
    document.body.appendChild(endMessage)
    //and reset the message's classes, so it's not showing
    endMessage.classList.remove("class", "display")
    //set the opacity of the paragraph element back to 0%
        //so when the board is reset in getDrinks
        //the paragraph won't show
    document.getElementById("end").style.opacity = "0%"
    //grab the original div that holds all the divs with images
    //hold it in the board variable
    let board = document.getElementById("drinkContainer")
    //remove all the elements from the board (all the images and their containing divs)
        board.innerHTML = "" 
    //reset the clickCount to 0, random variable to null and updateEnd to false
    // so it can be played again
        clickCount = 0 ;
        random = null;
        updateEnd = false;
}
getDrinks()







