// src/components/TestimonialsSection.js
// import React from 'react';

// const TestimonialsSection = () => (
//     <section className="testimonials">
//     <div className="container">
//         <h2>What Our Clients Say</h2>
//         <blockquote>
//         <p>"Softwiz delivered an amazing product on time!"</p>
//         <footer>- Client Name</footer>
//         </blockquote>
//       {/* testimoni tambahan */}
//     </div>
//     </section>
// );

// export default TestimonialsSection;

// src/components/TestimonialsSection.jsx
import React from 'react'

const TestimonialsSection = () => {
  return (
    <div className="container my-5">
      <h2>What Our Clients Say</h2>
      <blockquote className="blockquote">
        <p className="mb-0">"Softwiz delivered an amazing product on time!"</p>
        <footer className="blockquote-footer">Client Name</footer>
      </blockquote>
    </div>
  )
}

export default TestimonialsSection


