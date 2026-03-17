import './Hero.css';

export default function Hero() {
  const scrollTo = (e) => {
    e.preventDefault();
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="hero">
      <div className="hero-content">
        <p className="hero-greeting">안녕하세요, 저는</p>
        <h1 className="hero-name">김민우</h1>
        <p className="hero-role">Frontend Developer</p>
        <a href="#projects" className="hero-cta" onClick={scrollTo}>
          프로젝트 보기
        </a>
      </div>
    </header>
  );
}
