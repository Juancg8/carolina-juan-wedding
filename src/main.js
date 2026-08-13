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

<audio id="wedding-music" loop src="/assets/cancion.mp3"></audio>

<button id="music-btn" class="music-toggle-btn is-hidden" aria-label="Control de música">
  <span class="music-icon icon-play">🎵</span>
  <span class="music-icon icon-pause">⏸</span>
</button>

<!-- 1. PANTALLA INICIAL SOBRE -->
<section class="opening-screen">
  <div class="monogram" aria-label="Carolina y Juan">
    <span>J</span><small>&</small><span>C</span>
  </div>
  <img src="/assets/flores-izq.png" class="botanical-png botanical-png-left" alt="" aria-hidden="true" />
  <img src="/assets/flores-der.png" class="botanical-png botanical-png-right" alt="" aria-hidden="true" />

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

<!-- SECCIÓN HERO -->
<section class="hero-section reveal-on-scroll">
  <div class="hero-content">

    <!-- BLOQUE PADRES -->
    <div class="parents-section">
      <span class="parents-main-label">Con la bendición de nuestros padres</span>

      <div class="parents-block">
        <!-- Padres del Novio -->
        <div class="parents-column">
          <p class="parent-name">Gabriel Carvajal Martínez</p>
          <p class="parent-name">Luz Amanda Gómez Arismendy</p>
        </div>

        <div class="parents-divider"></div>

        <!-- Padres de la Novia -->
        <div class="parents-column">
          <p class="parent-name">Julio Eduardo Santana Villarraga ✝️</p>
          <p class="parent-name">Luz Mery Forero Rios</p>
        </div>
      </div>
    </div>

    <!-- TEXTO DE TRANSICIÓN / ANUNCIO -->
    <p class="hero-announcement">
      Tenemos el honor de invitarles a celebrar nuestro matrimonio
    </p>

    <!-- NOMBRES DE LOS NOVIOS -->
    <div class="couple-names-hero">
      <h1 class="groom-name">Juan Carvajal</h1>
      <span class="ampersand">&amp;</span>
      <h1 class="bride-name">Carolina Santana</h1>
    </div>

    <!-- FOTO HERO MARCO -->
    <div class="hero-photo-frame">
      <img src="/assets/hero-couple.jpg" alt="Juan y Carolina">
    </div>

  </div>
</section>

<!-- SECCIÓN GALERÍA DE FOTOS -->
<section class="gallery-section reveal-on-scroll">
  <h2 class="section-title">Nuestros Momentos</h2>
  <p class="section-subtitle">Un recorrido por nuestra historia</p>

  <div class="gallery-collage">
    <!-- Foto 1 (Destacada) -->
    <div class="gallery-item featured">
      <img src="/assets/Gale_5.jpg" alt="Momento especial" class="gallery-img">
      <div class="gallery-overlay">
        <span>Ver foto</span>
      </div>
    </div>

    <!-- Foto 2 -->
    <div class="gallery-item">
      <img src="/assets/Gale_3.jpg" alt="Las gatas" class="gallery-img">
      <div class="gallery-overlay">
        <span>Ver foto</span>
      </div>
    </div>

    <!-- Foto 3 -->
    <div class="gallery-item">
      <img src="/assets/Gale_1.jpg" alt="Viajes" class="gallery-img">
      <div class="gallery-overlay">
        <span>Ver foto</span>
      </div>
    </div>

    <!-- Foto 4 -->
    <div class="gallery-item">
      <img src="/assets/galeria-4.jpg" alt="Mascotas" class="gallery-img">
      <div class="gallery-overlay">
        <span>Ver foto</span>
      </div>
    </div>

    <!-- Foto 5 -->
    <div class="gallery-item">
      <img src="/assets/Gale_4.jpg" alt="Juntos" class="gallery-img">
      <div class="gallery-overlay">
        <span>Ver foto</span>
      </div>
    </div>
  </div>
</section>

<!-- LIGHTBOX -->
<div id="lightbox" class="lightbox">
  <span id="lightbox-close" class="lightbox-close">&times;</span>
  <img id="lightbox-img" class="lightbox-content" src="" alt="Foto ampliada">
</div>

