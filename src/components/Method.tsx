"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import "./Method.css";

/*
 * `image` : chemin du visuel 3D dans /public (ex. "/images/process/01-analyse.png").
 * Laisser vide → visuel provisoire (halo bleu + numéro).
 */
const steps = [
  {
    title: "Analyse de marché",
    description:
      "On étudie votre secteur, vos concurrents et ce qui fonctionne dans votre niche.",
    image: "/images/process/01-meta.webp",
  },
  {
    title: "Avatar client",
    description:
      "On définit précisément qui vous ciblez — leurs besoins, leurs objections, leurs habitudes.",
    image: "/images/process/02-avatar.webp",
  },
  {
    title: "Script orienté conversion",
    description:
      "On écrit pour convertir, pas pour faire joli. Chaque mot a un objectif.",
    image: "/images/process/03-script.webp",
  },
  {
    title: "Tournage",
    description:
      "On planifie chaque plan pour maximiser l'impact en un minimum de temps.",
    image: "/images/process/04-tournage.webp",
  },
  {
    title: "Montage optimisé Meta Ads",
    description:
      "Post-production à la hauteur de votre marque. Sound design, étalonnage, motion.",
    image: "/images/process/05-montage.webp",
  },
  {
    title: "Livraison & suivi",
    description:
      "On mesure les résultats, on ajuste, on améliore. Votre performance est notre priorité.",
    image: "/images/process/06-livraison.webp",
  },
];

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Apparaît quand le panneau est bien entré à l'écran…
        if (entry.intersectionRatio >= 0.4) setVisible(true);
        // …et se réinitialise une fois complètement sorti, pour rejouer au prochain passage
        else if (!entry.isIntersecting) setVisible(false);
      },
      { threshold: [0, 0.4], rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

function StepPanel({
  step,
  index,
}: {
  step: (typeof steps)[number];
  index: number;
}) {
  const { ref, visible } = useReveal<HTMLElement>();
  const reverse = index % 2 === 1;

  return (
    <article
      ref={ref}
      className={`process-panel ${reverse ? "process-panel--reverse" : ""} ${
        visible ? "is-visible" : ""
      }`}
    >
      <div className="process-visual">
        {step.image ? (
          <div className="process-float">
            <div className="process-float-object">
              <Image
                src={step.image}
                alt=""
                fill
                sizes="(max-width: 767px) 80vw, 40vw"
                className="process-image"
              />
            </div>
            <div className="process-float-shadow" aria-hidden="true" />
          </div>
        ) : (
          <div className="process-placeholder" aria-hidden="true">
            <span>{String(index + 1).padStart(2, "0")}</span>
          </div>
        )}
      </div>

      <div className="process-card">
        <div className="process-number">{index + 1}</div>
        <div>
          <h3 className="process-title">{step.title}</h3>
          <p className="process-description">{step.description}</p>
        </div>
      </div>
    </article>
  );
}

export default function Method() {
  return (
    <section className="process" id="methode">
      <h2 className="process-heading">Du brief à votre campagne</h2>
      {steps.map((step, index) => (
        <StepPanel key={step.title} step={step} index={index} />
      ))}
    </section>
  );
}
