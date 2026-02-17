import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12 px-5">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="text-white mb-4 text-sm">Cenora</h4>
            <p className="text-white/70 mb-2 text-sm">Chatbots IA pour entrepreneurs</p>
          </div>
          <div>
            <h4 className="text-white mb-4 text-sm">Liens rapides</h4>
            <ul className="list-none p-0">
              <li className="mb-2">
                <a href="#services" className="text-white/70 transition-all duration-300 text-sm hover:text-accent">
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a href="#pricing" className="text-white/70 transition-all duration-300 text-sm hover:text-accent">
                  Tarifs
                </a>
              </li>
              <li className="mb-2">
                <a href="#about" className="text-white/70 transition-all duration-300 text-sm hover:text-accent">
                  À propos
                </a>
              </li>
              <li className="mb-2">
                <a href="#contact" className="text-white/70 transition-all duration-300 text-sm hover:text-accent">
                  Contact
                </a>
              </li>
              <li className="mb-2">
                <Link to="/privacy" className="text-white/70 transition-all duration-300 text-sm hover:text-accent">
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white mb-4 text-sm">Contact</h4>
            <p className="text-white/70 mb-2 text-sm">
              Email: <a href="mailto:contact@cenora.fr" className="text-white/70 hover:text-accent">contact@cenora.fr</a>
            </p>
            <p className="text-white/70 mb-2 text-sm">Basé en France 🇫🇷</p>
          </div>
        </div>
        <div className="text-center pt-8 border-t border-white/10 text-white/50 text-xs">
          <p>&copy; 2025 Cenora. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
