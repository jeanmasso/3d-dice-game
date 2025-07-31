// Utilitaires pour la gestion du localStorage
export const storageUtils = {
  /**
   * Sauvegarde l'historique dans le localStorage
   * @param {Array} history - L'historique à sauvegarder
   */
  saveHistory: (history) => {
    try {
      localStorage.setItem('diceHistory3D', JSON.stringify(history));
    } catch (error) {
      console.warn('Erreur lors de la sauvegarde de l\'historique:', error);
    }
  },

  /**
   * Charge l'historique depuis le localStorage
   * @returns {Array} L'historique chargé ou un tableau vide
   */
  loadHistory: () => {
    try {
      const saved = localStorage.getItem('diceHistory3D');
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.warn('Erreur lors du chargement de l\'historique:', error);
      return [];
    }
  },

  /**
   * Supprime l'historique du localStorage
   */
  clearHistory: () => {
    try {
      localStorage.removeItem('diceHistory3D');
    } catch (error) {
      console.warn('Erreur lors de la suppression de l\'historique:', error);
    }
  }
};

// Utilitaires pour la génération de nombres aléatoires
export const randomUtils = {
  /**
   * Génère un nombre aléatoire entre 1 et 6 (inclus)
   * @returns {number} Une valeur entre 1 et 6
   */
  rollDice: () => Math.floor(Math.random() * 6) + 1,

  /**
   * Génère un nombre aléatoire dans une plage donnée
   * @param {number} min - Valeur minimum (incluse)
   * @param {number} max - Valeur maximum (incluse)
   * @returns {number} Un nombre aléatoire dans la plage
   */
  randomInRange: (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
};

// Utilitaires pour les animations et interactions
export const animationUtils = {
  /**
   * Applique un effet hover à un élément
   * @param {HTMLElement} element - L'élément à modifier
   * @param {Object} styles - Les styles à appliquer
   */
  applyHoverEffect: (element, styles) => {
    Object.assign(element.style, styles);
  },

  /**
   * Réinitialise les styles d'un élément
   * @param {HTMLElement} element - L'élément à réinitialiser
   * @param {Object} originalStyles - Les styles originaux
   */
  resetStyles: (element, originalStyles) => {
    Object.assign(element.style, originalStyles);
  }
};

// Utilitaires pour la validation
export const validationUtils = {
  /**
   * Vérifie si une valeur est une face de dé valide
   * @param {number} value - La valeur à vérifier
   * @returns {boolean} True si c'est une face valide (1-6)
   */
  isValidDiceValue: (value) => Number.isInteger(value) && value >= 1 && value <= 6,

  /**
   * Vérifie si un tableau d'historique est valide
   * @param {Array} history - L'historique à vérifier
   * @returns {boolean} True si l'historique est valide
   */
  isValidHistory: (history) => {
    return Array.isArray(history) && 
           history.every(value => validationUtils.isValidDiceValue(value));
  }
};
