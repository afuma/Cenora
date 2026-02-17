import React from 'react';

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "1. Responsable du traitement",
      content: [
        "Le responsable du traitement des données est :",
        "Cenora",
        "Email : contact@cenora.fr",
        "Pays : France",
        "Pour toute question relative à vos données personnelles, vous pouvez nous contacter à cette adresse."
      ]
    },
    {
      title: "2. Données collectées",
      content: [
        "Lorsque vous utilisez le site ou le chatbot, nous pouvons collecter les informations suivantes :"
      ],
      subsections: [
        {
          subtitle: "Données fournies volontairement",
          items: ["Nom", "Adresse email", "Numéro de téléphone", "Message ou demande", "Informations liées à votre projet"]
        },
        {
          subtitle: "Données techniques",
          items: ["Adresse IP", "Type d'appareil et navigateur", "Pages visitées", "Données de navigation (cookies)"]
        }
      ]
    },
    {
      title: "3. Finalités de la collecte",
      content: [
        "Les données sont collectées uniquement pour les objectifs suivants :"
      ],
      subsections: [
        {
          subtitle: "Répondre à vos demandes",
          items: ["Vous recontacter suite à une prise de contact", "Qualifier votre besoin", "Planifier un rendez-vous"]
        },
        {
          subtitle: "Améliorer nos services",
          items: ["Assurer le bon fonctionnement du site et du chatbot"]
        }
      ],
      footer: "Aucune donnée n'est vendue ou cédée à des tiers à des fins commerciales."
    },
    {
      title: "4. Base légale du traitement",
      content: [
        "Les données sont traitées sur la base :",
        "• de votre consentement (formulaire, chatbot, prise de contact)",
        "• de l'intérêt légitime pour répondre à vos demandes",
        "• de l'exécution d'un contrat si vous devenez client"
      ]
    },
    {
      title: "5. Outils et sous-traitants",
      content: [
        "Certaines données peuvent être traitées par des outils tiers nécessaires au fonctionnement du service :",
        "• Hébergement du site et des systèmes",
        "• Outils d'automatisation",
        "• Services d'intelligence artificielle",
        "• Outils de gestion de leads ou CRM",
        "• Outils d'analyse ou de planification",
        "",
        "Ces prestataires sont sélectionnés pour leur conformité aux normes de sécurité et aux obligations du RGPD.",
        "",
        "Certaines données peuvent être traitées en dehors de l'Union européenne, notamment par des services technologiques, avec des garanties contractuelles appropriées (clauses contractuelles types)."
      ]
    },
    {
      title: "6. Durée de conservation",
      content: [
        "Les données personnelles sont conservées :",
        "• Jusqu'à 3 ans après le dernier contact pour les prospects",
        "• Pendant la durée de la relation contractuelle pour les clients",
        "• Puis archivées ou supprimées conformément aux obligations légales"
      ]
    },
    {
      title: "7. Sécurité des données",
      content: [
        "Cenora met en place des mesures techniques et organisationnelles pour protéger les données :",
        "• Accès restreint aux informations",
        "• Hébergement sécurisé",
        "• Connexions chiffrées",
        "• Outils conformes aux standards de sécurité"
      ]
    },
    {
      title: "8. Vos droits",
      content: [
        "Conformément au RGPD, vous disposez des droits suivants :",
        "• Droit d'accès à vos données",
        "• Droit de rectification",
        "• Droit de suppression",
        "• Droit d'opposition",
        "• Droit à la limitation du traitement",
        "• Droit à la portabilité des données",
        "",
        "Vous pouvez exercer vos droits en envoyant un email à : contact@cenora.fr",
        "",
        "Une réponse vous sera apportée dans un délai maximum de 30 jours."
      ]
    },
    {
      title: "9. Cookies",
      content: [
        "Le site peut utiliser des cookies pour :",
        "• assurer son bon fonctionnement",
        "• analyser le trafic",
        "• améliorer l'expérience utilisateur",
        "",
        "Vous pouvez configurer votre navigateur pour refuser les cookies."
      ]
    },
    {
      title: "10. Modifications de la politique",
      content: [
        "Cette politique de confidentialité peut être modifiée à tout moment afin de refléter les évolutions légales ou techniques.",
        "",
        "La date de mise à jour indiquée en haut du document fera foi."
      ]
    },
    {
      title: "11. Autorité de contrôle",
      content: [
        "Si vous estimez que vos droits ne sont pas respectés, vous pouvez déposer une réclamation auprès de l'autorité compétente :",
        "",
        "CNIL – Commission Nationale de l'Informatique et des Libertés",
        "www.cnil.fr"
      ]
    }
  ];

  return (
    <div className="bg-white py-20 px-5" id="privacy">
      <div className="container max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-4 text-center">
          Politique de confidentialité
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Dernière mise à jour : Février 2025
        </p>
        
        <div className="text-gray-700 leading-relaxed">
          <p className="mb-8">
            La présente politique de confidentialité décrit comment les données personnelles sont collectées, 
            utilisées et protégées lorsque vous utilisez le site de Cenora et ses services de chatbot IA.
          </p>

          {sections.map((section, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-2xl text-left font-semibold text-primary mb-4">
                {section.title}
              </h2>
              
              {section.content.map((paragraph, pIndex) => (
                <p key={pIndex} className="mb-2">
                  {paragraph}
                </p>
              ))}

              {section.subsections && (
                <div className="ml-4 mt-4">
                  {section.subsections.map((subsection, sIndex) => (
                    <div key={sIndex} className="mb-4">
                      <h3 className="font-semibold text-lg text-gray-800 mb-2">
                        {subsection.subtitle}
                      </h3>
                      <ul className="list-none ml-4">
                        {subsection.items.map((item, iIndex) => (
                          <li key={iIndex} className="mb-1 text-gray-700">
                            • {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {section.footer && (
                <p className="mt-4 font-medium text-gray-800">
                  {section.footer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
