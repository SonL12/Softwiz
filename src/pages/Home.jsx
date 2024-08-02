// import React from 'react';
// import { HeroSection, ServicesSection, PortfolioSection, TestimonialsSection } from '../components/';

// const Home = () => (
//     <>
//         <HeroSection />
//         <ServicesSection />
//         <PortfolioSection />
//         <TestimonialsSection />
//     </>
// );

// export default Home;

// src/pages/Home.jsx
import React from 'react'
import HeroSection from '../components/HeroSection'
import ServicesSection from '../components/ServicesSection'
import PortfolioSection from '../components/PortfolioSection'
import TestimonialsSection from '../components/TestimonialsSection'

const Home = () => {
    return (
    <div>
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <TestimonialsSection />
    </div>
    )
}

export default Home

