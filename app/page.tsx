'use client';

import { useState } from 'react';
import {
  ArrowUpRight,
  Github,
  Mail,
  Download,
  Database,
  BrainCircuit,
  BarChart3,
  Code2,
  Globe2,
  Layers3,
  Menu,
  X,
} from 'lucide-react';

const projects = [
  {
    n: '01',
    title: 'Tanseek',
    type: 'Smart Timetable & Room Allocation',
    desc: 'An end-to-end scheduling system that turns courses, sections, student groups, rooms and instructor availability into feasible academic schedules using constraint optimization.',
    tags: ['Python', 'OR-Tools', 'FastAPI', 'Optimization'],
    visual: 'x₁ + x₂ ≤ capacity',
    stat: 'CONSTRAINT MODEL',
    featured: true,
    github: 'https://github.com/beshoonashaat/tanseek-backend',
  },
  {
    n: '02',
    title: 'Café Sales',
    type: 'Data Engineering & BI',
    desc: 'A 6-page interactive Power BI dashboard backed by a cleaning and transformation pipeline for a structurally messy sales dataset.',
    tags: ['Power BI', 'DAX', 'Power Query', 'Data Cleaning'],
    visual: 'SUMX( Sales )',
    stat: '6-PAGE DASHBOARD',
    github: 'https://github.com/beshoonashaat/CafeSales',
  },
  {
    n: '03',
    title: 'Heart Disease ML',
    type: 'Machine Learning System',
    desc: 'A complete prediction workflow using Logistic Regression, with unsupervised exploration through K-Means and PCA.',
    tags: ['Python', 'Scikit-learn', 'NumPy', 'PCA'],
    visual: 'P(y | x)',
    stat: '≈ 90.7% ACCURACY',
    github: 'https://github.com/beshoonashaat/MLProject',
  },
  {
    n: '04',
    title: 'PubMed IR',
    type: 'NLP & Information Retrieval',
    desc: 'A vector-space search engine using an inverted index and TF-IDF to retrieve relevant documents across 1,000+ research articles.',
    tags: ['Python', 'NLP', 'TF-IDF', 'IR'],
    visual: '∑ tf · idf',
    stat: '1,000+ ARTICLES',
    github: 'https://github.com/beshoonashaat/pubmed-heart-disease-search',
  },
  {
    n: '05',
    title: 'British Airways',
    type: 'Data Science Simulation',
    desc: 'Applied machine learning, data modeling and professional visualization to an aviation business problem.',
    tags: ['Python', 'Scikit-learn', 'Modeling'],
    visual: 'ML → INSIGHT',
    stat: 'DATA SCIENCE',
    github: 'https://github.com/beshoonashaat',
    githubLabel: 'GitHub Profile',
  },
  {
    n: '06',
    title: 'BCG Data for Decision Makers',
    type: 'Analytics & Segmentation',
    desc: 'Customer segmentation and quantitative analysis translated into stakeholder-ready business reporting and recommendations.',
    tags: ['Data Analysis', 'Segmentation', 'Strategy'],
    visual: 'SEGMENTS → ACTION',
    stat: 'ANALYTICS',
    github: 'https://github.com/beshoonashaat',
    githubLabel: 'GitHub Profile',
  },
];

const skills: Array<[string, string[]]> = [
  ['Data Engineering', ['SQL', 'Data Cleaning', 'Data Modeling', 'ETL', 'Data Quality', 'Power Query']],
  ['Data Science', ['Python', 'Machine Learning', 'Scikit-learn', 'NumPy', 'NLP', 'PCA', 'Clustering']],
  ['Analytics & BI', ['Power BI', 'DAX', 'Data Visualization', 'Customer Segmentation']],
  ['Development', ['FastAPI', 'C++', 'Java', 'HTML', 'Git & GitHub']],
];

