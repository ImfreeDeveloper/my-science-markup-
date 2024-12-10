// Меню
const burgerBtn = document.getElementById('js-burger')
const bodyAside = document.querySelector('.aside-mobile__body')
const closeAside = document.querySelector('.aside-mobile__close')
const overlayAside = document.querySelector('.aside-mobile__overlay')
const headerEye = document.querySelector('.header__eye')
const headerBtn = document.querySelector('.header__btn')
const headerMainMnu = document.querySelector('.header__main-mnu')
const headerSubMnu = document.querySelector('.header__sub-mnu')
const asideMobileBody = document.querySelector('.aside-mobile__body')

function hideAside() {
  bodyAside.classList.remove('show')
  overlayAside.classList.add('hidden')
  headerSubMnu.classList.remove('open')
  burgerBtn.classList.remove('open')
}

function moveElemInAside() {
  const childsAdd = [headerEye, headerBtn, headerMainMnu]

  childsAdd.forEach((child) => {
    if (!asideMobileBody.querySelector(`.${child.className}`)) {
      const clone = child.cloneNode(true)
      asideMobileBody.appendChild(clone)
    }
  })
}

if (burgerBtn) {
  burgerBtn.addEventListener('click', () => {
    if ((window.innerWidth <= 900)) {
      bodyAside.classList.add('show')
      overlayAside.classList.remove('hidden')

      moveElemInAside()
    } else {
      if (headerSubMnu.classList.contains('open')) {
        headerSubMnu.classList.remove('open')
      } else {
        headerSubMnu.classList.add('open')
      }
    }

    if (burgerBtn.classList.contains('open')) {
      burgerBtn.classList.remove('open')
    } else {
      burgerBtn.classList.add('open')
    }

  })

  closeAside.addEventListener('click', () => {
    hideAside()
  })

  overlayAside.addEventListener('click', () => {
    hideAside()
  })
}

// Поиск
const jsSearchInput = document.getElementById('js-search-input')

if (jsSearchInput) {
  jsSearchInput.addEventListener('click', () => {
    const hideClass = 'search-input_mobile_hide'
    if (jsSearchInput.classList.contains(hideClass) && (window.innerWidth <= 576)) {
      jsSearchInput.classList.remove(hideClass)
    }
  })
}
