//sistema para gestionar el repositorio de grabaciones digitales de obras musicales de Laurie Anderson
//creo una variable cantidadObras donde va a guardar la cantidad de obras que hay que el usuario tiene que cargar, segun la cantidad que el usuario haya puesto
let cantidadObras = 0;
//creo una varible tiempoTransferencia donde se va a guardar el tiempo estimado de transferencia en milisegundos por cada MB
let tiempoTransferencia = 0;
//creo una variable costoMensual donde se va a guardar el costo mensual de almacenamiento por cada MB
let costoMensual = 0;
//creo un array vacio donde se van a ir guardando las obras que ingrese el usuario
let obras = [];
/*capturo los elementos del DOM que necesito (del formulario que cree) con sus id correspondientes y los guardo en diferentes variables:
la configuracion del formulario, los fieldset, el campo de cantidad de obras para cargar, el campo de tiempo de transferencia, el campo de costo de almacenamiento,
la configuracion de la carga de obras, el campo de nombre de la/s obra/s, el campo de duracion de la/s obra/s, el campo de peso de la/s obra/s, el contador de obras,
la lista de obras, los botones de calcular y reiniciar, y los resultados
*/

let formConfig = document.querySelector('#formConfig');
let fieldsetConfig = document.querySelector('#fieldsetConfig');
let campoCantidad = document.querySelector('#cantidadObras');
let campoTiempo = document.querySelector('#tiempoTransferencia');
let campoCosto = document.querySelector('#costoMensual');

let formObra = document.querySelector('#formObra');
let fieldsetObra = document.querySelector('#fieldsetObra');
let campoNombre = document.querySelector('#nombreObra');
let campoDuracion = document.querySelector('#duracionObra');
let campoPeso = document.querySelector('#pesoObra');
let contadorObras = document.querySelector('#contadorObras');
let listaObras = document.querySelector('#listaObras');

let botonCalcular = document.querySelector('#botonCalcular');
let resultados = document.querySelector('#resultados');
let botonReiniciar = document.querySelector('#botonReiniciar');

//cree funciones de validacion que devuelven un unico valor: un string
//si el string está vacio (''), no hay error, si no está vacio, el string es el mensaje de error que va a mostrar
function obtenerMensajeErrorNumero(texto) {
  if (texto === '') {
    return 'Este dato es obligatorio.';
  }
  if (isNaN(texto)) {
    return 'Tiene que ser un número.';
  }
  if (Number(texto) <= 0) {
    return 'Tiene que ser mayor a cero.';
  }
  return '';
}

function obtenerMensajeErrorEntero(texto) {
  // primero nos fijamos si ya tiene algún error como número
  let mensaje = obtenerMensajeErrorNumero(texto);

  if (mensaje !== '') {
    return mensaje;
  }

  if (Number(texto) % 1 !== 0) {
    return 'Tiene que ser un número entero.';
  }

  return '';
}

function redondear(numero) {
  return Math.round(numero * 100) / 100;
}

//el evento va a suceder en formConfig, el formulario que capturamos anteriormente, cuando se toque el boton con el type submit
formConfig.addEventListener('submit', function (evento) {
  evento.preventDefault();

//se obtiene el mensaje de error de cada campo
  let mensajeCantidad = obtenerMensajeErrorEntero(campoCantidad.value);
  let mensajeTiempo = obtenerMensajeErrorNumero(campoTiempo.value);
  let mensajeCosto = obtenerMensajeErrorNumero(campoCosto.value);

//se muestra cada mensaje
  document.querySelector('#errorCantidad').innerText = mensajeCantidad;
  document.querySelector('#errorTiempo').innerText = mensajeTiempo;
  document.querySelector('#errorCosto').innerText = mensajeCosto;

//si algun mensaje esta vacio, hay error, no se sigue
  if (mensajeCantidad !== '' || mensajeTiempo !== '' || mensajeCosto !== '') {
    return;
}

//se guardan los datos ingresados en las variables que ya creamos al principio
  cantidadObras = Number(campoCantidad.value);
  tiempoTransferencia = Number(campoTiempo.value);
  costoMensual = Number(campoCosto.value);
//se deshabilitan los campos de cantidad de obras, tiempo de tranferencia y el costo para que no se los pueda modificar
  fieldsetConfig.disabled = true;
// se habilita los siguientes campos de los datos de la/s obra/s
  fieldsetObra.disabled = false;
//cambia el contador de obras segun la cantidad que el ususario haya puesto que iba a ingresar
  contadorObras.innerText = `(0 de ${cantidadObras})`;
  campoNombre.focus();
});

