window.addEventListener('load', function() {
  var time = moment().format('LT');
  var teclado = document.getElementById('txttarea');
  var captura = document.getElementById('btn');
  captura.addEventListener('click', enviotxt);
  teclado.onkeyup = count;
  teclado.onkeydown = count;
  function count() {
    var habilitado = document.getElementsByTagName('input')[0];
    var inpcolor = document.getElementsByTagName('input')[1];
    var pruebmin = 140; 
    var capacidad = 120;
    var capacidad1 = 130;
    var cont = document.forms[0].txttarea.value.trim().length;
    var rest = pruebmin - cont;
    document.forms[0].caracteres.value = rest;
    teclado.style.height = '0px';
    teclado.style.height = (teclado.scrollHeight + 0) + 'px';
    document.form.twiter.disabled = false;
    habilitado.classList.remove('btnd');
    if (pruebmin <= cont) {
      document.form.twiter.disabled = true;
      habilitado.classList.add('btnd');
    }
    if (cont >= capacidad && cont < capacidad1) {
      inpcolor.style.color = 'red';
    } else if (cont >= capacidad1 && cont <= pruebmin) {
      inpcolor.style.color = 'orange'; 
    } else {
      inpcolor.style.color = 'blue'; 
    }
  };
  function enviotxt() {  
    var fecha = new Date();
    var horas = fecha.getHours();
    var ampm;
    var minutos = fecha.getMinutes();
    var container = document.getElementById('containermsn');
    var txt = document.createElement('textarea');
    var habilitado = document.getElementsByTagName('input')[0];
    if (horas >= 12) {
      horas = horas - 12;
      ampm = 'PM';
    } else {
      ampm = 'AM';
    }
    if (txttarea.value) {
      txt.classList.add('txt1');
      txt.textContent = txttarea.value + '\n' + fecha.getHours() + ':' + fecha.getMinutes() + ':' + fecha.getSeconds() + ' ' + ampm;
      container.appendChild(txt);
      teclado.value = '';
      txt.style.height = '0px';
      txt.style.height = (txt.scrollHeight + 0) + 'px';
      txt.disabled = 'true';
    };
    document.form.twiter.disabled = true;
    habilitado.classList.add('btnd');
  };
});
