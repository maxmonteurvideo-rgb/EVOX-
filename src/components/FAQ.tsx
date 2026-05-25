"use client";

import { useId, useRef, useState } from "react";
import "./FAQ.css";

const faqItems = [
  {
    question: "Combien de vidéos sont nécessaires pour une campagne Meta ?",
    answer:
      "En Meta Ads, le volume est aussi important que la qualité. On recommande un minimum de 3 à 5 déclinaisons créatives pour tester, itérer et identifier ce qui performe le mieux auprès de votre audience. C'est cette approche qui fait la différence entre une campagne qui stagne et une campagne qui scale.",
  },
  {
    question: "Quel est le délai de livraison ?",
    answer:
      "En moyenne, comptez 10 à 14 jours entre le brief et la livraison finale. Pour les projets urgents, on peut accélérer le processus — à discuter au cas par cas.",
  },
  {
    question: "Est-ce que vous intervenez en dehors de la Belgique ?",
    answer:
      "On intervient en Belgique, en France et en Suisse. Pour les projets dans d'autres zones, on s'adapte au cas par cas — contactez-nous pour en discuter.",
  },
  {
    question: "Je n'ai aucune idée de ce que je veux, c'est un problème ?",
    answer:
      "Au contraire. Notre méthode commence par l'analyse de votre marché et de votre avatar client. On construit le script et la stratégie créative ensemble — vous n'avez pas besoin d'arriver avec un brief tout prêt.",
  },
  {
    question: "Et si le résultat ne me convient pas ?",
    answer:
      "On travaille avec des validations à chaque étape — script, rushes, montage. Vous avez un droit de regard permanent. On ne livre jamais un produit fini sans votre accord.",
  },
];

function ChevronIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      className={`faq-chevron ${isOpen ? "open" : ""}`}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M4 6L8 10L12 6"
        stroke="#3D5A80"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const contentId = useId();
  const answerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="faq-item">
      <button
        type="button"
        className="faq-question"
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span>{question}</span>
        <ChevronIcon isOpen={isOpen} />
      </button>
      <div
        id={contentId}
        className="faq-answer-wrapper"
        style={{
          maxHeight: isOpen ? `${answerRef.current?.scrollHeight ?? 0}px` : "0px",
        }}
      >
        <div ref={answerRef}>
          <p className="faq-answer">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="faq">
      <div className="faq-container">
        <div className="faq-separator" />

        <p className="faq-label">QUESTIONS FRÉQUENTES</p>
        <h2 className="faq-heading">Tout ce que vous devez savoir.</h2>

        <div className="faq-list">
          {faqItems.map((item) => (
            <FAQItem
              key={item.question}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
