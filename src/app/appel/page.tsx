import "./appel.css";

const steps = [
  {
    title: "On découvre votre activité",
    description:
      "Votre marché, vos clients, vos objectifs. On écoute avant de proposer.",
  },
  {
    title: "On identifie les opportunités",
    description:
      "On analyse ce qui fonctionne dans votre secteur et ce qu'on peut exploiter pour vous.",
  },
  {
    title: "On vous propose un plan",
    description:
      "Si ça matche, on vous présente une recommandation concrète. Sinon, on se quitte bons amis.",
  },
];

export default function AppelPage() {
  return (
    <main className="appel-page">
      <div className="appel-container">
        <div className="appel-grid">
          <div className="appel-content">
            <p className="appel-label">VOTRE APPEL STRATÉGIQUE</p>
            <h1 className="appel-heading">
              30 minutes pour poser les bases de votre prochaine campagne.
            </h1>
            <p className="appel-subtext">
              Cet appel est gratuit et sans engagement. On prend le temps de
              comprendre votre activité avant de vous proposer quoi que ce
              soit.
            </p>

            <div className="appel-steps">
              {steps.map((step, index) => (
                <div key={step.title} className="appel-step">
                  <div className="appel-step-number">{index + 1}</div>
                  <div>
                    <p className="appel-step-title">{step.title}</p>
                    <p className="appel-step-description">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="appel-calendly">
            <iframe
              src="https://calendly.com/contact-evox-production/30min"
              width="100%"
              height="700"
              frameBorder="0"
              style={{ borderRadius: "16px", minHeight: "650px" }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
