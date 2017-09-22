console.log("checking links");
// wait for the DOM to finish loading
//$(document).ready(function() {

  // all code to manipulate the DOM
  // goes inside this function
//});

/*function boxClick() {
  var boxes = document.querySelectorAll(".col-md-4");
  boxes.addEventListener('click', 'boxClick');
    console.log("clicked a box");
    };
*/

var boxes = [...document.querySelectorAll(".col-md-4")];
//for each box
// forEach, used for arrays
boxes.forEach(function(box){
  //set up an eventlistener
  box.addEventListener("click", function(event){
    //do something each time this is clicked
    console.log("clicked a box");
  });
});



