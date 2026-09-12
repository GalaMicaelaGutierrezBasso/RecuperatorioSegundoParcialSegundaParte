//galeria obras
//que el usuario pueda hacer que se vea la galeria de obras de Laurie Anderson o no
//creo boton para mostrar y ocultar la galeria
let boton = document.querySelector('#boton');
//seleccion del elemento al que le quiero cambiar su visualizacion, en este caso la galeria de obras
let galeria = document.querySelector('.galeria');
//voy a agregar un evento al boton para que al hacer click se muestre o se oculte la galeria
boton.addEventListener('click', function() {
    galeria.style.display = galeria.style.display === 'none' ? 'block' : 'none';
});
//para que el usuario al hacer click en el titulo de la galeria cambie
//seleccion del elemento al que le quiero cambiar su visualizacion, en este caso el titulo de la galeria
let titulogaleria = document.querySelector('#titulogaleria');
//creo una variable a la que le voy a asignar el nuevo texto, textonuevo
let textonuevo = 'Seleccion de obras de Laurie Anderson';
//creo una variable mensaje que va a ser lo que va a aparecer en el titulo de la galeria cuando el usuario haga click en el
let mensaje = textonuevo;
//agrego eventos al titulo de la galeria para que al hacer click cambie el texto, el color, el tamaño de la fuente y el color de fondo
titulogaleria.addEventListener('click', function() {
    this.innerText = mensaje;
});
titulogaleria.addEventListener('click', function() {
    this.style.color = 'rgb(212, 255, 0)';
});
titulogaleria.addEventListener('click', function() {
    this.style.fontSize = '2.5rem';
});
titulogaleria.addEventListener('click', function() {
    this.style.backgroundColor = 'rgb(255, 0, 0)';
});