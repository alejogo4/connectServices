var usuario = "cualquier";

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  usuario = localStorage.getItem("user");
  if (usuario == "albertopardo") {
    usuario = "Alberto Pardo Avila";
  } else if (usuario == "andrey") {
    usuario = "Andrey Acuña Espinosa";
  } else if (usuario == "eduardogutierrez") {
    usuario = "Eduardo Francisco Gutierrez";
  } else if (usuario == "cristianuruburu") {
    usuario = "Cristian Alexander Uruburu ";
  } else if (usuario == "guillermoparada") {
    usuario = "Guillermo Andres Parada Gamba";
  } else if (usuario == "hugogonzales") {
    usuario = "Hugo Alberto Gonzalez Jimenez";
  } else if (usuario == "jeiderperalez") {
    usuario = "Jeider Eliecer Perales Ramos";
  } else if (usuario == "jairbocanegra") {
    usuario = "Jair Bocanegra Dominguez";
  } else if (usuario == "jeisonpaz") {
    usuario = "Jeison Andres Paz Genes";
  } else if (usuario == "fredymosquera") {
    usuario = "Jhon Fredy Mosquera";
  } else if (usuario == "joelmartinez") {
    usuario = "Joel Martinez Salas";
  } else if (usuario == "johnrojas") {
    usuario = "John Mario Rojas Acevedo";
  } else if (usuario == "arleygomez") {
    usuario = "Johnny Arley Gomez Osorno";
  } else if (usuario == "jorgemachado") {
    usuario = "Jorge Alberto Machado";
  } else if (usuario == "jorgevalencia") {
    usuario = "Jorge Eliecer Valencia";
  } else if (usuario == "jorgefabiohenao") {
    usuario = "Jorge Fabio Henao Sánchez";
  } else if (usuario == "joserodriguez") {
    usuario = "Jose Luis Rodriguez Vasquez";
  } else if (usuario == "juanartega") {
    usuario = "Juan Carlos Arteaga Cantillo";
  } else if (usuario == "luisvivas") {
    usuario = "Luis Eduardo Vivas Chacon";
  } else if (usuario == "luisquintero") {
    usuario = "Luis Quintero Ortega";
  } else if (usuario == "mariomercado") {
    usuario = "Mario Eduardo Mercado Martines";
  } else if (usuario == "marlonpardo") {
    usuario = "Marlon David Peñuela Pardo";
  } else if (usuario == "nadirbocanegra") {
    usuario = "Nadir Bocanegra Navarro";
  } else if (usuario == "omarvelasco") {
    usuario = "Omar Velasco Castro";
  } else if (usuario == "oscartoro") {
    usuario = "Oscar Toro Montes";
  } else if (usuario == "mauricioecheverry") {
    usuario = "Mauricio Echeverri Bedoya";
  } else if (usuario == "orlandogomez") {
    usuario = "Orlando de Jesús Gómez Cataño";
  } else if (usuario == "oswaldoramos") {
    usuario = "Oswaldo Ramos Pastrana";
  } else if (usuario == "robinsongomez") {
    usuario = "Robinson Alberto Gómez Estrada";
  } else if (usuario == "ronalramirez") {
    usuario = "Ronal Alexis Ramirez Cañon";
  } else if (usuario == "robinsonperez") {
    usuario = "Robinson Perez Torrez";
  } else if (usuario == "vladimirhincapie") {
    usuario = "Vladimir Hincapie Mejia";
  } else if (usuario == "oscarherrera") {
    usuario = "Oscar Junior Herrera Posada";
  } else if (usuario == "carlosmariozapata") {
    usuario = "Carlos Mario Zapata";
  }
}

$(".close").click(function () {
  $("#preload").css({
    display: "none",
  });
});

/*document.addEventListener("backbutton", function(e){
    if($.mobile.activePage.is('#homepage')){
        e.preventDefault();
        navigator.app.exitApp();
    }
    else {
        navigator.app.backHistory()
    }
}, false);


function onDeviceReady() {
      document.addEventListener("backbutton", handleBackButton, true);
}
function handleBackButton(){
 
    if($.mobile.activePage.attr('id') == 'home'
              || $.mobile.activePage.attr('id') == 'listaUsuarios'){
        navigator.app.exitApp();
    }else if ($.mobile.activePage.attr('id') == 'cita'){
        $.mobile.changePage('#listaUsuarios');
    }else{
        navigator.app.backHistory();
    }
}
 
document.addEventListener("deviceready", onDeviceReady, false)


*/

var confirmarEnvio = false;
var formulario;
var identificador = 0;
var indexForma;
var listasRepetibilidad;
var contadorRange = 0;
var decimales = 0;
var iiI1 = 0;
var ei = 0;
var boleanDecimal = false;
var decimalExclusivo = 2;
var decimalExclusivo2 = 2;
var balanAnalitica = false;

var tipoEquipo = "Bascula Electrónica";

var resolucion; //ud
var ds2 = [0, 0]; //uds
//objetos de trazabilidad

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//BARRANQUILLA
var obj1 = [
  "JPTB - 003; Juego de pesas de 1g a 5kg con clase M1; certificado CMP 0328 y fecha de calibración 2016-03-28.",
];
var obj2 = [
  "LPTB - 005; Juego de pesas de 2mg a 200g  con clase F1; certificado CMP 0393 y fecha de calibración 2016-04-28.",
];
var obj3 = [
  "LPTB - 001; Lote de pesas de 20 kg con clase M1; certificado CPM 0694 y fecha de calibración  2016-08-05.",
];
var obj4 = [
  "LPTB - 002; Lote de pesa de 10 kg con clase M2; certificado CMP 0417 y fecha de calibración 2016-05-01.",
];
var obj5 = [
  "LPTB - 003; Lote de pesa de 5 kg con clase M2; certificado CMP 0423 y fecha de calibración 2016-05-01.",
];
//Nuevo
var obj26 = [
  "JPTB - 005; Lote de pesa de 2 mg a 500g  con clase F1; certificado CMP 0393 y fecha de calibración 2016-04-28.",
];
var obj33 = [
  "LPTB - 004; Lote de pesa de 20 kg con clase M2; certificado CMP 0519 y fecha de calibración 2016-06-13.",
];

//CARTAGENA
var obj6 = [
  "JPTC - 004; Lote de pesas de 1g a 5 kg  con clase M1; certificado CMP 0534 y fecha de calibración 2016-06-27.",
];
var obj7 = [
  "JPTC - 005; Lote de pesas de 1mg a 100g  con clase f1; certificado DA 3326 y fecha de calibración 2015-06-16.",
];
var obj8 = [
  "LPTC - 005; Lote de pesas de 20 kg con clase M2; certificado CMP 0524 y fecha de calibración 2016-05-12.",
];
var obj9 = [
  "LPTC - 006; Lote de pesas de  5 kg  con clase M2; certificado CMP 0426 y fecha de calibración 2016-05-14.",
];
var obj10 = [
  "PIC - 004; Lote de pesas de 10 kg con clase M2; certificado CMP 0427 y fecha de calibración 2016-05-19.",
];
//Nuevos
var obj31 = [
  "JPTC 006; Lote de pesas de 1mg a 500mg  con clase E2; certificado 30154 C y fecha de calibración 2016-04-16.",
];
var obj32 = [
  "JPTC 007; Lote de pesas de 1mg a 200mg  con clase E2; certificado 30189 C y fecha de calibración 2016-04-18.",
];
var obj34 = [
  "LPTC - 007; Lote de pesas de  20 kg  con clase M2; certificado CMP 0535 y fecha de calibración 2016-05-14.",
];

//MEDELLIN
var obj11 = [
  "JPTM - 001; Lote de pesas de 1g a 5Kg  con clase F2; certificado  CMP 0145 y fecha de calibración 2016-01-28.",
];
var obj12 = [
  "JPTM - 002; Lote de pesas de 1mg a 1Kg  con clase f1; certificado CMP 0193 y fecha de calibración 2016-02-08.",
];
var obj13 = [
  "JPTM - 007; Lote de pesas de 5 kg - 20kg con clase M1; certificado  CMP 0194 y fecha de calibración 2016-02-04.",
];
var obj14 = [
  "PIM - 001; Lote de pesas de 5 kg con clase M1; certificado  CMP 0144 y fecha de calibración 2016-01-27.",
];
var obj15 = [
  "PIM - 002; Lote de pesas de  2kg  con clase F1; certificado DA 3593 y fecha de  calibración 2015-11-17.",
];
var obj16 = [
  "LPTM - 002; Lote de pesa de 20 kg con clase M2; certificado CMP 0457 y fecha de  calibración 2016-05-13.",
];
var obj17 = [
  "LPTM - 003; Lote de pesa de 10 kg con clase M2; certificado CMP 0223 y fecha de  calibración 2016-02-29.",
];
var obj18 = [
  "LPTM - 004; Lote de pesa de 5 kg con clase activador2; certificado CMP 0224 y fecha de  calibración 2016-02-29.",
];
//Nuevos
var obj27 = [
  "JPTM - 003; Lote de pesas de 1mg a 500mg con clase E2, Certificado CAP-034-16 y fecha de calibración 2016-01-29.",
];
var obj28 = [
  "JPTM - 004; Lote de pesas de 1g a 200g con clase E2 serie ; certificado CAP-035-16 y fecha de calibración 2016-01-29.",
];
var obj35 = [
  "LPTM - 005; Lote de pesa de 20 kg con clase M2; certificado CMP 0606 y fecha de  calibración 2016-05-23.",
];

//CALI
var obj19 = [
  "JPTCA - 006; Juego de pesas de 1mg a 2kg  con clase f1; certificado DA 3327 y fecha de  calibración 2015-07-08.",
];
var obj20 = [
  "LPTCA - 001; Lote de pesa de 5 kg con clase m1; certificado CMP 0143 y fecha de calibración 2016-02-03.",
];
var obj21 = [
  "LPTCA - 002; Lote de pesa de 10 kg con clase m2; certificado CMP 0225 y fecha de  calibración 2016-02-24.",
];
var obj22 = [
  "LPTCA - 004; Lote de pesa de 20kg con clase m2; certificado CMP 0226 y fecha de  calibración 2016-06-24.",
];

//Nuevos

var obj36 = [
  "JPTCA - 007; Juego de pesas de 1mg a 500mg  con clase E2; certificado CAP 177-16 y fecha de  calibración 2016-06-24.",
];
var obj37 = [
  "JPTCA - 008; Juego de pesas de 1mg a 200mg  con clase E2; certificado CAP 178-16 y fecha de  calibración 2016-06-27.",
];

//BOGOTÁ
var obj23 = [
  "JPTBO - 001; Juego de pesas de 1g a 500g  con clase f1; certificado  CMP 0197 y fecha de calibración 2016-02-11.",
];
var obj24 = [
  "JPTBO - 002; Juego de pesas de 1mg a 500mg  con clase f1; certificado  CMP 0198 y fecha de calibración 2016-02-12.",
];
var obj25 = [
  "LPTBO - 002; Lote de pesa de 20 kg con clase m2; certificado DA 3584 y fecha de  calibración 2015-08-13.",
];
//Nuevos
var obj29 = [
  "JPTBO 003; Lote de pesas de 1mg a 500mg  con clase E2; certificado 30160 C y fecha de calibración 2016-04-17.",
];
var obj30 = [
  "JPTBO 004; Lote de pesas de 1mg a 200mg  con clase E2; certificado 30183 C y fecha de calibración 2016-04-17.",
];
var obj38 = [
  "JPTBO 005; Lote de pesas de 1g a 2kg  con clase F1; certificado CMP 0506 y fecha de calibración 2016-06-13.",
];
var obj39 = [
  "JPTBO 006; Lote de pesas de 1g a 5kg  con clase M1; certificado CMP 0505 y fecha de calibración 2016-06-13.",
];

var admitirAgregar = false;

var arrayOrdinario = new Array();

function agregarTrazabilidad() {
  $("#datosEquipo" + formulario + " .mas").addClass("masClass");
  admitirAgregar = true;
}

var arrayComponente = [
  "a.) Tornillos de Ajuste",
  "b.) Plataforma",
  "c.) Cuchillas",
  "d.) Palancas",
  "e.) Brazo",
  "f.) Regla de Indicación",
  "g.) Seguro o fija brazo",
  "h.) Tornillo Prisionero pilón",
  "i.) Estructura",
  "j.) Tornillería",
  "k.) Pesas Multiplicadoras",
  "i.) Sombrero",
  "m.) Pilón",
  "n.) Columna",
  "ñ.) Ruedas y Eje",
  "o.) Cojinetes",
  "p.) Estribos",
  "q.) Esferas",
  "r.) Pintura",
  "s.) Pilón Corredizo)",
]; //para la mecanica

