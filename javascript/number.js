/*$("#numberSubmit").click(function(){
                         alert("Success");
                         });*/

var allNumbers = [];
var count = 0;
var sum = 0;
var average;

DisplayStats (); //from David Anderson solution online 

$('#submit').on( 'click', processForm);
$('#reset').on ('click', reset);
$('#the-number').on ('focus', clearMessage);

function processForm( evt ) { //ensure user is entering an acceptable number 
  var val = $('#the-number').val(); //parseInt and parseFloat: two ways of turning string into a number. parseInt wants full numbers, parseFloat will allow decimals. 
  var num = parseFloat( val );
  if ( isNaN(num)) { //if it's not a number...
    showMessage('Sorry, that is not a number I understand.'); //display this message
  } else {
    processNumber(num);
  }
  evt.preventDefault(); //prevents browser from assuming action intended of the form 
}

function processNumber(number){ 
  numbers.push(number); //.push = pushing something onto the end of the array
  ComputeStats();
  DisplayStats();
}

function ComputeStats(){
  var i;
  var sum2 = 0;
  var diff;
  var variance;
  
  count = numbers.length;
  
  sum = 0;
  for (i = 0; i < count; ++i){
    sum += numbers[i]; // += means add it to the thing on the left
  }
  
  if(count > 0) { //calculate the average
    average = sum / count;
  } else {
    average = undefined;
  }
}

function DisplayStats (){
  displayValue('#count', count);
  displayValue('#sum', sunm);
  displayValue('#average', average);
  
  function displayValue(selector, value){
    if(value === undefined) {
      $(selector).empty();
    } else {
      $(selector).text(value);
    }
  }
}

function reset(){
  numbers = [];
  ComputeStats();
  DisplayStats();     
}
function showMessage(msg){
  $('#message').text(msg);
}

function clearMessage(){
  $('#message').text(msg);
}

//below was attempt at assignment before class walkthrough 
/*document.getElementById("numberSubmit").onclick = function()
{
  var numberEntered = document.getElementById("numberEntered").value;
  document.getElementById("output").innerHTML = "Number/numbers entered: " +numberEntered;
  allNumbers.push(numberEntered);
}

document.getElementById("numberAll").onclick = function()
{
  var myNumbers = "Your numbers: ";
  for(numberEntered in allNumbers) myNumbers += allNumbers[numberEntered] + ", ";
  document.getElementById("output").innerHTML = myNumbers;
}*/

/*document.getElementById("numberSum").onclick = function() //attempt at getting sum of numbers 
{
  var addNumbers = "Sum of your numbers: ";
  for(numberEntered in allNumbers) addNumbers += allNumbers[numberEntered] + ", ";
  document.getElementById("output").innerHTML = myNumbers;
}*/

 

