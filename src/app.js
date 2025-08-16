import "bootstrap";
import "./style.css";


import "./assets/img/1-2.png";
import "./assets/img/st.svg";

let part1 = ["Mi perro", "Un alien", "El viento", "La lluvia"]
let part2 = ["se comio", "se bebio", "desintegro", "perdio"]
let part3= ["los deberes", "el tiempo", "la cena", "el reloj"]
let part4 = ["esta mañana.", "ayer.", "la semana pasada.", "anoche."]




window.onload = function() {

function generarExcusa(){
let quien = part1 [Math.floor(Math.random() * part1.length)]
let accion = part2 [Math.floor(Math.random() * part2.length)]
let que = part3 [Math.floor(Math.random()* part3.length)]
let cuando = part4 [Math.floor(Math.random()*part4.length)]

const excusa = `${quien} ${accion} ${que} ${cuando}`;
console.log(excusa);
  
document.getElementById("excusa").innerHTML = excusa
}
generarExcusa();
};














