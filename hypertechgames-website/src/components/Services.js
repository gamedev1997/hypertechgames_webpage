import styles from '../styles/App.module.css';

const Services = () => {
  const services = [
    {
      title: "🎮 Licensing of Games",
      description: "We offer both non-exclusive and exclusive licensing models, enabling partners to quickly expand their library with ready-to-publish HTML5 titles at budget-friendly rates."
    },
    {
      title: "🌍 Game Localization",
      description: "We adapt games into multiple regional languages, removing barriers and enhancing user experiences in global markets."
    },
    {
      title: "🕹️ Custom HTML5 Game Development",
      description: "Our expert developers create optimized, cross-platform games with unique storylines, addictive mechanics, and engaging themes for both web and mobile."
    },
    {
      title: "🎨 Game Reskin & Branding",
      description: "We provide re-skinned and white-label game variants, aligning visuals, logos, and themes to match your brand identity without changing the proven core gameplay."
    },
    {
      title: "🔗 SDK & API Integration",
      description: "Our team integrates client SDKs and APIs to support ad placements, analytics, and player metrics—delivering data-driven insights."
    }
  ];

  return (
    <section id="services" className={styles.services}>
      <h2>Our Core Services</h2>
      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;