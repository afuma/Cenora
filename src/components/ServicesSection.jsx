import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      title: '💬 Réponses automatiques intelligentes',
      items: ['FAQ, services, tarifs, délais, fonctionnement']
    },
    {
      title: '🎯 Qualification de prospects',
      items: ['Besoin, budget, urgence, coordonnées']
    },
    {
      title: '📅 Prise de rendez-vous automatique',
      items: ['Proposition de créneaux, confirmation, rappels']
    },
    {
      title: '📊 Centralisation des leads',
      items: ['CRM, Google Sheets, Notion, Airtable…']
    },
    // {
    //   title: '🧠 Support client automatisé',
    //   items: ['Moins d\'emails, moins d\'interruptions']
    // }
  ];

  return (
    <section id="services" className="py-24 px-5 bg-bg-white">
      <div className="container">
        <h2 className="mb-10">Ce que le chatbot IA peut faire pour vous</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-bg-white p-8 border border-border rounded"
            >
              <h3 className="text-text-dark mb-6 text-lg">{service.title}</h3>
              <ul className="list-none p-0">
                {service.items.map((item, idx) => (
                  <li 
                    key={idx}
                    className="py-2.5 text-text-dark border-b border-border text-sm last:border-b-0 before:content-['—'] before:text-accent before:font-bold before:mr-2"
                  >
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

export default ServicesSection;
