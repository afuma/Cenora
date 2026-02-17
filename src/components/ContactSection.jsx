import React, { useState } from 'react';
import QualificationForm from './QualificationForm';

const ContactSection = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <section id="contact" className="py-20 px-5 bg-primary text-white text-center">
      <div className="container">
        <h2 className="text-white">Prêt à transformer votre site en machine à conversion ?</h2>
        <p className="text-white/90 text-base mb-8">
          Réservez un appel gratuit de 30 minutes. On analyse votre site, et je vous dis <strong>honnêtement</strong> si un chatbot IA est pertinent pour vous.
        </p>

        {!showForm ? (
          <>
            <div className="flex flex-col items-center gap-6 my-8">
              <button
                onClick={() => setShowForm(true)}
                className="btn btn-primary bg-white text-primary border-white hover:bg-accent hover:border-accent hover:text-primary"
              >
                📋 Remplir le formulaire de qualification
              </button>
              <div className="text-white/60 font-semibold text-sm">ou</div>
              <a 
                href="https://calendly.com/contact-cenora/30min" 
                className="btn btn-secondary bg-transparent text-white border-white hover:bg-white hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                📅 Réserver un appel directement
              </a>
              <div className="text-white/60 font-semibold text-sm">ou</div>
              <div className="bg-white/10 py-6 px-8 rounded border border-white/20">
                <p className="mb-2 text-white/90">Écrivez-moi directement :</p>
                <a 
                  href="mailto:contact@cenora.fr" 
                  className="text-accent font-semibold text-base hover:underline"
                >
                  contact@cenora.fr
                </a>
              </div>
            </div>

            <p className="mt-8 text-sm text-white/80">
              ⏱️ Créneaux disponibles cette semaine • Réponse en moins de 24h
            </p>
          </>
        ) : (
          <div className="mt-8">
            <button
              onClick={() => setShowForm(false)}
              className="mb-6 text-white/80 hover:text-white text-sm flex items-center gap-2 mx-auto"
            >
              ← Retour aux options de contact
            </button>
            <QualificationForm />
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
