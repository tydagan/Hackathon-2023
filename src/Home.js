import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"

const Home = () => {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleStartClick = () => {
        navigate('/search', { state: { word: inputValue } });
    };
    return (
        <div className="Home">
            <header className="App-header">
                <a href="/">
                    <h3 style={{ color: 'black' }}> ALGORYTHMZ</h3>
                </a>
            </header >
            <div><img src={logo} className="App-logo" alt="logo" /></div>
            <form action="/search" autocomplete="off" method="GET" role="search">
                <input onChange={handleChange} name="q" type="text" inputmode="search" style={{ width: '500px', height: "30px", "border-radius": "10px", fontFamily: "sans-serif" }} />
            </form >
            <button onClick={handleStartClick} value={inputValue} className="btn btn-lg btn-primary">
                <Link to="/search" style={{ textDecoration: 'none', color: 'inherit' }}>
                    Start
                </Link>
            </button>
            <p id="info-text">Your lyrics are right here, waiting for you!</p>
        </div >
    );
};

export default Home;