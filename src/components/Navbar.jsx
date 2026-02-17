import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    
    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const target = document.querySelector(sectionId);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    } else {
      const target = document.querySelector(sectionId);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  return (
    <nav className="bg-bg-white border-b border-border sticky top-0 z-50">
      <div className="container">
        <div className="flex justify-between items-center py-5">
          <Link to="/" className="text-2xl font-bold text-primary tracking-tight">
            Cenora
          </Link>
          <ul className="flex list-none gap-10 items-center">
            <li>
              <a 
                href="#services" 
                onClick={(e) => scrollToSection(e, '#services')}
                className="text-text-dark font-medium text-sm transition-all duration-300 hover:text-accent"
              >
                Services
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                onClick={(e) => scrollToSection(e, '#about')}
                className="text-text-dark font-medium text-sm transition-all duration-300 hover:text-accent"
              >
                À propos
              </a>
            </li>
            <li>
              <a 
                href="#pricing" 
                onClick={(e) => scrollToSection(e, '#pricing')}
                className="text-text-dark font-medium text-sm transition-all duration-300 hover:text-accent"
              >
                Tarifs
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                onClick={(e) => scrollToSection(e, '#contact')}
                className="bg-primary text-white px-6 py-2.5 rounded font-semibold text-sm transition-all duration-300 hover:bg-accent hover:text-primary"
              >
                Réserver un appel
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
