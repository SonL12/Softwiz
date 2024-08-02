import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact = () => (
    <div className="contact-page">
    <div className="container">
        <h1>Contact Us</h1>
        <ContactForm />
        <div className="contact-info">
        <p>Email: info@softwiz.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>Address: 123 Main St, City, Country</p>
        </div>
    </div>
    </div>
);

export default Contact;
