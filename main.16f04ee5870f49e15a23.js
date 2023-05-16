/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"init\": () => (/* binding */ init)\n/* harmony export */ });\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/main.scss */ \"./sass/main.scss\");\n/* harmony import */ var _js_getRandomData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/getRandomData */ \"./js/getRandomData.js\");\n/* harmony import */ var _js_createTemplateGame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/createTemplateGame */ \"./js/createTemplateGame.js\");\n/* harmony import */ var _js_handleClick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/handleClick */ \"./js/handleClick.js\");\n/* harmony import */ var _js_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/settings */ \"./js/settings.js\");\n/* harmony import */ var _js_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/modal */ \"./js/modal.js\");\n\n\n\n\n\n\nfunction init(cells, level) {\n  var data = (0,_js_getRandomData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(cells);\n  (0,_js_createTemplateGame__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(data, level);\n\n  // const game = document.querySelector('.game');\n  // game.addEventListener('click', handleClick);\n  // game.addEventListener('contextmenu', handleClick);\n\n  var field = document.querySelector('.game__field');\n  field.addEventListener('click', _js_handleClick__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n  field.addEventListener('contextmenu', _js_handleClick__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n  var settings = document.querySelector('.game__settings');\n  settings.addEventListener('click', _js_settings__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n  var modal = document.querySelector('.modal');\n  modal.addEventListener('click', _js_modal__WEBPACK_IMPORTED_MODULE_5__.closeModal);\n}\ninit();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./js/createTemplateGame.js":
/*!**********************************!*\
  !*** ./js/createTemplateGame.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createTemplateGame)\n/* harmony export */ });\nfunction createTemplateGame(data) {\n  var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'easy';\n  var theme = 'dark';\n  var wrapper = document.createElement('div');\n  wrapper.classList.add('wrapper');\n  var game = document.createElement('div');\n  game.classList.add('game', level);\n  var field = document.createElement('div');\n  field.classList.add('game__field', \"\".concat(level));\n  field.dataset.size = data.length;\n  for (var i = 0; i < data.length; i++) {\n    for (var j = 0; j < data.length; j++) {\n      var cell = document.createElement('div');\n      cell.classList.add('cell');\n      cell.id = \"\".concat(i, \"-\").concat(j);\n      switch (data[i][j]) {\n        case 'm':\n          {\n            cell.innerHTML = '<i class=\"mine ri-fire-fill\"></i>';\n            break;\n          }\n        case 1:\n          {\n            cell.classList.add('color-1');\n            cell.textContent = data[i][j];\n            break;\n          }\n        case 2:\n          {\n            cell.classList.add('color-2');\n            cell.textContent = data[i][j];\n            break;\n          }\n        case 3:\n          {\n            cell.classList.add('color-3');\n            cell.textContent = data[i][j];\n            break;\n          }\n        case 4:\n          {\n            cell.classList.add('color-4');\n            cell.textContent = data[i][j];\n            break;\n          }\n        default:\n          cell.textContent = data[i][j];\n      }\n      // if (data[i][j] === 'm') {\n      //   cell.innerHTML = '<i class=\"mine ri-fire-fill\"></i>';\n      // }\n      // else if (data[i][j]) {\n      //   const num = +data[i][j];\n      //   if(num === 1) {\n      //     cell.classList.add('color-1')\n      //   } else if (num === 2) {\n      //     cell.classList.add('color-1')\n      //   } else if\n      //   cell.textContent = data[i][j];\n      // } else {\n      //   cell.textContent = data[i][j];\n      // }\n      var $i = document.createElement('i');\n      $i.classList.add('cell__flag', 'ri-flag-2-line');\n      cell.append($i);\n      field.append(cell);\n    }\n  }\n\n  //create menu\n  var header = \"\\n  <div class=\\\"game__header\\\">\\n  <div class=\\\"game__time\\\">\\n    <i class=\\\"icon ri-time-line\\\"></i>\\n    <div class=\\\"time\\\">\\n      <span class=\\\"time__minutes\\\">00</span>\\n      <span class=\\\"time__sep\\\">:</span>\\n      <span class=\\\"time__seconds\\\">00</span>\\n    </div>\\n  </div>\\n  <div class=\\\"game__flag\\\">\\n    <i class=\\\"icon ri-flag-2-line\\\"></i>\\n    <span id=\\\"countFlag\\\">\".concat(data.length, \"</span>\\n  </div>\\n  <div class=\\\"game__click\\\">\\n  <i class=\\\"icon ri-mouse-line\\\"></i>\\n    <span id=\\\"countClick\\\">0</span>\\n  </div>\\n  <div class=\\\"game__settings\\\">\\n  <ul class=\\\"menu\\\">\\n    <li class=\\\"menu__color\\\" data-settings=\\\"color\\\">\\n      <i data-settings=\\\"color\\\" class=\\\"\").concat(theme === 'bright' ? 'none' : '', \" icon_sun ri-sun-line\\\"></i>\\n      <i data-settings=\\\"color\\\" class=\\\"\").concat(theme === 'dark' ? 'none' : '', \" icon_moon ri-moon-line\\\"></i>\\n      </li>\\n    <li class=\\\"menu__new-game\\\" data-settings=\\\"newGame\\\">New game</li>\\n    <li class=\\\"menu__records\\\" data-settings=\\\"records\\\">My records</li>\\n    <li class=\\\"menu__level\\\">\\n        <span class=\\\"level-easy\\\" data-settings=\\\"easy\\\">easy</span>\\n        <span class=\\\"level-hard\\\"  data-settings=\\\"hard\\\">hard</span>\\n        <span class=\\\"level-expert\\\"  data-settings=\\\"expert\\\">expert</span>\\n    </li>\\n  </ul>\\n  <i class=\\\"icon ri-settings-4-line\\\" id=\\\"settings\\\"></i>\\n</div>\\n</div>\");\n  var modal = \"\\n  <div class=\\\"modal\\\">\\n  <div class=\\\"modal__content\\\">\\n    <div class=\\\"modal__title\\\">\\u041F\\u043E\\u0431\\u0435\\u0434\\u0430</div>\\n    <p class=\\\"modal__descr\\\"></p>\\n    <button class=\\\"modal__close\\\">\\n      <i class=\\\"ri-close-line\\\"></i>\\n    </button>\\n  </div>\\n</div>\\n  \";\n  game.insertAdjacentHTML('afterbegin', header);\n  game.append(field);\n  wrapper.append(game);\n  document.body.innerHTML = '';\n  document.body.append(wrapper);\n  document.body.insertAdjacentHTML('beforeend', modal);\n}\n\n//# sourceURL=webpack:///./js/createTemplateGame.js?");

/***/ }),

