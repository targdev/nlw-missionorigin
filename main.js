const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')
const links = document.querySelectorAll('nav ul li a')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* sombreado header */
function changeHeaderWhenScroll() {
  const header = document.querySelector('#header')
  const navHeight = header.offsetHeight

  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
    // scroll for maior que a altura do header
  } else {
    header.classList.remove('scroll')
    // quando o scroll for menor que o header
  }
}

/* swiper */
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/* scroll reveal */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 900,
  reset: true
})

scrollReveal.reveal(
  '#home .image, #home .text, #about .image, #about .text, #services header, #services .card, #testimonials header, #testimonials .testimonials, #contact .text, #contact .contact, footer .brand, footer .social',
  {
    interval: 100
  }
)

/* activate width in section active */
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('Id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/* wheen screen */
function backToBackTop() {
  const backToBackTopButton = document.querySelector('.back-to-top')

  if (window.scrollY >= 600) {
    backToBackTopButton.classList.add('show')
  } else {
    backToBackTopButton.classList.remove('show')
  }
}

window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToBackTop()
  activateMenuAtCurrentSection()
})
