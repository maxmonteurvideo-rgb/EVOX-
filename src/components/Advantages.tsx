"use client";

import { useState } from "react";
import "./Advantages.css";

const cards = [
  {
    title: "Vous ne gérez rien",
    text: "Du premier brief à la mise en ligne, on s'occupe de tout. Vous restez concentré sur votre métier.",
  },
  {
    title: "Conçu pour Meta, pas adapté",
    text: "Chaque vidéo est pensée pour le scroll, le hook, le clic. Pas une pub télé recadrée en 9:16.",
    highlightMeta: true,
  },
  {
    title: "La qualité sans le compromis",
    text: "Un niveau de production premium qui ne sacrifie pas la performance. Vos pubs convertissent et vous ressemblent.",
  },
  {
    title: "On connaît vos clients",
    text: "Artisans, formateurs, immobilier : on maîtrise vos cibles, leurs objections, ce qui les fait cliquer.",
  },
];

const centeredText = { textAlign: "center" as const };

const metaHighlightStyle = {
  color: "#5AAED6",
  textShadow: "0 0 20px rgba(90, 174, 214, 0.3)",
};

function AdvantageCard({
  title,
  text,
  highlightMeta,
}: {
  title: string;
  text: string;
  highlightMeta?: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      className="advantages-card"
      style={{
        borderRadius: "16px",
        transition: "all 0.3s ease",
        transform: isHovered ? "scale(1.05)" : undefined,
        boxShadow: isHovered ? "var(--shadow-md)" : undefined,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 className="advantages-card-title" style={centeredText}>
        {highlightMeta ? (
          <>
            Conçu pour{" "}
            <span style={metaHighlightStyle}>Meta</span>, pas adapté
          </>
        ) : (
          title
        )}
      </h3>
      <p className="advantages-card-text" style={centeredText}>
        {text}
      </p>
    </article>
  );
}

export default function Advantages() {
  return (
    <section className="advantages">
      <div className="advantages-container">
        <div className="advantages-separator" />

        <p className="advantages-label">POURQUOI EVOX</p>
        <h2 className="advantages-heading">
          Ce qui change quand vous travaillez avec nous.
        </h2>

        <div className="advantages-grid">
          {cards.map((card) => (
            <AdvantageCard
              key={card.title}
              title={card.title}
              text={card.text}
              highlightMeta={card.highlightMeta}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