/***/ "./js/getRandomData.js":
/*!*****************************!*\
  !*** ./js/getRandomData.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getMatrix)\n/* harmony export */ });\nfunction getMatrix() {\n  var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;\n  var data = new Array(count * count).fill('').map(function (el, idx) {\n    if (idx < count) {\n      return el = 'm';\n    } else {\n      return el;\n    }\n  });\n  data.sort(function () {\n    return Math.random() - 0.5;\n  });\n\n  // create matrix\n  var matrix = [];\n  var index = 0;\n  for (var i = 0; i < count; i++) {\n    matrix[i] = [];\n    for (var j = 0; j < count; j++) {\n      matrix[i][j] = data[index];\n      index++;\n    }\n  }\n\n  // fill matrix\n  for (var _i = 0; _i < count; _i++) {\n    for (var _j = 0; _j < count; _j++) {\n      if (matrix[_i][_j] === 'm' || !matrix[_i - 1] || !matrix[_i + 1] || !matrix[_j - 1] || !matrix[_j + 1]) {\n        continue;\n      }\n      var countMine = 0;\n      matrix[_i - 1][_j - 1] === 'm' ? countMine++ : '';\n      matrix[_i - 1][_j] === 'm' ? countMine++ : '';\n      matrix[_i - 1][_j + 1] === 'm' ? countMine++ : '';\n      matrix[_i][_j - 1] === 'm' ? countMine++ : '';\n      matrix[_i][_j + 1] === 'm' ? countMine++ : '';\n      matrix[_i + 1][_j - 1] === 'm' ? countMine++ : '';\n      matrix[_i + 1][_j] === 'm' ? countMine++ : '';\n      matrix[_i + 1][_j + 1] === 'm' ? countMine++ : '';\n      if (countMine === 0) {\n        // matrix[i][j] = '';\n        continue;\n      } else {\n        matrix[_i][_j] = countMine;\n        countMine = 0;\n      }\n    }\n  }\n  return matrix;\n}\n\n//# sourceURL=webpack:///./js/getRandomData.js?");

/***/ }),

