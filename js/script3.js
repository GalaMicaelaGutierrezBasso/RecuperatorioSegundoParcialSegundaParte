//dato curioso al azar
//creo un array con los datos curiosos
let datoscuriosos = [
    "Laurie Anderson fue una de las primeras artistas en combinar performance, música experimental y tecnología en la escena del arte contemporáneo.",
    "Su tema O Superman se convirtió en un éxito inesperado en 1981 y llegó al segundo puesto en los rankings del Reino Unido.",
    "Diseñó su propio violín eléctrico que le permitía tocar sonidos digitales y activar efectos con sensores.",
    "Ha colaborado con artistas como Lou Reed, con quien estuvo casada hasta su fallecimiento en 2013.",
    "En 2002 fue nombrada la primera artista residente de la NASA, desarrollando obras inspiradas en la exploración espacial.",
    "Su instalación de realidad virtual Chalkroom recibió el premio a mejor experiencia inmersiva en el Festival de Cine de Venecia en 2017.",
    "Utiliza su propia voz alterada digitalmente como herramienta narrativa y estética en muchas de sus obras.",
    "Ha creado instalaciones multimedia que combinan texto, imagen y sonido en entornos sensoriales de gran escala.",
    "Su obra cruza permanentemente los límites entre arte, ciencia, política y poesía.",
    "Sigue siendo una figura activa e influyente en el arte digital y ha experimentado con inteligencia artificial en proyectos recientes."
];
//creo una funcion que elija un dato curioso al azar y lo muestre en el elemento con el id datocurioso
function mostrardato() {
    let datos = Math.floor(Math.random() * datoscuriosos.length);
    document.querySelector("#datocurioso").textContent = datoscuriosos[datos];
}
//creo un evento que al hacer click en el boton con el id botondato se ejecute la funcion mostrardato
document.querySelector("#botondato").addEventListener("click", mostrardato);
//para que siempre se muestre un dato al azar al cargar la pagina
mostrardato();