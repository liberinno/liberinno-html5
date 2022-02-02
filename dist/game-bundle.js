/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Game)
/* harmony export */ });
class Game {
    constructor(canvas) {
        this.canvas = canvas;

        this._timeStarted = -1;
        this._lastTimeUpdate = -1;
    }

    start() {
        console.log('game started');
        this._lastTimeUpdate = 0;
        this._timeSinceStarted = 0;
        this.idGameLoop = setInterval(this._processUpdate.bind(this), 1000 / 30);
    }

    _processUpdate() {
        const curTime = new Date().getTime();
        if (this._timeStarted < 0) this._timeStarted = curTime;
        const timeSinceStarted = curTime - this._timeStarted;
        if (this._lastTimeUpdate < 0) this._lastTimeUpdate = curTime;
        const delta = curTime - this._lastTimeUpdate;
        this._lastTimeUpdate = curTime;

        this.update(delta / 1000, timeSinceStarted / 1000);
    }

    update(delta, time) {
        console.log('delta, time', delta, time);
    }
}

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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/game */ "./src/game.js");


document.body.onload = function () {
    const canvas = document.createElement('canvas');
    canvas.setAttribute('id', 'game_canvas');
    canvas.setAttribute('width', 640);
    canvas.setAttribute('height', 480);
    canvas.setAttribute('style', 'background-color:#000000');

    document.body.prepend(canvas);

    const game = new _src_game__WEBPACK_IMPORTED_MODULE_0__["default"](canvas);
    game.start();
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZS1idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUM3QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ044Qjs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQixpREFBSTtBQUN6QjtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saWJlcmlubm8taHRtbDUvLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9saWJlcmlubm8taHRtbDUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbGliZXJpbm5vLWh0bWw1L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9saWJlcmlubm8taHRtbDUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9saWJlcmlubm8taHRtbDUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9saWJlcmlubm8taHRtbDUvLi9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcblxuICAgICAgICB0aGlzLl90aW1lU3RhcnRlZCA9IC0xO1xuICAgICAgICB0aGlzLl9sYXN0VGltZVVwZGF0ZSA9IC0xO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBjb25zb2xlLmxvZygnZ2FtZSBzdGFydGVkJyk7XG4gICAgICAgIHRoaXMuX2xhc3RUaW1lVXBkYXRlID0gMDtcbiAgICAgICAgdGhpcy5fdGltZVNpbmNlU3RhcnRlZCA9IDA7XG4gICAgICAgIHRoaXMuaWRHYW1lTG9vcCA9IHNldEludGVydmFsKHRoaXMuX3Byb2Nlc3NVcGRhdGUuYmluZCh0aGlzKSwgMTAwMCAvIDMwKTtcbiAgICB9XG5cbiAgICBfcHJvY2Vzc1VwZGF0ZSgpIHtcbiAgICAgICAgY29uc3QgY3VyVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICBpZiAodGhpcy5fdGltZVN0YXJ0ZWQgPCAwKSB0aGlzLl90aW1lU3RhcnRlZCA9IGN1clRpbWU7XG4gICAgICAgIGNvbnN0IHRpbWVTaW5jZVN0YXJ0ZWQgPSBjdXJUaW1lIC0gdGhpcy5fdGltZVN0YXJ0ZWQ7XG4gICAgICAgIGlmICh0aGlzLl9sYXN0VGltZVVwZGF0ZSA8IDApIHRoaXMuX2xhc3RUaW1lVXBkYXRlID0gY3VyVGltZTtcbiAgICAgICAgY29uc3QgZGVsdGEgPSBjdXJUaW1lIC0gdGhpcy5fbGFzdFRpbWVVcGRhdGU7XG4gICAgICAgIHRoaXMuX2xhc3RUaW1lVXBkYXRlID0gY3VyVGltZTtcblxuICAgICAgICB0aGlzLnVwZGF0ZShkZWx0YSAvIDEwMDAsIHRpbWVTaW5jZVN0YXJ0ZWQgLyAxMDAwKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoZGVsdGEsIHRpbWUpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2RlbHRhLCB0aW1lJywgZGVsdGEsIHRpbWUpO1xuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBHYW1lIGZyb20gJy4vc3JjL2dhbWUnO1xuXG5kb2N1bWVudC5ib2R5Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICBjYW52YXMuc2V0QXR0cmlidXRlKCdpZCcsICdnYW1lX2NhbnZhcycpO1xuICAgIGNhbnZhcy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgNjQwKTtcbiAgICBjYW52YXMuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCA0ODApO1xuICAgIGNhbnZhcy5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JhY2tncm91bmQtY29sb3I6IzAwMDAwMCcpO1xuXG4gICAgZG9jdW1lbnQuYm9keS5wcmVwZW5kKGNhbnZhcyk7XG5cbiAgICBjb25zdCBnYW1lID0gbmV3IEdhbWUoY2FudmFzKTtcbiAgICBnYW1lLnN0YXJ0KCk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9