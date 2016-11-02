//JS Donut Counter Lab



function countDonuts(){
  var guests = prompt("How many donuts you got? ");
  var donuts = prompt("How many guests you got?");
  if(donuts >= guests){
    alert("There are enough donuts")
  }
  else {
    alert("There are NOT enough donuts")
  }
}

countDonuts();

//declare 2 variables one for guests and one for donuts
//use prompt method to bring up a dialog box in the browser for the user to insert the number of guests and donuts.
//use parseInt to convert the users answer from a string to an integer.

//write a conditional to check if there are enough donuts

  //alert the user with a message telling them the numbers of donuts and guests, and if there are enough donuts for each guest.
