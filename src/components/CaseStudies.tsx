"use client";

import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "./useIsMobile";
import "./CaseStudies.css";

/*
 * 3 cas clients.
 * EVOX vend la création (pas le media buying) → pas de ROAS affiché :
 * le bloc du bas liste ce qui a été livré.
 */
const cases = [
  {
    client: "Yomi Denzel",
    video: "/videos/1.mp4",
    sector: "Niche make money",
    objective: "Campagne d'ads pour promouvoir Winning, un générateur de business.",
    work: "Montage premium orienté Meta Ads.",
    deliverables: ["Montage premium", "Format Meta Ads"],
  },
  {
    client: "Manael Posing",
    video: "/videos/2.mp4",
    sector: "Coach posing",
    objective:
      "Vendre un accompagnement posing pour décrocher sa pro card IFBB.",
    work: "Campagne de 24 ads : création de la DA et montage premium orienté Meta Ads.",
    deliverables: ["24 ads", "Direction artistique", "Montage premium"],
  },
  {
    client: "Pharmacie",
    video: "/videos/3.mp4",
    sector: "Vente en ligne",
    objective: "Vendre un accompagnement à d'autres pharmacies.",
    work: "Campagne complète, de l'avatar client jusqu'à la diffusion.",
    deliverables: ["Avatar client", "Tournage", "Montage", "Media buying"],
  },
];

/* Flèche fine, extrémités rondes : tracée au fil du scroll (effet « réduire les tracés ») */
function Arrow({ progress }: { progress: number }) {
  // La tige se trace sur 0 → 0.8, la pointe sur 0.8 → 1
  const shaft = Math.min(progress / 0.8, 1);
  const head = Math.max(0, Math.min((progress - 0.8) / 0.2, 1));
  return (
    <svg className="cases-arrow" viewBox="0 0 24 140" aria-hidden="true">
      <path
        d="M12 4 L12 128"
        pathLength={1}
        strokeDasharray="1"
        strokeDashoffset={1 - shaft}
      />
      <path
        d="M4 119 L12 129 L20 119"
        pathLength={1}
        strokeDasharray="1"
        strokeDashoffset={1 - head}
      />
    </svg>
  );
}

function CaseCard({
  c,
  i,
  isMobile,
}: {
  c: (typeof cases)[number];
  i: number;
  isMobile: boolean;
}) {
  // On observe un conteneur non transformé (la carte elle-même passe par scale(0))
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.35) setInView(true);
        // Complètement sortie de l'écran → reset, l'animation rejouera au prochain passage
        else if (!entry.isIntersecting) setInView(false);
      },
      { threshold: [0, 0.35] },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="case-slot">
      {isMobile && (
        <div className={`case-mobile-video ${inView ? "is-in" : ""}`}>
          <video
            src={`${c.video}#t=0.1`}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={`Publicité Meta — ${c.client}`}
          />
        </div>
      )}
      <article
        id={`cas-${i + 1}`}
        className={`case ${inView ? "is-in" : ""}`}
        style={{ animationDelay: inView ? `${i * 120}ms` : undefined }}
      >
        <header className="case-header">
          <div className="case-logo" aria-hidden="true">
            <span>{i + 1}</span>
          </div>
          <div>
            <p className="case-sector">{c.sector}</p>
            <h3 className="case-client">{c.client}</h3>
          </div>
        </header>

        <dl className="case-points">
          <div>
            <dt>Objectif</dt>
            <dd>{c.objective}</dd>
          </div>
          <div>
            <dt>Ce qu&apos;on a fait</dt>
            <dd>{c.work}</dd>
          </div>
        </dl>

        <div className="case-result">
          <p className="case-result-label">Livré</p>
          <ul className="case-tags">
            {c.deliverables.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </div>
      </article>
    </div>
  );
}

export default function CaseStudies() {
  const isMobile = useIsMobile();
  const arrowsRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = arrowsRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setProgress(1);
      return;
    }
    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 quand le haut des flèches entre en bas d'écran, 1 quand leur bas atteint ~45 % de l'écran
      const start = vh * 0.95;
      const end = vh * 0.45;
      const p = (start - rect.top) / (start - end + rect.height);
      setProgress(Math.max(0, Math.min(1, p)));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="cases" id="cas-clients">
      <div className="cases-container">
        <div className="cases-arrows" ref={arrowsRef}>
          {cases.map((c) => (
            <div key={c.client} className="cases-arrow-cell">
              <Arrow progress={progress} />
            </div>
          ))}
        </div>

        <div className="cases-list">
          {cases.map((c, i) => (
            <CaseCard key={c.client} c={c} i={i} isMobile={isMobile} />
          ))}
        </div>
      </div>
    </section>
  );
}