var arrayComponente2 = [
  "a.)Platinas",
  "b.) Estructura",
  "c.) Topes",
  "d.) Tapa o  bandeja",
  "e.)Patas escualizables o fijas",
  "f.) Tornillería",
  "g.) Calzas",
  "a.) Tarjeta principal",
  "b.) Display",
  "c.) Teclado",
  "d.) Carcaza o tapas",
  "e.) Prensa estopas",
  "f.)  Adaptador/Cable",
  "a.)Cable(s) de celda(s)",
  "b.) Caja de juntas",
  "c.) Tarjeta Sumatoria",
  "d.) Foso",
  "e.) Pintura",
  "f.) Batería",
]; //para las electronicas

var arrayComponente3 = [
  "a.)	Plataforma",
  "b.) Sistema Mecánico",
  "c.) Topes",
  "d.) Barras sensores",
  "e.) Platinas de flexión",
  "f.) Soporte de Celda",
  "g.) Conectores de celda",
  "h.) Caja de Juntas",
  "i.) Tarjeta Principal",
  "j.)Display",
  "k.) Teclado",
  "l.) Carcaza",
  "m.) Prensa Estopas",
  "n.) Cable",
  "ñ.) Cable(s) de Celda(s)",
  "o.) Caja de Juntas",
  "p.) Foso",
  "e.) Pintura",
  "q.) Celdas Hidráulicas",
  "r.) Comunicación Rs 232",
  "s.) Tierras",
]; //camionera Electronica

var arrayComponente4 = [
  "a.) Adaptador / cable",
  "b.) Plato",
  "c.) Portaplato",
  "d.) Carcaza",
  "e.)  Cabina",
  "f.)  Forro de Protección",
  "g.) Teclado",
  "h.)  Nivel",
  "i.) Patas",
  "j.) Tarjeta Principal",
  "k.)  Display",
  "l.)  Conectores",
  "m.)  Celdas",
  "n.) Guias",
  "ñ.) Flexón frontal",
  "o.)  Flexón cortos",
  "p.) Tornillería",
  "q.) Sistema Mecánico",
  "r.) Pesa Interna",
  "s.) Det. De humedad",
  "t.) Sensor de temp.",
  "u.) Resistencia",
]; //analitica

function cambioEquipo(str) {
  $("#estados" + formulario + " .pExcentricidad").css("display", "block");
  $("#informe" + formulario + " #nodinamometro").css("display", "block");
  $("#informe" + formulario + " #cuadroNoMecanico").css({ display: "block" });

  $("#informe" + formulario + " .componentes").html("");
  tipoEquipo = str;

  if (tipoEquipo == "Bascula Camionera Electronica") {
    for (var b = 0; b < arrayComponente3.length; b++) {
      $("#informe" + formulario + " .componentes:eq(" + b + ")").html(
        arrayComponente3[b]
      );
    } //cierro for var a
  } else if (
    tipoEquipo == "Balanza Electronica" ||
    tipoEquipo == "Balanza Analitica" ||
    tipoEquipo == "Balanza Det Humedad"
  ) {
    for (var b = 0; b < arrayComponente4.length; b++) {
      $("#informe" + formulario + " .componentes:eq(" + b + ")").html(
        arrayComponente4[b]
      );
    } //cierro for var a
  } else if (
    tipoEquipo == "Bascula Electronica" ||
    tipoEquipo == "Bascula (Tipo tanque)" ||
    tipoEquipo == "Bascula (Tipo tolva)" ||
    tipoEquipo == "Bascula (Tipo silo)" ||
    tipoEquipo == "Dinamometro"
  ) {
    for (var b = 0; b < arrayComponente2.length; b++) {
      $("#informe" + formulario + " .componentes:eq(" + b + ")").html(
        arrayComponente2[b]
      );
    } //cierro for var a
  } else if (
    tipoEquipo == "Bascula Mecanica" ||
    tipoEquipo == "Balanza Mecanica" ||
    tipoEquipo == "Bascula Camionera Mecanica" ||
    tipoEquipo == "Bascula Camionera Electromecanica" ||
    tipoEquipo == "Bascula Electronica(Riel)"
  ) {
    for (var a = 0; a < arrayComponente.length; a++) {
      $("#informe" + formulario + " .componentes:eq(" + a + ")").html(
        arrayComponente[a]
      );
    } //cierro for var a
  } //cierro if tipoEquipo

  if (
    tipoEquipo == "Balanza Mecanica" ||
    tipoEquipo == "Bascula Mecanica" ||
    tipoEquipo == "Bascula Camionera Mecanica" ||
    tipoEquipo == "Bascula Electronica(Riel)"
  ) {
    $("#informe" + formulario + " #cuadroNoMecanico").css({ display: "none" });
  } else if (
    tipoEquipo == "Balanza Electronica" ||
    tipoEquipo == "Bascula Electronica" ||
    tipoEquipo == "Bascula (Tipo tanque)" ||
    tipoEquipo == "Bascula (Tipo tolva)" ||
    tipoEquipo == "Bascula (Tipo silo)" ||
    tipoEquipo == "Bascula Camionera Electromecanica" ||
    tipoEquipo == "Balanza Analitica" ||
    tipoEquipo == "Balanza Det Humedad"
  ) {
    $("#informe" + formulario + " #nodinamometro").css("display", "none");
  }

  if (tipoEquipo == "Dinamometro") {
    $("#estados" + formulario + " .pExcentricidad").css("display", "none");
    $("#informe" + formulario + " #nodinamometro").css("display", "none");
  } else {
    /*$(".pExcentricidad").css("display","block");
		$("#nodinamometro").css("display","block");	*/
  }
} //cierro funcion cuando cambia equipo

/*$("input").blur(function(){
	
	this.value = Number(this.value).toFixed(2);
	
	})*/
var mn = new Array();

function ponerFormato(str) {
  var mn2 = 20;
  var maxDs;
  var index = $(
    "#estados" + formulario + " .listasExactitud tr td #cargaExactitud"
  ).index(str);

  if (index === 4) {
    var valor = $(
      "#estados" +
        formulario +
        " .listasExactitud tr td #cargaExactitud:eq(" +
        index +
        ")"
    ).val();
    for (var i = 0; i < arrayOrdinario.length; i++) {
      if (arrayOrdinario[i] == "M3") {
        mn.splice(i, 1, 0);
      } else if (arrayOrdinario[i] == "M2") {
        mn.splice(i, 1, 1);
      } else if (arrayOrdinario[i] == "M1") {
        mn.splice(i, 1, 2);
      } else if (arrayOrdinario[i] == "F2") {
        mn.splice(i, 1, 3);
      } else if (arrayOrdinario[i] == "F1") {
        mn.splice(i, 1, 4);
      } else if (arrayOrdinario[i] == "E2") {
        mn.splice(i, 1, 5);
      } else {
        mn.splice(i, 1, 6);
      }
    } //CIERRA FOR
  } //CIERRA IF INDEX

  for (var m = 0; m < mn.length; m++) {
    if (mn[m] < mn2) {
      mn2 = mn[m];
    }
  }

  var totalM = 0.0005 / Math.sqrt(Math.pow(10, mn2));

  if (ds2[0] >= ds2[1]) {
    maxDs = ds2[0];
  } else {
    maxDs = ds2[1];
  } //cierra else que sirve para sacer mayor desviacion

  totalM = (totalM * Number(valor)) / Math.sqrt(3);

  console.log(
    "resolucion: " + resolucion + " ds2 : " + maxDs + " totalM: " + totalM
  );
  var ue =
    2 *
    Math.sqrt(
      Math.pow(resolucion, 2) +
        Math.pow(resolucion, 2) +
        Math.pow(maxDs, 2) +
        Math.pow(totalM, 2)
    );
  ue = ue.toFixed(decimales + 1);
  $("#estados" + formulario + " #ue").html(ue);

  if (boleanDecimal == true) {
    decimalExclusivo = parseInt(decimales + 1);
    console.log(decimalExclusivo);
    str.value = Number(str.value).toFixed(decimalExclusivo);
  }
}

function cambioRange(str) {
  str = $("#datosEquipo" + formulario + " #rangeI").val();

  if (str == "single") {
    $("#datosEquipo" + formulario + " .cap2").fadeOut("fast");
    $("#datosEquipo" + formulario + " .dI2").fadeOut("fast");
    $("#datosEquipo" + formulario + " .eI2").fadeOut("fast");

    $("#datosEquipo" + formulario + " .cap1").fadeOut("fast");
    $("#datosEquipo" + formulario + " .dI1").fadeOut("fast");
    $("#datosEquipo" + formulario + " .eI1").fadeOut("fast");
    contadorRange = 0;
  } else if (str == "double") {
    $("#datosEquipo" + formulario + " .cap1").fadeIn("fast");
    $("#datosEquipo" + formulario + " .dI1").fadeIn("fast");
    $("#datosEquipo" + formulario + " .eI1").fadeIn("fast");

    $("#datosEquipo" + formulario + " .cap2").fadeOut("fast");
    $("#datosEquipo" + formulario + " .dI2").fadeOut("fast");
    $("#datosEquipo" + formulario + " .eI2").fadeOut("fast");
    contadorRange = 1;
  } else {
    $("#datosEquipo" + formulario + " .cap1").fadeIn("fast");
    $("#datosEquipo" + formulario + " .dI1").fadeIn("fast");
    $("#datosEquipo" + formulario + " .eI1").fadeIn("fast");

    $("#datosEquipo" + formulario + " .cap2").fadeIn("fast");
    $("#datosEquipo" + formulario + " .dI2").fadeIn("fast");
    $("#datosEquipo" + formulario + " .eI2").fadeIn("fast");

    contadorRange = 2;
  } //cierra else
} //cierra cambioRange

function obtenerIndex(str) {
  var index = $(".list").index(str);
  formulario = index;
  console.log("el valor del formulario:" + formulario);
}

$(".agregar").click(function () {
  identificador++;

  console.log("el valor del formulario:" + formulario);
  console.log("el valor del identificador:" + identificador);

  $(".listaEquipos").append(
    '<li class="list" onClick="obtenerIndex(this)"><a href="#datosEquipo' +
      identificador +
      '" data-role="button" data-transition="pop" class="datoE ui-btn ui-shadow ui-btn-corner-all ui-btn-up-c btnDatos" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span"> Datos del Equipo</a></li>'
  );
  crearEquipo();
  crearInforme();
  crearProtocolo();
});

function crearEquipo() {
  $("body").append(
    '<div data-role="page" id="datosEquipo' + identificador + '">'
  );

  $("#datosEquipo" + identificador).load("equipo.html #contenedor");
}

function crearInforme() {
  $("body").append('<div data-role="page" id="informe' + identificador + '">');

  $("#informe" + identificador).load("informe.html #contenedor", function () {
    var vocales2 = [
      "",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "ene",
      "o",
      "p",
      "q",
      "r",
      "s",
    ];

    for (var i = 0; i < vocales2.length; i++) {
      for (var l = 1; l < 7; l++) {
        var atributo = $(
          "#informe" +
            identificador +
            " .basculaMecanica #radio-choice-" +
            l +
            vocales2[i]
        ).attr("name");
        $(
          "#informe" +
            identificador +
            " .basculaMecanica #radio-choice-" +
            l +
            vocales2[i]
        ).attr("name", identificador + atributo);
      }
    }
  });
}

function crearProtocolo() {
  $("body").append('<div data-role="page" id="estados' + identificador + '">');

  $("#estados" + identificador).load("estados.html #contenedor");
}

//-----------Saber que medida es
function cambioMedida(str) {
  var valorMedida = $("#datosEquipo" + formulario + " #medidaI").val();

  $("#datosEquipo" + formulario + " .medida").html("(" + valorMedida + ")");
  $("#estados" + formulario + " .medida").html("(" + valorMedida + ")");
}
//Cierra medida-------------------

//----------Empieza los decimales
function cambioDecimal(str) {
  var decimalesParcial = $("#datosEquipo" + formulario + " #decimalI").val();

  decimales = parseInt(decimalesParcial);
  console.log(decimales);
}

//Cierra los decimaless

// ---------------------Escoger pesas

function trazabilidadF(str) {
  var objeto = eval("obj" + str);

  if (admitirAgregar) {
    $("#datosEquipo" + formulario + " #descripciones").append(
      "<hr>" + objeto[0]
    );
    arrayOrdinario.push(objeto[2]);
    //console.log("arrord"+arrayOrdinario);
  } else {
    $("#datosEquipo" + formulario + " #descripciones").html(objeto[0]);
    arrayOrdinario.length = 0;
    arrayOrdinario.push(objeto[2]);
  }

  admitirAgregar = false;
  $("#datosEquipo" + formulario + " .mas").removeClass("masClass");
} //cierra funcion trazabilidad

