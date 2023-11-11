import React from 'react';
import './App.css';
import { useLocation } from 'react-router-dom';


const Result = () => {
    const location = useLocation();
    const { word } = location.state || {};
    return (
        <div className="Result">
            <header className="Result-header">
                <a href="/"><h3 style={{ color: 'black' }}> ALGORHYTHMZ</h3></a>
                <input type="text"></input>
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