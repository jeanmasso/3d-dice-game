# 🎲 Dé 3D Interactif

Une application React moderne et interactive qui simule un dé 3D avec des animations fluides, un système de persistance et une interface utilisateur élégante.

![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=flat-square&logo=react)
![Three.js](https://img.shields.io/badge/Three.js-0.178.0-000000?style=flat-square&logo=three.js)
![React Three Fiber](https://img.shields.io/badge/R3F-9.2.0-FF6B6B?style=flat-square)

## ✨ Fonctionnalités

- 🎲 **Dé 3D réaliste** avec textures et animations fluides
- 🎯 **Correspondance parfaite** entre faces affichées et valeurs
- 📊 **Historique persistant** des lancers avec localStorage
- 🗑️ **Gestion de l'historique** (ajout et suppression)
- 🎨 **Interface moderne** avec effets glassmorphism
- 📱 **Design responsive** optimisé pour une page sans scroll
- ⚡ **Animations interactives** avec effets hover et transitions

## 🚀 Démarrage rapide

### Prérequis

- Node.js (version 14 ou supérieure)
- npm ou yarn

### Installation

1. **Cloner le projet :**
   ```bash
   git clone https://github.com/jeanmasso/3d-dice-game.git
   cd 3d-dice-game
   ```

2. **Installer les dépendances :**
   ```bash
   npm install
   ```

3. **Démarrer l'application :**
   ```bash
   npm start
   ```

4. **Ouvrir votre navigateur :**
   L'application sera accessible à l'adresse [http://localhost:3000](http://localhost:3000)

## 🎮 Utilisation

1. **Lancer le dé :** Cliquez sur le bouton "🚀 Lancer le dé"
2. **Observer l'animation :** Le dé tournera pendant 2 secondes
3. **Voir le résultat :** La face finale correspondra à la valeur affichée
4. **Consulter l'historique :** Tous vos lancers sont sauvegardés
5. **Vider l'historique :** Utilisez le bouton "🗑️ Vider" si nécessaire

## 🏗️ Architecture

Ce projet utilise une architecture modulaire professionnelle avec une séparation claire des responsabilités.

📖 **[Voir la documentation complète de l'architecture](./ARCHITECTURE.md)**

### Structure des dossiers
```
src/
├── components/     # Composants React réutilisables
├── styles/         # Styles et thèmes centralisés
├── config/         # Configuration et constantes
├── utils/          # Utilitaires et helpers
├── hooks/          # Custom React hooks
└── ...
```

## 🛠️ Technologies utilisées

- **[React 19.1.0](https://reactjs.org/)** - Bibliothèque JavaScript pour interfaces utilisateur
- **[Three.js](https://threejs.org/)** - Bibliothèque 3D pour le web
- **[React Three Fiber](https://docs.pmnd.rs/react-three-fiber)** - Renderer React pour Three.js
- **[React Three Drei](https://github.com/pmndrs/drei)** - Utilitaires pour React Three Fiber
- **Create React App** - Boilerplate et configuration

## 📦 Scripts disponibles

### `npm start`
Lance l'application en mode développement.\
Ouvrez [http://localhost:3000](http://localhost:3000) pour la voir dans votre navigateur.

La page se rechargera automatiquement lors des modifications.\
Les erreurs de lint s'afficheront dans la console.

### `npm test`
Lance les tests en mode interactif.\
Voir la section [running tests](https://facebook.github.io/create-react-app/docs/running-tests) pour plus d'informations.

### `npm run build`
Compile l'application pour la production dans le dossier `build`.\
L'application est optimisée pour les meilleures performances.

Le build est minifié et les noms de fichiers incluent des hash.\
Votre application est prête à être déployée !

### `npm run eject`
⚠️ **Attention : opération irréversible !**

Si vous n'êtes pas satisfait des outils de build, vous pouvez "ejecter" à tout moment.

## 🎯 Fonctionnalités techniques

- **Rotations 3D précises** avec Three.js Euler
- **Système de materials** avec textures pour chaque face
- **Animations fluides** avec useFrame et interpolation
- **Gestion d'état** avec hooks React personnalisés
- **Persistance** avec localStorage et gestion d'erreurs
- **Interface responsive** avec flexbox et CSS Grid
- **Effets visuels** avec gradients et glassmorphism

## 🐛 Résolution de problèmes

### L'application ne démarre pas
- Vérifiez que Node.js est installé : `node --version`
- Supprimez `node_modules` et relancez `npm install`
- Vérifiez que le port 3000 n'est pas déjà utilisé

### Les textures ne s'affichent pas
- Assurez-vous que les fichiers `dice1.png` à `dice6.png` sont dans `public/textures/`
- Vérifiez la console pour les erreurs de chargement

### Problèmes de performance
- L'application est optimisée pour les navigateurs modernes
- Désactivez les extensions de navigateur qui pourraient interférer

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 👨‍💻 Auteur

**Jean Masso** - *Développeur Full Stack*

## 🤝 Contribution

Les contributions, issues et demandes de fonctionnalités sont les bienvenues !

## 📈 Améliorations futures

- 🔊 Effets sonores pour les lancers
- 📊 Statistiques avancées des lancers
- 🎲 Support de multiples dés
- 🎨 Thèmes personnalisables
- 💫 Effets de particules avancés
