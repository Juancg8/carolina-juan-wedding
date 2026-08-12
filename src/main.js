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
    <filter id="envelope-shadow" x="-20%" y="-20%" width="140%" height="150%">
      <feDropShadow dx="0" dy="18" stdDeviation="16" flood-color="#26303b" flood-opacity="0.18"/>
    </filter>

    <filter id="wax-shadow" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="8" stdDeviation="6" flood-color="#26303b" flood-opacity="0.32"/>
    </filter>

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

    <radialGradient id="wax-highlight" cx="30%" cy="25%" r="50%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <style>
    .svg-flap-text { font-family: 'Cormorant Garamond', serif; font-weight: 600; fill: #0b3048; letter-spacing: 4px; font-size: 20px; }
    .svg-wax-text { font-family: 'Cormorant Garamond', serif; font-weight: 700; font-style: italic; fill: #fff5e4; font-size: 24px; }
    .svg-wax-text-shadow { font-family: 'Cormorant Garamond', serif; font-weight: 700; font-style: italic; fill: #4d1804; font-size: 24px; }
  </style>

  <g class="envelope-art" filter="url(#envelope-shadow)">
    <rect class="envelope-paper" x="20" y="20" width="760" height="480" rx="3" fill="url(#paper-gradient)"/>
    <path class="envelope-bottom" d="M 20 500 L 400 270 L 780 500 Z" fill="#f3efe2"/>
    <path class="envelope-side envelope-left" d="M 20 20 L 400 270 L 20 500 Z" fill="#eee9da" opacity="0.6"/>
    <path class="envelope-side envelope-right" d="M 780 20 L 400 270 L 780 500 Z" fill="#e9e4d6" opacity="0.6"/>
    <path class="envelope-line" d="M 20 500 L 400 270 L 780 500" fill="none" stroke="#36566f" stroke-opacity="0.15" stroke-width="1.2"/>

    <g class="envelope-flap-svg">
      <path d="M 20 20 L 780 20 L 400 292 Z" fill="#0b3048" opacity="0.06"/>
      <path class="envelope-flap" d="M 20 20 L 780 20 L 400 285 Z" fill="url(#flap-gradient)" stroke="#36566f" stroke-opacity="0.15" stroke-width="1"/>

      <g class="envelope-text-svg">
        <text x="400" y="95" text-anchor="middle" class="svg-flap-text">ESTÁS INVITADO A</text>
        <text x="400" y="130" text-anchor="middle" class="svg-flap-text">ALGO MUY ESPECIAL</text>
      </g>

      <g transform="translate(400, 165)" opacity="0.75">
        <line x1="-70" y1="0" x2="-20" y2="0" stroke="#ad8750" stroke-width="1"/>
        <circle cx="0" cy="0" r="2.5" fill="#ad8750"/>
        <line x1="20" y1="0" x2="70" y2="0" stroke="#ad8750" stroke-width="1"/>
      </g>

      <g class="wax-seal-svg" transform="translate(400, 285)" filter="url(#wax-shadow)">
        <path d="M -6 -50 C 20 -54, 46 -44, 53 -22 C 61 -2, 52 28, 42 45 C 24 61, -12 58, -36 47 C -56 37, -60 10, -54 -16 C -48 -38, -28 -48, -6 -50 Z" fill="url(#wax-gradient)"/>
        <path d="M -6 -50 C 20 -54, 46 -44, 53 -22 C 61 -2, 52 28, 42 45 Z" fill="url(#wax-highlight)"/>
        <path d="M -3 -41 C 15 -44, 37 -36, 42 -18 C 47 -2, 40 21, 32 35 C 18 47, -9 44, -28 36 C -43 28, -46 8, -42 -12 C -38 -29, -21 -38, -3 -41 Z" fill="none" stroke="#6e2305" stroke-width="2" opacity="0.5"/>
        <circle cx="0" cy="0" r="34" fill="none" stroke="#fff5e4" stroke-width="1" opacity="0.3"/>
        <text x="1" y="9" text-anchor="middle" class="svg-wax-text-shadow">J&amp;C</text>
        <text x="0" y="8" text-anchor="middle" class="svg-wax-text">J&amp;C</text>
      </g>
    </g>
  </g>
</svg>
`

/* =========================================
   CALENDARIO OCTUBRE 2026 EN SVG
========================================= */
const calendarSvg = `
<svg class="calendar-svg" viewBox="0 0 350 320" xmlns="http://www.w3.org/2000/svg">
  <style>
    .cal-header { font-family: 'Cormorant Garamond', serif; font-size: 22px; font-weight: 700; fill: #0b3048; letter-spacing: 3px; }
    .cal-day-name { font-family: sans-serif; font-size: 11px; font-weight: 600; fill: #ad8750; }
    .cal-num { font-family: sans-serif; font-size: 13px; fill: #4a5568; text-anchor: middle; }
    .cal-num-marked { font-family: sans-serif; font-size: 14px; font-weight: 700; fill: #ffffff; text-anchor: middle; }
  </style>

  <!-- Encabezado del Mes -->
  <text x="175" y="30" text-anchor="middle" class="cal-header">OCTUBRE 2026</text>
  <line x1="40" y1="45" x2="310" y2="45" stroke="#ad8750" stroke-width="1" opacity="0.4"/>

  <!-- Días de la semana (Octubre 2026 inicia en Jueves = 1) -->
  <g transform="translate(0, 65)">
    <text x="45" y="0" text-anchor="middle" class="cal-day-name">DOM</text>
    <text x="88" y="0" text-anchor="middle" class="cal-day-name">LUN</text>
    <text x="131" y="0" text-anchor="middle" class="cal-day-name">MAR</text>
    <text x="174" y="0" text-anchor="middle" class="cal-day-name">MIÉ</text>
    <text x="217" y="0" text-anchor="middle" class="cal-day-name">JUE</text>
    <text x="260" y="0" text-anchor="middle" class="cal-day-name">VIE</text>
    <text x="303" y="0" text-anchor="middle" class="cal-day-name">SÁB</text>
  </g>

  <!-- Números de los días -->
  <g transform="translate(0, 95)">
    <!-- Semana 1 -->
    <text x="217" y="0" class="cal-num">1</text>
    <text x="260" y="0" class="cal-num">2</text>
    <text x="303" y="0" class="cal-num">3</text>

    <!-- Semana 2 -->
    <text x="45" y="35" class="cal-num">4</text>
    <text x="88" y="35" class="cal-num">5</text>
    <text x="131" y="35" class="cal-num">6</text>
    <text x="174" y="35" class="cal-num">7</text>
    <text x="217" y="35" class="cal-num">8</text>
    <text x="260" y="35" class="cal-num">9</text>
    <text x="303" y="35" class="cal-num">10</text>

    <!-- Semana 3 -->
    <text x="45" y="70" class="cal-num">11</text>
    <text x="88" y="70" class="cal-num">12</text>
    <text x="131" y="70" class="cal-num">13</text>
    <text x="174" y="70" class="cal-num">14</text>
    <text x="217" y="70" class="cal-num">15</text>
    <text x="260" y="70" class="cal-num">16</text>
    
    <!-- DÍA DE LA BODA (17 DE OCTUBRE) -->
    <circle cx="303" cy="65" r="15" fill="#c94e17" />
    <text x="303" y="70" class="cal-num-marked">17</text>

    <!-- Semana 4 -->
    <text x="45" y="105" class="cal-num">18</text>
    <text x="88" y="105" class="cal-num">19</text>
    <text x="131" y="105" class="cal-num">20</text>
    <text x="174" y="105" class="cal-num">21</text>
    <text x="217" y="105" class="cal-num">22</text>
    <text x="260" y="105" class="cal-num">23</text>
    <text x="303" y="105" class="cal-num">24</text>

    <!-- Semana 5 -->
    <text x="45" y="140" class="cal-num">25</text>
    <text x="88" y="140" class="cal-num">26</text>
    <text x="131" y="140" class="cal-num">27</text>
    <text x="174" y="140" class="cal-num">28</text>
    <text x="217" y="140" class="cal-num">29</text>
    <text x="260" y="140" class="cal-num">30</text>
    <text x="303" y="140" class="cal-num">31</text>
  </g>
</svg>
`

/* =========================================
   HTML PRINCIPAL
========================================= */
document.querySelector('#app').innerHTML = `

<audio id="wedding-music" loop src="/src/assets/cancion.mp3"></audio>

<button id="music-btn" class="music-toggle-btn is-hidden" aria-label="Control de música">
  <span class="music-icon icon-play">🎵</span>
  <span class="music-icon icon-pause">⏸</span>
</button>

<!-- 1. PANTALLA INICIAL SOBRE -->
<section class="opening-screen">
  <div class="monogram" aria-label="Carolina y Juan">
    <span>J</span><small>&</small><span>C</span>
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
      <span>17</span><i>•</i><span>10</span><i>•</i><span>2026</span>
    </div>
  </div>

  <button class="open-button" type="button">Abrir invitación</button>
  <!-- <p class="opening-message">Queremos que esta historia comience con tu compañía</p> -->
</section>

<!-- 2. SECCIÓN HERO -->
<section class="hero-section reveal-on-scroll">
  <div class="hero-content">
    <p class="hero-kicker">¡NOS CASAMOS!</p>
    <h1>Carolina <span>&</span> Juan</h1>

    <div class="hero-photo-frame">
      <img src="/src/assets/hero-couple.jpg" alt="Carolina y Juan">
    </div>

    <p class="hero-date">17 · OCTUBRE · 2026</p>
    <p class="hero-message">Queremos que esta historia comience con tu compañía</p>
  </div>
</section>

<!-- 3. SECCIÓN GALERÍA DE FOTOS -->
<section class="gallery-section reveal-on-scroll">
  <h2 class="section-title">Nuestros Momentos</h2>
  <div class="gallery-decorative-line"></div>

  <div class="gallery-grid">
    <div class="gallery-item">
      <img src="/src/assets/Gale_1.jpg" alt="Foto 1 Carolina y Juan" class="gallery-img">
    </div>
    <div class="gallery-item">
      <img src="/src/assets/Gale_2.jpg" alt="Foto 2 Carolina y Juan" class="gallery-img">
    </div>
    <div class="gallery-item">
      <img src="/src/assets/Gale_3.jpg" alt="Foto 3 Carolina y Juan" class="gallery-img">
    </div>
    <div class="gallery-item">
      <img src="/src/assets/Gale_4.jpg" alt="Foto 3 Carolina y Juan" class="gallery-img">
    </div>
  </div>
</section>

<!-- 4. SECCIÓN CALENDARIO, CUENTA REGRESIVA Y MILO -->
<section class="date-section reveal-on-scroll">
  <h2 class="section-title">Reserva la Fecha</h2>
  <p class="section-subtitle">Octubre 17 2026</p>

  <div class="date-layout-grid">
    
    <!-- COLUMNA IZQUIERDA: FOTO DE MILO -->
    <div class="milo-photo-column">
      <div class="milo-frame">
        <img src="/src/assets/milo.jpg" alt="Milo" class="milo-img">
        <span class="milo-caption">Milo también los espera 🐾</span>
      </div>
    </div>

    <!-- COLUMNA DERECHA: CALENDARIO Y CONTADOR -->
    <div class="date-content-column">
      
      <!-- Calendario SVG -->
      <div class="calendar-wrapper">
        ${calendarSvg}
      </div>

      <!-- Contador Regresivo -->
      <div class="countdown-wrapper">
        <div class="countdown-grid">
          <div class="cd-box">
            <span id="cd-days" class="cd-num">00</span>
            <span class="cd-label">Días</span>
          </div>
          <div class="cd-box">
            <span id="cd-hours" class="cd-num">00</span>
            <span class="cd-label">Horas</span>
          </div>
          <div class="cd-box">
            <span id="cd-minutes" class="cd-num">00</span>
            <span class="cd-label">Min</span>
          </div>
          <div class="cd-box">
            <span id="cd-seconds" class="cd-num">00</span>
            <span class="cd-label">Seg</span>
          </div>
        </div>
      </div>

    </div>

  </div>
</section>

<!-- LIGHTBOX PARA VER FOTOS EN GRANDE -->
<div id="lightbox" class="lightbox">
  <span class="lightbox-close">&times;</span>
  <img class="lightbox-content" id="lightbox-img">
</div>
`

/* =========================================
   ELEMENTOS Y LÓGICA
========================================= */
const openingScreen = document.querySelector('.opening-screen')
const envelope = document.querySelector('.envelope')
const envelopeWrapper = document.querySelector('.envelope-wrapper')
const openButton = document.querySelector('.open-button')
const heroSection = document.querySelector('.hero-section')

const audio = document.getElementById('wedding-music')
const musicBtn = document.getElementById('music-btn')
let isPlaying = false

function playMusic() {
  audio.play().then(() => {
    isPlaying = true
    musicBtn.classList.remove('is-hidden')
    musicBtn.classList.add('is-playing')
  }).catch(() => {
    musicBtn.classList.remove('is-hidden')
  })
}

function toggleMusic() {
  if (isPlaying) {
    audio.pause()
    musicBtn.classList.remove('is-playing')
    isPlaying = false
  } else {
    audio.play().then(() => {
      musicBtn.classList.add('is-playing')
      isPlaying = true
    })
  }
}

musicBtn.addEventListener('click', toggleMusic)

/* ABRIR INVITACIÓN */
function openInvitation() {
  if (openingScreen.classList.contains('is-opening')) return

  playMusic()

  openingScreen.classList.add('is-opening')
  envelope.classList.add('is-open')
  envelopeWrapper.classList.add('is-open')
  openButton.classList.add('is-hidden')

  setTimeout(() => {
    document.body.classList.remove('invitation-locked')
    document.body.classList.add('invitation-open')

    heroSection.scrollIntoView({ behavior: 'smooth', block: 'start' })

    setTimeout(() => {
      openingScreen.style.display = 'none'
      window.scrollTo(0, 0)
      initScrollAnimations() // Activa el observer para las animaciones al bajar
    }, 800)
  }, 1000)
}

openButton.addEventListener('click', openInvitation)
envelope.addEventListener('click', openInvitation)

/* =========================================
   SISTEMA DE CUENTA REGRESIVA
========================================= */
const weddingDate = new Date('2026-10-17T16:00:00').getTime()

function updateCountdown() {
  const now = new Date().getTime()
  const diff = weddingDate - now

  if (diff <= 0) {
    document.querySelector('.countdown-grid').innerHTML = '<p class="cd-finished">¡Hoy es nuestro gran día!</p>'
    return
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((diff % (1000 * 60)) / 1000)

  document.getElementById('cd-days').innerText = days < 10 ? `0${days}` : days
  document.getElementById('cd-hours').innerText = hours < 10 ? `0${hours}` : hours
  document.getElementById('cd-minutes').innerText = minutes < 10 ? `0${minutes}` : minutes
  document.getElementById('cd-seconds').innerText = seconds < 10 ? `0${seconds}` : seconds
}

setInterval(updateCountdown, 1000)
updateCountdown()

/* =========================================
   ANIMACIÓN DE DESVANECIMIENTO AL SCROLLEAR
========================================= */
function initScrollAnimations() {
  const reveals = document.querySelectorAll('.reveal-on-scroll')

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
      }
    })
  }, { threshold: 0.15 })

  reveals.forEach(el => observer.observe(el))
}

/* =========================================
   LIGHTBOX PARA LA GALERÍA
========================================= */
const lightbox = document.getElementById('lightbox')
const lightboxImg = document.getElementById('lightbox-img')
const closeBtn = document.querySelector('.lightbox-close')

document.querySelectorAll('.gallery-img').forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex'
    lightboxImg.src = img.src
  })
})

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none'
})

lightbox.addEventListener('click', (e) => {
  if (e.target !== lightboxImg) {
    lightbox.style.display = 'none'
  }
})