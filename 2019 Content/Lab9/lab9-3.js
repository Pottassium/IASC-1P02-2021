function addNumbers(){

  //Create a new variable and set it equal to the value of the HTML input text and cast it to be a number
  var number1 = Number(document.getElementById("num1").value);
  var number2 = Number(document.getElementById("num2").value);

  //Create a new variable and set it equal to the added value of the fields above
  var total = number1 + number2;

  //Print the total value out to the screen
  document.getElementById("output").innerHTML = total;
}
