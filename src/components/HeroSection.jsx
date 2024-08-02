// import React from 'react';

// const HeroSection = () => (
//     <section className="hero">
//     <div className="container">
//         <h1>Welcome to Softwiz</h1>
//         <p>Transforming Ideas into Reality</p>
//         <a href="/contact" className="cta-button">Contact Us</a>
//     </div>
//     </section>
// );

// export default HeroSection;

// src/components/HeroSection.jsx
import React from 'react'

const HeroSection = () => {
    return (
    <div className="jumbotron">
        <div className="container">
        <h1 className="display-4">Welcome to Softwiz</h1>
        <p className="lead">Your trusted partner in software solutions.</p>
        <hr className="my-4" />
        <p>Get in touch with us to learn more about our services.</p>
        <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        </div>
    </div>
    )
}

export default HeroSection

