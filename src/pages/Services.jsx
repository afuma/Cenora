import React from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, FileText, Shield, Zap, Headphones, Check, ArrowRight, Monitor } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import CTASection from '@/components/cenora/CTASection';

const services = [
  {
    icon: Monitor,
    title: 'Site web optimisé conversion',
    description: 'Un site conçu pour transformer vos visiteurs en patients.',
    color: '#6C4CF1',
    features: [
      'Création d’un site sur-mesure adapté à votre pratique',
      'Structure pensée pour générer des prises de rendez-vous',
      'Pages dédiées par problématique (anxiété, stress, burn-out…)',
      'Design rassurant et adapté aux patients',
      'Intégration des bonnes pratiques SEO dès la création'
    ],
  },
  {
    icon: Zap,
    title: 'Performance & Hébergement',
    description: 'Un site rapide, fiable et optimisé pour la conversion.',
    color: '#6C4CF1',
    features: [
      'Hébergement haute performance en France',
      'Temps de chargement < 2 secondes',
      'Design mobile-first responsive'
    ],
  },
  {
    icon: Search,
    title: 'Stratégie SEO Local',
    description: 'Dominez les résultats Google dans votre zone géographique.',
    color: '#6C4CF1',
    features: [
      'Audit SEO complet de votre présence en ligne',
      'Recherche de mots-clés spécifiques santé mentale',
      'Optimisation on-page et technique',
      'Suivi de positionnement mensuel',
    ],
  },
  {
    icon: MapPin,
    title: 'Google Business Profile',
    description: 'Votre fiche Google optimisée pour attirer des patients.',
    color: '#6C4CF1',
    features: [
      'Création ou optimisation de la fiche complète',
      'Stratégie de catégories et attributs',
      'Planning de publications Google Posts',
      'Gestion et réponse aux avis patients',
      'Ajout de photos professionnelles optimisées',
    ],
  },
  {
    icon: Shield,
    title: 'Sécurité & RGPD',
    description: 'Conformité totale aux exigences de protection des données de santé.',
    color: '#6C4CF1',
    features: [
      'Certificat SSL et chiffrement des données',
      'Politique de confidentialité conforme RGPD',
      'Formulaires sécurisés'
    ],
  },
  {
    icon: Headphones,
    title: 'Support & Maintenance',
    description: 'Un accompagnement continu pour des résultats durables.',
    color: '#6C4CF1',
    features: [
      'Support prioritaire par email et téléphone',
      'Mises à jour techniques et sécurité',
      'Modifications et ajustements inclus',
    ],
  },
];

export default function Services() {
  return (
    <div className="bg-[#F4F6FA]">
      {/* Header */}
      <section className="pt-32 pb-16 bg-[#F4F6FA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-sm font-medium text-[#6C4CF1] uppercase tracking-wider">Nos services</span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-[#1F2A44] leading-tight">
              Tout ce qu'il faut pour
              <br />
              <span className="text-[#6C4CF1]">remplir votre cabinet.</span>
            </h1>
            <p className="mt-6 text-lg text-[#1F2A44]/50 leading-relaxed">
              Chaque service est pensé pour fonctionner en synergie. Ensemble, ils forment un système 
              d'acquisition patient complet et pérenne.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services detail */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl border border-[#1F2A44]/5 p-8 md:p-10 hover:shadow-lg hover:shadow-[#1F2A44]/5 transition-all duration-500"
            >
              <div className="grid md:grid-cols-[1fr,1.5fr] gap-8 items-start">
                <div>
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: `${service.color}15` }}
                  >
                    <service.icon className="w-7 h-7" style={{ color: service.color }} />
                  </div>
                  <h2 className="text-2xl font-bold text-[#1F2A44] mb-3">{service.title}</h2>
                  <p className="text-[#1F2A44]/50 leading-relaxed">{service.description}</p>
                </div>
                
                <div className="space-y-3">
                  {service.features.map((feature, fi) => (
                    <div key={fi} className="flex items-start gap-3 py-2">
                      <div className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${service.color}15` }}
                      >
                        <Check className="w-3 h-3" style={{ color: service.color }} />
                      </div>
                      <span className="text-sm text-[#1F2A44]/70">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}