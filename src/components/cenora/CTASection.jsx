import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function CTASection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-[#1F2A44] overflow-hidden"
        >
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#6C4CF1]/30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#8B6EF5]/15 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 px-8 sm:px-16 py-16 sm:py-20 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 mb-8">
              <Calendar className="w-4 h-4 text-[#8B6EF5]" />
              <span className="text-sm text-white/70">Diagnostic gratuit — 30 min</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl mx-auto">
              Prêt à remplir votre agenda ?
            </h2>

            <p className="mt-6 text-lg text-white/50 max-w-xl mx-auto">
              Réservez votre diagnostic gratuit. Nous analysons votre visibilité actuelle 
              et vous présentons un plan d'action concret.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              {/* <Link to={createPageUrl('Contact')}> */}
              <a href="https://calendly.com/contact-cenora/30min" target="_blank">
                <Button className="bg-[#6C4CF1] hover:bg-[#6C4CF1]/90 text-white px-8 py-6 text-base rounded-xl group">
                  Réserver mon diagnostic gratuit
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              {/* </Link> */}
            </div>

            <p className="mt-6 text-xs text-white/30">
              Sans engagement · Réponse sous 24h · 100% gratuit
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}