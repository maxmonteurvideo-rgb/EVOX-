import Link from "next/link";
import GradientText from "@/components/GradientText";

const indicators = [
  "+300 ads livrées",
  "+30 marques satisfaites",
  "Stratégie optimisée Meta",
];

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M3.5 8.5L6.5 11.5L12.5 4.5"
        stroke="#2E6B9E"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      className="hero"
      style={{ paddingTop: "clamp(100px, 15vh, 140px)" }}
    >
      <style>{`
        .hero-indicators {
          display: flex;
          justify-content: center;
          gap: var(--space-8);
          margin-top: var(--space-8);
          margin-bottom: var(--space-8);
        }

        .hero-indicator {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          font-family: "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 0.875rem;
          font-weight: 500;
          color: #3d5a80;
        }

        @media (max-width: 639px) {
          .hero-indicators {
            flex-direction: column;
            align-items: center;
            gap: var(--space-3);
          }
        }
      `}</style>

      <GradientText
        colors={["#B8D8F0", "#5AAED6", "#2A7DB5", "#B8D8F0"]}
        animationSpeed={6}
        className="evox-title"
      >
        EVOX
      </GradientText>
      <h1
        className="hero-headline"
        style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
      >
        Des vidéos publicitaires{" "}
        <span
          style={{
            background: "linear-gradient(135deg, #7CC4E8 0%, #5AAED6 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "transparent",
            textShadow: "0 0 30px rgba(90, 174, 214, 0.25)",
          }}
        >
          Meta
        </span>
        <br />à l&apos;image de votre marque.
      </h1>
      <p className="hero-subtitle">
        Du script au montage final — des créas conçues pour{" "}
        <em>convertir</em>, avec la qualité que votre marque{" "}
        <em>exige</em>.
      </p>

      <div className="hero-indicators">
        {indicators.map((text) => (
          <div key={text} className="hero-indicator">
            <CheckIcon />
            <span>{text}</span>
          </div>
        ))}
      </div>

      <Link href="/appel" className="cta-primary hero-cta" style={{ marginTop: 0 }}>
        Réserver un appel →
      </Link>
    </section>
  );
}