//cierra objetos

//Cierra escojer pesas

function guardarPruebas() {
  var pagina = "#equiposRealizar";
  function redireccionar() {
    location.href = pagina;
  }
  redireccionar();
}

function guardarFirma() {
  var pagina = "#menu";
  function redireccionar() {
    location.href = pagina;
  }
  redireccionar();
}

function guardarEquipo() {
  //console.log("vale identificador"+identificador+"y formulario"+ formulario);
  $("#estados" + formulario + " .indicaD").html("");
  $("#estados" + formulario + " .indicaCapMin").html("");

  for (var f = 0; f < 3; f++) {
    var capMuestra = $("#datosEquipo" + formulario + " .cap" + f).val();
    var des = $("#datosEquipo" + formulario + " .eI" + f).val();

    if (capMuestra != "") {
      console.log("indicaa " + capMuestra + " " + des);
      $("#estados" + formulario + " .indicaCapMin").append(capMuestra + " / ");

      $("#estados" + formulario + " .indicaD").append(des + " / ");
    }
  } //CIERRA FOR PARA PONER RECUERDO

  var equipo = $("#datosEquipo" + formulario + " #equipoI").val();

  var serie = $("#datosEquipo" + formulario + " .nSerieI").val();

  var d = $("#datosEquipo" + formulario + " #dI").val();
  resolucion = d / (2 * Math.sqrt(3));

  var pagina = "#equiposRealizar";
  function redireccionar() {
    location.href = pagina;
  }
  redireccionar();

  $("#equipos .listaEquipos li .datoE:eq(" + formulario + ")").html("");
  $("#equipos .listaEquipos li .datoE:eq(" + formulario + ")").append(
    formulario + 1 + ") " + "Datos del Equipo:" + " " + equipo + " " + serie
  );

  $("#equipos .listaEquipos .list:eq(" + formulario + ") .subitems").remove();
  $("#equipos .listaEquipos .list:eq(" + formulario + ")").append(
    '<ul class="subitems"><li><a href="#informe' +
      formulario +
      '">Informe</a></li><li class="protocolo" onClick="indexFormas(this)"><a href="#estados' +
      formulario +
      '"> Protocolo</a></li></ul>'
  );

  var tolerancia = $("#datosEquipo" + formulario + " #tolerancias").val();
  $("#estados" + formulario + " .tolerancia").html("");
  $("#estados" + formulario + " .tolerancia").append(" " + tolerancia);

  /*	$(".carga").html(medidaEstados);*/

  var valorEquipo = $("#datosEquipo" + formulario + " #equipoI").val();

  if (valorEquipo == "Balanza Analitica") {
    boleanDecimal = true;
    balanAnalitica = true;
    decimalExclusivo2 = decimales + 1;
    listasRepetibilidad = 10;
    $("#estados" + formulario + " .listasRepetibilidad").html("");
    $("#estados" + formulario + " .listasRepetibilidad2").html("");

    for (var i = 1; i <= listasRepetibilidad; i++) {
      $("#estados" + formulario + " .listasRepetibilidad").append(
        "<tr><th>" +
          i +
          '</th><td><input type="text" id="indRepetibilidad" onBlur="resultadoRepetibilidad(this)"></td><td><input type="text" class="resultado2" disabled></td></tr>'
      );
    }

    for (var k = 1; k <= listasRepetibilidad; k++) {
      $("#estados" + formulario + " .listasRepetibilidad2").append(
        '<tr><td><input type="text" id="indRepetibilidad" onBlur="resultadoRepetibilidad(this)"></td><td><input type="text" class="resultado2" disabled></td></tr>'
      );
    }
  } else {
    boleanDecimal = false;
    balanAnalitica = false;
    decimalExclusivo2 = decimales;
  }
} //cierra guardar Equipo

function guardarInforme() {
  var pagina = "#equiposRealizar";
  function redireccionar() {
    location.href = pagina;
  }
  redireccionar();
}

function borrar() {
  $(".list:eq(" + formulario + ")").remove();
  $("#informe:eq(" + formulario + ")").remove();
  identificador--;
  console.log("el valor del formulario:" + formulario);
  console.log("el valor del identificador:" + identificador);
  var pagina = "#equiposRealizar";
  function redireccionar() {
    location.href = pagina;
  }
  redireccionar();
}

function guardarInfoCliente() {
  var pagina = "#menu";
  function redireccionar() {
    location.href = pagina;
  }
  redireccionar();
}

function indexFormas(str) {
  var indexProtocolo = $(".protocolo").index(str);
  indexForma = indexProtocolo;
  console.log("el valor del indexForma:" + indexForma);
}

var numero;
var indexCarga;
var valorIndexCarga;

var valoresCargaRepe = new Array();
var valoresEiRepe = new Array();

function capturaCarga(str) {
  indexCarga = $(
    "#estados" + formulario + " #repetibilidad .cargaRepetibilidad"
  ).index(str);

  valorIndexCarga = $(
    "#estados" +
      formulario +
      " #repetibilidad .cargaRepetibilidad:eq(" +
      indexCarga +
      ")"
  ).val();

  todosRangos2.unshift(0);
  console.log(todosRangos2);
  for (var i = 0; i < todosRangos2.length; i++) {
    if (
      valorIndexCarga > todosRangos2[i] &&
      valorIndexCarga <= todosRangos2[i + 1]
    ) {
      valoresCargaRepe.splice(
        indexCarga,
        1,
        $("#datosEquipo" + formulario + " .toleran:eq(" + i + ")").text()
      );
    } //cierro if
  } //cierro for

  console.log("index carga: " + valoresCargaRepe);
  todosRangos2.shift();
}

function generarTablaResistencias() {
  var propiedad = $("#informe" + formulario + " #nodinamometro").css("display");
  if (propiedad == "none") {
    $("#informe" + formulario + " #nodinamometro").css("display", "block");
  } else {
    $("#informe" + formulario + " #nodinamometro").css("display", "none");
  }
}

function resultadoRepetibilidad(str) {
  console.log("valor carga:" + valorIndexCarga);
  str.value = Number(str.value).toFixed(decimales);
  var resindrep;
  var indrep = $(
    "#estados" +
      formulario +
      " .listasR:eq(" +
      indexCarga +
      ") #indRepetibilidad"
  ).index(str); //es el index

  resindrep = $(
    "#estados" +
      formulario +
      " .listasR:eq(" +
      indexCarga +
      ") tr td #indRepetibilidad:eq(" +
      indrep +
      ")"
  ).val();

  var eiMax = -100000;
  var eiMin = 10000;

  var promedio = 0;
  var ds = 0;

  var forAnalitica = 0;
  var divisor = 0;

  var repeMayor = 0;
  resindrep = resindrep - valorIndexCarga;

  $(
    "#estados" +
      formulario +
      " .listasR:eq(" +
      indexCarga +
      ") .resultado2:eq(" +
      indrep +
      ")"
  ).val(resindrep.toFixed(decimales));

  if (balanAnalitica) {
    forAnalitica = 9;
    divisor = 10;
  } else {
    forAnalitica = 4;
    divisor = 5;
  }

  for (var i = 0; i <= forAnalitica; i++) {
    var maxI2 = $(
      "#estados" +
        formulario +
        " .listasR:eq(" +
        indexCarga +
        ") .resultado2:eq(" +
        i +
        ")"
    ).val();

    promedio = promedio + Number(maxI2);

    /* ds=ds+promedio;*/

    if (maxI2 != "") {
      if (Number(maxI2) >= eiMax) {
        eiMax = maxI2;
      }

      if (Number(maxI2) <= eiMin) {
        eiMin = maxI2;
      }
    } //cierra if maxI2

    repeMayor = eiMax - eiMin;
    valoresEiRepe.splice(indexCarga, 1, repeMayor);
  } //cierra for

  promedio = promedio / divisor;

  for (var i = 0; i <= forAnalitica; i++) {
    var maxI2 = $(
      "#estados" +
        formulario +
        " .listasR:eq(" +
        indexCarga +
        ") .resultado2:eq(" +
        i +
        ")"
    ).val();
    var x = promedio - Number(maxI2);
    x = Math.pow(x, 2);
    ds = ds + x;
  }

  ds = Math.sqrt(ds / forAnalitica);
  ds2.splice(indexCarga, 1, ds);
  console.log("ds2: " + ds2);
  console.log("promedio vale " + promedio + " ds vale: " + ds);
  console.log(
    "eimax es " + eiMax + " Ei min es " + eiMin + " repe mayor es:" + repeMayor
  );

  repeMayor = 0;
  if (indexCarga == 0) {
    console.log(valoresEiRepe[0]);
    $("#estados" + formulario + " #maxI2").html(
      valoresEiRepe[0].toFixed(decimales + 1)
    );
    $("#estados" + formulario + " #emp2").html(
      Number(valoresCargaRepe[0]).toFixed(decimales + 1)
    );

    if (valoresEiRepe[0] <= valoresCargaRepe[0]) {
      $("#estados" + formulario + " .mayorOmenor2").html(" ≤ ");
      $("#estados" + formulario + " #conformidad2").html("Si");
      $("#estados" + formulario + " #conformidad2").addClass("conformidadSi");
      $("#estados" + formulario + " #conformidad2").removeClass(
        "conformidadNo"
      );
    } else {
      $("#estados" + formulario + " .mayorOmenor2").html(" > ");
      $("#estados" + formulario + " #conformidad2").html("No");
      $("#estados" + formulario + " #conformidad2").addClass("conformidadNo");
      $("#estados" + formulario + " #conformidad2").removeClass(
        "conformidadSi"
      );
    }

    if (tipoTolerancia == "Fabricante") {
      var dsFabricante = $("#equiposRealizar" + formulario + " #ds").val();

      $("#estados" + formulario + " #maxI2").html(ds);
      $("#estados" + formulario + " #emp2").html(dsFabricante);

      if (ds <= dsFabricante) {
        $("#estados" + formulario + " .mayorOmenor2").html(" ≤ ");
        $("#estados" + formulario + " #conformidad2").html("Si");
        $("#estados" + formulario + " #conformidad2").addClass("conformidadSi");
        $("#estados" + formulario + " #conformidad2").removeClass(
          "conformidadNo"
        );
      } else {
        $("#estados" + formulario + " .mayorOmenor2").html(" > ");
        $("#estados" + formulario + " #conformidad2").html("No");
        $("#estados" + formulario + " #conformidad2").addClass("conformidadNo");
        $("#estados" + formulario + " #conformidad2").removeClass(
          "conformidadSi"
        );
      } //cierra else
    } //cierra if tipoTolerancia

    if (forAnalitica == 9) {
      $("#estados" + formulario + " #maxI2").html(ds);
      $("#estados" + formulario + " #emp2").html(
        Number(valoresCargaRepe[0]).toFixed(decimales + 1)
      );
      if (ds <= valoresCargaRepe[0]) {
        $("#estados" + formulario + " .mayorOmenor2").html(" ≤ ");
        $("#estados" + formulario + " #conformidad2").html("Si");
        $("#estados" + formulario + " #conformidad2").addClass("conformidadSi");
        $("#estados" + formulario + " #conformidad2").removeClass(
          "conformidadNo"
        );
      } else {
        $("#estados" + formulario + " .mayorOmenor2").html(" > ");
        $("#estados" + formulario + " #conformidad2").html("No");
        $("#estados" + formulario + " #conformidad2").addClass("conformidadNo");
        $("#estados" + formulario + " #conformidad2").removeClass(
          "conformidadSi"
        );
      } //cierra else

      /*if(tipoTolerancia=="Fabricante"){
		
				var dsFabricante=$("#ds").val();

				  $("#maxI2b").html(ds);
				  $("#emp2b").html(dsFabricante);
				  
				  if(ds <= dsFabricante){
						  
					$(".mayorOmenor2b").html(" ≤ ");
					$("#conformidad2b").html("Si");
					$("#conformidad2b").addClass('conformidadSi');
					$("#conformidad2b").removeClass('conformidadNo');
					}else{
					
					$(".mayorOmenor2b").html(" > ");	
					$("#conformidad2b").html("No");
					$("#conformidad2b").addClass('conformidadNo');
					$("#conformidad2b").removeClass('conformidadSi');	
				  }//cierra else
	          }//cierra if tipoTolerancia */
    } //cierrra for analitica
  } //cierra if indexCarga
  else {
    $("#estados" + formulario + " #maxI2b").html(
      valoresEiRepe[1].toFixed(decimales + 2)
    );
    $("#estados" + formulario + " #emp2b").html(
      Number(valoresCargaRepe[1]).toFixed(decimales + 1)
    );

    if (valoresEiRepe[1] <= valoresCargaRepe[1]) {
      $("#estados" + formulario + " .mayorOmenor2b").html(" ≤ ");
      $("#estados" + formulario + " #conformidad2b").html("Si");
      $("#estados" + formulario + " #conformidad2b").addClass("conformidadSi");
      $("#estados" + formulario + " #conformidad2b").removeClass(
        "conformidadNo"
      );
    } else {
      $("#estados" + formulario + " .mayorOmenor2b").html(" > ");
      $("#estados" + formulario + " #conformidad2b").html("No");
      $("#estados" + formulario + " #conformidad2b").addClass("conformidadNo");
      $("#estados" + formulario + " #conformidad2b").removeClass(
        "conformidadSi"
      );
    } //cierra else

    if (tipoTolerancia == "Fabricante") {
      var dsFabricante = $("#datosEquipo" + formulario + " #ds").val();

      $("#estados" + formulario + " #maxI2b").html(ds);
      $("#estados" + formulario + " #emp2b").html(dsFabricante);

      if (ds <= dsFabricante) {
        $("#estados" + formulario + " .mayorOmenor2b").html(" ≤ ");
        $("#estados" + formulario + " #conformidad2b").html("Si");
        $("#estados" + formulario + " #conformidad2b").addClass(
          "conformidadSi"
        );
        $("#estados" + formulario + " #conformidad2b").removeClass(
          "conformidadNo"
        );
      } else {
        $("#estados" + formulario + " .mayorOmenor2b").html(" > ");
        $("#estados" + formulario + " #conformidad2b").html("No");
        $("#estados" + formulario + " #conformidad2b").addClass(
          "conformidadNo"
        );
        $("#estados" + formulario + " #conformidad2b").removeClass(
          "conformidadSi"
        );
      } //cierra else
    } //cierra if tipoTolerancia

    if (forAnalitica == 9) {
      $("#estados" + formulario + " #maxI2b").html(ds);
      $("#estados" + formulario + " #emp2b").html(
        Number(valoresCargaRepe[1]).toFixed(decimales + 2)
      );

      if (ds <= valoresCargaRepe[1]) {
        $("#estados" + formulario + " .mayorOmenor2b").html(" ≤ ");
        $("#estados" + formulario + " #conformidad2b").html("Si");
        $("#estados" + formulario + " #conformidad2b").addClass(
          "conformidadSi"
        );
        $("#estados" + formulario + " #conformidad2b").removeClass(
          "conformidadNo"
        );
      } else {
        $("#estados" + formulario + " .mayorOmenor2b").html(" > ");
        $("#estados" + formulario + " #conformidad2b").html("No");
        $("#estados" + formulario + " #conformidad2b").addClass(
          "conformidadNo"
        );
        $("#estados" + formulario + " #conformidad2b").removeClass(
          "conformidadSi"
        );
      } //cierra else

      /*if(tipoTolerancia=="Fabricante"){
		
				var dsFabricante=$("#ds").val();

				  $("#maxI2b").html(ds);
				  $("#emp2b").html(dsFabricante);
				  
				  if(ds <= dsFabricante){
						  
					$(".mayorOmenor2b").html(" ≤ ");
					$("#conformidad2b").html("Si");
					$("#conformidad2b").addClass('conformidadSi');
					$("#conformidad2b").removeClass('conformidadNo');
					}else{
					
					$(".mayorOmenor2b").html(" > ");	
					$("#conformidad2b").html("No");
					$("#conformidad2b").addClass('conformidadNo');
					$("#conformidad2b").removeClass('conformidadSi');	
				  }//cierra else
	          }//cierra if tipoTolerancia */
    } //cierrra for analitica
  } //cierra else grande

  if (
    $("#estados" + formulario + " #conformidad2").text() == "Si" &&
    $("#estados" + formulario + " #conformidad2b").text() == "Si"
  ) {
  } else {
  }
} //cierra funcion resultadoRepetibilidad

