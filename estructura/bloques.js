
// *****  a este nivel se definen los eventos


function caja_xy(contenido, ancho, alto){  // solo para contener - sin eventos - sin estados
	var es = Apari;
	var dat = "";

	//estilos
	var es_caja = "blo_menu " + es;
	//...procesa elementos...
	var dat= ele_caja( contenido, ancho, alto, null, es_caja);

	//console.log("- caja: dx=" + ancho + " dy=" + alto);
	return dat;
}

function caja(contenido){  // solo para contener - sin eventos - sin estados
	var es = Apari;
	var dat = "";

	//estilos
	var es_caja = "blo_menu " + es;
	//...procesa elementos...
	dat = ele_capa(contenido, null, es_caja);  // contenido/accion/estilo
	//console.log("- caja: dx=" + ancho + " dy=" + alto);
	return dat;
}


// items: elem,...,elem  ---  elem: [contenido , accion]
// ed0[0]: h:horizontal v:vertical
// ed0[1]: t:todo c:centro i:hizquierda d:derecha
function menu(items,edo){
	var es = Apari;
	var dat = "";
	var contenido = "";

	//estados
	if(edo==null){
		edo = new Array();
		edo[0]="h";
		edo[1]="t";
	}else{
		edo = edo.split(",");
		if(edo[1]==null){edo[1]="t";};
	}

	//estilos
	var es_bloque = "blo_menu " + edo[0] + " " + edo[0] + edo[1] + " " + es;
	var es_item = "ele_item " + es;
	var es_texto = "texto_item ";

	//...procesa elementos...
    items = items.split(",");
    for (var i=0; i < items.length; i++) {
		items[i] = items[i].split("-");
		contenido = ele_texto(items[i][0], es_texto);
		var accion = null;
		if(items[i][1] != null){accion = "c.v." + items[i][1];}  // clic . vinculo . lugar
		dat += ele_capa(contenido, accion, es_item);  // contenido/accion/estilo
    }
	dat = ele_capa(dat, "", es_bloque);

	//console.log("- menu: " + items);
	return dat;
}
