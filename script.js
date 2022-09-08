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
  var textoIngresado = document.getElementById("input-texto").value;

  textoIngresado = textoIngresado.trim().toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  
  var textoEncriptado = textoIngresado.replace(/e/g,"enter")
      .replace(/i/g,"imes")
      .replace(/a/g,"ai")
      .replace(/o/g,"ober")
      .replace(/u/g,"ufat");

  document.getElementById("msg").value = textoEncriptado;
  document.getElementById("msg").innerHTML = textoEncriptado;
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
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

    var textoDesencriptado = textoIngresado.replace(/enter/g, "e")
        .replace(/imes/g,"i")
        .replace(/ai/g,"a")
        .replace(/ober/g,"o")
        .replace(/ufat/g,"u");
    
    document.getElementById("msg").value = textoDesencriptado;
    document.getElementById("input-texto").value = '';
    document.getElementById("input-texto").focus();
}
  
// COPIAR

function copiar(){
  var textoCopiado = document.getElementById("msg");
  textoCopiado.select();
  navigator.clipboard.writeText(textoCopiado.value);
  document.getElementById("msg").value = '';
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