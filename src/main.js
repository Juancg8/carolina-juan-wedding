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

  <!-- Estilos embebidos para asegurar el render de fuentes del CSS -->
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

      <!-- ================= SELLO DE CERA REPOSICIONADO (PUNTA DE SOLAPA) ================= -->
      <g class="wax-seal-svg" transform="translate(400, 285)" filter="url(#wax-shadow)">
        
        <!-- Cera Derretida con Borde Orgánico Irregular -->
        <path d="
          M -6 -50 
          C 20 -54, 46 -44, 53 -22 
          C 61 -2, 52 28, 42 45 
          C 24 61, -12 58, -36 47 
          C -56 37, -60 10, -54 -16 
          C -48 -38, -28 -48, -6 -50 Z" 
          fill="url(#wax-gradient)"
        />

        <!-- Brillo de la Cera -->
        <path d="
          M -6 -50 
          C 20 -54, 46 -44, 53 -22 
          C 61 -2, 52 28, 42 45 Z" 
          fill="url(#wax-highlight)"
        />

        <!-- Anillo Interno Estampado (Cuño) -->
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

        <!-- Monograma J&C con relieve -->
        <text x="1" y="9" text-anchor="middle" class="svg-wax-text-shadow">J&amp;C</text>
        <text x="0" y="8" text-anchor="middle" class="svg-wax-text">J&amp;C</text>

        <!-- Detalle botánico grabado debajo del texto -->
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


  <!-- =====================================
       MONOGRAMA
  ====================================== -->

  <div
    class="monogram"
    aria-label="Carolina y Juan"
  >
    <span>J</span>
    <small>&</small>
    <span>C</span>
  </div>

  <!-- =========================================================
    ILUSTRACIÓN BOTÁNICA ABUNDANTE Y REALISTA (SVG)
    ========================================================= -->

  <div class="botanical botanical-left" aria-hidden="true">
    <svg viewBox="0 0 340 480" width="100%" height="100%" preserveAspectRatio="xMinYMax meet" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <!-- Gradientes para pétalos de terracota / rust -->
        <radialGradient id="rust-grad" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stop-color="#EFA27A"/>
          <stop offset="50%" stop-color="#D86A2E"/>
          <stop offset="85%" stop-color="#C34A1C"/>
          <stop offset="100%" stop-color="#842605"/>
        </radialGradient>
        <!-- Gradientes para flor Navy Blue -->
        <radialGradient id="navy-grad" cx="40%" cy="40%" r="65%">
          <stop offset="0%" stop-color="#415C70"/>
          <stop offset="60%" stop-color="#152A3A"/>
          <stop offset="100%" stop-color="#0A151E"/>
        </radialGradient>
        <!-- Sombras suaves para dar volumen 3D -->
        <filter id="soft-shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="2" dy="4" stdDeviation="3" flood-color="#152A3A" flood-opacity="0.18"/>
        </filter>
      </defs>

      <!-- CAPA 1: Tallos y Fondo Bosque (Profundidad) -->
      <g stroke="#374A3D" stroke-linecap="round" fill="none">
        <path d="M 30 450 Q 140 280 180 30" stroke-width="3"/>
        <path d="M 60 410 Q 180 220 220 10" stroke-width="2"/>
        <path d="M 10 380 Q 100 290 140 120" stroke-width="2"/>
      </g>

      <!-- CAPA 2: Hojas de Eucalipto y Olivo (Sage & Forest) -->
      <g filter="url(#soft-shadow)">
        <!-- Eucalipto redondeado -->
        <g fill="#778B78" opacity="0.95">
          <path d="M 80 320 C 50 310, 40 270, 85 280 C 110 285, 105 325, 80 320 Z"/>
          <path d="M 105 325 C 135 335, 145 295, 100 290 C 75 285, 85 320, 105 325 Z"/>
          <path d="M 115 230 C 85 220, 75 180, 120 190 C 145 195, 140 235, 115 230 Z"/>
          <path d="M 138 235 C 168 245, 178 205, 133 200 C 108 195, 118 230, 138 235 Z"/>
          <path d="M 150 140 C 120 130, 110 90, 155 105 C 180 110, 175 145, 150 140 Z"/>
        </g>
        <!-- Hojas finas en verde bosque -->
        <g fill="#374A3D" opacity="0.85">
          <path d="M 40 370 C 15 350, 10 310, 40 325 C 65 335, 55 375, 40 370 Z"/>
          <path d="M 90 280 C 65 260, 60 220, 90 235 C 115 245, 105 285, 90 280 Z"/>
          <path d="M 130 180 C 105 160, 100 120, 130 135 C 155 145, 145 185, 130 180 Z"/>
        </g>
      </g>

      <!-- CAPA 3: Ramas acentuadas en Azul Navy -->
      <path d="M 90 420 Q 210 300 270 120" stroke="#152A3A" stroke-width="2" fill="none"/>
      <g fill="#152A3A">
        <ellipse cx="170" cy="270" rx="9" ry="5" transform="rotate(-30 170 270)"/>
        <ellipse cx="205" cy="215" rx="8" ry="4" transform="rotate(-25 205 215)"/>
        <ellipse cx="235" cy="160" rx="7" ry="4" transform="rotate(-20 235 160)"/>
        <ellipse cx="260" cy="105" rx="5" ry="3" transform="rotate(-15 260 105)"/>
      </g>

      <!-- CAPA 4: FLORES PRINCIPALES ABUNDANTES -->
      
      <!-- Flor 1: Ranúnculo Terracota Grande (Súper voluminoso) -->
      <g filter="url(#soft-shadow)" transform="translate(135, 310)">
        <path d="M -50 0 C -50 -35, -35 -50, 0 -50 C 35 -50, 50 -35, 50 0 C 50 35, 35 50, 0 50 C -35 50, -50 35, -50 0 Z" fill="url(#rust-grad)"/>
        <!-- Capas de pétalos envolventes -->
        <path d="M -42 -10 C -45 -35, -20 -45, 10 -42 C 38 -38, 45 -15, 40 12 C 35 38, 10 45, -20 40 C -42 35, -40 12, -42 -10 Z" fill="#D86A2E"/>
        <path d="M -34 5 C -35 -20, -15 -35, 12 -32 C 32 -28, 36 -8, 30 15 C 24 32, 2 36, -20 30 C -34 24, -32 18, -34 5 Z" fill="#C34A1C"/>
        <path d="M -24 -5 C -25 -22, -8 -28, 12 -24 C 26 -20, 28 -4, 22 14 C 16 26, -2 28, -16 22 C -25 16, -22 6, -24 -5 Z" fill="#EFA27A"/>
        <path d="M -14 0 C -15 -12, -4 -16, 8 -14 C 16 -12, 18 -2, 14 8 C 10 16, -1 18, -10 14 C -15 10, -12 4, -14 0 Z" fill="#842605"/>
        <!-- Centro de la flor -->
        <circle cx="0" cy="0" r="6" fill="#152A3A"/>
        <circle cx="-1" cy="-1" r="2" fill="#BD9855"/>
      </g>

      <!-- Flor 2: Anémona / Rosa Azul Navy -->
      <g filter="url(#soft-shadow)" transform="translate(210, 200)">
        <!-- 5 Pétalos orgánicos estilo acuarela -->
        <path d="M 0 0 C -35 -50, 15 -60, 28 -25 Z" fill="url(#navy-grad)"/>
        <path d="M 0 0 C 25 -55, 60 -20, 30 -5 Z" fill="url(#navy-grad)"/>
        <path d="M 0 0 C 50 -10, 55 35, 20 25 Z" fill="url(#navy-grad)"/>
        <path d="M 0 0 C 25 45, -25 50, -20 20 Z" fill="url(#navy-grad)"/>
        <path d="M 0 0 C -50 25, -55 -25, -20 -20 Z" fill="url(#navy-grad)"/>
        <!-- Pistilos dorados detallados -->
        <circle cx="3" cy="-2" r="11" fill="#152A3A" stroke="#BD9855" stroke-width="1.5"/>
        <circle cx="3" cy="-2" r="5" fill="#BD9855"/>
      </g>

      <!-- Flor 3: Flor Terracota Mediana (Acompañante superior) -->
      <g filter="url(#soft-shadow)" transform="translate(160, 120)">
        <circle cx="0" cy="0" r="24" fill="url(#rust-grad)"/>
        <circle cx="-2" cy="-2" r="17" fill="#D86A2E"/>
        <circle cx="1" cy="1" r="11" fill="#EFA27A"/>
        <circle cx="0" cy="0" r="5" fill="#152A3A"/>
      </g>

      <!-- CAPA 5: Capullos y Bayas de Relleno (Para máxima abundancia) -->
      <g fill="#D86A2E" filter="url(#soft-shadow)">
        <circle cx="75" cy="240" r="8"/>
        <circle cx="90" cy="225" r="6"/>
        <circle cx="60" cy="255" r="6"/>
        <circle cx="250" cy="280" r="9"/>
        <circle cx="270" cy="265" r="7"/>
      </g>
      <!-- Capullos en Dorado Antiguo -->
      <g fill="#BD9855">
        <circle cx="280" cy="100" r="5"/>
        <circle cx="292" cy="115" r="4"/>
        <circle cx="140" cy="60" r="5"/>
      </g>
    </svg>
  </div>

  <div class="botanical botanical-right" aria-hidden="true">
    <svg viewBox="0 0 340 480" width="100%" height="100%" preserveAspectRatio="xMaxYMax meet" xmlns="http://www.w3.org/2000/svg" style="transform: scaleX(-1);">
      <!-- Replica con reflejo horizontal exacto de los mismos elementos abundantes -->
      <defs>
        <radialGradient id="rust-grad-r" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stop-color="#EFA27A"/>
          <stop offset="50%" stop-color="#D86A2E"/>
          <stop offset="85%" stop-color="#C34A1C"/>
          <stop offset="100%" stop-color="#842605"/>
        </radialGradient>
        <radialGradient id="navy-grad-r" cx="40%" cy="40%" r="65%">
          <stop offset="0%" stop-color="#415C70"/>
          <stop offset="60%" stop-color="#152A3A"/>
          <stop offset="100%" stop-color="#0A151E"/>
        </radialGradient>
        <filter id="soft-shadow-r" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="2" dy="4" stdDeviation="3" flood-color="#152A3A" flood-opacity="0.18"/>
        </filter>
      </defs>
      <g stroke="#374A3D" stroke-linecap="round" fill="none">
        <path d="M 30 450 Q 140 280 180 30" stroke-width="3"/>
        <path d="M 60 410 Q 180 220 220 10" stroke-width="2"/>
        <path d="M 10 380 Q 100 290 140 120" stroke-width="2"/>
      </g>
      <g filter="url(#soft-shadow-r)">
        <g fill="#778B78" opacity="0.95">
          <path d="M 80 320 C 50 310, 40 270, 85 280 C 110 285, 105 325, 80 320 Z"/>
          <path d="M 105 325 C 135 335, 145 295, 100 290 C 75 285, 85 320, 105 325 Z"/>
          <path d="M 115 230 C 85 220, 75 180, 120 190 C 145 195, 140 235, 115 230 Z"/>
          <path d="M 138 235 C 168 245, 178 205, 133 200 C 108 195, 118 230, 138 235 Z"/>
          <path d="M 150 140 C 120 130, 110 90, 155 105 C 180 110, 175 145, 150 140 Z"/>
        </g>
        <g fill="#374A3D" opacity="0.85">
          <path d="M 40 370 C 15 350, 10 310, 40 325 C 65 335, 55 375, 40 370 Z"/>
          <path d="M 90 280 C 65 260, 60 220, 90 235 C 115 245, 105 285, 90 280 Z"/>
          <path d="M 130 180 C 105 160, 100 120, 130 135 C 155 145, 145 185, 130 180 Z"/>
        </g>
      </g>
      <path d="M 90 420 Q 210 300 270 120" stroke="#152A3A" stroke-width="2" fill="none"/>
      <g fill="#152A3A">
        <ellipse cx="170" cy="270" rx="9" ry="5" transform="rotate(-30 170 270)"/>
        <ellipse cx="205" cy="215" rx="8" ry="4" transform="rotate(-25 205 215)"/>
        <ellipse cx="235" cy="160" rx="7" ry="4" transform="rotate(-20 235 160)"/>
        <ellipse cx="260" cy="105" rx="5" ry="3" transform="rotate(-15 260 105)"/>
      </g>
      <g filter="url(#soft-shadow-r)" transform="translate(135, 310)">
        <path d="M -50 0 C -50 -35, -35 -50, 0 -50 C 35 -50, 50 -35, 50 0 C 50 35, 35 50, 0 50 C -35 50, -50 35, -50 0 Z" fill="url(#rust-grad-r)"/>
        <path d="M -42 -10 C -45 -35, -20 -45, 10 -42 C 38 -38, 45 -15, 40 12 C 35 38, 10 45, -20 40 C -42 35, -40 12, -42 -10 Z" fill="#D86A2E"/>
        <path d="M -34 5 C -35 -20, -15 -35, 12 -32 C 32 -28, 36 -8, 30 15 C 24 32, 2 36, -20 30 C -34 24, -32 18, -34 5 Z" fill="#C34A1C"/>
        <path d="M -24 -5 C -25 -22, -8 -28, 12 -24 C 26 -20, 28 -4, 22 14 C 16 26, -2 28, -16 22 C -25 16, -22 6, -24 -5 Z" fill="#EFA27A"/>
        <path d="M -14 0 C -15 -12, -4 -16, 8 -14 C 16 -12, 18 -2, 14 8 C 10 16, -1 18, -10 14 C -15 10, -12 4, -14 0 Z" fill="#842605"/>
        <circle cx="0" cy="0" r="6" fill="#152A3A"/>
        <circle cx="-1" cy="-1" r="2" fill="#BD9855"/>
      </g>
      <g filter="url(#soft-shadow-r)" transform="translate(210, 200)">
        <path d="M 0 0 C -35 -50, 15 -60, 28 -25 Z" fill="url(#navy-grad-r)"/>
        <path d="M 0 0 C 25 -55, 60 -20, 30 -5 Z" fill="url(#navy-grad-r)"/>
        <path d="M 0 0 C 50 -10, 55 35, 20 25 Z" fill="url(#navy-grad-r)"/>
        <path d="M 0 0 C 25 45, -25 50, -20 20 Z" fill="url(#navy-grad-r)"/>
        <path d="M 0 0 C -50 25, -55 -25, -20 -20 Z" fill="url(#navy-grad-r)"/>
        <circle cx="3" cy="-2" r="11" fill="#152A3A" stroke="#BD9855" stroke-width="1.5"/>
        <circle cx="3" cy="-2" r="5" fill="#BD9855"/>
      </g>
      <g filter="url(#soft-shadow-r)" transform="translate(160, 120)">
        <circle cx="0" cy="0" r="24" fill="url(#rust-grad-r)"/>
        <circle cx="-2" cy="-2" r="17" fill="#D86A2E"/>
        <circle cx="1" cy="1" r="11" fill="#EFA27A"/>
        <circle cx="0" cy="0" r="5" fill="#152A3A"/>
      </g>
      <g fill="#D86A2E" filter="url(#soft-shadow-r)">
        <circle cx="75" cy="240" r="8"/>
        <circle cx="90" cy="225" r="6"/>
        <circle cx="60" cy="255" r="6"/>
        <circle cx="250" cy="280" r="9"/>
        <circle cx="270" cy="265" r="7"/>
      </g>
      <g fill="#BD9855">
        <circle cx="280" cy="100" r="5"/>
        <circle cx="292" cy="115" r="4"/>
        <circle cx="140" cy="60" r="5"/>
      </g>
    </svg>
  </div>

  <!-- =====================================
       SOBRE
  ====================================== -->

  <div class="envelope-wrapper">

    <div
      class="envelope"
      tabindex="0"
      role="button"
      aria-label="Abrir invitación"
    >

      ${envelopeSvg}

    </div>

  </div>


  <!-- =====================================
       NOMBRES
  ====================================== -->

  <div class="couple-names">

    <h1>
      Carolina & Juan
    </h1>

    <div class="date">
      <span>24</span>
      <i>•</i>
      <span>10</span>
      <i>•</i>
      <span>2026</span>
    </div>

  </div>


  <!-- =====================================
       BOTÓN
  ====================================== -->

  <button
    class="open-button"
    type="button"
  >
    Abrir invitación
  </button>


  <!-- =====================================
       MENSAJE
  ====================================== -->

  <p class="opening-message">
    Una historia que comienza contigo
  </p>


