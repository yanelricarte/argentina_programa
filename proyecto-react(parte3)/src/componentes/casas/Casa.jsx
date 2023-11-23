import PropTypes from 'prop-types'; 



function Casa(props){
    return(
        <section className="seccion">
            <h2>{props.nombre} </h2>
            <p>{props.valores} </p>
            <p>{props.animal} </p>
            <p>{props.color} </p>
            <p>{props.director} </p>
            <p>{props.ubicacion} </p>

        </section>
    )
}
Casa.propTypes = {
    nombre: PropTypes.string.isRequired,
    valores: PropTypes.string,
    animal: PropTypes.string,
    color: PropTypes.string,
    director: PropTypes.string,
    ubicacion: PropTypes.string,

}

export default Casa;