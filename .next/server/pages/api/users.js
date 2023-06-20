"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/users";
exports.ids = ["pages/api/users"];
exports.modules = {

/***/ "(api)/./pages/api/users/index.ts":
/*!**********************************!*\
  !*** ./pages/api/users/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_sample_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/sample-data */ \"(api)/./utils/sample-data.ts\");\n\nconst handler = (_req, res)=>{\n    try {\n        if (!Array.isArray(_utils_sample_data__WEBPACK_IMPORTED_MODULE_0__.sampleUserData)) {\n            throw new Error(\"Cannot find user data\");\n        }\n        res.status(200).json(_utils_sample_data__WEBPACK_IMPORTED_MODULE_0__.sampleUserData);\n    } catch (err) {\n        res.status(500).json({\n            statusCode: 500,\n            message: err.message\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlcnMvaW5kZXgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDMkQ7QUFFM0QsTUFBTUMsVUFBVSxDQUFDQyxNQUFzQkM7SUFDckMsSUFBSTtRQUNGLElBQUksQ0FBQ0MsTUFBTUMsUUFBUUwsOERBQWNBLEdBQUc7WUFDbEMsTUFBTSxJQUFJTSxNQUFNO1FBQ2xCO1FBRUFILElBQUlJLE9BQU8sS0FBS0MsS0FBS1IsOERBQWNBO0lBQ3JDLEVBQUUsT0FBT1MsS0FBVTtRQUNqQk4sSUFBSUksT0FBTyxLQUFLQyxLQUFLO1lBQUVFLFlBQVk7WUFBS0MsU0FBU0YsSUFBSUU7UUFBUTtJQUMvRDtBQUNGO0FBRUEsaUVBQWVWLE9BQU9BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdXNlcnMvaW5kZXgudHM/ZThhYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCdcbmltcG9ydCB7IHNhbXBsZVVzZXJEYXRhIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvc2FtcGxlLWRhdGEnXG5cbmNvbnN0IGhhbmRsZXIgPSAoX3JlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XG4gIHRyeSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHNhbXBsZVVzZXJEYXRhKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZmluZCB1c2VyIGRhdGEnKVxuICAgIH1cblxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHNhbXBsZVVzZXJEYXRhKVxuICB9IGNhdGNoIChlcnI6IGFueSkge1xuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgc3RhdHVzQ29kZTogNTAwLCBtZXNzYWdlOiBlcnIubWVzc2FnZSB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcbiJdLCJuYW1lcyI6WyJzYW1wbGVVc2VyRGF0YSIsImhhbmRsZXIiLCJfcmVxIiwicmVzIiwiQXJyYXkiLCJpc0FycmF5IiwiRXJyb3IiLCJzdGF0dXMiLCJqc29uIiwiZXJyIiwic3RhdHVzQ29kZSIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/users/index.ts\n");

/***/ }),

/***/ "(api)/./utils/sample-data.ts":
/*!******************************!*\
  !*** ./utils/sample-data.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   sampleUserData: () => (/* binding */ sampleUserData)\n/* harmony export */ });\n/** Dummy user data. */ const sampleUserData = [\n    {\n        id: 101,\n        name: \"Alice\"\n    },\n    {\n        id: 102,\n        name: \"Bob\"\n    },\n    {\n        id: 103,\n        name: \"Caroline\"\n    },\n    {\n        id: 104,\n        name: \"Dave\"\n    }\n];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9zYW1wbGUtZGF0YS50cyIsIm1hcHBpbmdzIjoiOzs7O0FBRUEscUJBQXFCLEdBQ2QsTUFBTUEsaUJBQXlCO0lBQ3BDO1FBQUVDLElBQUk7UUFBS0MsTUFBTTtJQUFRO0lBQ3pCO1FBQUVELElBQUk7UUFBS0MsTUFBTTtJQUFNO0lBQ3ZCO1FBQUVELElBQUk7UUFBS0MsTUFBTTtJQUFXO0lBQzVCO1FBQUVELElBQUk7UUFBS0MsTUFBTTtJQUFPO0NBQ3pCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vdXRpbHMvc2FtcGxlLWRhdGEudHM/ZDBlYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vaW50ZXJmYWNlcydcblxuLyoqIER1bW15IHVzZXIgZGF0YS4gKi9cbmV4cG9ydCBjb25zdCBzYW1wbGVVc2VyRGF0YTogVXNlcltdID0gW1xuICB7IGlkOiAxMDEsIG5hbWU6ICdBbGljZScgfSxcbiAgeyBpZDogMTAyLCBuYW1lOiAnQm9iJyB9LFxuICB7IGlkOiAxMDMsIG5hbWU6ICdDYXJvbGluZScgfSxcbiAgeyBpZDogMTA0LCBuYW1lOiAnRGF2ZScgfSxcbl1cbiJdLCJuYW1lcyI6WyJzYW1wbGVVc2VyRGF0YSIsImlkIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./utils/sample-data.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/users/index.ts"));
module.exports = __webpack_exports__;

})();