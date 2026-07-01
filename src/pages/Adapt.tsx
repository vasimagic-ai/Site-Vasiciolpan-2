import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// 48 questions, 8 per profile (6 profiles)
const questions = [
  // Profile 1 — Workaholic (Q1-8)
  "Simt adesea că lucrurile trebuie făcute perfect sau deloc.",
  "Sunt mândru de faptul că sunt o persoană de încredere și organizată.",
  "Îmi este greu să mă relaxez până când toată treaba mea nu este terminată.",
  "Prețuiesc logica și structura mai mult decât izbucnirile emoționale.",
  "Îmi fac liste cu sarcini și simt o satisfacție mare când bifez lucrurile rezolvate.",
  "Mă simt vinovat dacă stau degeaba sau dacă pierd timpul.",
  "Efortul și munca asiduă sunt valorile mele fundamentale.",
  "Tind să planific viitorul în detaliu pentru a evita orice surpriză neplăcută.",

  // Profile 2 — Histrionic (Q9-16)
  "Tind să reacționez imediat la situații cu emoții puternice.",
  "Este foarte important pentru mine ca oamenii să mă placă și să îmi acorde atenție.",
  "Mă îngrijorează adesea ideea de a fi abandonat sau lăsat pe dinafară.",
  "Mă surprind distrându-i pe ceilalți pentru a menține o stare de spirit pozitivă.",
  "Când povestesc ceva, tind să folosesc gesturi largi și un ton dramatic pentru a capta atenția.",
  "Deciziile mele sunt bazate mai mult pe ceea ce simt pe moment decât pe logică rece.",
  "Simt nevoia constantă de reasigurare din partea partenerului sau a prietenilor.",
  "Mă atrag mediile sociale pline de viață, unde pot interacționa cu mulți oameni.",

  // Profile 3 — Paranoid (Q17-24)
  "Sunt precaut din fire și caut motive ascunse la ceilalți.",
  "Prefer să am toate faptele înainte de a-mi lua un angajament.",
  "Sunt foarte sensibil la problemele legate de putere și control.",
  "Observ detalii mici pe care ceilalți le trec adesea cu vederea.",
  "Nu-mi place să fiu luat prin surprindere; am nevoie de timp să analizez mediul.",
  "Sunt destul de rezervat în a-mi împărtăși gândurile până când nu am încredere totală.",
  "Gândirea mea este critică și pun la îndoială autoritatea dacă nu e bazată pe competență.",
  "Îmi place să fiu cu un pas înainte în orice situație socială.",

  // Profile 4 — Schizoid (Q25-32)
  "Adesea prefer lumea mea interioară în locul adunărilor sociale.",
  "Uneori mă simt mai degrabă ca un observator decât ca un participant la viață.",
  "Am nevoie de mult timp privat pentru a-mi reîncărca energia.",
  "Am o imaginație bogată și mă pierd adesea în gânduri.",
  "Dacă mă simt copleșit, prefer să mă retrag în tăcere decât să discut problema.",
  "Simt că majoritatea oamenilor sunt mult prea invazivi sau zgomotoși.",
  "Nu simt nevoia să mă conformez așteptărilor sociale obișnuite.",
  "Găsesc pacea în activități solitare precum cititul, visatul sau arta.",

  // Profile 5 — Antisocial (Q33-40)
  "Sunt bun la a citi oamenii și la a obține ceea ce vreau de la ei.",
  "Consider că regulile sunt mai degrabă sugestii dacă îmi stau în cale.",
  "Mă bucur de fiorul unei provocări sau al unei competiții.",
  "Pot fi foarte persuasiv și carismatic atunci când am nevoie.",
  "Mă plictisesc repede de rutină și caut mereu stimulare nouă.",
  "Cred că viața este un joc în care scopul este să fii învingător.",
  "Sunt dispus să risc dacă recompensa este pe măsură.",
  "Mă consider o persoană adaptabilă care se poate descurca în orice circumstanță.",

  // Profile 6 — Passive-Aggressive (Q41-48)
  "Când cineva îmi spune ce să fac, simt adesea nevoia să fac exact opusul.",
  "Folosesc umorul și sarcasmul pentru a face față figurilor de autoritate.",
  "Mă trezesc 'uitând' să fac lucruri pe care nu vreau să le fac.",
  "Îmi prețuiesc independența și urăsc să mă simt controlat.",
  "Sunt o persoană tenace și nu renunț ușor la punctul meu de vedere.",
  "Tind să las lucrurile pe ultimul moment ca un mod discret de a protesta.",
  "Dacă sunt forțat să fac ceva, voi găsi o cale să o fac în stilul meu propriu.",
  "Cred că viața este plină de lupte pentru putere și refuz să fiu cel dominat.",
];

