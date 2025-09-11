import { useState, useEffect } from 'react';
import styles from '../styles/App.module.css';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'HTML5 Game Development and \nCreative Solutions';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    
    <section id="home" className={styles.hero}>
      <div className={styles.heroContent}>
        <p style={{fontSize: '1.5rem', marginBottom: '0.1rem', opacity: '0.5', fontWeight: 'bold'}}>We Offer</p>
        <h1>{displayText.split('\n').map((line, index) => (
          <span key={index}>
            {line}
            {index < displayText.split('\n').length - 1 && <br />}
          </span>
        ))}<span className={styles.cursor}>|</span></h1>
        <p>We're a next-gen HTML5 game studio delivering scalable, cross-platform games for web and mobile. Looking for engaging gameplay, brand-ready experiences, or playable ads that perform? You're in the right place.</p>
        <button className={styles.ctaButton} onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Get in Touch</button>
      </div>
    </section>
  );
};

console.log("Hero component loaded2");

export default Hero;