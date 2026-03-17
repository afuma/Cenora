import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const comparisonData = {
  old: [
    'Un simple site vitrine',
    'Design générique',
    'Aucune stratégie SEO',
    'Pas de suivi ni maintenance',
    'Aucune connaissance du secteur santé',
    'Résultat : 0 patient en plus',
  ],
  new: [
    'Système d\'acquisition patient complet',
    'Design pensé pour la conversion',
    'SEO local + Google Maps optimisé',
    'Maintenance et support continu',
    'Expertise santé mentale',
    'Résultat : agenda rempli en 3-6 mois',
  ],
};

export default function WhySection() {
  return (
    <section className="py-24 bg-[#1F2A44] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)`,
        backgroundSize: '48px 48px'
      }} />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#6C4CF1]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#8B6EF5]/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-[#8B6EF5] uppercase tracking-wider">Pourquoi Cenora</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white leading-tight">
            La différence entre un site
            <br />
            et un système qui rapporte.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
              <X className="w-3.5 h-3.5 text-red-400" />
              <span className="text-xs font-medium text-red-400">L'ancien modèle</span>
            </div>
            <ul className="space-y-4">
              {comparisonData.old.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0">
                    <X className="w-3 h-3 text-red-400" />
                  </div>
                  <span className="text-white/50 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-[#6C4CF1]/15 backdrop-blur-sm border border-[#6C4CF1]/30 p-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#6C4CF1]/20 border border-[#6C4CF1]/40 mb-6">
              <Check className="w-3.5 h-3.5 text-[#8B6EF5]" />
              <span className="text-xs font-medium text-[#8B6EF5]">Le système Cenora</span>
            </div>
            <ul className="space-y-4">
              {comparisonData.new.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-[#6C4CF1]/30 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-[#8B6EF5]" />
                  </div>
                  <span className="text-white/80 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}