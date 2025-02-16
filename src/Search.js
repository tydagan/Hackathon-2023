import { React, useEffect, useState } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { useLocation } from 'react-router-dom';
import algoRhythm1 from './images/algo_rhythm1.png';
import algoRhythm2 from './images/algo_rhythm2.png';
import algoRhythm3 from './images/algo_rhythm3.png';

const Result = () => {
    const { state } = useLocation();
    const { word } = state;

    const [data, setData] = useState(null);
    useEffect(() => {
        fetch(`http://localhost:5001/${word}`).then(res => res.json()).then(data => { setData(data); console.log(data); }).catch(err => console.error(err));

    }, [word]);

    if (data === null) {
        return <p>Loading...</p>;
    }
    return (
        <div className="Result">
            <header className="Result-header">
                <a href="/"><h3 style={{ color: 'black' }}> ALGORHYTHMZ</h3></a>
            </header >
            <img
                className="Album-image"
                id="image"
                alt="Algo Rhythm"
                src={
                    process.env.PUBLIC_URL +
                    (data.image === 1
                        ? algoRhythm1
                        : data.image === 2
                            ? algoRhythm2
                            : algoRhythm3)
                }
            />
            <div className="Song-title">{word}</div>
            <div className="Song-subtitle">produced by ALGORHYTHMZ</div>

            <div className="Song-lyrics">
                <>
                    {data.map((item) =>
                        <div>
                            {item}
                        </div>
                    )}
                </>
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