import React from "react";
import { Link } from "react-router-dom";

export default function HeartMapping() {
  return (
    <main className="heartmapping-page">
      <section className="heartmapping-hero">
        <h1 className="heartmapping-title">Metoda HeartMapping™</h1>
        <p className="heartmapping-subtitle">
          O hartă practică a felului în care iubești, alegi, reacționezi și te
          conectezi.
        </p>
      </section>

      <section className="heartmapping-content">
        {/* Method content goes here */}
      </section>

      <section className="heartmapping-faq-link">
        <Link to="/faq" className="heartmapping-faq-cta">
          Ai întrebări despre HeartMapping? Vezi FAQ-ul complet →
        </Link>
      </section>
    </main>
  );
}
