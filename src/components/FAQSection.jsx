import React from 'react';

const FAQSection = () => {
  const faqs = [
    {
      question: 'Combien de temps pour installer le chatbot ?',
      answer: 'Entre <strong>1 et 3 semaines</strong> selon l\'offre choisie.'
    },
    {
      question: 'Est-ce vraiment utile si j\'ai déjà une FAQ ?',
      answer: '<strong>Oui.</strong> Une FAQ <strong>répond</strong>, un chatbot <strong>interagit, qualifie et convertit</strong>.'
    },
    {
      question: 'Est-ce que le chatbot peut dire n\'importe quoi ?',
      answer: '<strong>Non.</strong> Il est <strong>strictement limité à vos données</strong>, avec des garde-fous.'
    },
    {
      question: 'Puis-je commencer simple ?',
      answer: '<strong>Oui.</strong> 90 % des clients commencent par Essentiel ou Business, puis évoluent.'
    },
    {
      question: 'À qui appartient le chatbot ?',
      answer: '<strong>À vous.</strong> Le système est hébergé sur votre compte, vous êtes propriétaire.'
    },
    {
      question: 'Comment se déroule l\'appel gratuit ?',
      answer: '30 min pour comprendre votre business, identifier vos pain points, et voir si on peut travailler ensemble. Zéro engagement.'
    }
  ];

  return (
    <section className="py-20 px-5 bg-bg-light">
      <div className="container">
        <h2>Questions fréquentes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-bg-white p-8 rounded border border-border transition-all duration-300 hover:shadow-md hover:border-accent"
            >
              <h3 className="text-text-dark mb-4 text-base">{faq.question}</h3>
              <p 
                className="text-text-dark mb-0 text-sm"
                dangerouslySetInnerHTML={{ __html: faq.answer }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
