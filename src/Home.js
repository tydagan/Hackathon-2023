import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

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
                    <Link to="/search" style={{ textDecoration: 'none', color: 'inherit' }}>
                        Start
                    </Link>
                </button>
            </form>
            <p id="info-text">Your lyrics are right here, waiting for you!</p>
        </div>
    );
};

export default Home;
