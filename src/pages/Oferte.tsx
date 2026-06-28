import { Link } from 'react-router-dom'
import { datingProducts, relatiiProducts, individualProducts, type Product } from '../data/products'

function ProductCard({ product, accentColor }: { product: Product; accentColor: string }) {
  const borderClass = accentColor === 'earth' ? 'border-amber-200' : 'border-purple-200'
  const badgeClass = accentColor === 'earth' ? 'bg-amber-100 text-amber-800' : 'bg-purple-100 text-purple-800'
  const btnClass =
    accentColor === 'earth'
      ? 'bg-earth text-white hover:bg-amber-700'
      : 'bg-sage text-white hover:bg-purple-700'

  return (
    <div className={`border ${borderClass} rounded-2xl p-6 flex flex-col gap-4 bg-white shadow-sm`}>
      <div>
        <h3 className="font-bold text-lg text-charcoal">{product.name}</h3>
        {product.subtitle && <p className="text-stone-500 text-sm mt-1">{product.subtitle}</p>}
      </div>

      {product.groupSize && (
        <span className={`self-start text-xs font-semibold px-3 py-1 rounded-full ${badgeClass}`}>
          Maxim 12 participanți
        </span>
      )}

      {product.targetAudience && (
        <p className="text-stone-600 text-sm">{product.targetAudience}</p>
      )}

      {product.outcomes && product.outcomes.length > 0 && (
        <ul className="space-y-1">
          {product.outcomes.map((o) => (
            <li key={o} className="flex items-start gap-2 text-sm text-stone-700">
              <span className="text-earth mt-0.5">✓</span>
              {o}
            </li>
          ))}
        </ul>
      )}

      <div className="flex items-baseline gap-2 mt-auto">
        {product.originalPrice && (
          <span className="text-stone-400 line-through text-sm">
            {product.originalPrice} {product.currency}
          </span>
        )}
        <span className="text-2xl font-bold text-charcoal">
          {product.price} {product.currency}
        </span>
        {product.pricePerSession && (
          <span className="text-stone-500 text-sm">({product.pricePerSession} RON/sesiune)</span>
        )}
      </div>

      <Link
        to={`/contact?program=${product.id}`}
        className={`${btnClass} text-center py-2.5 rounded-full font-semibold text-sm transition`}
      >
        Rezervă acum
      </Link>
    </div>
  )
}

function IndividualRow({ product }: { product: Product }) {
  return (
    <div className="flex items-center justify-between py-4 border-b border-stone-100 last:border-0">
      <div>
        <p className="font-semibold text-charcoal">{product.name}</p>
        {product.duration && <p className="text-stone-500 text-sm">{product.duration}</p>}
        {product.pricePerSession && (
          <p className="text-stone-500 text-sm">{product.pricePerSession} RON/sesiune</p>
        )}
      </div>
      <div className="flex items-center gap-4">
        <span className="font-bold text-charcoal whitespace-nowrap">
          {product.price} RON
        </span>
        <Link
          to={`/contact?program=${product.id}`}
          className="bg-charcoal text-white text-xs px-4 py-2 rounded-full hover:bg-stone-700 transition whitespace-nowrap"
        >
          Rezervă
        </Link>
      </div>
    </div>
  )
}

export default function Oferte() {
  return (
    <main className="pt-20 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        <p className="text-earth font-semibold uppercase tracking-widest text-sm mb-2 text-center">Programe</p>
        <h1 className="text-4xl font-bold text-charcoal text-center mb-4">Oferte</h1>
        <p className="text-stone-500 text-center mb-16 max-w-xl mx-auto">
          Alege programul potrivit pentru situația ta și fă primul pas spre claritate emoțională.
        </p>

        {/* Section 1: HeartMapping Dating */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">💛</span>
            <h2 className="text-2xl font-bold text-charcoal">HeartMapping Dating</h2>
          </div>
          <p className="text-stone-500 mb-8 ml-9">
            Pentru persoane singure care vor claritate în alegerea partenerului
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {datingProducts.map((p) => (
              <ProductCard key={p.id} product={p} accentColor="earth" />
            ))}
          </div>
        </section>

        {/* Section 2: HeartMapping Relații */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">💜</span>
            <h2 className="text-2xl font-bold text-charcoal">HeartMapping Relații Împlinitoare</h2>
          </div>
          <p className="text-stone-500 mb-8 ml-9">
            Pentru cupluri care vor să aprofundeze intimitatea și să rezolve conflictele
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {relatiiProducts.map((p) => (
              <ProductCard key={p.id} product={p} accentColor="sage" />
            ))}
          </div>
        </section>

        {/* Section 3: Individual sessions */}
        <section>
          <h2 className="text-2xl font-bold text-charcoal mb-2">Sesiuni individuale și tehnici hipnotice</h2>
          <p className="text-stone-500 mb-8">Sesiuni punctuale pentru acces rapid la resurse interioare</p>
          <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6">
            {individualProducts.map((p) => (
              <IndividualRow key={p.id} product={p} />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
