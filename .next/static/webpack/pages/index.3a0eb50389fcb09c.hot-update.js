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

/***/ "./components/Home.js":
/*!****************************!*\
  !*** ./components/Home.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Home = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"home\",\n        className: \"mt-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-4xl font-bold\",\n                children: \"Hello, my name is Dip Pandey\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dippa\\\\Desktop\\\\my website\\\\my-portfolio\\\\my-portfolio\\\\components\\\\Home.js\",\n                lineNumber: 4,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"text-2xl text-red-500\",\n                children: \"I'm a Software Engineer\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dippa\\\\Desktop\\\\my website\\\\my-portfolio\\\\my-portfolio\\\\components\\\\Home.js\",\n                lineNumber: 5,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-4\",\n                children: \"I'm a Software Engineer with extensive experience in creating beautiful front-end experiences and seamless back-end functionality.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dippa\\\\Desktop\\\\my website\\\\my-portfolio\\\\my-portfolio\\\\components\\\\Home.js\",\n                lineNumber: 6,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"mt-4 bg-red-500 text-white p-2 rounded\",\n                children: \"Hire Me\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dippa\\\\Desktop\\\\my website\\\\my-portfolio\\\\my-portfolio\\\\components\\\\Home.js\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\dippa\\\\Desktop\\\\my website\\\\my-portfolio\\\\my-portfolio\\\\components\\\\Home.js\",\n        lineNumber: 3,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hvbWUuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLE9BQU87SUFDVCxxQkFDSSw4REFBQ0M7UUFBUUMsSUFBRztRQUFPQyxXQUFVOzswQkFDekIsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUFxQjs7Ozs7OzBCQUNuQyw4REFBQ0U7Z0JBQUdGLFdBQVU7MEJBQXdCOzs7Ozs7MEJBQ3RDLDhEQUFDRztnQkFBRUgsV0FBVTswQkFBTzs7Ozs7OzBCQUdwQiw4REFBQ0k7Z0JBQU9KLFdBQVU7MEJBQXlDOzs7Ozs7Ozs7Ozs7QUFHdkU7S0FYTUg7QUFhTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hvbWUuanM/NGIyNSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBIb21lID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c2VjdGlvbiBpZD1cImhvbWVcIiBjbGFzc05hbWU9XCJtdC04XCI+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGRcIj5IZWxsbywgbXkgbmFtZSBpcyBEaXAgUGFuZGV5PC9oMj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtcmVkLTUwMFwiPkknbSBhIFNvZnR3YXJlIEVuZ2luZWVyPC9oMz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtNFwiPlxyXG4gICAgICAgICAgICAgICAgSSdtIGEgU29mdHdhcmUgRW5naW5lZXIgd2l0aCBleHRlbnNpdmUgZXhwZXJpZW5jZSBpbiBjcmVhdGluZyBiZWF1dGlmdWwgZnJvbnQtZW5kIGV4cGVyaWVuY2VzIGFuZCBzZWFtbGVzcyBiYWNrLWVuZCBmdW5jdGlvbmFsaXR5LlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibXQtNCBiZy1yZWQtNTAwIHRleHQtd2hpdGUgcC0yIHJvdW5kZWRcIj5IaXJlIE1lPC9idXR0b24+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiJdLCJuYW1lcyI6WyJIb21lIiwic2VjdGlvbiIsImlkIiwiY2xhc3NOYW1lIiwiaDIiLCJoMyIsInAiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Home.js\n"));

/***/ })

});