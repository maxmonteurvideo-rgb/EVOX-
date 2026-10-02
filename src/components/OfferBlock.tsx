import Link from "next/link";
import "./OfferBlock.css";

export default function OfferBlock() {
  return (
    <section className="offer">
      <div className="offer-frame">
        <div className="offer-card">
          <h2 className="offer-title">
            Analyse <span className="gradient-word">gratuite</span> de votre
            stratégie
            <br />
            de campagne <span className="gradient-word">Meta Ads</span>
          </h2>
          <p className="offer-questions">
            Votre dernière campagne n&apos;a pas marché ?
            <br />
            C&apos;est votre première fois sur Meta Ads ?
          </p>
          <p className="offer-promise">
            On analyse gratuitement votre{" "}
            <span className="gradient-word">business</span>.
          </p>
          <Link href="/appel" className="cta-primary offer-cta">
            Réserver un appel →
          </Link>
        </div>
      </div>
    </section>
  );
}
