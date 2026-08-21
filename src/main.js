import './style.css'
import { supabase } from './supabaseClient.js'

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

  <text x="175" y="30" text-anchor="middle" class="cal-header">OCTUBRE 2026</text>
  <line x1="40" y1="45" x2="310" y2="45" stroke="#ad8750" stroke-width="1" opacity="0.4"/>

  <g transform="translate(0, 65)">
    <text x="45" y="0" text-anchor="middle" class="cal-day-name">DOM</text>
    <text x="88" y="0" text-anchor="middle" class="cal-day-name">LUN</text>
    <text x="131" y="0" text-anchor="middle" class="cal-day-name">MAR</text>
    <text x="174" y="0" text-anchor="middle" class="cal-day-name">MIÉ</text>
    <text x="217" y="0" text-anchor="middle" class="cal-day-name">JUE</text>
    <text x="260" y="0" text-anchor="middle" class="cal-day-name">VIE</text>
    <text x="303" y="0" text-anchor="middle" class="cal-day-name">SÁB</text>
  </g>

  <g transform="translate(0, 95)">
    <text x="217" y="0" class="cal-num">1</text>
    <text x="260" y="0" class="cal-num">2</text>
    <text x="303" y="0" class="cal-num">3</text>

    <text x="45" y="35" class="cal-num">4</text>
    <text x="88" y="35" class="cal-num">5</text>
    <text x="131" y="35" class="cal-num">6</text>
    <text x="174" y="35" class="cal-num">7</text>
    <text x="217" y="35" class="cal-num">8</text>
    <text x="260" y="35" class="cal-num">9</text>
    <text x="303" y="35" class="cal-num">10</text>

    <text x="45" y="70" class="cal-num">11</text>
    <text x="88" y="70" class="cal-num">12</text>
    <text x="131" y="70" class="cal-num">13</text>
    <text x="174" y="70" class="cal-num">14</text>
    <text x="217" y="70" class="cal-num">15</text>
    <text x="260" y="70" class="cal-num">16</text>
    
    <circle cx="303" cy="65" r="15" fill="#c94e17" />
    <text x="303" y="70" class="cal-num-marked">17</text>

    <text x="45" y="105" class="cal-num">18</text>
    <text x="88" y="105" class="cal-num">19</text>
    <text x="131" y="105" class="cal-num">20</text>
    <text x="174" y="105" class="cal-num">21</text>
    <text x="217" y="105" class="cal-num">22</text>
    <text x="260" y="105" class="cal-num">23</text>
    <text x="303" y="105" class="cal-num">24</text>

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

<audio id="wedding-music" loop src="/assets/cancion1.mp3"></audio>

<button id="music-btn" class="music-toggle-btn is-hidden" aria-label="Control de música">
  <span class="music-icon icon-play">🎵</span>
  <span class="music-icon icon-pause">⏸</span>
</button>

<!-- PANTALLA INICIAL SOBRE -->
<section class="opening-screen">
  <div class="monogram" aria-label="Carolina y Juan">
    <span>J</span><small>&</small><span>C</span>
  </div>
  <img src="/assets/Flores-izq.png" class="botanical-png botanical-png-left" alt="" aria-hidden="true" />
  <img src="/assets/Flores-der.png" class="botanical-png botanical-png-right" alt="" aria-hidden="true" />

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
    <div class="guest-envelope-title" style="margin-top: 15px; font-size: 1.2rem; color: #ad8750;">
      <span id="envelope-guest-name">Cargando invitación...</span>
    </div>
  </div>

  <button class="open-button" type="button">Abrir invitación</button>
</section>

