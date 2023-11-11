import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"

const Home = () => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Do something with the input value, e.g., send it to an API, etc.
        console.log('Input Value:', inputValue);
    };
    return (
        <div className="Home">
            <header className="App-header">
                <a href="/">
                    <h3 style={{ color: 'black' }}> ALGORYTHMZ</h3>
                </a>
            </header >
            <div><img src={logo} className="App-logo" alt="logo" /></div>
            <form onSubmit={handleSubmit} action="/search" autocomplete="off" method="GET" role="search">
                <input onChange={handleChange} name="q" type="text" inputmode="search" style={{ width: '500px', height: "30px", "border-radius": "10px", fontFamily: "sans-serif" }} />
            </form >
            <button value={inputValue} className="btn btn-lg btn-primary">
                <Link to="/search" style={{ textDecoration: 'none', color: 'inherit' }}>
                    Start
                </Link>
            </button>
            <p id="info-text">Your lyrics are right here, waiting for you!</p>
        </div >
    );
};

export default Home;