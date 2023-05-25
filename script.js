var textInput = document.querySelector("#texto");
var outInput=document.querySelector("#saida-texto");

function criptografar(){
 var texto = textInput.value; 

 var resultCripto = texto.replace(/e/g,"enter").
        replace (/i/g,"imes").
        replace(/a/g,"ai").
        replace(/o/g,"ober"). 
        replace(/u/g,"ufat");

    document.getElementById('saida-texto').innerHTML='<textarea readonly id="saida-texto">' + resultCripto +'</textarea>' + '<button class="botoes-copiar" id="copiar" onclick="copiar()">Copiar</button>'

}

function descriptografar(){
    var texto = textInput.value; 

    var resultDescripto = texto.replace(/enter/g,"e").
    replace(/imes/g,"i").
    replace(/ai/g,"a").
    replace(/ober/g,"o").
    replace(/ufat/g,"u");

    document.getElementById('saida-texto').innerHTML='<textarea readonly id="saida-texto">' + resultDescripto +'</textarea>' + '<button class="botoes-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}


function copiar() {
    var textCop = document.getElementById('saida-texto').querySelector('textarea');
    textCop.select();
    document.execCommand('copy');
    alert("Texto Copiado");
}