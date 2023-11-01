        
        
        // Función para agregar un nuevo superhéroe al presionar "Enter"
    // function agregarSuperheroeConEnter(event) {
    //     if (event.key === 'Enter') {
    //         agregarSuperheroe();
    //     }
    // }

    function agregarSuperheroe() {
        const inputNombre = document.getElementById('nuevoSuperheroe');
        const inputImagen = document.getElementById('imagenSuperheroe');
        const superheroeNombre = inputNombre.value.trim();
        const superheroeImagen = inputImagen.value.trim();
    
        if (superheroeNombre === '' || superheroeImagen === '') {
            alert('Por favor, ingresa un nombre y una URL de imagen válidos.');
            return;
        }
    
        const listaSuperheroes = document.getElementById('listaSuperheroes');
    
        const superheroeDiv = document.createElement('div');
        superheroeDiv.classList.add('superheroe');
    
        const imagen = document.createElement('img');
        imagen.src = `img/${superheroeImagen}.jpg`;
        imagen.alt = superheroeNombre;
    
        const nombre = document.createElement('p');
        nombre.textContent = superheroeNombre;
    
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'x';
        botonEliminar.classList.add('delete');
        botonEliminar.onclick = function() {
            eliminarSuperheroe(superheroeDiv);
        };
    
        superheroeDiv.appendChild(imagen);
        superheroeDiv.appendChild(nombre);
        superheroeDiv.appendChild(botonEliminar);
    
        listaSuperheroes.appendChild(superheroeDiv);
    
        inputNombre.value = '';
        inputImagen.value = '';
    }
    
    function eliminarSuperheroe(superheroeDiv) {
        const listaSuperheroes = document.getElementById('listaSuperheroes');
        listaSuperheroes.removeChild(superheroeDiv);
    }
    