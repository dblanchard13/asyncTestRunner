/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/public/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);

	const utils = __webpack_require__(5);
	let tests = __webpack_require__(7);

	const initialize = () => {
	  utils.addRunButton();
	  utils.addCountsBoard();
	  tests = tests.map(utils.createTestElement);
	};

	initialize();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./styles.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./styles.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "require('materialize-css')\n\nbody {\n  background-color: whitesmoke;\n  color: dimgray;\n}\n\n#tests-container, #actions-container {\n  padding-top: 25px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  width: 80vw;\n}\n\n#actions-container {\n  height: 100px;\n  margin: 15px;\n  margin-bottom: -25px;\n}\n\n.centered-shell {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n\n.test {\n  width: 250px;\n  height: 200px;\n  margin: 10px;\n  font-size: 23px;\n  text-align: center;\n}\n\n.test-text {\n  line-height: 25px;\n  padding: 5px; \n}\n\n.test-hr {\n  width: 80%\n}\n\n.count-text {\n  margin: 5px;\n}\n\n#user-alert.hidden{\n  opacity: 0;\n  background-color: white;\n}\n\n#user-alert {\n  margin: 5px;\n  margin-right: 11vw;\n  float: right;\n\n  -webkit-transition: opacity 1s ease-in-out;\n  -moz-transition: opacity 1s ease-in-out;\n  -ms-transition: opacity 1s ease-in-out;\n  -o-transition: opacity 1s ease-in-out;\n   opacity: 1;\n}\n\n#alerts-container {\n  padding-top: 10px;\n  margin-bottom: 25px;\n}\n\nhr {\n  width: 80vw;\n}\n\n", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// grab the necessary modules
	const styles = __webpack_require__(6);
	const tests = __webpack_require__(7);
	const runner = __webpack_require__(8);

	// grab the dom elements that will be getting updated
	const actionContainer = document.getElementById('actions-container');
	const testContainer = document.getElementById('tests-container');

	const initializeStatusCounts = counts => {
	  counts.stillRunning = tests.length;
	  counts.passed = 0;
	  counts.failed = 0;

	  setStatusCounts(counts);
	};

	const setStatusCounts = counts => {
	  const first = document.getElementById('status-count-1');
	  const second = document.getElementById('status-count-2');
	  const third = document.getElementById('status-count-3');
	  const countElementsArray = [third, second, first];

	  const displayMappings = {
	    passed: 'Passed: ',
	    failed: 'Failed: ',
	    stillRunning: 'Not Completed: '
	  };

	  Object.keys(counts)
	  // map into tuples
	  .map(key => {
	    return [key, counts[key]];
	  })
	  // sort by the value of count
	  .sort((a, b) => {
	    return a[1] >= b[1];
	  })
	  // update the innerHTML of the corresponding count div
	  .forEach((tuple, index) => {
	    const elem = countElementsArray[index];
	    const key = tuple[0];

	    elem.innerText = displayMappings[key] + tuple[1];
	  });
	};

	const showAllDone = startTime => {
	  const runButton = document.getElementById('run-button');
	  runButton.disabled = false;

	  const endTime = new Date();
	  const attrs = {
	    id: 'user-alert',
	    innerHTML: `Finished in ${ endTime - startTime } milliseconds!`
	  };

	  const alert = createElementWithAttrs('alert', attrs);

	  const alertNode = document.getElementById('user-alert');
	  alertNode.parentNode.replaceChild(alert, alertNode);
	};

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
	  };

	  const runButton = createElementWithAttrs('button', attrs);

	  actionContainer.appendChild(runButton);
	};

	const addCountsBoard = () => {
	  const styles = {
	    position: 'absolute',
	    'z-index': 2,
	    height: '100px',
	    width: '200px',
	    top: '50px',
	    left: '11vw'
	  };

	  const board = createElementWithAttrs('div', { id: 'counts-board' }, styles);
	  document.body.appendChild(board);

	  let count = 1;

	  while (count < 4) {
	    let attrs = {
	      className: 'count-text',
	      id: `status-count-${ count }`
	    };

	    let countDiv = createElementWithAttrs('p', attrs);
	    board.appendChild(countDiv);

	    count++;
	  }
	};

	const createTestElement = (test, id) => {
	  const divAttrs = {
	    id,
	    className: 'test'
	  };

	  const testDiv = createElementWithAttrs('div', divAttrs, styles.notStarted);
	  testContainer.appendChild(testDiv);

	  const textAttrs = {
	    className: 'test-text'
	  };

	  textAttrs.innerHTML = test.description;
	  const descriptionText = createElementWithAttrs('p', textAttrs);
	  testDiv.appendChild(descriptionText);

	  const hr = createElementWithAttrs('hr', { className: 'test-hr' });
	  testDiv.appendChild(hr);

	  textAttrs.innerHTML = 'Status: Not Yet Started';
	  const statusText = createElementWithAttrs('p', textAttrs);
	  testDiv.appendChild(statusText);

	  test.id = id;
	  return test;
	};

	const createElementWithAttrs = (elemType, attrs, styles) => {
	  const element = document.createElement(elemType);
	  Object.assign(element, attrs);
	  if (styles) Object.assign(element.style, styles);
	  return element;
	};

	module.exports = {
	  initializeStatusCounts,
	  setStatusCounts,
	  showAllDone,
	  addRunButton,
	  addCountsBoard,
	  createTestElement,
	  createElementWithAttrs
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = {
	  passedTest: {
	    color: 'green',
	    backgroundColor: 'papayawhip'
	  },
	  failedTest: {
	    color: 'red',
	    backgroundColor: 'slategray'
	  },
	  runningTest: {
	    color: 'rebeccapurple',
	    backgroundColor: 'peachpuff'
	  },
	  notStarted: {
	    color: 'gold',
	    backgroundColor: 'slateblue',
	    opacity: 0.5
	  }
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	function generateDummyTest() {
	  const delay = 2000 + Math.random() * 7000;
	  const testPassed = Math.random() > 0.5;

	  return function (callback) {
	    setTimeout(function () {
	      callback(testPassed);
	    }, delay);
	  };
	}

	const tests = [{ run: generateDummyTest(), description: 'All the kids say, "it\'s the weekend"' }, { run: generateDummyTest(), description: 'Panda panda panda panda' }, { run: generateDummyTest(), description: 'I never made it as a wise man' }, { run: generateDummyTest(), description: 'Where is your boy tonight?' }, { run: generateDummyTest(), description: 'Now do the Harlem shake' }, { run: generateDummyTest(), description: 'From the windows to the wall!' }, { run: generateDummyTest(), description: 'All the kids say, "it\'s the weekend"' }, { run: generateDummyTest(), description: 'Panda panda panda panda' }, { run: generateDummyTest(), description: 'I never made it as a wise man' }, { run: generateDummyTest(), description: 'Where is your boy tonight?' }, { run: generateDummyTest(), description: 'Now do the Harlem shake' }, { run: generateDummyTest(), description: 'From the windows to the wall!' }, { run: generateDummyTest(), description: 'All the kids say, "it\'s the weekend"' }, { run: generateDummyTest(), description: 'Panda panda panda panda' }, { run: generateDummyTest(), description: 'I never made it as a wise man' }, { run: generateDummyTest(), description: 'Where is your boy tonight?' }, { run: generateDummyTest(), description: 'Now do the Harlem shake' }, { run: generateDummyTest(), description: 'From the windows to the wall!' }, { run: generateDummyTest(), description: 'All the kids say, "it\'s the weekend"' }, { run: generateDummyTest(), description: 'Panda panda panda panda' }, { run: generateDummyTest(), description: 'I never made it as a wise man' }, { run: generateDummyTest(), description: 'Where is your boy tonight?' }, { run: generateDummyTest(), description: 'Now do the Harlem shake' }, { run: generateDummyTest(), description: 'From the windows to the wall!' }, { run: generateDummyTest(), description: 'All the kids say, "it\'s the weekend"' }, { run: generateDummyTest(), description: 'Panda panda panda panda' }, { run: generateDummyTest(), description: 'I never made it as a wise man' }, { run: generateDummyTest(), description: 'Where is your boy tonight?' }, { run: generateDummyTest(), description: 'Now do the Harlem shake' }, { run: generateDummyTest(), description: 'From the windows to the wall!' }, { run: generateDummyTest(), description: 'All the kids say, "it\'s the weekend"' }, { run: generateDummyTest(), description: 'Panda panda panda panda' }, { run: generateDummyTest(), description: 'I never made it as a wise man' }, { run: generateDummyTest(), description: 'Where is your boy tonight?' }, { run: generateDummyTest(), description: 'Now do the Harlem shake' }, { run: generateDummyTest(), description: 'From the windows to the wall!' }, { run: generateDummyTest(), description: 'All the kids say, "it\'s the weekend"' }, { run: generateDummyTest(), description: 'Panda panda panda panda' }, { run: generateDummyTest(), description: 'I never made it as a wise man' }, { run: generateDummyTest(), description: 'Where is your boy tonight?' }, { run: generateDummyTest(), description: 'Now do the Harlem shake' }, { run: generateDummyTest(), description: 'From the windows to the wall!' }, { run: generateDummyTest(), description: 'All the kids say, "it\'s the weekend"' }, { run: generateDummyTest(), description: 'Panda panda panda panda' }, { run: generateDummyTest(), description: 'I never made it as a wise man' }, { run: generateDummyTest(), description: 'Where is your boy tonight?' }, { run: generateDummyTest(), description: 'Now do the Harlem shake' }, { run: generateDummyTest(), description: 'From the windows to the wall!' }, { run: generateDummyTest(), description: 'All the kids say, "it\'s the weekend"' }, { run: generateDummyTest(), description: 'Panda panda panda panda' }, { run: generateDummyTest(), description: 'I never made it as a wise man' }, { run: generateDummyTest(), description: 'Where is your boy tonight?' }, { run: generateDummyTest(), description: 'Now do the Harlem shake' }, { run: generateDummyTest(), description: 'From the windows to the wall!' }, { run: generateDummyTest(), description: 'All the kids say, "it\'s the weekend"' }, { run: generateDummyTest(), description: 'Panda panda panda panda' }, { run: generateDummyTest(), description: 'I never made it as a wise man' }, { run: generateDummyTest(), description: 'Where is your boy tonight?' }, { run: generateDummyTest(), description: 'Now do the Harlem shake' }, { run: generateDummyTest(), description: 'From the windows to the wall!' }, { run: generateDummyTest(), description: 'All the kids say, "it\'s the weekend"' }, { run: generateDummyTest(), description: 'Panda panda panda panda' }, { run: generateDummyTest(), description: 'I never made it as a wise man' }, { run: generateDummyTest(), description: 'Where is your boy tonight?' }, { run: generateDummyTest(), description: 'Now do the Harlem shake' }, { run: generateDummyTest(), description: 'From the windows to the wall!' }, { run: generateDummyTest(), description: 'All the kids say, "it\'s the weekend"' }, { run: generateDummyTest(), description: 'Panda panda panda panda' }, { run: generateDummyTest(), description: 'I never made it as a wise man' }, { run: generateDummyTest(), description: 'Where is your boy tonight?' }, { run: generateDummyTest(), description: 'Now do the Harlem shake' }, { run: generateDummyTest(), description: 'From the windows to the wall!' }, { run: generateDummyTest(), description: 'All the kids say, "it\'s the weekend"' }, { run: generateDummyTest(), description: 'Panda panda panda panda' }, { run: generateDummyTest(), description: 'I never made it as a wise man' }, { run: generateDummyTest(), description: 'Where is your boy tonight?' }, { run: generateDummyTest(), description: 'Now do the Harlem shake' }, { run: generateDummyTest(), description: 'From the windows to the wall!' }, { run: generateDummyTest(), description: 'All the kids say, "it\'s the weekend"' }, { run: generateDummyTest(), description: 'Panda panda panda panda' }];

	module.exports = tests;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	const styles = __webpack_require__(6);
	const tests = __webpack_require__(7);

	const counts = {
	  passed: 0,
	  failed: 0,
	  stillRunning: tests.length
	};

	const runTests = utils => {
	  utils.initializeStatusCounts(counts);

	  const runButton = document.getElementById('run-button');
	  runButton.disabled = true;

	  const alert = document.getElementById('user-alert');
	  alert.className = 'hidden';

	  const startTime = new Date();

	  const boundRunTest = runTest.bind(null, utils, startTime);

	  tests.forEach(boundRunTest);
	};

	const runTest = (utils, startTime, test) => {
	  const testDiv = document.getElementById(test.id);
	  const statusText = testDiv.lastChild;
	  statusText.innerHTML = 'Status: Running';
	  Object.assign(testDiv.style, styles.runningTest);

	  test.run(result => {
	    counts.stillRunning--;

	    if (result) {
	      statusText.innerHTML = 'Status: Passed';
	      Object.assign(testDiv.style, styles.passedTest);
	      counts.passed++;
	      utils.setStatusCounts(counts);
	    } else {
	      statusText.innerHTML = 'Status: Failed';
	      Object.assign(testDiv.style, styles.failedTest);
	      counts.failed++;
	      utils.setStatusCounts(counts);
	    }

	    if (!counts.stillRunning) utils.showAllDone(startTime);
	  });
	};

	module.exports = { runTests };

/***/ }
/******/ ]);