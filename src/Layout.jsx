import React from 'react';
import Navbar from '@/components/cenora/Navbar';
import Footer from '@/components/cenora/Footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#F4F6FA]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        
        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        
        :root {
          --color-navy: #1F2A44;
          --color-violet: #6C4CF1;
          --color-bg: #F4F6FA;
          --color-accent: #8B6EF5;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        ::selection {
          background-color: rgba(108, 76, 241, 0.15);
          color: #1F2A44;
        }
      `}</style>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}