import React from 'react';
import directorImage from '../assets/directorimage.jpg';
import './About.css';

function About() {
  return (
    <div>
      <section className="director">
        <div className="director-container">
          <div className="director-info">
            <h2>Meet Our Director</h2>
            <p>Our director, Mr.Praveen Kumar, brings years of experience and dedication to Kaizen Play School. With a deep passion for early childhood education and a commitment to shaping young minds, Our director is at the forefront of our mission to provide a nurturing and innovative learning environment.</p>
            <p>Under our director's leadership, we have implemented creative and progressive teaching methodologies, emphasizing the holistic development of each child. Their vision is to create a space where learning is fun, engaging, and purposeful, preparing students to succeed in every aspect of life.</p>
            <p>With a hands-on approach and a deep understanding of child development, Our director ensures that Kaizen Play School remains a place where both students and educators thrive, fostering a culture of excellence and care.</p>
          </div>
          <div className="director-photo">
            <img src={directorImage} alt="Director of Kaizen Play School" />
          </div>
        </div>
      </section>

      <section className="about-us">
        <h2>About Kaizen Play School</h2>
        <div className="about-cards-container">
          <div className="about-card">
            <h3>Our Philosophy</h3>
            <p>We believe in fostering a learning environment that encourages curiosity, creativity, and a sense of wonder. Our philosophy revolves around the idea that every child is unique, and we aim to build a personalized learning journey for each student, cultivating their skills, talents, and character. We aim to provide a balanced approach that emphasizes academic excellence, social development, and emotional well-being.</p>
          </div>
          <div className="about-card">
            <h3>Experienced Faculty</h3>
            <p>Our team of experienced and passionate teachers are dedicated to making each child's educational experience memorable. We take pride in providing them with the best resources and professional development opportunities to ensure they remain on the cutting edge of early childhood education practices.</p>
          </div>
          <div className="about-card">
            <h3>State-of-the-Art Facilities</h3>
            <p>Our school is equipped with modern, child-friendly facilities designed to enhance learning. From interactive classrooms to well-equipped play areas, every space is thoughtfully designed to support and engage children in their educational journey. Our facilities encourage hands-on learning and promote physical, mental, and emotional development.</p>
          </div>
          <div className="about-card">
            <h3>Join the Kaizen Family</h3>
            <p>If you're looking for an environment that values your child's growth, learning, and development, Kaizen Play School is the perfect place. We invite you to explore our school and discover how we can partner with you in shaping your child's future.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