function numeroFormas() {
  $("#estados" + formulario + " #fotoForma").html("");
  $("#estados" + formulario + " .listasExcentricidad").html("");

  numero = $("#estados" + formulario + " #formas").val();

  $("#estados" + formulario + " #fotoForma").append(
    "<img src='img/" + numero + ".png' width='100%'>"
  );

  if (numero == "c2") {
    numero = 4;
  } else if (
    numero == "t3" ||
    numero == "tms3" ||
    numero == "tbp3" ||
    numero == "riel"
  ) {
    numero = 3;
  } else if (
    numero == "t4" ||
    numero == "ta4" ||
    numero == "tbp4" ||
    numero == "tlar4"
  ) {
    numero = 4;
  } else if (numero == "cdra5" || numero == "clar5") {
    numero = 5;
  } else if (numero == "c3") {
    numero = 6;
  } else if (numero == "c4") {
    numero = 8;
  } else if (numero == "c5") {
    numero = 10;
  }

  for (var i = 1; i <= numero; i++) {
    $("#estados" + formulario + " .listasExcentricidad").append(
      "<tr><th>" +
        i +
        "</th><td><input type='number' class='indicacion' onBlur='excentricidad(this," +
        numero +
        ")'></td><td><input type='text' class='resultado' disabled ></td></tr>"
    );
  } //cierra ciclo
}

var valorAbsTotal = 0;
var eMP = 0;
var eMP3 = 0;

function excentricidad(str, numero) {
  str.value = Number(str.value).toFixed(decimales);

  for (var i = 0; i < numero; i++) {
    var indicacion = $(
      "#estados" + formulario + " .indicacion:eq(" + i + ")"
    ).val();
    if (i == 0) {
      var Ii = indicacion;
    }
  } //cierra ciclo

  for (var i = 0; i < numero; i++) {
    if (i == 0) {
      var resultado = $(
        "#estados" + formulario + " .resultado:eq(" + i + ")"
      ).val(0);
    } else {
      indicacion = $(
        "#estados" + formulario + " .indicacion:eq(" + i + ")"
      ).val();

      var final = indicacion - Ii;
      if (final > iiI1) {
        iiI1 = final;
        console.log(iiI1);
      }
      resultado = $("#estados" + formulario + " .resultado:eq(" + i + ")").val(
        final.toFixed(decimales)
      );
    }
  } //cierra ciclo

  for (var k = 0; k < numero; k++) {
    var valorAbs = Math.abs(
      $("#estados" + formulario + " .resultado:eq(" + k + ")").val()
    );

    if (valorAbs >= valorAbsTotal) {
      valorAbsTotal = valorAbs;
    } //cierro if
  } //cierro var k

  console.log("valorAbsTotal: " + valorAbsTotal);
  $("#estados" + formulario + " #maxI").html("  " + valorAbsTotal);
  console.log("emp vale : " + eMP);
  $("#estados" + formulario + " #emp").html("  " + eMP);

  if (valorAbsTotal <= eMP) {
    $("#estados" + formulario + " .mayorOmenor").html(" ≤ ");
    $("#estados" + formulario + " #conformidad").html("Si");
    $("#estados" + formulario + " #conformidad").addClass("conformidadSi");
    $("#estados" + formulario + " #conformidad").removeClass("conformidadNo");
  } else {
    $("#estados" + formulario + " .mayorOmenor").html(" > ");
    $("#estados" + formulario + " #conformidad").html("No");
    $("#estados" + formulario + " #conformidad").addClass("conformidadNo");
    $("#estados" + formulario + " #conformidad").removeClass("conformidadSi");
  }

  valorAbsTotal = 0;
} //cierro excentricidad

function compararExtdd(str) {
  todosRangos2.unshift(0);

  for (var i = 0; i < todosRangos2.length; i++) {
    if (str >= todosRangos2[i] && str <= todosRangos2[i + 1]) {
      eMP = $("#datosEquipo" + formulario + " .toleran:eq(" + i + ")").text();
    }
  }

  if (tipoTolerancia == "Fabricante") {
    var deFabricante = $("#datosEquipo" + formulario + " #de").val();
    eMP = deFabricante;
  }

  todosRangos2.shift();
} //	cierra compararExtdd

var criterioFinal = true;
function obtenerErrorExactitud(str) {
  str.value = Number(str.value).toFixed(decimales);
  var indexac = $(
    "#estados" + formulario + " .listasExactitud #indExactitud"
  ).index(str); //es el index

  var cargaexact = $(
    "#estados" +
      formulario +
      " .listasExactitud #cargaExactitud:eq(" +
      indexac +
      ")"
  ).val();

  var valindexact = $(
    "#estados" +
      formulario +
      " .listasExactitud #indExactitud:eq(" +
      indexac +
      ")"
  ).val();

  var totalres3 = valindexact - cargaexact;

  var valindexact = $(
    "#estados" +
      formulario +
      " .listasExactitud .resultado3:eq(" +
      indexac +
      ")"
  ).val(totalres3.toFixed(decimalExclusivo2));

  var nueva = 8 - indexac;

  $(
    "#estados" +
      formulario +
      " .listasExactitud #cargaExactitud:eq(" +
      nueva +
      ")"
  ).val(cargaexact);

  todosRangos2.unshift(0);
  criterioFinal = true;
  for (var i = 0; i <= indexac; i++) {
    var maxI3 = Math.abs(
      $(
        "#estados" + formulario + " .listasExactitud .resultado3:eq(" + i + ")"
      ).val()
    );
    var eMP3 = $(
      "#estados" +
        formulario +
        " .listasExactitud #cargaExactitud:eq(" +
        i +
        ")"
    ).val();

    console.log("maxi es " + maxI3 + " emp3 " + eMP3);
    for (var l = 0; l < todosRangos2.length; l++) {
      if (eMP3 >= todosRangos2[l] && eMP3 <= todosRangos2[l + 1]) {
        eMP3 = $(
          "#datosEquipo" + formulario + " .toleran:eq(" + l + ")"
        ).text();

        if (tipoTolerancia == "Fabricante") {
          var dlFabricante = $("#datosEquipo" + formulario + " #dl").val();

          eMP3 = dlFabricante;
        }

        console.log("emp3 vale:" + eMP3);
        if (maxI3 <= eMP3) {
          console.log("emp3 " + eMP3 + "es mayor que : " + maxI3);
          console.log(criterioFinal);
        } else {
          console.log("emp3 " + eMP3 + "es menor que : " + maxI3);
          criterioFinal = false;
          break;
        }
      }
    } //cierra for l

    if (tipoTolerancia == "Fabricante") {
      var dlFabricante = $("#datosEquipo" + formulario + " #dl").val();

      eMP3 = dlFabricante;

      console.log("emp3 vale:" + eMP3);
      if (maxI3 <= eMP3) {
        console.log("emp3 " + eMP3 + "es mayor que : " + maxI3);
        console.log(criterioFinal);
      } else {
        console.log("emp3 " + eMP3 + "es menor que : " + maxI3);
        criterioFinal = false;
      }
    } //cierro if tipoTolerancia
  } //cierra for i

  if (!criterioFinal) {
    /*$(".mayorOmenor3").html(" > ");	*/
    $("#estados" + formulario + " #conformidad3").html("No");
    $("#estados" + formulario + " #conformidad3").addClass("conformidadNo");
    $("#estados" + formulario + " #conformidad3").removeClass("conformidadSi");
    /*$("#maxI3").html("  "+maxI3);
			$("#emp3").html("  "+eMP3);*/
  } else {
    /*$(".mayorOmenor3").html(" ≤ ");*/
    $("#estados" + formulario + " #conformidad3").html("Si");
    $("#estados" + formulario + " #conformidad3").addClass("conformidadSi");
    $("#estados" + formulario + " #conformidad3").removeClass("conformidadNo");
  }

  todosRangos2.shift();
}

//cambio tolerancias
var capMinima;
var valorClase;
var es = new Array();
var rango = 0;

var clases = new Array();

var capacidades = new Array();
var ds = new Array();
var eses = new Array();

var tipoTolerancia;

var todasTolerancias = new Array();
var todasTolerancias2 = new Array();

var todasCapMin = new Array();

var todosRangos = new Array();
var todosRangos2 = new Array();
var contarRangoFinal = 0;

