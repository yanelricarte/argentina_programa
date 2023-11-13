import './Seccion.css';
import hogwarts from '../../assets/img/hogwarts.jpg';
import PropTypes from 'prop-types'; 
import Boton from '../boton/Boton';


function Seccion({ texto }) {
    const handleClicEnBoton = () =>{
        alert('hiciste click en el boton')
    }
    return (
        <section className="seccion">
        <h2> Información sobre Hogwarts </h2>
        <p> La escuela de magia y hechiceria de Hogwarts es un lugar mágico donde los jóvenes magos y brujas aprenden a dominar sus poderes.</p>
        <h2> {texto}</h2>
        <img src={hogwarts} alt= "Hogwarts" />
        <Boton color="pink" texto="Botón en la Sección" onClick={handleClicEnBoton} />
        <Boton className="boton"  texto="Botón en la Sección" onClick={handleClicEnBoton} />

        </section>
    );
    }
    
    Seccion.propTypes = {
        texto: PropTypes.any
    }

export default Seccion;
