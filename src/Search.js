import React from 'react';
import './App.css';
import { useLocation } from 'react-router-dom';


const Result = () => {
    const location = useLocation();
    const { word } = location.state || {};
    return (
        <div className="Result">
            <header className="Result-header">
                <h3 style={{ color: 'black' }}> ALGORHYTHMZ</h3>
            </header >
            <div className="album-box">insert album cover!</div>
            <></>
            <div>
                <p>Word received: {word}</p>
            </div>
        </div>
    );
};

export default Result;


/*
            <button>
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                    Go to Home
                </Link>
            </button>

*/