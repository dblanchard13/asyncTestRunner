// grab the necessary modules
const styles = require('../styles/styles')
const tests = require('../tests/tests')
const runner = require('./runner')

// grab the dom elements that will be getting updated
const actionContainer = document.getElementById('actions-container')
const testContainer = document.getElementById('tests-container')

const initializeStatusCounts = (counts) => {
  counts.stillRunning = tests.length
  counts.passed = 0
  counts.failed = 0

  setStatusCounts(counts)
}

const setStatusCounts = (counts) => {
  const first = document.getElementById('status-count-1')
  const second = document.getElementById('status-count-2')
  const third = document.getElementById('status-count-3')
  const countElementsArray = [third, second, first]

  const displayMappings = {
    passed: 'Passed: ',
    failed: 'Failed: ',
    stillRunning: 'Not Completed: '
  }

  Object.keys(counts)
    // map into tuples
    .map((key) => {
      return [key, counts[key]]
    })
    // sort by the value of count
    .sort((a, b) => {
      return a[1] >= b[1]
    })
    // update the innerHTML of the corresponding count div
    .forEach((tuple, index) => {
      const elem = countElementsArray[index]
      const key = tuple[0]

      elem.innerText = displayMappings[key] + tuple[1]
    })
}

const showAllDone = (startTime) => {
  const runButton = document.getElementById('run-button')
  runButton.disabled = false

  const endTime = new Date()
  const attrs = {
    id: 'user-alert',
    innerHTML: `Finished in ${endTime - startTime} milliseconds!`
  }

  const alert = createElementWithAttrs('alert', attrs)

  const alertNode = document.getElementById('user-alert')
  alertNode.parentNode.replaceChild(alert, alertNode)
}

const addRunButton = () => {
  const attrs = {
    id: 'run-button',
    // bind the runner with this modules exported functions
    // normally would just require in this file to the runner file,
    // but for some reason the second time this function was required
    // it returned an empty object instead of the expected module defined below.
    onclick: runner.runTests.bind(null, module.exports),
    innerHTML: 'Run Tests',
    className: 'waves-effect waves-light btn'
  }

  const runButton = createElementWithAttrs('button', attrs)

  actionContainer.appendChild(runButton)
}

const addCountsBoard = () => {
  const styles = {
    position: 'absolute',
    'z-index': 2,
    height: '100px',
    width: '200px',
    top: '50px',
    left: '11vw',
  }

  const board = createElementWithAttrs('div', { id: 'counts-board' }, styles)
  document.body.appendChild(board)

  let count = 1

  while (count < 4) {
    let attrs = {
      className: 'count-text',
      id: `status-count-${count}`,
    }

    let countDiv = createElementWithAttrs('p', attrs)
    board.appendChild(countDiv)

    count ++
  }
}

const createTestElement = (test, id) => {
  const divAttrs = {
    id,
    className: 'test',
  }

  const testDiv = createElementWithAttrs('div', divAttrs, styles.notStarted)
  testContainer.appendChild(testDiv)

  const textAttrs = {
    className: 'test-text'
  }

  textAttrs.innerHTML = test.description
  const descriptionText = createElementWithAttrs('p', textAttrs)
  testDiv.appendChild(descriptionText)

  const hr = createElementWithAttrs('hr', {className: 'test-hr'})
  testDiv.appendChild(hr)

  textAttrs.innerHTML = 'Status: Not Yet Started'
  const statusText = createElementWithAttrs('p', textAttrs)
  testDiv.appendChild(statusText)

  test.id = id
  return test
}

const createElementWithAttrs = (elemType, attrs, styles) => {
  const element = document.createElement(elemType)
  Object.assign(element, attrs)
  if (styles) Object.assign(element.style, styles)
  return element
}


module.exports = {
  initializeStatusCounts,
  setStatusCounts,
  showAllDone,
  addRunButton,
  addCountsBoard,
  createTestElement,
  createElementWithAttrs,
}
