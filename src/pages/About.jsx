import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Target, Brain, Users, Award, Clock } from 'lucide-react';
import CTASection from '@/components/cenora/CTASection';

const values = [
  {
    icon: Heart,
    title: 'Spécialisation',
    description: 'Nous avons choisi de nous concentrer sur les professionnels de santé mentale, afin de comprendre au mieux vos enjeux et vos contraintes.',
    color: '#8B6EF5',
  },
  {
    icon: Target,
    title: 'Résultats concrets',
    description: 'Notre objectif : vous aider à améliorer votre visibilité et générer davantage de demandes de rendez-vous, avec des indicateurs simples et concrets.',
    color: '#6C4CF1',
  },
  {
    icon: Brain,
    title: 'Respect de la déontologie',
    description: 'Nous construisons des stratégies et contenus adaptés aux règles déontologiques de votre métier.',
    color: '#8B6EF5',
  },
  {
    icon: Users,
    title: 'Accompagnement humain',
    description: 'Un interlocuteur unique, à l’écoute, pour avancer avec vous simplement et efficacement.',
    color: '#6C4CF1',
  },
];

const stats = [
  { value: 'En lancement', label: 'Ouverture des premiers accompagnements', icon: Users },
  { value: '100%', label: 'Engagement sur votre satisfaction', icon: Award },
  { value: 'Objectif : +20%', label: 'Croissance de votre patientèle', icon: Target },
  { value: '< 24h', label: 'Temps de réponse support', icon: Clock },
];

export default function About() {
  return (
    <div className="bg-[#F4F6FA]">
      {/* Header */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-medium text-[#8B6EF5] uppercase tracking-wider">À propos</span>
              <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-[#1F2A44] leading-tight">
                Nés de la conviction que
                <br />
                <span className="text-[#6C4CF1]">la santé mentale mérite mieux.</span>
              </h1>
              <p className="mt-6 text-lg text-[#1F2A44]/50 leading-relaxed">
                Cenora est née d'un constat simple : les meilleurs thérapeutes sont souvent 
                les moins visibles en ligne. Pendant que des praticiens exceptionnels peinent 
                à remplir leur agenda, des patients en souffrance ne trouvent pas l'aide dont 
                ils ont besoin.
              </p>
              <p className="mt-4 text-lg text-[#1F2A44]/50 leading-relaxed">
                Notre mission : reconnecter les patients avec les bons professionnels, 
                grâce à une visibilité digitale qui reflète la qualité de votre accompagnement.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-xl shadow-[#1F2A44]/5 p-10 border border-[#1F2A44]/5">
                <blockquote className="text-xl font-medium text-[#1F2A44] leading-relaxed italic">
                  "Chaque thérapeute invisible en ligne, c'est un patient qui ne trouve 
                  pas l'aide dont il a besoin."
                </blockquote>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6C4CF1] to-[#6C4CF1]/70 flex items-center justify-center text-white font-bold text-sm">
                    C
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#1F2A44]">L'équipe Cenora</p>
                    <p className="text-xs text-[#1F2A44]/40">Notre philosophie</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center border border-[#1F2A44]/5"
              >
                <stat.icon className="w-6 h-6 text-[#6C4CF1] mx-auto mb-3" />
                <p className="text-3xl font-bold text-[#1F2A44]">{stat.value}</p>
                <p className="text-xs text-[#1F2A44]/40 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-sm font-medium text-[#8B6EF5] uppercase tracking-wider">Nos valeurs</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-[#1F2A44] leading-tight">
              Ce qui nous différencie.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-[#1F2A44]/5 hover:shadow-lg hover:shadow-[#1F2A44]/5 transition-all duration-500"
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${value.color}15` }}
                >
                  <value.icon className="w-6 h-6" style={{ color: value.color }} />
                </div>
                <h3 className="text-xl font-semibold text-[#1F2A44] mb-3">{value.title}</h3>
                <p className="text-[#1F2A44]/50 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <span className="text-sm font-medium text-[#8B6EF5] uppercase tracking-wider">Expertise</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-[#1F2A44] leading-tight">
              Nous accompagnons tous les profils.
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {[
              'Psychologues', 'Psychiatres', 'Psychanalystes', 
              'Thérapeutes EMDR', 'Hypnothérapeutes', 'Thérapeutes TCC',
              'Art-thérapeutes', 'Neuropsychologues', 'Psychomotriciens',
              'Sophrologues', 'Thérapeutes de couple', 'Thérapeutes enfants',
              'Addictologues', 'Sexologues', 'Psycho-praticiens',
            ].map((specialty, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                className="px-4 py-2 rounded-full bg-[#F4F6FA] border border-[#1F2A44]/5 text-sm text-[#1F2A44]/60 hover:border-[#6C4CF1]/30 hover:text-[#6C4CF1] transition-colors cursor-default"
              >
                {specialty}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}