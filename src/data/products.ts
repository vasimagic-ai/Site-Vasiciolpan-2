export interface Product {
  id: string
  name: string
  subtitle?: string
  price: number
  originalPrice?: number
  currency: string
  duration?: string
  sessions?: string
  groupSize?: string
  format?: string
  pricePerSession?: number
  targetAudience?: string
  outcomes?: string[]
}

export const products: Product[] = [
  {
    id: 'hm-dating-diagnostic',
    name: 'HeartMapping Dating – Diagnostic Emoțional',
    subtitle: 'Sesiune unică 90 min',
    price: 600,
    currency: 'RON',
    duration: '90 minute',
    format: 'Online, Zoom',
    targetAudience:
      'Femei sau bărbați singuri, confuzi, care vor să-și identifice emoția dominantă care facilitează sau împiedică o relație împlinitoare, sau nu înțeleg ce se tot repetă în dating.',
    outcomes: [
      'Clarificarea emoției dominante',
      'Identificarea a 1–2 tipare repetitive',
      '1 hartă emoțională de bază',
      '1 recomandare de traseu (program)',
    ],
  },
  {
    id: 'hm-dating-relatie-cu-tine',
    name: 'HeartMapping – Relația cu Tine',
    subtitle: 'Program 3 luni | 6 sesiuni individuale',
    price: 2400,
    currency: 'RON',
    duration: '3 luni',
    sessions: '6 sesiuni x 60 min',
    format: 'Online, Zoom',
    targetAudience:
      'Femei și bărbați singuri cu teamă de abandon sau respingere, care își pierd identitatea în relații sau fug când relația devine serioasă.',
    outcomes: [
      'Clarificarea tiparului de adaptare (ADAPT)',
      'Lucru pe limite, nevoi, cereri',
      'Exerciții somatice și emoționale de autoreglare',
      'Bază pentru relații mai sănătoase',
    ],
  },
  {
    id: 'hm-dating-lab-grup',
    name: 'HeartMapping – Dating Lab',
    subtitle: 'Grup 6 luni | 12 sesiuni de grup',
    price: 3600,
    originalPrice: 4800,
    currency: 'RON',
    duration: '6 luni',
    sessions: '12 sesiuni x 3 ore',
    groupSize: 'maxim 12 participanți',
    format: 'Online, Zoom',
    targetAudience:
      'Femei și bărbați care se simt singuri în procesul de căutare a partenerului, nu au cu cine reflecta sau care apreciază feedback-ul și experiența de grup.',
    outcomes: [
      'Exerciții 2 câte 2 (role-play, feedback ghidat)',
      'Hărți emoționale discutate în grup',
      'Claritate și normalizarea experiențelor',
    ],
  },
  {
    id: 'hm-relatii-diagnostic',
    name: 'HeartMapping Relații – Diagnostic Emoțional',
    subtitle: 'Sesiune unică 90 min',
    price: 600,
    currency: 'RON',
    duration: '90 minute',
    format: 'Online, Zoom',
    targetAudience:
      'Femei sau bărbați într-o relație tensionată, cu potențial, care vor să-și identifice emoția dominantă care facilitează sau împiedică o relație împlinitoare.',
    outcomes: [
      'Clarificarea emoției dominante',
      'Identificarea a 1–2 tipare repetitive',
      '1 hartă emoțională de bază',
      '1 recomandare de traseu (program)',
    ],
  },
  {
    id: 'hm-relatii-cu-partenerul',
    name: 'HeartMapping – Relația cu Partenerul',
    subtitle: 'Program 3 luni | 6 sesiuni individuale',
    price: 2400,
    currency: 'RON',
    duration: '3 luni',
    sessions: '6 sesiuni x 60 min',
    format: 'Online, Zoom',
    targetAudience:
      'Femei și bărbați într-o relație, cu teamă de abandon sau respingere, care își pierd identitatea în relație sau fug când relația devine conflictuală.',
    outcomes: [
      'Clarificarea tiparului de adaptare (ADAPT)',
      'Lucru pe limite, nevoi, cereri',
      'Exerciții somatice și emoționale de autoreglare',
      'Bază pentru relații mai sănătoase',
    ],
  },
  {
    id: 'hm-relatii-laborator-grup',
    name: 'HeartMapping – Laboratorul de Relații',
    subtitle: 'Grup 6 luni | 12 sesiuni de grup',
    price: 3600,
    originalPrice: 4800,
    currency: 'RON',
    duration: '6 luni',
    sessions: '12 sesiuni x 3 ore',
    groupSize: 'maxim 12 participanți',
    format: 'Online, Zoom',
    targetAudience:
      'Femei și bărbați care se simt confuzi în relație, nu au cu cine reflecta sau care apreciază feedback-ul și experiența de grup.',
    outcomes: [
      'Exerciții 2 câte 2 (role-play, feedback ghidat)',
      'Hărți emoționale discutate în grup',
      'Claritate și normalizarea experiențelor',
    ],
  },
  {
    id: 'sesiune-coaching-individuala',
    name: 'Sesiune individuală de coaching',
    price: 400,
    currency: 'RON',
    duration: '60 minute',
    format: 'Online, Zoom',
  },
  {
    id: 'pachet-5-sesiuni',
    name: 'Pachet 5 sesiuni de coaching',
    price: 1900,
    currency: 'RON',
    pricePerSession: 380,
  },
  {
    id: 'pachet-10-sesiuni',
    name: 'Pachet 10 sesiuni de coaching',
    price: 3600,
    currency: 'RON',
    pricePerSession: 360,
  },
  {
    id: 'sesiune-hipnoza',
    name: 'Sesiune de hipnoză',
    price: 400,
    currency: 'RON',
    duration: '60 minute',
  },
  {
    id: 'regresie-hipnotica',
    name: 'Regresie Hipnotică',
    price: 600,
    currency: 'RON',
    duration: '90 minute',
  },
  {
    id: 'core-transformation',
    name: 'Core Transformation©',
    price: 900,
    currency: 'RON',
    duration: '120 minute',
  },
]

export const datingProducts = products.filter((p) =>
  ['hm-dating-diagnostic', 'hm-dating-relatie-cu-tine', 'hm-dating-lab-grup'].includes(p.id)
)

export const relatiiProducts = products.filter((p) =>
  ['hm-relatii-diagnostic', 'hm-relatii-cu-partenerul', 'hm-relatii-laborator-grup'].includes(p.id)
)

export const individualProducts = products.filter((p) =>
  [
    'sesiune-coaching-individuala',
    'pachet-5-sesiuni',
    'pachet-10-sesiuni',
    'sesiune-hipnoza',
    'regresie-hipnotica',
    'core-transformation',
  ].includes(p.id)
)
