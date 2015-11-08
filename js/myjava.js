$(document).ready(function(){
	$('#b1').click(function(){
	    $('#b1').velocity({marginLeft: -5}, {duration:1500, easing:"easelnOutExpo"});
	    $("#b2").velocity({opacity:0, blur:30}, 200);
	    $("#b3").velocity({opacity:0, blur:30}, 200);
	    $("#b4").velocity({opacity:0, blur:30}, 200);
	    $("#b5").velocity({opacity:0, blur:30}, 200);
	    $("#b6").velocity({opacity:0, blur:30}, 200);
	  
		$('#Regresar').click(function(){
			$("#b1").velocity("reverse");
			$("#b2").velocity("reverse", {delay:1500});
		    $("#b3").velocity("reverse", {delay:1500});
		    $("#b4").velocity("reverse", {delay:1500});
		    $("#b5").velocity("reverse", {delay:1500});
		    $("#b6").velocity("reverse", {delay:1500});
		  });
		});
	$('#b2').click(function(){
	    $('#b2').velocity({marginLeft: -10}, {duration:1500, easing:"easelnOutExpo"});
	    $("#b1").velocity({opacity:0, blur:30}, 200);
	    $("#b3").velocity({opacity:0, blur:30}, 200);
	    $("#b4").velocity({opacity:0, blur:30}, 200);
	    $("#b5").velocity({opacity:0, blur:30}, 200);
	    $("#b6").velocity({opacity:0, blur:30}, 200);
	
		$('#Regresar').click(function(){
			$("#b2").velocity({marginLeft: 550}, {duration:1500, easing:"easelnOutExpo"});
			$("#b1").velocity({opacity:1, blur:0},{delay:1500});
		    $("#b3").velocity({opacity:1, blur:0},{delay:1500});
		    $("#b4").velocity({opacity:1, blur:0},{delay:1500});
		    $("#b5").velocity({opacity:1, blur:0},{delay:1500});
		    $("#b6").velocity({opacity:1, blur:0},{delay:1500});
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
