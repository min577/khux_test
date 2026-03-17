import { useState, useEffect, useRef } from 'react';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('visible'); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('메시지가 전송되었습니다! (데모)');
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <p className="contact-desc">
          프로젝트 협업이나 궁금한 점이 있다면 편하게 연락해 주세요.
        </p>
        <form className="contact-form fade-in" ref={ref} onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text" name="name" placeholder="이름"
              value={form.name} onChange={handleChange} required
            />
            <input
              type="email" name="email" placeholder="이메일"
              value={form.email} onChange={handleChange} required
            />
          </div>
          <input
            type="text" name="subject" placeholder="제목"
            value={form.subject} onChange={handleChange} required
          />
          <textarea
            name="message" placeholder="메시지를 입력하세요" rows="6"
            value={form.message} onChange={handleChange} required
          />
          <button type="submit" className="form-btn">보내기</button>
        </form>
        <div className="contact-links">
          <a href="mailto:hello@example.com">hello@example.com</a>
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}
