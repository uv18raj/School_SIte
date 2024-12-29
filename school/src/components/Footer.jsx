import React from 'react';
import './Footer.css';
import fbImg from '../assets/facebook.png'
import ytImg from '../assets/youtube.png';
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Kaizen Play School. All rights reserved.</p>
        <p>Contact us: kaizenpreplayschool@gmail.com | +91 7909019167</p>
        <div className="social-links">
          <a href="https://www.youtube.com/@Pravin_Kumr14" target="_blank" rel="noopener noreferrer" className="social-link"><img src ={ytImg} alt='Youtube link to go to youtube channel'/></a>
          <a href="https://www.facebook.com/share/SQC1Q3UcM92UR6ZY/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="social-link"><img src={fbImg} alt='Facebook link to go to facebook page' />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
