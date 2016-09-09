const styles = require('../styles/styles')
const tests = require('../tests/tests')

const counts = {
  passed: 0,
  failed: 0,
  stillRunning: tests.length
}

const runTests = (utils) => {
  utils.initializeStatusCounts(counts)

  const runButton = document.getElementById('run-button')
  runButton.disabled = true

  const alert = document.getElementById('user-alert')
  alert.className = 'hidden'

  const startTime = new Date()

  const boundRunTest = runTest.bind(null, utils, startTime)

  tests.forEach(boundRunTest)
}

const runTest = (utils, startTime, test) => {
  const testDiv = document.getElementById(test.id)
  const statusText = testDiv.lastChild
  statusText.innerHTML = 'Status: Running'
  Object.assign(testDiv.style, styles.runningTest)

  test.run((result) => {
    counts.stillRunning --

    if (result) {
      statusText.innerHTML = 'Status: Passed'
      Object.assign(testDiv.style, styles.passedTest)
      counts.passed ++
      utils.setStatusCounts(counts)

    } else {
      statusText.innerHTML = 'Status: Failed'
      Object.assign(testDiv.style, styles.failedTest)
      counts.failed ++
      utils.setStatusCounts(counts)
    }

    if (!counts.stillRunning) utils.showAllDone(startTime)
  })
}

module.exports = { runTests }
