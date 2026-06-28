import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const datingFAQ: FAQItem[] = [
  {
    question: "Ce este concret HeartMapping?",
    answer:
      "HeartMapping este un proces de clarificare relațională. Nu este doar un test de personalitate, ci o hartă practică a felului în care iubești, alegi, reacționezi și te conectezi. Te ajută să vezi ce emoție te conduce în relații, ce valori te hrănesc, ce adaptare de personalitate folosești ca să te protejezi și cum toate acestea îți influențează alegerile în dating. Nu ghicește partenerul ideal, ci te ajută să nu-l mai alegi greșit.",
  },
  {
    question: "Cu ce rămân efectiv la finalul procesului?",
    answer:
      "La final nu primești doar informații, ci direcție și criterii clare. Rămâi cu o hartă a emoțiilor tale dominante, o clarificare a valorilor tale reale (prin testul VIA Character), o înțelegere a adaptării tale de personalitate și pași concreți pentru un dating mai conștient. Ieși din proces cu un filtru real pentru a recunoaște compatibilitatea, nu doar chimia.",
  },
  {
    question: "Cum diferă HeartMapping de un test de personalitate sau de terapie?",
    answer:
      "Un test de personalitate îți spune „cum ești". HeartMapping îți arată „cum funcționezi în iubire" – ce te activează, ce te destabilizează și de ce alegi anumiți oameni. Față de terapie (care lucrează adesea cu vindecarea traumelor și a trecutului), HeartMapping se concentrează pe clarificarea structurii tale relaționale prezente și aplicarea ei imediată în alegerile tale romantice.",
  },
  {
    question: "De ce sunt valorile atât de importante în dating?",
    answer:
      "Atracția te apropie, dar valorile decid dacă poți rămâne. Poți avea chimie și dorință, dar dacă valorile voastre (legate de familie, libertate, adevăr, loialitate) sunt în conflict, relația va ceda exact în acele puncte. HeartMapping, folosind testul VIA Character, îți arată ce te hrănește cu adevărat și ce compromisuri te vor costa prea mult.",
  },
  {
    question: "Ce înseamnă că o emoție mă guvernează în relații?",
    answer:
      "Înseamnă că ai un filtru afectiv prin care citești oamenii. Emoția dominantă influențează pe cine alegi, de cine te temi, când te apropii și când te închizi. Dacă nu îți vezi emoția dominantă, ea te conduce (de exemplu, te agăți din frică sau te retragi din rușine). Dacă o cunoști, poți separa reacția de realitate și nu mai numești iubire tot ce îți atinge rana.",
  },
  {
    question: "De ce este important să-mi cunosc adaptarea de personalitate?",
    answer:
      "Adaptarea de personalitate îți arată cum ai învățat să supraviețuiești emoțional și să te protejezi. În dating, înainte să alegi un partener, trebuie să știi cine alege în tine: frica, nevoia de validare, mecanismul de apărare sau partea ta capabilă de relație matură. Cunoașterea adaptării te ajută să nu mai repeți tiparele dureroase.",
  },
  {
    question: "Cum aplic practic HeartMapping la primele întâlniri?",
    answer:
      "În loc să te întrebi doar „Oare mă place?", începi să observi: „Această persoană îmi hrănește valorile sau doar îmi activează o rană veche?" HeartMapping te ajută să pui întrebările potrivite, să recunoști rapid steagurile roșii emoționale, să nu te mai investești prea devreme și să alegi diferit, bazat pe compatibilitate reală, nu pe un familiar toxic.",
  },
];

