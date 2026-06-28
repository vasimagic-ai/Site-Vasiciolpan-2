import React from "react";

interface Testimonial {
  name: string;
  role: string;
  text: string;
  stars: number;
}

const testimonials: Testimonial[] = [
  {
    name: "David Birtaș",
    role: "Antreprenor",
    text: "Vasile m-a convins din prima! Se zice ca viata se schimba in functie de intrebarile care ti le pui. Cand ramai fara intrebari bune, Vasile stie ce sa te intrebe. Iar raspunsul este de cele mai multe ori revelator pentru situatia in care te afli.",
    stars: 5,
  },
  {
    name: "Marian Opran",
    role: "Formator Magic-Coaching",
    text: "Vasi este unul dintre primii absolvenți ai școlii de coaching pe care am lansat-o în 2016. Încă de la început am fost surprins de entuziasmul pe care un om cu experiența lui de viață îl avea pentru a se cunoaște și a-și crește performanța.",
    stars: 5,
  },
  {
    name: "Diana G",
    role: "Nutriționist",
    text: "Vasi este coachul nostru de familie! Eu și soțul meu avem o familie superbă, împlinită și avem trei copilași sănătoși și ne iubim tare mult. Vasi ne-a ajutat foarte mult în perioadele mai puțin frumoase din viața noastră pe care le-am depășit cu succes.",
    stars: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="star-rating">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="star">
          ★
        </span>
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="testimonial-card">
      <StarRating count={testimonial.stars} />
      <p className="testimonial-text">"{testimonial.text}"</p>
      <div className="testimonial-author">
        <span className="testimonial-name">{testimonial.name}</span>
        <span className="testimonial-role">{testimonial.role}</span>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      {/* other sections */}

      <section className="testimonials-section">
        <h2 className="testimonials-title">Ce spun clienții mei</h2>
        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>
      </section>
    </main>
  );
}
