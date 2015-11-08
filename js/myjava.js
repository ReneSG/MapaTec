$(document).ready(function(){
	$('#R1').attr('disabled','disabled');
	$('#R2').attr('disabled','disabled');
	$('#R3').attr('disabled','disabled');
	$('#R4').attr('disabled','disabled');
	$('#R5').attr('disabled','disabled');
	$('#R6').attr('disabled','disabled');
	$('#b1').click(function(){
	    $('#b1').velocity({marginLeft: -5}, {duration:1500, easing:"easelnOutExpo"});
	    $("#b2").velocity({opacity:0, blur:30}, {hide:"slow"});
	    $("#b2").attr('disabled','disabled');
	    $("#b3").velocity({opacity:0, blur:30}, {hide:"slow"});
	    $("#b3").attr('disabled','disabled');
	    $("#b4").velocity({opacity:0, blur:30}, {hide:"slow"});
	    $("#b4").attr('disabled','disabled');
	    $("#b5").velocity({opacity:0, blur:30}, {hide:"slow"});
	    $("#b5").attr('disabled','disabled');
	    $("#b6").velocity({opacity:0, blur:30}, {hide:"slow"});
	    $("#b6").attr('disabled','disabled');
	    $('#R1').velocity({marginLeft:60, opacity:1})
		$("#R1").removeAttr('disabled');
	  
		$('#R1').click(function(){
			$("#b1").velocity({marginLeft: 175}, {duration:1500, easing:"easelnOutExpo"});
			$('#R1').velocity({marginLeft:-5, opacity:0, blur:30}, {hide:"slow"});
			$('#R1').attr('disabled','disabled');
			$("#b2").velocity({opacity:1, blur:0},{delay:1500});
			$("#b2").removeAttr('disabled');
		    $("#b3").velocity({opacity:1, blur:0},{delay:1500});
		    $("#b3").removeAttr('disabled');
		    $("#b4").velocity({opacity:1, blur:0},{delay:1500});
		    $("#b4").removeAttr('disabled');
		    $("#b5").velocity({opacity:1, blur:0},{delay:1500});
		    $("#b5").removeAttr('disabled');
		    $("#b6").velocity({opacity:1, blur:0},{delay:1500});
		    $("#b6").removeAttr('disabled');

		  });
		});
	$('#b2').click(function(){
	    $('#b2').velocity({marginLeft: -10}, {duration:1500, easing:"easelnOutExpo"});
	    $("#b1").velocity({opacity:0, blur:30}, 200);
	    $("#b1").attr('disabled','disabled');
	    $("#b3").velocity({opacity:0, blur:30}, 200);
	    $("#b3").attr('disabled','disabled');
	    $("#b4").velocity({opacity:0, blur:30}, 200);
	    $("#b4").attr('disabled','disabled');
	    $("#b5").velocity({opacity:0, blur:30}, 200);
	    $("#b5").attr('disabled','disabled');
	    $("#b6").velocity({opacity:0, blur:30}, 200);
	    $("#b6").attr('disabled','disabled');
	
		$('#Regresar').click(function(){
			$("#b2").velocity({marginLeft: 550}, {duration:1500, easing:"easelnOutExpo"});
			$("#b1").velocity({opacity:1, blur:0},{delay:1500});
			$("#b1").removeAttr('disabled');
		    $("#b3").velocity({opacity:1, blur:0},{delay:1500});
		    $("#b3").removeAttr('disabled');
		    $("#b4").velocity({opacity:1, blur:0},{delay:1500});
		    $("#b4").removeAttr('disabled');
		    $("#b5").velocity({opacity:1, blur:0},{delay:1500});
		    $("#b5").removeAttr('disabled');
		    $("#b6").velocity({opacity:1, blur:0},{delay:1500});
		    $("#b6").removeAttr('disabled');
	 	  });
		});
	$('#b3').click(function(){
	    $('#b3').velocity({marginLeft: -15}, {duration:1500, easing:"easelnOutExpo"});
	    $("#b1").velocity({opacity:0, blur:30}, 200);
	    $("#b2").velocity({opacity:0, blur:30}, 200);
	    $("#b4").velocity({opacity:0, blur:30}, 200);
	    $("#b5").velocity({opacity:0, blur:30}, 200);
	    $("#b6").velocity({opacity:0, blur:30}, 200);
	
		$('#Regresar').click(function(){
			$("#b3").velocity({marginLeft: 925}, {duration:1500, easing:"easelnOutExpo"});
			$("#b1").velocity({opacity:1, blur:0},{delay:1500});
		    $("#b2").velocity({opacity:1, blur:0},{delay:1500});
		    $("#b4").velocity({opacity:1, blur:0},{delay:1500});
		    $("#b5").velocity({opacity:1, blur:0},{delay:1500});
		    $("#b6").velocity({opacity:1, blur:0},{delay:1500});
	 	  });
		});
});
