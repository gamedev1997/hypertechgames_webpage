import { useState } from 'react';
import styles from '../styles/App.module.css';
import logo from '../assets/Logo-removebg-preview.png';
import { useLenis } from '../utils/useLenis';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <a href="#home" onClick={(e) => handleSmoothScroll(e, '#home')}>
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
        <a href="#home" className={styles.navLink} onClick={(e) => handleSmoothScroll(e, '#home')}>Home</a>
        <a href="#services" className={styles.navLink} onClick={(e) => handleSmoothScroll(e, '#services')}>Services</a>
        <a href="#portfolio" className={styles.navLink} onClick={(e) => handleSmoothScroll(e, '#portfolio')}>Games</a>
        <a href="#contact" className={styles.navLink} onClick={(e) => handleSmoothScroll(e, '#contact')}>Contact</a>
      </nav>
    </header>
  );
};

export default Header;