import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

const Home = () => {
    return (
        <div className="Home">
            <h2>Home Page</h2>
            <p>Welcome to the home page!</p>
            <button>
                <Link to="/search" style={{ textDecoration: 'none', color: 'inherit' }}>
                    Go to Search
                </Link>
            </button>
            <header className="App-header">
                <h3 style={{ color: 'black' }}> algorhythmz</h3>
            </header >
            <div><img src={logo} className="App-logo" alt="logo" /></div>
            <form action="/search" autocomplete="off" method="GET" role="search">
                <input name="q" type="text" inputmode="search" style={{ width: '500px', height: "30px", "border-radius": "10px", fontFamily: "sans-serif" }} />
            </form>
            <button>
                <Link to="/search" style={{ textDecoration: 'none', color: 'inherit' }}>
                    Start
                </Link>
            </button>
            <p id="info-text">Your lyrics are right here, waiting for you!</p>
        </div >
    );
};

export default Home;