/***/ "./js/handleClick.js":
/*!***************************!*\
  !*** ./js/handleClick.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handleClick)\n/* harmony export */ });\n/* harmony import */ var _handleTimer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handleTimer.js */ \"./js/handleTimer.js\");\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.js */ \"./js/modal.js\");\n\n\n//import { init } from '../index.js';\n\nvar isTimer = false;\nfunction handleClick(e) {\n  e.preventDefault();\n  var cell = e.target.closest('.cell');\n  var countFlag = document.querySelector('#countFlag');\n  if (e.type === 'contextmenu' && cell && !cell.classList.contains('open')) {\n    toggleFlag(cell, countFlag);\n  } else {\n    openCell(cell);\n  }\n}\nfunction playMusic(events) {\n  var audio = new Audio(\"../assets/audio/\".concat(events, \".mp3\"));\n  audio.play();\n}\nfunction countClick(cell) {\n  if (cell.classList.contains('open')) return;\n  var count = document.querySelector('#countClick');\n  count.textContent = +count.textContent + 1;\n}\nfunction toggleFlag(cell, countFlag) {\n  if (cell.classList.contains('flag')) {\n    countFlag.textContent = +countFlag.textContent + 1;\n  } else if (+countFlag.textContent != 0) {\n    countFlag.textContent = +countFlag.textContent - 1;\n  } else {\n    return;\n  }\n  playMusic('flag');\n  cell.classList.toggle('flag');\n  countClick(cell);\n}\nfunction openCell(cell) {\n  //const game = document.querySelector('.game');\n\n  if (!cell || cell.classList.contains('flag')) return;\n  console.log(countOpened, size * size - size);\n\n  // if(game.classList.contains('launched') ) {\n  //   countClick(cell);\n  //   cell.classList.add('open');\n  //   if(cell.querySelector('.mine')) {\n  //     showModal('loss');\n  //     console.log( document.querySelectorAll('.cell.open').length);\n\n  //   } else if (countOpened === (size * size - size)) {\n  //     showModal();\n  //   }\n  // } else {\n  //   game.classList.add('launched');\n  //   countClick(cell);\n  //   cell.classList.add('open');\n  //   startTimer();\n  // }\n  if (!isTimer) {\n    (0,_handleTimer_js__WEBPACK_IMPORTED_MODULE_0__.startTimer)();\n    isTimer = true;\n  }\n  playMusic('open');\n  countClick(cell);\n  cell.classList.add('open');\n  var size = +document.querySelector('.game__field').dataset.size;\n  var countOpened = document.querySelectorAll('.cell.open').length;\n  // if(cell.querySelector('.mine') && document.querySelector('#countClick').textContent === '1') {\n  //   init();\n  //   return;\n  // }\n  if (cell.querySelector('.mine')) {\n    playMusic('mine');\n    (0,_modal_js__WEBPACK_IMPORTED_MODULE_1__.showModal)('loss');\n    var cells = document.querySelectorAll('.cell');\n    cells.forEach(function (element) {\n      element.classList.add('open');\n    });\n  } else if (countOpened === size * size - size) {\n    (0,_modal_js__WEBPACK_IMPORTED_MODULE_1__.showModal)();\n    playMusic('win');\n  }\n}\n\n//# sourceURL=webpack:///./js/handleClick.js?");

/***/ }),

/***/ "./js/handleTimer.js":
/*!***************************!*\
  !*** ./js/handleTimer.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"startTimer\": () => (/* binding */ startTimer),\n/* harmony export */   \"stopTimer\": () => (/* binding */ stopTimer)\n/* harmony export */ });\nvar timer;\nfunction startTimer() {\n  var $minutes = document.querySelector('.time__minutes');\n  var $seconds = document.querySelector('.time__seconds');\n  timer = setInterval(function () {\n    var min = +$minutes.textContent;\n    var sec = +$seconds.textContent;\n    if (sec < 59) {\n      $seconds.textContent = sec < 9 ? \"0\".concat(sec + 1) : sec + 1;\n    } else {\n      $minutes.textContent = min < 9 ? \"0\".concat(min + 1) : min + 1;\n      $seconds.textContent = '00';\n    }\n  }, 1000);\n\n  // let min = +$minutes.textContent;\n  // let sec = +$seconds.textContent;\n  // if (sec < 59) {\n  //   $seconds.textContent = sec < 9 ? `0${sec + 1}` : sec + 1;\n  // } else {\n  //   $minutes.textContent = min  < 9 ?`0${min + 1}` : min + 1; \n  //   $seconds.textContent = '00';\n  // }\n}\n\nfunction stopTimer() {\n  clearInterval(timer);\n}\n\n\n//# sourceURL=webpack:///./js/handleTimer.js?");

