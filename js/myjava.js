$(document).ready(function(){
	$('#R1').attr('disabled','disabled');
	$('#R2').attr('disabled','disabled');
	$('#R3').attr('disabled','disabled');
	$('#R4').attr('disabled','disabled');
	$('#R5').attr('disabled','disabled');
	$('#R6').attr('disabled','disabled');
	$('.listas').velocity({blur:30});
	$('#b1').click(function(){
	    $('#b1').velocity({marginLeft: -5}, {duration:1500, easing:"easelnOutExpo"});
	    $("#b2").velocity({opacity:0, blur:30});
	    $("#b2").attr('disabled','disabled');
	    $("#b3").velocity({opacity:0, blur:30});
	    $("#b3").attr('disabled','disabled');
	    $("#b4").velocity({opacity:0, blur:30});
	    $("#b4").attr('disabled','disabled');
	    $("#b5").velocity({opacity:0, blur:30});
	    $("#b5").attr('disabled','disabled');
	    $("#b6").velocity({opacity:0, blur:30});
	    $("#b6").attr('disabled','disabled');
	    $('#R1').velocity({marginLeft:45, opacity:1, blur:0})
		$("#R1").removeAttr('disabled');
		$("#L1").velocity({opacity:1, blur:0},{delay:1500});
	  
		$('#R1').click(function(){
			$("#b1").velocity({marginLeft: 175}, {duration:1500, easing:"easelnOutExpo"});
			$('#R1').velocity({marginLeft:-5, opacity:0, blur:30});
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
		    $("#L1").velocity({opacity:0, blur:30}, 200);

		  });
		});
	$('#b2').click(function(){
	    $('#b2').velocity({marginLeft: -5}, {duration:1500, easing:"easelnOutExpo"});
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
	    $('#R2').velocity({marginLeft:45, opacity:1, blur:0})
		$("#R2").removeAttr('disabled');
		$("#L2").velocity({opacity:1, blur:0},{delay:1500});
	
		$('#R2').click(function(){
			$("#b2").velocity({marginLeft: 550}, {duration:1500, easing:"easelnOutExpo"});
			$('#R2').velocity({marginLeft:-5, opacity:0, blur:30});
			$('#R2').attr('disabled','disabled');
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
		    $("#L2").velocity({opacity:0, blur:30}, 200);
	 	  });
		});
	$('#b3').click(function(){
	    $('#b3').velocity({marginLeft: -5}, {duration:1500, easing:"easelnOutExpo"});
	    $("#b1").velocity({opacity:0, blur:30}, 200);
	    $("#b1").attr('disabled','disabled');
	    $("#b2").velocity({opacity:0, blur:30}, 200);
	    $("#b2").attr('disabled','disabled');
	    $("#b4").velocity({opacity:0, blur:30}, 200);
	    $("#b4").attr('disabled','disabled');
	    $("#b5").velocity({opacity:0, blur:30}, 200);
	    $("#b5").attr('disabled','disabled');
	    $("#b6").velocity({opacity:0, blur:30}, 200);
	    $("#b6").attr('disabled','disabled');
	    $('#R3').velocity({marginLeft:45, opacity:1, blur:0})
		$("#R3").removeAttr('disabled');
		$("#L3").velocity({opacity:1, blur:0},{delay:1500});
	
		$('#R3').click(function(){
			$("#b3").velocity({marginLeft: 925}, {duration:1500, easing:"easelnOutExpo"});
			$('#R3').velocity({marginLeft:-5, opacity:0, blur:30});
			$('#R3').attr('disabled','disabled');
			$("#b1").velocity({opacity:1, blur:0},{delay:1500});
			$("#b1").removeAttr('disabled');
		    $("#b2").velocity({opacity:1, blur:0},{delay:1500});
		    $("#b2").removeAttr('disabled');
		    $("#b4").velocity({opacity:1, blur:0},{delay:1500});
		    $("#b4").removeAttr('disabled');
		    $("#b5").velocity({opacity:1, blur:0},{delay:1500});
		    $("#b5").removeAttr('disabled');
		    $("#b6").velocity({opacity:1, blur:0},{delay:1500});
		    $("#b6").removeAttr('disabled');
		    $("#L3").velocity({opacity:0, blur:30}, 200);
		    });
		});
		$('#b4').click(function(){
	    $('#b4').velocity({marginLeft: -5, marginTop:35}, {duration:1500, easing:"easelnOutExpo"});
	    $("#b2").velocity({opacity:0, blur:30});
	    $("#b2").attr('disabled','disabled');
	    $("#b3").velocity({opacity:0, blur:30});
	    $("#b3").attr('disabled','disabled');
	    $("#b1").velocity({opacity:0, blur:30});
	    $("#b1").attr('disabled','disabled');
	    $("#b5").velocity({opacity:0, blur:30});
	    $("#b5").attr('disabled','disabled');
	    $("#b6").velocity({opacity:0, blur:30});
	    $("#b6").attr('disabled','disabled');
	    $('#R4').velocity({marginLeft:45, opacity:1, blur:0})
		$("#R4").removeAttr('disabled');
		$("#L4").velocity({opacity:1, blur:0},{delay:1500});
	  
		$('#R4').click(function(){
			$("#b4").velocity({marginLeft: 175, marginTop:300}, {duration:1500, easing:"easelnOutExpo"});
			$('#R4').velocity({marginLeft:-5, opacity:0, blur:30});
			$('#R4').attr('disabled','disabled');
			$("#b2").velocity({opacity:1, blur:0},{delay:1500});
			$("#b2").removeAttr('disabled');
		    $("#b3").velocity({opacity:1, blur:0},{delay:1500});
		    $("#b3").removeAttr('disabled');
		    $("#b1").velocity({opacity:1, blur:0},{delay:1500});
		    $("#b1").removeAttr('disabled');
		    $("#b5").velocity({opacity:1, blur:0},{delay:1500});
		    $("#b5").removeAttr('disabled');
		    $("#b6").velocity({opacity:1, blur:0},{delay:1500});
		    $("#b6").removeAttr('disabled');
		    $("#L4").velocity({opacity:0, blur:30}, 200);

		  });
		});
	$('#b5').click(function(){
	    $('#b5').velocity({marginLeft: -5, marginTop:35}, {duration:1500, easing:"easelnOutExpo"});
	    $("#b1").velocity({opacity:0, blur:30}, 200);
	    $("#b1").attr('disabled','disabled');
	    $("#b3").velocity({opacity:0, blur:30}, 200);
	    $("#b3").attr('disabled','disabled');
	    $("#b4").velocity({opacity:0, blur:30}, 200);
	    $("#b4").attr('disabled','disabled');
	    $("#b2").velocity({opacity:0, blur:30}, 200);
	    $("#b2").attr('disabled','disabled');
	    $("#b6").velocity({opacity:0, blur:30}, 200);
	    $("#b6").attr('disabled','disabled');
	    $('#R5').velocity({marginLeft:45, opacity:1, blur:0})
		$("#R5").removeAttr('disabled');
		$("#L5").velocity({opacity:1, blur:0},{delay:1500});
	
		$('#R5').click(function(){
			$("#b5").velocity({marginLeft: 550, marginTop:300}, {duration:1500, easing:"easelnOutExpo"});
			$('#R5').velocity({marginLeft:-5, opacity:0, blur:30});
			$('#R5').attr('disabled','disabled');
			$("#b1").velocity({opacity:1, blur:0},{delay:1500});
			$("#b1").removeAttr('disabled');
		    $("#b3").velocity({opacity:1, blur:0},{delay:1500});
		    $("#b3").removeAttr('disabled');
		    $("#b4").velocity({opacity:1, blur:0},{delay:1500});
		    $("#b4").removeAttr('disabled');
		    $("#b2").velocity({opacity:1, blur:0},{delay:1500});
		    $("#b2").removeAttr('disabled');
		    $("#b6").velocity({opacity:1, blur:0},{delay:1500});
		    $("#b6").removeAttr('disabled');
		    $("#L5").velocity({opacity:0, blur:30}, 200);
	 	  });
		});
	$('#b6').click(function(){
	    $('#b6').velocity({marginLeft: -5, marginTop:35}, {duration:1500, easing:"easelnOutExpo"});
	    $("#b1").velocity({opacity:0, blur:30}, 200);
	    $("#b1").attr('disabled','disabled');
	    $("#b2").velocity({opacity:0, blur:30}, 200);
	    $("#b2").attr('disabled','disabled');
	    $("#b4").velocity({opacity:0, blur:30}, 200);
	    $("#b4").attr('disabled','disabled');
	    $("#b5").velocity({opacity:0, blur:30}, 200);
	    $("#b5").attr('disabled','disabled');
	    $("#b3").velocity({opacity:0, blur:30}, 200);
	    $("#b3").attr('disabled','disabled');
	    $('#R6').velocity({marginLeft:45, opacity:1, blur:0})
		$("#R6").removeAttr('disabled');
		$("#L6").velocity({opacity:1, blur:0},{delay:1500});
	
		$('#R6').click(function(){
			$("#b6").velocity({marginLeft: 925, marginTop:300}, {duration:1500, easing:"easelnOutExpo"});
			$('#R6').velocity({marginLeft:-5, opacity:0, blur:30});
			$('#R6').attr('disabled','disabled');
			$("#b1").velocity({opacity:1, blur:0},{delay:1500});
			$("#b1").removeAttr('disabled');
		    $("#b2").velocity({opacity:1, blur:0},{delay:1500});
		    $("#b2").removeAttr('disabled');
		    $("#b4").velocity({opacity:1, blur:0},{delay:1500});
		    $("#b4").removeAttr('disabled');
		    $("#b5").velocity({opacity:1, blur:0},{delay:1500});
		    $("#b5").removeAttr('disabled');
		    $("#b3").velocity({opacity:1, blur:0},{delay:1500});
		    $("#b3").removeAttr('disabled');
		    $("#L6").velocity({opacity:0, blur:30}, 200);
		    });
		});
});
