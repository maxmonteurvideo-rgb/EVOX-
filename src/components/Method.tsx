"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import "./Method.css";

const steps = [
  {
    title: "Analyse de marché",
    description:
      "On étudie votre secteur, vos concurrents et ce qui fonctionne dans votre niche.",
  },
  {
    title: "Avatar client",
    description:
      "On définit précisément qui vous ciblez — leurs besoins, leurs objections, leurs habitudes.",
  },
  {
    title: "Script optimisé",
    description:
      "On écrit pour convertir, pas pour faire joli. Chaque mot a un objectif.",
  },
  {
    title: "Stratégie de tournage",
    description:
      "On planifie chaque plan pour maximiser l'impact en un minimum de temps.",
  },
  {
    title: "Montage premium",
    description:
      "Post-production à la hauteur de votre marque. Sound design, étalonnage, motion.",
  },
  {
    title: "Livraison & suivi",
    description:
      "On mesure les résultats, on ajuste, on améliore. Votre performance est notre priorité.",
  },
];

const timelineLineOffset = 51;

function MethodStepCard({
  step,
  index,
}: {
  step: (typeof steps)[number];
  index: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasRevealed, setHasRevealed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const timeout = window.setTimeout(
      () => setHasRevealed(true),
      index * 150 + 600
    );

    return () => window.clearTimeout(timeout);
  }, [isVisible, index]);

  const getTransform = () => {
    if (!isVisible) return "translateY(30px)";
    if (isHovered) return "translateY(-2px)";
    return "translateY(0)";
  };

  return (
    <article
      ref={ref}
      style={{
        display: "flex",
        gap: "var(--space-6)",
        alignItems: "flex-start",
        background: isHovered
          ? "rgba(90, 174, 214, 0.1)"
          : "rgba(90, 174, 214, 0.06)",
        border: `1px solid ${
          isHovered ? "rgba(90, 174, 214, 0.25)" : "rgba(90, 174, 214, 0.15)"
        }`,
        borderRadius: "16px",
        padding: "24px 28px",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transitionProperty: "opacity, transform",
        transitionDuration: "0.6s",
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        transitionDelay:
          isVisible && !hasRevealed ? `${index * 150}ms` : "0ms",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="method-step-circle">{index + 1}</div>
      <div className="method-step-content">
        <h3 className="method-step-title">{step.title}</h3>
        <p className="method-step-description">{step.description}</p>
      </div>
    </article>
  );
}

function MethodCta() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href="/appel"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "var(--space-16)",
        background: "linear-gradient(135deg, #1A3A5C 0%, #2E6B9E 100%)",
        color: "#ffffff",
        fontFamily: "var(--font-body)",
        fontWeight: 600,
        fontSize: "1.1rem",
        padding: "18px 44px",
        borderRadius: "12px",
        border: "none",
        cursor: "pointer",
        boxShadow: isHovered ? "var(--shadow-md)" : "var(--shadow-sm)",
        transform: isHovered ? "scale(1.08)" : undefined,
        transition: "all 0.3s ease",
        textDecoration: "none",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      Réserver un appel →
    </Link>
  );
}

export default function Method() {
  return (
    <section className="method">
      <div className="method-container">
        <div className="method-separator" />

        <p className="method-label">NOTRE MÉTHODE</p>
        <h2 className="method-heading">
          De votre brief à votre première campagne.
        </h2>

        <div className="method-timeline" style={{ gap: 0 }}>
          {steps.map((step, index) => (
            <div key={step.title}>
              <MethodStepCard step={step} index={index} />
              {index < steps.length - 1 && (
                <div
                  aria-hidden="true"
                  style={{
                    width: 2,
                    height: "var(--space-4)",
                    marginLeft: timelineLineOffset,
                    background: "#e0ded7",
                  }}
                />
              )}
            </div>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <MethodCta />
        </div>
      </div>
    </section>
  );
}
