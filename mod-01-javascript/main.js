const jobs = document.querySelectorAll('.searching-results .result .result-action>a')

jobs.forEach((job) => {
  job.addEventListener('click', function () {

    console.log('Job clicked')
  })
})