function cambioTolerancias(str) {
  todosRangos.length = 0;
  todosRangos2.length = 0;
  todasTolerancias.length = 0;
  todasTolerancias2.length = 0;
  clases.length = 0;
  todasCapMin.length = 0;
  capacidades.length = 0;
  ds.length = 0;
  eses.length = 0;

  str = $("#datosEquipo" + formulario + " #tolerancias").val();

  tipoTolerancia = str;
  $("#datosEquipo" + formulario + " .listasrangos input").val("");
  $("#datosEquipo" + formulario + " .cero").val(0);

  if (str == "OIMLR 76-1") {
    $("#datosEquipo" + formulario + " #cuadroClasificacion").fadeIn("fast");
    $("#datosEquipo" + formulario + " #cuadroClasificacion2").fadeOut("fast");
    /*alert(contadorRange);	*/
    for (var j = 0; j <= contadorRange; j++) {
      $("#datosEquipo" + formulario + " .clase").html("");
      var capacidad = $(
        "#datosEquipo" + formulario + " #rangos div #capacidadI:eq(" + j + ")"
      ).val();
      var d = $(
        "#datosEquipo" + formulario + " #rangos div #dI:eq(" + j + ")"
      ).val();
      var e = $(
        "#datosEquipo" + formulario + " #rangos div #eI:eq(" + j + ")"
      ).val();
      var clase = capacidad / e;
      var unidad = $(
        "#datosEquipo" + formulario + " .medida:eq(" + 0 + ")"
      ).text();

      console.log(capacidad + " " + d + " " + e + " " + clase + " " + unidad);

      capacidades.push(capacidad);
      ds.push(d);
      eses.push(e);

      if (clase > 100000) {
        /*alert("soy clase 1");*/
        capMinima = 100 * e;
        todasCapMin.push(capMinima);
        console.log("capacidad Minima es:" + capMinima);
        valorClase = 50000;

        clases.push(1);

        es[0] = 1;
        es[1] = 4;
        es[2] = 20;
        for (var i = 0; i <= 2; i++) {
          rango = valorClase * es[i] * e;
          if (rango > capacidad) {
            rango = capacidad;
          }

          todasTolerancias.push(e * (i + 1).toFixed(decimales));

          todosRangos.push(rango);
        } //cierra for
      } else if (clase <= 100000 && clase > 10000) {
        /*alert("soy clase 2");*/

        valorClase = 5000;

        clases.push(2);

        es[0] = 1;
        es[1] = 4;
        es[2] = 20;

        for (var i = 0; i <= 2; i++) {
          rango = valorClase * es[i] * e;
          if (rango > capacidad) {
            rango = capacidad;
          }

          todasTolerancias.push(e * (i + 1).toFixed(decimales));

          todosRangos.push(rango);
        } //cierra for

        if (
          (e >= 0.1 && unidad == "(g)") ||
          (e >= 0.0001 && unidad == "(kg)")
        ) {
          capMinima = 50 * e;
          todasCapMin.push(capMinima);
        } else {
          capMinima = 20 * e;
          todasCapMin.push(capMinima);
        }

        console.log("capacidad Minima es:" + capMinima);
      } else if (clase <= 10000 && clase > 1000) {
        /*alert("soy clase 3");*/
        capMinima = 20 * e;
        todasCapMin.push(capMinima);

        console.log("capacidad Minima es:" + capMinima);

        valorClase = 500;

        clases.push(3);

        es[0] = 1;
        es[1] = 4;
        es[2] = 20;
        for (var i = 0; i <= 2; i++) {
          rango = valorClase * es[i] * e;
          if (rango > capacidad) {
            rango = capacidad;
          }

          todasTolerancias.push(e * (i + 1).toFixed(decimales));

          todosRangos.push(rango);
        } //cierra for
      } else {
        /*alert("soy clase 4");*/
        capMinima = 10 * e;
        todasCapMin.push(capMinima);

        console.log("capacidad Minima es:" + capMinima);

        valorClase = 50;

        clases.push(4);

        es[0] = 1;
        es[1] = 4;
        es[2] = 20;
        console.log("es es: " + es);
        for (var i = 0; i <= 2; i++) {
          rango = valorClase * es[i] * e;
          if (rango > capacidad) {
            rango = capacidad;
          }

          todasTolerancias.push(e * (i + 1).toFixed(decimales));
          console.log("torencia vale:" + todasTolerancias);
          todosRangos.push(rango);
        } //cierra for
      } //cierra else

      $("#datosEquipo" + formulario + " #capMinI").val(todasCapMin[0]);
    } //cierro j

    for (var p = 0; p < todosRangos.length; p++) {
      if (p >= 1) {
        if (todosRangos[p] > parseInt(todosRangos2[todosRangos2.length - 1])) {
          var posTr = todosRangos.indexOf(todosRangos[p]);
          todasTolerancias2.push(todasTolerancias[posTr].toFixed(decimales));
          todosRangos2.push(parseInt(todosRangos[p]));
        } //cierra if
      } else {
        todosRangos2.push(todosRangos[p]);
        $("#datosEquipo" + formulario + " .toleran:eq(" + p + ")").html(
          todasTolerancias[p]
        );
      } //cierra if (p >= 1)
    } //cierro for

    for (var g = 0; g < todosRangos2.length; g++) {
      $("#datosEquipo" + formulario + " .r" + [g]).val(todosRangos2[g]);
      $("#datosEquipo" + formulario + " .listasrangos .rl" + [g]).fadeIn(
        "fast"
      );
    } //cierra for sacarRangos

    for (var h = 0; h < todosRangos2.length - 1; h++) {
      $("#datosEquipo" + formulario + " .rn" + [h]).val(todosRangos2[h]);
    } //cierra for sacarRangos

    for (var f = 0; f < todasTolerancias2.length; f++) {
      $("#datosEquipo" + formulario + " .toleran:eq(" + (f + 1) + ")").html(
        todasTolerancias2[f]
      );
    } //cierra for sacarRangos
  } // cierra primer if
  else {
    $("#datosEquipo" + formulario + " #cuadroClasificacion2").fadeIn("fast");
    $("#datosEquipo" + formulario + " #cuadroClasificacion").fadeOut("fast");
  }

  var boleanImg = false;
  console.log(clases);
  var identificarImagen = clases[0];

  for (var l = 0; l < clases.length; l++) {
    if (clases[l] == identificarImagen) {
      boleanImg = true;
    } else {
      boleanImg = false;
    }
  } //cierro for l

  if (boleanImg) {
    $("#datosEquipo" + formulario + " .clase").html(
      "<img src='img/clase" + identificarImagen + ".png'>"
    );
  } else {
    $("#datosEquipo" + formulario + " .clase").html("");
    for (var m = 0; m < clases.length; m++) {
      $("#datosEquipo" + formulario + " .clase").append(
        "<img src='img/clase" + clases[m] + ".png'>"
      );
    } //cierro for m
  } //cierro else de if boleanImg

  console.log(
    "Capacidades" + capacidades + " " + "las d" + ds + " " + "las e" + eses
  );
} //cierra funcion

function cambieCapMin(str) {
  if (str == "OIMLR") {
    $("#datosEquipo" + formulario + " #capMinI").attr("disabled", "disabled");
    $("#datosEquipo" + formulario + " #capMinI").val(capMinima);
  } else {
    $("#datosEquipo" + formulario + " #capMinI").removeAttr("disabled");
    $("#datosEquipo" + formulario + " #cuadroClasificacion div").removeClass(
      "ui-disabled"
    );
  }
}

// pagina de las firmas

$("#recibo").on("pageshow", function (event) {
  var name = new Array();

  for (i = 0; i <= identificador; i++) {
    name.push("Equipo Numero: " + (i + 1));
  }

  var html =
    '<fieldset id="listPlayers" data-role="controlgroup"><legend><h4>Equipos satisfechos:</h4></legend>';
  for (var int = 0; int <= identificador; int++) {
    html +=
      '<input type="checkbox" name="checkbox-' +
      int +
      'a" id="checkbox-' +
      int +
      'a" class="custom" /><label for="checkbox-' +
      int +
      'a">' +
      name[int] +
      "</label>";
  }

  $("#list").html(html + "</fieldset");

  //$("#listPlayers").controlgroup();
  // Does not work either
  $("#list").trigger("create");
});

//los select del informe que dependen de la seleccion de equipo

/*$( "#informe0" ).on( "pageshow", function( event ) {
	
	    
		
		if(tipoEquipo == "Bascula Camionera Electrónica"){
			
			
			$(".camioneraElectronica").css({display:"table"});
			
		}else if(tipoEquipo == "Balanza Electrónica" || tipoEquipo == "Balanza Analitica" ){
			
			$(".balanzaAnalitica").css({display:"table"});
			
		}else if(tipoEquipo == "Bascula Electrónica" || tipoEquipo == "Bascula (Tipo tanque)" || tipoEquipo == "(Tipo tolva)" ||                 tipoEquipo == "Bascula (Tipo silo)"){
			
			$(".basculaElectronica").css({display:"table"});
			
		}else if(tipoEquipo == "Bascula Mecánica" || tipoEquipo == "Balanza Mecánica" || tipoEquipo == "Bascula Camionera Mecánica" ||                 tipoEquipo == "Bascula Camionera Electromecánica"){
			
			$(".basculaMecanica").css({display:"table"});
			
		}
	
})*/
//cierro los select

//grafica

var arrayErrores = new Array();
var arrayErrores2 = new Array();

var arrayCargas = new Array();
var valorMax = 5;
var valorMin = -5;

var arrayTolerancias = new Array();

function mostrarGrafica() {
  $("#estados" + formulario + " .graph").attr("id", "graph" + formulario);

  arrayErrores.length = 0;
  arrayErrores2.length = 0;
  arrayCargas.length = 0;
  arrayTolerancias.length = 0;

  $(".taparLogo").css({ display: "block" });
  $(".taparX").css({ display: "block" });
  $(".taparY").css({ display: "block" });
  $(".taparTitulo").css({ display: "block" });

  var e = $("#datosEquipo" + formulario + " #eI").val();

  for (p = 0; p < 5; p++) {
    var cargas2 = $(
      "#estados" +
        formulario +
        " .listasExactitud #cargaExactitud:eq(" +
        p +
        ")"
    ).val();
    arrayCargas.push(parseFloat(cargas2));

    todosRangos2.unshift(0);
    console.log("todos los rangos2 vale:" + todosRangos2);

    for (var i = 0; i < todosRangos2.length; i++) {
      if (cargas2 > todosRangos2[i] && cargas2 <= todosRangos2[i + 1]) {
        arrayTolerancias.splice(
          p,
          1,
          $("#datosEquipo" + formulario + " .toleran:eq(" + i + ")").text()
        );
      } //cierro if
    } //cierro for

    console.log("index tolerancias: " + arrayTolerancias);
    todosRangos2.shift();
  } //cierro for p

  var myChart = new JSChart("graph" + formulario, "line");

  for (var q = 0; q < 5; q++) {
    var errorRes3 = $(
      "#estados" + formulario + " .listasExactitud .resultado3:eq(" + q + ")"
    ).val();

    if (errorRes3 > valorMax) {
      valorMax = errorRes3;
    }

    if (errorRes3 < valorMin) {
      valorMin = errorRes3;
    }

    arrayErrores.push(parseFloat(errorRes3));
  }

  for (var l = 5; l < 9; l++) {
    var errorRes32 = $(
      "#estados" + formulario + " .listasExactitud .resultado3:eq(" + l + ")"
    ).val();

    arrayErrores2.push(parseFloat(errorRes32));

    if (errorRes32 > valorMax) {
      valorMax = errorRes32;
    }

    if (errorRes32 < valorMin) {
      valorMin = errorRes32;
    }
  }

  console.log(
    arrayErrores + " " + arrayErrores2 + " " + arrayTolerancias + " " + cargas
  );

  var setData = myChart.setDataArray(
    [
      [1, arrayErrores[0]],
      [2, arrayErrores[1]],
      [3, arrayErrores[2]],
      [4, arrayErrores[3]],
      [5, arrayErrores[4]],
    ],
    "blue"
  );

  myChart.setDataArray(
    [
      [1, arrayErrores2[3]],
      [2, arrayErrores2[2]],
      [3, arrayErrores2[1]],
      [4, arrayErrores2[0]],
      [5, arrayErrores[4]],
    ],
    "green"
  );

  if (tipoTolerancia == "Fabricante") {
    var dlFabricante = $("#datosEquipo" + formulario + " #dl").val();
    myChart.setDataArray(
      [
        [1, Number(dlFabricante)],
        [2, Number(dlFabricante)],
        [3, Number(dlFabricante)],
        [4, Number(dlFabricante)],
        [5, Number(dlFabricante)],
      ],
      "red"
    );

    myChart.setDataArray(
      [
        [1, -dlFabricante],
        [2, -dlFabricante],
        [3, -dlFabricante],
        [4, -dlFabricante],
        [5, -dlFabricante],
      ],
      "reds"
    );
  } else {
    myChart.setDataArray(
      [
        [1, Number(arrayTolerancias[0])],
        [2, Number(arrayTolerancias[1])],
        [3, Number(arrayTolerancias[2])],
        [4, Number(arrayTolerancias[3])],
        [5, Number(arrayTolerancias[4])],
      ],
      "red"
    );

    myChart.setDataArray(
      [
        [1, Number(-arrayTolerancias[0])],
        [2, Number(-arrayTolerancias[1])],
        [3, Number(-arrayTolerancias[2])],
        [4, Number(-arrayTolerancias[3])],
        [5, Number(-arrayTolerancias[4])],
      ],
      "reds"
    );
  } //cierra else

  myChart.setAxisPaddingBottom(40);
  myChart.setTextPaddingBottom(10);
  myChart.setAxisValuesNumberY(9);
  myChart.setIntervalStartY(e * -4);
  myChart.setIntervalEndY(e * 4);
  for (m = 0; m < 5; m++) {
    var cargas = $(
      "#estados" +
        formulario +
        " .listasExactitud #cargaExactitud:eq(" +
        m +
        ")"
    ).val();

    if (m == 0) {
      myChart.setLabelX([1, cargas]);
    } else if (m == 1) {
      myChart.setLabelX([2, cargas]);
    } else if (m == 2) {
      myChart.setLabelX([3, cargas]);
    } else if (m == 3) {
      myChart.setLabelX([4, cargas]);
    } else {
      myChart.setLabelX([5, cargas]);
    }
  } //cierro for
  myChart.setAxisValuesNumberX(5);
  myChart.setShowXValues(false);
  myChart.setTitleColor("#454545");
  myChart.setAxisValuesColor("#454545");
  myChart.setLineColor("#A4D314", "green");
  myChart.setLineColor("#BBBBBB", "gray");
  myChart.setLineColor("#900", "red");
  myChart.setLineColor("#903", "reds");
  myChart.setTooltip([1]);
  myChart.setTooltip([2]);
  myChart.setTooltip([3]);
  myChart.setTooltip([4]);
  myChart.setTooltip([5]);

  myChart.setFlagColor("#9D16FC");
  myChart.setFlagRadius(4);
  myChart.setBackgroundImage("#ffffff");
  myChart.setSize(616, 321);
  myChart.draw();
}

