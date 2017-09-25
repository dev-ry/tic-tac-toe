console.log("checking links");
// wait for the DOM to finish loading
//$(document).ready(function() {

  // all code to manipulate the DOM
  // goes inside this function
//});


var boxes = [...document.querySelectorAll(".col-md-4")];
var boxCounter = 2;
var player;
var conditionsToWin = [ [0,1,2], [3,4,5], [6,7,8], [0,4,8], [2,4,6], [0,3,6], [1,4,8], [2,5,8]]

//for each box
// forEach, used for arrays
boxes.forEach(function(box){
  //set up an eventlistener
  box.addEventListener("click", function(event){
    console.log(boxes.length);
    //when user clicks a box place "X.jpg" or "O image.jpg" in clicked box
    //alternating between X and O
    for (i = boxCounter; i < 11; i++) {
      if (boxCounter % 2 === 0) {
        box.style['background-image'] = `url("X.jpg")`;
      } else {
        box.style['background-image'] = `url("O image.jpg")`;
      }
    }

   /* function checkForWin() {
      for (i = 0; i < conditionsToWin.length; i++) {

      }
    }
    */
    if (boxes[0].style['background-image'] === `url("X.jpg")` &&
      boxes[1].style['background-image'] === `url("X.jpg")` &&
      boxes[2].style['background-image'] === `url("X.jpg")`)
      winMessage.innerHTML = "Player X wins!"
    else if (boxes[3].style['background-image'] === `url("X.jpg")` &&
      boxes[4].style['background-image'] === `url("X.jpg")` &&
      boxes[5].style['background-image'] === `url("X.jpg")`)
      winMessage.innerHTML("Player X wins!");
    else if (boxes[6].style['background-image'] === `url("X.jpg")` &&
      boxes[7].style['background-image'] === `url("X.jpg")` &&
      boxes[8].style['background-image'] === `url("X.jpg")`)
      winMessage.innerHTML("Player X wins!");
    else if (boxes[0].style['background-image'] === `url("X.jpg")` &&
      boxes[4].style['background-image'] === `url("X.jpg")` &&
      boxes[8].style['background-image'] === `url("X.jpg")`)
      winMessage.innerHTML("Player X wins!");
    else if (boxes[2].style['background-image'] === `url("X.jpg")` &&
      boxes[4].style['background-image'] === `url("X.jpg")` &&
      boxes[6].style['background-image'] === `url("X.jpg")`)
      winMessage.innerHTML("Player X wins!");
    else if (boxes[0].style['background-image'] === `url("X.jpg")` &&
      boxes[3].style['background-image'] === `url("X.jpg")` &&
      boxes[6].style['background-image'] === `url("X.jpg")`)
      winMessage.innerHTML("Player X wins!");
    else if (boxes[1].style['background-image'] === `url("X.jpg")` &&
      boxes[4].style['background-image'] === `url("X.jpg")` &&
      boxes[8].style['background-image'] === `url("X.jpg")`)
      winMessage.innerHTML("Player X wins!");
    else if (boxes[2].style['background-image'] === `url("X.jpg")` &&
      boxes[5].style['background-image'] === `url("X.jpg")` &&
      boxes[8].style['background-image'] === `url("X.jpg")`)
      winMessage.innerHTML("Player X wins!");
    else
      winMessage.innerHTML("Player O wins!");
  boxCounter++;



    //after each click, check for win
    //if "win" alert "You win!", else, continue playing till win

  });
});



