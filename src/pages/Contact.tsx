import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const programNames: Record<string, string> = {
  'hm-dating-diagnostic': 'HeartMapping Dating – Diagnostic Emoțional',
  'hm-dating-relatie-cu-tine': 'HeartMapping – Relația cu Tine',
  'hm-dating-lab-grup': 'HeartMapping – Dating Lab (Grup)',
  'hm-relatii-diagnostic': 'HeartMapping Relații – Diagnostic Emoțional',
  'hm-relatii-cu-partenerul': 'HeartMapping – Relația cu Partenerul',
  'hm-relatii-laborator-grup': 'HeartMapping – Laboratorul de Relații',
  'sesiune-coaching-individuala': 'Sesiune individuală de coaching',
  'pachet-5-sesiuni': 'Pachet 5 sesiuni de coaching',
  'pachet-10-sesiuni': 'Pachet 10 sesiuni de coaching',
  'sesiune-hipnoza': 'Sesiune de hipnoză',
  'regresie-hipnotica': 'Regresie Hipnotică',
  'core-transformation': 'Core Transformation©',
}

export default function Contact() {
  const [searchParams] = useSearchParams()
  const programParam = searchParams.get('program') ?? ''

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    program: programParam,
    message: '',
  })
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <main className="pt-20 pb-16 px-4">
      <div className="max-w-xl mx-auto">
        <p className="text-earth font-semibold uppercase tracking-widest text-sm mb-2 text-center">Hai să vorbim</p>
        <h1 className="text-3xl font-bold text-charcoal text-center mb-8">Contact</h1>

        {sent ? (
          <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
            <span className="text-4xl">✓</span>
            <h2 className="text-xl font-bold mt-4 mb-2">Mesaj trimis!</h2>
            <p className="text-stone-600">Vasi te va contacta în curând.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-stone-200 shadow-sm p-8 space-y-5">
            {programParam && programNames[programParam] && (
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-900">
                Ai selectat programul: <strong>{programNames[programParam]}</strong>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-charcoal mb-1">Nume *</label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full border border-stone-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-earth"
                placeholder="Numele tău"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-charcoal mb-1">Email *</label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full border border-stone-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-earth"
                placeholder="email@exemplu.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-charcoal mb-1">Telefon</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full border border-stone-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-earth"
                placeholder="+40 7xx xxx xxx"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-charcoal mb-1">Programul dorit</label>
              <select
                name="program"
                value={form.program}
                onChange={handleChange}
                className="w-full border border-stone-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-earth bg-white"
              >
                <option value="">-- Alege un program --</option>
                {Object.entries(programNames).map(([id, label]) => (
                  <option key={id} value={id}>
                    {label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-charcoal mb-1">Mesaj</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                className="w-full border border-stone-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-earth resize-none"
                placeholder="Spune-mi cu ce te pot ajuta..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-earth text-white py-3 rounded-full font-semibold hover:bg-amber-700 transition"
            >
              Trimite mesajul
            </button>
          </form>
        )}
      </div>
    </main>
  )
}