var indicaTabla;
var letra;
var arrayColores = new Array();

function numCeldas(str) {
  if (str == 1) {
    $("#informe" + formulario + " #celdUno").css({ display: "none" });
    /*$(".desaparece1").css({display:"none"});
		$(".tablaColores").css({display:"none"});
		$("#generarTabla").css({display:"none"});*/
  } else {
    $("#informe" + formulario + " #celdUno").css({ display: "block" });
    /*$(".desaparece1").css({display:"block"});*/
  }

  if (str <= 0) {
    $("#informe" + formulario + " #numCeldas").val(1);
    str = 0;
  } else if (str > 12) {
    $("#informe" + formulario + " #numCeldas").val(12);
    str = 12;
  }

  indicaTabla = str;
}

function numCables(str) {
  if (str == 5) {
    $("#informe" + formulario + " .tablasColores").css({ display: "table" });
    $("#informe" + formulario + " .noMuestra").css({ display: "none" });

    arrayColores[0] = "R";
    arrayColores[1] = "N";
    arrayColores[2] = "V";
    arrayColores[3] = "B";
    arrayColores[4] = "";
  } else {
    $("#informe" + formulario + " .tablasColores").css({ display: "table" });
    $("#informe" + formulario + " .noMuestra").css({ display: "table-row" });

    arrayColores[0] = "R";
    arrayColores[1] = "N";
    arrayColores[2] = "V";
    arrayColores[3] = "B";
    arrayColores[4] = "";
    arrayColores[5] = "A";
    arrayColores[6] = "C";
  }
}

function ponerColor(numero, str) {
  if (str == "#008000") {
    arrayColores.splice(numero, 1, "V");
  } else if (str == "#ff0000") {
    //rojo
    arrayColores.splice(numero, 1, "R");
  } else if (str == "#ffffff") {
    //blanco
    arrayColores.splice(numero, 1, "B");
  } else if (str == "#1e90ff") {
    //azul
    arrayColores.splice(numero, 1, "A");
  } else if (str == "#ff69b4") {
    //rosado
    arrayColores.splice(numero, 1, "P");
  } else if (str == "#000000") {
    //negro
    arrayColores.splice(numero, 1, "N");
  } else if (str == "#a0522d") {
    //cafe
    arrayColores.splice(numero, 1, "C");
  } else if (str == "#ff8c00") {
    //naranjado
    arrayColores.splice(numero, 1, "O");
  } else if (str == "#ffd700") {
    //amarillo
    arrayColores.splice(numero, 1, "Y");
  } else if (str == "#c0c0c0") {
    //gris
    arrayColores.splice(numero, 1, "G");
  } else if (str == "#800080") {
    //morado
    arrayColores.splice(numero, 1, "M");
  }

  $("#informe" + formulario + " .inicialColor:eq(" + Number(numero) + ")").html(
    "<span style='color:" +
      str +
      ";text-shadow: 0px 2px 5px rgba(150, 150, 150, 1);'>" +
      arrayColores[numero] +
      "<span>"
  );

  $("#informe" + formulario + " .color:eq(" + numero + ")").css({
    background: str,
  });
  if (str == "desnudo") {
    $("#informe" + formulario + " .color:eq(" + numero + ")").css({
      background: "none",
    });
    $("#informe" + formulario + " .color:eq(" + numero + ")").html(
      "<h1 style='text-align:center;margin:1px'>*</h1>"
    );
  } else {
    $("#informe" + formulario + " .color:eq(" + numero + ")").html("");
  }
}

var fila1 = "fila1";
var fila2 = "fila2";

function generarTabla() {
  $("#informe" + formulario + " .muere").remove();
  $("#informe" + formulario + " .tarjetaSumatoria").css({ display: "block" });

  for (var i = 1; i <= indicaTabla; i++) {
    $("#informe" + formulario + " #numeracion").append(
      "<th class='muere'>" + i + "</th>"
    );
    $("#informe" + formulario + " #inicia1").append(
      "<th class='muere'><input type='text' class='combinaciones'></th>"
    );
    $("#informe" + formulario + " #inicia2").append(
      "<th class='muere'><input type='text' class='combinaciones'></th>"
    );
    $("#informe" + formulario + " #inicia3").append(
      "<th class='muere'><input type='text' class='combinaciones'></th>"
    );
    $("#informe" + formulario + " #inicia4").append(
      "<th class='muere'><input type='text' class='combinaciones'></th>"
    );
    $("#informe" + formulario + " #inicia5").append(
      "<th class='muere'><input type='text' class='combinaciones'></th>"
    );
    $("#informe" + formulario + " #inicia6").append(
      "<th class='muere'><input type='text' class='combinaciones'></th>"
    );

    $("#informe" + formulario + " #vcm").append(
      "<th class='muere'><input type='text' onBlur='calculaVoltaje(this,fila1)' class='voltaje combinaciones'></th>"
    );
    $("#informe" + formulario + " #vav").append(
      "<th class='muere'><input type='text' onBlur='calculaVoltaje(this,fila2)' class='voltaje2 combinaciones'></th>"
    );
    $("#informe" + formulario + " #dv").append(
      "<th class='muere'><input type='text' class='delta combinaciones' disabled></th>"
    );
  }

  $("#informe" + formulario + " .combinacion:eq(0)").html(
    arrayColores[0] + " - " + arrayColores[1]
  );
  $("#informe" + formulario + " .combinacion:eq(1)").html(
    arrayColores[0] + " - " + arrayColores[2]
  );
  $("#informe" + formulario + " .combinacion:eq(2)").html(
    arrayColores[0] + " - " + arrayColores[3]
  );
  $("#informe" + formulario + " .combinacion:eq(3)").html(
    arrayColores[3] + " - " + arrayColores[1]
  );
  $("#informe" + formulario + " .combinacion:eq(4)").html(
    arrayColores[3] + " - " + arrayColores[2]
  );
  $("#informe" + formulario + " .combinacion:eq(5)").html(
    arrayColores[2] + " - " + arrayColores[1]
  );
} //cierra funcion

function calculaVoltaje(str, fila) {
  str.value = Number(str.value).toFixed(2);
  var index;

  if (fila == "fila1") {
    index = $("#informe" + formulario + " .voltaje").index(str);
  } else {
    index = $("#informe" + formulario + " .voltaje2").index(str);
  }

  var voltaje1 = $(
    "#informe" + formulario + " .voltaje:eq(" + index + ")"
  ).val();
  var voltaje2 = $(
    "#informe" + formulario + " .voltaje2:eq(" + index + ")"
  ).val();

  var deltaVol = voltaje1 - voltaje2;

  $("#informe" + formulario + " .delta:eq(" + index + ")").val(
    deltaVol.toFixed(2)
  );
}

//empieza firma

var element;
var canvas;
var ctx;
var color = "#000000";
var draw = true;
var arrastrados = new Array();
var penWidth = 2;
canvas = document.getElementById("firma");
ctx = canvas.getContext("2d");
ctx.strokeStyle = color;
ctx.lineJoin = "round";
ctx.lineWidth = penWidth;
var prevX = null;
var prevY = null;
var suelto = true;

var hammer = new Hammer(canvas, {
  drag_min_distance: 1,
  drag_horizontal: true,
  drag_vertical: true,
  transform: false,
  hold: false,
  prevent_default: true,
});

hammer.ondrag = function (e) {
  if (draw) {
    var x = e.position.x;
    var y = e.position.y;
    brush(x, y, true);
  }
};

hammer.ondragend = function (e) {
  suelto = true;
};

brush = function (x, y, dragging) {
  if (prevX == null || suelto == true) {
    prevX = x;
    prevY = y;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.closePath();
    ctx.stroke();
    suelto = false;
  } else {
    ctx.beginPath();
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(x, y);
    ctx.closePath();
    ctx.stroke();
    prevX = x;
    prevY = y;
    suelto = false;
  }
};

