import type { Metadata } from "next";
import Footer from "@/components/Footer";
import "@/components/legal/legal.css";

export const metadata: Metadata = {
  title: "Politique de confidentialité — EVOX",
  description: "Comment EVOX traite vos données personnelles et utilise les cookies.",
};

export default function Confidentialite() {
  return (
    <>
      <main className="legal-page">
        <div className="legal-container">
          <p className="legal-label">Vos données</p>
          <h1 className="legal-title">Politique de confidentialité</h1>
          <p className="legal-updated">Dernière mise à jour : octobre 2026</p>

          <h2>Responsable du traitement</h2>
          <p>
            Maxence Guerin (EVOX), Rue du Fosteau 36, 6530 Thuin, Belgique — BCE
            1017.672.431 — {" "}
            <a href="mailto:contact.evox.production@gmail.com">
              contact.evox.production@gmail.com
            </a>
            .
          </p>

          <h2>Données collectées</h2>
          <ul>
            <li>
              <strong>Réservation d&apos;un appel</strong> : nom, adresse
              e-mail et informations que vous indiquez dans le formulaire de
              réservation.
            </li>
            <li>
              <strong>Prise de contact par e-mail</strong> : votre adresse
              e-mail et le contenu de votre message.
            </li>
          </ul>
          <p>
            Le site n&apos;utilise aucun outil de mesure d&apos;audience ni de
            publicité.
          </p>

          <h2>Pourquoi et sur quelle base</h2>
          <p>
            Ces données servent uniquement à organiser l&apos;appel, à vous
            répondre et, le cas échéant, à vous faire une proposition
            commerciale. La base légale est votre demande (mesures
            précontractuelles) et notre intérêt légitime à répondre aux
            demandes reçues. Elles ne sont jamais vendues ni utilisées pour
            de la prospection sans votre accord.
          </p>

          <h2>Durée de conservation</h2>
          <p>
            Les données des prospects sont conservées au maximum 3 ans après le
            dernier contact. Celles des clients sont conservées pendant la
            relation commerciale, puis le temps imposé par les obligations
            comptables et fiscales.
          </p>

          <h2>Destinataires et sous-traitants</h2>
          <ul>
            <li>
              <strong>Calendly</strong> (Calendly LLC, États-Unis) : outil de
              réservation des appels.
            </li>
            <li>
              <strong>Google</strong> (Gmail) : messagerie.
            </li>
            <li>
              <strong>Vercel</strong> (Vercel Inc., États-Unis) : hébergement
              du site.
            </li>
          </ul>
          <p>
            Certains de ces prestataires peuvent traiter des données hors de
            l&apos;Union européenne, dans le cadre des garanties prévues par le
            RGPD (clauses contractuelles types ou cadre de protection des
            données UE–États-Unis).
          </p>

          <h2>Cookies</h2>
          <p>
            Le site EVOX ne dépose aucun cookie de mesure d&apos;audience ou de
            publicité. Le calendrier de réservation de la page « Réserver un
            appel » est fourni par Calendly, qui utilise ses propres cookies.
            Il n&apos;est chargé que lorsque vous cliquez sur « Afficher le
            calendrier » : sans ce clic, aucun cookie Calendly n&apos;est
            déposé. Pour en savoir plus, consultez la{" "}
            <a
              href="https://calendly.com/legal/cookie-notice"
              target="_blank"
              rel="noopener noreferrer"
            >
              politique de cookies de Calendly
            </a>
            .
          </p>

          <h2>Vos droits</h2>
          <p>
            Vous pouvez à tout moment demander l&apos;accès, la rectification ou
            la suppression de vos données, vous opposer à leur traitement ou en
            demander la portabilité, en écrivant à{" "}
            <a href="mailto:contact.evox.production@gmail.com">
              contact.evox.production@gmail.com
            </a>
            . Vous pouvez aussi introduire une réclamation auprès de
            l&apos;Autorité de protection des données (
            <a
              href="https://www.autoriteprotectiondonnees.be"
              target="_blank"
              rel="noopener noreferrer"
            >
              autoriteprotectiondonnees.be
            </a>
            ).
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
