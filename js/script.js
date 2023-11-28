/*
    * Curso: 2º DAW
    * Asignatura: Desarrollo Web Entorno Cliente
    * Tarea 4: Actividades con JavaScript
    * Autor: Javier Jiménez Fernández
    * Fecha: 28/11/2023
*/

//---------------------------------------------------------------------------------------------------

let hora = new Date().getHours();


if(hora >= 6 && hora < 12){
    texto ="Buenos días!!";
    
}else if(hora >= 12 && hora < 20){
    texto = "Buenas Tardes!!";
    
}else{
    texto = "Buenas Noches!!";
    
}

document.getElementById('saludo').innerHTML = texto;


//---------------------------------------------------------------------------------------------------


//Ejercicio 2 de la tarea 4: Actividades con JS

let fecha = new Date();
let day = fecha.getDate();
let month = fecha.getMonth() + 1;
let year = fecha.getFullYear();
let hour = fecha.getHours();
let minutes = fecha.getMinutes();

texto2 = "Hoy es martes, " + fecha.toLocaleDateString("es-ES", {day: "numeric", month: "long", year: "numeric"}) + " y son las " + hour + ":" + minutes + " horas." + "<br>";
document.getElementById('fechaActual').innerHTML = texto2;


//---------------------------------------------------------------------------------------------------


//Ejercicio 3 de la tarea 4: Actividades con JS

let mostrarHora = document.getElementById('reloj');

function intervalo(){
setInterval(()=>{
    let hora2 = new Date();
    mostrarHora.innerHTML = hora2.toLocaleTimeString();
}, 1000);
}

setTimeout(function(){
    intervalo();
}, 2000);






