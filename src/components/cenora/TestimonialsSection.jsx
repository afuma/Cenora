import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Dr. Marie Lefevre',
    role: 'Psychologue clinicienne',
    location: 'Lisieux',
    text: 'En 4 mois, je suis passée de 2 à 15 nouveaux patients par mois via Google. Cenora comprend vraiment les enjeux de notre profession.',
    rating: 5,
    initials: 'ML',
    color: '#6C4CF1',
  },
  {
    name: 'Thomas Bernard',
    role: 'Thérapeute EMDR',
    location: 'Caen',
    text: 'Mon cabinet était invisible sur Google Maps. Aujourd\'hui je suis premier sur "thérapeute EMDR Caen". L\'investissement est rentabilisé dès le 2ème mois.',
    rating: 5,
    initials: 'TB',
    color: '#8B6EF5',
  },
  {
    name: 'Sophie Moreau',
    role: 'Psychologue spécialisée enfants',
    location: 'Deauville',
    text: 'Les pages par pathologie ont tout changé. Les parents trouvent directement les informations qu\'ils cherchent et me contactent naturellement.',
    rating: 5,
    initials: 'SM',
    color: '#6C4CF1',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-[#F4F6FA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-[#6C4CF1] uppercase tracking-wider">Témoignages</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-[#1F2A44] leading-tight">
            Ce que disent nos praticiens.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative bg-white rounded-2xl p-8 border border-[#6C4CF1]/5 hover:shadow-lg hover:shadow-[#6C4CF1]/8 transition-all duration-500"
            >
              <Quote className="w-8 h-8 mb-4 opacity-10" style={{ color: testimonial.color }} />
              <div className="flex gap-0.5 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-[#1F2A44]/70 text-sm leading-relaxed mb-8">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-semibold" style={{ backgroundColor: testimonial.color }}>
                  {testimonial.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1F2A44]">{testimonial.name}</p>
                  <p className="text-xs text-[#1F2A44]/40">{testimonial.role} — {testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}