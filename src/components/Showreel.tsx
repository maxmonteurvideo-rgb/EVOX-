import "./Showreel.css";

const videos = [
  {
    title: "Agent immobilier",
    subtitle: "Vidéo publicitaire · Meta Ads",
    src: "https://www.youtube.com/embed/sA5VdW5U2bI?autoplay=1&mute=1&loop=1&playlist=sA5VdW5U2bI&controls=0&showinfo=0&rel=0",
  },
  {
    title: "Artisan & expert-comptable",
    subtitle: "Vidéo publicitaire · Meta Ads",
    src: "https://www.youtube.com/embed/bJrYWS29zqc?autoplay=1&mute=1&loop=1&playlist=bJrYWS29zqc&controls=0&showinfo=0&rel=0",
  },
  {
    title: "Formateur en posing",
    subtitle: "Vidéo publicitaire · Meta Ads",
    src: "https://www.youtube.com/embed/D_BgHUrSn88?autoplay=1&mute=1&loop=1&playlist=D_BgHUrSn88&controls=0&showinfo=0&rel=0",
  },
];

export default function Showreel() {
  return (
    <section className="showreel">
      <div className="showreel-container">
        <div className="showreel-separator" />

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
          {videos.map((video) => (
            <article key={video.title} className="showreel-item">
              <div
                className="showreel-video"
                style={{
                  position: "relative",
                  width: "100%",
                  paddingBottom: "177.78%",
                }}
              >
                <iframe
                  src={video.src}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    borderRadius: "8px",
                  }}
                  title={video.title}
                />
              </div>
              <p className="showreel-title">{video.title}</p>
              <p className="showreel-subtitle">{video.subtitle}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
