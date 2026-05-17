export default function Home() {
  return (
    <>
      <style>{`
        :root {
          --cream: #FDF6EE;
          --rose: #E8A8B0;
          --rose-dark: #c97e88;
          --sage: #B5CBAB;
          --sage-dark: #7a9e70;
          --lavender: #C9B8D8;
          --butter: #F2D98B;
          --brown: #5a4a3a;
          --brown-light: #9e8c78;
        }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: var(--cream); color: var(--brown); font-family: 'Georgia', serif; }
        nav {
          display: flex; justify-content: space-between; align-items: center;
          padding: 1.5rem 4rem; position: fixed; top: 0; left: 0; right: 0;
          z-index: 50; background: rgba(253,246,238,0.9); backdrop-filter: blur(8px);
          border-bottom: 1px solid rgba(184,165,140,0.2);
        }
        .nav-logo { font-size: 1.1rem; color: var(--brown); letter-spacing: 0.05em; }
        .nav-links { display: flex; gap: 2.5rem; list-style: none; }
        .nav-links a { text-decoration: none; color: var(--brown-light); font-size: 0.82rem; letter-spacing: 0.08em; text-transform: uppercase; font-family: Georgia, serif; }
        .hero {
          min-height: 100vh; display: flex; align-items: center; justify-content: center;
          position: relative; padding: 6rem 4rem 4rem; overflow: hidden; text-align: center;
        }
        .corner { position: absolute; width: 220px; opacity: 0.55; }
        .corner-tl { top: 80px; left: 0; }
        .corner-tr { top: 80px; right: 0; transform: scaleX(-1); }
        .corner-bl { bottom: 0; left: 0; transform: scaleY(-1); }
        .corner-br { bottom: 0; right: 0; transform: scale(-1,-1); }
        .hero-eyebrow {
          font-size: 0.78rem; letter-spacing: 0.2em; text-transform: uppercase;
          color: var(--rose-dark); margin-bottom: 1.2rem;
          display: flex; align-items: center; justify-content: center; gap: 0.8rem;
        }
        .hero-eyebrow::before, .hero-eyebrow::after {
          content: ''; width: 40px; height: 1px; background: var(--rose); display: block;
        }
        h1 { font-size: clamp(3.5rem, 8vw, 7rem); font-weight: 400; line-height: 1.05; color: var(--brown); margin-bottom: 0.3rem; }
        h1 em { font-style: italic; color: var(--rose-dark); }
        .hero-tagline { font-style: italic; font-size: 1.1rem; color: var(--brown-light); margin: 1.2rem 0 2.5rem; }
        .crochet-divider { display: flex; align-items: center; justify-content: center; gap: 0.4rem; margin: 1rem auto; }
        .crochet-divider span { display: inline-block; width: 6px; height: 6px; background: var(--sage); transform: rotate(45deg); }
        .crochet-divider span:nth-child(even) { width: 4px; height: 4px; background: var(--rose); opacity: 0.6; }
        .hero-btn {
          display: inline-block; padding: 0.85rem 2.5rem;
          border: 1.5px solid var(--rose-dark); color: var(--rose-dark);
          text-decoration: none; font-size: 0.82rem; letter-spacing: 0.12em;
          text-transform: uppercase; border-radius: 100px; margin: 0 0.5rem;
          font-family: Georgia, serif;
        }
        .hero-btn.secondary { border-color: var(--sage-dark); color: var(--sage-dark); }
        .about {
          padding: 6rem 4rem; display: grid; grid-template-columns: 1fr 1fr;
          gap: 5rem; align-items: center; max-width: 1200px; margin: 0 auto;
        }
        .about-img-frame {
          width: 100%; aspect-ratio: 4/5;
          background: linear-gradient(135deg, var(--rose), var(--lavender));
          border-radius: 60% 40% 55% 45% / 50% 50% 50% 50%;
          display: flex; align-items: center; justify-content: center;
          color: white; font-style: italic; font-size: 1rem; opacity: 0.9;
        }
        .section-label {
          font-size: 0.75rem; letter-spacing: 0.2em; text-transform: uppercase;
          color: var(--rose-dark); margin-bottom: 1rem;
          display: flex; align-items: center; gap: 0.6rem;
        }
        .section-label::after { content: ''; width: 30px; height: 1px; background: var(--rose); }
        h2 { font-size: clamp(2rem, 4vw, 3rem); font-weight: 400; line-height: 1.2; margin-bottom: 1.5rem; }
        h2 em { font-style: italic; color: var(--rose-dark); }
        .about-text { color: var(--brown-light); line-height: 1.8; font-size: 0.95rem; margin-bottom: 1rem; }
        .skill-tags { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 1.5rem; }
        .skill-tag { padding: 0.4rem 1rem; border: 1px solid var(--sage); border-radius: 100px; font-size: 0.8rem; color: var(--sage-dark); }
        .projects { padding: 6rem 4rem; background: rgba(181,203,171,0.08); }
        .projects-header { text-align: center; margin-bottom: 4rem; }
        .projects-header .section-label { justify-content: center; }
        .projects-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 2rem; max-width: 1200px; margin: 0 auto; }
        .project-card { background: var(--cream); border: 1px solid rgba(184,165,140,0.25); border-radius: 20px; overflow: hidden; }
        .project-thumb { height: 200px; display: flex; align-items: center; justify-content: center; font-size: 3rem; color: white; opacity: 0.8; }
        .t1 { background: linear-gradient(135deg, #E8A8B0, #C9B8D8); }
        .t2 { background: linear-gradient(135deg, #B5CBAB, #F2D98B); }
        .t3 { background: linear-gradient(135deg, #C9B8D8, #E8A8B0); }
        .project-info { padding: 1.5rem; }
        .project-tag { font-size: 0.72rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--rose-dark); margin-bottom: 0.5rem; }
        .project-title { font-size: 1.2rem; color: var(--brown); margin-bottom: 0.6rem; }
        .project-desc { font-size: 0.85rem; color: var(--brown-light); line-height: 1.7; }
        .contact { padding: 7rem 4rem; text-align: center; }
        .contact-inner { max-width: 600px; margin: 0 auto; }
        .contact p { color: var(--brown-light); line-height: 1.8; margin-bottom: 2rem; }
        .contact-email { font-size: 1.4rem; color: var(--rose-dark); text-decoration: none; font-style: italic; border-bottom: 1px solid var(--rose); padding-bottom: 2px; }
        .contact .section-label { justify-content: center; }
        footer { padding: 2rem 4rem; border-top: 1px solid rgba(184,165,140,0.2); display: flex; justify-content: space-between; align-items: center; }
        footer p { font-size: 0.8rem; color: var(--brown-light); }
        .footer-links { display: flex; gap: 1.5rem; }
        .footer-links a { font-size: 0.8rem; color: var(--brown-light); text-decoration: none; }
      `}</style>

      <nav>
        <div className="nav-logo">Khayyiratri ✦</div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section className="hero">
        <svg className="corner corner-tl" viewBox="0 0 220 220" fill="none">
          <path d="M10 210 Q10 10 210 10" stroke="#B5CBAB" strokeWidth="1" fill="none" strokeDasharray="4 3"/>
          <circle cx="40" cy="80" r="18" fill="#E8A8B0" opacity="0.5"/>
          <circle cx="40" cy="80" r="10" fill="#E8A8B0" opacity="0.7"/>
          <circle cx="70" cy="50" r="12" fill="#C9B8D8" opacity="0.5"/>
          <circle cx="30" cy="120" r="8" fill="#F2D98B" opacity="0.6"/>
          <path d="M20 60 Q35 30 60 25" stroke="#B5CBAB" strokeWidth="1.5" fill="none"/>
          <ellipse cx="55" cy="140" rx="6" ry="10" fill="#B5CBAB" opacity="0.5" transform="rotate(-30 55 140)"/>
        </svg>
        <svg className="corner corner-tr" viewBox="0 0 220 220" fill="none">
          <path d="M10 210 Q10 10 210 10" stroke="#B5CBAB" strokeWidth="1" fill="none" strokeDasharray="4 3"/>
          <circle cx="40" cy="80" r="18" fill="#E8A8B0" opacity="0.5"/>
          <circle cx="40" cy="80" r="10" fill="#E8A8B0" opacity="0.7"/>
          <circle cx="70" cy="50" r="12" fill="#C9B8D8" opacity="0.5"/>
          <circle cx="30" cy="120" r="8" fill="#F2D98B" opacity="0.6"/>
          <path d="M20 60 Q35 30 60 25" stroke="#B5CBAB" strokeWidth="1.5" fill="none"/>
          <ellipse cx="55" cy="140" rx="6" ry="10" fill="#B5CBAB" opacity="0.5" transform="rotate(-30 55 140)"/>
        </svg>
        <svg className="corner corner-bl" viewBox="0 0 220 220" fill="none">
          <path d="M10 210 Q10 10 210 10" stroke="#B5CBAB" strokeWidth="1" fill="none" strokeDasharray="4 3"/>
          <circle cx="40" cy="80" r="18" fill="#E8A8B0" opacity="0.5"/>
          <circle cx="70" cy="50" r="12" fill="#C9B8D8" opacity="0.5"/>
          <ellipse cx="55" cy="140" rx="6" ry="10" fill="#B5CBAB" opacity="0.5" transform="rotate(-30 55 140)"/>
        </svg>
        <svg className="corner corner-br" viewBox="0 0 220 220" fill="none">
          <path d="M10 210 Q10 10 210 10" stroke="#B5CBAB" strokeWidth="1" fill="none" strokeDasharray="4 3"/>
          <circle cx="40" cy="80" r="18" fill="#E8A8B0" opacity="0.5"/>
          <circle cx="70" cy="50" r="12" fill="#C9B8D8" opacity="0.5"/>
          <ellipse cx="55" cy="140" rx="6" ry="10" fill="#B5CBAB" opacity="0.5" transform="rotate(-30 55 140)"/>
        </svg>

        <div>
          <div className="hero-eyebrow">Portfolio 2025</div>
          <h1>Khayyi<em>ratri</em></h1>
          <div className="crochet-divider">
            <span/><span/><span/><span/><span/>
          </div>
          <p className="hero-tagline">A Website For The Designer&apos;s Portfolio</p>
          <div style={{marginTop: '2rem'}}>
            <a href="#projects" className="hero-btn">View Work</a>
            <a href="#contact" className="hero-btn secondary">Say Hello</a>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div>
          <div className="about-img-frame">your photo here ✦</div>
        </div>
        <div>
          <div className="section-label">About Me</div>
          <h2>Designing with <em>heart</em> & intention</h2>
          <p className="about-text">Hi! I&apos;m Khayyiratri — a designer and developer who believes that beautiful things can also be functional.</p>
          <p className="about-text">Currently studying and building things that spark joy, at the intersection of visual design and front-end development.</p>
          <div className="skill-tags">
            <span className="skill-tag">Figma</span>
            <span className="skill-tag">Next.js</span>
            <span className="skill-tag">Tailwind CSS</span>
            <span className="skill-tag">React</span>
            <span className="skill-tag">UI/UX Design</span>
          </div>
        </div>
      </section>

      <section className="projects" id="projects">
        <div className="projects-header">
          <div className="section-label">Selected Work</div>
          <h2>Projects I&apos;ve <em>crafted</em></h2>
        </div>
        <div className="projects-grid">
          {[
            {thumb:'t1', icon:'✦', tag:'UI/UX Design', title:'Project One'},
            {thumb:'t2', icon:'❀', tag:'Web Development', title:'Project Two'},
            {thumb:'t3', icon:'◈', tag:'Branding', title:'Project Three'},
          ].map((p,i) => (
            <div className="project-card" key={i}>
              <div className={`project-thumb ${p.thumb}`}>{p.icon}</div>
              <div className="project-info">
                <div className="project-tag">{p.tag}</div>
                <div className="project-title">{p.title}</div>
                <p className="project-desc">A short description of this project and what it solves.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-inner">
          <div className="section-label">Get In Touch</div>
          <h2>Let&apos;s create something <em>beautiful</em></h2>
          <p>Have a project in mind or just want to say hello? I&apos;d love to hear from you.</p>
          <a href="mailto:hello@khayyiratri.com" className="contact-email">hello@khayyiratri.com</a>
        </div>
      </section>

      <footer>
        <p>© 2025 Khayyiratri. Made with ✦ and lots of tea.</p>
        <div className="footer-links">
          <a href="#">Dribbble</a>
          <a href="#">LinkedIn</a>
          <a href="#">GitHub</a>
        </div>
      </footer>
    </>
  );
}

