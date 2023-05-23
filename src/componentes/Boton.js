import React from "react";

function Boton({texto, esBotonDeClic, manejarClic}){

    return(
        <button>
            clasName={esBotonDeClic ? 'boton-clic' : 'boton-reiniciar'}
            onClicK={manejarClic}
            {texto}
        </button>
    );
}



export default Boton;