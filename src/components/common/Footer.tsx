import React from 'react';
import { Mail, Globe, RadioTower, Workflow, Camera } from 'lucide-react';
import smartKodersLogo from '../../assets/smartkoders-logo.jpg';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Globe, label: 'Facebook' },
    { icon: RadioTower, label: 'Twitter' },
    { icon: Workflow, label: 'LinkedIn' },
    { icon: Camera, label: 'Instagram' },
    { icon: Mail, label: 'Email' },
  ];

  return (
    <section className="connect-section" aria-label="Ready to Connect footer">
      <div className="connect-content">
        <div className="connect-cta">
          <h2>Ready to Connect?</h2>
          <p>Join our elite network of innovators and stay at the pulse of automation.</p>

          <form className="connect-form" onSubmit={(event) => event.preventDefault()}>
            <label className="connect-label" htmlFor="connect-email">
              Enter your email
            </label>
            <input id="connect-email" type="email" placeholder="Enter your email" />
            <button type="submit">Dispatch</button>
          </form>
        </div>

        <div className="connect-main">
          <div className="connect-brand">
            <img className="connect-logo" src={smartKodersLogo} alt="SmartKoders" />
            <h3>Sky Smart</h3>
            <p>
              Architecting the sovereign layer of industrial intelligence. We do not just automate;
              we evolve systems.
            </p>

            <div className="connect-social" aria-label="Social media links">
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a href="#contact" key={item.label} aria-label={item.label}>
                    <Icon size={14} strokeWidth={2.1} />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="connect-links-group">
            <h4>Infrastructure</h4>
            <a href="#services">IoT Networks</a>
            <a href="#services">Neural Systems</a>
            <a href="#services">Cloud Sync</a>
            <a href="#services">Asset Edge</a>
          </div>

          <div className="connect-links-group">
            <h4>Intelligence</h4>
            <a href="#projects">Research Lab</a>
            <a href="#projects">Case Deployment</a>
            <a href="#projects">Technical API</a>
            <a href="#projects">Privacy Vault</a>
          </div>

          <div className="connect-links-group">
            <h4>Terminal</h4>
            <p>No. A/59, Hangumola, Moronthota, Kegalle, Sri Lanka</p>
            <a href="mailto:info@skysmart.lk">info@skysmart.lk</a>
          </div>
        </div>

        <div className="connect-bottom">
          <p>© 2026 Sky Smart Tech Core</p>
          <div>
            <a href="#contact">Privacy Protocol</a>
            <a href="#contact">Terms of Sync</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
