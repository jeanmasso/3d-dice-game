# 🎲 Dé 3D Interactif - Architecture du projet

## 📁 Structure des fichiers

```
src/
├── components/           # Composants React réutilisables
│   ├── dice3d.jsx       # Composant principal (refactorisé)
│   ├── DiceMesh.jsx     # Composant 3D du dé
│   ├── DiceCanvas.jsx   # Canvas Three.js avec éclairage
│   ├── DiceButton.jsx   # Bouton de lancement stylisé
│   ├── CurrentValue.jsx # Affichage de la valeur actuelle
│   ├── GameHistory.jsx  # Historique des lancers
│   ├── ClearButton.jsx  # Bouton de suppression
│   └── HistoryItem.jsx  # Item individuel d'historique
├── styles/              # Styles et thèmes centralisés
│   ├── colors.js        # Palette de couleurs
│   └── components.js    # Styles des composants
├── config/              # Configuration et constantes
│   └── diceConfig.js    # Configuration du dé 3D
├── utils/               # Utilitaires et helpers
│   └── gameUtils.js     # Fonctions utilitaires du jeu
├── hooks/               # Custom React hooks
│   └── useDiceGame.js   # Hook principal du jeu
├── index.css           # Styles globaux
├── index.js            # Point d'entrée
└── App.js              # Composant racine
```

## 🎯 Séparation des préoccupations

### **🎨 Styles (`src/styles/`)**
- **`colors.js`** : Palette de couleurs centralisée avec gradients, couleurs de texte, bordures
- **`components.js`** : Styles des composants, ombres, typography, layouts

### **⚙️ Configuration (`src/config/`)**
- **`diceConfig.js`** : Configuration 3D (rotations, éclairage, textures, animations)

### **🛠️ Utilitaires (`src/utils/`)**
- **`gameUtils.js`** : Fonctions pour localStorage, génération aléatoire, animations, validation

### **🎣 Hooks (`src/hooks/`)**
- **`useDiceGame.js`** : Logique métier centralisée du jeu de dé

### **🧩 Composants (`src/components/`)**
Chaque composant a une responsabilité unique :

#### **Composants 3D**
- **`DiceMesh.jsx`** : Rendu 3D du dé avec textures et animations
- **`DiceCanvas.jsx`** : Canvas Three.js avec éclairage et contrôles

#### **Composants UI**
- **`DiceButton.jsx`** : Bouton de lancement avec états et interactions
- **`CurrentValue.jsx`** : Affichage de la valeur actuelle du dé
- **`ClearButton.jsx`** : Bouton de suppression de l'historique
- **`HistoryItem.jsx`** : Item individuel dans la liste d'historique
- **`GameHistory.jsx`** : Conteneur de l'historique complet

#### **Composant principal**
- **`dice3d.jsx`** : Orchestration de tous les composants avec le hook `useDiceGame`

## 📦 Avantages de cette architecture

### **🔧 Maintenabilité**
- Code modulaire et réutilisable
- Responsabilités clairement séparées
- Facilité de debugging et de tests

### **🎨 Gestion des styles**
- Thèmes centralisés et cohérents
- Facilité de modification des couleurs/styles
- Réutilisation des styles entre composants

### **⚡ Performance**
- Composants légers et optimisés
- Logique métier externalisée dans les hooks
- Configuration centralisée pour éviter la duplication

### **🔄 Réutilisabilité**
- Composants indépendants et réutilisables
- Hooks personnalisés pour la logique métier
- Utilitaires génériques

### **📱 Extensibilité**
- Facile d'ajouter de nouveaux composants
- Configuration modulaire pour nouvelles fonctionnalités
- Architecture prête pour l'ajout de tests

## 🚀 Utilisation

Le composant principal `Dice3D` utilise maintenant le hook `useDiceGame` et compose tous les sous-composants :

```jsx
import { useDiceGame } from '../hooks/useDiceGame';
import DiceCanvas from './DiceCanvas';
import DiceButton from './DiceButton';
// ... autres imports

const Dice3D = () => {
  const {
    rotation, isRolling, diceValue, 
    history, rollDice, clearHistory
  } = useDiceGame();

  return (
    <div style={containers.main}>
      <DiceCanvas rotation={rotation} isRolling={isRolling} />
      <DiceButton onClick={rollDice} isRolling={isRolling} />
      <CurrentValue diceValue={diceValue} isRolling={isRolling} />
      <GameHistory history={history} onClearHistory={clearHistory} />
    </div>
  );
};
```

## 🎯 Points clés

1. **Un seul fichier par responsabilité**
2. **Styles centralisés et réutilisables** 
3. **Configuration externalisée**
4. **Hook personnalisé pour la logique métier**
5. **Composants purs et testables**
6. **Architecture évolutive et maintenable**
