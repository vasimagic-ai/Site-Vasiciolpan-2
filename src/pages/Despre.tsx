import React from "react";
import HeartMapSVG from "../components/HeartMapSVG";

const certifications = [
  "HeartMapping™ Certified Coach",
  "Metodologia ADAPT",
  "Specialist în activitatea de coaching (acreditat ANC)",
  "HeartMapping Mindfulness Practitioner",
  "Coach acreditat ICA Agile (din 2018)",
];

export default function Despre() {
  return (
    <main className="despre-page">
      <section className="despre-hero">
        <div className="despre-content">
          <div className="despre-bio">
            <h1 className="despre-title">Despre mine</h1>

            <p className="despre-text">
              Sunt Vasi Ciolpan – om, coach, tată. Și, da, zâmbesc când spun
              asta pentru că mă definesc ca „om", în toată accepțiunea
              cuvântului – cu slăbiciuni și tipare, cu aspirații și eforturi
              pentru atingerea lor.
            </p>

            <p className="despre-text">
              Sunt coach acreditat din 2018 și lucrez cu oamenii în această
              calitate de aproximativ 4 ani. Mă definește acest rol pentru că,
              în fapt, dintotdeauna mi-a plăcut să lucrez cu oamenii și am
              făcut-o, din pozițiile pe care le-am ocupat în decursul vieții
              mele profesionale.
            </p>

            <p className="despre-text">
              Sunt coach, cu certitudinea și bucuria de a-mi fi împlinit menirea
              și de a fi găsit acel stil propriu de lucru, care a dat rezultate
              de fiecare dată, în procesele transformaționale cu cei cu care
              lucrez.
            </p>

            <div className="despre-certifications">
              <h2 className="despre-certifications-title">Certificări</h2>
              <ul className="despre-certifications-list">
                {certifications.map((cert) => (
                  <li key={cert} className="despre-certifications-item">
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="despre-visual">
            <HeartMapSVG />
          </div>
        </div>
      </section>
    </main>
  );
}
