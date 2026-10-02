"use client";

import { useState } from "react";

/*
 * Calendly dépose ses propres cookies : on ne charge le calendrier
 * qu'après un clic du visiteur (consentement par l'action).
 */
export default function CalendlyEmbed() {
  const [show, setShow] = useState(false);

  if (show) {
    return (
      <iframe
        src="https://calendly.com/contact-evox-production/30min"
        title="Réserver un appel avec EVOX"
        width="100%"
        height="700"
        frameBorder="0"
        style={{ borderRadius: "16px", minHeight: "650px" }}
      />
    );
  }

  return (
    <div className="appel-calendly-gate">
      <p className="appel-calendly-gate-title">Choisissez votre créneau</p>
      <p className="appel-calendly-gate-text">
        Appel de 30 minutes, gratuit et sans engagement.
      </p>
      <button
        type="button"
        className="cta-primary appel-calendly-gate-btn"
        onClick={() => setShow(true)}
      >
        Afficher le calendrier →
      </button>
      <p className="appel-calendly-gate-note">
        Le calendrier est fourni par Calendly, qui utilise des cookies. En
        l&apos;affichant, vous acceptez leur dépôt.{" "}
        <a href="/confidentialite">En savoir plus</a>
      </p>
    </div>
  );
}
