import logo from './logo.svg';
import './App.css';
import HolaMundo, { HolaMundo2 } from './components/HolaMundo';
import Saludo from './components/Saludo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Probando 123</h1>
        <HolaMundo></HolaMundo>
        <HolaMundo2></HolaMundo2>
        <Saludo texto="Mi primer prop"></Saludo>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
