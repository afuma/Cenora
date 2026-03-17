import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, Search, Rocket, BarChart3 } from 'lucide-react';

const steps = [
  { number: '01', icon: PhoneCall, title: 'Diagnostic gratuit', description: 'Analyse de votre visibilité actuelle, de votre zone de chalandise et de votre concurrence locale.' },
  { number: '02', icon: Search, title: 'Stratégie sur-mesure', description: 'Plan d\'action personnalisé : mots-clés, pages pathologies, optimisation Google Business Profile.' },
  { number: '03', icon: Rocket, title: 'Déploiement', description: 'Création du site, rédaction spécialisée, configuration technique et mise en ligne optimisée.' },
  { number: '04', icon: BarChart3, title: 'Suivi & croissance', description: 'Maintenance mensuelle, reporting de performance et optimisation continue de votre visibilité.' },
];

export default function ProcessSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-[#6C4CF1] uppercase tracking-wider">Notre méthode</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-[#1F2A44] leading-tight">
            4 étapes vers un agenda rempli.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative text-center"
            >
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-[#6C4CF1]/20 to-transparent" />
              )}
              <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#F4F6FA] border border-[#6C4CF1]/10 mb-6">
                <step.icon className="w-7 h-7 text-[#6C4CF1]" />
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#6C4CF1] text-white text-xs font-bold flex items-center justify-center">
                  {step.number}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-[#1F2A44] mb-2">{step.title}</h3>
              <p className="text-sm text-[#1F2A44]/50 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}