<!-- 4. SECCIÓN CALENDARIO, CUENTA REGRESIVA Y MILO -->
<section class="date-section reveal-on-scroll">
  <h2 class="section-title">Reserva la Fecha</h2>
  <p class="section-subtitle">Octubre 17 2026</p>

  <div class="date-layout-grid">
    
    <!-- COLUMNA IZQUIERDA: FOTO DE MILO -->
    <div class="milo-photo-column">
      <div class="milo-frame">
        <img src="/assets/milo.jpg" alt="Milo" class="milo-img">
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

<!-- SECCIÓN FECHA Y UBICACIÓN -->
<section class="event-section reveal-on-scroll">
  <div class="event-container">
    <h2 class="section-title">¿Cuándo y Dónde?</h2>
    <p class="section-subtitle">Sábado, 17 de Octubre de 2026</p>

    <!-- TARJETAS DE CEREMONIA Y RECEPCIÓN -->
    <div class="event-grid">
      
      <!-- CARD 1: CEREMONIA RELIGIOSA -->
      <div class="event-card">
        <div class="event-icon">⛪</div>
        <h3 class="event-type">Ceremonia Religiosa</h3>
        <div class="event-divider"></div>
        
        <p class="event-time"><strong>Hora:</strong> 3:30 PM</p>
        <h4 class="event-place">Iglesia María Auxiliadora</h4>
        <p class="event-address">La Plazuela, Cogua</p>
        
        <!-- MAPA EMBEBIDO PEQUEÑO -->
        <div class="map-frame">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20657.144792818443!2d-73.9690208872883!3d5.076985335819656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e406eb9a7f8ae39%3A0x550abfb55b1aaa8e!2sIglesia%20La%20Plazuela%20maria%20auxiliadora!5e0!3m2!1ses!2sco!4v1786586175978!5m2!1ses!2sco" width="100%" height="180%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
        </div>

        <a href="https://maps.app.goo.gl/8X3Rin69UXzL9Rg5A" target="_blank" rel="noopener" class="event-btn">
          📍 Abrir en Google Maps
        </a>
      </div>

      <!-- CARD 2: RECEPCIÓN -->
      <div class="event-card">
        <div class="event-icon">🥂</div>
        <h3 class="event-type">Recepción</h3>
        <div class="event-divider"></div>
        
        <p class="event-time"><strong>Hora:</strong> 5:00 PM</p>
        <h4 class="event-place">Hacienda La Milagrosa</h4>
        <p class="event-address">Cogua, Cundinamarca</p>
        
        <!-- MAPA EMBEBIDO PEQUEÑO -->
        <div class="map-frame">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127168.18478101066!2d-74.05285573962449!3d5.102764300000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e406f10629767e3%3A0xe7e9c26fed9d068!2sLa%20Milagrosa%20Eventos%20%26%20Caba%C3%B1a%20Rom%C3%A1ntica!5e0!3m2!1ses!2sco!4v1786586070454!5m2!1ses!2sco" width="100%" height="180%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
        </div>

        <a href="https://maps.app.goo.gl/LXLKuu387pNx5drL9" target="_blank" rel="noopener" class="event-btn">
          📍 Abrir en Google Maps
        </a>
      </div>

    </div>

    <!-- BOTÓN AGREGAR A CALENDARIO -->
    <div class="calendar-action">
      <a href="#" class="calendar-btn">🗓️ Agregar al Calendario</a>
    </div>

  </div>
</section>