$("#limpiarCanvas").click(function () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

//cierra firma

/*-------------------------------------------------------------*/

/* ARRAYS QUE ALMACENAN LA INFORMACION */

var arrayRelleno = new Array();

var arrayCliente = new Array();

var arr = new Array();
var equiposArray = new Array();
var arrExac = new Array();
var arrRepe = new Array(); //SE GURDA TODO LO DE REPETIBILIDAD
var arrayInforme = new Array();
var arrayCombinaciones = new Array();

var aleatorioPruebas;
var aleatorioEmpresa;

var patron = ",";

/*-------------------------------------------------------------*/

function params(obj) {
  return JSON.stringify(obj);
}

/*-------------------------------------------------------------*/

/* FUNCION QUE TRAE TODA LA INFORMACION  */

function infoBasica() {
  console.log("Enviando informacion basica.....");

  aleatorioEmpresa =
    Math.floor(Math.random() * (0 - 2147483647 + 1)) + 2147483647;

  var fecha = $("#fecha").val();
  var responsable = usuario;
  var nomCliente = $("#nomCliente").val();
  var correoCliente = $("#correoContacto").val();

  arrayRelleno.push(responsable, nomCliente, correoCliente, fecha);

  var empresaIs = $("#empresaIs").val();

  var direccionIs = $("#direccionIs").val();
  direccionIs = direccionIs.replace(patron, "");
  var telefonoIs = $("#telefonoIs").val();
  var ciudadIs = $("#ciudadIs").val();
  var nitIs = $("#nitIs").val();
  var sucursalIs = $("#sucrusalIs").val();

  arrayCliente.push(
    nitIs,
    sucursalIs,
    empresaIs,
    direccionIs,
    telefonoIs,
    ciudadIs
  );
}

function capturarInfo(fullEquipos) {
  console.log("Enviando informacion FULL.....");
  aleatorioPruebas =
    Math.floor(Math.random() * (0 - 2147483647 + 1)) + 2147483647;

  //variables del equipo
  var selectedOption = $("#datosEquipo" + fullEquipos + " #equipoI").find(
    "option:selected"
  );
  var selectedLabel = selectedOption.text();
  var selectedValue = selectedOption.val();

  var nFabricante = $("#datosEquipo" + fullEquipos + " .nFabricante").val();

  var modeloI = $("#datosEquipo" + fullEquipos + " .modeloI").val();
  var nSerieI = $("#datosEquipo" + fullEquipos + " .nSerieI").val();
  var codigoInternoI = $(
    "#datosEquipo" + fullEquipos + " .codigoInternoI"
  ).val();

  var ubicacion = $("#datosEquipo" + fullEquipos + " #ubicacionIs").val();
  var nSticker = $("#datosEquipo" + fullEquipos + " #nStickerIs").val();

  var cap0 = $("#datosEquipo" + fullEquipos + " .cap0").val();
  var cap1 = $("#datosEquipo" + fullEquipos + " .cap1").val();
  var cap2 = $("#datosEquipo" + fullEquipos + " .cap2").val();
  var dI0 = $("#datosEquipo" + fullEquipos + " .dI0").val();
  var dI1 = $("#datosEquipo" + fullEquipos + " .dI1").val();
  var dI2 = $("#datosEquipo" + fullEquipos + " .dI2").val();
  var eI0 = $("#datosEquipo" + fullEquipos + " .eI0").val();
  var eI1 = $("#datosEquipo" + fullEquipos + " .eI1").val();
  var eI2 = $("#datosEquipo" + fullEquipos + " .eI2").val();

  var selectedOption2 = $("#datosEquipo" + fullEquipos + " #tolerancias").find(
    "option:selected"
  );
  var selectedLabel2 = selectedOption2.text();
  var selectedValue2 = selectedOption2.val();

  var clase = $("#datosEquipo" + fullEquipos + " .clase").html();
  var capMinI = $("#datosEquipo" + fullEquipos + " #capMinI").val();
  var cero = $("#datosEquipo" + fullEquipos + " .cero").val();
  var rn0 = $("#datosEquipo" + fullEquipos + " .rn0 ").val();
  var rn1 = $("#datosEquipo" + fullEquipos + " .rn1").val();
  var rn2 = $("#datosEquipo" + fullEquipos + " .rn2").val();
  var rn3 = $("#datosEquipo" + fullEquipos + " .rn3").val();
  var rn4 = $("#datosEquipo" + fullEquipos + " .rn4").val();
  var rn5 = $("#datosEquipo" + fullEquipos + " .rn5").val();
  var r0 = $("#datosEquipo" + fullEquipos + " .r0").val();
  var r1 = $("#datosEquipo" + fullEquipos + " .r1").val();
  var r2 = $("#datosEquipo" + fullEquipos + " .r2").val();
  var r3 = $("#datosEquipo" + fullEquipos + " .r3").val();
  var r4 = $("#datosEquipo" + fullEquipos + " .r4").val();
  var r5 = $("#datosEquipo" + fullEquipos + " .r5").val();
  var r6 = $("#datosEquipo" + fullEquipos + " .r6").val();

  var selectedOption3 = $("#datosEquipo" + fullEquipos + " #claseI").find(
    "option:selected"
  );
  var selectedLabel3 = selectedOption3.text();
  var selectedValue3 = selectedOption3.val();

  var capMinEdit = $("#datosEquipo" + fullEquipos + " .capMinEdit").val();
  var ds = $("#datosEquipo" + fullEquipos + " .ds").val();
  var dl = $("#datosEquipo" + fullEquipos + " .dl").val();
  var de = $("#datosEquipo" + fullEquipos + " .de").val();
  var descripciones = $(
    "#datosEquipo" + fullEquipos + " #descripciones"
  ).text();

  var unidad = $("#datosEquipo" + fullEquipos + " #medidaI").val();
  var arrayToles = new Array();

  for (var t = 0; t < 7; t++) {
    var toles = $(
      "#datosEquipo" + fullEquipos + " .toleran:eq(" + t + ")"
    ).text();
    if (toles == "") {
      toles = "vacio";
    }
    arrayToles.push(toles);
  }
  var tol1 = arrayToles[0];
  var tol2 = arrayToles[1];
  var tol3 = arrayToles[2];
  var tol4 = arrayToles[3];
  var tol5 = arrayToles[4];
  var tol6 = arrayToles[5];
  var tol7 = arrayToles[6];
  //console.log("tolerancias vale:"+ tol1+" "+tol2+" "+tol4+" "+tol6+" unidad "+unidad );

  arr.push(
    selectedLabel,
    nFabricante,
    modeloI,
    nSerieI,
    codigoInternoI,
    cap0,
    cap1,
    cap2,
    dI0,
    dI1,
    dI2,
    eI0,
    eI1,
    eI2,
    selectedLabel2,
    clase,
    capMinI,
    cero,
    rn0,
    rn1,
    rn2,
    rn3,
    rn4,
    rn5,
    r0,
    r1,
    r2,
    r3,
    r4,
    r5,
    r6,
    selectedLabel3,
    capMinEdit,
    ds,
    dl,
    de,
    descripciones,
    ubicacion,
    nSticker,
    unidad,
    tol1,
    tol2,
    tol3,
    tol4,
    tol5,
    tol6,
    tol7
  );
  //cierra variables del equipo

  //variables excentricidad
  var carga1 = $("#estados" + fullEquipos + " .cargaExtdd").val();

  var selectedLabel3 = $("#estados" + fullEquipos + " #fotoForma").html();

  equiposArray.push(carga1, selectedLabel3);

  for (var k = 0; k < 10; k++) {
    var pushIndicacion = $(
      "#estados" + fullEquipos + " .indicacion:eq(" + k + ")"
    ).val();
    if (pushIndicacion == null) {
      pushIndicacion = "vacio";
    }
    equiposArray.push(pushIndicacion);
  }

  for (var k = 0; k < 10; k++) {
    var pushSubI = $(
      "#estados" + fullEquipos + " .resultado:eq(" + k + ")"
    ).val();
    if (pushSubI == null) {
      pushSubI = "vacio";
    }
    equiposArray.push(pushSubI);
  }
  var maxI1 = $("#estados" + fullEquipos + " #maxI").text();
  var mayOmen1 = $("#estados" + fullEquipos + " .mayorOmenor").text();
  var emp1 = $("#estados" + fullEquipos + " #emp").text();
  var conformidad1 = $("#estados" + fullEquipos + " #conformidad").text();
  equiposArray.push(maxI1, mayOmen1, emp1, conformidad1);
  //cierra variables excentricidad

  //variables de repetibilidad

  var carga2a = $(
    "#estados" + fullEquipos + " .cargaRepetibilidad:eq(" + 0 + ")"
  ).val();
  var carga2b = $(
    "#estados" + fullEquipos + " .cargaRepetibilidad:eq(" + 1 + ")"
  ).val();

  arrRepe.push(carga2a, carga2b);

  if (selectedLabel == "Balanza Analítica") {
    for (var m = 0; m <= 19; m++) {
      var pushIndRep = $(
        "#estados" + fullEquipos + " .listasR #indRepetibilidad:eq(" + m + ")"
      ).val();

      arrRepe.push(pushIndRep);
    } //cierra for

    for (var m = 0; m <= 19; m++) {
      var pushErrRep = $(
        "#estados" + fullEquipos + " .listasR .resultado2:eq(" + m + ")"
      ).val();

      arrRepe.push(pushErrRep);
    } //cierra for
  } else {
    for (var m = 0; m <= 9; m++) {
      if (m == 5) {
        arrRepe.push("vacio", "vacio", "vacio", "vacio", "vacio");
      }
      var pushIndRep = $(
        "#estados" + fullEquipos + " .listasR #indRepetibilidad:eq(" + m + ")"
      ).val();
      arrRepe.push(pushIndRep);

      if (m == 9) {
        arrRepe.push("vacio", "vacio", "vacio", "vacio", "vacio");
      }
    } //cierra for

    for (var m = 0; m <= 9; m++) {
      if (m == 5) {
        arrRepe.push("vacio", "vacio", "vacio", "vacio", "vacio");
      }
      var pushErrRep = $(
        "#estados" + fullEquipos + " .listasR .resultado2:eq(" + m + ")"
      ).val();
      arrRepe.push(pushErrRep);

      if (m == 9) {
        arrRepe.push("vacio", "vacio", "vacio", "vacio", "vacio");
      }
    } //cierra for
  } //cierra else

  //console.log("array repetibilidad:"+arrRepe);

  var maxI2a = $("#estados" + fullEquipos + " #maxI2").text();
  var maxI2b = $("#estados" + fullEquipos + " #maxI2b").text();
  var mayOmen2a = $("#estados" + fullEquipos + " .mayorOmenor2").text();
  var mayOmen2b = $("#estados" + fullEquipos + " .mayorOmenor2b").text();
  var emp2a = $("#estados" + fullEquipos + " #emp2").text();
  var emp2b = $("#estados" + fullEquipos + " #emp2b").text();
  var conformidad2a = $("#estados" + fullEquipos + " #conformidad2").text();
  var conformidad2b = $("#estados" + fullEquipos + " #conformidad2b").text();

  arrRepe.push(
    maxI2a,
    mayOmen2a,
    emp2a,
    conformidad2a,
    maxI2b,
    mayOmen2b,
    emp2b,
    conformidad2b
  );

  //console.log(arrRepe);
  //cierra variables repetibilidad

  //variables exactitud

  for (var l = 0; l < 9; l++) {
    var pushCarExa = $(
      "#estados" +
        fullEquipos +
        " .listasExactitud #cargaExactitud:eq(" +
        l +
        ")"
    ).val();
    arrExac.push(pushCarExa);
  }

  for (var l = 0; l < 9; l++) {
    var pushIndExa = $(
      "#estados" + fullEquipos + " .listasExactitud #indExactitud:eq(" + l + ")"
    ).val();
    arrExac.push(pushIndExa);
  }

  for (var l = 0; l < 9; l++) {
    var pushResExa = $(
      "#estados" + fullEquipos + " .resultado3:eq(" + l + ")"
    ).val();
    arrExac.push(pushResExa);
  }

  arrExac.push($("#estados" + fullEquipos + " #conformidad3").text());
  arrExac.push($("#estados" + fullEquipos + " #ue").text());
  //console.log(arrExac);
  //cierra variables exactitud

  //variables de informe

  var abecedario = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "ene",
    "o",
    "p",
    "q",
    "r",
    "s",
  ];

  var excentricidad = $("#informe" + fullEquipos + " .excentricidad").val();
  excentricidad = excentricidad.replace(patron, "");
  var exactitud = $("#informe" + fullEquipos + " .exactitud").val();
  exactitud = exactitud.replace(patron, "");
  arrayInforme.push(excentricidad, exactitud);

  for (var i = 0; i < abecedario.length; i++) {
    if (fullEquipos == 0) {
      var name = "radio-choice-" + abecedario[i];
      var valor = $(
        "#informe" + fullEquipos + " input:radio[name=" + name + "]:checked"
      ).val();
    } else {
      var name = "radio-choice-" + abecedario[i];
      var valor = $(
        "#informe" +
          fullEquipos +
          " input:radio[name=" +
          fullEquipos +
          name +
          "]:checked"
      ).val();
    }

    if (valor == null) {
      valor = "N.A";
    }
    arrayInforme.push(valor);
  } //for interno

  var neutro = $("#informe" + fullEquipos + " .neutro").val();
  var ftierra = $("#informe" + fullEquipos + " .ftierra").val();
  var neutroTierra = $("#informe" + fullEquipos + " .neutroTierra").val();
  var numCelda = $("#informe" + fullEquipos + " #numCeldas").val();
  var numCables = $("#informe" + fullEquipos + " #numCables").val();
  var excitacionMas = $("#informe" + fullEquipos + " #excitacionMas").val();
  var excitacionMenos = $("#informe" + fullEquipos + " #excitacionMenos").val();
  var senalMas = $("#informe" + fullEquipos + " #senalMas").val();
  var senalMenos = $("#informe" + fullEquipos + " #senalMenos").val();
  var tierra = $("#informe" + fullEquipos + " #tierra").val();
  var senseMas = $("#informe" + fullEquipos + " #senseMas").val();
  var senseMenos = $("#informe" + fullEquipos + " #senseMenos").val();
  var volAlimentacion = $("#informe" + fullEquipos + " #volAlimentacion").val();
  var volSalida = $("#informe" + fullEquipos + " #volSalida").val();
  //variables de trabajos realizados
  var vi = $("#informe" + fullEquipos + " #vi").val();
  var rg = $("#informe" + fullEquipos + " #rg").val();
  var lg = $("#informe" + fullEquipos + " #lg").val();
  var aec = $("#informe" + fullEquipos + " #aec").val();
  var pi = $("#informe" + fullEquipos + " #pi").val();
  var apc = $("#informe" + fullEquipos + " #apc").val();
  var ap = $("#informe" + fullEquipos + " #ap").val();
  var ep = $("#informe" + fullEquipos + " #ep").val();
  //cierra variables de trabajos  realizados
  //var arrayCombinaciones=new Array();
  var division1 = numCelda * 6;
  var division2 = numCelda * 3;
  var countComb = 0;
  //variables de las caja de juntas
  var cajaMarca = $("#informe" + fullEquipos + " #cajaMarca").val();
  var cajaModelo = $("#informe" + fullEquipos + " #cajaModelo").val();
  var cajaAjustePor = $("#informe" + fullEquipos + " #cajaAjustePor").val();
  var cajaTecnologia = $("#informe" + fullEquipos + " #cajaTecnologia").val();

  for (var f = 0; f < 72; f++) {
    if (f < division1) {
      var combinaciones = $(
        "#informe" + fullEquipos + " .combinaciones:eq(" + countComb + ")"
      ).val();
      countComb++;
    } else {
      combinaciones = "vacio";
    }

    arrayCombinaciones.push(combinaciones);
  }

  for (var f = 0; f < 36; f++) {
    if (f < division2) {
      var combinaciones = $(
        "#informe" + fullEquipos + " .combinaciones:eq(" + countComb + ")"
      ).val();
      countComb++;
    } else {
      combinaciones = "vacio";
    }

    arrayCombinaciones.push(combinaciones);
  }

  //console.log("arraycopmbinaciones"+arrayCombinaciones);

  arrayInforme.push(
    neutro,
    ftierra,
    neutroTierra,
    numCelda,
    numCables,
    excitacionMas,
    excitacionMenos,
    senalMas,
    senalMenos,
    tierra,
    senseMas,
    senseMenos,
    volAlimentacion,
    volSalida
  );
  arrayInforme.push(vi, rg, lg, aec, pi, apc, ap, ep);

  var itemm = $("#informe" + fullEquipos + " .item").val();
  itemm = itemm.replace(patron, "");
  var observaciones = $("#informe" + fullEquipos + " .observaciones").val();
  observaciones = observaciones.replace(patron, "");

  arrayInforme.push(
    itemm,
    observaciones,
    cajaMarca,
    cajaModelo,
    cajaAjustePor,
    cajaTecnologia
  );
}

