$(document).ready(function(){
	$('#R1').attr('disabled','disabled');
	$('#R2').attr('disabled','disabled');
	$('#R3').attr('disabled','disabled');
	$('#R4').attr('disabled','disabled');
	$('#R5').attr('disabled','disabled');
	$('#R6').attr('disabled','disabled');
	$('.listas').velocity({blur:30});
	$('.AII').attr('disabled','disabled');
	$('.Jubileo').attr('disabled','disabled');
	$('.CEDES').attr('disabled','disabled');
	$('.Centrales').attr('disabled','disabled');
	$('.TFB').attr('disabled','disabled');
	$('.SB').attr('disabled','disabled');
	$('.LChoza').attr('disabled','disabled');
	$('#AI').attr('disabled','disabled');
	$('#AIII').attr('disabled','disabled');
	$('#AIV').attr('disabled','disabled');
	$('#BT').attr('disabled','disabled');
	$('#AVI').attr('disabled','disabled');
	$('#AVII').attr('disabled','disabled');
	$('#CETEC').attr('disabled','disabled');
	$('#CIAP').attr('disabled','disabled');
	$('#Rec').attr('disabled','disabled');
	$('#BB').attr('disabled','disabled');
	$('#ALE').attr('disabled','disabled');
	$('#LC').attr('disabled','disabled');
	$('#Comedor').attr('disabled','disabled');
	$('#Carreta').attr('disabled','disabled');
	$('#GT').attr('disabled','disabled');
	$('#ET').attr('disabled','disabled');
	$('#DA').attr('disabled','disabled');
	$('#CES').attr('disabled','disabled');
	$('#CDT').attr('disabled','disabled');
	$('#CS').attr('disabled','disabled');
	$('#EI').attr('disabled','disabled');
	$('#EII').attr('disabled','disabled');
	$('#EIII').attr('disabled','disabled');
	$('#EIV').attr('disabled','disabled');
	$('#EV').attr('disabled','disabled');
	$('#EVI').attr('disabled','disabled');
	$('#EVII').attr('disabled','disabled');
	$('#EVIII').attr('disabled','disabled');
	$('#EX').attr('disabled','disabled');
	$('#EXI').attr('disabled','disabled');
	$('#EXII').attr('disabled','disabled');
	$('#EXIII').attr('disabled','disabled');
	$('#EXV').attr('disabled','disabled');
	$('#SRec').attr('disabled','disabled');
	$('#SCIAP').attr('disabled','disabled');
	$('#SBT').attr('disabled','disabled');
	$('#SPD').attr('disabled','disabled');
	$('#SAIV').attr('disabled','disabled');
	$('#SCE').attr('disabled','disabled');
	$('#CAVII').attr('disabled','disabled');
	$('#CCE').attr('disabled','disabled');


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
		$("#AI").removeAttr('disabled');
		$("#AIII").removeAttr('disabled');
		$("#AIV").removeAttr('disabled');
		$("#BT").removeAttr('disabled');
		$("#AVI").removeAttr('disabled');
		$("#AVII").removeAttr('disabled');
		$("#CETEC").removeAttr('disabled');
		$("#CIAP").removeAttr('disabled');
		$("#Rec").removeAttr('disabled');
		$("#ALE").removeAttr('disabled');
		$("#LC").removeAttr('disabled');
		$("#BB").removeAttr('disabled');
		$("#A2").removeAttr('disabled');
		$("#CEDE").removeAttr('disabled');
		$("#CE").removeAttr('disabled');
	  
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
		    $("#AI").attr('disabled','disabled');
			$("#AIII").attr('disabled','disabled');
			$("#AIV").attr('disabled','disabled');
			$("#BT").attr('disabled','disabled');
			$("#AVI").attr('disabled','disabled');
			$("#AVII").attr('disabled','disabled');
			$("#CETEC").attr('disabled','disabled');
			$("#CIAP").attr('disabled','disabled');
			$("#Rec").attr('disabled','disabled');
			$("#ALE").attr('disabled','disabled');
			$("#LC").attr('disabled','disabled');
			$("#BB").attr('disabled','disabled');
			$("#A2").attr('disabled','disabled');
			$("#CEDE").attr('disabled','disabled');
			$("#CE").attr('disabled','disabled');

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
		$("#Central").removeAttr('disabled');
		$("#Jub").removeAttr('disabled');
		$("#Comedor").removeAttr('disabled');
		$("#Carreta").removeAttr('disabled');
		$("#Food").removeAttr('disabled');
		$("#Star").removeAttr('disabled');
		$("#SS").removeAttr('disabled');
	
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
		    $("#Central").attr('disabled','disabled');
			$("#Jub").attr('disabled','disabled');
			$("#Comedor").attr('disabled','disabled');
			$("#Carreta").attr('disabled','disabled');
			$("#Food").attr('disabled','disabled');
			$("#Star").attr('disabled','disabled');
			$("#SS").attr('disabled','disabled');
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
		$("#GT").removeAttr('disabled');
		$("#ET").removeAttr('disabled');
		$("#DA").removeAttr('disabled');
		$("#CES").removeAttr('disabled');
		$("#CDT").removeAttr('disabled');
		$("#GCE").removeAttr('disabled');
		$("#CS").removeAttr('disabled');
	
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
		    $("#GT").attr('disabled','disabled');
			$("#ET").attr('disabled','disabled');
			$("#DA").attr('disabled','disabled');
			$("#CES").attr('disabled','disabled');
			$("#CDT").attr('disabled','disabled');
			$("#GCE").attr('disabled','disabled');
			$("#CS").attr('disabled','disabled');
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
		$("#EI").removeAttr('disabled');
		$("#EII").removeAttr('disabled');
		$("#EII").removeAttr('disabled');
		$("#EIV").removeAttr('disabled');
		$("#EV").removeAttr('disabled');
		$("#EVI").removeAttr('disabled');
		$("#EVII").removeAttr('disabled');
		$("#EVIII").removeAttr('disabled');
		$("#EX").removeAttr('disabled');
		$("#EXI").removeAttr('disabled');
		$("#EXII").removeAttr('disabled');
		$("#EXIII").removeAttr('disabled');
		$("#EXV").removeAttr('disabled');
		$("#Choza").removeAttr('disabled');
	  
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
		    $("#EI").attr('disabled','disabled');
			$("#EII").attr('disabled','disabled');
			$("#EIII").attr('disabled','disabled');
			$("#EIV").attr('disabled','disabled');
			$("#EV").attr('disabled','disabled');
			$("#EVI").attr('disabled','disabled');
			$("#EVII").attr('disabled','disabled');
			$("#EVIII").attr('disabled','disabled');
			$("#EX").attr('disabled','disabled');
			$("#EXI").attr('disabled','disabled');
			$("#EXII").attr('disabled','disabled');
			$("#EXIII").attr('disabled','disabled');
			$("#EV").attr('disabled','disabled');
			$("#Choza").attr('disabled','disabled');

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
		$("#SRec").removeAttr('disabled');
		$("#SCIAP").removeAttr('disabled');
		$("#SBT").removeAttr('disabled');
		$("#SPD").removeAttr('disabled');
		$("#SAIV").removeAttr('disabled');
		$("#SCE").removeAttr('disabled');
	
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
		    $("#SRec").attr('disabled','disabled');
			$("#SCIAP").attr('disabled','disabled');
			$("#SBT").attr('disabled','disabled');
			$("#SPD").attr('disabled','disabled');
			$("#SAIV").attr('disabled','disabled');
			$("#SCE").attr('disabled','disabled');
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
		$("#Santander").removeAttr('disabled');
		$("#Bancomer").removeAttr('disabled');
		$("#CCIAP").removeAttr('disabled');
		$("#CAVII").removeAttr('disabled');
		$("#CCE").removeAttr('disabled');
		$("#CCC").removeAttr('disabled');
		$("#CCEDES").removeAttr('disabled');
		$("#CaCentral").removeAttr('disabled');
		$("#CaChoza").removeAttr('disabled');
		$("#CaStar").removeAttr('disabled');
		$("#CaJub").removeAttr('disabled');
		$("#Bookshop").removeAttr('disabled');
		$("#Tiendatec").removeAttr('disabled');
		$("#SE").removeAttr('disabled');
	
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
		    $("#Santander").attr('disabled','disabled');
			$("#Bancomer").attr('disabled','disabled');
			$("#CCIAP").attr('disabled','disabled');
			$("#CAVII").attr('disabled','disabled');
			$("#CCE").attr('disabled','disabled');
			$("#CCC").attr('disabled','disabled');
			$("#CCEDES").attr('disabled','disabled');
			$("#CaCentral").attr('disabled','disabled');
			$("#CaChoza").attr('disabled','disabled');
			$("#CaStar").attr('disabled','disabled');
			$("#CaJub").attr('disabled','disabled');
			$("#Bookshop").attr('disabled','disabled');
			$("#Tiendatec").attr('disabled','disabled');
			$("#SE").attr('disabled','disabled');
		    });
		});
	$('.AII').click(function(){

		});
	$('.Jubileo').click(function(){

		});
	$('.CEDES').click(function(){

		});
	$('.Centrales').click(function(){

		});
	$('.TFB').click(function(){

		});
	$('.SB').click(function(){

		});
	$('.LChoza').click(function(){

		});
	$('#AI').click(function(){
			$('#b1').velocity({marginLeft: -5}, {duration:1500, easing:"easelnOutExpo"});
		});
	$('#AIII').click(function(){

		});
	$('#AIV').click(function(){

		});
	$('#BT').click(function(){

		});
	$('#AVI').click(function(){

		});
	$('#AVII').click(function(){

		});
	$('#CETEC').click(function(){

		});
	$('#CIAP').click(function(){

		});
	$('#Rec').click(function(){

		});
	$('#BB').click(function(){

		});
	$('#ALE').click(function(){

		});
	$('#LC').click(function(){

		});
	$('#Comedor').click(function(){

		});
	$('#Carreta').click(function(){

		});
	$('#GT').click(function(){

		});
	$('#ET').click(function(){

		});
	$('#DA').click(function(){

		});
	$('#CES').click(function(){

		});
	$('#CDT').click(function(){

		});
	$('#CS').click(function(){

		});
	$('#EI').click(function(){

		});
	$('#EII').click(function(){

		});
	$('#EIII').click(function(){

		});
	$('#EIV').click(function(){

		});
	$('#EV').click(function(){

		});
	$('#EVI').click(function(){

		});
	$('#EVII').click(function(){

		});
	$('#EVIII').click(function(){

		});
	$('#EX').click(function(){

		});
	$('#EXI').click(function(){

		});
	$('#EXII').click(function(){

		});
	$('#EXIII').click(function(){

		});
	$('#EXV').click(function(){

		});
	$('#SRec').click(function(){

		});
	$('#SCIAP').click(function(){

		});
	$('#SBT').click(function(){

		});
	$('#SPD').click(function(){

		});
	$('#SAIV').click(function(){

		});
	$('#SCE').click(function(){

		});
	$('#CAVII').click(function(){

		});
	$('#CCE').click(function(){

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
