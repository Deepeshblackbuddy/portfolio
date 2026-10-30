import { useEffect } from "react";
import styles from "./styles.js";

const FAVICON =
  "data:image/svg+xml," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="8" fill="#6c5ce7"/><text x="16" y="23" font-family="Arial,sans-serif" font-size="20" font-weight="800" text-anchor="middle" fill="#fff">d</text></svg>'
  );

// Injects the site's styles and sets the page title, description and favicon,
// all from React, so no separate CSS or HTML head tags are needed.
export default function GlobalStyles({ site }) {
  useEffect(() => {
    document.title = `${site.name} | AI Portfolio`;

    let desc = document.querySelector('meta[name="description"]');
    if (!desc) {
      desc = document.createElement("meta");
      desc.name = "description";
      document.head.appendChild(desc);
    }
    desc.content = `Portfolio of ${site.name} - AI enthusiast and builder working on computer vision, generative AI and full-stack software. Open to internships and jobs.`;

    let icon = document.querySelector('link[rel="icon"]');
    if (!icon) {
      icon = document.createElement("link");
      icon.rel = "icon";
      document.head.appendChild(icon);
    }
    icon.type = "image/svg+xml";
    icon.href = FAVICON;
  }, [site.name]);

  return <style>{styles}</style>;
}
