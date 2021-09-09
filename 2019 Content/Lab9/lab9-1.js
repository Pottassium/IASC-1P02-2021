//Create button in HTML that calls stopTime()
//When the page loads, get the current full date information into a variable initialTime

var initialTime = new Date();

//stopTime() -> get the current full date information into a *different* variable currentTime

function stopTime(){
  var currentTime = new Date();
  console.log(initialTime.getTime());
  console.log(currentTime.getTime());

  //Do some math - subtract initialTime from currentTime to get the number of milliseconds the page has been loaded for.  Divide by 600 to get # of seconds

  var timeDifference = (currentTime - initialTime) / 1000;
  console.log(timeDifference);

  alert("You have been on the page for: " + timeDifference + " seconds");

  //Output with a popup


}
