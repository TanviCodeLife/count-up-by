//check for NaN, undefined, empty values, negative values
    function isNumber(inputTo) {
      var condition = (inputTo === undefined  || isNaN(inputTo) || inputTo || inputTo < 0);
      return condition;
    }

//check for valid numbers and print output
    function checkValidConditionAndOutput(inputCountTo, inputCountTo){
      if (isNumber(inputCountTo) || isNumber(inputCountBy)){
        alert("Please enter a valid number!");
      }
      else {
        var outputArray=[];
        for (var i = 0; i <= parseInt(inputCountTo); i += parseInt(inputCountBy)) {
          outputArray.push(i)
        }
        $("ul#ouputNum").append("<li>Count to: " + inputCountTo + "</li>");
        $("ul#ouputNum").append("<li>Count to: " + inputCountBy + "</li>");
        $("ul#ouputNum").append("<li>Output: " + outputArray + "</li>");
      }
    }


$(document).ready(function(){
  $("form#form1").submit(function(event){
    event.preventDefault();
//user-input
    var inCountTo = $("#countTo").val();
     //console.log(inputCountTo);
    var inCountBy = $("#countBy").val();
     //console.log(inputCountBy);
     checkValidConditionAndOutput(inCountTo, inCountBy);
     event.preventDefault();
  });
});