<!-- 1. SECCIÓN HERO -->
<section class="hero-section reveal-on-scroll">
  <div class="hero-content">

    <div class="parents-section">
      <span class="parents-main-label">Con la bendición de nuestros padres</span>

      <div class="parents-block">
        <div class="parents-column">
          <p class="parent-name">Gabriel Carvajal Martínez</p>
          <p class="parent-name">Luz Amanda Gómez Arismendy</p>
        </div>

        <div class="parents-divider"></div>

        <div class="parents-column">
          <p class="parent-name">Julio Eduardo Santana Villarraga ✝️</p>
          <p class="parent-name">Luz Mery Forero Rios</p>
        </div>
      </div>
    </div>

    <p class="hero-announcement">
      Tenemos el gusto de invitarlos a celebrar nuestro matrimonio
    </p>

    <div class="couple-names-hero">
      <h1 class="groom-name">Juan Carvajal</h1>
      <span class="ampersand">&amp;</span>
      <h1 class="bride-name">Carolina Santana</h1>
    </div>

    <div class="hero-photo-frame">
      <img src="/assets/hero-couple.jpg" alt="Juan y Carolina">
    </div>

    <div class="scroll-hint">
      <span class="scroll-text">Desliza hacia abajo</span>
      <div class="scroll-arrow">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 5v14M19 12l-7 7-7-7"/>
        </svg>
      </div>
    </div>

  </div>
</section>

<!-- 2. SECCIÓN GALERÍA DE FOTOS -->
<section class="gallery-section reveal-on-scroll">
  <h2 class="section-title">Nuestras Mejores Aventuras</h2>
  <p class="section-subtitle">Risas, paisajes y momentos que guardamos en el corazón</p>

  <div class="gallery-collage">
    <!-- 1 FOTO GRANDE (Destacada 2x2) -->
    <div class="gallery-item featured">
      <img src="/assets/Gale_1.jpg" alt="Aventura principal" class="gallery-img">
      <div class="gallery-overlay"><span>Ver foto</span></div>
    </div>

    <!-- 1ª FOTO MEDIANA -->
    <div class="gallery-item">
      <img src="/assets/Gale_2.jpg" alt="Paisaje y naturaleza" class="gallery-img">
      <div class="gallery-overlay"><span>Ver foto</span></div>
    </div>

    <!-- 2ª FOTO MEDIANA -->
    <div class="gallery-item">
      <img src="/assets/Gale_3.jpg" alt="Momento juntos" class="gallery-img">
      <div class="gallery-overlay"><span>Ver foto</span></div>
    </div>

    <!-- 1º BLOQUE MINI-MOSAICO (4 fotos pequeñas) -->
    <div class="gallery-mosaic-card">
      <div class="gallery-item mini-item">
        <img src="/assets/Gale_4.jpg" alt="Detalle 1" class="gallery-img">
        <div class="gallery-overlay"><span>Ver</span></div>
      </div>
      <div class="gallery-item mini-item">
        <img src="/assets/Gale_5.jpg" alt="Detalle 2" class="gallery-img">
        <div class="gallery-overlay"><span>Ver</span></div>
      </div>
      <div class="gallery-item mini-item">
        <img src="/assets/Gale_6.jpg" alt="Detalle 3" class="gallery-img">
        <div class="gallery-overlay"><span>Ver</span></div>
      </div>
      <div class="gallery-item mini-item">
        <img src="/assets/Gale_7.jpg" alt="Detalle 4" class="gallery-img">
        <div class="gallery-overlay"><span>Ver</span></div>
      </div>
    </div>

    <!-- 2º BLOQUE MINI-MOSAICO (4 fotos pequeñas) -->
    <div class="gallery-mosaic-card">
      <div class="gallery-item mini-item">
        <img src="/assets/Gale_8.jpg" alt="Detalle 5" class="gallery-img">
        <div class="gallery-overlay"><span>Ver</span></div>
      </div>
      <div class="gallery-item mini-item">
        <img src="/assets/Gale_9.jpg" alt="Detalle 6" class="gallery-img">
        <div class="gallery-overlay"><span>Ver</span></div>
      </div>
      <div class="gallery-item mini-item">
        <img src="/assets/Gale_10.jpg" alt="Detalle 7" class="gallery-img">
        <div class="gallery-overlay"><span>Ver</span></div>
      </div>
      <div class="gallery-item mini-item">
        <img src="/assets/Gale_11.jpg" alt="Detalle 8" class="gallery-img">
        <div class="gallery-overlay"><span>Ver</span></div>
      </div>
    </div>
  </section>
  </div>
  <!-- CRÉDITO SUTIL CON ÍCONO DE INSTAGRAM -->
  <div class="gallery-credits">
    <p>
      <span>📸 Fotos por</span>
      <a href="https://instagram.com/jac.fotografia_" target="_blank" rel="noopener">
        <svg class="ig-icon" viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
        @jac.fotografia_
      </a>
    </p>
  </div>
