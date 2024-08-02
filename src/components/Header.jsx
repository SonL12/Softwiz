// import React from 'react';
// import { Link } from 'react-router-dom';

// const Header = () => (
//     <header>
//     <div className="container">
//         <div className="logo">Softwiz</div>
//         <nav>
//         <ul>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/services">Services</Link></li>
//             <li><Link to="/portfolio">Portfolio</Link></li>
//             <li><Link to="/about">About</Link></li>
//             <li><Link to="/contact">Contact</Link></li>
//         </ul>
//         </nav>
//     </div>
//     </header>
// );

// export default Header;

// src/components/Header.jsx
import React from 'react'

const Header = () => {
    return (
    <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Softwiz</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Services</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    </header>
    )
}

export default Header

