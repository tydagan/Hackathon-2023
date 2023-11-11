import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div><h1 style={{ color: '#ea4d3d' }}> algorhythmz</h1></div>
        <div><img src={logo} className="App-logo" alt="logo" /></div>
        <form action="/search" autocomplete="off" method="GET" role="search">
          <input name="q" type="text" placeholder="Search..." inputmode="search" style={{ width: '500px', height: "30px", "border-radius": "10px", color: "'#ea4d3d'", fontFamily: "sans-serif" }} />
        </form>
      </header >
    </div >
  );
}

export default App;
