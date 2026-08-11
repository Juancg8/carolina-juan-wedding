import './style.css'

document.body.classList.add('invitation-locked')

/* =========================================
   SOBRE SVG
========================================= */

const envelopeSvg = `
<svg
  class="envelope-svg"
  viewBox="0 0 800 520"
  xmlns="http://www.w3.org/2000/svg"
  aria-label="Sobre de invitación"
  role="img"
>
  <defs>
    <!-- Sombra del sobre -->
    <filter id="envelope-shadow" x="-20%" y="-20%" width="140%" height="150%">
      <feDropShadow dx="0" dy="18" stdDeviation="16" flood-color="#26303b" flood-opacity="0.18"/>
    </filter>

    <!-- Sombra 3D profunda del Sello -->
    <filter id="wax-shadow" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="8" stdDeviation="6" flood-color="#26303b" flood-opacity="0.32"/>
    </filter>

    <!-- Degradados -->
    <linearGradient id="paper-gradient" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#f8f5eb"/>
      <stop offset="100%" stop-color="#eee9da"/>
    </linearGradient>

    <linearGradient id="flap-gradient" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#faf7ef"/>
      <stop offset="100%" stop-color="#e9e4d6"/>
    </linearGradient>

    <radialGradient id="wax-gradient" cx="35%" cy="30%" r="75%">
      <stop offset="0%" stop-color="#e68a43"/>
      <stop offset="45%" stop-color="#c94e17"/>
      <stop offset="85%" stop-color="#9e3b12"/>
      <stop offset="100%" stop-color="#6e2305"/>
    </radialGradient>

    <!-- Brillo plastificado sobre el sello -->
    <radialGradient id="wax-highlight" cx="30%" cy="25%" r="50%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <style>
    .svg-flap-text {
      font-family: 'Cormorant Garamond', 'Georgia', serif;
      font-weight: 600;
      fill: #0b3048;
      letter-spacing: 4px;
      font-size: 20px;
    }
    .svg-wax-text {
      font-family: 'Cormorant Garamond', 'Georgia', serif;
      font-weight: 700;
      font-style: italic;
      fill: #fff5e4;
      font-size: 24px;
    }
    .svg-wax-text-shadow {
      font-family: 'Cormorant Garamond', 'Georgia', serif;
      font-weight: 700;
      font-style: italic;
      fill: #4d1804;
      font-size: 24px;
    }
  </style>

  <g class="envelope-art" filter="url(#envelope-shadow)">

    <!-- Papel completo/Base -->
    <rect class="envelope-paper" x="20" y="20" width="760" height="480" rx="3" fill="url(#paper-gradient)"/>

    <!-- Solapa Inferior -->
    <path class="envelope-bottom" d="M 20 500 L 400 270 L 780 500 Z" fill="#f3efe2"/>

    <!-- Solapas Laterales -->
    <path class="envelope-side envelope-left" d="M 20 20 L 400 270 L 20 500 Z" fill="#eee9da" opacity="0.6"/>
    <path class="envelope-side envelope-right" d="M 780 20 L 400 270 L 780 500 Z" fill="#e9e4d6" opacity="0.6"/>

    <!-- Líneas de Pliegues -->
    <path class="envelope-line" d="M 20 500 L 400 270 L 780 500" fill="none" stroke="#36566f" stroke-opacity="0.15" stroke-width="1.2"/>

    <!-- ================= SOLAPA SUPERIOR ================= -->
    <g class="envelope-flap-svg">
      <!-- Sombra de la solapa -->
      <path d="M 20 20 L 780 20 L 400 292 Z" fill="#0b3048" opacity="0.06"/>

      <!-- Tapa -->
      <path class="envelope-flap" d="M 20 20 L 780 20 L 400 285 Z" fill="url(#flap-gradient)" stroke="#36566f" stroke-opacity="0.15" stroke-width="1"/>

      <!-- TEXTO DE LA SOLAPA -->
      <g class="envelope-text-svg">
        <text x="400" y="95" text-anchor="middle" class="svg-flap-text">ESTÁS INVITADO A</text>
        <text x="400" y="130" text-anchor="middle" class="svg-flap-text">ALGO MUY ESPECIAL</text>
      </g>

      <!-- Adorno dorado divisor en la solapa -->
      <g transform="translate(400, 165)" opacity="0.75">
        <line x1="-70" y1="0" x2="-20" y2="0" stroke="#ad8750" stroke-width="1"/>
        <circle cx="0" cy="0" r="2.5" fill="#ad8750"/>
        <line x1="20" y1="0" x2="70" y2="0" stroke="#ad8750" stroke-width="1"/>
      </g>

      <!-- ================= SELLO DE CERA REPOSICIONADO ================= -->
      <g class="wax-seal-svg" transform="translate(400, 285)" filter="url(#wax-shadow)">
        
        <path d="
          M -6 -50 
          C 20 -54, 46 -44, 53 -22 
          C 61 -2, 52 28, 42 45 
          C 24 61, -12 58, -36 47 
          C -56 37, -60 10, -54 -16 
          C -48 -38, -28 -48, -6 -50 Z" 
          fill="url(#wax-gradient)"
        />

        <path d="
          M -6 -50 
          C 20 -54, 46 -44, 53 -22 
          C 61 -2, 52 28, 42 45 Z" 
          fill="url(#wax-highlight)"
        />

        <path d="
          M -3 -41 
          C 15 -44, 37 -36, 42 -18 
          C 47 -2, 40 21, 32 35 
          C 18 47, -9 44, -28 36 
          C -43 28, -46 8, -42 -12 
          C -38 -29, -21 -38, -3 -41 Z" 
          fill="none" stroke="#6e2305" stroke-width="2" opacity="0.5"
        />

        <circle cx="0" cy="0" r="34" fill="none" stroke="#fff5e4" stroke-width="1" opacity="0.3"/>

        <!-- Monograma J&C -->
        <text x="1" y="9" text-anchor="middle" class="svg-wax-text-shadow">J&amp;C</text>
        <text x="0" y="8" text-anchor="middle" class="svg-wax-text">J&amp;C</text>

        <path d="M -15 16 Q 0 22 15 16" fill="none" stroke="#fff5e4" stroke-width="1.2" opacity="0.75"/>
        <circle cx="-8" cy="18.5" r="1.2" fill="#fff5e4" opacity="0.8"/>
        <circle cx="0" cy="20" r="1.2" fill="#fff5e4" opacity="0.8"/>
        <circle cx="8" cy="18.5" r="1.2" fill="#fff5e4" opacity="0.8"/>
      </g>

    </g>

  </g>
</svg>
`

