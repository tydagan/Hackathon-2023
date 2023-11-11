import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3 style={{ color: 'red' }}> algorhythmz</h3>
      </header >
      <div><img src={logo} className="App-logo" alt="logo" /></div>
      <form action="/search" autocomplete="off" method="GET" role="search">
        <input name="q" type="text" placeholder="Search..." inputmode="search" style={{ width: '500px', height: "30px", "border-radius": "10px", fontFamily: "sans-serif" }} />
      </form>
      <p id="info-text">Your lyrics are right here, waiting for you!</p>
    </div >
  );
}

export default App;
