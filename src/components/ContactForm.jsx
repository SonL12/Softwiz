import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    });

    const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    };

    return (
    <section className="contact-form">
        <div className="container">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
            <label>
            Name:
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            </label>
            <label>
            Email:
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            </label>
            <label>
            Message:
            <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
            ></textarea>
            </label>
            <button type="submit">Send</button>
        </form>
        </div>
    </section>
    );
};

export default ContactForm;
