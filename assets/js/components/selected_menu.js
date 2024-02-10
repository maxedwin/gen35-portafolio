const navbarListDOM = document.querySelector('.navbar__list')
const navbarLinksDOM = document.querySelectorAll('.navbar__link')
const sectionsDOM = document.querySelectorAll('section')

function activeMenu(e) {
  if (e && e.type === 'click') {
    const clickedLink = e.target.closests('.navbar__link')
    const activeLink = navbarListDOM.querySelector('.navbar__link.active')

    if (activeLink) {
      activeLink.classList.remove('active')
    }

    if (clickedLink) {
      clickedLink.classList.add('active')
    }

  } else if (e && e.type === 'scroll') {
    const scrollPosition = window.scrollY + 50

    for (let i = sectionsDOM.length - 1; i >= 0; i--) {
      if (scrollPosition >= sectionsDOM[i].offsetTop) {
        const activeLink = navbarListDOM.querySelector('.navbar__link.active')

        if (activeLink) {
          activeLink.classList.remove('active')

        }

        navbarLinksDOM[i].classList.add('active')
        break

      }

    }
  }

}

navbarListDOM.addEventListener('click', activeMenu)
window.addEventListener('scroll', activeMenu)

export default activeMenu