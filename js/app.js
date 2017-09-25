console.log("checking links");
// wait for the DOM to finish loading
//$(document).ready(function() {

  // all code to manipulate the DOM
  // goes inside this function
//});


var boxes = [...document.querySelectorAll(".col-xs-4")];
var boxCounter = 2;
var conditionsToWin = [ [0,1,2], [3,4,5], [6,7,8], [0,4,8],
[2,4,6], [0,3,6], [1,4,8], [2,5,8]];
//var gameActive = true;

//for each box
// forEach, used for arrays
boxes.forEach(function(box){
  //set up an eventlistener
 box.addEventListener("click", function(event){
   /* if (box.classList.contains('playerx')) || (box.classList.contains('playero')) {
      box.removeEventListener("click");

   }
  } */
    //when user clicks a box place "X.jpg" or "O.jpg" in clicked box
    //alternating between X and O
    for (i = boxCounter; i < 11; i++) {
      if (boxCounter % 2 === 0) {
        box.className += ` playerx`;
      } else {
        box.className += ` playero`;
      }
    }

   /* function checkForWin() {
      for (i = 0; i < conditionsToWin.length; i++) {

      }
    }
    */
    var winAlert = document.getElementById('winMessage');

    if (boxes[0].classList.contains('playerx') &&
      boxes[1].classList.contains('playerx') &&
      boxes[2].classList.contains('playerx')) {
        winAlert.innerHTML = "Player X wins!";
    }
    else if (boxes[3].classList.contains('playerx') &&
      boxes[4].classList.contains('playerx') &&
      boxes[5].classList.contains('playerx')) {
        winAlert.innerHTML = "Player X wins!";
    }
    else if (boxes[6].classList.contains('playerx') &&
      boxes[7].classList.contains('playerx') &&
      boxes[8].classList.contains('playerx')) {
        winAlert.innerHTML = "Player X wins!";
    }
    else if (boxes[0].classList.contains('playerx') &&
      boxes[4].classList.contains('playerx') &&
      boxes[8].classList.contains('playerx')) {
        winAlert.innerHTML = "Player X wins!";
    }
    else if (boxes[2].classList.contains('playerx') &&
      boxes[4].classList.contains('playerx') &&
      boxes[6].classList.contains('playerx')) {
        winAlert.innerHTML = "Player X wins!";
    }
    else if (boxes[0].classList.contains('playerx') &&
      boxes[3].classList.contains('playerx') &&
      boxes[6].classList.contains('playerx')) {
        winAlert.innerHTML = "Player X wins!";
    }
    else if (boxes[1].classList.contains('playerx') &&
      boxes[4].classList.contains('playerx') &&
      boxes[7].classList.contains('playerx')) {
        winAlert.innerHTML = "Player X wins!";
    }
    else if (boxes[2].classList.contains('playerx') &&
      boxes[5].classList.contains('playerx') &&
      boxes[8].classList.contains('playerx')){
        winAlert.innerHTML = "Player X wins!";
    }
    else if (boxes[0].classList.contains('playero') &&
      boxes[1].classList.contains('playero') &&
      boxes[2].classList.contains('playero')){
        winAlert.innerHTML = "Player O wins!";
    }
    else if (boxes[3].classList.contains('playero') &&
      boxes[4].classList.contains('playero') &&
      boxes[5].classList.contains('playero')){
        winAlert.innerHTML = "Player O wins!";
    }
    else if (boxes[6].classList.contains('playero') &&
      boxes[7].classList.contains('playero') &&
      boxes[8].classList.contains('playero')){
        winAlert.innerHTML = "Player O wins!";
    }
    else if (boxes[0].classList.contains('playero') &&
      boxes[4].classList.contains('playero') &&
      boxes[8].classList.contains('playero')){
        winAlert.innerHTML = "Player O wins!";
    }
    else if (boxes[2].classList.contains('playero') &&
      boxes[4].classList.contains('playero') &&
      boxes[6].classList.contains('playero')){
        winAlert.innerHTML = "Player O wins!";
    }
    else if (boxes[0].classList.contains('playero') &&
      boxes[3].classList.contains('playero') &&
      boxes[6].classList.contains('playero')){
        winAlert.innerHTML = "Player O wins!";
    }
    else if (boxes[1].classList.contains('playero') &&
      boxes[4].classList.contains('playero') &&
      boxes[7].classList.contains('playero')){
        winAlert.innerHTML = "Player O wins!";
    }
    else if (boxes[2].classList.contains('playero') &&
      boxes[5].classList.contains('playero') &&
      boxes[8].classList.contains('playero')){
        winAlert.innerHTML = "Player O wins!";
    }
    else {
      //winAlert.innerHTML = "It's a Draw!";

      boxCounter++;
    }

    //after each click, check for win
    //if "win" alert "You win!", else, continue playing till win

  });
});

// event listenter on button : when reset button is clicked called the resetBoard() function
var btn = document.querySelector('button');

btn.addEventListener('click', function(event){

  function resetBoard(){
    // // remove all classnames "playerx" and "playero"
    // var classRemover = document.getElementsByClass('playerx', 'playero');
    // classRemover.classList.remove('playerx', 'playero');
    location.reload();
    }
    resetBoard();
});



