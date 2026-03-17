import React from 'react';
import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
  return (
    <div className="bg-[#F4F6FA] min-h-screen px-6 lg:px-8 py-32 text-[#1F2A44]">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-bold text-center mb-8"
      >
        Politique de Confidentialité
      </motion.h1>

      {/* Texte principal */}
      <div className="max-w-3xl mx-auto text-lg leading-relaxed space-y-6">
        <p>
          <strong>1. Absence de collecte de données personnelles :</strong> Le site CENORA ne collecte aucune donnée personnelle via formulaire ou système de saisie.
        </p>
        <p>
          <strong>2. Absence de cookies :</strong> Le site n’utilise aucun cookie de suivi, de mesure d’audience ou de publicité.
        </p>
        <p>
          <strong>3. Contact :</strong> Les utilisateurs peuvent contacter l’éditeur du site uniquement via l’adresse email indiquée dans les mentions légales : 
          <a href="mailto:contact@cenora.fr" className="text-[#6C4CF1] underline"> contact@cenora.fr</a>.
        </p>
        <p>
          <strong>4. Réglementation applicable :</strong> Même en l’absence de collecte de données personnelles, le site respecte les principes du Règlement Général sur la Protection des Données (RGPD).
        </p>
      </div>
    </div>
  );
}