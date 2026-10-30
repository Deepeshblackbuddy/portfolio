import { ArrowDown, ArrowUpRight, Burst } from "./Icons.jsx";

export default function Hero({ hero }) {
  const goTo = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero">
      <div className="hero__inner">
        <p className="eyebrow hero__eyebrow">
          <span className="eyebrow__dot" />
          {hero.eyebrow}
        </p>

        <h1 className="hero__title">
          <span className="hero__line">{hero.titleLine1}</span>
          <span className="hero__line hero__line--accent">{hero.titleLine2}</span>
        </h1>

        <div className="hero__intro">
          {hero.intro.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>

        <div className="hero__actions">
          <a
            href={`#${hero.primaryCta.target}`}
            className="btn btn--dark btn--lg"
            onClick={goTo(hero.primaryCta.target)}
          >
            {hero.primaryCta.label} <ArrowUpRight />
          </a>
          <a
            href={`#${hero.secondaryCta.target}`}
            className="link-arrow"
            onClick={goTo(hero.secondaryCta.target)}
          >
            {hero.secondaryCta.label} <ArrowDown />
          </a>
        </div>
      </div>

      <div className="hero__burst" aria-hidden="true">
        <Burst size={86} />
      </div>
    </section>
  );
}
