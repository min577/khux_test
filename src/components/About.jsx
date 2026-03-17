import { useEffect, useRef } from 'react';
import './About.css';

const skills = ['HTML / CSS', 'JavaScript', 'React', 'TypeScript', 'Node.js', 'Git'];

export default function About() {
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('visible'); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-grid fade-in" ref={ref}>
          <div className="about-photo">
            <div className="photo-placeholder">Photo</div>
          </div>
          <div className="about-text">
            <p>
              사용자 경험을 중시하는 프론트엔드 개발자입니다.
              깔끔하고 직관적인 UI를 설계하고, 성능 최적화에 관심이 많습니다.
            </p>
            <p>
              새로운 기술을 배우고 적용하는 것을 즐기며,
              팀과 함께 성장하는 것을 가치로 여깁니다.
            </p>
            <div className="about-skills">
              {skills.map((skill) => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
