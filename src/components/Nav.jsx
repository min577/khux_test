import { useState, useEffect } from 'react';
import './Nav.css';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (e, id) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#" className="nav-logo">Portfolio</a>
        <ul className="nav-links">
          <li><a href="#about" onClick={(e) => scrollTo(e, '#about')}>About</a></li>
          <li><a href="#projects" onClick={(e) => scrollTo(e, '#projects')}>Projects</a></li>
          <li><a href="#contact" onClick={(e) => scrollTo(e, '#contact')}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
