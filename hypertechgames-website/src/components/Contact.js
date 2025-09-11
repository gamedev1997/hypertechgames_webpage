import React from 'react';
import styles from '../styles/App.module.css';
import { useScrollAnimation } from '../utils/useScrollAnimation';

const Contact = () => {
  const sectionRef = useScrollAnimation();
  const formRef = useScrollAnimation();
  const infoRef = useScrollAnimation();
  
  return (
    <section id="contact" className={`${styles.contact} scroll-animate`} ref={sectionRef}>
      <h2>Contact Us</h2>
      <div className={styles.contactContent}>
        <div className={`${styles.contactForm} scroll-animate-left`} ref={formRef}>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit" className={styles.submitButton}>Send Message</button>
          </form>
        </div>
        <div className={`${styles.contactInfo} scroll-animate-right`} ref={infoRef}>
          <h3>Get In Touch</h3>
          <p><span className={styles.contactIcon}>✉</span> info@hypertechgames.com</p>
          <p><span className={styles.contactIcon}>📍</span> New Delhi, India</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;