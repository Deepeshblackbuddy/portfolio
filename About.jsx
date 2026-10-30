import { useState } from "react";
import Reveal from "./Reveal.jsx";

export default function About({ about }) {
  const [activeGroup, setActiveGroup] = useState(0);
  const group = about.skillGroups[activeGroup];

  return (
    <section id="about" className="section">
      <div className="container about">
        <Reveal className="about__text">
          <p className="eyebrow">
            <span className="eyebrow__dot" />
            {about.eyebrow}
          </p>
          <h2 className="section__title">{about.title}</h2>
          {about.paragraphs.map((p) => (
            <p key={p} className="about__para">
              {p}
            </p>
          ))}

          <div className="education">
            <span className="education__label">Education</span>
            <strong>{about.education.school}</strong>
            <span>
              {about.education.degree} · {about.education.status} · {about.education.place}
            </span>
          </div>
        </Reveal>

        <Reveal className="about__side" delay={120}>
          <div className="stats">
            {about.stats.map((s) => (
              <div key={s.label} className="stat">
                <span className="stat__value">{s.value}</span>
                <span className="stat__label">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="skills card">
            <h3 className="skills__title">What I work with</h3>
            <div className="tabs" role="tablist">
              {about.skillGroups.map((g, i) => (
                <button
                  key={g.name}
                  role="tab"
                  aria-selected={i === activeGroup}
                  className={`tab ${i === activeGroup ? "is-active" : ""}`}
                  onClick={() => setActiveGroup(i)}
                >
                  {g.name}
                </button>
              ))}
            </div>
            <div className="chips" key={group.name}>
              {group.items.map((item, i) => (
                <span key={item} className="chip chip--pop" style={{ animationDelay: `${i * 50}ms` }}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
