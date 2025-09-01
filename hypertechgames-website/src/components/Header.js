import { useState } from 'react';
import styles from '../styles/App.module.css';
import logo from '../assets/Logo-removebg-preview.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <a href="#home">
        <img src={logo} alt="HypertechGames Studio" className={styles.logoImg} />
      </a>
      <button 
        className={`${styles.burgerMenu} ${isMenuOpen ? styles.burgerOpen : ''}`} 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
        <a href="#home" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Home</a>
        <a href="#services" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Services</a>
        <a href="#portfolio" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Games</a>
        <a href="#contact" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Contact</a>
      </nav>
    </header>
  );
};

export default Header;