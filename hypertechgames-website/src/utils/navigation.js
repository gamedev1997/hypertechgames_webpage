export const handleActiveNavigation = () => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav a[href^="#"]');
  const contactSection = document.getElementById('contact');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        
        // Remove active class from all links
        navLinks.forEach(link => link.classList.remove('active'));
        
        // Add active class to current section link
        const activeLink = document.querySelector(`a[href="#${id}"]`);
        if (activeLink) {
          activeLink.classList.add('active');
        }
        
        // Trigger contact section animation
        if (id === 'contact' && contactSection) {
          contactSection.classList.add('animate');
        }
      }
    });
  }, {
    threshold: 0.6,
    rootMargin: '-20% 0px -20% 0px'
  });

  sections.forEach(section => observer.observe(section));
};