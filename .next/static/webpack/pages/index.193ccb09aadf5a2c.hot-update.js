"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/CustomCursor.js":
/*!************************************!*\
  !*** ./components/CustomCursor.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst CustomCursor = ()=>{\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const cursor = document.querySelector(\".custom-cursor\");\n        const moveCursor = (e)=>{\n            cursor.style.left = \"\".concat(e.clientX, \"px\");\n            cursor.style.top = \"\".concat(e.clientY, \"px\");\n            // Create a wet spot at the cursor position\n            createWetSpot(e.clientX, e.clientY);\n        };\n        const createRaindrop = ()=>{\n            const raindrop = document.createElement(\"div\");\n            raindrop.classList.add(\"raindrop\");\n            raindrop.style.left = \"\".concat(Math.random() * window.innerWidth, \"px\");\n            raindrop.style.width = \"\".concat(Math.random() * 5 + 5, \"px\");\n            raindrop.style.height = raindrop.style.width;\n            raindrop.style.animationDuration = \"\".concat(Math.random() * 2 + 1, \"s\");\n            document.body.appendChild(raindrop);\n            setTimeout(()=>{\n                raindrop.remove();\n            }, 3000);\n        };\n        const createWetSpot = (x, y)=>{\n            const wetSpot = document.createElement(\"div\");\n            wetSpot.classList.add(\"wet-spot\");\n            wetSpot.style.left = \"\".concat(x, \"px\");\n            wetSpot.style.top = \"\".concat(y, \"px\");\n            document.body.appendChild(wetSpot);\n            setTimeout(()=>{\n                wetSpot.style.opacity = \"0\";\n                setTimeout(()=>{\n                    wetSpot.remove();\n                }, 1000);\n            }, 1000);\n        };\n        const addHoverEffect = ()=>{\n            document.querySelectorAll(\".hover-target\").forEach((element)=>{\n                element.addEventListener(\"mouseenter\", ()=>{\n                    cursor.classList.add(\"hovered\");\n                });\n                element.addEventListener(\"mouseleave\", ()=>{\n                    cursor.classList.remove(\"hovered\");\n                });\n            });\n        };\n        window.addEventListener(\"mousemove\", moveCursor);\n        const rainInterval = setInterval(createRaindrop, 100);\n        addHoverEffect();\n        return ()=>{\n            window.removeEventListener(\"mousemove\", moveCursor);\n            clearInterval(rainInterval);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"custom-cursor\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\dippa\\\\Desktop\\\\my website\\\\my-portfolio\\\\my-portfolio\\\\components\\\\CustomCursor.js\",\n        lineNumber: 66,\n        columnNumber: 12\n    }, undefined);\n};\n_s(CustomCursor, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = CustomCursor;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomCursor);\nvar _c;\n$RefreshReg$(_c, \"CustomCursor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0N1c3RvbUN1cnNvci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWtDO0FBRWxDLE1BQU1DLGVBQWU7O0lBQ2pCRCxnREFBU0EsQ0FBQztRQUNOLE1BQU1FLFNBQVNDLFNBQVNDLGFBQWEsQ0FBQztRQUV0QyxNQUFNQyxhQUFhLENBQUNDO1lBQ2hCSixPQUFPSyxLQUFLLENBQUNDLElBQUksR0FBRyxHQUFhLE9BQVZGLEVBQUVHLE9BQU8sRUFBQztZQUNqQ1AsT0FBT0ssS0FBSyxDQUFDRyxHQUFHLEdBQUcsR0FBYSxPQUFWSixFQUFFSyxPQUFPLEVBQUM7WUFFaEMsMkNBQTJDO1lBQzNDQyxjQUFjTixFQUFFRyxPQUFPLEVBQUVILEVBQUVLLE9BQU87UUFDdEM7UUFFQSxNQUFNRSxpQkFBaUI7WUFDbkIsTUFBTUMsV0FBV1gsU0FBU1ksYUFBYSxDQUFDO1lBQ3hDRCxTQUFTRSxTQUFTLENBQUNDLEdBQUcsQ0FBQztZQUN2QkgsU0FBU1AsS0FBSyxDQUFDQyxJQUFJLEdBQUcsR0FBcUMsT0FBbENVLEtBQUtDLE1BQU0sS0FBS0MsT0FBT0MsVUFBVSxFQUFDO1lBQzNEUCxTQUFTUCxLQUFLLENBQUNlLEtBQUssR0FBRyxHQUF5QixPQUF0QkosS0FBS0MsTUFBTSxLQUFLLElBQUksR0FBRTtZQUNoREwsU0FBU1AsS0FBSyxDQUFDZ0IsTUFBTSxHQUFHVCxTQUFTUCxLQUFLLENBQUNlLEtBQUs7WUFDNUNSLFNBQVNQLEtBQUssQ0FBQ2lCLGlCQUFpQixHQUFHLEdBQXlCLE9BQXRCTixLQUFLQyxNQUFNLEtBQUssSUFBSSxHQUFFO1lBQzVEaEIsU0FBU3NCLElBQUksQ0FBQ0MsV0FBVyxDQUFDWjtZQUUxQmEsV0FBVztnQkFDUGIsU0FBU2MsTUFBTTtZQUNuQixHQUFHO1FBQ1A7UUFFQSxNQUFNaEIsZ0JBQWdCLENBQUNpQixHQUFHQztZQUN0QixNQUFNQyxVQUFVNUIsU0FBU1ksYUFBYSxDQUFDO1lBQ3ZDZ0IsUUFBUWYsU0FBUyxDQUFDQyxHQUFHLENBQUM7WUFDdEJjLFFBQVF4QixLQUFLLENBQUNDLElBQUksR0FBRyxHQUFLLE9BQUZxQixHQUFFO1lBQzFCRSxRQUFReEIsS0FBSyxDQUFDRyxHQUFHLEdBQUcsR0FBSyxPQUFGb0IsR0FBRTtZQUN6QjNCLFNBQVNzQixJQUFJLENBQUNDLFdBQVcsQ0FBQ0s7WUFFMUJKLFdBQVc7Z0JBQ1BJLFFBQVF4QixLQUFLLENBQUN5QixPQUFPLEdBQUc7Z0JBQ3hCTCxXQUFXO29CQUNQSSxRQUFRSCxNQUFNO2dCQUNsQixHQUFHO1lBQ1AsR0FBRztRQUNQO1FBRUEsTUFBTUssaUJBQWlCO1lBQ25COUIsU0FBUytCLGdCQUFnQixDQUFDLGlCQUFpQkMsT0FBTyxDQUFDQyxDQUFBQTtnQkFDL0NBLFFBQVFDLGdCQUFnQixDQUFDLGNBQWM7b0JBQ25DbkMsT0FBT2MsU0FBUyxDQUFDQyxHQUFHLENBQUM7Z0JBQ3pCO2dCQUNBbUIsUUFBUUMsZ0JBQWdCLENBQUMsY0FBYztvQkFDbkNuQyxPQUFPYyxTQUFTLENBQUNZLE1BQU0sQ0FBQztnQkFDNUI7WUFDSjtRQUNKO1FBRUFSLE9BQU9pQixnQkFBZ0IsQ0FBQyxhQUFhaEM7UUFDckMsTUFBTWlDLGVBQWVDLFlBQVkxQixnQkFBZ0I7UUFFakRvQjtRQUVBLE9BQU87WUFDSGIsT0FBT29CLG1CQUFtQixDQUFDLGFBQWFuQztZQUN4Q29DLGNBQWNIO1FBQ2xCO0lBQ0osR0FBRyxFQUFFO0lBRUwscUJBQU8sOERBQUNJO1FBQUlDLFdBQVU7Ozs7OztBQUMxQjtHQWhFTTFDO0tBQUFBO0FBa0VOLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ3VzdG9tQ3Vyc29yLmpzP2E4MDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgQ3VzdG9tQ3Vyc29yID0gKCkgPT4ge1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBjdXJzb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VzdG9tLWN1cnNvcicpO1xyXG5cclxuICAgICAgICBjb25zdCBtb3ZlQ3Vyc29yID0gKGUpID0+IHtcclxuICAgICAgICAgICAgY3Vyc29yLnN0eWxlLmxlZnQgPSBgJHtlLmNsaWVudFh9cHhgO1xyXG4gICAgICAgICAgICBjdXJzb3Iuc3R5bGUudG9wID0gYCR7ZS5jbGllbnRZfXB4YDtcclxuXHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIHdldCBzcG90IGF0IHRoZSBjdXJzb3IgcG9zaXRpb25cclxuICAgICAgICAgICAgY3JlYXRlV2V0U3BvdChlLmNsaWVudFgsIGUuY2xpZW50WSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgY3JlYXRlUmFpbmRyb3AgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJhaW5kcm9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHJhaW5kcm9wLmNsYXNzTGlzdC5hZGQoJ3JhaW5kcm9wJyk7XHJcbiAgICAgICAgICAgIHJhaW5kcm9wLnN0eWxlLmxlZnQgPSBgJHtNYXRoLnJhbmRvbSgpICogd2luZG93LmlubmVyV2lkdGh9cHhgO1xyXG4gICAgICAgICAgICByYWluZHJvcC5zdHlsZS53aWR0aCA9IGAke01hdGgucmFuZG9tKCkgKiA1ICsgNX1weGA7XHJcbiAgICAgICAgICAgIHJhaW5kcm9wLnN0eWxlLmhlaWdodCA9IHJhaW5kcm9wLnN0eWxlLndpZHRoO1xyXG4gICAgICAgICAgICByYWluZHJvcC5zdHlsZS5hbmltYXRpb25EdXJhdGlvbiA9IGAke01hdGgucmFuZG9tKCkgKiAyICsgMX1zYDtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyYWluZHJvcCk7XHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJhaW5kcm9wLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9LCAzMDAwKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBjcmVhdGVXZXRTcG90ID0gKHgsIHkpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgd2V0U3BvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICB3ZXRTcG90LmNsYXNzTGlzdC5hZGQoJ3dldC1zcG90Jyk7XHJcbiAgICAgICAgICAgIHdldFNwb3Quc3R5bGUubGVmdCA9IGAke3h9cHhgO1xyXG4gICAgICAgICAgICB3ZXRTcG90LnN0eWxlLnRvcCA9IGAke3l9cHhgO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHdldFNwb3QpO1xyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB3ZXRTcG90LnN0eWxlLm9wYWNpdHkgPSAnMCc7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB3ZXRTcG90LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGFkZEhvdmVyRWZmZWN0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaG92ZXItdGFyZ2V0JykuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3IuY2xhc3NMaXN0LmFkZCgnaG92ZXJlZCcpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyZWQnKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW92ZUN1cnNvcik7XHJcbiAgICAgICAgY29uc3QgcmFpbkludGVydmFsID0gc2V0SW50ZXJ2YWwoY3JlYXRlUmFpbmRyb3AsIDEwMCk7XHJcblxyXG4gICAgICAgIGFkZEhvdmVyRWZmZWN0KCk7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3ZlQ3Vyc29yKTtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChyYWluSW50ZXJ2YWwpO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tLWN1cnNvclwiPjwvZGl2PjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEN1c3RvbUN1cnNvcjtcclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsIkN1c3RvbUN1cnNvciIsImN1cnNvciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1vdmVDdXJzb3IiLCJlIiwic3R5bGUiLCJsZWZ0IiwiY2xpZW50WCIsInRvcCIsImNsaWVudFkiLCJjcmVhdGVXZXRTcG90IiwiY3JlYXRlUmFpbmRyb3AiLCJyYWluZHJvcCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJNYXRoIiwicmFuZG9tIiwid2luZG93IiwiaW5uZXJXaWR0aCIsIndpZHRoIiwiaGVpZ2h0IiwiYW5pbWF0aW9uRHVyYXRpb24iLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwieCIsInkiLCJ3ZXRTcG90Iiwib3BhY2l0eSIsImFkZEhvdmVyRWZmZWN0IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJhaW5JbnRlcnZhbCIsInNldEludGVydmFsIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNsZWFySW50ZXJ2YWwiLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CustomCursor.js\n"));

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sidebar */ \"./components/Sidebar.js\");\n/* harmony import */ var _CustomCursor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomCursor */ \"./components/CustomCursor.js\");\n\n\n\nconst Layout = (param)=>{\n    let { children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen flex flex-col lg:flex-row bg-gray-100\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Sidebar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dippa\\\\Desktop\\\\my website\\\\my-portfolio\\\\my-portfolio\\\\components\\\\Layout.js\",\n                lineNumber: 7,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-1 lg:ml-64 p-6 bg-gray-100 min-h-screen\",\n                children: children\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dippa\\\\Desktop\\\\my website\\\\my-portfolio\\\\my-portfolio\\\\components\\\\Layout.js\",\n                lineNumber: 8,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CustomCursor__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dippa\\\\Desktop\\\\my website\\\\my-portfolio\\\\my-portfolio\\\\components\\\\Layout.js\",\n                lineNumber: 12,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\dippa\\\\Desktop\\\\my website\\\\my-portfolio\\\\my-portfolio\\\\components\\\\Layout.js\",\n        lineNumber: 5,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFDVTtBQUMxQyxNQUFNRSxTQUFTO1FBQUMsRUFBRUMsUUFBUSxFQUFFO0lBQ3hCLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFVOzswQkFFWCw4REFBQ0wsZ0RBQU9BOzs7OzswQkFDUiw4REFBQ0k7Z0JBQUlDLFdBQVU7MEJBRVZGOzs7Ozs7MEJBRUwsOERBQUNGLHFEQUFZQTs7Ozs7Ozs7Ozs7QUFHekI7S0FaTUM7QUFjTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xheW91dC5qcz81MTVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTaWRlYmFyIGZyb20gJy4vU2lkZWJhcic7XHJcbmltcG9ydCBDdXN0b21DdXJzb3IgZnJvbSAnLi9DdXN0b21DdXJzb3InO1xyXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3cgYmctZ3JheS0xMDBcIj5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICA8U2lkZWJhciAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBsZzptbC02NCBwLTYgYmctZ3JheS0xMDAgbWluLWgtc2NyZWVuXCI+XHJcblxyXG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPEN1c3RvbUN1cnNvciAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcclxuIl0sIm5hbWVzIjpbIlNpZGViYXIiLCJDdXN0b21DdXJzb3IiLCJMYXlvdXQiLCJjaGlsZHJlbiIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Layout.js\n"));

/***/ })

});