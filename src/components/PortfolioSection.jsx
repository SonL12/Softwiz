// import React from 'react';

// const PortfolioSection = () => (
//     <section className="portfolio">
//     <div className="container">
//         <h2>Our Portfolio</h2>
//         <div className="portfolio-item">
//         <h3>Project Name</h3>
//         <p>Description of the project.</p>
//         </div>
//       {/* item porto tambahan */}
//     </div>
//     </section>
// );

// export default PortfolioSection;

// src/components/PortfolioSection.jsx
import React from 'react'

const PortfolioSection = () => {
  return (
    <div className="container my-5">
      <h2>Our Portfolio</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img src="path/to/image1.jpg" className="card-img-top" alt="Project 1" />
            <div className="card-body">
              <h5 className="card-title">Project 1</h5>
              <p className="card-text">Description of Project 1.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="path/to/image2.jpg" className="card-img-top" alt="Project 2" />
            <div className="card-body">
              <h5 className="card-title">Project 2</h5>
              <p className="card-text">Description of Project 2.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="path/to/image3.jpg" className="card-img-top" alt="Project 3" />
            <div className="card-body">
              <h5 className="card-title">Project 3</h5>
              <p className="card-text">Description of Project 3.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioSection

