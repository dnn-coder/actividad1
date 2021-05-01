import './App.css';
import Profile from './profile';
import Servicios from './servicios';
import Pasatiempos from './pasatiempos';
import Like from './megusta';
import Habitos from './habitos';

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
        </div>
      </header>
    </div>
  );
}

export default App;
