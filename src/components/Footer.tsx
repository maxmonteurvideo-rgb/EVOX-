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

function WhatsAppIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 3C7.02944 3 3 7.02944 3 12C3 13.6567 3.44479 15.2019 4.229 16.52L3 21L7.62 19.82C8.89079 20.5377 10.4044 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 10.5C9.7 11.9 10.6 13.4 12.1 14.9C13.6 16.4 15.1 17.3 16.5 17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
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

        <p className="footer-copyright">
          © 2026 EVOX. Tous droits réservés.
        </p>

        <div className="footer-socials">
          <a
            href="#"
            className="footer-social-link"
            aria-label="Instagram"
          >
            <InstagramIcon />
          </a>
          <a
            href="#"
            className="footer-social-link"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
          <a
            href="#"
            className="footer-social-link"
            aria-label="WhatsApp"
          >
            <WhatsAppIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
