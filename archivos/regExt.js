

window.onload = function(){

	// var newWin = window.open(window.location.href);             
	
	// if(!newWin || newWin.closed || typeof newWin.closed=='undefined') 
	// { 
		// alert("Debe permitir ventanas emergentes");
	// }
	document.getElementById("loginExt").onclick = function(){
            
	
		// if(!newWin || newWin.closed || typeof newWin.closed=='undefined') 
		// { 
			// alert("Debe permitir ventanas emergentes");
			// return;
		// }
		
		var info = {};

		var url = window.location.href.split("?");
 		

 		url = url[1].split("&");

 		info.CAMPANA = url[0];
 		info.CENTER = url[1];

		info.ID = document.getElementById("idExt").value;
		info.PSSW = document.getElementById("psswExt").value;
		
		// info.ID = "regIDExtTmp";
		// info.PSSW = "ASD";
		if(info.ID != ""){

			document.getElementById("docOblgExt").style.display = "none";

		}else{

			document.getElementById("docOblgExt").style.display = "block";

		}

		if(info.PSSW != ""){

			document.getElementById("psswOblgExt").style.display = "none";

		}else{

			document.getElementById("psswOblgExt").style.display = "block";
			return;
		}
 		
 		
	
			console.log(info);
 		sendAjax("clients","tmpSession",info,function(response){
			
			if(response.status){
			
			var url = response.message;
			var win = window.open(url, '_blank');
  			win.focus();
			
			}else{
				
				console.log(response.message);
			}
			
 				
			
		});

	}

	document.getElementById("registerExt").onclick = function(){
		
		// var newWin = window.open(window.location.href);             
	
		// if(!newWin || newWin.closed || typeof newWin.closed=='undefined') 
		// { 
			// alert("Debe permitir ventanas emergentes");
			// return;
		// }
		
		var info = {};

		var url = window.location.href.split("?");
 		
 		url = url[1].split("&");

 		info.CAMPANA = url[0];
 		info.CENTER = url[1];

		info.ID = "regIDExtTmp";
		info.PSSW = "";
		// info.ID = "12345678";
		// info.PSSW = "Rx2ypxMg";
		console.log(info);
		sendAjax("clients","tmpSession",info,function(response){
			
 			var url = response.message;
			// loadInterface("usuario");
			// history.pushState({}, "usuario", "?usuario");
 			var win = window.open(url, '_blank');
  			win.focus();
			
		});


	}
	
	
	document.getElementById("loginRegExt").style.display = "block";
	
	document.getElementById("forgetPass").onclick = function(){
		
		document.getElementById("userDocRecForm").value = "";
		
		document.getElementById("recoveryLoginExt").style.display = "block";
		document.getElementById("loginRegExt").style.display = "none";
		document.getElementById("respMensaje").innerHTML = "";
	}
	
	document.getElementById("cancelRstPssw").onclick = function(){
		
		document.getElementById("userDocRecForm").value = "";
		
		document.getElementById("loginRegExt").style.display = "block";
		document.getElementById("recoveryLoginExt").style.display = "none";
		document.getElementById("respMensaje").innerHTML = "";
	}
	
	document.getElementById("setNewPsswCli").onclick = function(){
		
		var info = {};
		
		var url = window.location.href.split("?");
 		
 		url = url[1].split("&");

 		info.CAMPANA = url[0];
 		info.CENTER = url[1];
		
		info.ID = document.getElementById("userDocRecForm").value;
		
		
		if(info.ID != ""){
			
			document.getElementById("respMensaje").innerHTML = "Procesando...";
			sendAjax("clients","restorePssw",info,function(response){
				
				// alertBox("Mensaje",response.message);
				var messageBox = document.getElementById("respMensaje");
				messageBox.innerHTML = response.message;
				messageBox.style.display = "block";
					
			});

			
		}else{
			

			document.getElementById("respMensaje").innerHTML = "Debe escribir un usuario";
		}
		
		
	}
}


function sendAjax(obj, method, data,responseFunction){
	 /*
	 * 'post_receiver.php' - where you will pass the form data
	 * $(this).serialize() - to easily read form data
	 * function(data){... - data contains the response from post_receiver.php
	 */
	 // console.log(method);
	 $("#loaderDiv").show();
	 var info = {};
	 info.class = obj;
	 info.method = method;
	 info.data = data;
	 
	$.ajax({
		type: 'POST',
		url: 'frameWork/php/entryPoint.php', 
		contentType: 'application/json',
		data: JSON.stringify(info),
		cache: false,
		success: function(data){
			 $("#loaderDiv").hide();
			// console.log(data);
			 try{
				var tmpJson = $.parseJSON(data);
				responseFunction(tmpJson.data);  
			 }catch(e){
				 //alertBox("Excepción",data);
				 // console.log(data);
				 console.log(e);
			 }
			 
		},
		
		error: function( jqXhr, textStatus, errorThrown ){ 
			$("#loaderDiv").hide();
			console.log( errorThrown ); 
		}

	})
	
   

}

function loadInterface(target){
	
	console.log(target);
	sendAjax("api","getInterface",target,function(response){
		//console.log(response);
		
		
		 $('head').append('<link rel="stylesheet" href="frameWork/css/'+target+'.css?version='+Math.random()+'" type="text/css" />');
		 
		$("#workingArea").html(response.message);
				 
		
		$.getScript( "frameWork/js/"+target+".js", function( data, textStatus, jqxhr ) {
		   //console.log( data ); // Data returned
		   //console.log( textStatus ); // Success
		   //console.log( jqxhr.status ); // 200
		   //console.log( "Load was performed." );
		  
		  // $('head').append('<link rel="stylesheet" href="frameWork/css/'+target+'.css" type="text/css" />');
		
		  
		  // var fileref=document.createElement("link")
			// fileref.setAttribute("rel", "stylesheet")
			// fileref.setAttribute("type", "text/css")
			// fileref.setAttribute("href", "frameWork/css/'+target+'.css");
			// document.getElementsByTagName("head")[0].appendChild(fileref)
			// console.log(target)
		  // $(".menuSelected").removeClass();
		  // var tmp = document.getElementById("tiendas");
		  // if($("#"+target).parent().prop("tagName") == "UL"){

		  	// $("#"+target).parent().parent().addClass("menuSelected");

		  // }else{

		  	// $("#"+target+"Menu").addClass("menuSelected");

		  // }
		
		});
		
		$("#workingArea").show();
		
		
	});


}

