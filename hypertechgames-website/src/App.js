import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import styles from './styles/App.module.css';
import './styles/DarkTheme.css';
import { handleActiveNavigation } from './utils/navigation';

function App() {
  useEffect(() => {
    handleActiveNavigation();
  }, []);

  return (
    <div className={`${styles.app} dark-theme-container`}>
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
      <ThemeToggle />
    </div>
  );
}

export default App;