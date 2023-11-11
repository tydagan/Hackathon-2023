import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

const Home = () => {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Input Value:', inputValue);
        navigate('/search', { state: { word: inputValue } });
    };

    return (
        <div className="Home">
            <header className="App-header">
<<<<<<< HEAD
                <h3 style={{ color: 'black' }}> algorhythmz</h3>
            </header>
            <div>
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            <form
                onSubmit={handleSubmit}
                action="/search"
                autoComplete="off"
                method="GET"
                role="search"
            >
                <input
                    value={inputValue}
                    onChange={handleChange}
                    name="q"
                    type="text"
                    inputMode="search"
                    style={{
                        width: '500px',
                        height: '30px',
                        borderRadius: '10px',
                        fontFamily: 'sans-serif',
                    }}
                />
                <button
                    type="submit"
                    style={{
                        width: '100px',
                        height: '30px',
                        borderRadius: '10px',
                        fontFamily: 'sans-serif',
                    }}
                >
                    <Link to={{ pathname: '/search', state: { word: inputValue } }} style={{ textDecoration: 'none', color: 'inherit' }}>
                        Start
                    </Link>
                </button>
            </form>
=======
                <a href="/">
                    <h3 style={{ color: 'black' }}> ALGORYTHMZ</h3>
                </a>
            </header >
            <div><img src={logo} className="App-logo" alt="logo" /></div>
            <form onSubmit={handleSubmit} action="/search" autocomplete="off" method="GET" role="search">
                <input onChange={handleChange} name="q" type="text" inputmode="search" style={{ width: '500px', height: "30px", "border-radius": "10px", fontFamily: "sans-serif" }} />
            </form >
            <button value={inputValue} style={{ width: '100px', height: "30px", "border-radius": "10px", fontFamily: "sans-serif" }}>
                <Link to="/search" style={{ textDecoration: 'none', color: 'inherit' }}>
                    Start
                </Link>
            </button>
>>>>>>> refs/remotes/origin/routing
            <p id="info-text">Your lyrics are right here, waiting for you!</p>
        </div >
    );
};

export default Home;
