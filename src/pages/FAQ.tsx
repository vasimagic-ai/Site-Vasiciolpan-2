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
      "HeartMapping este un proces de clarificare relationala. Nu este doar un test de personalitate, ci o harta practica a felului in care iubesti, alegi, reactionezi si te conectezi. Te ajuta sa vezi ce emotie te conduce in relatii, ce valori te hranesc, ce adaptare de personalitate folosesti ca sa te protejezi si cum toate acestea iti influenteaza alegerile in dating. Nu ghiceste partenerul ideal, ci te ajuta sa nu-l mai alegi gresit.",
  },
  {
    question: "Cu ce raman efectiv la finalul procesului?",
    answer:
      "La final nu primesti doar informatii, ci directie si criterii clare. Ramai cu o harta a emotiilor tale dominante, o clarificare a valorilor tale reale (prin testul VIA Character), o intelegere a adaptarii tale de personalitate si pasi concreți pentru un dating mai constient. Iesi din proces cu un filtru real pentru a recunoaste compatibilitatea, nu doar chimia.",
  },
  {
    question: "Cum difera HeartMapping de un test de personalitate sau de terapie?",
    answer:
      "Un test de personalitate iti spune cum esti. HeartMapping iti arata cum functionezi in iubire - ce te activeaza, ce te destabilizeaza si de ce alegi anumiti oameni. Fata de terapie (care lucreaza adesea cu vindecarea traumelor si a trecutului), HeartMapping se concentreaza pe clarificarea structurii tale relationale prezente si aplicarea ei imediata in alegerile tale romantice.",
  },
  {
    question: "De ce sunt valorile atat de importante in dating?",
    answer:
      "Atractia te apropie, dar valorile decid daca poti ramane. Poti avea chimie si dorinta, dar daca valorile voastre (legate de familie, libertate, adevar, loialitate) sunt in conflict, relatia va ceda exact in acele puncte. HeartMapping, folosind testul VIA Character, iti arata ce te hraneste cu adevarat si ce compromisuri te vor costa prea mult.",
  },
  {
    question: "Ce inseamna ca o emotie ma guverneaza in relatii?",
    answer:
      "Inseamna ca ai un filtru afectiv prin care citesti oamenii. Emotia dominanta influenteaza pe cine alegi, de cine te temi, cand te apropii si cand te inchizi. Daca nu iti vezi emotia dominanta, ea te conduce (de exemplu, te agati din frica sau te retragi din rusine). Daca o cunosti, poti separa reactia de realitate si nu mai numesti iubire tot ce iti atinge rana.",
  },
  {
    question: "De ce este important sa-mi cunosc adaptarea de personalitate?",
    answer:
      "Adaptarea de personalitate iti arata cum ai invatat sa supravietuiesti emotional si sa te protejezi. In dating, inainte sa alegi un partener, trebuie sa stii cine alege in tine: frica, nevoia de validare, mecanismul de aparare sau partea ta capabila de relatie matura. Cunoasterea adaptarii te ajuta sa nu mai repeti tiparele dureroase.",
  },
  {
    question: "Cum aplic practic HeartMapping la primele intalniri?",
    answer:
      "In loc sa te intrebi doar Oare ma place?, incepi sa observi: Aceasta persoana imi hraneste valorile sau doar imi activeaza o rana veche? HeartMapping te ajuta sa pui intrebarile potrivite, sa recunosti rapid steagurile rosii emotionale, sa nu te mai investesti prea devreme si sa alegi diferit, bazat pe compatibilitate reala, nu pe un familiar toxic.",
  },
];

