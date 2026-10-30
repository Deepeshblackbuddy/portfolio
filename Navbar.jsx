import { useEffect, useState } from "react";
import { ArrowUpRight } from "./Icons.jsx";

export default function Navbar({ site, nav }) {
  const [active, setActive] = useState(nav[0].id);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  // Highlight the link of the section currently on screen
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
      const probe = window.scrollY + window.innerHeight * 0.4;
      let current = nav[0].id;
      nav.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= probe) current = id;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [nav]);

  const goTo = (id) => (e) => {
    e.preventDefault();
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}
      style={{ "--p": `${progress}%` }}
    >
      <div className="navbar__progress" aria-hidden="true" />
      <div className="navbar__inner">
        <span className="navbar__status">
          <i aria-hidden="true" />
          Open to work
        </span>

        <nav className={`navbar__links ${open ? "is-open" : ""}`} aria-label="Main">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={active === item.id ? "is-active" : ""}
              onClick={goTo(item.id)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="btn btn--dark navbar__cta" onClick={goTo("contact")}>
          Let&apos;s talk <ArrowUpRight />
        </a>

        <button
          className="navbar__toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
