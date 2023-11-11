import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ color: '#ff0000' }}> algorhythmz</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <form action="/search" autocomplete="off" method="GET" role="search">
          <input name="q" type="text" placeholder="Search..." inputmode="search" />
        </form>
      </header>
    </div >
  );
}

export default App;