//cargar la/s obra/s
//el evento va a suceder en formObra, otro formulario que capturamos anteriormente, cuando se toque el boton con el type submit
formObra.addEventListener('submit', function (evento) {
  evento.preventDefault();

//creo una variable nombreIngresado en donde se guarda lo que el usuario haya puesto en el campo de nombre
  let nombreIngresado = campoNombre.value;
//el nombre se valida
  let mensajeNombre = '';
  if (nombreIngresado === '') {
    mensajeNombre = 'Ingresá el nombre de la obra.';
}

//creo una variable mensajeduracion en donde se guarda lo que el usuario haya puesto en el campo de duracion
//creo una variable mensajePeso en donde se guarda lo que el usuario haya puesto en el campo de peso
  let mensajeDuracion = obtenerMensajeErrorNumero(campoDuracion.value);
  let mensajePeso = obtenerMensajeErrorNumero(campoPeso.value);
//capturo los elementos de errorNombre, errorDuracion y errorPesoy los cambio por los valores de mensaje de nombre, de duracion y de peso 
  document.querySelector('#errorNombre').innerText = mensajeNombre;
  document.querySelector('#errorDuracion').innerText = mensajeDuracion;
  document.querySelector('#errorPeso').innerText = mensajePeso;
//si algun mensaje esta vacio  no se sigue porque hay error,
  if (mensajeNombre !== '' || mensajeDuracion !== '' || mensajePeso !== '') {
    return;
}
// creo el objeto obra, en donde se van a guardar todos los valores anteriormente ingresados por el usuario segun corresponda para cada obra
//y va a devolver (el nombre ingresado de esa obra) - (la duracion ingresada de esa obra) - (el peso ingresado de esa obra)
  let obra = {
    nombre: nombreIngresado,
    duracion: Number(campoDuracion.value),
    peso: Number(campoPeso.value),
    mostrarResumen: function () {
      return `${this.nombre} — ${this.duracion} min — ${this.peso} MB`;
    }
  };
//y lo agrego al array del principio
obras.push(obra);
// y asi con las obras que haya ingresado
//se muestra  la obra en la lista
  let elementoLista = document.createElement('li');
  elementoLista.innerText = obra.mostrarResumen();
  listaObras.appendChild(elementoLista);
//se despeja el formulario para la próxima carga
  formObra.reset();
  contadorObras.innerText = `(${obras.length} de ${cantidadObras})`;
// si ya cargamos todas las obras, deshabilitamos el formulario y habilitamos el botón de calcular
  if (obras.length >= cantidadObras) {
    fieldsetObra.disabled = true;
    botonCalcular.disabled = false;
  } else {
    campoNombre.focus();
  }
});
//creo una funcion para calcular la duración total y la duración promedio de todas las obras
function calcularDuracionTotal(arrayObras) {
  let total = 0; // acumulador
  for (let i = 0; i < arrayObras.length; i++) {
    total = total + arrayObras[i].duracion;
  }
  return total;
}
//creo otra funcion para calcular cual es la obra de mayor duración y el tiempo de transferencia necesario para descargarla
function encontrarObraMasLarga(arrayObras) {
  // patrón visto en clase: usar el primer elemento como referencia
  let obraMasLarga = arrayObras[0];
  for (let i = 1; i < arrayObras.length; i++) {
    if (arrayObras[i].duracion > obraMasLarga.duracion) {
      obraMasLarga = arrayObras[i];
    }
  }
  return obraMasLarga;
}
//creo otra funcion para calcular el el peso total
function calcularPesoTotal(arrayObras) {
  let total = 0; // acumulador
  for (let i = 0; i < arrayObras.length; i++) {
    total = total + arrayObras[i].peso;
  }
  return total;
}
/*el evento va a ser en el boton con id botonCalcular y va a hacer que al hacer click en ese boton nos calcule,
la duración total, la duración promedio de todas las obras, la obra de mayor duración, el tiempo de transferencia necesario para descargarla y
el presupuesto necesario para mantener funcionando el repositorio durante un año*/
botonCalcular.addEventListener('click', function () {

  let duracionTotal = calcularDuracionTotal(obras);
  let duracionPromedio = duracionTotal / obras.length;

  let obraMasLarga = encontrarObraMasLarga(obras);
  let tiempoDescarga = obraMasLarga.peso * tiempoTransferencia;

  let pesoTotal = calcularPesoTotal(obras);
  let presupuestoAnual = pesoTotal * costoMensual * 12;

// armamos el HTML de resultados con template strings
  resultados.innerHTML = `
    <div>
      <strong>Duración total:</strong> ${redondear(duracionTotal)} min<br>
      <strong>Duración promedio:</strong> ${redondear(duracionPromedio)} min
    </div>
    <div>
      <strong>Obra de mayor duración:</strong> ${obraMasLarga.nombre} (${obraMasLarga.duracion} min)<br>
      <strong>Tiempo de transferencia:</strong> ${redondear(tiempoDescarga)} ms
    </div>
    <div>
      <strong>Presupuesto anual de almacenamiento:</strong> $${redondear(presupuestoAnual)}
    </div>
  `;
//se deshabilita el boton de calcular y se puede usar el boton de reiniciar
  botonCalcular.disabled = true;
  botonReiniciar.style.display = 'inline-block';
});
//en el boton de reiniciar va a suceder un evento que al hacer click en el boton se van a reiniciar las variable y los datos que se habian ido guardando
botonReiniciar.addEventListener('click', function () {
//se reinician las variables que establecimos al principio que se fueron llenando de lo que se iba guardando en ellas con los datos que ponia el usuario
  cantidadObras = 0;
  tiempoTransferencia = 0;
  costoMensual = 0;
  obras = [];
//se reinician las de los campos de datos generales
  formConfig.reset();
  fieldsetConfig.disabled = false;
  document.querySelector('#errorCantidad').innerText = '';
  document.querySelector('#errorTiempo').innerText = '';
  document.querySelector('#errorCosto').innerText = '';
//se reinician las de los campos de carga de obras, el contador de obras, la lista de obras
  formObra.reset();
  fieldsetObra.disabled = true;
  listaObras.innerHTML = '';
  contadorObras.innerText = '(0 de --)';
  document.querySelector('#errorNombre').innerText = '';
  document.querySelector('#errorDuracion').innerText = '';
  document.querySelector('#errorPeso').innerText = '';
//se reinician los resultados, se deshabilita el boton de calcular
  resultados.innerHTML = '';
  botonCalcular.disabled = true;
  botonReiniciar.style.display = 'none';
  campoCantidad.focus();
});