<!-- SECCIÓN DRESS CODE -->
<section class="dresscode-section reveal-on-scroll">
  <div class="dresscode-container">
    <h2 class="section-title">Código de Vestimenta</h2>
    <p class="section-subtitle">Formal / Traje de Gala</p>

    <!-- DOS COLUMNAS: HOMBRES Y MUJERES -->
    <div class="dresscode-grid">
      
      <!-- COLUMNA HOMBRES (MILO) -->
      <div class="dresscode-card">
        <div class="dresscode-frame">
          <img src="/assets/DressCodeHombre.jpg" alt="Milo en traje formal" class="dresscode-img">
        </div>
        <h3 class="dresscode-gender">Hombres</h3>
        <p class="dresscode-desc">Traje Formal / Esmoquin<br><em>(¡Así de elegante como Milo!)</em></p>
      </div>

      <!-- COLUMNA MUJERES (ILUSTRACIÓN SVG) -->
      <div class="dresscode-card">
        <div class="dresscode-frame svg-frame">
          <!-- Ilustración elegante de vestido formal -->
          <svg class="dress-svg" viewBox="0 0 100 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Silueta vestido de noche -->
            <path d="M42 20 C42 20 46 38 38 52 C30 66 18 110 15 145 C28 148 72 148 85 145 C82 110 70 66 62 52 C54 38 58 20 58 20 C54 26 46 26 42 20 Z" fill="#152A3A" opacity="0.9" />
            <!-- Detalle escote / corsé -->
            <path d="M42 20 C46 28 54 28 58 20 C52 35 48 35 42 20 Z" fill="#BD9855" />
            <!-- Cinto dorado -->
            <path d="M38 52 C45 54 55 54 62 52 C61 55 39 55 38 52 Z" fill="#BD9855" />
            <!-- Caída / pliegues suaves -->
            <path d="M50 54 L50 146" stroke="#BD9855" stroke-width="0.7" opacity="0.4" />
            <path d="M42 60 Q38 100 32 145" stroke="#FFFFFF" stroke-width="0.5" opacity="0.3" />
            <path d="M58 60 Q62 100 68 145" stroke="#FFFFFF" stroke-width="0.5" opacity="0.3" />
          </svg>
        </div>
        <h3 class="dresscode-gender">Mujeres</h3>
        <p class="dresscode-desc">Vestido Largo / Formal</p>
      </div>

    </div>

    <!-- COLORES RESERVADOS -->
    <div class="reserved-colors-block">
      <h4 class="reserved-title">Colores Reservados</h4>
      <p class="reserved-subtitle">Agradecemos reservar los siguientes tonos para los novios y el cortejo:</p>
      
      <div class="color-palette">
        <!-- MARFIL -->
        <div class="color-item">
          <span class="color-circle color-ivory"></span>
          <span class="color-name">Marfil / Blanco</span>
        </div>
        <!-- AZUL NAVY -->
        <div class="color-item">
          <span class="color-circle color-navy"></span>
          <span class="color-name">Azul Oscuro</span>
        </div>
        <!-- TERRACOTA -->
        <div class="color-item">
          <span class="color-circle color-terracotta"></span>
          <span class="color-name">Terracota</span>
        </div>
      </div>
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

<!-- SECCIÓN INTERACTIVA: FOTOS Y MÚSICA -->
<section class="interactive-section reveal-on-scroll">
  <div class="interactive-container">
    <h2 class="section-title">¡Hagamos la Fiesta Juntos!</h2>
    <p class="section-subtitle">Comparte tus recuerdos y ayúdanos a armar la playlist</p>

    <div class="interactive-grid">
      
      <!-- CARD 1: CÓDIGO QR DRIVE -->
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

      <!-- CARD 2: FORMULARIO MÚSICA -->
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

// Inicializar eventos de la galería y Lightbox
document.addEventListener('DOMContentLoaded', () => {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');
  const galleryItems = document.querySelectorAll('.gallery-item');

  // Evento para abrir cada foto al hacer clic en el recuadro
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('.gallery-img');
      if (img && lightbox && lightboxImg) {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.classList.add('is-active');
        document.body.style.overflow = 'hidden'; // Evita el scroll de fondo
      }
    });
  });

  // Evento para cerrar haciendo clic en la 'X'
  if (lightboxClose) {
    lightboxClose.addEventListener('click', (e) => {
      e.stopPropagation();
      closeLightbox();
    });
  }

  // Evento para cerrar haciendo clic fuera de la foto (fondo oscuro)
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });
  }

  function closeLightbox() {
    if (lightbox) {
      lightbox.classList.remove('is-active');
      document.body.style.overflow = '';
    }
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const musicForm = document.getElementById('music-form');

  if (musicForm) {
    musicForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Recolección de datos
      const artist = document.getElementById('artist').value;
      const song = document.getElementById('song').value;
      const link = document.getElementById('link').value;

      console.log('Datos listos para enviar a la BD:', { artist, song, link });

      // Mensaje de éxito temporal
      alert(`¡Gracias! Añadiremos "${song}" de ${artist} a la playlist.`);
      musicForm.reset();
    });
  }
});