import Reveal from "./Reveal.jsx";
import { ArrowUpRight } from "./Icons.jsx";

export default function Contact({ contact, site }) {
  const socials = contact.socials.filter((s) => s.url);

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <Reveal className="contact__box">
          <p className="eyebrow eyebrow--light">
            <span className="eyebrow__dot" />
            {contact.eyebrow}
          </p>
          <h2 className="contact__title">{contact.title}</h2>
          <p className="contact__text">{contact.text}</p>

          <div className="contact__actions">
            {contact.email && (
              <a href={`mailto:${contact.email}`} className="btn btn--white btn--lg">
                {contact.email} <ArrowUpRight />
              </a>
            )}
            {socials.map((s) => (
              <a key={s.label} href={s.url} target="_blank" rel="noreferrer" className="link-arrow link-arrow--light">
                {s.label} <ArrowUpRight size={14} />
              </a>
            ))}
          </div>
        </Reveal>

        <footer className="footer">
          <span>
            © {site.year} {site.name}. {site.tagline}.
          </span>
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Back to top ↑
          </a>
        </footer>
      </div>
    </section>
  );
}
