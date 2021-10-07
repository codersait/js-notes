const startTime = new Date()

logWithTime('Start HTML Parse')

window.addEventListener('load', function () {
  logWithTime('Document Rendered')
})

function logWithTime(message) {
  console.log(new Date() - startTime + 'ms - ' + message)
}

if (condition) {
}
