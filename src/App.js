import './App.css';
import freeCodeCamp from './imagenes/freecodecamp-logo.png'
import Boton from './componentes/Boton'
import Contador from './componentes/Contador.js';
import { useState } from 'react';

function App() {

  const [numClics , setNumClics] = useState(0)

  const manejarClic = () => {
    setNumClics(numClics +1)
  }

  const manejarReiniciar = () => {
    setNumClics(0)
  }

  return (
    <div className='App'>
      
      <div className ='contenedor-principal'>

        <Contador numClics= {numClics} />

        <Boton 
        texto= 'Clic'
        esBotonDeClic={true}
        manejarClic={manejarClic} 
        />

        <Boton
        texto = 'Reiniciar'
        esBotonDeClic={false}
        manejarClic={manejarReiniciar}
        />

      </div>
      
      <div className='author'>
          Designed and Coded by
          <br/>
          <a href='https://www.linkedin.com/in/lucianoalessi/' target='_blank'>Luciano A. Alessi</a>
        </div>
      
    </div>
  );
}

export default App;
