import React, { useState, useEffect } from 'react';
import '../App.css'
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">VINAY</a>
      </div>
      {isMobile && (
        <div className="navbar-toggle" onClick={toggleNavbar}>
          <div className={isOpen ? "hamburger open" : "hamburger"}></div>
        </div>
      )}
      <ul className={isOpen ? "navbar-links active" : "navbar-links"}>
        
        <li><Link to='About' smooth={true} duration={500}>About</Link></li>
        <li><Link to='Projects' smooth={true} duration={500}>Projects</Link></li>
        <li><Link to='Contact' smooth={true} duration={500}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;