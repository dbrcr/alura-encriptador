// PROGRAMA ENCRIPTADOR DE TEXTO
// Modificado por Daniel Bernardo Castro.

// ENCRIPTACION.

/*******************************************
 Reglas: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Las mayúsculas son convertidas a minúsculas.
La acentuación es convertida a normal.
********************************************/

function encriptar(){
  alert("Encriptando...");
  var textoIngresado = document.getElementById("input-texto").value;

  textoIngresado = textoIngresado.trim().toLowerCase()
        .replace(/[\u0300-\u036f]/g, "");

//      .normalize("NFD")
//      .replace(/[\u0300-\u036f]/g, "");

  alert("Convertido a minusculas y replace."); 
  
  var textoEncriptado = textoIngresado.replace(/e/g,"enter")
      .replace(/i/g,"imes")
      .replace(/a/g,"ai")
      .replace(/o/g,"ober")
      .replace(/u/g,"ufat");

  alert("Texto encriptado: " + textoEncriptado);
  document.getElementById("output-texto").value = textoEncriptado;
  document.getElementById("output-texto").innerHTML = textoEncriptado;
  document.getElementById("input-texto").value = '';
  document.getElementById("input-texto").focus();
}

// DESENCRIPCIÓN

/*******************************************
 Reglas de desencripción: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Las mayúsculas son convertidas a minúsculas.
La acentuación es convertida a normal.
********************************************/

function desencriptar(){
    var textoIngresado = document.getElementById("input-texto").value;

    textoIngresado = textoIngresado.trim().toLowerCase()
        .replace(/[\u0300-\u036f]/g, "");
//        .normalize("NFD")

    var textoDesencriptado = textoIngresado.replace(/enter/g, "e")
        .replace(/imes/g,"i")
        .replace(/ai/g,"a")
        .replace(/ober/g,"o")
        .replace(/ufat/g,"u");
    
    alert(textoDesencriptado);
    document.getElementById("output-texto").value = textoDesencriptado;
    document.getElementById("output-texto").innerHTML = textoDesencriptado;
    document.getElementById("input-texto").value = '';
    document.getElementById("input-texto").focus();
}
  
// COPIAR

function copiar(){
  var textoCopiado = document.getElementById("output-texto");
  textoCopiado.select();
  navigator.clipboard.writeText(textoCopiado.value);
  alert(textoCopiado);
  document.getElementById("output-texto").value = '';
  document.getElementById("input-texto").focus();
}

// EVITAR RECARGA DE FORMULARIO

function evitarRecarga(event){
  event.preventDefault();
  return false;
}

var btnEncriptar = document.getElementById("btn-enc");
var btnDesencriptar = document.getElementById("btn-des");
var btnCopiar = document.getElementById("btn-copy");

// var texto = document.getElementById("input-texto");
// var txtSaida = document.getElementById("txt-resposta");

btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
btnCopiar.onclick = copiar;