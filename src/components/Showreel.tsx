"use client";

import { useIsMobile } from "./useIsMobile";
import "./Showreel.css";

/*
 * Vidéos hébergées sur le site : déposer les MP4 compressés dans /public/videos/.
 * Export sans piste audio — H.264, 720x1280, < 10 Mo par vidéo.
 */
const videos = [
  { client: "Yomi Denzel", src: "/videos/1.mp4", caseId: "cas-1" },
  { client: "Manael Posing", src: "/videos/2.mp4", caseId: "cas-2" },
  { client: "Pharmacie", src: "/videos/3.mp4", caseId: "cas-3" },
];

export default function Showreel() {
  // Sur mobile, les vidéos sont affichées à côté de chaque cas client (CaseStudies)
  const isMobile = useIsMobile();

  return (
    <section className="showreel">
      <div className="showreel-container">
        <p className="showreel-label">VOTRE SECTEUR, NOTRE EXPERTISE</p>
        <h2
          className="showreel-heading"
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            background: "linear-gradient(135deg, #5AAED6 0%, #0B1D33 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "transparent",
            textShadow: "0 0 40px rgba(90, 174, 214, 0.15)",
          }}
        >
          Imaginez votre prochaine publicité.
        </h2>

        <div className="showreel-grid">
          {!isMobile && videos.map((video) => (
            <article key={video.src} className="showreel-item">
              <div className="showreel-frame">
                <div className="showreel-video">
                  <video
                    src={`${video.src}#t=0.1`}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-label={`Publicité Meta — ${video.client}`}
                  />
                </div>
              </div>
              <p className="showreel-client">{video.client}</p>
              <a href={`#${video.caseId}`} className="showreel-case-link">
                Voir le cas client ↓
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
