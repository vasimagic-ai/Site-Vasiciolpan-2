import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="bg-gradient-to-br from-cream to-amber-50 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-earth font-semibold uppercase tracking-widest text-sm mb-4">Coach acreditat</p>
          <h1 className="text-4xl md:text-6xl font-bold text-charcoal mb-6 leading-tight">
            Vasi Ciolpan
          </h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto mb-8">
            Claritate emoțională. Relații împlinitoare. Transformare autentică.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/oferte"
              className="bg-earth text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-700 transition"
            >
              Vezi programele
            </Link>
            <Link
              to="/contact"
              className="border border-charcoal text-charcoal px-8 py-3 rounded-full font-semibold hover:bg-charcoal hover:text-white transition"
            >
              Rezervă o sesiune
            </Link>
          </div>
        </div>
      </section>

      {/* HeartMapping Programs */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal text-center mb-4">Programele HeartMapping™</h2>
          <p className="text-stone-500 text-center mb-12 max-w-xl mx-auto">
            Un proces unic de clarificare emoțională și relațională, construit pe metodologia HeartMapping™.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-amber-200 rounded-2xl p-8 bg-amber-50">
              <span className="text-2xl">💛</span>
              <h3 className="text-xl font-bold mt-3 mb-2">HeartMapping Dating</h3>
              <p className="text-stone-600 mb-4">
                Pentru persoane singure care vor claritate în alegerea partenerului.
              </p>
              <Link to="/oferte" className="text-earth font-semibold hover:underline">
                Descoperă programele →
              </Link>
            </div>
            <div className="border border-purple-200 rounded-2xl p-8 bg-purple-50">
              <span className="text-2xl">💜</span>
              <h3 className="text-xl font-bold mt-3 mb-2">HeartMapping Relații Împlinitoare</h3>
              <p className="text-stone-600 mb-4">
                Pentru cupluri care vor să aprofundeze intimitatea și să rezolve conflictele.
              </p>
              <Link to="/oferte" className="text-sage font-semibold hover:underline">
                Descoperă programele →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testul ADAPT */}
      <section className="py-16 px-4 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-400 text-slate-900 text-sm font-bold px-4 py-1 rounded-full mb-6">
            ⭐ Gratuit
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">🧠 Testul ADAPT</h2>
          <p className="text-slate-300 text-lg mb-6 max-w-xl mx-auto">
            Descoperă-ți stilul de personalitate bazat pe Analiza Tranzacțională. Primește o analiză
            detaliată a profilului tău psihologic și recomandări personalizate pentru dezvoltare.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-300 mb-8">
            <span>✓ 40 de întrebări</span>
            <span>✓ Analiză completă</span>
            <span>✓ Rezultate instant</span>
            <span>✓ 100% Gratuit</span>
          </div>
          <a
            href="https://vasiciolpan.coach/adapt/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-400 text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition inline-block"
          >
            Începe Testul ADAPT Acum
          </a>
          <p className="text-slate-400 text-sm mt-6">
            Peste 10.000+ persoane și-au descoperit deja profilul psihologic
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-cream text-center">
        <h2 className="text-2xl font-bold mb-4">Gata să începi?</h2>
        <p className="text-stone-500 mb-8">Rezervă o sesiune de diagnostic emoțional – primul pas spre claritate.</p>
        <Link
          to="/contact?program=hm-dating-diagnostic"
          className="bg-charcoal text-white px-8 py-3 rounded-full font-semibold hover:bg-stone-700 transition"
        >
          Rezervă acum
        </Link>
      </section>
    </main>
  )
}
