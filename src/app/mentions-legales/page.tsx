import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import "@/components/legal/legal.css";

export const metadata: Metadata = {
  title: "Mentions légales — EVOX",
  description: "Informations légales relatives au site EVOX.",
};

export default function MentionsLegales() {
  return (
    <>
      <main className="legal-page">
        <div className="legal-container">
          <p className="legal-label">Informations légales</p>
          <h1 className="legal-title">Mentions légales</h1>
          <p className="legal-updated">Dernière mise à jour : octobre 2026</p>

          <h2>Éditeur du site</h2>
          <div className="legal-card">
            <dl>
              <dt>Nom commercial</dt>
              <dd>EVOX</dd>
              <dt>Exploitant</dt>
              <dd>Maxence Guerin, personne physique</dd>
              <dt>Adresse</dt>
              <dd>Rue du Fosteau 36, 6530 Thuin, Belgique</dd>
              <dt>Numéro d&apos;entreprise (BCE)</dt>
              <dd>1017.672.431</dd>
              <dt>TVA</dt>
              <dd>
                Régime particulier de la franchise des petites entreprises — TVA
                non applicable
              </dd>
              <dt>E-mail</dt>
              <dd>
                <a href="mailto:contact.evox.production@gmail.com">
                  contact.evox.production@gmail.com
                </a>
              </dd>
              <dt>Responsable de la publication</dt>
              <dd>Maxence Guerin</dd>
            </dl>
          </div>

          <h2>Hébergement</h2>
          <p>
            Le site est hébergé par Vercel Inc., 440 N Barranca Ave #4133,
            Covina, CA 91723, États-Unis —{" "}
            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
              vercel.com
            </a>
            .
          </p>

          <h2>Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble des contenus de ce site (textes, visuels, vidéos,
            logo EVOX, mise en page) est protégé par le droit d&apos;auteur.
            Toute reproduction ou réutilisation sans autorisation écrite
            préalable est interdite. Les vidéos présentées ont été réalisées
            pour nos clients et sont diffusées avec leur accord. Les marques et
            logos de tiers cités restent la propriété de leurs titulaires
            respectifs.
          </p>

          <h2>Responsabilité</h2>
          <p>
            EVOX s&apos;efforce de fournir des informations exactes et à jour,
            sans pouvoir garantir l&apos;absence d&apos;erreur. Les résultats
            présentés concernent des projets précis et ne constituent pas une
            garantie de résultat pour d&apos;autres campagnes.
          </p>

          <h2>Données personnelles et cookies</h2>
          <p>
            Le traitement de vos données et l&apos;usage des cookies sont décrits
            dans notre{" "}
            <Link href="/confidentialite">politique de confidentialité</Link>.
          </p>

          <h2>Droit applicable</h2>
          <p>
            Le présent site est soumis au droit belge. Tout litige relève de la
            compétence des juridictions belges.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
