# Cenora - Site Web React

Site web moderne pour Cenora, développé avec React.js et Tailwind CSS.

## 🚀 Démarrage rapide

### Prérequis

- Node.js (version 14 ou supérieure)
- npm (généralement installé avec Node.js)

### Installation

1. Clonez le dépôt ou naviguez vers le dossier du projet :
```bash
cd /home/blax/Documents/Cenora-Full/cenora-react-new
```

2. Installez les dépendances :
```bash
npm install
```

### Lancer le site en développement

Pour démarrer le serveur de développement :

```bash
npm start
```

Le site sera accessible à l'adresse : **http://localhost:3000**

Le serveur se rechargera automatiquement lorsque vous modifiez les fichiers.

### Construire pour la production

Pour créer une version optimisée pour la production :

```bash
npm run build
```

Les fichiers optimisés seront générés dans le dossier `build/`.

### Déployer la production

Pour déployer le site, vous pouvez utiliser les fichiers du dossier `build/` sur n'importe quel hébergeur web statique (Netlify, Vercel, GitHub Pages, etc.).

## 📁 Structure du projet

```
cenora-react-new/
├── public/              # Fichiers statiques
│   ├── assets/         # Images et ressources
│   ├── CNAME          # Configuration domaine
│   └── index.html     # Template HTML principal
├── src/
│   ├── components/    # Composants React
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── ProblemSection.jsx
│   │   ├── SolutionSection.jsx
│   │   ├── ServicesSection.jsx
│   │   ├── AudienceSection.jsx
│   │   ├── PricingSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── FAQSection.jsx
│   │   ├── ContactSection.jsx
│   │   └── Footer.jsx
│   ├── App.jsx        # Composant principal
│   ├── index.js       # Point d'entrée
│   └── index.css      # Styles Tailwind CSS
├── tailwind.config.js # Configuration Tailwind
├── postcss.config.js  # Configuration PostCSS
└── package.json       # Dépendances du projet
```

## 🛠️ Technologies utilisées

- **React.js** - Framework JavaScript pour l'interface utilisateur
- **Tailwind CSS** - Framework CSS utilitaire
- **PostCSS** - Outil de transformation CSS
- **Create React App** - Configuration et outils de build

## 📝 Commandes disponibles

- `npm start` - Lance le serveur de développement
- `npm run build` - Crée une version de production
- `npm test` - Lance les tests
- `npm run eject` - Éjecte la configuration CRA (irréversible)

## 🎨 Personnalisation

### Couleurs

Les couleurs du thème sont définies dans `tailwind.config.js` :

```javascript
colors: {
  primary: '#1a1a1a',
  accent: '#d4af37',
  // ...
}
```

### Composants

Tous les composants sont modulaires et se trouvent dans `src/components/`. Vous pouvez les modifier individuellement sans affecter les autres.

## 🔧 Résolution de problèmes

### Le port 3000 est déjà utilisé

Si le port 3000 est occupé, React vous proposera automatiquement d'utiliser un autre port.

### Erreurs de compilation

Assurez-vous que toutes les dépendances sont installées :
```bash
npm install
```

Si les problèmes persistent, supprimez `node_modules` et réinstallez :
```bash
rm -rf node_modules package-lock.json
npm install
```

## 📧 Contact

Pour toute question : contact@cenora.fr

## 📄 Licence

© 2025 Cenora. Tous droits réservés.
