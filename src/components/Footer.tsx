import Link from "next/link";
import "./Footer.css";

function InstagramIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M8 11V16M8 8V8.01M12 16V13.5C12 12.1193 13.1193 11 14.5 11C15.8807 11 17 12.1193 17 13.5V16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M4 7L12 13L20 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <p className="footer-logo">EVOX</p>
          <p className="footer-tagline">Agence de création Meta Ads premium</p>
        </div>

        <div className="footer-legal">
          <p className="footer-copyright">
            © 2026 EVOX — Maxence Guerin · BCE 1017.672.431
          </p>
          <nav className="footer-legal-links" aria-label="Informations légales">
            <Link href="/mentions-legales">Mentions légales</Link>
            <span aria-hidden="true">·</span>
            <Link href="/confidentialite">Confidentialité</Link>
          </nav>
        </div>

        <div className="footer-socials">
          <a
            href="https://www.instagram.com/evoxproduction/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            aria-label="Instagram"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/maxence-guerin-a64ab9330/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
          <a
            href="mailto:contact.evox.production@gmail.com"
            className="footer-social-link"
            aria-label="Envoyer un e-mail à EVOX"
            title="contact.evox.production@gmail.com"
          >
            <MailIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
