import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Star, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#F4F6FA]">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #1F2A44 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />
      
      {/* Floating accent shapes */}
      <motion.div 
        className="absolute top-20 right-[15%] w-72 h-72 rounded-full bg-[#6C4CF1]/10 blur-3xl"
        animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-20 left-[10%] w-96 h-96 rounded-full bg-[#6C4CF1]/8 blur-3xl"
        animate={{ y: [0, 15, 0], scale: [1, 1.03, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6C4CF1]/10 border border-[#6C4CF1]/20 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-[#6C4CF1] animate-pulse" />
              <span className="text-sm font-medium text-[#6C4CF1]">Agence spécialisée santé mentale</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1F2A44] leading-[1.1] tracking-tight"
            >
              Remplissez votre
              <br />
              <span className="relative">
                agenda patient
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                  <path d="M2 8C50 2 150 2 298 8" stroke="#6C4CF1" strokeWidth="3" strokeLinecap="round" opacity="0.6"/>
                </svg>
              </span>
              <br />
              <span className="text-[#6C4CF1]">durablement.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 text-lg text-[#1F2A44]/60 leading-relaxed max-w-xl"
            >
              Cenora accompagne les thérapeutes, psychologues et professionnels de santé mentale 
              avec un système complet d'acquisition patient via Google Maps et Google Business Profile.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              {/* <Link to={createPageUrl('Contact')}> */}
              <a href="https://calendly.com/contact-cenora/30min" target="_blank">
                <Button className="bg-[#6C4CF1] hover:bg-[#6C4CF1]/90 text-white px-8 py-6 text-base rounded-xl group">
                  Réserver un diagnostic gratuit
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              {/* </Link> */}
              <Link to={createPageUrl('Services')}>
                <Button variant="outline" className="border-[#1F2A44]/20 text-[#1F2A44] px-8 py-6 text-base rounded-xl hover:bg-[#6C4CF1]/5">
                  Découvrir nos services
                </Button>
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-12 flex flex-wrap gap-8"
            >
              {[
                { icon: MapPin, label: 'SEO Local', value: 'Objectif Top 3 Google Maps' },
                { icon: Star, label: 'Avis patients', value: 'Stratégie d’avis Google' },
                { icon: TrendingUp, label: 'Acquisition', value: 'Plus d’appels qualifiés' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#6C4CF1]/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-[#6C4CF1]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#1F2A44]/40 uppercase tracking-wider">{item.label}</p>
                    <p className="text-sm font-semibold text-[#1F2A44]">{item.value}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main card - Google Business mockup */}
              <div className="bg-white rounded-2xl shadow-xl shadow-[#1F2A44]/5 p-8 border border-[#1F2A44]/5">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6C4CF1] to-[#8B6EF5] flex items-center justify-center">
                    <span className="text-white font-bold text-lg">C</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1F2A44]">Cabinet Psychologie Dupont</h3>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                      <span className="text-xs text-[#1F2A44]/50 ml-1">4.9 (127 avis)</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="h-40 rounded-xl bg-gradient-to-br from-[#6C4CF1]/10 to-[#8B6EF5]/5 flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-[#6C4CF1]/40" />
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {['Itinéraire', 'Appeler', 'Site web'].map((action, i) => (
                      <div key={i} className="text-center py-3 rounded-lg bg-[#F4F6FA] text-xs font-medium text-[#1F2A44]/60">
                        {action}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating stats card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-8 top-1/2 -translate-y-1/2 bg-white rounded-xl shadow-lg shadow-[#1F2A44]/8 p-4 border border-[#1F2A44]/5"
              >
                <p className="text-xs text-[#1F2A44]/40 mb-1">Nouveaux patients/mois</p>
                <p className="text-2xl font-bold text-[#6C4CF1]">+10</p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="w-3 h-3 text-green-500" />
                  <span className="text-xs text-green-500 font-medium">+34%</span>
                </div>
              </motion.div>

              {/* Floating position card */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 bottom-8 bg-white rounded-xl shadow-lg shadow-[#1F2A44]/8 p-4 border border-[#1F2A44]/5"
              >
                <p className="text-xs text-[#1F2A44]/40 mb-1">Position Google Maps</p>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-[#6C4CF1]">#1</span>
                  <span className="text-xs text-[#1F2A44]/40">psychologue Lisieux</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}