import React from 'react';
import styles from '../styles/App.module.css';

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <h2>Contact Us</h2>
      <div className={styles.contactContent}>
        <div className={styles.contactForm}>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit" className={styles.submitButton}>Send Message</button>
          </form>
        </div>
        <div className={styles.contactInfo}>
          <h3>Get In Touch</h3>
          <p>✉️ info@hypertechgames.com</p>
          <p>📍 New Delhi, India</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;