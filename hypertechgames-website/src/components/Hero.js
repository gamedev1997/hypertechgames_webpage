import styles from '../styles/App.module.css';

const Hero = () => {
  return (
    
    <section id="home" className={styles.hero}>
      <div className={styles.heroContent}>
        <p style={{fontSize: '1.5rem', marginBottom: '0.1rem', opacity: '0.5'}}>We Offer</p>
        <h1>HTML5 Game Development and 
          <br />Creative Solutions</h1>
        <p>We're a next-gen HTML5 game studio delivering scalable, cross-platform games for web and mobile. Looking for engaging gameplay, brand-ready experiences, or playable ads that perform? You're in the right place.</p>
        <button className={styles.ctaButton} onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Get in Touch</button>
      </div>
    </section>
  );
};

console.log("Hero component loaded2");

export default Hero;