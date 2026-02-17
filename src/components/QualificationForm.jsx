import React, { useState } from 'react';

const QualificationForm = () => {
  const [formData, setFormData] = useState({
    companyType: '',
    employees: '',
    sector: '',
    averagePrice: '',
    monthlyRequests: '',
    hasWebsite: '',
    websiteUrl: '',
    monthlyVisits: '',
    activityZone: '',
    name: '',
    email: '',
    phone: '',
    linkedin: ''
  });

  const [score, setScore] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const calculateScore = (data) => {
    let totalScore = 0;

    // +300 visites = +2
    if (data.monthlyVisits === 'Plus de 1 000' || data.monthlyVisits === '300 à 1 000') {
      totalScore += 2;
    }

    // Secteur rentable = +2
    const rentableSectors = ['Immobilier', 'Santé / esthétique', 'Formation', 'Service aux entreprises'];
    if (rentableSectors.includes(data.sector)) {
      totalScore += 2;
    }

    // Panier moyen >200 € = +2
    if (data.averagePrice === '200 à 500 €' || data.averagePrice === '500 à 1 000 €' || data.averagePrice === 'Plus de 1 000 €') {
      totalScore += 2;
    }

    // +3 employés = +1
    if (data.employees === '6–10' || data.employees === '11–20' || data.employees === '21+') {
      totalScore += 1;
    }

    // Ville moyenne ou grande = +1
    if (data.activityZone === 'Ville moyenne (20k–100k)' || data.activityZone === 'Grande ville (100k+)' || data.activityZone === 'Métropole') {
      totalScore += 1;
    }

    return totalScore;
  };

  const getScoreLabel = (score) => {
    if (score <= 2) return { label: 'Prospect faible', color: 'text-orange-600' };
    if (score <= 5) return { label: 'Prospect moyen', color: 'text-blue-600' };
    return { label: 'Excellent prospect', color: 'text-green-600' };
  };

  // const calculateROI = (data) => {
  //   // Extraire le prix moyen (prendre la valeur médiane de la fourchette)
  //   let averagePrice = 0;
  //   switch(data.averagePrice) {
  //     case 'Moins de 50 €':
  //       averagePrice = 35;
  //       break;
  //     case '50 à 200 €':
  //       averagePrice = 125;
  //       break;
  //     case '200 à 500 €':
  //       averagePrice = 350;
  //       break;
  //     case '500 à 1 000 €':
  //       averagePrice = 750;
  //       break;
  //     case 'Plus de 1 000 €':
  //       averagePrice = 1500;
  //       break;
  //     default:
  //       averagePrice = 0;
  //   }

  //   // Extraire le nombre de demandes mensuelles (prendre la valeur médiane)
  //   let monthlyLeads = 0;
  //   switch(data.monthlyRequests) {
  //     case 'Moins de 10':
  //       monthlyLeads = 7;
  //       break;
  //     case '10 à 30':
  //       monthlyLeads = 20;
  //       break;
  //     case '30 à 100':
  //       monthlyLeads = 65;
  //       break;
  //     case 'Plus de 100':
  //       monthlyLeads = 150;
  //       break;
  //     default:
  //       monthlyLeads = 0;
  //   }

  //   // Hypothèses de conversion
  //   const conversionRateImprovement = 0.15; // +15% de conversion grâce au chatbot
  //   const currentConversionRate = 0.02; // 2% de taux de conversion actuel (hypothèse)
  //   const newConversionRate = currentConversionRate + conversionRateImprovement;

  //   // Calculs
  //   const additionalConversions = monthlyLeads * conversionRateImprovement;
  //   const monthlyRevenue = additionalConversions * averagePrice;
  //   const yearlyRevenue = monthlyRevenue * 12;

  //   // Coût du chatbot (hypothèse : offre Pro à 297€/mois)
  //   const monthlyCost = 297;
  //   const yearlyCost = monthlyCost * 12;

  //   // ROI
  //   const netYearlyGain = yearlyRevenue - yearlyCost;
  //   const roiPercentage = ((netYearlyGain / yearlyCost) * 100).toFixed(0);

  //   return {
  //     monthlyRevenue: Math.round(monthlyRevenue),
  //     yearlyRevenue: Math.round(yearlyRevenue),
  //     yearlyCost,
  //     netYearlyGain: Math.round(netYearlyGain),
  //     roiPercentage,
  //     additionalConversions: additionalConversions.toFixed(1)
  //   };
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const calculatedScore = calculateScore(formData);
    const scoreLabel = getScoreLabel(calculatedScore);

    // Préparer les données à envoyer au webhook
    const webhookData = {
      ...formData,
      score: calculatedScore,
      scoreLabel: scoreLabel.label,
      submittedAt: new Date().toISOString()
    };

    try {
      // Envoyer les données au webhook n8n
      const response = await fetch('https://n8n.srv832177.hstgr.cloud/webhook/lead-cenora', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookData)
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l\'envoi du formulaire');
      }

      // Succès
      setScore(calculatedScore);
      setSubmitted(true);
      console.log('Form Data sent successfully:', webhookData);
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Une erreur est survenue lors de l\'envoi du formulaire. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    // const roi = calculateROI(formData);
    return (
      <div className="bg-bg-white p-8 rounded border border-border max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <div className="mb-6">
            <svg className="w-16 h-16 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-4">Merci {formData.name} !</h3>
          <p className="text-lg mb-2">Votre demande a été enregistrée avec succès.</p>
        </div>

        {/* <div className="bg-gradient-to-br from-accent/10 to-primary/10 p-8 rounded-lg mb-6">
          <h4 className="text-2xl font-bold text-center mb-6 text-primary">📊 Votre ROI Potentiel</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-sm text-text-muted mb-2">Revenus additionnels mensuels</p>
              <p className="text-3xl font-bold text-accent">{roi.monthlyRevenue.toLocaleString('fr-FR')} €</p>
              <p className="text-xs text-text-muted mt-2">+{roi.additionalConversions} conversions/mois</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-sm text-text-muted mb-2">Revenus additionnels annuels</p>
              <p className="text-3xl font-bold text-green-600">{roi.yearlyRevenue.toLocaleString('fr-FR')} €</p>
              <p className="text-xs text-text-muted mt-2">Sur 12 mois</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-sm text-text-muted">Investissement annuel</p>
                <p className="text-xl font-semibold text-text-dark">{roi.yearlyCost.toLocaleString('fr-FR')} €</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-text-muted">Gain net annuel</p>
                <p className="text-xl font-semibold text-green-600">+{roi.netYearlyGain.toLocaleString('fr-FR')} €</p>
              </div>
            </div>
            <div className="border-t pt-4">
              <p className="text-sm text-text-muted mb-2">Retour sur investissement (ROI)</p>
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-accent to-green-500 h-3 rounded-full transition-all duration-1000"
                    style={{ width: `${Math.min(roi.roiPercentage, 100)}%` }}
                  ></div>
                </div>
                <p className="text-2xl font-bold text-green-600">{roi.roiPercentage}%</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-800">
            <p className="font-semibold mb-2">💡 Comment nous calculons votre ROI :</p>
            <ul className="list-disc list-inside space-y-1 text-xs">
              <li>Amélioration du taux de conversion : +15% grâce au chatbot IA</li>
              <li>Disponibilité 24/7 pour capter plus de leads</li>
              <li>Qualification automatique des prospects</li>
              <li>Réponses instantanées = moins d'abandons</li>
            </ul>
          </div>
        </div> */}

        <div className="text-center">
          <p className="text-text-light mb-6">
            Nous vous contacterons sous 24-48h pour discuter de votre projet et voir comment maximiser votre ROI avec un chatbot IA personnalisé.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({
                companyType: '',
                employees: '',
                sector: '',
                averagePrice: '',
                monthlyRequests: '',
                hasWebsite: '',
                websiteUrl: '',
                monthlyVisits: '',
                activityZone: '',
                name: '',
                email: '',
                phone: '',
                linkedin: ''
              });
            }}
            className="btn btn-secondary"
          >
            Nouvelle demande
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-bg-white p-8 rounded border border-border max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold mb-6 text-center">Formulaire de qualification</h3>
      <p className="text-center text-text-light mb-8">Remplissage en moins de 30 secondes</p>

      {/* Section 1: Informations rapides */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold mb-4 text-accent">Informations rapides</h4>
        
        <div className="mb-4">
          <label className="block text-md font-medium mb-2 text-text-dark text-left">Type d'entreprise</label>
          <select
            name="companyType"
            value={formData.companyType}
            onChange={handleChange}
            required
            className="w-full p-3 border-2 border-gray-300 rounded focus:outline-none focus:border-accent bg-white text-text-dark"
          >
            <option value="">Sélectionnez...</option>
            <option value="Indépendant">Indépendant</option>
            <option value="TPE (1–9 employés)">TPE (1–9 employés)</option>
            <option value="PME (10–49 employés)">PME (10–49 employés)</option>
            <option value="ETI (50–249 employés)">ETI (50–249 employés)</option>
            <option value="Grande entreprise (250+)">Grande entreprise (250+)</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-md font-medium mb-2 text-text-dark text-left">Secteur d'activité</label>
          <select
            name="sector"
            value={formData.sector}
            onChange={handleChange}
            required
            className="w-full p-3 border-2 border-gray-300 rounded focus:outline-none focus:border-accent bg-white text-text-dark"
          >
            <option value="">Sélectionnez...</option>
            <option value="Immobilier">Immobilier</option>
            <option value="Santé / esthétique">Santé / esthétique</option>
            <option value="Formation">Formation</option>
            <option value="Artisanat">Artisanat</option>
            <option value="Service aux entreprises">Service aux entreprises</option>
            <option value="Commerce">Commerce</option>
            <option value="Autre">Autre</option>
          </select>
        </div>
      </div>

      {/* Section 2: Potentiel commercial */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold mb-4 text-accent">Potentiel commercial</h4>
        
        <div className="mb-4">
          <label className="block text-md font-medium mb-2 text-text-dark text-left">Panier moyen d'un client</label>
          <select
            name="averagePrice"
            value={formData.averagePrice}
            onChange={handleChange}
            required
            className="w-full p-3 border-2 border-gray-300 rounded focus:outline-none focus:border-accent bg-white text-text-dark"
          >
            <option value="">Sélectionnez...</option>
            <option value="Moins de 50 €">Moins de 50 €</option>
            <option value="50 à 200 €">50 à 200 €</option>
            <option value="200 à 500 €">200 à 500 €</option>
            <option value="500 à 1 000 €">500 à 1 000 €</option>
            <option value="Plus de 1 000 €">Plus de 1 000 €</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-md font-medium mb-2 text-text-dark text-left">Nombre de demandes clients par mois</label>
          <select
            name="monthlyRequests"
            value={formData.monthlyRequests}
            onChange={handleChange}
            required
            className="w-full p-3 border-2 border-gray-300 rounded focus:outline-none focus:border-accent bg-white text-text-dark"
          >
            <option value="">Sélectionnez...</option>
            <option value="Moins de 10">Moins de 10</option>
            <option value="10 à 30">10 à 30</option>
            <option value="30 à 100">30 à 100</option>
            <option value="Plus de 100">Plus de 100</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-md font-medium mb-2 text-text-dark text-left">Avez-vous un site internet ?</label>
          <select
            name="hasWebsite"
            value={formData.hasWebsite}
            onChange={handleChange}
            required
            className="w-full p-3 border-2 border-gray-300 rounded focus:outline-none focus:border-accent bg-white text-text-dark"
          >
            <option value="">Sélectionnez...</option>
            <option value="Oui">Oui</option>
            <option value="Non">Non</option>
            <option value="En cours de création">En cours de création</option>
          </select>
        </div>

        {formData.hasWebsite === 'Oui' && (
          <div className="mb-4">
            <label className="block text-md font-medium mb-2 text-text-dark text-left">URL de votre site internet</label>
            <input
              type="url"
              name="websiteUrl"
              value={formData.websiteUrl}
              onChange={handleChange}
              required
              className="w-full p-3 border-2 border-gray-300 rounded focus:outline-none focus:border-accent bg-white text-text-dark"
              placeholder="https://www.votre-site.fr"
            />
          </div>
        )}

        <div className="mb-4">
          <label className="block text-md font-medium mb-2 text-text-dark text-left">Visites mensuelles estimées</label>
          <select
            name="monthlyVisits"
            value={formData.monthlyVisits}
            onChange={handleChange}
            required
            className="w-full p-3 border-2 border-gray-300 rounded focus:outline-none focus:border-accent bg-white text-text-dark"
          >
            <option value="">Sélectionnez...</option>
            <option value="Moins de 100">Moins de 100</option>
            <option value="100 à 300">100 à 300</option>
            <option value="300 à 1 000">300 à 1 000</option>
            <option value="Plus de 1 000">Plus de 1 000</option>
            <option value="Je ne sais pas">Je ne sais pas</option>
          </select>
        </div>
      </div>

      {/* Section 4: Coordonnées */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold mb-4 text-accent">Coordonnées</h4>
        
        <div className="mb-4">
          <label className="block text-md font-medium mb-2 text-text-dark text-left">Nom</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border-2 border-gray-300 rounded focus:outline-none focus:border-accent bg-white text-text-dark"
            placeholder="Votre nom"
          />
        </div>

        <div className="mb-4">
          <label className="block text-md font-medium mb-2 text-text-dark text-left">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border-2 border-gray-300 rounded focus:outline-none focus:border-accent bg-white text-text-dark"
            placeholder="votre@email.com"
          />
        </div>

        <div className="mb-4">
          <label className="block text-md font-medium mb-2 text-text-dark text-left">Ville</label>
          <input
            type="text"
            name="activityZone"
            value={formData.activityZone}
            onChange={handleChange}
            required
            className="w-full p-3 border-2 border-gray-300 rounded focus:outline-none focus:border-accent bg-white text-text-dark"
            placeholder="Ex: Paris, Lyon, Marseille..."
          />
        </div>

        <div className="mb-4">
          <label className="block text-md font-medium mb-2 text-text-dark text-left">Téléphone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-3 border-2 border-gray-300 rounded focus:outline-none focus:border-accent bg-white text-text-dark"
            placeholder="06 12 34 56 78"
          />
        </div>

        <div className="mb-4">
          <label className="block text-md font-medium mb-2 text-text-dark text-left">LinkedIn (responsable ou entreprise)</label>
          <input
            type="url"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
            className="w-full p-3 border-2 border-gray-300 rounded focus:outline-none focus:border-accent bg-white text-text-dark"
            placeholder="https://www.linkedin.com/in/votre-profil"
          />
          {/* <p className="text-xs text-text-muted mt-1">Optionnel - Profil LinkedIn du responsable ou de l'entreprise</p> */}
        </div>
      </div>

      {error && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded text-red-700 text-sm">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className={`btn btn-primary w-full text-lg ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Envoi en cours...
          </span>
        ) : (
          'Envoyer ma demande'
        )}
      </button>

      <p className="text-xs text-text-muted text-center mt-4">
        Vos données sont sécurisées et ne seront jamais partagées avec des tiers.
      </p>
    </form>
  );
};

export default QualificationForm;
