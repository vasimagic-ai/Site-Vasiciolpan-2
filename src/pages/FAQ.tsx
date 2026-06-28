import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

interface FAQItem {
  q: string
  a: string
}

const datingFAQ: FAQItem[] = [
  {
    q: 'Ce este concret HeartMapping?',
    a: 'HeartMapping este un proces de clarificare relațională. Nu este doar un test de personalitate, ci o hartă practică a felului în care iubești, alegi, reacționezi și te conectezi. Te ajută să vezi ce emoție te conduce în relații, ce valori te hrănesc, ce adaptare de personalitate folosești ca să te protejezi și cum toate acestea îți influențează alegerile în dating. Nu ghicește partenerul ideal, ci te ajută să nu-l mai alegi greșit.',
  },
  {
    q: 'Cu ce rămân efectiv la finalul procesului?',
    a: 'La final nu primești doar informații, ci direcție și criterii clare. Rămâi cu o hartă a emoțiilor tale dominante, o clarificare a valorilor tale reale (prin testul VIA Character), o înțelegere a adaptării tale de personalitate și pași concreți pentru un dating mai conștient. Ieși din proces cu un filtru real pentru a recunoaște compatibilitatea, nu doar chimia.',
  },
  {
    q: 'Cum diferă HeartMapping de un test de personalitate sau de terapie?',
    a: 'Un test de personalitate îți spune „cum ești". HeartMapping îți arată „cum funcționezi în iubire" – ce te activează, ce te destabilizează și de ce alegi anumiți oameni. Față de terapie (care lucrează adesea cu vindecarea traumelor și a trecutului), HeartMapping se concentrează pe clarificarea structurii tale relaționale prezente și aplicarea ei imediată în alegerile tale romantice.',
  },
  {
    q: 'De ce sunt valorile atât de importante în dating?',
    a: 'Atracția te apropie, dar valorile decid dacă poți rămâne. Poți avea chimie și dorință, dar dacă valorile voastre (legate de familie, libertate, adevăr, loialitate) sunt în conflict, relația va ceda exact în acele puncte. HeartMapping, folosind testul VIA Character, îți arată ce te hrănește cu adevărat și ce compromisuri te vor costa prea mult.',
  },
  {
    q: 'Ce înseamnă că o emoție mă guvernează în relații?',
    a: 'Înseamnă că ai un filtru afectiv prin care citești oamenii. Emoția dominantă influențează pe cine alegi, de cine te temi, când te apropii și când te închizi. Dacă nu îți vezi emoția dominantă, ea te conduce (de exemplu, te agăți din frică sau te retragi din rușine). Dacă o cunoști, poți separa reacția de realitate și nu mai numești iubire tot ce îți atinge rana.',
  },
  {
    q: 'De ce este important să-mi cunosc adaptarea de personalitate?',
    a: 'Adaptarea de personalitate îți arată cum ai învățat să supraviețuiești emoțional și să te protejezi. În dating, înainte să alegi un partener, trebuie să știi cine alege în tine: frica, nevoia de validare, mecanismul de apărare sau partea ta capabilă de relație matură. Cunoașterea adaptării te ajută să nu mai repeți tiparele dureroase.',
  },
  {
    q: 'Cum aplic practic HeartMapping la primele întâlniri?',
    a: 'În loc să te întrebi doar „Oare mă place?", începi să observi: „Această persoană îmi hrănește valorile sau doar îmi activează o rană veche?" HeartMapping te ajută să pui întrebările potrivite, să recunoști rapid steagurile roșii emoționale, să nu te mai investești prea devreme și să alegi diferit, bazat pe compatibilitate reală, nu pe un familiar toxic.',
  },
]

