// import React from 'react';

// const ServicesSection = () => (
//     <section className="services">
//     <div className="container">
//         <h2>Our Services</h2>
//         <div className="service">
//         <h3>Web Development</h3>
//         <p>Creating dynamic and responsive websites.</p>
//         </div>
//         <div className="service">
//         <h3>UI/UX Design</h3>
//         <p>Designing user-friendly interfaces and experiences.</p>
//         </div>
//     </div>
//     </section>
// );

// export default ServicesSection;

// src/components/ServicesSection.jsx
import React from 'react'

const ServicesSection = () => {
    return (
    <div className="container my-5">
        <h2>Our Services</h2>
        <div className="row">
        <div className="col-md-4">
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">Service 1</h5>
                <p className="card-text">Description of Service 1.</p>
            </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">Service 2</h5>
                <p className="card-text">Description of Service 2.</p>
            </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">Service 3</h5>
                <p className="card-text">Description of Service 3.</p>
            </div>
            </div>
        </div>
        </div>
    </div>
    )
}

export default ServicesSection

