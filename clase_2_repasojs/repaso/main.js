/*Operador de igualdad estricta 
let numero = "5";
    if (numero == 5){
        console.log("El número es igual a 5")
    } 
    else{
            console.log("NO es lo mismo")
        }

    // Declaracion de Array 
    let numeros = [ 1, 2, 3, 4, 5];

    let primerNumero = numeros[0];
    console.log(primerNumero)

    //Función 

    function sumar(num1, num2){
        return num1+ num2;
    }
    let resultado = sumar(2, 5)
console.log(resultado)

const sumando = (a, b) => a + b;

console.log(sumando(5, 3));
    
// Difencia entre objetos literales y arrays
let persona = {
    nombre: "Cosme",
    edad: 30
}

// For
//for (inicialización; condición; actualización )

let colores = ["rojo", "verde", "azul"]

for (let i = 0; i< colores.length; i++){
    console.log(colores[i])
}

// Eventos 

let miBoton = document.getElementById("boton")
miBoton.addEventListener("click", function(){
    alert("Hiciste click en el botón ")
})

//Delegación 
let contenedor = document.getElementById("contenedor");
contenedor.addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") {
        alert("Hiciste clic en un botón dentro del contenedor.");
    }
});


//Propagacion 

let contenedor = document.getElementById("contenedor");
contenedor.addEventListener("click", function(event) {
    event.stopPropagation() //Detiene la propagación del evento
{
        alert("Evento detenido en el contenedor");
    }
}) 

// Modificación del DOM
let miElemento = document.getElementById("mi-elemento")
miElemento.textContent = "Nuevo contenido";


//Eliminar un elemento
let elementoAEliminar = document.getElementById("elemento-a-eliminar");
elementoAEliminar.remove();
;*/

// Agregar elemento hijo

let contenedor = document.getElementById("contenedor");
console.log(contenedor)
let nuevoElemento = document.createElement("div");
nuevoElemento.textContent= "Este es el nuevo contenido con appendChild"
contenedor.appendChild(nuevoElemento);