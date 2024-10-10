import React from "react";
import "./website.css";
const Footer = () => {

  const current = new Date().getFullYear();
  document.getElementById('current-year').textContent = current;
  
  return (
    <footer id="copyright-year">
      <div className="social-links">
        <a href="https://www.linkedin.com/in/hera-sadikaj-832136245/" target="_blank" rel="noopener noreferrer">
          <img
            src="https://png.pngtree.com/element_our/sm/20180524/sm_5b072d2f4f66c.jpg"
            alt="LinkedIn"
            style={{ width: '24px', height: '24px' }} 
          />
        </a>
        <a href="https://github.com/herasadikaj" target="_blank" rel="noopener noreferrer">
          <img
            src="https://w7.pngwing.com/pngs/435/424/png-transparent-github-computer-icons-source-code-github.png"
            alt="GitHub"
            style={{ width: '24px', height: '24px' }}
          />
        </a>
      
      <p style={{ color: '#F5EFEB' }}>
        &copy; <span id="current-year"></span> Hera Sadikaj. All rights reserved.
      </p>
      </div> 
    </footer>
  );
};

export default Footer;
