import vasiPhoto from '../assets/images/vasi-ciolpan-photo.png'
import diplomaImg from '../assets/images/diploma-vasile-ciolpan.jpeg'
import icaImg from '../assets/images/ica-agile-vasi-ciolpan.png'

const certifications = [
  'HeartMapping™ Certified Coach',
  'Metodologia ADAPT',
  'Specialist în activitatea de coaching (acreditat ANC)',
  'HeartMapping Mindfulness Practitioner',
  'Coach acreditat ICA Agile (din 2018)',
]

export default function Despre() {
  return (
    <main className="pt-20 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Photo */}
          <div className="flex justify-center">
            <img
              src={vasiPhoto}
              alt="Vasi Ciolpan"
              className="rounded-2xl object-cover max-w-sm w-full shadow-lg"
              onError={(e) => {
                const el = e.currentTarget
                el.style.display = 'none'
              }}
            />
          </div>

          {/* Bio */}
          <div>
            <p className="text-earth font-semibold uppercase tracking-widest text-sm mb-2">Despre mine</p>
            <h1 className="text-3xl font-bold text-charcoal mb-6">Vasi Ciolpan</h1>

            <div className="space-y-4 text-stone-700 leading-relaxed">
              <p>
                Sunt Vasi Ciolpan – om, coach, tată. Și, da, zâmbesc când spun asta pentru că mă
                definesc ca „om", în toată accepțiunea cuvântului – cu slăbiciuni și tipare, cu
                aspirații și eforturi pentru atingerea lor.
              </p>
              <p>
                Sunt coach acreditat din 2018 și lucrez cu oamenii în această calitate de aproximativ
                4 ani. Mă definește acest rol pentru că, în fapt, dintotdeauna mi-a plăcut să lucrez
                cu oamenii și am făcut-o, din pozițiile pe care le-am ocupat în decursul vieții mele
                profesionale.
              </p>
              <p>
                Sunt coach, cu certitudinea și bucuria de a-mi fi împlinit menirea și de a fi găsit
                acel stil propriu de lucru, care a dat rezultate de fiecare dată, în procesele
                transformaționale cu cei cu care lucrez.
              </p>
            </div>

            {/* Certifications */}
            <div className="mt-8">
              <h2 className="font-bold text-charcoal mb-4">Certificări</h2>
              <ul className="space-y-2">
                {certifications.map((cert) => (
                  <li key={cert} className="flex items-start gap-2 text-stone-700">
                    <span className="text-earth mt-1">✓</span>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Certification images */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-charcoal mb-8 text-center">Diplome și acreditări</h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <figure className="text-center">
              <img
                src={diplomaImg}
                alt="Diplomă Vasile Ciolpan"
                className="rounded-xl shadow max-w-xs w-full mx-auto"
                onError={(e) => { e.currentTarget.style.display = 'none' }}
              />
              <figcaption className="text-sm text-stone-500 mt-2">Diplomă coaching – Vasile Ciolpan</figcaption>
            </figure>
            <figure className="text-center">
              <img
                src={icaImg}
                alt="ICA Agile – Vasi Ciolpan"
                className="rounded-xl shadow max-w-xs w-full mx-auto"
                onError={(e) => { e.currentTarget.style.display = 'none' }}
              />
              <figcaption className="text-sm text-stone-500 mt-2">Coach acreditat ICA Agile</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </main>
  )
}
