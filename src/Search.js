import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <h2>About Page</h2>
            <p>This is the about page.</p>
            <button>
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                    Go to Home
                </Link>
            </button>
        </div>
    );
};

export default About;
