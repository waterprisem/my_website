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