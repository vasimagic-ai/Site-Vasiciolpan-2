import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

const programLabels: Record<string, string> = {
  "hm-dating-diagnostic": "HeartMapping Dating – Diagnostic Emoțional",
  "hm-dating-relatie-cu-tine": "HeartMapping – Relația cu Tine",
  "hm-dating-lab-grup": "HeartMapping – Dating Lab",
  "hm-relatii-diagnostic": "HeartMapping Relații – Diagnostic Emoțional",
  "hm-relatii-cu-partenerul": "HeartMapping – Relația cu Partenerul",
  "hm-relatii-laborator-grup": "HeartMapping – Laboratorul de Relații",
  "sesiune-coaching-individuala": "Sesiune individuală de coaching",
  "pachet-5-sesiuni": "Pachet 5 sesiuni de coaching",
  "pachet-10-sesiuni": "Pachet 10 sesiuni de coaching",
  "sesiune-hipnoza": "Sesiune de hipnoză",
  "regresie-hipnotica": "Regresie Hipnotică",
  "core-transformation": "Core Transformation©",
};

interface FormData {
  nume: string;
  email: string;
  telefon: string;
  mesaj: string;
  program: string;
}

export default function Contact() {
  const [searchParams] = useSearchParams();
  const programParam = searchParams.get("program") ?? "";

  const [formData, setFormData] = useState<FormData>({
    nume: "",
    email: "",
    telefon: "",
    mesaj: "",
    program: programParam,
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // TODO: Send formData to backend or email service
    console.log("[Contact] Form submitted:", formData);

    // Simulate async submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const programLabel = programParam ? programLabels[programParam] ?? programParam : null;

  return (
    <main className="contact-page">
      <div className="contact-hero">
        <h1 className="contact-hero-title">Ia legătura cu mine</h1>
        <p className="contact-hero-subtitle">
          Completează formularul de mai jos și te voi contacta în cel mai scurt
          timp posibil.
        </p>
      </div>

      <div className="contact-form-section">
        {submitted ? (
          <div className="contact-success">
            <div className="contact-success-icon">✉️</div>
            <h2 className="contact-success-title">Mulțumesc!</h2>
            <p className="contact-success-text">
              Mesajul tău a fost trimis. Te voi contacta în curând.
            </p>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            {programLabel && (
              <div className="contact-program-banner">
                Program selectat: <strong>{programLabel}</strong>
              </div>
            )}

            <div className="form-field">
              <label htmlFor="nume" className="form-label">
                Nume<span className="form-required">*</span>
              </label>
              <input
                id="nume"
                name="nume"
                type="text"
                className="form-input"
                required
                placeholder="Numele tău"
                value={formData.nume}
                onChange={handleChange}
              />
            </div>

            <div className="form-field">
              <label htmlFor="email" className="form-label">
                Email<span className="form-required">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="form-input"
                required
                placeholder="email@exemplu.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-field">
              <label htmlFor="telefon" className="form-label">
                Telefon
              </label>
              <input
                id="telefon"
                name="telefon"
                type="tel"
                className="form-input"
                placeholder="+40 7xx xxx xxx"
                value={formData.telefon}
                onChange={handleChange}
              />
            </div>

            <div className="form-field">
              <label htmlFor="mesaj" className="form-label">
                Mesaj<span className="form-required">*</span>
              </label>
              <textarea
                id="mesaj"
                name="mesaj"
                className="form-textarea"
                required
                placeholder="Descrie pe scurt ce îți dorești să obții din colaborarea noastră..."
                value={formData.mesaj}
                onChange={handleChange}
              />
            </div>

            {/* Hidden program field */}
            <input type="hidden" name="program" value={formData.program} />

            <button
              type="submit"
              className="form-submit-btn"
              disabled={loading}
            >
              {loading ? "Se trimite..." : "Trimite mesajul"}
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