interface Profile {
  id: string;
  name: string;
  emoji: string;
  color: string;
  tagline: string;
  description: string;
  strengths: string[];
  challenges: string[];
  coaching: string;
}

const profiles: Profile[] = [
  {
    id: "workaholic",
    name: "Workahoilcul",
    emoji: "📋",
    color: "#2B6CB0",
    tagline: "Responsabil, ordonat, orientat spre performanță",
    description:
      "Ești o persoană de nădejde, organizată și dedicată. Îți stabilești standarde înalte și lucrezi cu perseverență pentru a le atinge. Structura și planificarea sunt elementele tale de bază.",
    strengths: [
      "Disciplină și consecvență",
      "Atenție la detalii",
      "Fiabilitate și seriozitate",
      "Capacitate de planificare",
    ],
    challenges: [
      "Dificultatea de a te relaxa",
      "Tendința spre perfecționism paralizant",
      "Sentimentul de vinovăție în repaus",
      "Rigiditate față de schimbări neprevăzute",
    ],
    coaching:
      "Lucrul tău principal este să înveți că valoarea ta nu depinde exclusiv de productivitate. Odihna și jocul sunt la fel de esențiale ca munca.",
  },
  {
    id: "histrionic",
    name: "Dramaticul",
    emoji: "🎭",
    color: "#C05621",
    tagline: "Expresiv, emoțional, orientat spre conexiune",
    description:
      "Ești viu, expresiv și ai un talent natural de a conecta cu ceilalți. Emoțiile tale sunt intense și autentice. Ai nevoie de aprobare și de prezența celorlalți pentru a te simți bine.",
    strengths: [
      "Empatie și căldură umană",
      "Abilități sociale excepționale",
      "Creativitate și expresivitate",
      "Entuziasm contagios",
    ],
    challenges: [
      "Dependența de validarea celorlalți",
      "Decizii bazate pe emoții, nu pe logică",
      "Teama de abandon",
      "Dificultatea de a stabili limite sănătoase",
    ],
    coaching:
      "Provocarea ta este să înveți că ești suficient chiar și fără aplauzele celorlalți. Siguranța vine din interior, nu din exterior.",
  },
  {
    id: "paranoid",
    name: "Vigilentul",
    emoji: "🔍",
    color: "#276749",
    tagline: "Analitic, precaut, orientat spre adevăr",
    description:
      "Ești un gânditor critic, atent la detalii și foarte conștient de dinamicile de putere din jur. Nu acorzi ușor încrederea, dar odată câștigată, ești un aliat loial și profund.",
    strengths: [
      "Gândire critică ascuțită",
      "Atenție la semnale slabe",
      "Loialitate față de cei apropiați",
      "Capacitate de analiză profundă",
    ],
    challenges: [
      "Dificultatea de a acorda încredere",
      "Tendința de a vedea amenințări acolo unde nu sunt",
      "Supraanaliza situațiilor",
      "Tensiune relațională din cauza vigilenței",
    ],
    coaching:
      "Lucrul tău este să înveți că vulnerabilitatea nu este o slăbiciune. Încrederea selectivă, construită treptat, îți va aduce relații mai profunde.",
  },
  {
    id: "schizoid",
    name: "Solitarul",
    emoji: "🌙",
    color: "#553C9A",
    tagline: "Introvertit, reflexiv, orientat spre lumea interioară",
    description:
      "Ai o viață interioară bogată și prețuiești solitudinea ca pe un spațiu de reîncărcare și creație. Ești un observator fin al lumii și ai o profunzime rară a gândirii.",
    strengths: [
      "Creativitate și imaginație",
      "Autonomie și independență",
      "Profunzime a gândirii",
      "Calm și echilibru interior",
    ],
    challenges: [
      "Dificultatea de a te conecta emoțional",
      "Tendința de a te izola în momente dificile",
      "Sentimentul de alienare față de ceilalți",
      "Dificultatea de a cere ajutor",
    ],
    coaching:
      "Provocarea ta este să descoperi că conexiunea cu ceilalți nu îți amenință spațiul interior, ci îl poate îmbogăți.",
  },
  {
    id: "antisocial",
    name: "Competitorul",
    emoji: "⚡",
    color: "#9B2335",
    tagline: "Carismatic, strategic, orientat spre câștig",
    description:
      "Ești un strateg natural, carismatic și cu o energie puternică. Îți place provocarea, competiția și să fii în avantaj. Ai capacitatea de a citi oamenii și situațiile cu o acuratețe remarcabilă.",
    strengths: [
      "Carisma și putere de persuasiune",
      "Curaj și apetit pentru risc",
      "Adaptabilitate rapidă",
      "Capacitate de leadership natural",
    ],
    challenges: [
      "Tendința de a manipula pentru a obține ce vrei",
      "Dificultatea de a respecta regulile",
      "Plictiseala rapidă și nevoia de stimulare",
      "Relații superficiale din cauza neîncrederii",
    ],
    coaching:
      "Lucrul tău este să îți canalizezi energia competitivă spre scopuri care îți aduc satisfacție reală, nu doar victorii temporare.",
  },
  {
    id: "passive-aggressive",
    name: "Rebelul",
    emoji: "🔥",
    color: "#744210",
    tagline: "Independent, tenace, orientat spre autonomie",
    description:
      "Ai o nevoie profundă de autonomie și o aversiune naturală față de control. Ești tenace, ai un simț puternic al dreptății și refuzi să fii dominat. Rezistența ta este o formă de integritate.",
    strengths: [
      "Independență și autenticitate",
      "Tenacitate și perseverență",
      "Simț al dreptății",
      "Creativitate în găsirea propriilor căi",
    ],
    challenges: [
      "Tendința de a rezista chiar și când nu e necesar",
      "Procrastinare ca formă de protest",
      "Conflicte frecvente cu autoritatea",
      "Dificultatea de a coopera",
    ],
    coaching:
      "Provocarea ta este să distingi între rezistența sănătoasă, care te protejează, și cea care te sabotează. Autonomia reală vine din alegere conștientă, nu din reacție.",
  },
];

