    


    //proyectar
    function proyectar(accion) {
    
         Esq = ele_capa(Esq, "", Apari + " h he");

         if(accion == "new"){
            document.getElementById("cuerpo").innerHTML = Esq;
         }
         if(accion == "+add"){
            document.getElementById("cuerpo").innerHTML = Esq + document.getElementById("cuerpo").innerHTML;
         }
         if(accion == "add+"){
            document.getElementById("cuerpo").innerHTML += Esq;
         }
         if(accion == "set"){
            document.getElementById("cuerpo").innerHTML = "";
         }
      
         Esq = ""; // set de toda la estructura
      }
