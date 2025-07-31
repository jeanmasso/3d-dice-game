import { useState, useEffect } from 'react';
import { DICE_ROTATIONS, ANIMATION_CONFIG } from '../config/diceConfig';
import { storageUtils, randomUtils } from '../utils/gameUtils';

export const useDiceGame = () => {
  const [rotation, setRotation] = useState(DICE_ROTATIONS[1]); // Face 1 par défaut
  const [isRolling, setIsRolling] = useState(false);
  const [diceValue, setDiceValue] = useState(1);
  const [history, setHistory] = useState(() => storageUtils.loadHistory());

  // Sauvegarder l'historique à chaque changement
  useEffect(() => {
    storageUtils.saveHistory(history);
  }, [history]);

  const rollDice = () => {
    if (isRolling) return; // Empêcher les lancers multiples

    const newValue = randomUtils.rollDice();
    const targetRotation = DICE_ROTATIONS[newValue];

    setIsRolling(true);
    
    // Arrêter l'animation après la durée configurée
    setTimeout(() => {
      setIsRolling(false);
      setRotation(targetRotation);
      setDiceValue(newValue);
      setHistory(prev => [newValue, ...prev]);
    }, ANIMATION_CONFIG.duration);
  };

  const clearHistory = () => {
    setHistory([]);
    storageUtils.clearHistory();
  };

  return {
    rotation,
    isRolling,
    diceValue,
    history,
    rollDice,
    clearHistory
  };
};
