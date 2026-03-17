import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Accueil', page: 'Home' },
  { name: 'Services', page: 'Services' },
  { name: 'Tarifs', page: 'Pricing' },
  { name: 'À propos', page: 'About' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm shadow-[#1F2A44]/5' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 py-4">
            <Link to={createPageUrl('Home')} className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6C4CF1] to-[#8B6EF5] flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="text-[#1F2A44] font-semibold text-lg tracking-tight">Cenora</span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.page}
                  to={createPageUrl(link.page)}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname.includes(link.page.toLowerCase())
                      ? 'text-[#6C4CF1]'
                      : 'text-[#1F2A44]/50 hover:text-[#1F2A44]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="hidden md:block">
              {/* <Link to={createPageUrl('Contact')}> */}
              <a href="https://calendly.com/contact-cenora/30min" target="_blank">
                <Button className="bg-[#6C4CF1] hover:bg-[#6C4CF1]/90 text-white rounded-xl px-6 group">
                  Contact
                  <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Button>
              </a>
              {/* </Link> */}
            </div>

            <button
              className="md:hidden p-2 rounded-lg hover:bg-[#6C4CF1]/5 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-5 h-5 text-[#1F2A44]" /> : <Menu className="w-5 h-5 text-[#1F2A44]" />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white pt-20"
          >
            <div className="px-6 py-8 space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.page}
                  to={createPageUrl(link.page)}
                  className="block text-2xl font-semibold text-[#1F2A44]/80 hover:text-[#6C4CF1] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              {/* <Link to={createPageUrl('Contact')}> */}
              <a href="https://calendly.com/contact-cenora/30min" target="_blank">
                <Button className="w-full bg-[#6C4CF1] hover:bg-[#6C4CF1]/90 text-white rounded-xl py-6 mt-4">
                  Réserver un diagnostic gratuit
                </Button>
              </a>
              {/* </Link> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}