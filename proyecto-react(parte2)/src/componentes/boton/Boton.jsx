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
        <div>
        <button style={estilosBoton} onClick={props.onClick} className="boton"> {props.texto} </button>
        </div>

        )

}

Boton.PropTypes ={
    color: PropTypes.string,
    texto: PropTypes.string.isRequired,
    onClick: PropTypes.func,};


export default Boton;