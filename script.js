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
  let textoIngresado = document.getElementById("input-texto").value;

  textoIngresado = textoIngresado.trim().toLowerCase()
        .replace(/[\u0300-\u036f]/g, "");

  let r = textoIngresado;
  alert("quitar acentos");
  let non_asciis = {'a': '[àáâãäå]', 'ae': 'æ', 'c': 'ç', 'e': '[èéêë]', 'i': '[ìíîï]', 'n': 'ñ', 'o': '[òóôõö]', 'oe': 'œ', 'u': '[ùúûűü]', 'y': '[ýÿ]'};
  for (i in non_asciis) { r = r.replace(RegExp(non_asciis[i], 'g'), i); }
  textoIngresado = r;

  let textoEncriptado = textoIngresado.replace(/e/g,"enter")
      .replace(/i/g,"imes")
      .replace(/a/g,"ai")
      .replace(/o/g,"ober")
      .replace(/u/g,"ufat");

  document.getElementById("output-texto").value = textoEncriptado;
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
    let textoIngresado = document.getElementById("input-texto").value;

    textoIngresado = textoIngresado.trim().toLowerCase()
        .replace(/[\u0300-\u036f]/g, "");

  let r = textoIngresado;
  alert("quitar acentos");
  let non_asciis = {'a': '[àáâãäå]', 'ae': 'æ', 'c': 'ç', 'e': '[èéêë]', 'i': '[ìíîï]', 'n': 'ñ', 'o': '[òóôõö]', 'oe': 'œ', 'u': '[ùúûűü]', 'y': '[ýÿ]'};
  for (i in non_asciis) { r = r.replace(RegExp(non_asciis[i], 'g'), i); }
  textoIngresado = r;

    let textoDesencriptado = textoIngresado.replace(/enter/g, "e")
        .replace(/imes/g,"i")
        .replace(/ai/g,"a")
        .replace(/ober/g,"o")
        .replace(/ufat/g,"u");
    
    document.getElementById("output-texto").value = textoDesencriptado;
    document.getElementById("input-texto").value = '';
    document.getElementById("input-texto").focus();
}
  
// COPIAR

function copiar(){
  let textoCopiado = document.getElementById("output-texto");
  textoCopiado.select();
  navigator.clipboard.writeText(textoCopiado.value);
  document.getElementById("output-texto").value = '';
  document.getElementById("input-texto").focus();
}

// EVITAR RECARGA DE FORMULARIO

function evitarRecarga(event){
  event.preventDefault();
  return false;
}