</section>

<!-- 3. SECCIÓN CALENDARIO, CUENTA REGRESIVA Y MILO -->
<section class="date-section reveal-on-scroll">
  <h2 class="section-title">Reserva la Fecha</h2>
  <p class="section-subtitle">Octubre 17 2026</p>

  <div class="date-layout-grid">
    <div class="milo-photo-column">
      <div class="milo-frame">
        <img src="/assets/Milo.jpg" alt="Milo" class="milo-img">
        <span class="milo-caption">Milo también los espera 🐾</span>
      </div>
    </div>

    <div class="date-content-column">
      <div class="calendar-wrapper">
        ${calendarSvg}
      </div>

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

<!-- 4. SECCIÓN FECHA Y UBICACIÓN -->
<section class="event-section reveal-on-scroll">
  <div class="event-container">
    <h2 class="section-title">¿Cuándo y Dónde?</h2>
    <p class="section-subtitle">Sábado, 17 de Octubre de 2026</p>

    <div class="event-grid">
      <div class="event-card">
        <div class="event-icon">⛪</div>
        <h3 class="event-type">Ceremonia Religiosa</h3>
        <div class="event-divider"></div>
        <p class="event-time"><strong>Hora:</strong> 3:30 PM</p>
        <h4 class="event-place">Iglesia María Auxiliadora</h4>
        <p class="event-address">La Plazuela, Cogua</p>
        
        <div class="map-frame">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20657.144792818443!2d-73.9690208872883!3d5.076985335819656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e406eb9a7f8ae39%3A0x550abfb55b1aaa8e!2sIglesia%20La%20Plazuela%20maria%20auxiliadora!5e0!3m2!1ses!2sco!4v1786586175978!5m2!1ses!2sco" width="100%" height="180" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
        </div>

        <a href="https://maps.app.goo.gl/8X3Rin69UXzL9Rg5A" target="_blank" rel="noopener" class="event-btn">
          📍 Abrir en Google Maps
        </a>
      </div>

      <div class="event-card">
        <div class="event-icon">🥂</div>
        <h3 class="event-type">Recepción</h3>
        <div class="event-divider"></div>
        <p class="event-time"><strong>Hora:</strong> 5:00 PM</p>
        <h4 class="event-place">Hacienda La Milagrosa</h4>
        <p class="event-address">Cogua, Cundinamarca</p>
        
        <div class="map-frame">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127168.18478101066!2d-74.05285573962449!3d5.102764300000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e406f10629767e3%3A0xe7e9c26fed9d068!2sLa%20Milagrosa%20Eventos%20%26%20Caba%C3%B1a%20Rom%C3%A1ntica!5e0!3m2!1ses!2sco!4v1786586070454!5m2!1ses!2sco" width="100%" height="180" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
        </div>

        <a href="https://maps.app.goo.gl/LXLKuu387pNx5drL9" target="_blank" rel="noopener" class="event-btn">
          📍 Abrir en Google Maps
        </a>
      </div>
    </div>

    <div class="calendar-action">
      <a 
        href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Matrimonio+Carolina+%26+Juan&dates=20261017T203000Z/20261018T050000Z&details=%C2%A1Acomp%C3%A1%C3%B1anos+a+celebrar+nuestro+matrimonio%21+Ceremonia+en+Iglesia+Maria+Auxiliadora+y+recepci%C3%B3n+en+Hacienda+La+Milagrosa.&location=Iglesia+Maria+Auxiliadora%2C+Cogua%2C+Cundinamarca" 
        target="_blank" 
        rel="noopener" 
        class="calendar-btn"
      >
        🗓️ Agregar a Google Calendar
      </a>
    </div>
  </div>
