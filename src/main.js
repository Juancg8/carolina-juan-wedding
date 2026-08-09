import './style.css'

document.body.classList.add('invitation-locked')

document.querySelector('#app').innerHTML = `
  <section class="opening-screen">

    <div class="monogram">
      <span>J</span>
      <small>&</small>
      <span>C</span>
    </div>

    <div class="botanical botanical-left">

      <span class="stem stem-1"></span>
      <span class="stem stem-2"></span>

      <span class="leaf leaf-1"></span>
      <span class="leaf leaf-2"></span>
      <span class="leaf leaf-3"></span>
      <span class="leaf leaf-4"></span>

      <span class="flower flower-1"></span>
      <span class="flower flower-2"></span>

    </div>


    <div class="botanical botanical-right">

      <span class="stem stem-1"></span>
      <span class="stem stem-2"></span>

      <span class="leaf leaf-1"></span>
      <span class="leaf leaf-2"></span>
      <span class="leaf leaf-3"></span>
      <span class="leaf leaf-4"></span>

      <span class="flower flower-1"></span>
      <span class="flower flower-2"></span>

    </div>

    <div class="envelope-wrapper">

      <div class="envelope">

        <!-- CUERPO DEL SOBRE -->
        <div class="envelope-back"></div>

        <!-- SOLAPAS INFERIORES -->
        <div class="envelope-left"></div>
        <div class="envelope-right"></div>

        <!-- CONTENIDO DE LA SOLAPA SUPERIOR -->
        <div class="envelope-flap">

          <div class="flap-text">
            <span>ESTÁS INVITADO A</span>
            <span>ALGO MUY ESPECIAL</span>
          </div>

          <div class="wax-seal">
            <strong>J</strong>
            <span>&</span>
            <strong>C</strong>
          </div>

        </div>

      </div>

    </div>

    <div class="couple-names">
      <h1>Carolina & Juan</h1>

      <div class="date">
        <span>24</span>
        <i>•</i>
        <span>10</span>
        <i>•</i>
        <span>2026</span>
      </div>
    </div>

    <button class="open-button">
      Abrir invitación
    </button>

    <p class="opening-message">
      Una historia que comienza contigo
    </p>

  </section>

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

const envelope = document.querySelector('.envelope')
const envelopeWrapper = document.querySelector('.envelope-wrapper')
const openButton = document.querySelector('.open-button')
const waxSeal = document.querySelector('.wax-seal')

function openInvitation() {
  const openingScreen = document.querySelector('.opening-screen')

  openingScreen.classList.add('is-opening')
  envelope.classList.add('is-open')
  envelopeWrapper.classList.add('is-open')
  openButton.classList.add('is-hidden')

  setTimeout(() => {
    document.body.classList.remove('invitation-locked')
    document.body.classList.add('invitation-open')

    document.querySelector('.hero-section').scrollIntoView({
      behavior: 'smooth'
    })
  }, 900)
}

openButton.addEventListener('click', openInvitation)
waxSeal.addEventListener('click', openInvitation)