import React from 'react';

const Hero = () => {
  return (
    <header className="bg-bg-white text-text-dark py-24 px-5 relative overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center relative z-10">
          <div>
            <h1 className="text-text-dark mb-6 leading-tight">
              Automatisez votre site web avec un chatbot IA.<br />
              <span className="text-accent">Transformez vos visiteurs en clients, 24/7.</span>
            </h1>
            <p className="text-lg leading-relaxed mb-6 text-text-light">
              Vous avez déjà du trafic sur votre site… mais trop de visiteurs repartent sans réponse, sans contact, sans conversion ?
            </p>
            <p className="text-lg leading-relaxed mb-6 text-text-light">
              <strong>J'installe un chatbot IA intelligent</strong> sur votre site web pour :
            </p>
            <ul className="list-none p-0 my-6">
              <li className="py-2 pl-6 text-text-dark relative before:content-['•'] before:absolute before:left-0 before:text-accent before:font-bold">
                répondre instantanément aux visiteurs
              </li>
              <li className="py-2 pl-6 text-text-dark relative before:content-['•'] before:absolute before:left-0 before:text-accent before:font-bold">
                qualifier les prospects
              </li>
              <li className="py-2 pl-6 text-text-dark relative before:content-['•'] before:absolute before:left-0 before:text-accent before:font-bold">
                réduire le support
              </li>
              <li className="py-2 pl-6 text-text-dark relative before:content-['•'] before:absolute before:left-0 before:text-accent before:font-bold">
                récupérer <strong>10 à 15h par semaine</strong>
              </li>
            </ul>
            <div className="mt-8">
              <a href="#contact" className="btn btn-primary">
                Réserver un appel gratuit
              </a>
              <p className="mt-4 text-sm text-text-muted">
                ⏱️ 30 minutes pour voir si un chatbot IA peut vraiment vous rapporter
              </p>
            </div>
          </div>
          <div className="text-center">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop" 
              alt="Chatbot IA et productivité" 
              loading="lazy"
              className="w-full max-w-full rounded shadow-md"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