const relatiiFAQ: FAQItem[] = [
  {
    question: "Ce este HeartMapping atunci când suntem deja într-o relație?",
    answer:
      "Este o busolă pentru a înțelege ce se întâmplă cu adevărat între voi. Vă ajută să vedeți de ce vă iubiți, dar vă blocați, și să descoperiți nevoile reale din spatele conflictelor repetitive. Este un instrument atât pentru cuplurile aflate în impas, cât și pentru cele care doresc să-și aprofundeze intimitatea și să construiască mai conștient.",
  },
  {
    question: "De ce ne-ar ajuta dacă noi deja știm de ce ne certăm?",
    answer:
      "Pentru că adesea vă certați pe simptome (timp, bani, ton, mesaje), dar problema reală este structura conflictului (unul nu se simte văzut, celălalt se simte invadat). HeartMapping vă arată nevoile de sub ceartă. Sub critică poate fi un dor de apropiere; sub retragere poate fi o teamă de atac. Când vedeți nevoia, încetați să vă mai luptați cu simptomul.",
  },
  {
    question: "Cum ne afectează relația dacă avem valori diferite?",
    answer:
      "Diferențele de valori pot crea tensiuni structurale profunde. Dacă unul prețuiește stabilitatea și altul spontaneitatea, sau unul caută adevărul direct și celălalt armonia cu orice preț, vă puteți răni fără să vreți. HeartMapping vă ajută să folosiți aceste informații nu pentru a vă judeca, ci pentru a vă înțelege și a echilibra nevoile amândurora.",
  },
  {
    question: "Cum se văd adaptările de personalitate în cuplu?",
    answer:
      "Se văd în dansul vostru relațional: unul apasă, altul se retrage; unul controlează, altul evită; unul vrea rezolvare imediată, altul are nevoie de spațiu. Fără claritate, îl vedeți pe celălalt ca fiind greșit. Cu HeartMapping, înțelegeți că multe comportamente sunt forme de protecție (armuri), nu dovezi ale lipsei de iubire.",
  },
  {
    question: "Ce este harta emoțiilor a relației noastre?",
    answer:
      "În cuplu, harta emoțiilor vă arată ce îl activează pe fiecare, unde vă întâlniți bine și unde vă ratați. Este o radiografie a ciclului vostru de conflict. Vă ajută să vedeți că, adesea, o reacție disproporționată nu are legătură doar cu faptele prezente, ci cu filtrul emoțional al partenerului. Vă învață să nu mai luați totul personal.",
  },
  {
    question: "Ne poate ajuta HeartMapping să reconstruim apropierea și intimitatea?",
    answer:
      "Da. Intimitatea nu este doar fizică, ci și emoțională și valorică. Când vă simțiți distanți, adesea e vorba de tensiuni nespuse și lipsă de siguranță. HeartMapping pune nume pe ce se întâmplă, normalizează diferențele și creează un limbaj comun. Reconectarea începe atunci când începeți să vă vedeți mai adevărat, dincolo de rolurile de supraviețuire.",
  },
  {
    question: "Ce rezultate realiste putem obține ca și cuplu?",
    answer:
      "Nu vă promitem un cuplu perfect, ci ceva mai valoros: mai mult adevăr, mai mult discernământ și o capacitate mult mai mare de reparație. Veți avea mai puțină reacție impulsivă și mai multă înțelegere a diferențelor. HeartMapping vă scoate din orbirea relațională și transformă conflictul dintr-un zid într-o poartă spre maturitate în iubire.",
  },
  {
    question: "Cum folosim aceste informații fără să ne etichetăm sau să ne acuzăm?",
    answer:
      "Acesta este cel mai important aspect: rezultatele HeartMapping nu sunt arme. Nu le folosiți pentru a spune „Vezi, tu ești problema, așa cum a zis testul." HeartMapping este un limbaj de apropiere, nu de acuzație. Îl folosiți pentru a observa, a traduce comportamentele în nevoi, a cere mai curat și a repara mai repede atunci când apar deconectările.",
  },
];

function AccordionItem({ item, index }: { item: FAQItem; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <button
        className="faq-question"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
      >
        <span>{item.question}</span>
        <motion.span
          className="faq-chevron"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
        >
          ▾
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="faq-answer"
            key={`answer-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <p className="faq-answer-text">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

type Tab = "dating" | "relatii";

export default function FAQ() {
  const [activeTab, setActiveTab] = useState<Tab>("dating");

  const tabs: { id: Tab; label: string }[] = [
    { id: "dating", label: "💛 HeartMapping Dating" },
    { id: "relatii", label: "💜 HeartMapping Relații" },
  ];

  const activeFAQ = activeTab === "dating" ? datingFAQ : relatiiFAQ;

  return (
    <main className="faq-page">
      <section className="faq-header">
        <h1 className="faq-title">HeartMapping – Întrebări Frecvente</h1>
        <p className="faq-subtitle">
          Alege rubrica care ți se potrivește și descoperă răspunsurile la cele
          mai frecvente întrebări despre procesul HeartMapping.
        </p>
      </section>

      <section className="faq-content">
        <div className="faq-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`faq-tab-btn${activeTab === tab.id ? " faq-tab-btn--active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="faq-accordion"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
          >
            {activeFAQ.map((item, index) => (
              <AccordionItem key={index} item={item} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      <section className="faq-cta">
        <h2 className="faq-cta-title">Gata să-ți descoperi harta?</h2>
        <a
          href="/contact?program=hm-dating-diagnostic"
          className="faq-cta-btn"
        >
          Rezervă o sesiune de diagnostic
        </a>
      </section>
    </main>
  );
}
