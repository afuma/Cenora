import React from 'react';

const SolutionSection = () => {
  const features = [
    { icon: '💬', text: 'répondre comme un humain' },
    { icon: '🎯', text: 'comprendre l\'intention du visiteur' },
    { icon: '❓', text: 'poser les bonnes questions' },
    { icon: '⚙️', text: 'agir automatiquement (RDV, lead, support…)' }
  ];

  const steps = [
    {
      number: '1',
      title: 'Diagnostic',
      description: 'On identifie ensemble :',
      items: [
        'les questions récurrentes',
        'les points de friction',
        'les opportunités de conversion'
      ]
    },
    {
      number: '2',
      title: 'Conception',
      description: 'Je conçois le chatbot :',
      items: [
        'logique de conversation',
        'ton de marque',
        'scénarios orientés business'
      ]
    },
    {
      number: '3',
      title: 'Mise en place',
      description: 'Installation et configuration :',
      items: [
        'intégration sur votre site',
        'connexions outils (email, CRM, agenda)',
        'tests réels'
      ]
    },
    {
      number: '4',
      title: 'Optimisation',
      description: 'Amélioration continue :',
      items: [
        'analyse des conversations',
        'ajustements pour conversions',
        'optimisation du ROI'
      ]
    }
  ];

  return (
    <section className="py-24 px-5 bg-bg-light">
      <div className="container">
        <h2>Ma solution : le chatbot IA business</h2>
        <p className="text-center text-lg text-text-light max-w-3xl mx-auto mb-12 leading-relaxed px-5">
          J'installe sur votre site <strong>un chatbot IA entraîné sur votre activité</strong>, capable de :
        </p>
        
        <div className="flex justify-center gap-8 mb-10 flex-wrap">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center max-w-xs p-4 bg-bg-white border border-border rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-sm"
            >
              <span className="text-4xl mb-4 block">{feature.icon}</span>
              <p className="text-text-dark text-sm">{feature.text}</p>
            </div>
          ))}
        </div>

        {/* <p className="text-center text-lg mb-4">
          <strong>Un seul objectif :</strong>
        </p>
        <p className="text-center text-xl mb-12">
          <strong>👉 que votre site travaille pour vous, même quand vous dormez.</strong>
        </p>
         */}
        <h2 className="text-center mt-12 mb-8">Comment ça marche ?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-12">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-bg-white p-10 border border-border rounded text-left"
            >
              <div className="inline-flex items-center justify-center w-11 h-11 bg-primary text-white rounded-full text-xl font-bold mb-4">
                {step.number}
              </div>
              <h3 className="text-text-dark text-lg">{step.title}</h3>
              <p>{step.description}</p>
              <ul className="list-none p-0">
                {step.items.map((item, idx) => (
                  <li key={idx} className="py-1.5 text-text-dark border-b border-border text-sm last:border-b-0 before:content-['—'] before:text-accent before:font-bold before:mr-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