const relatiiFAQ: FAQItem[] = [
  {
    q: 'Ce este HeartMapping atunci când suntem deja într-o relație?',
    a: 'Este o busolă pentru a înțelege ce se întâmplă cu adevărat între voi. Vă ajută să vedeți de ce vă iubiți, dar vă blocați, și să descoperiți nevoile reale din spatele conflictelor repetitive. Este un instrument atât pentru cuplurile aflate în impas, cât și pentru cele care doresc să-și aprofundeze intimitatea și să construiască mai conștient.',
  },
  {
    q: 'De ce ne-ar ajuta dacă noi deja știm de ce ne certăm?',
    a: 'Pentru că adesea vă certați pe simptome (timp, bani, ton, mesaje), dar problema reală este structura conflictului (unul nu se simte văzut, celălalt se simte invadat). HeartMapping vă arată nevoile de sub ceartă. Sub critică poate fi un dor de apropiere; sub retragere poate fi o teamă de atac. Când vedeți nevoia, încetați să vă mai luptați cu simptomul.',
  },
  {
    q: 'Cum ne afectează relația dacă avem valori diferite?',
    a: 'Diferențele de valori pot crea tensiuni structurale profunde. Dacă unul prețuiește stabilitatea și altul spontaneitatea, sau unul caută adevărul direct și celălalt armonia cu orice preț, vă puteți răni fără să vreți. HeartMapping vă ajută să folosiți aceste informații nu pentru a vă judeca, ci pentru a vă înțelege și a echilibra nevoile amândurora.',
  },
  {
    q: 'Cum se văd adaptările de personalitate în cuplu?',
    a: 'Se văd în dansul vostru relațional: unul apasă, altul se retrage; unul controlează, altul evită; unul vrea rezolvare imediată, altul are nevoie de spațiu. Fără claritate, îl vedeți pe celălalt ca fiind greșit. Cu HeartMapping, înțelegeți că multe comportamente sunt forme de protecție (armuri), nu dovezi ale lipsei de iubire.',
  },
  {
    q: 'Ce este harta emoțiilor a relației noastre?',
    a: 'În cuplu, harta emoțiilor vă arată ce îl activează pe fiecare, unde vă întâlniți bine și unde vă ratați. Este o radiografie a ciclului vostru de conflict. Vă ajută să vedeți că, adesea, o reacție disproporționată nu are legătură doar cu faptele prezente, ci cu filtrul emoțional al partenerului. Vă învață să nu mai luați totul personal.',
  },
  {
    q: 'Ne poate ajuta HeartMapping să reconstruim apropierea și intimitatea?',
    a: 'Da. Intimitatea nu este doar fizică, ci și emoțională și valorică. Când vă simțiți distanți, adesea e vorba de tensiuni nespuse și lipsă de siguranță. HeartMapping pune nume pe ce se întâmplă, normalizează diferențele și creează un limbaj comun. Reconectarea începe atunci când începeți să vă vedeți mai adevărat, dincolo de rolurile de supraviețuire.',
  },
  {
    q: 'Ce rezultate realiste putem obține ca și cuplu?',
    a: 'Nu vă promitem un cuplu perfect, ci ceva mai valoros: mai mult adevăr, mai mult discernământ și o capacitate mult mai mare de reparație. Veți avea mai puțină reacție impulsivă și mai multă înțelegere a diferențelor. HeartMapping vă scoate din orbirea relațională și transformă conflictul dintr-un zid într-o poartă spre maturitate în iubire.',
  },
  {
    q: 'Cum folosim aceste informații fără să ne etichetăm sau să ne acuzăm?',
    a: 'Acesta este cel mai important aspect: rezultatele HeartMapping nu sunt arme. Nu le folosiți pentru a spune „Vezi, tu ești problema, așa cum a zis testul." HeartMapping este un limbaj de apropiere, nu de acuzație. Îl folosiți pentru a observa, a traduce comportamentele în nevoi, a cere mai curat și a repara mai repede atunci când apar deconectările.',
  },
]

function AccordionItem({ item, index }: { item: FAQItem; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-stone-200 last:border-0">
      <button
        className="w-full text-left py-5 flex items-center justify-between gap-4"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-charcoal">{item.q}</span>
        <span className={`text-xl transition-transform ${open ? 'rotate-45' : ''}`}>+</span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key={`faq-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="text-stone-600 leading-relaxed pb-5">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [tab, setTab] = useState<'dating' | 'relatii'>('dating')

  return (
    <main className="pt-20 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        <p className="text-earth font-semibold uppercase tracking-widest text-sm mb-2 text-center">
          Întrebări frecvente
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-charcoal text-center mb-4">
          HeartMapping – Întrebări Frecvente
        </h1>
        <p className="text-stone-500 text-center mb-10">
          Alege rubrica care ți se potrivește și descoperă răspunsurile la cele mai frecvente întrebări
          despre procesul HeartMapping.
        </p>

        {/* Tab buttons */}
        <div className="flex gap-3 justify-center mb-10">
          <button
            onClick={() => setTab('dating')}
            className={`px-6 py-2.5 rounded-full font-semibold text-sm transition ${
              tab === 'dating'
                ? 'bg-earth text-white shadow'
                : 'bg-amber-50 text-amber-800 hover:bg-amber-100'
            }`}
          >
            💛 HeartMapping Dating
          </button>
          <button
            onClick={() => setTab('relatii')}
            className={`px-6 py-2.5 rounded-full font-semibold text-sm transition ${
              tab === 'relatii'
                ? 'bg-sage text-white shadow'
                : 'bg-purple-50 text-purple-800 hover:bg-purple-100'
            }`}
          >
            💜 HeartMapping Relații
          </button>
        </div>

        {/* Accordion */}
        <div className="bg-white rounded-2xl border border-stone-200 shadow-sm px-6">
          {tab === 'dating'
            ? datingFAQ.map((item, i) => <AccordionItem key={i} item={item} index={i} />)
            : relatiiFAQ.map((item, i) => <AccordionItem key={i} item={item} index={i} />)}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center bg-amber-50 rounded-2xl p-10 border border-amber-200">
          <h2 className="text-2xl font-bold mb-4">Gata să-ți descoperi harta?</h2>
          <p className="text-stone-600 mb-6">
            Rezervă o sesiune de diagnostic emoțional și fă primul pas.
          </p>
          <Link
            to="/contact?program=hm-dating-diagnostic"
            className="bg-earth text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-700 transition"
          >
            Rezervă o sesiune de diagnostic
          </Link>
        </div>
      </div>
    </main>
  )
}
