import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-5 bg-bg-light">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-left">Qui suis-je ?</h2>

            <p>
              Je m'appelle <strong>Étienne</strong>, et j'aide les entreprises à 
              <strong> transformer leur site web en un véritable levier business grâce aux chatbots IA</strong>.
            </p>

            <p>
              J'ai travaillé avec <strong>Blackbox.ai</strong>, une 
              <strong> entreprise américaine d'intelligence artificielle, basée à San Francisco</strong>, utilisée par 
              <strong> plus de 30 millions d'utilisateurs</strong> dans le monde.
              Mon rôle : <strong>QA tester et prompt engineering</strong>, avec 
              <strong> 140 heures</strong> dédiées à tester, améliorer et fiabiliser 
              les interactions avec des modèles d'IA.
            </p>

            <p>
              <strong>Mon obsession :</strong>
              <strong> des systèmes simples, robustes, prévisibles</strong> — pas des gadgets.
            </p>

            <p>
              En parallèle, j'ai été formé à <strong>l'École 42</strong> (fondée par 
              <strong> Xavier Niel</strong>), où j'ai passé 
              <strong> plus de 1 500 heures</strong> à concevoir et améliorer des systèmes concrets,
              et remporté <strong>2 premiers prix de hackathons</strong>.
            </p>

            <div className="grid grid-cols-3 gap-8 my-8 p-8 bg-bg-white border border-border rounded">
              <div className="text-center">
                <span className="block text-3xl font-bold text-accent mb-2">30M+</span>
                <span className="block text-text-light text-sm">utilisateurs (Blackbox.ai – San Francisco)</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl font-bold text-accent mb-2">140h</span>
                <span className="block text-text-light text-sm">QA & prompt engineering IA</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl font-bold text-accent mb-2">2×</span>
                <span className="block text-text-light text-sm">1er prix en hackathon</span>
              </div>
            </div>

            <a href="#contact" className="btn btn-primary">
              Réserver un appel
            </a>
          </div>

          <div className="text-center">
            <img 
              src="/assets/etienne-ia.jpg" 
              alt="Étienne - Fondateur Cenora" 
              loading="lazy"
              className="w-full max-w-sm rounded shadow-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
