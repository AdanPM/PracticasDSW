//Creación del arreglo para las imagenes
let maravillas = ["chichen-itza.svg", "coliseo.svg", "cristo-redentor.svg", "machu-picchu.svg", "muralla-china.svg","petra.svg","taj-mahal.svg"];

//Creación del arreglo de las respuestas correctas
let correcta = [1,0,2,1,2,0,1];

//Creación del arreglo de las opciones a elegir
let opciones = []; 

//añadiendo las opciones al arreglo opciones
opciones.push(["Machu Picchu", "Chichen Itza", "Coliseo"]);
opciones.push(["Coliseo", "Petra", "Cristo Redentor"]);
opciones.push(["Muralla China", "Taj Mahal", "Cristo Redentor"]);
opciones.push(["Petra", "Machu Picchu", "Taj Mahal"]);
opciones.push(["Chichen Itza", "Petra", "Muralla China"]);
opciones.push(["Petra", "Machu Pichu", "Chichen Itza"]);
opciones.push(["Coliseo", "Taj Mahal", "Cristo Redentor"]);

//creación de variables para contar aciertos y numero de pregunta
let posActual = 0;
let cantidadAcertadas = 0;

/*funcion comenzar juego, lo que hace es iniciar los contadores de posicion y 
   aciertos en el juego
*/
function comenzarJuego(){
    posActual = 0;
    cantidadAcertadas = 0;
    document.getElementById("pantalla-juego-banderas").style.display = "none";
    document.getElementById("pantalla-final-banderas").style.display = "none";

    document.getElementById("pantalla-inicial").style.display = "none";  //lo que hace es tomar el div pantalla-inicial
                                                                         //y ponerle el display none, para quitarlo de la vista
    document.getElementById("pantalla-juego").style.display = "block"; //lo que hace es tomar el div pantalla-juego y lo pone
                                                                        // a la vista
    cargarMaravilla(); //funcion cargar maravilla

}

//funcion cargar maravilla, lo que hace es  cargar la imagen que se va a jugar
function cargarMaravilla(){ 
    if(maravillas.length <= posActual){  //lo que hace es comparar si todavia faltan maravillas por jugar
        terminarJuego(); //manda a funcion terminar juego
    }
    else{
        limpiarOpciones(); //manda a funcion limpiar opciones
        document.getElementById("imgMaravilla").src = "img/" + maravillas[posActual]; //pone en la el img con id imgMaravilla
                                                                                      // la imagen del arreglo maravillas[posicion]
        
        //lo que hacen las siguientes tres lineas es aplicar a los elementos con id
        //n0, n1 y n2 los valores del arreglo opciones[posicion] dandole el valor del 0 al 2, correspondiente
        //a cada nombre de las maravillas de las opciones
        document.getElementById("n0").innerHTML = opciones[posActual][0];
        document.getElementById("n1").innerHTML = opciones[posActual][1];
        document.getElementById("n2").innerHTML = opciones[posActual][2];
    }
}

//esta funcion lo que hace es limpiar los campos de los nombres y letras de las opciones a elegir
function limpiarOpciones(){
    document.getElementById("n0").className = "nombre";
    document.getElementById("n1").className = "nombre";
    document.getElementById("n2").className = "nombre";
    document.getElementById("l0").className = "letra";
    document.getElementById("l1").className = "letra";
    document.getElementById("l2").className = "letra";
} 

//esta funcion lo que hace es comprobar si la respuesta elegida es la correcta, recibiendo
//la opcion por parametro, este valor viene con un OnClick del HTML
function comprobarRespuesta(opElegida){
    if(opElegida==correcta[posActual]){//la opcion elegida es la misma del arreglo correcta[posicion], acertó
        document.getElementById("n" + opElegida).className = "nombre nombreAcertada";
        document.getElementById("l" + opElegida).className = "letra letraAcertada";
        cantidadAcertadas++; //sumar punto de acierto
    }else{ //la opcion elegida NO ES LA MISMA, por lo tanto falló

        //estos primeros dos lo que hacen es mostrar en color rojo la opcion elegida que estaba mal
        document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada"; 
        document.getElementById("l" + opElegida).className = "letra letraNoAcertada";

        //estos dos lo que hacen es mostrar en color verde, la opción que era la correcta
        document.getElementById("n" + correcta[posActual]).className = "nombre nombreAcertada";
        document.getElementById("l" + correcta[posActual]).className = "letra letraAcertada";
    }
    posActual++; //avanzar posicion de juego, siguiente maravilla
    setTimeout(cargarMaravilla,1000); //permite dar tiempo de espera antes de iniciar de nuevo otra posicion
}

//funcion terminar juego
function terminarJuego(){
    //esconde la pantalla-juego y muestra la pantalla de final
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas; //muestra el total de aciertos en el span numCorrectas
    document.getElementById("numIncorrectas").innerHTML = maravillas.length - cantidadAcertadas; //obtiene cuantas respuestas incorrectas tuvo, restando la cant de maravillas menos aciertos
}

function volverAlInicio(){
    document.getElementById("pantalla-inicial").style.display = "block";

    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-final-banderas").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-juego-banderas").style.display = "none";
}


//Creación del arreglo para las banderas
let banderas = ["mexico.svg","peru.svg","argentina.svg","chile.svg","colombia.svg","venezuela.svg","panama.svg","uruguay.svg","brazil.svg","paraguay.svg",];

//Creación del arreglo de las respuestas correctas de banderass
let correctabanderas = [1,1,1,1,1,1,1,1,1,1];

//Creación del arreglo de las opciones a elegir
let opcionesbanderas = []; 