export default function Home() {
  const [open, setOpen] = useState(false);

  const nav = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <main>
      <header className="nav">
        <button className="brand" type="button" onClick={() => nav('top')} aria-label="Back to top">
          BN<span>.</span>
        </button>

        <nav className={open ? 'navlinks open' : 'navlinks'} aria-label="Main navigation">
          {['work', 'about', 'services', 'skills', 'contact'].map((x) => (
            <button key={x} type="button" onClick={() => nav(x)}>
              {x}
            </button>
          ))}
        </nav>

        <div className="navright">
          <a
            href="https://github.com/beshoonashaat"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a href="mailto:beshoo.nashaat10@gmail.com" aria-label="Email">
            <Mail size={18} />
          </a>
          <button
            className="menub"
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close navigation' : 'Open navigation'}
            aria-expanded={open}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <section id="top" className="hero section">
        <div className="eyebrow">
          <span className="dot" /> DATA SCIENCE · DATA ENGINEERING
        </div>

        <div className="heroGrid">
          <div>
            <h1>
              Beshoy
              <br />
              <em>Nashaat.</em>
            </h1>

            <p className="heroText">
              I build data-driven systems that turn <strong>raw data</strong> into insights,
              models, and practical solutions.
            </p>

            <div className="actions">
              <button className="primary" type="button" onClick={() => nav('work')}>
                Explore my work <ArrowUpRight size={17} />
              </button>
              <a className="secondary" href="/cv">
                <Download size={16} /> View CV
              </a>
            </div>
          </div>

          <div className="signalCard">
            <div className="cardTop">
              <span>DATA / 2026</span>
              <span>01—06</span>
            </div>

            <div className="graph">
              <div className="gridlines" />
              <svg viewBox="0 0 420 180" preserveAspectRatio="none" aria-hidden="true">
                <path d="M0 145 C45 135 58 90 92 108 S145 150 178 82 S225 35 255 85 S310 130 340 62 S390 32 420 20" />
                <circle cx="178" cy="82" r="4" />
                <circle cx="340" cy="62" r="4" />
              </svg>
            </div>

            <div className="metrics">
              <div><b>Python</b><span>ML / ETL</span></div>
              <div><b>SQL</b><span>Data systems</span></div>
              <div><b>BI</b><span>Decision support</span></div>
            </div>
          </div>
        </div>

        <div className="scroll">
          SCROLL TO EXPLORE <span>↓</span>
        </div>
      </section>

      <section id="work" className="section work">
        <div className="sectionHead">
          <div>
            <span className="kicker">SELECTED WORK</span>
            <h2>
              Projects that <em>solve.</em>
            </h2>
          </div>
          <p>From messy datasets to machine learning pipelines and optimization systems.</p>
        </div>

        <div className="projectGrid">
          {projects.map((p) => (
            <article className="project" key={p.title}>
              <div className="projectMeta">
                <span>{p.n}</span>
                <span>{p.type}</span>
              </div>

              <div className="projectVisual">
                <span className="visualCode">{p.visual}</span>
                <span className="visualCorner">{p.stat}</span>
              </div>

              <div className="projectBody">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>

                <div className="tags">
                  {p.tags.map((t) => <span key={t}>{t}</span>)}
                </div>

                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="projectLink"
                >
                  {p.githubLabel ?? 'View on GitHub'} <ArrowUpRight size={15} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="section about">
        <div className="sectionHead">
          <div>
            <span className="kicker">ABOUT</span>
            <h2>
              Analytical by
              <br />
              <em>default.</em>
            </h2>
          </div>
        </div>

        <div className="aboutGrid">
          <div className="aboutLead">
            I’m Beshoy Nashaat, an undergraduate Data Science student at Badr University in
            Assiut, focused on <strong>Data Engineering, Machine Learning and Analytics.</strong>
          </div>

          <div className="aboutCopy">
            <p>
              I enjoy working across the data lifecycle — cleaning and transforming raw data,
              building models and analytical pipelines, and communicating results through
              dashboards and clear visualizations.
            </p>
            <p>
              My background in media is a secondary strength: it helps me explain technical work
              clearly and turn complex information into stories people can understand.
            </p>

            <div className="edu">
              <span>EDUCATION</span>
              <b>Badr University in Assiut</b>
              <small>Data Science · 2023—2027 · School of AI &amp; Data Management</small>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section services">
        <div className="sectionHead">
          <div>
            <span className="kicker">SERVICES</span>
            <h2>
              What I can <em>build.</em>
            </h2>
          </div>
          <p>Practical data and web solutions, from raw data and models to production-ready applications.</p>
        </div>

        <div className="servicesGrid">
          <article className="serviceCard">
            <span className="serviceNumber">01</span>
            <Database />
            <h3>Data Engineering</h3>
            <p>Data pipelines, cleaning, transformation, databases, and reliable data workflows.</p>
          </article>

          <article className="serviceCard">
            <span className="serviceNumber">02</span>
            <BarChart3 />
            <h3>Data Analysis &amp; BI</h3>
            <p>Turning data into insights through analysis, dashboards, visualization, and reporting.</p>
          </article>

          <article className="serviceCard">
            <span className="serviceNumber">03</span>
            <BrainCircuit />
            <h3>Machine Learning</h3>
            <p>Building and evaluating models for classification, prediction, and pattern discovery.</p>
          </article>

          <article className="serviceCard">
            <span className="serviceNumber">04</span>
            <Layers3 />
            <h3>Database Solutions</h3>
            <p>Designing schemas and structured databases that keep application data organized and maintainable.</p>
          </article>

          <article className="serviceCard">
            <span className="serviceNumber">05</span>
            <Globe2 />
            <h3>Web Development</h3>
            <p>Modern responsive websites and web applications with React, Next.js, TypeScript, and APIs.</p>
          </article>

          <article className="serviceCard">
            <span className="serviceNumber">06</span>
            <Code2 />
            <h3>Data-Driven Applications</h3>
            <p>Connecting data, APIs, and machine learning into practical applications people can use.</p>
          </article>
        </div>
      </section>

      <section id="skills" className="section skills">
        <div className="sectionHead">
          <div>
            <span className="kicker">TOOLKIT</span>
            <h2>
              What I <em>work with.</em>
            </h2>
          </div>
        </div>

        <div className="skillsGrid">
          {skills.map(([title, items]) => (
            <div className="skillGroup" key={title}>
              <div className="skillTitle">
                {title === 'Data Engineering' ? (
                  <Database />
                ) : title === 'Data Science' ? (
                  <BrainCircuit />
                ) : title === 'Analytics & BI' ? (
                  <BarChart3 />
                ) : (
                  <Code2 />
                )}
                <span>{title}</span>
              </div>

              <div className="skillList">
                {items.map((x) => <span key={x}>{x}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section secondary">
        <div className="secondaryBox">
          <div>
            <span className="kicker">SECONDARY TRACK</span>
            <h2>
              Creative work,
              <br />
              <em>still part of me.</em>
            </h2>
          </div>

          <div>
            <p>
              Before data became my main direction, I spent years building stories through video.
              I founded Adocado Media Agency and worked on podcast and social content.
            </p>
            <div className="creativeTags">
              <span>Adocado Media Agency</span>
              <span>Ahlan Podcast</span>
              <span>Video Editing</span>
              <span>Content Strategy</span>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <span className="kicker">GET IN TOUCH</span>
        <h2>
          Let’s build something
          <br />
          <em>with data.</em>
        </h2>

        <a className="email" href="mailto:beshoo.nashaat10@gmail.com">
          beshoo.nashaat10@gmail.com <ArrowUpRight />
        </a>

        <div className="contactBottom">
          <span>Asyut, Egypt</span>
          <span>Open to opportunities</span>
          <div>
            <a href="https://github.com/beshoonashaat" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/beshoy-nashaat-19640620b/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://www.behance.net/beshoonashaat10" target="_blank" rel="noreferrer">Behance</a>
          </div>
        </div>
      </section>

      <footer>
        © 2026 Beshoy Nashaat <span>DATA · ENGINEERING · SCIENCE</span>
      </footer>
    </main>
  );
}
