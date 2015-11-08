$(document).ready(function(){
	$('#R1').attr('disabled','disabled');
	$('#R2').attr('disabled','disabled');
	$('#R3').attr('disabled','disabled');
	$('#R4').attr('disabled','disabled');
	$('#R5').attr('disabled','disabled');
	$('#R6').attr('disabled','disabled');
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
		    });
		});
});
function initMap() {
  var myLatLng = {lat: 25.650940, lng: -100.289849};
  var info = ["Hola", "Adios","123"]

  var mapOptions = {
    zoom: 17,
    center: myLatLng,
    disableDefaultUI: true
  }
  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);

  // Create a marker and set its position.
  var marker = new google.maps.Marker({
    map: map,
    position: myLatLng,
    title: 'Hello World!'
  });
 //Posición del marcador con comentario
var markerOptions = {
    position: new google.maps.LatLng(myLatLng),
    map: map
};
//Información que despliega el marcador
var infoWindowOptions = {
    content: info[1]
};
//Desplegar información
var infoWindow = new google.maps.InfoWindow(infoWindowOptions);
google.maps.event.addListener(marker,'click',function(e){
  //Llamada de la función
  infoWindow.open(map, marker); 
});
}
