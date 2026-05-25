import Link from "next/link";
import "./CTAFinal.css";

export default function CTAFinal() {
  return (
    <section className="cta-final">
      <h2 className="cta-final-heading">
        Prêt à créer des publicités qui convertissent ?
      </h2>
      <p className="cta-final-subtext">
        Réservez un appel stratégique gratuit. On analyse votre situation et on
        vous propose un plan d&apos;action concret.
      </p>
      <Link href="/appel" className="cta-final-button">
        Réserver un appel →
      </Link>
    </section>
  );
}
