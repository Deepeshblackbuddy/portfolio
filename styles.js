// All styling for the site lives here as JavaScript, so the project needs no .css file.
// It is injected into the page by <GlobalStyles /> (see GlobalStyles.jsx).
const styles = `@import url("https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=Inter:wght@400;500;600&display=swap");

/* ============ 1. DESIGN TOKENS (change colours/fonts here) ============ */
:root {
  --bg: #faf9ff;
  --surface: #ffffff;
  --tint: #f1eefd;
  --ink: #14122b;
  --muted: #5f5c7a;
  --soft: #a29fbd;
  --line: #e4e0f5;
  --dark: #1b1740;

  /* accent colours: change these three to re-theme the whole site */
  --accent: #6c5ce7;
  --accent-2: #ff6b9d;
  --accent-3: #ffd166;
  --grad: linear-gradient(120deg, #6c5ce7 0%, #a855f7 50%, #ff6b9d 100%);

  --font-display: "Barlow Condensed", "Arial Narrow", sans-serif;
  --font-body: "Inter", system-ui, -apple-system, "Segoe UI", sans-serif;

  --radius: 14px;
  --radius-lg: 24px;
  --shadow: 0 14px 40px rgba(80, 60, 200, 0.16);
  --max: 1160px;
}

/* ============ 2. BASE ============ */
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: var(--bg);
  color: var(--ink);
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
  background-image: radial-gradient(900px 500px at 100% 35%, rgba(255, 107, 157, 0.07), transparent 60%),
    radial-gradient(900px 500px at 0% 65%, rgba(108, 92, 231, 0.08), transparent 60%);
  background-attachment: fixed;
}

::selection {
  background: var(--accent);
  color: #fff;
}

h1,
h2,
h3,
h4,
p,
ul {
  margin: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  font: inherit;
  color: inherit;
  cursor: pointer;
}

.container {
  width: min(var(--max), 100% - 48px);
  margin-inline: auto;
}

.section {
  padding: 110px 0;
  scroll-margin-top: 20px;
}

.section--tint {
  background: var(--tint);
}

.section__title {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(2.6rem, 6vw, 4.6rem);
  line-height: 0.95;
  letter-spacing: -0.01em;
  margin: 14px 0 22px;
}

.section__intro {
  color: var(--muted);
  max-width: 560px;
}

/* ============ 3. SMALL PARTS ============ */
.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.eyebrow__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 0 0 rgba(108, 92, 231, 0.5);
  animation: ping 2.2s ease-out infinite;
}

.eyebrow--light {
  color: #d5d6da;
}

.eyebrow--light .eyebrow__dot {
  background: var(--accent-3);
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  border: 0;
  border-radius: 12px;
  padding: 12px 20px;
  font-weight: 600;
  font-size: 0.95rem;
  transition: transform 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;
}

.btn:hover {
  transform: translateY(-2px);
}

.btn svg {
  transition: transform 0.2s ease;
}

.btn:hover svg {
  transform: translate(2px, -2px);
}

.btn--dark {
  background: var(--grad);
  background-size: 140% 100%;
  color: #fff;
  box-shadow: 0 8px 22px rgba(108, 92, 231, 0.32);
}

.btn--dark:hover {
  background-position: 100% 0;
  box-shadow: 0 14px 32px rgba(108, 92, 231, 0.45);
}

.btn--light {
  background: var(--surface);
  color: var(--ink);
  border: 1px solid var(--line);
}

.btn--light:hover {
  background: var(--tint);
  border-color: var(--accent);
}

.btn--white {
  background: #fff;
  color: var(--dark);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
}

.btn--lg {
  padding: 18px 28px;
  font-size: 1.02rem;
  border-radius: 14px;
}

.btn--sm {
  padding: 8px 14px;
  font-size: 0.85rem;
  gap: 8px;
}

.link-arrow {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  padding: 6px 2px;
  border-bottom: 1.5px solid transparent;
  transition: border-color 0.2s ease;
}

.link-arrow:hover {
  border-color: currentColor;
}

.link-arrow--light {
  color: #fff;
}

.card {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
}

.card--hover {
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.card--hover:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow);
  border-color: rgba(108, 92, 231, 0.45);
}

.badge {
  display: inline-block;
  background: var(--grad);
  color: #fff;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 5px 12px;
  border-radius: 999px;
}

.badge--soft {
  background: var(--tint);
  color: var(--accent);
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 18px;
}

.chip {
  background: var(--bg);
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 5px 14px;
  font-size: 0.82rem;
  font-weight: 500;
  color: #3b3857;
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
}

.chip:hover {
  background: var(--grad);
  border-color: transparent;
  color: #fff;
}

.chip--pop {
  animation: pop 0.35s ease both;
}

.tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 26px;
}

.tab {
  background: transparent;
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 8px 18px;
  font-size: 0.88rem;
  font-weight: 500;
  color: var(--muted);
  transition: all 0.2s ease;
}

.tab:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.tab.is-active {
  background: var(--grad);
  border-color: transparent;
  color: #fff;
  box-shadow: 0 6px 16px rgba(108, 92, 231, 0.3);
}

/* ============ 4. NAVBAR (floating pill, no name on the left) ============ */
.navbar {
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 50;
  padding-top: 14px;
}

.navbar__progress {
  position: absolute;
  top: 0;
  left: 0;
  height: 3px;
  width: var(--p, 0%);
  background: var(--grad);
}

.navbar__inner {
  position: relative;
  width: min(1240px, 100% - 32px);
  margin-inline: auto;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 16px;
}

.navbar__status {
  justify-self: start;
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 9px 16px;
  font-size: 0.82rem;
  font-weight: 600;
  background: rgba(255, 255, 255, 0.75);
  border: 1px solid var(--line);
  border-radius: 999px;
  backdrop-filter: blur(12px);
}

.navbar__status i {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #22c55e;
  box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.6);
  animation: ping-green 2s ease-out infinite;
}

.navbar__links {
  display: flex;
  gap: 4px;
  padding: 6px;
  background: rgba(255, 255, 255, 0.78);
  border: 1px solid var(--line);
  border-radius: 999px;
  backdrop-filter: blur(14px);
  box-shadow: 0 8px 30px rgba(60, 40, 160, 0.08);
  transition: box-shadow 0.3s ease;
}

.navbar--scrolled .navbar__links {
  box-shadow: 0 14px 38px rgba(60, 40, 160, 0.18);
}

.navbar__links a {
  padding: 9px 22px;
  border-radius: 999px;
  font-weight: 500;
  font-size: 0.95rem;
  color: var(--muted);
  transition: color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;
}

.navbar__links a:hover {
  color: var(--ink);
  background: var(--tint);
}

.navbar__links a.is-active {
  color: #fff;
  background: var(--grad);
  box-shadow: 0 6px 16px rgba(108, 92, 231, 0.35);
}

.navbar__cta {
  justify-self: end;
}

.navbar__toggle {
  display: none;
  justify-self: end;
  width: 44px;
  height: 44px;
  background: var(--grad);
  border: 0;
  border-radius: 12px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
}

.navbar__toggle span {
  display: block;
  width: 18px;
  height: 2px;
  background: #fff;
}

/* ============ 5. HERO ============ */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 130px 24px 80px;
  overflow: hidden;
}

/* soft colour glows behind the headline */
.hero::before,
.hero::after {
  content: "";
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  opacity: 0.5;
  pointer-events: none;
  animation: float 12s ease-in-out infinite;
}

.hero::before {
  width: 460px;
  height: 460px;
  left: -120px;
  top: 8%;
  background: #a78bfa;
}

.hero::after {
  width: 420px;
  height: 420px;
  right: -100px;
  bottom: 26%;
  background: #ff9ec0;
  animation-delay: -6s;
}

.hero__grid {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle at 1px 1px, rgba(108, 92, 231, 0.22) 1px, transparent 0);
  background-size: 30px 30px;
  -webkit-mask-image: radial-gradient(ellipse 60% 55% at 50% 48%, #000 20%, transparent 75%);
  mask-image: radial-gradient(ellipse 60% 55% at 50% 48%, #000 20%, transparent 75%);
  pointer-events: none;
}

.hero__inner {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 1100px;
}

/* the highlighted name */
.hero__hello {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  margin-bottom: 26px;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(1.7rem, 3.6vw, 2.6rem);
  line-height: 1;
  animation: rise 0.6s ease both;
}

.name-hl {
  display: inline-block;
  padding: 4px 20px 8px;
  color: #fff;
  font-weight: 800;
  letter-spacing: 0.01em;
  background: var(--grad);
  border-radius: 14px;
  transform: rotate(-2.5deg);
  box-shadow: 0 14px 34px rgba(108, 92, 231, 0.4), 0 0 0 4px rgba(255, 209, 102, 0.55);
  animation: marker 0.9s cubic-bezier(0.2, 0.7, 0.2, 1) 0.35s both;
}

.hero__title {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(3.4rem, 11.5vw, 9.5rem);
  line-height: 0.9;
  letter-spacing: -0.015em;
  margin: 30px 0 36px;
}

.hero__line {
  display: block;
  animation: rise 0.8s cubic-bezier(0.2, 0.7, 0.2, 1) both;
}

.hero__line--accent {
  background: var(--grad);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  padding-bottom: 0.08em;
  animation-delay: 0.15s;
}

.hero__eyebrow {
  animation: rise 0.6s ease 0.1s both;
}

.hero__intro {
  color: var(--muted);
  font-size: 1.08rem;
  display: grid;
  gap: 6px;
  animation: rise 0.8s ease 0.3s both;
}

.hero__actions {
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
  align-items: center;
  justify-content: center;
  animation: rise 0.8s ease 0.45s both;
}

.hero__burst {
  position: absolute;
  right: 9%;
  top: 56%;
  color: var(--accent-3);
  filter: drop-shadow(0 8px 16px rgba(255, 170, 0, 0.35));
  animation: spin 18s linear infinite;
}

/* ============ 6. ABOUT ============ */
.about {
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  gap: 70px;
  align-items: start;
}

.about__para {
  color: var(--muted);
  margin-bottom: 16px;
  max-width: 560px;
}

.education {
  margin-top: 30px;
  padding: 20px 22px;
  background: var(--surface);
  border: 1px solid var(--line);
  border-left: 4px solid var(--accent);
  border-radius: var(--radius);
  box-shadow: 0 8px 24px rgba(80, 60, 200, 0.06);
  display: grid;
  gap: 2px;
  max-width: 560px;
}

.education__label {
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--soft);
  font-weight: 600;
}

.education span:last-child {
  color: var(--muted);
  font-size: 0.92rem;
}

.stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  margin-bottom: 18px;
}

.stat {
  background: var(--grad);
  box-shadow: 0 12px 26px rgba(108, 92, 231, 0.25);
  color: #fff;
  border-radius: var(--radius);
  padding: 22px 18px;
  display: grid;
  gap: 2px;
  transition: transform 0.25s ease;
}

.stat:hover {
  transform: translateY(-4px) rotate(-1deg);
}

.stat:nth-child(2) {
  background: linear-gradient(135deg, #ff6b9d, #ff9a62);
  box-shadow: 0 12px 26px rgba(255, 107, 157, 0.28);
}

.stat:nth-child(3) {
  background: linear-gradient(135deg, #14b8a6, #3b82f6);
  box-shadow: 0 12px 26px rgba(20, 184, 166, 0.25);
}

.stat__value {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 2.6rem;
  line-height: 1;
}

.stat__label {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.85);
}

.skills {
  padding: 28px;
  box-shadow: 0 12px 34px rgba(80, 60, 200, 0.08);
}

.skills__title {
  font-family: var(--font-display);
  font-size: 1.7rem;
  font-weight: 700;
}

.skills .tabs {
  margin-top: 16px;
}

/* ============ 7. PROJECTS ============ */
.projects__head {
  margin-bottom: 44px;
}

.featured {
  box-shadow: 0 20px 50px rgba(80, 60, 200, 0.12);
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  overflow: hidden;
  margin-bottom: 26px;
}

.featured__body {
  padding: 44px;
}

.featured__title {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(2.4rem, 5vw, 3.8rem);
  line-height: 0.95;
  margin: 18px 0 6px;
}

.featured__subtitle {
  font-weight: 600;
  color: var(--muted);
  margin-bottom: 14px;
}

.featured__summary {
  color: var(--muted);
  margin-bottom: 18px;
  max-width: 520px;
}

.highlights {
  list-style: none;
  padding: 0;
  display: grid;
  gap: 8px;
}

.highlights li {
  position: relative;
  padding-left: 22px;
  font-size: 0.95rem;
}

.highlights li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.6em;
  width: 8px;
  height: 8px;
  border-radius: 2px;
  background: var(--grad);
  transform: rotate(45deg);
}

.project__links {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 26px;
}

.featured__visual {
  background: linear-gradient(145deg, #5b4bd6 0%, #a855f7 55%, #ff6b9d 100%);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 320px;
  position: relative;
  overflow: hidden;
}

.featured__visual::before {
  content: "";
  position: absolute;
  width: 360px;
  height: 360px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 0 0 60px rgba(255, 255, 255, 0.03), 0 0 0 120px rgba(255, 255, 255, 0.02);
}

.featured__mark {
  position: relative;
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 7.5rem;
  line-height: 1;
  color: #fff;
  text-shadow: 0 10px 40px rgba(20, 10, 80, 0.35);
}

.featured__caption {
  position: relative;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-size: 0.78rem;
  color: rgba(255, 255, 255, 0.85);
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 26px;
}

.project {
  padding: 30px;
  cursor: pointer;
  height: 100%;
}

.project:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
}

.project__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.project__arrow {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 1px solid var(--line);
  display: grid;
  place-items: center;
  transition: all 0.25s ease;
}

.project:hover .project__arrow {
  background: var(--accent);
  border-color: var(--accent);
  color: #fff;
  transform: rotate(45deg);
}

.project__title {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 2.2rem;
  line-height: 1;
  margin: 22px 0 4px;
}

.project__subtitle {
  font-weight: 600;
  color: var(--muted);
  font-size: 0.92rem;
  margin-bottom: 12px;
}

.project__summary {
  color: var(--muted);
  font-size: 0.95rem;
}

/* ============ 8. MODAL ============ */
.modal {
  position: fixed;
  inset: 0;
  z-index: 100;
  background: rgba(20, 21, 25, 0.55);
  backdrop-filter: blur(4px);
  display: grid;
  place-items: center;
  padding: 20px;
  animation: fade 0.2s ease both;
}

.modal__panel {
  position: relative;
  width: min(680px, 100%);
  max-height: 88vh;
  overflow-y: auto;
  background: var(--surface);
  border-radius: var(--radius-lg);
  padding: 40px;
  animation: rise 0.3s ease both;
}

.modal__close {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 1px solid var(--line);
  background: var(--surface);
  display: grid;
  place-items: center;
  transition: background 0.2s ease, color 0.2s ease;
}

.modal__close:hover {
  background: var(--accent);
  color: #fff;
}

.modal__title {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 3rem;
  line-height: 1;
  margin: 14px 0 4px;
}

.modal__subtitle {
  font-weight: 600;
  color: var(--muted);
  margin-bottom: 20px;
}

.modal__para {
  color: var(--muted);
  margin-bottom: 12px;
}

.modal__heading {
  font-family: var(--font-display);
  font-size: 1.5rem;
  margin: 24px 0 12px;
}

/* ============ 9. CONTACT + FOOTER ============ */
.contact {
  padding-bottom: 40px;
}

.contact__box {
  background: radial-gradient(620px 320px at 12% 0%, rgba(108, 92, 231, 0.65), transparent 62%),
    radial-gradient(520px 320px at 92% 100%, rgba(255, 107, 157, 0.45), transparent 62%), var(--dark);
  box-shadow: 0 30px 70px rgba(40, 20, 120, 0.3);
  color: #fff;
  border-radius: 32px;
  padding: 80px 48px;
  text-align: center;
}

.contact__title {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(2.8rem, 7vw, 5.6rem);
  line-height: 0.95;
  margin: 18px auto 18px;
  max-width: 800px;
}

.contact__text {
  color: #cfcde6;
  max-width: 520px;
  margin: 0 auto 34px;
}

.contact__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 26px;
  justify-content: center;
  align-items: center;
}

.footer {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  padding: 34px 4px 0;
  color: var(--muted);
  font-size: 0.88rem;
}

.footer a:hover {
  color: var(--accent);
}

/* ============ 10. ANIMATIONS (kept minimal) ============ */
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.reveal.is-visible {
  opacity: 1;
  transform: none;
}

@keyframes rise {
  from {
    opacity: 0;
    transform: translateY(26px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes pop {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

@keyframes ping {
  to {
    box-shadow: 0 0 0 10px rgba(108, 92, 231, 0);
  }
}

@keyframes ping-green {
  to {
    box-shadow: 0 0 0 9px rgba(34, 197, 94, 0);
  }
}

@keyframes float {
  50% {
    transform: translate(30px, -30px) scale(1.08);
  }
}

@keyframes marker {
  from {
    clip-path: inset(0 100% 0 0);
  }
  to {
    clip-path: inset(-40px -40px -40px -40px);
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation: none !important;
    transition: none !important;
  }
  .reveal {
    opacity: 1;
    transform: none;
  }
}

/* ============ 11. RESPONSIVE ============ */
@media (max-width: 900px) {
  .section {
    padding: 80px 0;
  }

  .about,
  .featured,
  .grid {
    grid-template-columns: 1fr;
  }

  .about {
    gap: 40px;
  }

  .featured__visual {
    min-height: 220px;
  }

  .featured__mark {
    font-size: 5rem;
  }

  .featured__body {
    padding: 30px 24px;
  }

  .hero__burst {
    right: 6%;
    top: 78%;
    transform: scale(0.7);
  }

  .navbar__inner {
    grid-template-columns: 1fr auto;
  }

  .navbar__toggle {
    display: flex;
  }

  .navbar__cta {
    display: none;
  }

  .navbar__links {
    position: absolute;
    top: calc(100% + 10px);
    left: 0;
    right: 0;
    flex-direction: column;
    gap: 2px;
    padding: 10px;
    border-radius: 22px;
    background: #fff;
    box-shadow: 0 20px 50px rgba(60, 40, 160, 0.22);
    display: none;
  }

  .navbar__links.is-open {
    display: flex;
  }

  .navbar__links a {
    padding: 13px 18px;
  }

  .contact__box {
    padding: 56px 24px;
  }

  .modal__panel {
    padding: 30px 22px;
  }
}
`;

export default styles;
