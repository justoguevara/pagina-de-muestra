
Segmentos = new Object();
	//partes
	var s_cabeza = null;
	var s_piez = null;
	var s_contactos = null;
	var s_consulta = null;
	//cuerpos
	var s_inicio = null;
	var s_productos = null;
	var s_disenos = null;
	var s_publicidad = null;

function carga_paginas(){
	Apari = "tela";
	//define paginas
	//partes
	s_cabeza = new Pagina("cabeza");
	s_piez = new Pagina("piez");
	s_contactos = new Pagina("contactos");
	s_consulta = new Pagina("consulta");
	//cuerpos
	s_inicio = new Pagina("inicio");
	s_productos = new Pagina("productos");
	s_disenos = new Pagina("disenos");
	s_publicidad = new Pagina("publicidad");


	x = "";
	x += "inicio-inicio,";
	x += "productos-productos,";
	x += "disenos-disenos,";
	x += "publicidad-publicidad";
	s_cabeza.menu(x,"h,i");
	cab = s_cabeza.ver();

	s_piez.caja_xy (" ","35%","300px");
	s_piez.caja_xy (" ","20%","300px");
	s_piez.caja_xy (" ","35%","300px");
	pie = s_piez.ver();

	s_inicio.caja_xy (cab,"100%","auto");
	s_inicio.caja_xy (" ","100%","300px");
	s_inicio.caja_xy (" ","100%","300px");
	s_inicio.caja_xy (" ","100%","300px");
	s_inicio.caja_xy (pie,"100%","auto");

	s_productos.caja_xy (cab,"100%","auto");
	s_productos.caja_xy (" ","40%","300px");
	s_productos.caja_xy (" ","40%","300px");
	s_productos.caja_xy (" ","40%","300px");
	s_productos.caja_xy (" ","40%","300px");
	s_productos.caja_xy (pie,"100%","auto");

	s_disenos.caja_xy (cab,"100%","auto");
	s_disenos.caja_xy (" ","100%","300px");
	s_disenos.caja_xy (pie,"100%","auto");

	s_publicidad.caja_xy (cab,"100%","auto");
	s_publicidad.caja_xy (" ","100%","200px");
	s_publicidad.caja_xy (" ","40%","200px");
	s_publicidad.caja_xy (" ","40%","200px");
	s_publicidad.caja_xy (pie,"100%","auto");

}



function paginas(nombre){
	esq(Segmentos[nombre].ver());
	proyectar("new");
}



class Pagina {
	constructor(nombre) {
		Segmentos[nombre] = this;  // agrega el objeto pagina a segmentos
		this.nombre = nombre;
		this.bloques = new Array();
		this.cad = "";  // cadena de todos los componentes de la pagina
	};

	add (cadena) {  // añade cadena
		this.bloques.push(["add",cadena]);
	};

	menu (contenido,edo) {
		this.bloques.push(["menu",contenido,edo]);
	};

	caja (contenido) {
		this.bloques.push(["caja",contenido]);
	};

	caja_xy (contenido,ancho,alto) {
		this.bloques.push(["caja_xy",contenido,ancho,alto]);
	};

	ver () { // manda a cad todos los elementos de bloques y retorna cadena
		this.cad = "";
		for (var i=0; i < this.bloques.length; i++) {

			if(this.bloques[i][0]=="add"){
				this.cad += this.bloques[i][1];
			}

			if(this.bloques[i][0]=="menu"){
				this.cad += menu( this.bloques[i][1], this.bloques[i][2] );
			}

			if(this.bloques[i][0]=="caja_xy"){
				this.cad += caja_xy( this.bloques[i][1], this.bloques[i][2] , this.bloques[i][3]);
			}

			if(this.bloques[i][0]=="caja"){
				this.cad += caja( this.bloques[i][1] );
			}

		}
		return this.cad;
	};

}

