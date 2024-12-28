import React from 'react';
import facultyImg from '../assets/faculty.webp';
import developmentImg from '../assets/development.jpg';
import learningImg from '../assets/learning.jpg';
import { Link } from 'react-router-dom';
import facilitiesImg from '../assets/facilities.avif';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Kaizen Play School</h1>
          <p>Your child's bright future starts here.</p>
          <p>We believe that learning is fun! Join us in a journey filled with creativity, growth, and discovery.</p>
          <Link to="/contactus" className="cta-button">Contact Us</Link>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <div className="cards-container">
          <div className="card">
            <img src={facultyImg} alt="Experienced Faculty" />
            <h3>Experienced Faculty</h3>
            <p>Our educators are passionate and committed to nurturing every child's potential.</p>
          </div>
          <div className="card">
            <img src={learningImg} alt="Innovative Learning" />
            <h3>Innovative Learning Methods</h3>
            <p>We use creative techniques to keep children engaged and curious.</p>
          </div>
          <div className="card">
            <img src={developmentImg} alt="here children developes in holistic way" />

            <h3>Holistic Development</h3>
            <p>We foster not just academic growth but also emotional and physical development.</p>
          </div>
          <div className="card">
            <img src={facilitiesImg} alt="State-of-the-Art Facilities" />
            <h3>State-of-the-Art Facilities</h3>
            <p>We provide a learning environment equipped with modern tools and facilities.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Parents Say</h2>
        <div className="testimonial-slider">
          <div className="testimonial">
            <p>"Kaizen Play School has been an incredible experience for our child. They love going to school every day!"</p>
            <h4>- Parent of Student</h4>
          </div>
          <div className="testimonial">
            <p>"The teachers are kind, and the learning environment is so nurturing. Our child has blossomed here."</p>
            <h4>- Parent of Student</h4>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;
