import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
// import './header.css'
// ini komen 
const Header = () => (
    <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <div className="container-fluid">
                <Link className="navbar-brand d-flex align-items-center" to="/">Softwiz</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse margin" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/services">Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/portfolio">Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
    </header>
);

export default Header;