</section>

<!-- SECCIÓN ITINERARIO / ORDEN DEL DÍA -->
<section class="timeline-section reveal-on-scroll">
  <div class="timeline-container">
    <h2 class="section-title">Orden del Día</h2>
    <p class="section-subtitle">Así celebraremos nuestro gran día</p>

    <div class="timeline">
      
      <!-- ITEM 1: CEREMONIA -->
      <div class="timeline-item">
        <div class="timeline-marker">
          <span class="timeline-icon">⛪</span>
        </div>
        <div class="timeline-content">
          <span class="timeline-time">3:30 PM</span>
          <h3 class="timeline-title">Ceremonia Religiosa</h3>
          <p class="timeline-desc">Parroquia María Auxiliadora - La Plazuela</p>
        </div>
      </div>

      <!-- ITEM 2: RECEPCIÓN -->
      <div class="timeline-item">
        <div class="timeline-marker">
          <span class="timeline-icon">🥂</span>
        </div>
        <div class="timeline-content">
          <span class="timeline-time">5:00 PM</span>
          <h3 class="timeline-title">Llegada a la Recepción</h3>
          <p class="timeline-desc">Bienvenida y cóctel en Hacienda La Milagrosa</p>
        </div>
      </div>

      <!-- ITEM 3: CENA -->
      <div class="timeline-item">
        <div class="timeline-marker">
          <span class="timeline-icon">🍽️</span>
        </div>
        <div class="timeline-content">
          <span class="timeline-time">7:00 PM</span>
          <h3 class="timeline-title">Cena & Brindis</h3>
          <p class="timeline-desc">Compartiremos la mesa con la mejor compañía</p>
        </div>
      </div>

      <!-- ITEM 4: FIESTA -->
      <div class="timeline-item">
        <div class="timeline-marker">
          <span class="timeline-icon">🪩</span>
        </div>
        <div class="timeline-content">
          <span class="timeline-time">8:00 PM</span>
          <h3 class="timeline-title">¡A Bailar!</h3>
          <p class="timeline-desc">Apertura de pista y fiesta hasta la madrugada</p>
        </div>
      </div>

      <!-- ITEM 5: FIN DEL EVENTO -->
      <div class="timeline-item">
        <div class="timeline-marker">
          <span class="timeline-icon">✨</span>
        </div>
        <div class="timeline-content">
          <span class="timeline-time">12:00 AM</span>
          <h3 class="timeline-title">Fin del Evento</h3>
          <p class="timeline-desc">Cierre de una noche inolvidable</p>
        </div>
      </div>

    </div>
  </div>
</section>



<!-- 5. SECCIÓN DRESS CODE -->
<section class="dresscode-section reveal-on-scroll">
  <div class="dresscode-container">
    <h2 class="section-title">Código de Vestimenta</h2>
    <p class="section-subtitle">Formal / Traje de Gala</p>

    <div class="dresscode-grid">
      <div class="dresscode-card">
        <div class="dresscode-frame">
          <img src="/assets/DressCodeHombre.jpg" alt="Milo en traje formal" class="dresscode-img">
        </div>
        <h3 class="dresscode-gender">Hombres</h3>
        <p class="dresscode-desc">Traje Formal / Elegante <br><em>(¡Así de elegante como Milo!)</em></p>
      </div>

      <div class="dresscode-card">
        <div class="dresscode-frame svg-frame">
          <svg class="dress-svg" viewBox="0 0 100 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M42 20 C42 20 46 38 38 52 C30 66 18 110 15 145 C28 148 72 148 85 145 C82 110 70 66 62 52 C54 38 58 20 58 20 C54 26 46 26 42 20 Z" fill="#152A3A" opacity="0.9" />
            <path d="M42 20 C46 28 54 28 58 20 C52 35 48 35 42 20 Z" fill="#BD9855" />
            <path d="M38 52 C45 54 55 54 62 52 C61 55 39 55 38 52 Z" fill="#BD9855" />
            <path d="M50 54 L50 146" stroke="#BD9855" stroke-width="0.7" opacity="0.4" />
            <path d="M42 60 Q38 100 32 145" stroke="#FFFFFF" stroke-width="0.5" opacity="0.3" />
            <path d="M58 60 Q62 100 68 145" stroke="#FFFFFF" stroke-width="0.5" opacity="0.3" />
          </svg>
        </div>
        <h3 class="dresscode-gender">Mujeres</h3>
        <p class="dresscode-desc">Vestido Largo / Formal</p>
      </div>
    </div>

    <div class="reserved-colors-block">
      <h4 class="reserved-title">Colores Reservados</h4>
      <p class="reserved-subtitle">Agradecemos reservar los siguientes tonos para los novios y el cortejo:</p>
      
      <div class="color-palette">
        <div class="color-item">
          <span class="color-circle color-ivory"></span>
          <span class="color-name">Marfil / Blanco</span>
        </div>
        <div class="color-item">
          <span class="color-circle color-navy"></span>
          <span class="color-name">Azul Oscuro</span>
        </div>
        <div class="color-item">
          <span class="color-circle color-terracotta"></span>
          <span class="color-name">Terracota</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- 6. SECCIÓN CONFIRMACIÓN DE ASISTENCIA (RSVP) -->
