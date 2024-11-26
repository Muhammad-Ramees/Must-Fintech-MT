document.addEventListener('DOMContentLoaded', () => {
  const initializeCarousel = (selector, options) => {
    const element = document.querySelector(selector)
    if (element) {
      const carousel = new bootstrap.Carousel(element, options)
      carousel.cycle()
    }
  }

  const carousels = [
    {
      selector: '#heroCarousel',
      options: { interval: 1000, ride: 'carousel' }
    },
    {
      selector: '#centersCarousel',
      options: { interval: 1000, ride: 'carousel' }
    },
    {
      selector: '#buildingCarousel',
      options: { interval: 10000, ride: 'carousel' }
    }
  ]

  carousels.forEach(({ selector, options }) =>
    initializeCarousel(selector, options)
  )

  const navbar = document.querySelector('.navbar')
  if (navbar) {
    const toggleNavbarScrolled = () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled')
      } else {
        navbar.classList.remove('scrolled')
      }
    }

    window.addEventListener('scroll', toggleNavbarScrolled)
  }

  const dropdownButton = document.getElementById('dropdownButton')
  const dropdownContent = document.getElementById('dropdownContent')

  if (dropdownButton && dropdownContent) {
    dropdownButton.addEventListener('click', function (event) {
      event.stopPropagation()

      dropdownContent.classList.toggle('show')
    })

    window.addEventListener('click', function (event) {
      if (
        !dropdownButton.contains(event.target) &&
        !dropdownContent.contains(event.target)
      ) {
        dropdownContent.classList.remove('show')
      }
    })
  }
})

// window.onload = function () {
//   window.scrollTo(0, 0)
// }
