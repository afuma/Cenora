import React from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, FileText, Shield, Zap, Headphones, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const services = [
  { icon: Search, title: 'SEO Local', description: 'Positionnement en top 3 Google Maps sur vos mots-clés thérapeutiques dans votre zone géographique.', color: '#6C4CF1' },
  { icon: MapPin, title: 'Google Business Profile', description: 'Optimisation complète de votre fiche : catégories, attributs, posts, photos et gestion des avis.', color: '#8B6EF5' },
  { icon: FileText, title: 'Pages par pathologie', description: 'Rédaction spécialisée santé mentale : anxiété, dépression, burn-out, thérapie de couple…', color: '#6C4CF1' },
  { icon: Shield, title: 'Conformité RGPD', description: 'Site conforme aux exigences de protection des données pour les professionnels de santé.', color: '#8B6EF5' },
  { icon: Zap, title: 'Performance & Hébergement', description: 'Hébergement rapide, sécurisé et optimisé pour la conversion de visiteurs en patients.', color: '#6C4CF1' },
  { icon: Headphones, title: 'Support prioritaire', description: 'Maintenance continue, mises à jour et accompagnement stratégique personnalisé.', color: '#8B6EF5' },
];

export default function ServicesOverview() {
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
          <span className="text-sm font-medium text-[#6C4CF1] uppercase tracking-wider">Nos services</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-[#1F2A44] leading-tight">
            Un système complet,
            <br />
            pas juste un site web.
          </h2>
          <p className="mt-6 text-[#1F2A44]/50 leading-relaxed">
            Nous ne vendons pas un site internet. Nous déployons un système d'acquisition patient 
            complet, conçu spécifiquement pour les professionnels de santé mentale.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-[#F4F6FA] border border-transparent hover:border-[#6C4CF1]/10 hover:shadow-lg hover:shadow-[#6C4CF1]/5 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: `${service.color}15` }}>
                <service.icon className="w-6 h-6" style={{ color: service.color }} />
              </div>
              <h3 className="text-lg font-semibold text-[#1F2A44] mb-3">{service.title}</h3>
              <p className="text-sm text-[#1F2A44]/50 leading-relaxed">{service.description}</p>
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Link to={createPageUrl('Services')} className="inline-flex items-center text-sm font-medium" style={{ color: service.color }}>
                  En savoir plus
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}