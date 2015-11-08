$(document).ready(function(){
	$('#b1').click(function(){
	    $('#b1').velocity({marginLeft: 700}, {duration:2000, easing:"easelnOutExpo"});
	    $("#b2").velocity({opacity:0, blur:30}, 200);
	    $("#b3").velocity({opacity:0, blur:30}, 200);
	    $("#b4").velocity({opacity:0, blur:30}, 200);
	    $("#b5").velocity({opacity:0, blur:30}, 200);
	    $("#b6").velocity({opacity:0, blur:30}, 200);
	  });
	$('#Regresar').click(function(){
		$("#b1").velocity("reverse");
		$("#b2").velocity("reverse", {delay:1500});
	    $("#b3").velocity("reverse", {delay:1500});
	    $("#b4").velocity("reverse", {delay:1500});
	    $("#b5").velocity("reverse", {delay:1500});
	    $("#b6").velocity("reverse", {delay:1500});
	  });
});
