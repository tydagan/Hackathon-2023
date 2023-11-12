import { React, useEffect } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { useLocation } from 'react-router-dom';
import algoRhythm1 from './images/algo_rhythm1.png';
import algoRhythm2 from './images/algo_rhythm2.png';
import algoRhythm3 from './images/algo_rhythm3.png';


const Result = () => {
    let { state } = useLocation();
    let { word } = state;
    const [pythonResult, setPythonResult] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/api/call-python')
            .then(response => response.json())
            .then(data => setPythonResult(data.result))
            .catch(error => console.error('Error:', error));
    }, []);
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
    return (
        <div className="Result">
            <header className="Result-header">
                <a href="/"><h3 style={{ color: 'black' }}> ALGORHYTHMZ</h3></a>
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