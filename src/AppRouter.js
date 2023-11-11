import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // -dom?
import Home from './Home';
import Result from './Search';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Result />} />
                {/* Add more routes for additional pages */}
            </Routes>
        </Router>
    );
};

export default AppRouter;