<section class="rsvp-section reveal-on-scroll">
  <div class="rsvp-container">
    <div class="rsvp-card">
      <div class="rsvp-header">
        <div class="rsvp-icon">✉️</div>
        <h2 class="section-title">Confirmación de Asistencia</h2>
        <p class="section-subtitle">Por favor confirma quiénes nos acompañarán este día:</p>
      </div>

      <form id="rsvp-form" class="rsvp-form">
        <div id="checklist-container" class="checklist-container">
          <!-- Cargando participantes con animación -->
          <div class="rsvp-loading">
            <span class="spinner"></span>
            <p>Buscando tus pases de entrada...</p>
          </div>
        </div>

        <button type="submit" class="interactive-btn submit-btn rsvp-submit">
          <span>Confirmar Asistencia</span>
        </button>

        <!-- NOTA DE EVENTO SOLO ADULTOS -->
        <div class="adults-only-note">
          <span class="note-icon">✨</span>
          <p>
            Queremos que este día sea un momento de descanso y fiesta para todos. Por esta razón, hemos planeado una celebración <strong>exclusivamente para adultos</strong>. ¡Agradecemos de corazón su comprensión!
          </p>
        </div>
      </form>
    </div>
  </div>
</section>

<!-- 7. SECCIÓN INTERACTIVA (FOTOS & MÚSICA) -->
<section class="interactive-section reveal-on-scroll">
  <div class="interactive-container">
    <h2 class="section-title">¡Hagamos la Fiesta Juntos!</h2>
    <p class="section-subtitle">Comparte tus recuerdos y ayúdanos a armar la playlist</p>

    <div class="interactive-grid">
      <div class="interactive-card">
        <div class="card-icon">📸</div>
        <h3 class="card-title">Comparte tus Fotos</h3>
        <p class="card-desc">Escanea el código QR o haz clic en el botón para subir tus fotos y videos al álbum compartido en Google Drive.</p>
        
        <div class="qr-frame">
          <img src="/assets/qr-drive.png" alt="Código QR Google Drive" class="qr-image">
        </div>

        <a href="https://drive.google.com" target="_blank" rel="noopener" class="interactive-btn">
          📂 Abrir Álbum en Drive
        </a>
      </div>

      <div class="interactive-card">
        <div class="card-icon">🎵</div>
        <h3 class="card-title">Sugerir Canción</h3>
        <p class="card-desc">¿Qué canción no puede faltar en la pista de baile? Déjanos tu recomendación:</p>
        
        <form id="music-form" class="music-form">
          <div class="form-group">
            <input type="text" id="artist" name="artist" placeholder="Artista / Banda" required>
          </div>

          <div class="form-group">
            <input type="text" id="song" name="song" placeholder="Nombre de la Canción" required>
          </div>

          <div class="form-group">
            <input type="url" id="link" name="link" placeholder="Link de Spotify o YouTube (Opcional)">
          </div>

          <button type="submit" class="interactive-btn submit-btn">
            🎶 Enviar Recomendación
          </button>
        </form>
      </div>
    </div>
  </div>
