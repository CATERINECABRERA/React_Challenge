import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from '../Home/Home';
import NuevoVideo from '../NuevoVideo/NuevoVideo';
import './Nav.css';

function Nav() {
    return (
        <Router>
            <nav className="nav-allura">
                <img src="/alluraflix_logo.png" width="100" height="30" alt="Alluraflix Logo" />

                <div className="nav-allura__navigation">
                    <Link to="/" className="nav-allura__home">HOME</Link>
                    <Link to="/nuevo-video" className="nav-allura__nuevo_video">NUEVO VIDEO</Link>
                </div>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/nuevo-video" element={<NuevoVideo />} />
            </Routes>
        </Router>
    );
}

export default Nav;