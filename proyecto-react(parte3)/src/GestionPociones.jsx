import React, { useState, useEffect } from 'react';
import ListaDePociones from './componentes/ListaDePociones';
import FormularioDePociones from './componentes/FormularioDePociones';

const GestionPociones = () => {
    // Estado para almacenar las pociones
    const [pociones, setPociones] = useState([]);

    // Carga inicial de pociones desde el localStorage
    useEffect(() => {
        const pocionesGuardadas = JSON.parse(localStorage.getItem('pociones'));
        if (pocionesGuardadas) {
        setPociones(pocionesGuardadas);
        }
    }, []);

    // Almacena las pociones en el localStorage cuando cambia el estado
    useEffect(() => {
        localStorage.setItem('pociones', JSON.stringify(pociones));
    }, [pociones]);

    // Marcar una poción como completada o no completada
    const completarPocion = (id) => {
        const nuevasPociones = pociones.map((pocion) =>
        pocion.id === id ? { ...pocion, completada: !pocion.completada } : pocion
        );
        setPociones(nuevasPociones);
    };

    // Eliminar una poción de la lista
    const eliminarPocion = (id) => {
        const nuevasPociones = pociones.filter((pocion) => pocion.id !== id);
        setPociones(nuevasPociones);
    };

    // Agregar una nueva poción a la lista
    const agregarPocion = (nombre) => {
        const nuevaPocion = {
        id: Date.now(), // Generar ID único
        nombre,
        completada: false,
        };
        setPociones([...pociones, nuevaPocion]);
    };

    return (
        <div>
        <h1>Gestión de Pociones en Hogwarts</h1>
        {/* Lista de Pociones */}
        <ListaDePociones
            pociones={pociones}
            completarPocion={completarPocion}
            eliminarPocion={eliminarPocion}
        />
        {/* Formulario para agregar nuevas Pociones */}
        <FormularioDePociones agregarPocion={agregarPocion} />
        </div>
    );
    };

export default GestionPociones;
