import * as THREE from 'three';

// Configuration des rotations pour chaque face du dé
export const DICE_ROTATIONS = {
  1: new THREE.Euler(0, -Math.PI / 2, 0),     // Face 1
  2: new THREE.Euler(0, Math.PI / 2, 0),      // Face 2
  3: new THREE.Euler(Math.PI / 2, 0, 0),      // Face 3
  4: new THREE.Euler(-Math.PI / 2, 0, 0),     // Face 4
  5: new THREE.Euler(0, 0, 0),                // Face 5
  6: new THREE.Euler(Math.PI, 0, 0),          // Face 6
};

// Configuration de l'animation
export const ANIMATION_CONFIG = {
  duration: 2000, // Durée en millisecondes
  speed: 8, // Vitesse de rotation base
  speedMultipliers: {
    x: 1,
    y: 1.2,
    z: 0.8
  },
  lerpFactor: 0.1 // Facteur d'interpolation pour la transition finale
};

// Configuration de l'éclairage 3D
export const LIGHTING_CONFIG = {
  ambient: {
    intensity: 0.6
  },
  mainLight: {
    position: [10, 10, 10],
    intensity: 1
  },
  accentLight: {
    position: [-10, -10, 5],
    intensity: 0.4,
    color: '#64ffda'
  }
};

// Configuration du Canvas 3D
export const CANVAS_CONFIG = {
  style: {
    height: '250px',
    borderRadius: '10px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
  }
};

// Configuration des textures
export const TEXTURE_PATHS = {
  1: '/textures/dice1.png',
  2: '/textures/dice2.png',
  3: '/textures/dice3.png',
  4: '/textures/dice4.png',
  5: '/textures/dice5.png',
  6: '/textures/dice6.png'
};
