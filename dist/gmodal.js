/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/GModal.ts":
/*!***********************!*\
  !*** ./src/GModal.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var GModal = /** @class */function () {
  function GModal(el, options) {
    this.el = el;
    this.options = options;
    this.scrollBarWidth = 0;
    this.initialize();
  }
  GModal.prototype._supportsTouchEvents = function () {
    return "ontouchstart" in window;
  };
  GModal.prototype._getScrollBarWidth = function () {
    var inner = document.createElement("p");
    inner.setAttribute("style", "width: 100%, height: 1px;");
    var outer = document.createElement("div");
    outer.setAttribute("style", "position: absolute;top:0;left:0;visibility:hidden;width:100px;height: 1px;overflow:hidden");
    outer.appendChild(inner);
    document.body.appendChild(outer);
    var w1 = inner.offsetWidth;
    outer.style.overflow = "scroll";
    var w2 = inner.offsetWidth;
    w1 == w2 ? w2 = outer.clientWidth : "";
    document.body.removeChild(outer);
    return w1 - w2;
  };
  GModal.prototype.initialize = function () {
    var _this = this;
    var pageHasScroll = window.innerWidth > document.documentElement.clientWidth;
    if (pageHasScroll) this.scrollBarWidth = this._getScrollBarWidth();
    var triggerEls = document.querySelectorAll(this.el);
    triggerEls.forEach(function (el) {
      _this.onOpen(el);
    });
    var overlays = document.querySelectorAll(".g-modal__overlay");
    overlays.forEach(function (el) {
      _this.onCloseOverlay(el);
    });
    var closeButtons = document.querySelectorAll(".js-modal-close");
    closeButtons.forEach(function (el) {
      _this.onCloseButton(el);
    });
  };
  GModal.prototype.onOpen = function (el) {
    var _this = this;
    var target = document.querySelector(el.dataset.target);
    el.addEventListener("click", function () {
      if (el.dataset.open !== undefined || el.dataset.close !== undefined) {
        var styleNode = document.createElement("style");
        styleNode.id = "inline-effects";
        styleNode.innerHTML = ":root { \n        --open-effect: ".concat(el.dataset.open, "; \n        --close-effect: ").concat(el.dataset.close, "; \n      }");
        document.head.appendChild(styleNode);
      }
      document.body.classList.add("modal-open");
      _this.scrollToggle(true);
      target.classList.add("open");
      target.setAttribute("aria-hidden", "false");
      // const elid = document.querySelector(".g-modal__layout");
      target.focus();
    });
  };
  GModal.prototype.onCloseOverlay = function (el) {
    var _this = this;
    el.addEventListener("click", function (event) {
      var isOverlay = event.target.classList.contains("g-modal__overlay");
      if (isOverlay) {
        var target = event.target.closest(".g-modal");
        _this.onClose(target);
      }
    });
  };
  GModal.prototype.onCloseButton = function (el) {
    var _this = this;
    el.addEventListener("click", function (event) {
      var target = event.target.closest(".g-modal");
      _this.onClose(target);
    });
  };
  GModal.prototype.onClose = function (target) {
    var _this = this;
    target.setAttribute("aria-hidden", "true");
    setTimeout(function () {
      var _a;
      target === null || target === void 0 ? void 0 : target.classList.remove("open");
      document.body.classList.remove("modal-open");
      _this.scrollToggle(false);
      (_a = document.getElementById("inline-effects")) === null || _a === void 0 ? void 0 : _a.remove();
    }, this.options.closeDelay);
  };
  GModal.prototype.scrollToggle = function (show) {
    if (!this._supportsTouchEvents()) {
      if (show) {
        document.documentElement.style.overflow = "hidden";
        document.documentElement.style.marginRight = this.scrollBarWidth + "px";
        return;
      }
      document.documentElement.style.overflow = "";
      document.documentElement.style.marginRight = "";
    }
  };
  return GModal;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GModal);

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GModal */ "./src/GModal.ts");

if (typeof window !== "undefined") {
  window.GModal = _GModal__WEBPACK_IMPORTED_MODULE_0__["default"];
}

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 			"/dist/gmodal": 0,
/******/ 			"dist/style": 0
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
/******/ 		var chunkLoadingGlobal = self["webpackChunk_lastofpudge_g_modal"] = self["webpackChunk_lastofpudge_g_modal"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["dist/style"], () => (__webpack_require__("./src/index.ts")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["dist/style"], () => (__webpack_require__("./src/styles/style.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;