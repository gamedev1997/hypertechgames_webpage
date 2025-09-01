export const handleActiveNavigation = () => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('a[href^="#"]');
  const contactSection = document.getElementById('contact');
  
  const setActiveStyles = (link, isLight) => {
    if (isLight) {
      link.style.cssText = `
        background: rgba(255, 255, 255, 0.1) !important;
        box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3) !important;
        color: #ffffff !important;
        transform: translateY(-2px) !important;
      `;
    } else {
      link.style.cssText = `
        color: var(--primaryAccent) !important;
        background: rgba(0, 245, 255, 0.1) !important;
        transform: translateY(-2px) !important;
        box-shadow: 0 4px 15px rgba(0, 245, 255, 0.3) !important;
      `;
    }
  };
  
  // Set initial active state for home after a short delay
  setTimeout(() => {
    const homeLink = document.querySelector('a[href="#home"]:not([href="#home"] img)');
    if (homeLink) {
      const isLight = document.documentElement.getAttribute('data-theme') === 'light';
      setActiveStyles(homeLink, isLight);
    }
  }, 100);
  
  // Handle logo click to activate home
  const logoLink = document.querySelector('a[href="#home"] img')?.parentElement;
  if (logoLink) {
    logoLink.addEventListener('click', () => {
      // Only clear nav link styles, not logo styles
      navLinks.forEach(link => {
        if (!link.querySelector('img')) {
          link.style.cssText = '';
        }
      });
      if (homeLink && !homeLink.querySelector('img')) {
        const isLight = document.documentElement.getAttribute('data-theme') === 'light';
        setActiveStyles(homeLink, isLight);
      }
    });
  }
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        
        // Remove active styles from all nav links (not logo)
        navLinks.forEach(link => {
          if (!link.querySelector('img')) {
            link.style.cssText = '';
          }
        });
        
        // Add active styles to current section link (exclude logo link)
        const activeLink = document.querySelector(`a[href="#${id}"]:not([href="#${id}"] img)`);
        if (activeLink && !activeLink.querySelector('img')) {
          const isLight = document.documentElement.getAttribute('data-theme') === 'light';
          setActiveStyles(activeLink, isLight);
        }
        
        // Trigger contact section animation
        if (id === 'contact' && contactSection) {
          contactSection.classList.add('animate');
        }
      }
    });
  }, {
    threshold: 0.5,
    rootMargin: '-10% 0px -10% 0px'
  });

  sections.forEach(section => observer.observe(section));
};