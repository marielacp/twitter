window.addEventListener('load',function(){

var teclado = document.getElementById('txttarea');
teclado.onkeyup=count;
teclado.onkeydown=count;

var captura = document.getElementById("btn");
captura.addEventListener("click", enviotxt);

function count() {
 var min = 45;
 var minn = 70;
 var pruebmin = 140; 
 var capacidad = 120;
 var capacidad1 = 130;
 var cont = document.forms[0].txttarea.value.length;
 var rest = pruebmin - cont;
 document.forms[0].caracteres.value = rest;
 if (cont <= min) {
  teclado.style.height = "40px";
 } else if(cont<=minn) {  
  teclado.style.height = "50px";
 } else {
  teclado.style.height = "65px";
};
document.form.twiter.disabled=false
var habilitado = document.getElementsByTagName('input')[0];
habilitado.classList.remove('btnd');
if(pruebmin<=cont){
document.form.twiter.disabled = true
habilitado.classList.add('btnd');
};
var inpcolor = document.getElementsByTagName('input')[1];
if(cont>=capacidad && cont<capacidad1){
inpcolor.style.color='red';
} else if (cont >= capacidad1 && cont <= pruebmin) {
  inpcolor.style.color = 'gray'; 
}else{
   inpcolor.style.color = 'blue'; 
}
 };

function enviotxt(){  
  var d = new Date();
  var tipo = "pm";
  if (d.getHours<=1 && d.getHours<12){
   tipo ="am";
  }else {
    tipo;
  }
  var container = document.getElementById('containermsn')
   if (txttarea.value) {
    var txt = document.createElement('textarea');
    txt.classList.add('txt1');
    txt.textContent = txttarea.value + '\n' + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + "" + tipo;
     container.appendChild(txt);
     teclado.value = '';
   };
 document.form.twiter.disabled = true;
 var habilitado = document.getElementsByTagName('input')[0];
 habilitado.classList.add('btnd');

};













});
  