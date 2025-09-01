import React from 'react';
import styles from '../styles/App.module.css';

const GameModal = ({ isOpen, onClose, gameUrl }) => {
  if (!isOpen) return null;

  const handleFullscreen = () => {
    onClose();
    window.open(gameUrl, '_blank');
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <button className={styles.fullscreenButton} onClick={handleFullscreen}>⛶</button>
        <iframe 
          src={gameUrl} 
          className={styles.gameIframe}
          title="Game"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default GameModal;