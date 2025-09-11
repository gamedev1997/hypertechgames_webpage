import { useState, useEffect } from 'react';
import styles from '../styles/App.module.css';
import logo from '../assets/Logo-removebg-preview.png';
import { useLenis } from '../utils/useLenis';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 100;
      let foundActive = false;
      
      for (const section of sections) {
        const element = document.getElementById(section === 'home' ? 'home' : section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            foundActive = true;
            break;
          }
        }
      }
      
      if (!foundActive) {
        setActiveSection('');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    if (targetId === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
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
        <a href="#home" className={`${styles.navLink} ${activeSection === 'home' ? styles.active : ''}`} onClick={(e) => handleSmoothScroll(e, '#home')}>Home</a>
        <a href="#services" className={`${styles.navLink} ${activeSection === 'services' ? styles.active : ''}`} onClick={(e) => handleSmoothScroll(e, '#services')}>Services</a>
        <a href="#portfolio" className={`${styles.navLink} ${activeSection === 'portfolio' ? styles.active : ''}`} onClick={(e) => handleSmoothScroll(e, '#portfolio')}>Games</a>
        <a href="#contact" className={`${styles.navLink} ${activeSection === 'contact' ? styles.active : ''}`} onClick={(e) => handleSmoothScroll(e, '#contact')}>Contact</a>
      </nav>
    </header>
  );
};

export default Header;