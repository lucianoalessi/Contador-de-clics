import './App.css';
import freeCodeCamp from './imagenes/freecodecamp-logo.png'

function App() {
  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img
        className='freecodecamp-logo'
        src={freeCodeCamp}
        alt='Logo de Freecodecamp'
        />

      </div>
      
    </div>
  );
}

export default App;
