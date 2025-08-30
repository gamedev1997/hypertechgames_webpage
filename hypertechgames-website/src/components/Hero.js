import styles from '../styles/App.module.css';

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Premium HTML5 Games for a Global Audience</h1>
        <p>We build and deliver scalable game solutions that drive engagement, maximize revenue, and adapt seamlessly to your platform needs.</p>
        <button className={styles.ctaButton} onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Get in Touch</button>
      </div>
    </section>
  );
};

export default Hero;