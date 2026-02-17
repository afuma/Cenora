import React from 'react';

const ProblemSection = () => {
  const problems = [
    {
      icon: '📧',
      title: 'Toujours les mêmes questions',
      description: '"Tarifs ? Délais ? Fonctionnement ?" — répondues manuellement chaque jour'
    },
    {
      icon: '📉',
      title: 'Visiteurs non convertis',
      description: 'Ils hésitent… et repartent sans laisser leurs coordonnées'
    },
    {
      icon: '📅',
      title: 'Prise de RDV laborieuse',
      description: 'Allers-retours d\'emails → opportunités perdues'
    },
    {
      icon: '🔔',
      title: 'Leads mal suivis',
      description: 'Des prospects intéressés qui refroidissent faute de réponse rapide'
    }
  ];

  return (
    <section className="py-20 px-5 bg-bg-white">
      <div className="container">
        <h2>Le problème que vous rencontrez</h2>
        <p className="text-center text-lg text-text-light max-w-3xl mx-auto mb-12 leading-relaxed px-5">
          Votre site reçoit des visiteurs, mais…
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-12">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-bg-white p-8 border border-border rounded transition-all duration-300 text-center hover:border-accent hover:shadow-md"
            >
              <div className="text-4xl mb-4">{problem.icon}</div>
              <h3 className="text-text-dark mb-2 text-lg">{problem.title}</h3>
              <p className="text-text-light mb-0 text-sm">{problem.description}</p>
            </div>
          ))}
        </div>
        {/* <p className="text-center mt-12">
          <strong>👉 Résultat : du temps perdu + de l'argent laissé sur la table</strong>
        </p> */}
      </div>
    </section>
  );
};

export default ProblemSection;
