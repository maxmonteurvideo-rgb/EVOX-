import "./Testimonials.css";

const testimonials = [
  {
    quote:
      "Professionnel, sympathique et patient. Un plaisir de travailler ensemble sur mes vidéos.",
    name: "Vincent",
    role: "Vidéaste",
    initials: "V",
  },
  {
    quote:
      "Je cherchais du motion design premium pour mes réseaux et une VSL. Totalement ravi, on continue de travailler ensemble.",
    name: "Manael",
    role: "Formateur",
    initials: "M",
  },
  {
    quote:
      "Très à l'écoute, toujours dans les délais même en urgence. Je recommande vivement.",
    name: "Boris",
    role: "Artisan · France",
    initials: "B",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-separator" />

        <p className="testimonials-label">CE QUE NOS CLIENTS DISENT</p>
        <h2 className="testimonials-heading">
          Des résultats concrets, des clients satisfaits.
        </h2>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="testimonials-card">
              <p className="testimonials-quote-mark">&ldquo;</p>
              <p className="testimonials-quote">{testimonial.quote}</p>
              <div className="testimonials-author">
                <div className="testimonials-avatar">{testimonial.initials}</div>
                <div className="testimonials-author-info">
                  <p className="testimonials-name">{testimonial.name}</p>
                  <p className="testimonials-role">{testimonial.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