</section>


<!-- =========================================
     HERO
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
      24 · OCTUBRE · 2026
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

const openingScreen =
  document.querySelector('.opening-screen')

const envelope =
  document.querySelector('.envelope')

const envelopeWrapper =
  document.querySelector('.envelope-wrapper')

const openButton =
  document.querySelector('.open-button')


/* =========================================
   ABRIR INVITACIÓN
========================================= */

function openInvitation() {

  if (
    openingScreen.classList.contains('is-opening')
  ) {
    return
  }


  /* Animación del sobre */

  openingScreen.classList.add('is-opening')

  envelope.classList.add('is-open')

  envelopeWrapper.classList.add('is-open')

  openButton.classList.add('is-hidden')


  /* Liberamos el scroll después
     de que termine la animación */

  setTimeout(() => {

    document.body.classList.remove(
      'invitation-locked'
    )

    document.body.classList.add(
      'invitation-open'
    )


    document
      .querySelector('.hero-section')
      .scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })

  }, 1000)

}


/* =========================================
   EVENTOS
========================================= */

openButton.addEventListener(
  'click',
  openInvitation
)


envelope.addEventListener(
  'click',
  openInvitation
)


envelope.addEventListener(
  'keydown',
  (event) => {

    if (
      event.key === 'Enter' ||
      event.key === ' '
    ) {

      event.preventDefault()

      openInvitation()

    }

  }
)