import React from 'react';
import { motion } from 'framer-motion';

export default function LegalNotice() {
  return (
    <div className="bg-[#F4F6FA] min-h-screen px-6 lg:px-8 py-32 text-[#1F2A44]">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-bold text-center mb-8"
      >
        Mentions Légales
      </motion.h1>

      {/* Texte principal */}
      <div className="max-w-3xl mx-auto text-lg leading-relaxed space-y-6">
        <p>
          <strong>1. Éditeur du site :</strong><br />
          Étienne Desaintjean<br />
          CENORA - Micro-entreprise<br />
          Siège social : 26 route de Hiéville, Berville, 14170 Saint-Pierre-en-Auge, France<br />
          Email : <a href="mailto:contact@cenora.fr" className="text-[#6C4CF1] underline">contact@cenora.fr</a>
        </p>

        <p>
          <strong>2. Immatriculation :</strong><br />
          SIRET : 888 794 179 00018<br />
          Immatriculée au RCS de Lisieux
        </p>

        <p>
          <strong>3. Directeur de la publication :</strong><br />
          Étienne Desaintjean
        </p>

        <p>
          <strong>4. Hébergement :</strong><br />
          OVH SAS<br />
          2 rue Kellermann, 59100 Roubaix, France<br />
          Téléphone : 1007<br />
          Site : <a href="https://www.ovh.com" className="text-[#6C4CF1] underline">https://www.ovh.com</a>
        </p>

        <p>
          <strong>5. Propriété intellectuelle :</strong><br />
          L’ensemble des contenus présents sur ce site (textes, images, graphismes, logo, etc.) est protégé par le droit de la propriété intellectuelle.<br />
          Toute reproduction, représentation, modification, publication ou adaptation, totale ou partielle, de ces éléments est interdite sans l’autorisation écrite préalable de l’éditeur.
        </p>
      </div>
    </div>
  );
}