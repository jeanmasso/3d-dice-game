import React from 'react';
import { containers, typography } from '../styles/components';
import { useDiceGame } from '../hooks/useDiceGame';
import DiceCanvas from './DiceCanvas';
import DiceButton from './DiceButton';
import CurrentValue from './CurrentValue';
import GameHistory from './GameHistory';

const Dice3D = () => {
  const {
    rotation,
    isRolling,
    diceValue,
    history,
    rollDice,
    clearHistory
  } = useDiceGame();

  return (
    <div style={containers.main}>
      <div style={containers.card}>
        <h1 style={typography.title}>
          🎲 Dé 3D Interactif
        </h1>
        
        <DiceCanvas 
          rotation={rotation} 
          isRolling={isRolling} 
        />

        <DiceButton 
          onClick={rollDice} 
          isRolling={isRolling} 
        />

        <CurrentValue 
          diceValue={diceValue} 
          isRolling={isRolling} 
        />

        <GameHistory 
          history={history} 
          onClearHistory={clearHistory} 
        />
      </div>
    </div>
  );
};

export default Dice3D;