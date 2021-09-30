const modalBtn = document.querySelector('.more')
const modalBtn1 = document.querySelector('.more1')
const modal = document.querySelector('.modal')

modalBtn.addEventListener('click', () => {
    modal.classList.remove('hidden')
})

modal.addEventListener('click', (event) => {
    const target = event.target

    if (target.classList.contains('overlay') || target.classList.contains('modal__close')) {
        modal.classList.add('hidden')
    }
})

modalBtn1.addEventListener('click', () => {
    modal.classList.remove('hidden')
})

modal.addEventListener('click', (event) => {
    const target = event.target

    if (target.classList.contains('overlay') || target.classList.contains('modal__close')) {
        modal.classList.add('hidden')
    }
})