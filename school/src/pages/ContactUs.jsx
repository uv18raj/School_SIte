import React, { useState } from 'react';
import './ContactUs.css';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct mailto link
    const mailtoLink = `mailto:kaizenpreplayschool@gmail.com?subject=Message from ${formData.name}&body=${encodeURIComponent(
      `Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.message}`
    )}`;

    window.location.href = mailtoLink;

    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <div>
      <div className="map-container">
        <iframe
          title="Kaizen Play School Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3639.3171951406894!2d86.28383357457757!3d24.195668071538066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f157066ac70839%3A0x75ea7cfcff4b336e!2sKaizen%20Play%20School!5e0!3m2!1sen!2sin!4v1735153414276!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="contact-layout">
        <div className="contact-details">
          <h1>Contact Us</h1>
          <p>If you have any questions, feel free to reach out to us!</p>
          <p><b>Email: </b><a href="mailto:kaizenplayschool@gmail.com">kaizenpreplayschool@gmail.com</a></p>
          <p><b>Phone:</b> <a href="tel:+917909019167">+91 7909019167</a></p>
          <p><b>Address:</b> Kaizen Play School, Giridih, Jharkhand</p>
        </div>

        <div className="form-container">
          <form onSubmit={handleSubmit} className="contact-form">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              autoComplete="off"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label>Email:</label>
            <input
              type="email"
              name="email"
              autoComplete="off"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label>Phone Number:</label>
            <input
              type="tel"
              name="phone"
              autoComplete="off"
              pattern="[0-9]{10}"
              value={formData.phone}
              onChange={handleChange}
            />

            <label>Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