</section>

<!-- 8. SECCIÓN LLUVIA DE SOBRES Y AGRADECIMIENTO -->
<section class="closing-section reveal-on-scroll">
  <div class="closing-container">
    <div class="closing-card">
      <div class="closing-icon">✉️</div>
      <h2 class="section-title">El Mejor Regalo es tu Presencia</h2>
      <p class="closing-text">
        Si deseas tener un detalle adicional con nosotros para acompañar el inicio de nuestro hogar, 
        contaremos con un buzón de <strong>lluvia de sobres</strong> el día del evento.
      </p>
      <div class="closing-divider"></div>
      <p class="closing-subtext">¡Gracias por acompañarnos a celebrar el amor!</p>
      <p class="closing-signature">Carolina & Juan</p>
    </div>
  </div>
</section>

<!-- LIGHTBOX ÚNICO -->
<div id="lightbox" class="lightbox">
  <span id="lightbox-close" class="lightbox-close">&times;</span>
  <img id="lightbox-img" class="lightbox-content" src="" alt="Foto ampliada">
</div>
`

/* =========================================
   LÓGICA DE MÚSICA Y APERTURA DE SOBRE
========================================= */
const openingScreen = document.querySelector('.opening-screen')
const envelope = document.querySelector('.envelope')
const envelopeWrapper = document.querySelector('.envelope-wrapper')
const openButton = document.querySelector('.open-button')

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

    setTimeout(() => {
      openingScreen.style.display = 'none'
      initScrollAnimations()
    }, 600)
  }, 600)
}

openButton.addEventListener('click', openInvitation)
envelope.addEventListener('click', openInvitation)

/* =========================================
   CUENTA REGRESIVA
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

/* ANIMACIÓN DE DESVANECIMIENTO (FADE-IN EFFECT) */
function initScrollAnimations() {
  const reveals = document.querySelectorAll('.reveal-on-scroll')

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.05
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        obs.unobserve(entry.target)
      }
    })
  }, observerOptions)

  reveals.forEach(el => observer.observe(el))
}

/* =========================================
   LIGHTBOX (GALERÍA)
========================================= */
const lightbox = document.getElementById('lightbox')
const lightboxImg = document.getElementById('lightbox-img')
const lightboxClose = document.getElementById('lightbox-close')

document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', () => {
    const img = item.querySelector('.gallery-img')
    if (img && lightbox && lightboxImg) {
      lightboxImg.src = img.src
      lightboxImg.alt = img.alt
      lightbox.classList.add('is-active')
      document.body.style.overflow = 'hidden'
    }
  })
})

function closeLightbox() {
  if (lightbox) {
    lightbox.classList.remove('is-active')
    document.body.style.overflow = ''
  }
}

if (lightboxClose) {
  lightboxClose.addEventListener('click', (e) => {
    e.stopPropagation()
    closeLightbox()
  })
}

if (lightbox) {
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox()
    }
  })
}

/* =========================================
   FORMULARIO MÚSICA (CONEXIÓN SUPABASE)
========================================= */
const musicForm = document.getElementById('music-form')

if (musicForm) {
  musicForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const submitBtn = musicForm.querySelector('.submit-btn')
    const originalText = submitBtn.innerHTML

    const artist = document.getElementById('artist').value
    const song = document.getElementById('song').value
    const link = document.getElementById('link').value

    submitBtn.disabled = true
    submitBtn.innerHTML = '<span>Enviando...</span>'

    try {
      const { error } = await supabase
        .from('canciones')
        .insert([
          { artista: artist, cancion: song, link: link }
        ])

      if (error) throw error

      alert(`🎶 ¡Genial! Guardamos "${song}" de ${artist} en la lista de peticiones.`)
      musicForm.reset()
    } catch (err) {
      console.error('Error al guardar canción:', err)
      alert('Hubo un problema al enviar la canción. Inténtalo de nuevo.')
    } finally {
      submitBtn.disabled = false
      submitBtn.innerHTML = originalText
    }
  })
}
/* =========================================
   INTEGRACIÓN SUPABASE (RSVP & SOBRE)
========================================= */
const params = new URLSearchParams(window.location.search)
const familiaSlug = params.get('f')

async function cargarDatosInvitacion() {
  const container = document.getElementById('checklist-container')

  if (!familiaSlug) {
    if (container) {
      container.innerHTML = `
        <div class="rsvp-alert info">
          ℹ️ Estás viendo una vista previa de la invitación. Para confirmar asistencia, usa tu enlace personalizado.
        </div>
      `
    }
    return
  }

  const { data: familia, error } = await supabase
    .from('familias')
    .select('id, nombre_sobre, invitados(id, nombre_completo, asiste)')
    .eq('slug', familiaSlug)
    .single()

  if (error || !familia) {
    console.error('No se encontró información para esta familia:', error)
    if (container) {
      container.innerHTML = `
        <div class="rsvp-alert error">
          ⚠️ No pudimos encontrar tu lista de pases. Por favor verifica el enlace enviado.
        </div>
      `
    }
    return
  }

  const envelopeLabel = document.getElementById('envelope-guest-name')
  if (envelopeLabel) {
    envelopeLabel.innerText = familia.nombre_sobre
  }

  renderizarChecklistRSVP(familia.invitados)
}

function renderizarChecklistRSVP(listaInvitados) {
  const container = document.getElementById('checklist-container')
  if (!container) return

  container.innerHTML = ''

  if (!listaInvitados || listaInvitados.length === 0) {
    container.innerHTML = '<p class="rsvp-empty">No hay invitados registrados bajo esta familia.</p>'
    return
  }

  listaInvitados.forEach(invitado => {
    const label = document.createElement('label')
    label.className = 'rsvp-checkbox-card'

    const isChecked = invitado.asiste === true ? 'checked' : ''

    label.innerHTML = `
      <div class="checkbox-wrapper">
        <input type="checkbox" data-id="${invitado.id}" ${isChecked} />
        <span class="custom-checkbox"></span>
      </div>
      <div class="guest-info">
        <span class="guest-fullname">${invitado.nombre_completo}</span>
        <span class="guest-status">${invitado.asiste ? 'Asistencia confirmada' : 'Pendiente por confirmar'}</span>
      </div>
    `

    const checkbox = label.querySelector('input')
    const statusText = label.querySelector('.guest-status')

    checkbox.addEventListener('change', (e) => {
      if (e.target.checked) {
        label.classList.add('selected')
        statusText.innerText = '¡Confirmado!'
      } else {
        label.classList.remove('selected')
        statusText.innerText = 'No asistirá'
      }
    })

    if (invitado.asiste) {
      label.classList.add('selected')
    }

    container.appendChild(label)
  })
}

const rsvpForm = document.getElementById('rsvp-form')
if (rsvpForm) {
  rsvpForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const submitBtn = rsvpForm.querySelector('.submit-btn')
    const originalText = submitBtn.innerHTML
    
    submitBtn.disabled = true
    submitBtn.innerHTML = '<span>Guardando...</span>'

    try {
      const checkboxes = document.querySelectorAll('#checklist-container input[type="checkbox"]')
      
      for (const cb of checkboxes) {
        const invitadoId = cb.getAttribute('data-id')
        const estaConfirmado = cb.checked

        await supabase
          .from('invitados')
          .update({ asiste: estaConfirmado })
          .eq('id', invitadoId)
      }

      alert('✨ ¡Muchas gracias! Tu respuesta ha sido guardada exitosamente.')
    } catch (err) {
      console.error(err)
      alert('Hubo un error al guardar tu confirmación. Intenta de nuevo.')
    } finally {
      submitBtn.disabled = false
      submitBtn.innerHTML = originalText
    }
  })
}

document.addEventListener('DOMContentLoaded', cargarDatosInvitacion)