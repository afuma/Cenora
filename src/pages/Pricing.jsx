import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Star, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import CTASection from '@/components/cenora/CTASection';

const included = [
  'Stratégie SEO local complète',
  'Optimisation Google Business Profile',
  'Site web optimisé conversion',
  'Rédaction spécialisée santé mentale',
  'Pages dédiées par pathologie',
  'Design sur-mesure responsive',
  'Conformité RGPD complète',
  'Hébergement haute performance',
  'Certificat SSL inclus',
  'Formation à la gestion des avis',
];

const monthly = [
  'Maintenance technique continue',
  'Mises à jour de sécurité',
  'Support prioritaire',
  'Reporting mensuel de performance',
  'Optimisations SEO continues',
  'Modifications et ajustements inclus',
  'Suivi de positionnement Google Maps',
  'Recommandations stratégiques',
];

const faq = [
  // {
  //   q: 'Pourquoi 3 500 € et pas 500 € comme d\'autres ?',
  //   a: 'Parce que nous ne vendons pas un site web. Nous déployons un système d\'acquisition patient complet : audit, stratégie SEO, rédaction spécialisée, optimisation Google Business, conformité RGPD, hébergement premium. Un simple site ne vous apportera aucun patient. Notre système, si.',
  // },
  {
    q: 'Les 150 €/mois sont-ils obligatoires ?',
    a: 'Le forfait mensuel assure la maintenance, le support, les mises à jour et l\'optimisation continue de votre visibilité. C\'est ce qui garantit des résultats durables. Sans cela, votre positionnement se dégradera inévitablement.',
  },
  {
    q: 'En combien de temps vais-je voir des résultats ?',
    a: "Le référencement naturel (SEO) est un travail progressif. En général, les premiers signaux positifs (meilleur positionnement, augmentation du trafic) peuvent apparaître entre 1 et 3 mois. Les résultats plus significatifs, comme une augmentation régulière des demandes de rendez-vous, se construisent plutôt sur 3 à 6 mois.\n\nCela dépend de plusieurs facteurs : la concurrence dans votre zone géographique, l’état actuel de votre site, et la régularité des actions mises en place. Notre objectif est de poser des bases solides dès le départ pour obtenir des résultats durables dans le temps."
  },
  {
    q: 'Est-ce adapté à ma spécialité ?',
    a: 'Nous travaillons avec tous les professionnels de santé mentale : psychologues, psychiatres, thérapeutes (EMDR, TCC, hypnose…), psychanalystes, art-thérapeutes, neuropsychologues, etc.',
  },
  {
    q: 'Je suis à Lisieux / en zone rurale, ça fonctionne ?',
    a: 'C\'est même un avantage ! La concurrence en ligne est souvent plus faible en zone rurale, ce qui permet d\'obtenir des résultats plus rapides et un meilleur positionnement sur Google Maps.',
  },
];

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="bg-[#F4F6FA]">
      {/* Header */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-sm font-medium text-[#8B6EF5] uppercase tracking-wider">Tarifs</span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-[#1F2A44] leading-tight">
              Un investissement,
              <br />
              <span className="text-[#6C4CF1]">pas une dépense.</span>
            </h1>
            <p className="mt-6 text-lg text-[#1F2A44]/50 leading-relaxed">
              Un patient moyen rapporte entre 500 € et 2 000 € par an. 
              Notre système se rentabilise dès les premiers mois.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Setup */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl border border-[#1F2A44]/5 p-8 md:p-10 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#6C4CF1]/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              
              <div className="relative">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#6C4CF1]/10 border border-[#6C4CF1]/20 mb-6">
                  <Zap className="w-3.5 h-3.5 text-[#6C4CF1]" />
                  <span className="text-xs font-medium text-[#6C4CF1]">Mise en place</span>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-[#1F2A44]">750</span>
                    <span className="text-xl text-[#1F2A44]/40">€</span>
                  </div>
                  <p className="text-sm text-[#1F2A44]/40 mt-2">Paiement unique</p>
                </div>

                <div className="space-y-3">
                  {included.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-0.5 w-5 h-5 rounded-full bg-[#6C4CF1]/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-[#6C4CF1]" />
                      </div>
                      <span className="text-sm text-[#1F2A44]/70">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Monthly */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#1F2A44] rounded-2xl p-8 md:p-10 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#8B6EF5]/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#6C4CF1]/10 rounded-full translate-y-1/2 -translate-x-1/2" />

              <div className="relative">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 mb-6">
                  <Shield className="w-3.5 h-3.5 text-[#8B6EF5]" />
                  <span className="text-xs font-medium text-white/70">Accompagnement mensuel</span>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-white">150</span>
                    <span className="text-xl text-white/40">€/mois</span>
                  </div>
                  <p className="text-sm text-white/30 mt-2">Sans engagement de durée minimale</p>
                </div>

                <div className="space-y-3">
                  {monthly.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-0.5 w-5 h-5 rounded-full bg-[#8B6EF5]/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-[#8B6EF5]" />
                      </div>
                      <span className="text-sm text-white/60">{item}</span>
                    </div>
                  ))}
                </div>

                <a href="https://calendly.com/contact-cenora/30min" target="_blank">
                  <Button className="w-full mt-8 bg-[#8B6EF5] hover:bg-[#8B6EF5]/90 text-white py-6 rounded-xl group">
                    Réserver mon diagnostic gratuit
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>

          {/* ROI calculator */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-12 bg-white rounded-2xl border border-[#1F2A44]/5 p-8 md:p-10"
          >
            <div className="flex items-center gap-3 mb-6">
              <Star className="w-5 h-5 text-[#8B6EF5]" />
              <h3 className="text-lg font-semibold text-[#1F2A44]">Calcul du retour sur investissement (pour vous)</h3>
            </div>
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div className="p-6 rounded-xl bg-[#F4F6FA]">
                <p className="text-3xl font-bold text-[#6C4CF1]">+3 à 5</p>
                <p className="text-sm text-[#1F2A44]/40 mt-2">Nouveaux patients/mois<br/>(estimation basse)</p>
              </div>
              <div className="p-6 rounded-xl bg-[#F4F6FA]">
                <p className="text-3xl font-bold text-[#8B6EF5]">60 €</p>
                <p className="text-sm text-[#1F2A44]/40 mt-2">Tarif moyen<br/>d'une séance</p>
              </div>
              <div className="p-6 rounded-xl bg-[#1F2A44]">
                <p className="text-3xl font-bold text-white">600 €</p>
                <p className="text-sm text-white/40 mt-2">Revenus additionnels pour 4 séances/clients</p>
              </div>
            </div>
            <p className="text-center text-sm text-[#1F2A44]/40 mt-6">
              Et l'investissement initial est rentabilisé <span className="font-semibold text-[#6C4CF1]">en moins de 6 mois</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#1F2A44]">Questions fréquentes</h2>
          </motion.div>

          <div className="space-y-4">
            {faq.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-xl border border-[#1F2A44]/5 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between"
                >
                  <span className="font-medium text-[#1F2A44] pr-4">{item.q}</span>
                  <span className={`text-[#1F2A44]/30 text-xl transition-transform ${openFaq === index ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    className="px-6 pb-5"
                  >
                    <p className="text-sm text-[#1F2A44]/50 leading-relaxed">{item.a}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}