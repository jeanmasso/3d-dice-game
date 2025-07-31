import React from 'react';
import { buttons, shadows, interactions } from '../styles/components';
import { animationUtils } from '../utils/gameUtils';

const ClearButton = ({ onClick }) => {
  const handleMouseEnter = (e) => {
    animationUtils.applyHoverEffect(e.target, {
      transform: interactions.hoverScale.enter,
      boxShadow: shadows.danger.hover
    });
  };

  const handleMouseLeave = (e) => {
    animationUtils.applyHoverEffect(e.target, {
      transform: interactions.hoverScale.leave,
      boxShadow: shadows.danger.normal
    });
  };

  return (
    <button 
      onClick={onClick}
      style={buttons.danger}
      title="Vider l'historique"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      🗑️ Vider
    </button>
  );
};

export default ClearButton;
