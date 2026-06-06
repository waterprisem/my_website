const tabButtons = document.querySelectorAll('.tab-btn')
const allContent = document.querySelectorAll('.tab-content')

tabButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    //remove 'active' from all buttons
    tabButtons.forEach(function(btn) {
      btn.classList.remove('active')
    })
    //hide all content divs
    allContent.forEach(function(content) {
      content.classList.add('hidden')
    })

    //get which button was clicked, set to active, and show the corresponding content div and unhide it
    const tabName = button.dataset.tab
    button.classList.add('active')
    document.querySelector(`.tab-content[data-tab="${tabName}"]`).classList.remove('hidden')
})
})

const viewButtons = document.querySelectorAll('.view-btn')
const overlay = document.querySelector('.modal-overlay')
const modalTitle = document.querySelector('.modal-title')
const modalDescription = document.querySelector('.modal-description')
const modalImage = document.querySelector('.modal-image')
const modalLink = document.querySelector('.modal-link')
const closeButton = document.querySelector('.modal-close')



viewButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    const card = button.closest('.project-card')
    const title = card.dataset.title
    const description = card.dataset.description
    const image = card.dataset.image
    const link = card.dataset.link

    modalTitle.textContent = title
    modalDescription.textContent = description
    modalImage.src = image
    modalLink.href = link

    overlay.classList.remove('hidden')
    console.log('View button clicked:', title)
  })
})

overlay.addEventListener('click', function(event) {
    if (event.target === overlay){
        overlay.classList.add('hidden')
    }      
})

closeButton.addEventListener('click', function(event) {
  overlay.classList.add('hidden')
})
