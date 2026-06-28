import { Link } from 'react-router-dom'

export default function HeartMapping() {
  return (
    <main className="pt-20 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <p className="text-earth font-semibold uppercase tracking-widest text-sm mb-2 text-center">Metoda</p>
        <h1 className="text-4xl font-bold text-charcoal text-center mb-6">HeartMapping™</h1>
        <p className="text-stone-600 text-center max-w-2xl mx-auto mb-12">
          Un proces de clarificare emoțională și relațională care te ajută să înțelegi cum iubești,
          cum alegi și cum te conectezi.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8">
            <span className="text-3xl">💛</span>
            <h2 className="text-xl font-bold mt-4 mb-3">Pentru persoane singure</h2>
            <p className="text-stone-600 mb-4">
              HeartMapping Dating – un proces care te ajută să identifici emoția dominantă, valorile
              reale și tiparul de adaptare de personalitate, astfel încât să faci alegeri mai conștiente
              în dating.
            </p>
            <Link to="/oferte" className="text-earth font-semibold hover:underline">
              Vezi programele →
            </Link>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-2xl p-8">
            <span className="text-3xl">💜</span>
            <h2 className="text-xl font-bold mt-4 mb-3">Pentru cupluri</h2>
            <p className="text-stone-600 mb-4">
              HeartMapping Relații – o busolă pentru cupluri care vor să înțeleagă mai bine dinamica
              relației, să rezolve conflictele repetitive și să construiască mai multă intimitate.
            </p>
            <Link to="/oferte" className="text-sage font-semibold hover:underline">
              Vezi programele →
            </Link>
          </div>
        </div>

        <div className="bg-stone-50 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Componentele procesului</h2>
          <div className="space-y-4">
            {[
              { icon: '❤️', title: 'Emoția dominantă', desc: 'Identificarea filtrului afectiv prin care citești oamenii și relațiile.' },
              { icon: '🎯', title: 'Valorile reale (VIA Character)', desc: 'Ce te hrănește cu adevărat și ce compromisuri te vor costa prea mult.' },
              { icon: '🧩', title: 'Adaptarea de personalitate', desc: 'Cum ai învățat să supraviețuiești emoțional și cum te protejezi.' },
              { icon: '🗺️', title: 'Harta emoțională', desc: 'O radiografie a modului în care funcționezi în iubire.' },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <h3 className="font-semibold text-charcoal">{item.title}</h3>
                  <p className="text-stone-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center border-t border-stone-200 pt-8">
          <p className="text-stone-600 mb-4">
            Ai întrebări despre HeartMapping? Vezi FAQ-ul complet →
          </p>
          <Link
            to="/faq"
            className="text-earth font-semibold hover:underline"
          >
            Mergi la FAQ
          </Link>
        </div>
      </div>
    </main>
  )
}
