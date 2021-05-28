// JavaScript source code


function ele_capa(contenido, accion, es){	//elemento sin medidas
	var dat = "<div class='" + es + "' " + eventos(accion) + ">" + contenido + "</div>";
	return dat;
}

function ele_caja(contenido, dx, dy, accion, es){	//elemento con medidas
	var dat = "<div class='" + es + "' " + eventos(accion) + " style='height:" + dy + "; width:" + dx + ";'>" + contenido + "</div>";
	return dat;
}

function ele_texto(contenido, es){
	var dat = "<p class='" + es + "'>" + contenido + "</p>";
	return dat;
}

function eventos(parametros){
	var salida = "";
	if(parametros != null){
		var parametros = parametros.split(".");
		
		var evento = parametros[0];
		var reaccion = parametros[1];
		var datos = parametros[2];

		if(reaccion=="v"){ //vinculo
			salida = "paginas('" + datos + "')";
		}	

		// eventos
		if(evento=="c"){ //clic
			salida = " onclick=\"" + salida + ";\"";
		}
	}
	return salida;
}