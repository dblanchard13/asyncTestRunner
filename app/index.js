require('./styles/styles.css')

const utils = require('./runner/runner.utils')
let tests = require('./tests/tests')

const initialize = () => {
  utils.addRunButton()
  utils.addCountsBoard()
  tests = tests.map(utils.createTestElement)
}

initialize()
