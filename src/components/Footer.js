import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Digital Requiem CTF Challenge &copy; {new Date().getFullYear()}</p>
        <div className="footer-links">
          <a href="https://github.com/RohitPaulReddyG/digital-requiem-ctf" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">Deployed on Vercel</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;