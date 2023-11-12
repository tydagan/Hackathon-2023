import { React, useEffect } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { useLocation } from 'react-router-dom';
import algoRhythm1 from './images/algo_rhythm1.png';
import algoRhythm2 from './images/algo_rhythm2.png';
import algoRhythm3 from './images/algo_rhythm3.png';

<<<<<<< HEAD
=======
window.onload = function () {
    let id = Math.floor(Math.random() * 3);
    switch (id) {
        case 0:
            document.getElementById('image').src = "/algo_rhythm1.png"
            break;
        case 1:
            document.getElementById('image').src = "/algo_rhythm2.png"
            break;
        case 2:
            document.getElementById('image').src = "/algo_rhythm3.png"
            break;
        default:
            break;
    }
}
>>>>>>> refs/remotes/origin/routing

const Result = () => {
    useEffect(() => {
        let id = Math.floor(Math.random() * 3);
        let imageElement = document.getElementById('image');

        switch (id) {
            case 0:
                imageElement.src = process.env.PUBLIC_URL + algoRhythm1;
                break;
            case 1:
                imageElement.src = process.env.PUBLIC_URL + algoRhythm2;
                break;
            case 2:
                imageElement.src = process.env.PUBLIC_URL + algoRhythm3;
                break;
            default:
                break;
        }
    }, []);
    let { state } = useLocation();
    let { word } = state;
    return (
        <div className="Result">
            <header className="Result-header">
                <a href="/"><h3 style={{ color: 'black' }}> ALGORHYTHMZ</h3></a>
                {/* <a href="/"></a> */}
                {/* <input type="text"></input> */}
            </header >
            <img className="Album-image" id="image" alt="Algo Rhythm"></img>
            <div className="Song-title">{word}</div>
            <div className="Song-subtitle">produced by ALGORHYTHMZ</div>

            <div className="Song-lyrics">
                [Verse 1]<br />
                Number one, victory royale<br />
                Yeah Fortnite, we bout to get down<br />
                (Get down)<br />
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