/* =========================================
   HTML PRINCIPAL
========================================= */

document.querySelector('#app').innerHTML = `

<section class="opening-screen">

  <div class="monogram" aria-label="Carolina y Juan">
    <span>J</span>
    <small>&</small>
    <span>C</span>
  </div>

  <img src="/src/assets/flores-izq.png" class="botanical-png botanical-png-left" alt="" aria-hidden="true" />
  <img src="/src/assets/flores-der.png" class="botanical-png botanical-png-right" alt="" aria-hidden="true" />

  <div class="envelope-wrapper">
    <div class="envelope" tabindex="0" role="button" aria-label="Abrir invitación">
      ${envelopeSvg}
    </div>
  </div>

  <div class="couple-names">
    <h1>Carolina & Juan</h1>
    <div class="date">
      <span>17</span>
      <i>•</i>
      <span>10</span>
      <i>•</i>
      <span>2026</span>
    </div>
  </div>

  <button class="open-button" type="button">
    Abrir invitación
  </button>

  <p class="opening-message">
    Una historia que comienza contigo
  </p>

</section>

<!-- =========================================
     HERO Y SECCIONES SIGUIENTES
========================================= -->

<section class="hero-section">

  <div class="hero-content">

    <p class="hero-kicker">
      Nuestra historia
    </p>

    <h1>
      Carolina <span>&</span> Juan
    </h1>

    <div class="hero-photo-frame">
      <img
        src="/src/assets/hero-couple.jpg"
        alt="Carolina y Juan"
      >
    </div>

    <p class="hero-date">
      17 · OCTUBRE · 2026
    </p>

    <p class="hero-message">
      Una historia que comienza contigo
    </p>

    <div class="hero-scroll">
      <span></span>
    </div>

  </div>

</section>
`

/* =========================================
   ELEMENTOS
========================================= */

const openingScreen = document.querySelector('.opening-screen')
const envelope = document.querySelector('.envelope')
const envelopeWrapper = document.querySelector('.envelope-wrapper')
const openButton = document.querySelector('.open-button')
const heroSection = document.querySelector('.hero-section')

/* =========================================
   ABRIR INVITACIÓN Y SECUENCIA
========================================= */

function openInvitation() {
  if (openingScreen.classList.contains('is-opening')) {
    return
  }

  /* 1. Animación del sobre */
  openingScreen.classList.add('is-opening')
  envelope.classList.add('is-open')
  envelopeWrapper.classList.add('is-open')
  openButton.classList.add('is-hidden')

  /* 2. Scroll suave hacia el Hero */
  setTimeout(() => {
    document.body.classList.remove('invitation-locked')
    document.body.classList.add('invitation-open')

    heroSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })

    /* 3. Eliminación completa del sobre de la pantalla */
    setTimeout(() => {
      openingScreen.style.display = 'none'
      window.scrollTo(0, 0) // Hace que el Hero sea el nuevo "top" absoluto
    }, 800)

  }, 1000)
}

/* =========================================
   EVENTOS
========================================= */

openButton.addEventListener('click', openInvitation)
envelope.addEventListener('click', openInvitation)

envelope.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    openInvitation()
  }
})