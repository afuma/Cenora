import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'contact@cenora.fr' },
  { icon: Phone, label: 'Téléphone', value: '06 04 01 43 63' },
  { icon: MapPin, label: 'Localisation', value: 'Lisieux, Normandie' },
  { icon: Clock, label: 'Réponse', value: 'Sous 24h garanties' },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    specialty: '',
    city: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="bg-[#F4F6FA] min-h-screen">
      {/* Header */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-sm font-medium text-[#8B6EF5] uppercase tracking-wider">Contact</span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-[#1F2A44] leading-tight">
              Réservez votre
              <br />
              <span className="text-[#6C4CF1]">diagnostic gratuit.</span>
            </h1>
            <p className="mt-6 text-lg text-[#1F2A44]/50 leading-relaxed">
              30 minutes pour analyser votre visibilité actuelle et vous proposer 
              un plan d'action personnalisé. Sans engagement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.5fr,1fr] gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {submitted ? (
                <div className="bg-white rounded-2xl border border-[#1F2A44]/5 p-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#6C4CF1]/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-[#6C4CF1]" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#1F2A44] mb-3">Message envoyé !</h2>
                  <p className="text-[#1F2A44]/50">
                    Merci pour votre demande. Nous vous recontactons sous 24h 
                    pour planifier votre diagnostic gratuit.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-[#1F2A44]/5 p-8 md:p-10 space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="text-[#1F2A44]/70 text-sm">Nom complet</Label>
                      <Input
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        placeholder="Dr. Marie Dupont"
                        className="rounded-xl border-[#1F2A44]/10 focus:border-[#6C4CF1] focus:ring-[#6C4CF1]/20 h-12"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-[#1F2A44]/70 text-sm">Email</Label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        placeholder="marie@cabinet.fr"
                        className="rounded-xl border-[#1F2A44]/10 focus:border-[#6C4CF1] focus:ring-[#6C4CF1]/20 h-12"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="text-[#1F2A44]/70 text-sm">Téléphone</Label>
                      <Input
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        placeholder="06 12 34 56 78"
                        className="rounded-xl border-[#1F2A44]/10 focus:border-[#6C4CF1] focus:ring-[#6C4CF1]/20 h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-[#1F2A44]/70 text-sm">Ville</Label>
                      <Input
                        value={formData.city}
                        onChange={(e) => handleChange('city', e.target.value)}
                        placeholder="Lisieux"
                        className="rounded-xl border-[#1F2A44]/10 focus:border-[#6C4CF1] focus:ring-[#6C4CF1]/20 h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-[#1F2A44]/70 text-sm">Votre spécialité</Label>
                    <Select value={formData.specialty} onValueChange={(v) => handleChange('specialty', v)}>
                      <SelectTrigger className="rounded-xl border-[#1F2A44]/10 h-12">
                        <SelectValue placeholder="Sélectionnez votre spécialité" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="psychologue">Psychologue</SelectItem>
                        <SelectItem value="psychiatre">Psychiatre</SelectItem>
                        <SelectItem value="psychanalyste">Psychanalyste</SelectItem>
                        <SelectItem value="therapeute">Thérapeute (EMDR, TCC, hypnose…)</SelectItem>
                        <SelectItem value="sophrologie">Sophrologue</SelectItem>
                        <SelectItem value="neuropsychologue">Neuropsychologue</SelectItem>
                        <SelectItem value="autre">Autre professionnel de santé mentale</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-[#1F2A44]/70 text-sm">Votre situation actuelle</Label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      placeholder="Décrivez brièvement votre situation : avez-vous un site web ? Combien de patients souhaitez-vous accueillir par mois ?"
                      className="rounded-xl border-[#1F2A44]/10 focus:border-[#6C4CF1] focus:ring-[#6C4CF1]/20 min-h-[120px]"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-[#1F2A44] hover:bg-[#1F2A44]/90 text-white py-6 rounded-xl group text-base">
                    <Send className="mr-2 w-4 h-4" />
                    Demander mon diagnostic gratuit
                  </Button>

                  <p className="text-center text-xs text-[#1F2A44]/30">
                    Sans engagement · 100% gratuit · Réponse sous 24h
                  </p>
                </form>
              )}
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {contactInfo.map((info, i) => (
                <div key={i} className="bg-white rounded-xl border border-[#1F2A44]/5 p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#6C4CF1]/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 text-[#6C4CF1]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#1F2A44]/40 uppercase tracking-wider">{info.label}</p>
                    <p className="font-medium text-[#1F2A44] mt-0.5">{info.value}</p>
                  </div>
                </div>
              ))}

              {/* Trust box */}
              <div className="bg-[#1F2A44] rounded-xl p-6 mt-6">
                <h3 className="text-white font-semibold mb-3">Ce que comprend le diagnostic :</h3>
                <ul className="space-y-2">
                  {[
                    'Analyse de votre visibilité actuelle',
                    'Audit de votre fiche Google Business',
                    'Étude de la concurrence locale',
                    'Plan d\'action personnalisé',
                    'Estimation du ROI potentiel',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-white/60">
                      <CheckCircle2 className="w-4 h-4 text-[#6C4CF1] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}