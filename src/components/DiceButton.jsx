import React from 'react';
import { colors } from '../styles/colors';
import { buttons, shadows, interactions } from '../styles/components';
import { animationUtils } from '../utils/gameUtils';

const DiceButton = ({ onClick, isRolling }) => {
  const buttonStyle = {
    ...buttons.primary,
    background: isRolling 
      ? colors.button.disabled 
      : colors.button.primary,
    cursor: isRolling ? 'not-allowed' : 'pointer',
    boxShadow: isRolling 
      ? shadows.button.disabled 
      : shadows.button.normal,
    transform: isRolling 
      ? interactions.rollingScale.rolling 
      : interactions.rollingScale.normal
  };

  const handleMouseEnter = (e) => {
    if (!isRolling) {
      animationUtils.applyHoverEffect(e.target, {
        transform: interactions.hoverScale.enter,
        boxShadow: shadows.button.hover
      });
    }
  };

  const handleMouseLeave = (e) => {
    if (!isRolling) {
      animationUtils.applyHoverEffect(e.target, {
        transform: interactions.hoverScale.leave,
        boxShadow: shadows.button.normal
      });
    }
  };

  return (
    <button 
      onClick={onClick}
      disabled={isRolling}
      style={buttonStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isRolling ? '🎲 Lancement en cours...' : '🚀 Lancer le dé'}
    </button>
  );
};

export default DiceButton;
