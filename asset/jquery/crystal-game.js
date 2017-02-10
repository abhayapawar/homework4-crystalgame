//$(document).ready(function(){
//var counter=0;
var total =0;
var lose =0;
var win= 0;
var min = 19; 
var max = 120; 
var targetNumber = Math.floor(Math.random() * (max - min + 1)) + min; 
$("#number-to-guess").html(targetNumber);
console.log(targetNumber);
	

	var crystal=[];
	for (var i=0; i<4; i++){
		crystal[i]={
			points:0
		}
		Assignvalue(crystal[i])
	}
	console.log(crystal);
    

var counter=0;
$(".img").each(function(){
    //setting the variable as a jquery object
    var image= $(this);
    //setting our value for the crystal
    image.attr("data-crystal", counter);
    image.on("click", function()
        {
            //converts the variable into a jquery object
            var clickedPic = $(this);
            //"data-crystal"is our index for crystals array 
            var crystalIndex = clickedPic.attr("data-crystal");
            //testing to see if points work
            console.log(crystal[crystalIndex]);
            // do not use "var total" because that would create a local variable, "total" retrieves it from line 18
            total=total+crystal[crystalIndex].points;
            $("#addpoints").html(total);

            if (total === targetNumber){ 
            win++;
            $("#wins").html("win :" + win);
            ResetGame();
            console.log("win") ;
            }
            else if (total>targetNumber) {
            lose++
            $("#losses").html("lose :" + lose);
            ResetGame();
            console.log("lose!")
            }

        });

    counter++;
});
 function  Assignvalue(crystal){
      	
		var min = 1; 
		var max = 12;
		crystal.points  = Math.floor(Math.random() * (max - min + 1)) + min; 
	}


function ResetGame(){
	total=0;
	$("#addpoints").html(total);
	  targetNumber = Math.floor(Math.random() * (max - min + 1)) + min;
	 $("#number-to-guess").html(targetNumber);
	 for ( var i=0; i<crystal.length; i++)
	 {
	 	Assignvalue(crystal[i])
	 }


}


//});
     