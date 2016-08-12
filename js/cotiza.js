

			            var resultado = 0;

				    	var it_a = 10000;
				    	var it_b = 20000;
				    	var it_c = 30000;
				    	var it_d = 40000;
				    	
					    $("#1_1").change(function() {
					    if (this.checked) 
					    {	
			    		// Hacer algo si el checkbox ha sido seleccionado
			        	godiva();
			            			            
			        	}
			        	else{
			        	nogodiva();
			        	}
			    		});

			    		function godiva(){

			    			
			    			$("#resultado_").empty();
			    			$("#td_1").css({"background":"solid", "background-color": "green"});
			    			resultado += it_a;
			    			$("#resultado_").text(resultado);
			    			

			    		}

			    		function nogodiva(){

			    			 $("#resultado_").empty();
			    			 $("#td_1").css({"background":"solid", "background-color": "white"});
			    			 resultado -= it_a;
			    			 $("#resultado_").text(resultado);
			    			 

			    		}

			    		/* ------------------ */

			    		$("#1_2").change(function() {
					    if (this.checked) 
					    {	
			    		// Hacer algo si el checkbox ha sido seleccionado
			        	godivb();
			            			            
			        	}
			        	else{
			        	nogodivb();
			        	}
			    		});

			    		function godivb(){

			    			
			    			$("#resultado_").empty();
			    			$("#td_2").css({"background":"solid", "background-color": "green"});
			    			resultado += it_b;
			    			$("#resultado_").text(resultado);

			    		}

			    		function nogodivb(){

			    			 $("#resultado_").empty();
			    			 $("#td_2").css({"background":"solid", "background-color": "white"});
			    			 resultado -= it_b;	
			    			 $("#resultado_").text(resultado);

			    		}

			    		/* ------------------ */
						

			    		$("#1_3").change(function() {
					    if (this.checked) 
					    {	
			    		// Hacer algo si el checkbox ha sido seleccionado
			        	godivc();
			            			            
			        	}
			        	else{
			        	nogodivc();
			        	}
			    		});

			    		function godivc(){

			    			
			    			$("#resultado_").empty();
			    			$("#td_3").css({"background":"solid", "background-color": "green"});
			    			resultado += it_c;
			    			$("#resultado_").text(resultado);

			    		}

			    		function nogodivc(){

			    			 $("#resultado_").empty();
			    			 $("#td_3").css({"background":"solid", "background-color": "white"});
			    			 resultado -= it_c;	
			    			 $("#resultado_").text(resultado);

			    		}

			    		/* ------------------ */

			    		$("#1_4").change(function() {
					    if (this.checked) 
					    {	
			    		// Hacer algo si el checkbox ha sido seleccionado
			        	godivd();
			            			            
			        	}
			        	else{
			        	nogodivd();
			        	}
			    		});

			    		function godivd(){

			    			
			    			$("#resultado_").empty();
			    			$("#td_4").css({"background":"solid", "background-color": "green"});
			    			resultado += it_d;
			    			$("#resultado_").text(resultado);

			    		}

			    		function nogodivd(){

			    			 $("#resultado_").empty();
			    			 $("#td_4").css({"background":"solid", "background-color": "white"});
			    			 resultado -= it_d;	
			    			 $("#resultado_").text(resultado);

			    		}

			    		/* ------------------ */
												
					