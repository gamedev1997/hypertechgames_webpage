import { useState } from 'react';
import styles from '../styles/App.module.css';
import GameModal from './GameModal';

const Portfolio = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [gameUrl, setGameUrl] = useState('');
  const games = [
    {
      name: "Block Drop",
      icon: "🎮",
      description: "Classic Tetris-style puzzle game with modern graphics and smooth gameplay.",
      url: "https://gameskite.com/play/football-stars#google_vignette"
    },
    {
      name: "Puzzle Master",
      icon: "🧩",
      description: "Mind-bending puzzle challenges that test your logic and problem-solving skills.",
      url: "https://gameskite.com/play/football-stars#google_vignette"
    },
    {
      name: "Space Runner",
      icon: "🚀",
      description: "Fast-paced endless runner through space with power-ups and obstacles.",
      url: "https://gameskite.com/play/football-stars#google_vignette"
    },
    {
      name: "Card Quest",
      icon: "🃏",
      description: "Strategic card-based adventure game with RPG elements and epic battles.",
      url: "https://gameskite.com/play/football-stars#google_vignette"
    }
  ];

  const handleGameClick = (url) => {
    setGameUrl(url);
    setModalOpen(true);
  };

  return (
    <section id="portfolio" className={styles.portfolio}>
      <h2>Our Games</h2>
      <div className={styles.gamesGrid}>
        {games.map((game, index) => (
          <div key={index} className={styles.gameCard} onClick={() => handleGameClick(game.url)}>
            <div className={styles.gameIcon}>{game.icon}</div>
            <h3 className={styles.gameName}>{game.name}</h3>
            <p className={styles.gameDescription}>{game.description}</p>
          </div>
        ))}
      </div>
      <GameModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        gameUrl={gameUrl} 
      />
    </section>
  );
};

export default Portfolio;