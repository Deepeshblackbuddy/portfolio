import { useEffect, useMemo, useState } from "react";
import Reveal from "./Reveal.jsx";
import { ArrowUpRight, Close } from "./Icons.jsx";

function Links({ links }) {
  const real = (links || []).filter((l) => l.url);
  if (real.length === 0) return null;
  return (
    <div className="project__links">
      {real.map((l) => (
        <a key={l.label} href={l.url} target="_blank" rel="noreferrer" className="btn btn--light btn--sm">
          {l.label} <ArrowUpRight size={14} />
        </a>
      ))}
    </div>
  );
}

function Modal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div className="modal" onClick={onClose} role="dialog" aria-modal="true" aria-label={project.title}>
      <div className="modal__panel" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="Close">
          <Close />
        </button>
        <p className="eyebrow">
          <span className="eyebrow__dot" />
          {project.category}
        </p>
        <h3 className="modal__title">{project.title}</h3>
        <p className="modal__subtitle">{project.subtitle}</p>

        {project.description.map((p) => (
          <p key={p} className="modal__para">
            {p}
          </p>
        ))}

        <h4 className="modal__heading">Highlights</h4>
        <ul className="highlights">
          {project.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>

        <div className="chips">
          {project.tech.map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>
        <Links links={project.links} />
      </div>
    </div>
  );
}

export default function Projects({ section, projects }) {
  const categories = useMemo(() => ["All", ...new Set(projects.map((p) => p.category))], [projects]);
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);

  const visible = projects.filter((p) => filter === "All" || p.category === filter);
  const featured = visible.find((p) => p.featured);
  const rest = visible.filter((p) => p !== featured);

  return (
    <section id="projects" className="section section--tint">
      <div className="container">
        <Reveal className="projects__head">
          <p className="eyebrow">
            <span className="eyebrow__dot" />
            {section.eyebrow}
          </p>
          <h2 className="section__title">{section.title}</h2>
          <p className="section__intro">{section.intro}</p>

          <div className="tabs">
            {categories.map((c) => (
              <button
                key={c}
                className={`tab ${c === filter ? "is-active" : ""}`}
                onClick={() => setFilter(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        {featured && (
          <Reveal key={`f-${featured.id}`}>
            <article className="featured card">
              <div className="featured__body">
                <span className="badge">{featured.status}</span>
                <h3 className="featured__title">{featured.title}</h3>
                <p className="featured__subtitle">{featured.subtitle}</p>
                <p className="featured__summary">{featured.summary}</p>

                <ul className="highlights">
                  {featured.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>

                <div className="chips">
                  {featured.tech.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="project__links">
                  <button className="btn btn--dark" onClick={() => setSelected(featured)}>
                    Read the story <ArrowUpRight />
                  </button>
                  <Links links={featured.links} />
                </div>
              </div>

              <div className="featured__visual" aria-hidden="true">
                <span className="featured__mark">AI</span>
                <span className="featured__caption">{featured.title}</span>
              </div>
            </article>
          </Reveal>
        )}

        <div className="grid">
          {rest.map((p, i) => (
            <Reveal key={p.id} delay={i * 100}>
              <article
                className="project card card--hover"
                onClick={() => setSelected(p)}
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setSelected(p)}
              >
                <div className="project__top">
                  <span className="badge badge--soft">{p.category}</span>
                  <span className="project__arrow">
                    <ArrowUpRight />
                  </span>
                </div>
                <h3 className="project__title">{p.title}</h3>
                <p className="project__subtitle">{p.subtitle}</p>
                <p className="project__summary">{p.summary}</p>
                <div className="chips">
                  {p.tech.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {selected && <Modal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
