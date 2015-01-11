/**
 * @author Ian Monroe
 */



$(document).ready(function(){
   
   var strawstack;
   var current_straw;
   
   $("#coin_flip_button").click(function(event){
     console.log("flipping that coin.")
     $("#coin_flip_result").html("<img src='img/coin_flip.gif' />");
     if (flip_a_coin()){
     	flip_result = "<img src = 'img/heads.png' />";
     	
     }else{
     	flip_result = "<img src = 'img/tails.png' />";
     }
     setTimeout(function(){
     	$("#coin_flip_result").html(flip_result);
     	$("#coin_flip_result").fadeIn("slow");
     }, 1250);
     
   });
   
  $("#pick_a_number_button").click(function(event) {
       console.log("picking that number.")
       var lowlimit, highlimit;
       lowlimit = parseInt($("#slider-1").val());
       highlimit = parseInt($("#slider-2").val());
       console.log("low limit ="+lowlimit);
       console.log("high limit = "+highlimit);
       outcome = pick_a_number(lowlimit, highlimit);
       if (outcome < lowlimit){
       	outcome = parseInt(pick_a_number(lowlimit, highlimit))+parseInt(lowlimit);
       }
       $("#pick_a_number_result").html(outcome);
       
   });
 
   	$("#draw_straws_init").click(function(event) {
       console.log("initializing the strawstack");
       $("#draw_straws_result").html('');
       stack_size = $("#slider-3").val();
       strawstack = new Array();
       for (i=0 ;i<stack_size; i++){
       	strawstack[i] = "Long Straw";
       }
       bitch_straw = pick_a_number(0,(stack_size-1));
       strawstack[bitch_straw]= "<strong>Short Straw!!!</strong>";
       current_straw = 0;
       console.log("strawstack init complete, with "+stack_size+" straws.");
       $("#draw_straws_result").append('<p>All set.  There are '+stack_size+ ' straws. Use the button below to draw the first one.</p>');
       $("#draw_next_straw").fadeIn("slow");
   	});
 
 	
 	$("#draw_next_straw").click(function(event) {
 		if (current_straw < strawstack.length){
       $("#draw_straws_result").append('<p>'+strawstack[current_straw] +'</p>');
       current_straw++;
      }else{
      	$("#draw_straws_result").append('<p>No straws left!</p>');
      	$("#draw_next_straw").fadeOut("slow");

      }
   	});
 
 
 	$("#spin_button").click(function() {
 		console.log("running that spinner");
		$("#spinner_pointer").removeAttr('style');
		var deg = 10000 + Math.round(Math.random()*10000);
		var css = '-webkit-transform: rotate('+deg+'deg);';
		//$("#spinner_pointer").setAttr('style', css);
		$("#spinner_pointer").css('-webkit-transform', 'rotate('+deg+'deg)');
		$("#spinner_pointer").css('-webkit-transition', '-webkit-transform 5s ease-out');	 
		 
	});
	
	
	$("#select-background").live("change", function(event, ui) {
		console.log("changing that background");
		
		bg_choice = $(this).val();
		
		console.log(bg_choice);
		$("#spinner_background").removeAttr('style');
		
		if (bg_choice == 'None') {
			filename = "";
		}	else if (bg_choice == 'Compass') {
			filename = "img/bg/compass_rose.jpeg";
		}   else if (bg_choice == 'Clock') {
			filename = "img/bg/clock_face.jpeg";
		}   else if (bg_choice == 'Roulette'){
			filename = "img/bg/roulette.jpeg";
		}   else {filename = "";}
		
		
		$("#spinner_background").css("background-image", "url('"+filename+"')");
		$("#spinner_background").css("background-position", "center center");
		$("#spinner_background").css("background-repeat", "no-repeat");
		
		
	});
 
 
 });



function flip_a_coin(){
	//simple coin flip
	var outcome;
	var randomnumber=Math.floor(Math.random()*9);
	
	if (randomnumber < 5){
		outcome = 0;
	} else {
		outcome = 1;
	}	
	return outcome;
}


function pick_a_number(from, to){
       return Math.floor(Math.random() * (to - from + 1) + from);
    }
