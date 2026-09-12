//creo un array con objetos que tengan el nombre de la obra, el año y la imagen
let obras = [
  { nombre: "Absent in the Present: Looking into a Mirror Sideways", año: 1975, imagen: "img/anderson-4.jpg", width: "350", height: "450" },
  { nombre: "Heart of a Dog", año: 2015, imagen: "img/anderson-5.jpg", width: "350", height: "450" },
  { nombre: "The Chalkroom", año: 2018, imagen: "img/anderson-6.jpg", width: "350", height: "450" },
  { nombre: "To the Moon", año: 2018, imagen: "img/anderson-7.jpg", width: "350", height: "450" },
  { nombre: "ARK", año: 2026, imagen: "img/anderson-8.jpg", width: "350", height: "450" },
  { nombre: "Big Science", año: 1982, imagen: "img/anderson-9.jpg", width: "350", height: "450" },
  { nombre: "Mister Heartbreak", año: 1984, imagen: "img/anderson-10.jpg", width: "350", height: "450" },
  { nombre: "Amelia", año: 2024, imagen: "img/anderson-11.jpg", width: "350", height: "450" },
  { nombre: "Landfall", año: 2018, imagen: "img/anderson-12.jpg", width: "350", height: "450" }
];
//creo una funcion que me muestre una obra aleatoria del array de obras junto con su año, nombre y su imagen
function mostrarObra() {
    let galeria = Math.round(Math.random() * obras.length);
    document.querySelector("#obrasgaleria").textContent = obras[galeria].nombre + " (" + obras[galeria].año + ")";
    document.querySelector("#imagenobra").src = obras[galeria].imagen;
    }
//agrego un evento al boton para que al hacer click se muestre una obra aleatoria del array
document.querySelector("#botonobra").addEventListener("click", mostrarObra);
//llamo a la funcion para que se muestre una obra aleatoria al cargar la pagina
mostrarObra();