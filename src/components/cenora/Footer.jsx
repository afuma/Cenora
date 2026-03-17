import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1F2A44] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6C4CF1] to-[#8B6EF5] flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="text-white font-semibold text-lg tracking-tight">Cenora</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              Agence de stratégie digitale spécialisée pour les professionnels de santé mentale.
            </p>
          </div>

          {/* <div>
            <h4 className="text-white/80 font-semibold text-sm mb-4">Navigation</h4>
            <ul className="space-y-3">
              {[
                { name: 'Accueil', page: 'Home' },
                { name: 'Services', page: 'Services' },
                { name: 'Tarifs', page: 'Pricing' },
                { name: 'À propos', page: 'About' },
                { name: 'Contact', page: 'Contact' },
              ].map((link) => (
                <li key={link.page}>
                  <Link to={createPageUrl(link.page)} className="text-white/40 text-sm hover:text-white/70 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

          <div>
            <h4 className="text-white/80 font-semibold text-sm mb-4">Navigation</h4>
            <ul className="space-y-3">
              {[
                { name: 'Accueil', page: 'Home' },
                { name: 'Services', page: 'Services' },
                { name: 'Tarifs', page: 'Pricing' },
                { name: 'À propos', page: 'About' },
                { name: 'Contact', page: 'Contact' },
              ].map((link) => (
                <li key={link.page}>
                  {link.page === "Contact" ? (
                    <a
                      href="https://calendly.com/contact-cenora/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/40 text-sm hover:text-white/70 transition-colors"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={createPageUrl(link.page)}
                      className="text-white/40 text-sm hover:text-white/70 transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white/80 font-semibold text-sm mb-4">Services</h4>
            <ul className="space-y-3">
              {['SEO Local', 'Google Business', 'Pages pathologies', 'Conformité RGPD', 'Maintenance'].map((service) => (
                <li key={service}>
                  <span className="text-white/40 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white/80 font-semibold text-sm mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#8B6EF5]" />
                <span className="text-white/40 text-sm">contact@cenora.fr</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#8B6EF5]" />
                <span className="text-white/40 text-sm">06 04 01 43 63</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#8B6EF5]" />
                <span className="text-white/40 text-sm">Neuilly-sur-Seine, 92200</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs">© 2026 Cenora. Tous droits réservés.</p>
          <div className="flex gap-6">
            <Link
              to={createPageUrl("Legal")}
              className="text-white/30 text-xs hover:text-white/50 cursor-pointer transition-colors"
            >
              Mentions légales
            </Link>
            <Link
              to={createPageUrl("Confidentialities")}
              className="text-white/30 text-xs hover:text-white/50 cursor-pointer transition-colors"
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}