//añadiendo las opciones al arreglo opciones
opcionesbanderas.push(["Perú", "México", "Uruguay", "Chile"]);
opcionesbanderas.push(["Argentina", "Perú", "Paraguay", "Uruguay"]);
opcionesbanderas.push(["Paraguay", "Argentina", "México", "Venezuela"]);
opcionesbanderas.push(["Venezuela", "Chile", "Argentina", "Uruguay"]);
opcionesbanderas.push(["Brazil", "Colombia", "Ecuador", "Uruguay"]);
opcionesbanderas.push(["Perú", "Venezuela", "Panamá", "Uruguay"]);
opcionesbanderas.push(["Venezuela", "Panama", "México", "Uruguay"]);
opcionesbanderas.push(["Paraguay", "Uruguay", "El Salvador", "México"]);
opcionesbanderas.push(["Argentina", "Brazil", "Venezuela", "Uruguay"]);
opcionesbanderas.push(["Uruguay", "Paraguay", "Perú", "Uruguay"]);


//creación de variables para contar aciertos y numero de pregunta
let posActualBanderas = 0;
let cantidadAcertadasBanderas = 0;

/*funcion comenzar juego, lo que hace es iniciar los contadores de posicion y 
   aciertos en el juego
*/
function comenzarJuegoBanderas(){
    posActualBanderas = 0;
    cantidadAcertadasBanderas = 0;
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-inicial").style.display = "none";  //lo que hace es tomar el div pantalla-inicial-banderas
                                                                         //y ponerle el display none, para quitarlo de la vista
    document.getElementById("pantalla-juego-banderas").style.display = "block"; //lo que hace es tomar el div pantalla-juego y lo pone
                                                                        // a la vista
    cargarBandera(); //funcion cargar maravilla
}

//funcion cargar maravilla, lo que hace es  cargar la imagen que se va a jugar
function cargarBandera(){ 
    if(banderas.length <= posActualBanderas){  //lo que hace es comparar si todavia faltan maravillas por jugar
        terminarJuegoBandera(); //manda a funcion terminar juego
    }
    else{
        limpiarOpcionesBandera(); //manda a funcion limpiar opciones
        document.getElementById("imgBandera").src = "img/" + banderas[posActualBanderas]; //pone en la el img con id imgBandera
                                                                                      // la imagen del arreglo banderas[posicion]
        
        //lo que hacen las siguientes tres lineas es aplicar a los elementos con id
        //n0, n1, n2 y n3 los valores del arreglo opcionesbandera[posicion] dandole el valor del 0 al 3, correspondiente
        //a cada nombre de las banderas de las opciones
        document.getElementById("n0bandera").innerHTML = opcionesbanderas[posActualBanderas][0];
        document.getElementById("n1bandera").innerHTML = opcionesbanderas[posActualBanderas][1];
        document.getElementById("n2bandera").innerHTML = opcionesbanderas[posActualBanderas][2];
        document.getElementById("n3bandera").innerHTML = opcionesbanderas[posActualBanderas][3];
    }
}

//esta funcion lo que hace es limpiar los campos de los nombres y letras de las opciones a elegir
function limpiarOpcionesBandera(){
    document.getElementById("n0bandera").className = "nombrebandera";
    document.getElementById("n1bandera").className = "nombrebandera";
    document.getElementById("n2bandera").className = "nombrebandera";
    document.getElementById("n3bandera").className = "nombrebandera";
    document.getElementById("l0bandera").className = "letrabandera";
    document.getElementById("l1bandera").className = "letrabandera";
    document.getElementById("l2bandera").className = "letrabandera";
    document.getElementById("l3bandera").className = "letrabandera";
} 

//esta funcion lo que hace es comprobar si la respuesta elegida es la correcta, recibiendo
//la opcion por parametro, este valor viene con un OnClick del HTML
function comprobarRespuestaBandera(opElegidaBandera){
    if(opElegidaBandera==correctabanderas[posActualBanderas]){//la opcion elegida es la misma del arreglo correcta[posicion], acertó
        document.getElementById("n" + opElegidaBandera+"bandera").className = "nombrebandera nombreAcertadaBanderas";
        document.getElementById("l" + opElegidaBandera+"bandera").className = "letrabandera letraAcertadaBanderas";
        cantidadAcertadasBanderas++; //sumar punto de acierto
    }else{ //la opcion elegida NO ES LA MISMA, por lo tanto falló

        //estos primeros dos lo que hacen es mostrar en color rojo la opcion elegida que estaba mal
        document.getElementById("n" + opElegidaBandera+"bandera").className = "nombrebandera nombreNoAcertadaBanderas"; 
        document.getElementById("l" + opElegidaBandera+"bandera").className = "letrabandera letraNoAcertadaBanderas";

        //estos dos lo que hacen es mostrar en color verde, la opción que era la correcta
        document.getElementById("n" + correctabanderas[posActualBanderas]+"bandera").className = "nombrebandera nombreAcertadaBanderas";
        document.getElementById("l" + correctabanderas[posActualBanderas]+"bandera").className = "letrabandera letraAcertadaBanderas";
    }
    posActualBanderas++; //avanzar posicion de juego, siguiente maravilla
    setTimeout(cargarBandera,1000); //permite dar tiempo de espera antes de iniciar de nuevo otra posicion
}

//funcion terminar juego
function terminarJuegoBandera(){
    //esconde la pantalla-juego y muestra la pantalla de final
    document.getElementById("pantalla-juego-banderas").style.display = "none";
    document.getElementById("pantalla-final-banderas").style.display = "block";
    document.getElementById("numCorrectasBanderas").innerHTML = cantidadAcertadasBanderas; //muestra el total de aciertos en el span numCorrectas
    document.getElementById("numIncorrectasBanderas").innerHTML = banderas.length - cantidadAcertadasBanderas; //obtiene cuantas respuestas incorrectas tuvo, restando la cant de maravillas menos aciertos
}