const relatiiFAQ: FAQItem[] = [
  {
    question: "Ce este HeartMapping atunci cand suntem deja intr-o relatie?",
    answer:
      "Este o busola pentru a intelege ce se intampla cu adevarat intre voi. Va ajuta sa vedeti de ce va iubiti, dar va blocati, si sa descoperiti nevoile reale din spatele conflictelor repetitive. Este un instrument atat pentru cuplurile aflate in impas, cat si pentru cele care doresc sa-si aprofundeze intimitatea si sa construiasca mai constient.",
  },
  {
    question: "De ce ne-ar ajuta daca noi deja stim de ce ne certam?",
    answer:
      "Pentru ca adesea va certati pe simptome (timp, bani, ton, mesaje), dar problema reala este structura conflictului (unul nu se simte vazut, celalalt se simte invadat). HeartMapping va arata nevoile de sub cearta. Sub critica poate fi un dor de apropiere; sub retragere poate fi o teama de atac. Cand vedeti nevoia, incetati sa va mai luptati cu simptomul.",
  },
  {
    question: "Cum ne afecteaza relatia daca avem valori diferite?",
    answer:
      "Diferentele de valori pot crea tensiuni structurale profunde. Daca unul pretuieste stabilitatea si altul spontaneitatea, sau unul cauta adevarul direct si celalalt armonia cu orice pret, va puteti rani fara sa vreti. HeartMapping va ajuta sa folositi aceste informatii nu pentru a va judeca, ci pentru a va intelege si a echilibra nevoile amandurora.",
  },
  {
    question: "Cum se vad adaptarile de personalitate in cuplu?",
    answer:
      "Se vad in dansul vostru relational: unul apasa, altul se retrage; unul controleaza, altul evita; unul vrea rezolvare imediata, altul are nevoie de spatiu. Fara claritate, il vedeti pe celalalt ca fiind gresit. Cu HeartMapping, intelegeti ca multe comportamente sunt forme de protectie (armuri), nu dovezi ale lipsei de iubire.",
  },
  {
    question: "Ce este harta emotiilor a relatiei noastre?",
    answer:
      "In cuplu, harta emotiilor va arata ce il activeaza pe fiecare, unde va intalniti bine si unde va ratati. Este o radiografie a ciclului vostru de conflict. Va ajuta sa vedeti ca, adesea, o reactie disproportionata nu are legatura doar cu faptele prezente, ci cu filtrul emotional al partenerului. Va invata sa nu mai luati totul personal.",
  },
  {
    question: "Ne poate ajuta HeartMapping sa reconstruim apropierea si intimitatea?",
    answer:
      "Da. Intimitatea nu este doar fizica, ci si emotionala si valorica. Cand va simtiti distanti, adesea e vorba de tensiuni nespuse si lipsa de siguranta. HeartMapping pune nume pe ce se intampla, normalizeaza diferentele si creeaza un limbaj comun. Reconectarea incepe atunci cand incepeti sa va vedeti mai adevarat, dincolo de rolurile de supravietuire.",
  },
  {
    question: "Ce rezultate realiste putem obtine ca si cuplu?",
    answer:
      "Nu va promitem un cuplu perfect, ci ceva mai valoros: mai mult adevar, mai mult discernamant si o capacitate mult mai mare de reparatie. Veti avea mai putina reactie impulsiva si mai multa intelegere a diferentelor. HeartMapping va scoate din orbirea relationala si transforma conflictul dintr-un zid intr-o poarta spre maturitate in iubire.",
  },
  {
    question: "Cum folosim aceste informatii fara sa ne etichetam sau sa ne acuzam?",
    answer:
      "Acesta este cel mai important aspect: rezultatele HeartMapping nu sunt arme. Nu le folositi pentru a spune: Vezi, tu esti problema, asa cum a zis testul. HeartMapping este un limbaj de apropiere, nu de acuzatie. Il folositi pentru a observa, a traduce comportamentele in nevoi, a cere mai curat si a repara mai repede atunci cand apar deconectarile.",
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
    { id: "relatii", label: "💜 HeartMapping Relatii" },
  ];

  const activeFAQ = activeTab === "dating" ? datingFAQ : relatiiFAQ;

  return (
    <main className="faq-page">
      <section className="faq-header">
        <h1 className="faq-title">HeartMapping – Intrebari Frecvente</h1>
        <p className="faq-subtitle">
          Alege rubrica care ti se potriveste si descopera raspunsurile la cele
          mai frecvente intrebari despre procesul HeartMapping.
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
        <h2 className="faq-cta-title">Gata sa-ti descoperi harta?</h2>
        <a
          href="/contact?program=hm-dating-diagnostic"
          className="faq-cta-btn"
        >
          Rezerva o sesiune de diagnostic
        </a>
      </section>
    </main>
  );
}
