import React from 'react';

const AudienceSection = () => {
  const audiences = [
    {
      icon: '🏢',
      title: 'PME & agences',
      description: 'Plus de leads sans recruter'
    },
    {
      icon: '💼',
      title: 'Consultants & freelances',
      description: 'Moins de temps passé à répondre, plus à facturer'
    },
    {
      icon: '🏡',
      title: 'Immobilier, services, B2B',
      description: 'Qualification automatique des prospects'
    },
    {
      icon: '📈',
      title: 'Entrepreneurs rentables',
      description: 'Vous avez déjà du trafic… mais pas assez de conversion'
    }
  ];

  return (
    <section className="py-20 px-5 bg-bg-light">
      <div className="container">
        <h2>À qui s'adresse ce service ?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-12">
          {audiences.map((audience, index) => (
            <div 
              key={index}
              className="bg-bg-white p-8 border border-border rounded transition-all duration-300 text-center hover:border-accent hover:shadow-md"
            >
              <h3 className="text-text-dark mb-4 text-lg">
                {audience.icon} {audience.title}
              </h3>
              <p className="text-text-light mb-0 text-sm">{audience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
