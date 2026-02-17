import React from 'react';

const PricingSection = () => {
  const pricingPlans = [
    {
      badge: 'Essentiel',
      featured: false,
      title: 'Chatbot IA Site Web',
      price: 'À partir de 500 €',
      priceDescription: 'Paiement unique',
      features: [
        '✓ Chatbot IA intégré à votre site',
        '✓ Entraîné sur votre site & FAQ',
        '✓ Réponses naturelles 24/7',
        '✓ 1 langue',
        '✓ Statistiques basiques',
        '✓ Mise en ligne + tests'
      ],
      idealFor: '👉 Idéal pour arrêter de perdre des visiteurs',
      delivery: '⏱️ Livraison : 7-14 jours',
      ctaText: 'Commencer',
      ctaPrimary: false
    },
    {
      badge: 'Business',
      featured: true,
      title: 'Chatbot IA de Conversion',
      price: 'À partir de 1 250 €',
      priceDescription: 'Paiement unique',
      features: [
        '✓ Tout Essentiel +',
        '✓ Qualification automatique des visiteurs',
        '✓ Capture email / téléphone',
        '✓ Envoi automatique des leads (CRM, Sheets…)',
        '✓ Prise de RDV intégrée',
        '✓ Analytics conversion',
        '✓ 2 langues'
      ],
      idealFor: '👉 Votre site devient un commercial 24/7',
      delivery: '⏱️ Livraison : 14-21 jours',
      ctaText: 'Réserver un appel',
      ctaPrimary: true
    },
    {
      badge: 'Pro',
      featured: false,
      title: 'Assistant IA Connecté à votre Business',
      price: 'À partir de 3 500 €',
      priceDescription: 'Sur sélection',
      features: [
        '✓ Tout Business +',
        '✓ Connexion CRM / outils internes',
        '✓ Accès aux données clients (RAG)',
        '✓ Création & mise à jour automatique (RDV, tickets…)',
        '✓ Automatisations avancées (n8n)',
        '✓ Dashboard ROI',
        '✓ Optimisation mensuelle incluse'
      ],
      idealFor: '👉 Un assistant IA qui travaille vraiment pour vous',
      delivery: '⏱️ Livraison : 21-27 jours',
      ctaText: 'Discuter du projet',
      ctaPrimary: false
    }
  ];

  return (
    <section id="pricing" className="py-24 px-5 bg-bg-white">
      <div className="container">
        <h2>Tarifs – Solution de chatbot IA clé en main</h2>
        <p className="text-center text-lg text-text-light max-w-3xl mx-auto mb-12 leading-relaxed px-5">
          Une <strong>seule offre centrale (chatbot IA sur site)</strong>, déclinée en 3 niveaux selon votre maturité.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={`bg-bg-white p-10 border rounded transition-all duration-300 relative ${
                plan.featured ? 'border-2 border-accent' : 'border-border hover:border-accent hover:shadow-md'
              }`}
            >
              <div className={`inline-block px-3 py-1.5 rounded text-xs font-semibold mb-4 border ${
                plan.featured 
                  ? 'bg-accent text-primary border-accent' 
                  : 'bg-bg-light text-text-dark border-border'
              }`}>
                {plan.badge}
              </div>
              <h3 className="text-2xl mb-4 text-text-dark">{plan.title}</h3>
              <p className="text-4xl font-bold text-text-dark mb-1">{plan.price}</p>
              <p className="text-text-light text-sm mb-8">{plan.priceDescription}</p>
              
              <ul className="list-none p-0 my-8 text-left">
                {plan.features.map((feature, idx) => (
                  <li 
                    key={idx}
                    className="py-2.5 text-text-dark border-b border-border text-sm last:border-b-0"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
              
              <a 
                href="#contact" 
                className={`btn w-full ${plan.ctaPrimary ? 'btn-primary' : 'btn-secondary'}`}
              >
                {plan.ctaText}
              </a>
              
              <p className="text-xs text-text-light mt-6 pt-6 border-t border-border">
                <strong>{plan.idealFor}</strong>
              </p>
              <p className="text-xs text-text-light mt-2">
                {plan.delivery}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-bg-light p-6 rounded mt-12 text-center border border-border">
          <h3 className="text-left text-lg mb-4">+ Abonnement Mensuel (Optionnel)</h3>
          <p className="text-left">
            <strong>150€ /mois</strong> — Maintenance, optimisations mensuelles, monitoring des workflows, support prioritaire 24/48h, évolutions et nouvelles intégrations, rapports de performance.
          </p>
          <p className="text-left mt-4 text-sm text-text-light">
            <strong>Note :</strong> Les systèmes sont hébergés sur les serveurs privés de Cenora pour une gestion optimisée. Vous conservez la propriété complète de vos workflows et des données collectées.
          </p>
        </div>

        {/* <div className="bg-bg-light p-10 rounded mt-12 text-center">
          <h3>📊 ROI Concret</h3>
          <p><strong>En moyenne :</strong></p>
          <ul className="list-none flex justify-center gap-8 my-6 flex-wrap">
            <li className="bg-bg-white py-3 px-6 rounded border border-border text-sm">
              –30 à –60 % d'emails entrants
            </li>
            <li className="bg-bg-white py-3 px-6 rounded border border-border text-sm">
              +20 à +40 % de leads qualifiés
            </li>
            <li className="bg-bg-white py-3 px-6 rounded border border-border text-sm">
              <strong>10 à 15h gagnées par semaine</strong>
            </li>
          </ul>
          <p className="mt-6"><strong>💰 Exemple :</strong></p>
          <p>À 50 €/h → <strong>500 à 750 € récupérés chaque semaine</strong></p>
          <p className="mt-4"><strong>👉 ROI en 3 à 5 semaines</strong></p>
        </div> */}
      </div>
    </section>
  );
};

export default PricingSection;