const TOTAL = questions.length; // 48
const PER_PROFILE = 8;

export default function Adapt() {
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(TOTAL).fill(null)
  );
  const [current, setCurrent] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const answered = answers.filter((a) => a !== null).length;
  const progress = Math.round((answered / TOTAL) * 100);

  const handleAnswer = (value: number) => {
    const updated = [...answers];
    updated[current] = value;
    setAnswers(updated);
    if (current < TOTAL - 1) {
      setTimeout(() => setCurrent((c) => c + 1), 300);
    }
  };

  const computeScores = () => {
    return profiles.map((_, i) => {
      const slice = answers.slice(i * PER_PROFILE, (i + 1) * PER_PROFILE);
      return slice.reduce((sum: number, v) => sum + (v ?? 0), 0);
    });
  };

  const handleFinish = () => setShowResults(true);
  const handleRestart = () => {
    setAnswers(Array(TOTAL).fill(null));
    setCurrent(0);
    setShowResults(false);
  };

  if (showResults) {
    const scores = computeScores();
    const maxScore = Math.max(...scores);
    const dominantIdx = scores.indexOf(maxScore);
    const dominant = profiles[dominantIdx];

    return (
      <main className="adapt-test-page">
        <motion.div
          className="adapt-results"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="adapt-results-hero">
            <span className="adapt-results-emoji">{dominant.emoji}</span>
            <h1 className="adapt-results-title">Profilul tău dominant</h1>
            <h2
              className="adapt-results-profile-name"
              style={{ color: dominant.color }}
            >
              {dominant.name}
            </h2>
            <p className="adapt-results-tagline">{dominant.tagline}</p>
          </div>

          <div className="adapt-scores-bars">
            {profiles.map((p, i) => (
              <div key={p.id} className="adapt-score-row">
                <span className="adapt-score-label">
                  {p.emoji} {p.name}
                </span>
                <div className="adapt-score-bar-track">
                  <motion.div
                    className="adapt-score-bar-fill"
                    style={{ backgroundColor: p.color }}
                    initial={{ width: 0 }}
                    animate={{ width: `${(scores[i] / 40) * 100}%` }}
                    transition={{ duration: 0.8, delay: i * 0.1 }}
                  />
                </div>
                <span className="adapt-score-number">{scores[i]}/40</span>
              </div>
            ))}
          </div>

          <div className="adapt-results-card">
            <p className="adapt-results-description">{dominant.description}</p>

            <div className="adapt-results-cols">
              <div>
                <h3 className="adapt-results-col-title">✅ Puncte forte</h3>
                <ul className="adapt-results-list">
                  {dominant.strengths.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="adapt-results-col-title">⚠️ Provocări</h3>
                <ul className="adapt-results-list">
                  {dominant.challenges.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="adapt-results-coaching">
              <h3 className="adapt-results-col-title">🧭 Mesaj de coaching</h3>
              <p>{dominant.coaching}</p>
            </div>
          </div>

          <div className="adapt-results-cta">
            <a href="/contact?program=sesiune-coaching-individuala" className="btn-primary">
              Vorbește cu Vasi despre rezultatele tale
            </a>
            <button onClick={handleRestart} className="btn-outline" style={{ marginTop: "0.75rem" }}>
              Reia testul
            </button>
          </div>

          <p className="adapt-results-quote">
            „Înțelegerea este primul pas către transformare." — Vasi Ciolpan
          </p>
        </motion.div>
      </main>
    );
  }

  const allAnswered = answers.every((a) => a !== null);

  return (
    <main className="adapt-test-page">
      <div className="adapt-test-header">
        <h1 className="adapt-test-title">Testul ADAPT</h1>
        <p className="adapt-test-subtitle">
          {answered} din {TOTAL} întrebări
        </p>
        <div className="adapt-progress-track">
          <motion.div
            className="adapt-progress-fill"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <div className="adapt-test-body">
        {/* Question navigator dots */}
        <div className="adapt-question-nav">
          {questions.map((_, i) => (
            <button
              key={i}
              className={`adapt-dot${i === current ? " adapt-dot--active" : ""}${answers[i] !== null ? " adapt-dot--answered" : ""}`}
              onClick={() => setCurrent(i)}
              aria-label={`Întrebarea ${i + 1}`}
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="adapt-question-card"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.25 }}
          >
            <p className="adapt-question-number">Întrebarea {current + 1}</p>
            <p className="adapt-question-text">{questions[current]}</p>

            <div className="adapt-scale">
              <span className="adapt-scale-label">Deloc</span>
              <div className="adapt-scale-buttons">
                {[1, 2, 3, 4, 5].map((val) => (
                  <button
                    key={val}
                    className={`adapt-scale-btn${answers[current] === val ? " adapt-scale-btn--selected" : ""}`}
                    onClick={() => handleAnswer(val)}
                  >
                    {val}
                  </button>
                ))}
              </div>
              <span className="adapt-scale-label">Total</span>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="adapt-nav-buttons">
          <button
            className="btn-outline"
            onClick={() => setCurrent((c) => Math.max(0, c - 1))}
            disabled={current === 0}
          >
            ← Înapoi
          </button>
          {current < TOTAL - 1 ? (
            <button
              className="btn-primary"
              onClick={() => setCurrent((c) => c + 1)}
            >
              Înainte →
            </button>
          ) : (
            <button
              className="btn-primary"
              onClick={handleFinish}
              disabled={!allAnswered}
              title={!allAnswered ? "Răspunde la toate întrebările pentru a vedea rezultatele" : ""}
            >
              Vezi rezultatele
            </button>
          )}
        </div>

        {!allAnswered && current === TOTAL - 1 && (
          <p className="adapt-missing-note">
            Mai ai {TOTAL - answered} întrebări fără răspuns. Poți naviga prin
            punctele de mai sus.
          </p>
        )}
      </div>
    </main>
  );
}
