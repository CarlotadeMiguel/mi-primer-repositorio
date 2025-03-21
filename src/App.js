import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Editado por Carlota para prueba de despliegue continuo
        </p>
        <a
          className="App-link"
          href="https://github.com/CarlotadeMiguel"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mi repositorio
        </a>
      </header>
    </div>
  );
}

export default App;
