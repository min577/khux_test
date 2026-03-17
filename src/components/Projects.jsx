import { useEffect, useRef } from 'react';
import './Projects.css';

const projects = [
  {
    title: 'E-Commerce 플랫폼',
    desc: 'React와 Node.js를 활용한 온라인 쇼핑몰. 장바구니, 결제, 주문 관리 기능을 구현했습니다.',
    tags: ['React', 'Node.js', 'MongoDB'],
    demo: '#',
    github: '#',
  },
  {
    title: '날씨 대시보드',
    desc: 'OpenWeather API를 활용한 실시간 날씨 대시보드. 위치 기반 날씨 정보와 주간 예보를 제공합니다.',
    tags: ['JavaScript', 'REST API', 'Chart.js'],
    demo: '#',
    github: '#',
  },
  {
    title: '할 일 관리 앱',
    desc: 'TypeScript 기반 할 일 관리 앱. 드래그 앤 드롭, 카테고리 분류, 우선순위 설정 기능을 포함합니다.',
    tags: ['TypeScript', 'React', 'Firebase'],
    demo: '#',
    github: '#',
  },
];

export default function Projects() {
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="project-grid">
          {projects.map((project, i) => (
            <article
              key={project.title}
              className="project-card fade-in"
              ref={(el) => (refs.current[i] = el)}
            >
              <div className="project-image">Project {i + 1}</div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.demo} className="project-link">Live Demo</a>
                  <a href={project.github} className="project-link">GitHub</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