/***/ }),

/***/ "./js/modal.js":
/*!*********************!*\
  !*** ./js/modal.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"closeModal\": () => (/* binding */ closeModal),\n/* harmony export */   \"showModal\": () => (/* binding */ showModal)\n/* harmony export */ });\n/* harmony import */ var _handleClick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handleClick */ \"./js/handleClick.js\");\n/* harmony import */ var _handleTimer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handleTimer */ \"./js/handleTimer.js\");\n\n\nfunction showModal(status) {\n  var modal = document.querySelector('.modal');\n  var title = modal.querySelector('.modal__title');\n  var text = modal.querySelector('.modal__descr');\n  var countClick = document.querySelector('#countClick').textContent;\n  var min = +document.querySelector('.time__minutes').textContent;\n  var sec = +document.querySelector('.time__seconds').textContent;\n  modal.classList.add('active');\n  (0,_handleTimer__WEBPACK_IMPORTED_MODULE_1__.stopTimer)();\n  document.querySelector('.game__field').removeEventListener('click', _handleClick__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n  if (status === 'loss') {\n    title.textContent = 'Игра окончена';\n    text.textContent = 'Попробуйте еще раз';\n  } else {\n    title.textContent = 'Победа';\n    text.textContent = \" \\u0412\\u044B \\u043D\\u0430\\u0448\\u043B\\u0438 \\u0432\\u0441\\u0435 \\u043C\\u0438\\u043D\\u044B \\u0437\\u0430 \".concat(min * 60 + sec, \" \\u0441\\u0435\\u043A\\u0443\\u043D\\u0434 \\u0438 \").concat(countClick, \" \\u0445\\u043E\\u0434\\u043E\\u0432!\");\n  }\n}\nfunction closeModal(e) {\n  var closeBtn = e.target.closest('.modal__close');\n  if (closeBtn || e.target.classList.contains('modal')) {\n    this.classList.remove('active');\n  }\n}\n\n\n//# sourceURL=webpack:///./js/modal.js?");

/***/ }),

/***/ "./js/settings.js":
/*!************************!*\
  !*** ./js/settings.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./index.js\");\n\nfunction settings(e) {\n  var game = document.querySelector('.game');\n  var el = e.target;\n  var filed = document.querySelector('.game__field');\n  switch (el.dataset.settings) {\n    case 'color':\n      {\n        document.body.classList.toggle('bright');\n        if (document.body.classList.contains('bright')) {\n          document.querySelector('.icon_moon').classList.remove('none');\n          document.querySelector('.icon_sun').classList.add('none');\n        } else {\n          document.querySelector('.icon_moon').classList.add('none');\n          document.querySelector('.icon_sun').classList.remove('none');\n        }\n        break;\n      }\n    case 'newGame':\n      {\n        (0,_index__WEBPACK_IMPORTED_MODULE_0__.init)(10);\n        break;\n      }\n    case 'easy':\n      {\n        filed.classList.add('easy');\n        game.classList.add('easy');\n        (0,_index__WEBPACK_IMPORTED_MODULE_0__.init)(10, 'easy');\n        break;\n      }\n    case 'hard':\n      {\n        filed.classList.add('hard');\n        game.classList.add('hard');\n        (0,_index__WEBPACK_IMPORTED_MODULE_0__.init)(15, 'hard');\n        break;\n      }\n    case 'expert':\n      {\n        filed.classList.add('expert');\n        game.classList.add('expert');\n        (0,_index__WEBPACK_IMPORTED_MODULE_0__.init)(20, 'expert');\n        break;\n      }\n  }\n  this.classList.toggle('active');\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (settings);\n\n//# sourceURL=webpack:///./js/settings.js?");

/***/ }),

/***/ "./sass/main.scss":
/*!************************!*\
  !*** ./sass/main.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./sass/main.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0,
/******/ 			"vendor": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;