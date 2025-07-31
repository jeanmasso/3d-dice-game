import React from 'react';
import { sections, typography } from '../styles/components';
import { colors } from '../styles/colors';

const CurrentValue = ({ diceValue, isRolling }) => {
  return (
    <div style={sections.currentValue}>
      <h3 style={{ 
        ...typography.currentValue,
        color: colors.text.primary
      }}>
        Valeur actuelle : {isRolling ? '🎲' : `🎯 ${diceValue}`}
      </h3>
      {!isRolling && (
        <p style={{
          ...typography.description,
          color: colors.text.secondary
        }}>
          Face {diceValue} du dé
        </p>
      )}
    </div>
  );
};

export default CurrentValue;
