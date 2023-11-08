import PropTypes from 'prop-types';
import './Boton.css'

function Boton(props){
    const estilosBoton = {
        backgroundColor: props.color,
        // color: 'white',
        // padding: '10px, 20px',
        // borderRadius: '5px',
        // cursor: 'pointer',
    };

    return(
        <button style={estilosBoton} onClick={props.onClick}> {props.texto}</button>

        )

}

Boton.PropTypes ={
    color: PropTypes.string,
    texto: PropTypes.string.isRequired,
    onClick: PropTypes.func,};


export default Boton;