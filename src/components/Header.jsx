import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header>
    <div className="container">
        <div className="logo">Softwiz</div>
        <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
        </nav>
    </div>
    </header>
);

export default Header;
