import './App.css';
import Profile from './profile';
import Servicios from './servicios';
import Pasatiempos from './pasatiempos';
import Like from './megusta';
import Habitos from './habitos';
import Consolas from './consolas';
import Libros from './libros';
import Juegos from './juegos';
import Lenguajes from './lenguajes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="display">
        <Profile />
        <Servicios />
        <Pasatiempos />
        </div>
        <div className="display">
        <Like />
        <Habitos />
        <Consolas />
        </div>
        <div className="display">
        <Libros />
        <Juegos />
        <Lenguajes />
        </div>
      </header>
    </div>
  );
}

export default App;
