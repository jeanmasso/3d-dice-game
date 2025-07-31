import { colors } from './colors';

// Styles pour les ombres
export const shadows = {
  card: '0 20px 40px rgba(0, 0, 0, 0.1)',
  canvas: '0 10px 30px rgba(0, 0, 0, 0.1)',
  section: '0 6px 20px rgba(0, 0, 0, 0.08)',
  button: {
    normal: '0 8px 25px rgba(102, 126, 234, 0.4)',
    hover: '0 12px 35px rgba(102, 126, 234, 0.6)',
    disabled: '0 4px 15px rgba(0, 0, 0, 0.1)'
  },
  danger: {
    normal: '0 4px 15px rgba(255, 107, 107, 0.3)',
    hover: '0 6px 20px rgba(255, 107, 107, 0.5)'
  },
  historyItem: {
    normal: '0 3px 10px rgba(0, 0, 0, 0.1)',
    hover: '0 6px 20px rgba(0, 0, 0, 0.15)'
  },
  inset: 'inset 0 4px 8px rgba(0, 0, 0, 0.05)'
};

// Styles pour les conteneurs principaux
export const containers = {
  main: {
    minHeight: '100vh',
    background: colors.primary.gradient,
    padding: '1rem',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  
  card: {
    maxWidth: '700px',
    margin: '0 auto',
    background: 'rgba(255, 255, 255, 0.95)',
    borderRadius: '15px',
    padding: '1.5rem',
    boxShadow: shadows.card,
    backdropFilter: 'blur(10px)',
    textAlign: 'center'
  }
};

// Styles pour la typography
export const typography = {
  title: {
    fontSize: '2rem',
    background: colors.button.primary,
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '1rem',
    fontWeight: '700',
    textShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
  },
  
  sectionTitle: {
    margin: 0,
    fontSize: '1.2rem',
    fontWeight: '600'
  },
  
  currentValue: {
    fontSize: '1.4rem',
    marginBottom: '0.3rem',
    fontWeight: '600'
  },
  
  description: {
    fontSize: '0.9rem',
    margin: '0.3rem 0 0 0',
    fontStyle: 'italic'
  }
};

// Styles pour les sections
export const sections = {
  canvas: {
    background: colors.sections.canvas,
    borderRadius: '10px',
    padding: '1rem',
    marginBottom: '1rem',
    boxShadow: shadows.inset
  },
  
  currentValue: {
    margin: '1rem 0',
    background: colors.sections.currentValue,
    padding: '1rem',
    borderRadius: '10px',
    boxShadow: shadows.section
  },
  
  history: {
    margin: '1rem 0',
    background: colors.sections.history,
    padding: '1rem',
    borderRadius: '10px',
    boxShadow: shadows.section
  }
};

// Styles pour les boutons
export const buttons = {
  primary: {
    padding: '0.8rem 1.8rem',
    fontSize: '1rem',
    fontWeight: '600',
    marginBottom: '1rem',
    color: 'white',
    border: 'none',
    borderRadius: '50px',
    transition: 'all 0.3s ease',
    textTransform: 'uppercase',
    letterSpacing: '1px'
  },
  
  danger: {
    padding: '0.5rem 1rem',
    fontSize: '0.9rem',
    fontWeight: '600',
    background: colors.button.danger,
    color: 'white',
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: shadows.danger.normal,
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  }
};

// Styles pour l'historique
export const historyStyles = {
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1rem',
    flexWrap: 'wrap'
  },
  
  emptyState: {
    textAlign: 'center',
    padding: '1rem',
    background: colors.sections.emptyState,
    borderRadius: '8px',
    border: `2px dashed ${colors.borders.dashed}`
  },
  
  container: {
    maxHeight: '150px',
    overflowY: 'auto',
    background: 'rgba(255, 255, 255, 0.7)',
    borderRadius: '8px',
    padding: '0.5rem'
  },
  
  grid: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
    gap: '0.5rem'
  },
  
  item: {
    background: colors.sections.historyItem,
    padding: '0.5rem',
    borderRadius: '8px',
    boxShadow: shadows.historyItem.normal,
    textAlign: 'center',
    transition: 'transform 0.2s ease',
    border: `1px solid ${colors.borders.historyItem}`
  }
};

// Animations et interactions
export const interactions = {
  hoverScale: {
    enter: 'scale(1.05)',
    leave: 'scale(1)'
  },
  
  hoverTranslate: {
    enter: 'translateY(-3px)',
    leave: 'translateY(0)'
  },
  
  rollingScale: {
    rolling: 'scale(0.95)',
    normal: 'scale(1)'
  }
};