/*-------------------------------------------------------------*/

var tipoEnvioDB = false;

function sincronizar() {
  $("#preload").fadeIn(400);
  verDB();

  var estadoConexion = navigator.connection.type;
  console.log(estadoConexion, "B");
  //var estadoConexion="wi-fi";
  if (estadoConexion == "none") {
    navigator.notification.alert(
      "No hay conexión por favor intenta mas tarde o conectate a una red wifi!", // message
      callBack, // callback
      "Connect Service te informa", // title
      "Ok" // buttonName
    );
    //navigator.notification.beep(1);
    function callBack() {}
  } else {
    arrayCliente = [];
    infoBasica();

    $.ajax({
      type: "POST",
      url: "http://app.cardinalscale.com.co:81/api/public/mobile/Cliente.php",
      data: {
        aleatorioEmpresa: aleatorioEmpresa || "",
        arrayCliente: params(arrayCliente) || [],
        arrayRelleno: params(arrayRelleno) || [],
        img: canvas.toDataURL() || "",
      },
      cache: false,
      success: function () {},
    });

    //----------------------------------------------------------

    for (var fullEquipos = 0; fullEquipos <= identificador; fullEquipos++) {
      if (fullEquipos == identificador) {
        confirmarEnvio = true;
      }

      capturarInfo(fullEquipos);
      console.log(arr, "equ");
      $.ajax({
        type: "POST",
        url: "http://app.cardinalscale.com.co:81/api/public/mobile/Equipos.php",
        data: {
          arr: params(arr),
          equiposArray: params(equiposArray),
          arrExac: params(arrExac),
          aleatorioEmpresa: aleatorioEmpresa,
          aleatorioPruebas: aleatorioPruebas,
          arrRepe: params(arrRepe),
          arrayInforme: params(arrayInforme),
          arrayCombinaciones: params(arrayCombinaciones),
        },
        cache: false,
        success: function () {
          if (confirmarEnvio) {
            //alert("Entro al intervalo");
            setTimeout(AsegurarDatos, 4000);
          }
        },
      }).fail(function () {
        $("#preload").html(
          "<h2>El envio ha fallado por favor intentalo de nuevo</h2>"
        );

        var setTimeOut = setTimeout(function () {
          $("#preload").fadeOut(400);
        }, 5000);
      });

      arr.length = 0;
      equiposArray.length = 0;
      arrExac.length = 0;
      arrRepe.length = 0;
      arrayInforme.length = 0;
      arrayCombinaciones.length = 0;
    } //cierro ciclo
  } //cierro else si no hay conexion
} //cierro sincroinizar

function guardarDB() {
  var db = window.openDatabase("connect", "1.0", "DB Connect", 200000);
  db.transaction(doTable, errorCallBack, succesDB);
}

function doTable(tx) {
  tx.executeSql(
    "CREATE TABLE IF NOT EXISTS DEMO(id INTEGER NOT NULL PRIMARY KEY, aleatorioEmpresa TEXT NOT NULL, arrayCliente TEXT NOT NULL, arrayRelleno TEXT NOT NULL,img TEXT NOT NULL) "
  );

  tx.executeSql(
    "CREATE TABLE IF NOT EXISTS DEMO2 (id INTEGER NOT NULL PRIMARY KEY,arr TEXT NOT NULL,equiposArray TEXT NOT NULL,arrExac TEXT NOT NULL,aleatorioEmpresa TEXT NOT NULL,aleatorioPruebas TEXT NOT NULL,arrRepe TEXT NOT NULL,arrayInforme TEXT NOT NULL,arrayCombinaciones TEXT NOT NULL )"
  );

  infoBasica();

  tx.executeSql(
    "INSERT INTO DEMO (aleatorioEmpresa,arrayCliente,arrayRelleno,img) VALUES (?,?,?,?)",
    [aleatorioEmpresa, arrayCliente, arrayRelleno, canvas.toDataURL()]
  );

  //----------------------------------------------------------

  for (var fullEquipos = 0; fullEquipos <= identificador; fullEquipos++) {
    if (fullEquipos == identificador) {
      confirmarEnvio = true;
    }

    capturarInfo(fullEquipos);

    tx.executeSql(
      "INSERT INTO DEMO2 (arr,equiposArray,arrExac,aleatorioEmpresa,aleatorioPruebas,arrRepe,arrayInforme,arrayCombinaciones) VALUES (?,?,?,?,?,?,?,?)",
      [
        arr,
        equiposArray,
        arrExac,
        aleatorioEmpresa,
        aleatorioPruebas,
        arrRepe,
        arrayInforme,
        arrayCombinaciones,
      ]
    );

    arr.length = 0;
    equiposArray.length = 0;
    arrExac.length = 0;
    arrRepe.length = 0;
    arrayInforme.length = 0;
    arrayCombinaciones.length = 0;
  } //CIERRA FOR GENERAL

  //VARIABLES CIERRAN
}

function errorCallBack() {
  alert(
    "Error en el proceso de instalación, Por favor Desinstala la aplicación actual e instala la última versión. "
  );
}

function succesDB() {
  alert("Se han guardado los equipos correctamente, puedes estar tranquilo ");
  /*navigator.notification.alert(
		'Se han guardado los equipos correctamente, puedes estar tranquilo', 
		callBack,  
		'Connect Service te informa', 
		'Ok'                
	   );
	   
	   function callBack(){};*/
}

function enviarDB() {
  var estadoConexion = navigator.connection.type;
  console.log(estadoConexion, "A");
  //var estadoConexion="wi-fi";
  if (estadoConexion == "none") {
    navigator.notification.alert(
      "No hay conexión por favor intenta mas tarde o conectate a una red wifi!", // message
      callBack, // callback
      "Connect Service te informa", // title
      "Ok" // buttonName
    );
    //navigator.notification.beep(1);
    function callBack() {}
  } else {
    var db = window.openDatabase("connect", "1.0", "DB Connect", 200000);
    db.transaction(seleccionDatos, errorCallBack);
  }
}

var activador = true;
function verDB() {
  if (activador) {
    $("#cuadroDB").css("display", "block");
    $("#cuadroDB").animate(
      {
        height: 320 + "px",
      },
      400
    );
    activador = false;
  } else {
    $("#cuadroDB").animate(
      {
        height: 0 + "px",
      },
      400,
      function () {
        $("#cuadroDB").css("display", "none");
      }
    );

    activador = true;
  }
}

function seleccionDatos(tx) {
  //DATOS DEL CLIENTE
  tx.executeSql("SELECT * FROM DEMO", [], querySuccess2, errorCallBack);
  //CIERRA

  tx.executeSql("SELECT * FROM DEMO2", [], querySuccess, errorCallBack);
}

function querySuccess(tx, result) {
  $("#preload").fadeIn(400);
  tipoEnvioDB = true;
  verDB();

  var len = result.rows.length;
  for (var i = 0; i < len; i++) {
    var row = result.rows.item(i);

    var array = row.arr.split(",");
    //console.log(array);

    var excentricidad = row.equiposArray.split(",");
    //console.log(excentricidad);

    var exactitud = row.arrExac.split(",");
    //console.log(exactitud);

    var aleatorioEmpresa = row.aleatorioEmpresa;
    //console.log("aleatorioE"+aleatorioEmpresa);

    var aleatorioPruebas = row.aleatorioPruebas;
    //console.log("aleatoriopruebas"+aleatorioPruebas);

    var repetibilidad = row.arrRepe.split(",");
    //console.log(repetibilidad);

    var informe = row.arrayInforme.split(",");
    //console.log(informe);

    var combinaciones = row.arrayCombinaciones.split(",");
    //console.log(combinaciones);
    //arr:arr,equiposArray:equiposArray,arrExac:arrExac,aleatorioEmpresa:aleatorioEmpresa,aleatorioPruebas:aleatorioPruebas,arrRepe:arrRepe,arrayInforme:arrayInforme,arrayCombinaciones:arrayCombinaciones

    $.ajax({
      type: "POST",
      url: "http://app.cardinalscale.com.co:81/api/public/mobile/Equipos.php",
      data: {
        arr: params(array),
        equiposArray: params(excentricidad),
        arrExac: params(exactitud),
        aleatorioEmpresa: aleatorioEmpresa,
        aleatorioPruebas: aleatorioPruebas,
        arrRepe: params(repetibilidad),
        arrayInforme: params(informe),
        arrayCombinaciones: params(combinaciones)
      },
      cache: false,
      success: function () {
        if (i == len) {
          setTimeout(AsegurarDatos, 4000);
        }
      },
    }).fail(function () {
      $("#preload").html(
        "<h2>El envio ha fallado por favor intentalo de nuevo</h2>"
      );

      var setTimeOut = setTimeout(function () {
        $("#preload").fadeOut(400);
      }, 5000);
    });

  } //CIERRO FOR
}

function AsegurarDatos() {
  $("#preload").fadeOut(400);

  if (tipoEnvioDB) {
    alert("Se han enviado " + identificador + " Exitosamente");
    var db = window.openDatabase("connect", "1.0", "DB Connect", 200000);
    db.transaction(deleteTable, errorCallBack, borraVisitaSucces);
  } else {
    navigator.app.exitApp();
  }
}

function querySuccess2(tx, result) {
  var len = result.rows.length;
  for (var i = 0; i < len; i++) {
    var row = result.rows.item(i);

    var aleatorioEmpresa = row.aleatorioEmpresa;
    //console.log(aleatorioEmpresa);

    var cliente = row.arrayCliente.split(",");
    //console.log(cliente);

    var relleno = row.arrayRelleno.split(",");
    //console.log(relleno);

    $.ajax({
      type: "POST",
      url: "http://app.cardinalscale.com.co:81/api/public/mobile/Equipos.php",
      data: {
        aleatorioEmpresa: aleatorioEmpresa,
        arrayCliente: params(cliente),
        arrayRelleno: params(relleno),
        img: row.img,
      },
      cache: false,
      success: function () {
        
      },
    }).fail(function () {
     
    });

  } //CIERRO FOR
}

function deleteTable(tx) {
  tx.executeSql("DROP TABLE IF EXISTS DEMO");
  tx.executeSql("DROP TABLE IF EXISTS DEMO2");
}

function borraVisitaSucces() {
  navigator.app.exitApp();
}

//MIRAR CUANTOS DATOS HAY

$("#menu").on("pagebeforeshow", function () {
  var db = window.openDatabase("connect", "1.0", "DB Connect", 200000);
  db.transaction(mostrarInfoDb, errorCallBack);
});

function mostrarInfoDb(tx) {
  tx.executeSql(
    "SELECT * FROM DEMO2",
    [],
    function (tx, results) {
      var len = results.rows.length;
      $(".infoDB").html("<h4>Existen " + len + " informes para: </h4>");
      for (var i = 0; i < len; i++) {
        var row = results.rows.item(i);
        var datos = row.arr.split(",");
        $(".infoDB").append(datos[0] + " " + datos[4] + "<br>");
      }
    },
    function () {}
  );
}

//firma
