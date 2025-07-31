import React from 'react';
import { sections, historyStyles, typography } from '../styles/components';
import { colors } from '../styles/colors';
import ClearButton from './ClearButton';
import HistoryItem from './HistoryItem';

const GameHistory = ({ history, onClearHistory }) => {
  const EmptyState = () => (
    <div style={historyStyles.emptyState}>
      <p style={{ 
        color: colors.text.muted, 
        fontStyle: 'italic',
        fontSize: '1.1rem',
        margin: 0
      }}>
        🎯 Aucun lancer pour le moment
      </p>
      <p style={{ 
        color: colors.text.light, 
        fontSize: '0.9rem',
        margin: '0.5rem 0 0 0'
      }}>
        Lancez le dé pour commencer !
      </p>
    </div>
  );

  const HistoryList = () => (
    <div style={historyStyles.container}>
      <ul style={historyStyles.grid}>
        {history.map((val, index) => (
          <HistoryItem 
            key={index} 
            value={val} 
            rollNumber={history.length - index}
          />
        ))}
      </ul>
    </div>
  );

  return (
    <div style={sections.history}>
      <div style={historyStyles.header}>
        <h3 style={{ 
          ...typography.sectionTitle,
          color: colors.text.history
        }}>
          📊 Historique des lancers
        </h3>
        {history.length > 0 && (
          <ClearButton onClick={onClearHistory} />
        )}
      </div>
      
      {history.length === 0 ? <EmptyState /> : <HistoryList />}
    </div>
  );
};

export default GameHistory;
