import { useState } from 'react';
import styles from '../styles/App.module.css';
import GameModal from './GameModal';
import { useScrollAnimation } from '../utils/useScrollAnimation';
import OnewayIcon from '../assets/Oneway.png';
import BlockinIcon from '../assets/Blockin.png';

const Portfolio = () => {
  const sectionRef = useScrollAnimation();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState('');
  const games = [
    {
      name: "Oneway",
      icon: OnewayIcon,
      description: "Navigate through challenging one-way paths in this strategic puzzle adventure."
    },
    {
      name: "BlockIn",
      icon: BlockinIcon,
      description: "Block-matching puzzle game with addictive gameplay and stunning visuals."
    }
  ];

  const handleGameClick = (gameName) => {
    setSelectedGame(gameName);
    setModalOpen(true);
  };

  return (
    <section id="portfolio" className={`${styles.portfolio} scroll-animate`} ref={sectionRef}>
      <h2>Our Games</h2>
      <div className={styles.gamesGrid}>
        {games.map((game, index) => (
          <div key={index} className={styles.gameCard} onClick={() => handleGameClick(game.name)}>
            <div className={styles.gameIcon}>
              <img src={game.icon} alt={game.name} style={{width: '100%', height: '100%', objectFit: 'contain'}} />
            </div>
            <h3 className={styles.gameName}>{game.name}</h3>
            <p className={styles.gameDescription}>{game.description}</p>
          </div>
        ))}
      </div>
      {modalOpen && (
        <div className={styles.comingSoonModal} onClick={() => setModalOpen(false)}>
          <div className={styles.comingSoonContent} onClick={(e) => e.stopPropagation()}>
            <h3>{selectedGame} Game</h3>
            <p>Coming Soon</p>
            <button onClick={() => setModalOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;