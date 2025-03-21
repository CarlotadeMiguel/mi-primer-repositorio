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
      <footer>
        <p>© 2025 Mi Portafolio | <a href="https://github.com/CarlotadeMiguel">Inicio</a> | <a href="https://github.com/CarlotadeMiguel">Contacto</a></p>
        <button class="subir" onclick="window.scrollTo(0, 0)">↑</button>
    </footer>
    </div>
  );
}

export default App;
