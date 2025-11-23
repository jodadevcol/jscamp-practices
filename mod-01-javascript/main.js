// Code for event by every button with foreach
// const jobs = document.querySelectorAll('.searching-results .result .result-action>button')

// jobs.forEach((jobButton) => {
//   jobButton.addEventListener('click', function (event) {
//     jobButton.classList.add('is-applied')
//     jobButton.innerHTML = 'Aplicado'
//     jobButton.disabled = true
//   })
// })

// Code for event delegation
const jobsContainer = document.querySelector('.searching-results-container>.searching-results')
console.log(jobsContainer)

jobsContainer?.addEventListener('click', function (event) {
  const element = event.target

  if (element.classList.contains('result-apply-job')) {
    element.classList.add('is-applied')
    element.innerHTML = 'Aplicado'
    element.disabled = true
  }
})
