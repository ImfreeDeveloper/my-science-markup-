const modal = document.querySelector('.modal-popup')

if (modal) {
  const btnModal = document.querySelectorAll('.js-btn-modal')
  const modalContainer = document.querySelector('.modal-popup-container')
  const btnModalClose = document.querySelector('.modal-popup-close')

  const modalOpen = (e) => {
    const idTypeModal = e.target.dataset.form
    const modalBlocks = modal.querySelectorAll('.modal-popup-body__block')

    modalBlocks.forEach((itemBlock) => {
      itemBlock.classList.add('hidden')
    })

    if (idTypeModal) {
      const modalType = document.getElementById(idTypeModal)
      const modalForm = modalType.querySelector('form')
      const modalLoader = modalType.querySelector('.js-loader')
      const modalSuccess = modalType.querySelector('.js-success')

      if (modalForm) {
        modalForm.classList.remove('hidden')

        const inputs = modalForm.querySelectorAll('input, textarea, select')

        inputs.forEach((inp) => {
          // eslint-disable-next-line no-param-reassign
          inp.value = ''
        })
      }
      if (modalLoader) modalLoader.classList.add('hidden')
      if (modalSuccess) modalSuccess.classList.add('hidden')

      modalType.classList.remove('hidden')
    }

    modal.classList.remove('hidden')
  }
  const modalClose = () => {
    modal.classList.add('hidden')
  }

  btnModal.forEach((btn) => {
    btn.addEventListener('click', modalOpen)
  })

  btnModalClose.addEventListener('click', modalClose)
  modal.addEventListener('click', modalClose)
  modalContainer.addEventListener('click', (e) => e.stopPropagation())
}
