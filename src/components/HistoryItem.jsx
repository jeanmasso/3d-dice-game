import React from 'react';
import { historyStyles, shadows, interactions } from '../styles/components';
import { colors } from '../styles/colors';
import { animationUtils } from '../utils/gameUtils';

const HistoryItem = ({ value, rollNumber }) => {
  const handleMouseEnter = (e) => {
    animationUtils.applyHoverEffect(e.target, {
      transform: interactions.hoverTranslate.enter,
      boxShadow: shadows.historyItem.hover
    });
  };

  const handleMouseLeave = (e) => {
    animationUtils.applyHoverEffect(e.target, {
      transform: interactions.hoverTranslate.leave,
      boxShadow: shadows.historyItem.normal
    });
  };

  return (
    <li 
      style={historyStyles.item}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div style={{
        fontSize: '1rem',
        fontWeight: '700',
        color: colors.text.historyItem,
        marginBottom: '0.2rem'
      }}>
        🎲 {value}
      </div>
      <div style={{
        fontSize: '0.7rem',
        color: colors.text.historyItemSecondary,
        fontWeight: '500'
      }}>
        #{rollNumber}
      </div>
    </li>
  );
};

export default HistoryItem;
