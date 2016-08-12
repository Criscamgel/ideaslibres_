// METODO DE FORMULARIOS RECIBE ID DEL DIV A CONTENER, (ANCHO Y ALTO OPCIONALES)
function formBox(content, title, subtitle, wide, tall)
{
    if (!document.getElementById("hidden")) 
    {
        var hidden = document.createElement("div");
        hidden.id = "hidden";
        hidden.className = "hidden";
        document.body.appendChild(hidden);
    }
    
    var modal = document.getElementById("modalCover");
    modal.className = "modalCoverForm";
    modal.style.visibility = "visible";
    var modalTitle =  document.getElementById("modalTitle");
    modalTitle.innerHTML = title;
    var modalSubTitle =  document.getElementById("modalSubTitle");
    modalSubTitle.innerHTML = subtitle;
    var modalArea = document.getElementById("modal");
    var modalContainer = document.getElementById("modalContent");
    var modalContent = document.getElementById(content);
    
    var elemCount = modalContainer.children.length;
    if (elemCount > 0) {
		for (i=0; i < 1; i++) {
			document.getElementById("hidden").appendChild(modalContainer.children[i]);
		}
	}
    
    modalContainer.appendChild(modalContent);

    if (wide == null) 
    {
	    wide = 280; 
	    modalArea.style.maxWidth  = wide+"px";
    }
    else
    {
	    modalArea.style.maxWidth  = wide+"px";
    }
    
    if (tall != null) {
		modalArea.style.height = tall+"px";
	}
	loadColors();
}
// VENTANA CONFIRM, RECIBE TEXTO DE CONTENIDO, TITULO Y METODO PARA EL ACEPTAR, (ANCHO Y ALTO OPCIONALES)
function confirmBox(title,content,method,wide,tall)
{
    if (!document.getElementById("hidden")) 
    {
        var hidden = document.createElement("div");
        hidden.id = "hidden";
        hidden.className = "hidden";
        document.body.appendChild(hidden);
    }
    
    var modal = document.getElementById("box");
    modal.className = "modalCover";
    var modalTitle =  document.getElementById("boxTitle");
    modalTitle.innerHTML = title;
    var modalArea = document.getElementById("modalBox");
    var contentDiv = document.getElementById("boxContent");
    
    if (wide == null) 
    {
	    wide = 280; 
	    modalArea.style.width = wide+"px";
    }
    else
    {
	    modalArea.style.width = wide+"px";
    }
    
    if (tall != null) {modalArea.style.height = tall+"px";}
    
    var aceptb = document.createElement("button");
    aceptb.innerHTML = "Aceptar";
    aceptb.onclick = function(e){
		method(); 
		hide_pop();
	};

    var cancelb = document.createElement("button");
    cancelb.innerHTML = "Cancelar";
    cancelb.onclick = hide_pop;

    contentDiv.innerHTML = content;
    
    var buttonDiv = document.getElementById("buttonsDiv");
    buttonDiv.className = "modalButtons";
    buttonDiv.innerHTML = "";
    buttonDiv.appendChild(aceptb);
    buttonDiv.appendChild(cancelb);
    modalArea.appendChild(buttonDiv);
	loadColors();
}
// VENTANA ALERTA, RECIBE TEXTO DE CONTENIDO (ANCHO Y ALTO OPCIONALES)
function alertBox(title,content,wide,tall)
{
    if (!document.getElementById("hidden")) 
    {
        var hidden = document.createElement("div");
        hidden.id = "hidden";
        hidden.className = "hidden";
        document.body.appendChild(hidden);
    }
    
    var modal = document.getElementById("box");
    modal.className = "modalCover";
    var modalTitle =  document.getElementById("boxTitle");
    modalTitle.innerHTML = title;
    var modalArea = document.getElementById("modalBox");
    var contentDiv = document.getElementById("boxContent");
    
    if (wide == null) {wide = 280;}
    modalArea.style.width = wide+"px";
    if (tall != null) {modalArea.style.height = tall+"px";}
    
    var aceptb = document.createElement("button");
    aceptb.innerHTML = "Aceptar";
    aceptb.onclick = hide_pop;

    contentDiv.innerHTML = content;
    
    var buttonDiv = document.getElementById("buttonsDiv");
    buttonDiv.className = "modalButtons";
    buttonDiv.innerHTML = "";
    buttonDiv.appendChild(aceptb);
    modalArea.appendChild(buttonDiv);
	loadColors();
}
// REMUEVE EL POP DE FORMULARIO ACTUAL
function hide_pop_form()
{
    var modal = document.getElementById("modalCover");
    // modal.style.transform = "translateX(-100%) rotate(0deg) translateY(100%) scale(0)";
    modal.className = "modalCoverHidden";
}
// REMUEVE EL POR DE ALERTA
function hide_pop()
{
    var modal = document.getElementById("box");
    modal.className = "modalCoverHidden";
}
