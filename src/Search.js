import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';


const Result = () => {
    return (
        <div className="Result">
            <header className="Result-header">
                <h3 style={{ color: 'black' }}> ALGORHYTHMZ</h3>
            </header >
            <div className="album-box">insert album cover!</div>
            <div className="Song-title">[SONG NAME]</div>
            <div className="Song-subtitle">produced by ALGORHYTHMZ</div>

            <div className="Song-lyrics">
                [Verse 1]<br/>
                Number one, victory royale<br/>
                Yeah Fortnite, we bout to get down<br/>
                (Get down)<br/>
                Ten kills on the board right now, just wiped out Tomato Town
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