//  Clase para represetar 
class Mascota{
    constructor(nombre){
        this.nombre = nombre;
        this.adoptada = false;
    }

    //Metodo
    adoptar(){
        this.adoptada = true;
    }
}


//Funcion para agregar mascota a lista
function agregarMascota(){
    const inputMascota = document.getElementById("nuevaMascota");
    const nombreMascota = inputMascota.value.trim();

    if(nombreMascota !== ""){
        const nuevaMascota = new Mascota(nombreMascota);
        //Crear el elemento de la lista
        const elementoLista = document.createElement("li");
        elementoLista.textContent = nuevaMascota.nombre;
        if (nuevaMascota.adoptada){
            elementoLista.classList.add("adoptada")
        }    
        
        
        //Evento
    elementoLista.addEventListener("click", function(){
        nuevaMascota.adoptar();
        elementoLista.classList.add("adoptada")
    })

    const listaMascota = document.getElementById("listaMascotas");
    listaMascota.appendChild(elementoLista)

    inputMascota.value = ""
    }
}

const botonAgregarMascotas = document.getElementById("agregarMascota");

botonAgregarMascotas.addEventListener("click", agregarMascota)