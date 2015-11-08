$(document).ready(function(){
	$('#R1').attr('disabled','disabled');
	$('#R2').attr('disabled','disabled');
	$('#R3').attr('disabled','disabled');
	$('#R4').attr('disabled','disabled');
	$('#R5').attr('disabled','disabled');
	$('#R6').attr('disabled','disabled');
	$('.listas').velocity({blur:30});
	$('#AI').attr('disabled','disabled');
	$('#AII').attr('disabled','disabled');
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
	$('#CE').attr('disabled','disabled');
	$('#CEDE').attr('disabled','disabled');
	$('#Central').attr('disabled','disabled');
	$('#Jub').attr('disabled','disabled');
	$('#Comedor').attr('disabled','disabled');
	$('#Carreta').attr('disabled','disabled');
	$('#Food').attr('disabled','disabled');
	$('#Star').attr('disabled','disabled');
	$('#SS').attr('disabled','disabled');
	$('#GT').attr('disabled','disabled');
	$('#ET').attr('disabled','disabled');
	$('#DA').attr('disabled','disabled');
	$('#CES').attr('disabled','disabled');
	$('#CDT').attr('disabled','disabled');
	$('#GCE').attr('disabled','disabled');
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
	$('#Choza').attr('disabled','disabled');
	$('#SRec').attr('disabled','disabled');
	$('#SCIAP').attr('disabled','disabled');
	$('#SBT').attr('disabled','disabled');
	$('#SPD').attr('disabled','disabled');
	$('#SAIV').attr('disabled','disabled');
	$('#SCE').attr('disabled','disabled');
	$('#Santander').attr('disabled','disabled');
	$('#Bancomer').attr('disabled','disabled');
	$('#CCIAP').attr('disabled','disabled');
	$('#CAVII').attr('disabled','disabled');
	$('#CCE').attr('disabled','disabled');
	$('#CCC').attr('disabled','disabled');
	$('#CCEDES').attr('disabled','disabled');
	$('#CaCentral').attr('disabled','disabled');
	$('#CaJub').attr('disabled','disabled');
	$('#CaChoza').attr('disabled','disabled');
	$('#CaStar').attr('disabled','disabled');
	$('#Bookshop').attr('disabled','disabled');
	$('#Tiendatec').attr('disabled','disabled');
	$('#SE').attr('disabled','disabled');
	$('#L1').velocity("scroll", {duration:0});


	$('#b1').click(function(){
	    $('#b1').velocity({marginLeft: -5}, {duration:1500, easing:"easelnOutExpo"});
	    $("#L1").velocity({marginLeft: 800}, {duration:1500, easing:"easelnOutExpo"});
	    $("#L1").velocity({opacity:1, blur:0});
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
		$("#AII").removeAttr('disabled');
		$("#CEDE").removeAttr('disabled');
		$("#CE").removeAttr('disabled');
	  
		$('#R1').click(function(){
			$("#b1").velocity({marginLeft: 175}, {duration:1500, easing:"easelnOutExpo"});
			$('#R1').velocity({marginLeft:-5, opacity:0, blur:30});
			$('#L1').velocity({marginLeft:300, opacity:0, blur:30});
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
			$("#AII").attr('disabled','disabled');
			$("#CEDE").attr('disabled','disabled');
			$("#CE").attr('disabled','disabled');

		  });
		});
	$('#b2').click(function(){
	    $('#b2').velocity({marginLeft: -5}, {duration:1500, easing:"easelnOutExpo"});
	    $("#L2").velocity({marginLeft: 750}, {duration:1500, easing:"easelnOutExpo"});
	    $("#L2").velocity({opacity:1, blur:0});
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
			$('#L2').velocity({marginLeft:300, opacity:0, blur:30});
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
	    $("#L3").velocity({marginLeft: 750}, {duration:1500, easing:"easelnOutExpo"});
	    $("#L3").velocity({opacity:1, blur:0});
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
			$('#L3').velocity({marginLeft:300, opacity:0, blur:30});
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
	    $("#L4").velocity({marginLeft: 750}, {duration:1500, easing:"easelnOutExpo"});
	    $("#L4").velocity({opacity:1, blur:0});
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
			$('#L4').velocity({marginLeft:300, opacity:0, blur:30});
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
	    $("#L5").velocity({marginLeft: 750}, {duration:1500, easing:"easelnOutExpo"});
	    $("#L5").velocity({opacity:1, blur:0});
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
			$('#L5').velocity({marginLeft:300, opacity:0, blur:30});
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
	    $("#L6").velocity({marginLeft: 750}, {duration:1500, easing:"easelnOutExpo"});
	    $("#L6").velocity({opacity:1, blur:0});
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
			$('#L6').velocity({marginLeft:300, opacity:0, blur:30});
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
	
	$('#AI').click(function(){
		$('#map').velocity("scroll", {duration:500, easing:"ease-in-out"});
			var myLatLng = {lat: 25.651934, lng: -100.289630};
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

		});
	$('#AII').click(function(){
		$('#map').velocity("scroll", {duration:500, easing:"ease-in-out"});
		var myLatLng = {lat: 25.650940, lng: -100.289849};
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
		});
	$('#AIII').click(function(){
		$('#map').velocity("scroll", {duration:500, easing:"ease-in-out"});
		var myLatLng = {lat: 25.649929, lng: -100.290205};
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
		});
	$('#AIV').click(function(){
		$('#map').velocity("scroll", {duration:500, easing:"ease-in-out"});
		var myLatLng = {lat: 25.649677, lng: -100.288984};
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
		});
	$('#BT').click(function(){
		$('#map').velocity("scroll", {duration:500, easing:"ease-in-out"});
		var myLatLng = {lat: 25.652265, lng: -100.289406};
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
		});
	$('#AVI').click(function(){
		$('#map').velocity("scroll", {duration:500, easing:"ease-in-out"});
		var myLatLng = {lat: 25.651581, lng: -100.287959};
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
		});
	$('#AVII').click(function(){
		$('#map').velocity("scroll", {duration:500, easing:"ease-in-out"});
			var myLatLng = {lat: 25.649839, lng: -100.288190};
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
		});
	$('#CETEC').click(function(){
		$('#map').velocity("scroll", {duration:500, easing:"ease-in-out"});
		var myLatLng = {lat: 25.650454, lng: -100.290928};
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
		});
	$('#CIAP').click(function(){
		$('#map').velocity("scroll", {duration:500, easing:"ease-in-out"});
		var myLatLng = {lat: 25.652884, lng: -100.289762};
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
		});
	$('#Rec').click(function(){
		$('#map').velocity("scroll", {duration:500, easing:"ease-in-out"});
		var myLatLng = {lat: 25.651460, lng: -100.290887};
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
		});
	$('#CE').click(function(){
		$('#map').velocity("scroll", {duration:500, easing:"ease-in-out"});
	var myLatLng = {lat: 25.648716, lng: -100.289839};
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
		});
	$('#CEDE').click(function(){
		$('#map').velocity("scroll", {duration:500, easing:"ease-in-out"});
	var myLatLng = {lat: 25.653669, lng: -100.292534};
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
		});
	$('#BB').click(function(){
		$('#map').velocity("scroll", {duration:500, easing:"ease-in-out"});
		var myLatLng = {lat: 25.650940, lng: -100.289849};
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
		});
	$('#ALE').click(function(){
		$('#map').velocity("scroll", {duration:500, easing:"ease-in-out"});
		var myLatLng = {lat: 25.650652, lng: -100.285745};
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
		});
	$('#LC').click(function(){
		$('#map').velocity("scroll", {duration:500, easing:"ease-in-out"});
		var myLatLng = {lat: 25.651278, lng: -100.289004};
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
		});
	$('#Central').click(function(){
		$('#map').velocity("scroll", {duration:500, easing:"ease-in-out"});
	var myLatLng = {lat: 25.651492, lng: -100.288851};
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
		});
	$('#Jub').click(function(){
		$('#map').velocity("scroll", {duration:500, easing:"ease-in-out"});
		var myLatLng = {lat: 25.648716, lng: -100.289839};
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
		});
	$('#Comedor').click(function(){
		$('#map').velocity("scroll", {duration:500, easing:"ease-in-out"});
		var myLatLng = {lat: 25.652819, lng: -100.292101};
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
		});
	$('#Carreta').click(function(){
		$('#map').velocity("scroll", {duration:500, easing:"ease-in-out"});
		var myLatLng = {lat: 25.651452, lng: -100.290080};
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
		});
	$('#Food').click(function(){
		$('#map').velocity("scroll", {duration:500, easing:"ease-in-out"});
	var myLatLng = {lat: 25.649563, lng: -100.290381};
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
		});
	$('#Star').click(function(){
		$('#map').velocity("scroll", {duration:500, easing:"ease-in-out"});
	var myLatLng = {lat: 25.652142, lng: -100.290035};
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
		});
	$('#SS').click(function(){
		$('#map').velocity("scroll", {duration:500, easing:"ease-in-out"});
	var myLatLng = {lat: 25.652109, lng: -100.289846};
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
		});
	$('#GT').click(function(){
		$('#map').velocity("scroll", {duration:500, easing:"ease-in-out"});
		var myLatLng = {lat: 25.650684, lng: -100.287356};
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
		});
	$('#ET').click(function(){
		$('#map').velocity("scroll", {duration:500, easing:"ease-in-out"});
		var myLatLng = {lat: 25.652139, lng: -100.286419};
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
		});
	$('#DA').click(function(){
		$('#map').velocity("scroll", {duration:500, easing:"ease-in-out"});
		var myLatLng = {lat: 25.651449, lng: -100.288446};
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
		});
	$('#CES').click(function(){
		$('#map').velocity("scroll", {duration:500, easing:"ease-in-out"});
		var myLatLng = {lat: 25.655824, lng: -100.287463};
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
		});
	$('#CDT').click(function(){
		$('#map').velocity("scroll", {duration:500, easing:"ease-in-out"});
		var myLatLng = {lat: 25.649855, lng: -100.285433};
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
		});
	$('#GCE').click(function(){
		$('#map').velocity("scroll", {duration:500, easing:"ease-in-out"});
	var myLatLng = {lat: 25.648716, lng: -100.289839};
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
		});
	$('#CS').click(function(){
		$('#map').velocity("scroll", {duration:500, easing:"ease-in-out"});
		var myLatLng = {lat: 25.652003, lng: -100.292257};
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
		});
	$('#EI').click(function(){
		$('#map').velocity("scroll", {duration:500, easing:"ease-in-out"});
		var myLatLng = {lat: 25.652773, lng: -100.291253};
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
		});
	$('#EII').click(function(){
		$('#map').velocity("scroll", {duration:500, easing:"ease-in-out"});
		var myLatLng = {lat: 25.653103, lng: -100.290846};
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
		});
	$('#EIII').click(function(){
		$('#map').velocity("scroll", {duration:500, easing:"ease-in-out"});
		var myLatLng = {lat: 25.653572, lng: -100.290302};
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
		});
	$('#EIV').click(function(){
		$('#map').velocity("scroll", {duration:500, easing:"ease-in-out"});
		var myLatLng = {lat: 25.653122, lng: -100.291451};
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
		});
	$('#EV').click(function(){
		$('#map').velocity("scroll", {duration:500, easing:"ease-in-out"});
		var myLatLng = {lat: 25.653487, lng: -100.291044};
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
		});
	$('#EVI').click(function(){
		$('#map').velocity("scroll", {duration:500, easing:"ease-in-out"});
		var myLatLng = {lat: 25.653803, lng: -100.290644};
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
		});
	$('#EVII').click(function(){
		$('#map').velocity("scroll", {duration:500, easing:"ease-in-out"});
		var myLatLng = {lat: 25.653466, lng: -100.291622};
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
		});
	$('#EVIII').click(function(){
		$('#map').velocity("scroll", {duration:500, easing:"ease-in-out"});
		var myLatLng = {lat: 25.653804, lng: -100.291366};
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
		});
	$('#EX').click(function(){
		$('#map').velocity("scroll", {duration:500, easing:"ease-in-out"});
		var myLatLng = {lat: 25.651327, lng: -100.294601};
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
		});
	$('#EXI').click(function(){
		$('#map').velocity("scroll", {duration:500, easing:"ease-in-out"});
		var myLatLng = {lat: 25.649442, lng: -100.294250};
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
		});
	$('#EXII').click(function(){
		$('#map').velocity("scroll", {duration:500, easing:"ease-in-out"});
		var myLatLng = {lat: 25.649445, lng: -100.286889};
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
		});
	$('#EXIII').click(function(){
		$('#map').velocity("scroll", {duration:500, easing:"ease-in-out"});
		var myLatLng = {lat: 25.648369, lng: -100.295980};
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
		});
	$('#EXV').click(function(){
		$('#map').velocity("scroll", {duration:500, easing:"ease-in-out"});
		var myLatLng = {lat: 25.651698, lng: -100.294635};
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
		});
	$('#Choza').click(function(){
		$('#map').velocity("scroll", {duration:500, easing:"ease-in-out"});
	var myLatLng = {lat: 25.652462, lng: -100.291469};
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
		});
	$('#SRec').click(function(){
		$('#map').velocity("scroll", {duration:500, easing:"ease-in-out"});
		var myLatLng = {lat: 25.651302, lng: -100.291817};
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
		});
	$('#SCIAP').click(function(){
		$('#map').velocity("scroll", {duration:500, easing:"ease-in-out"});
		var myLatLng = {lat: 25.653015, lng: -100.290096};
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
		});
	$('#SBT').click(function(){
		$('#map').velocity("scroll", {duration:500, easing:"ease-in-out"});
		var myLatLng = {lat: 25.652509, lng: -100.288807};
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
		});
	$('#SPD').click(function(){
		$('#map').velocity("scroll", {duration:500, easing:"ease-in-out"});
		var myLatLng = {lat: 25.651137, lng: -100.287315};
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
		});
	$('#SAIV').click(function(){
		$('#map').velocity("scroll", {duration:500, easing:"ease-in-out"});
		var myLatLng = {lat: 25.648679, lng: -100.289202};
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
		});
	$('#SCE').click(function(){
		$('#map').velocity("scroll", {duration:500, easing:"ease-in-out"});
		var myLatLng = {lat: 25.648166, lng: -100.289974};
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
		});
	$('#Bancomer').click(function(){
		$('#map').velocity("scroll", {duration:500, easing:"ease-in-out"});
		var myLatLng = {lat: 25.649563, lng: -100.290381};
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
		});
	$('#Santander').click(function(){
		$('#map').velocity("scroll", {duration:500, easing:"ease-in-out"});
		var myLatLng = {lat: 25.649563, lng: -100.290381};
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
		});
	$('#CAVII').click(function(){
		$('#map').velocity("scroll", {duration:500, easing:"ease-in-out"});
		var myLatLng = {lat: 25.650016, lng: -100.288483};
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
		});
	$('#CCE').click(function(){
		$('#map').velocity("scroll", {duration:500, easing:"ease-in-out"});
		var myLatLng = {lat: 25.648774, lng: -100.290264};
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
		});
	$('#CCIAP').click(function(){
		$('#map').velocity("scroll", {duration:500, easing:"ease-in-out"});
		var myLatLng = {lat: 25.652142, lng: -100.290035};
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
		});
	$('#CCC').click(function(){
		$('#map').velocity("scroll", {duration:500, easing:"ease-in-out"});
		var myLatLng = {lat: 25.651492, lng: -100.288851};
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
		});
	$('#CCEDES').click(function(){
		$('#map').velocity("scroll", {duration:500, easing:"ease-in-out"});
		var myLatLng = {lat: 25.653669, lng: -100.292534};
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
		});
	$('#CaChoza').click(function(){
		$('#map').velocity("scroll", {duration:500, easing:"ease-in-out"});
		var myLatLng = {lat: 25.652462, lng: -100.291469};
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
		});
	$('#CaCentral').click(function(){
		$('#map').velocity("scroll", {duration:500, easing:"ease-in-out"});
		var myLatLng = {lat: 25.651492, lng: -100.288851};
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
		});
	$('#CaJub').click(function(){
		$('#map').velocity("scroll", {duration:500, easing:"ease-in-out"});
		var myLatLng = {lat: 25.648716, lng: -100.289839};
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
		});
	$('#CaStar').click(function(){
		$('#map').velocity("scroll", {duration:500, easing:"ease-in-out"});
		var myLatLng = {lat: 25.652142, lng: -100.290035};
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
		});
	$('#Bookshop').click(function(){
		$('#map').velocity("scroll", {duration:500, easing:"ease-in-out"});
		var myLatLng = {lat: 25.652142, lng: -100.290035};
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
		});
	$('#Tiendatec').click(function(){
		$('#map').velocity("scroll", {duration:500, easing:"ease-in-out"});
		var myLatLng = {lat: 25.652142, lng: -100.290035};
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
		});
	$('#SE').click(function(){
		$('#map').velocity("scroll", {duration:500, easing:"ease-in-out"});
		var myLatLng = {lat: 25.652142, lng: -100.290035};
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
