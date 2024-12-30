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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* Global reset */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n/* Navigator bar */\n.nav-div {\n  height: 80px;\n  background-color: black;\n\n  display: flex;\n  align-items: center;\n}\n\n.icon {\n  height: 30px;\n  filter: invert(100%);\n  margin-left: 20px;\n}\n\n.project-title {\n  color: white;\n  margin-left: 10px;\n}\n\n.github-button {\n  margin-left: auto;\n  margin-right: 20px;\n  background-color: #333;\n  color: #fff;\n  border-radius: 5px;\n  padding: 6px 14px;\n  font-size: 16px;\n  font-weight: bold;\n  text-decoration: none;\n  display: inline-block;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n\n.github-button:hover {\n  background-color: #444;\n  border-color: #555;\n  color: #ddd;\n}\n\n.github-button:active {\n  background-color: #222;\n  border-color: #333;\n}\n\n/* Working on Projects */\n.current-project-div {\n  height: 56px;\n  background-color: #333;\n  display: flex;\n  align-items: center;\n  font-size: 19px;\n  color: white;\n  padding-left: 20px;\n}\n\n.current-project-div-icons {\n  margin-left: auto;\n  margin-right: 20px;\n\n  display: flex;\n  gap: 10px;\n}\n\n.current-project-div-icons img {\n  height: 25px;\n  filter: invert(100);\n  cursor: pointer;\n}\n\n/* Modal style */\n/* Modal overlay to darken background */\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n\n/* Modal content box */\n.modal-content {\n  background: white;\n  width: 350px;\n  padding: 20px;\n  border-radius: 8px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);\n  position: relative;\n}\n\n/* Modal title */\n.modal-content h2 {\n  margin: 0;\n  font-size: 20px;\n  color: black;\n}\n\n/* Close button */\n.modal-close {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  border: none;\n  background: none;\n  font-size: 18px;\n  cursor: pointer;\n}\n\n/* Input label */\n.modal-content label {\n  display: block;\n  margin-top: 20px;\n  font-size: 14px;\n  color: black;\n}\n\n/* Input field */\n.modal-content input[type=\"text\"] {\n  width: 100%;\n  padding: 8px;\n  margin-top: 8px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  font-size: 14px;\n}\n\n/* Submit button */\n.modal-submit {\n  width: 100%;\n  padding: 10px;\n  margin-top: 20px;\n  background: gray;\n  border: none;\n  color: white;\n  font-size: 16px;\n  cursor: pointer;\n  border-radius: 4px;\n}\n\n/* Add hover effect for submit button */\n.modal-submit:hover {\n  background: #333;\n}\n\n/* Add padding to the projects sidebar plus icon */\n.plus-icon {\n  width: 24px;\n  height: 24px;\n  cursor: pointer;\n  margin-top: 8px;\n}\n\n/**/\n/* Projects sidebar */\n.project-sidebar-parent-div {\n  display: flex;\n  flex-direction: column;\n}\n\n.project-sidebar {\n  width: 300px;\n  padding: 20px;\n  display: flex;\n  align-items: center;\n\n  font-weight: bold;\n}\n\n.project-sidebar img {\n  height: 25px;\n  margin-left: auto;\n  margin-right: 0;\n}\n\n.project {\n  width: 300px;\n  padding: 20px;\n  display: flex;\n  color: #555;\n}\n\n.task-counter {\n  margin-left: auto;\n  margin-right: 2.5px;\n  border-radius: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 20px;\n  height: 20px;\n  background-color: gray;\n  color: white;\n  border-radius: 50%;\n  text-align: center;\n  font-size: 12px;\n  font-weight: bold;\n}\n\n/* Selected project */\n.selected{\n  background-color: red;\n  color: black;\n}\n\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/icons/bin-icon.png":
/*!********************************!*\
  !*** ./src/icons/bin-icon.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"233656da5e01c587a093ead28ba06018.png\");\n\n//# sourceURL=webpack://todo-list/./src/icons/bin-icon.png?");

/***/ }),

/***/ "./src/icons/pencil-outline.png":
/*!**************************************!*\
  !*** ./src/icons/pencil-outline.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"ca2710ee908b1bc7b0c26178bc143bdf.png\");\n\n//# sourceURL=webpack://todo-list/./src/icons/pencil-outline.png?");

/***/ }),

/***/ "./src/icons/plus.png":
/*!****************************!*\
  !*** ./src/icons/plus.png ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"c4b1f506a9586e87bb8041b8b067b24f.png\");\n\n//# sourceURL=webpack://todo-list/./src/icons/plus.png?");

/***/ }),

/***/ "./src/images/check-icon.png":
/*!***********************************!*\
  !*** ./src/images/check-icon.png ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"51e97c49e354d81b34aa9b18baaee058.png\");\n\n//# sourceURL=webpack://todo-list/./src/images/check-icon.png?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/UI */ \"./src/modules/UI.js\");\n/* harmony import */ var _modules_logic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/logic */ \"./src/modules/logic.js\");\n\n\n//import createNav from \"./modules/UI\";\n\n\n\n//import { renderProjects } from \"./modules/UI\";\n\n/* HOW AN ARRAY OF OBJECT SHOULD LOOK LIKE\n\nlet TODO = [\n    {\n        name: \"Default Project\",\n        tasks: [\n            { name: \"Do homework\", priority: \"first\" },\n            { name: \"Do the laundry\", priority: \"second\" }\n            ]\n            },\n            {\n                name: \"First Project\",\n                tasks: [\n                    { name: \"Pay the bills\", priority: \"first\" },\n                    { name: \"Call a mechanic\", priority: \"second\" }\n                    ]\n                    }\n                    ];\n                    */\n(0,_modules_UI__WEBPACK_IMPORTED_MODULE_1__.createNav)();\n//createProjects();\n//initializeDefaultProject();\n//renderProjects();\n//getLastAddedProject();\n//renderProjects();\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createNav: () => (/* binding */ createNav)\n/* harmony export */ });\n/* harmony import */ var _icons_bin_icon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../icons/bin-icon.png */ \"./src/icons/bin-icon.png\");\n/* harmony import */ var _icons_pencil_outline_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icons/pencil-outline.png */ \"./src/icons/pencil-outline.png\");\n/* harmony import */ var _icons_plus_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons/plus.png */ \"./src/icons/plus.png\");\n/* harmony import */ var _images_check_icon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/check-icon.png */ \"./src/images/check-icon.png\");\n/* harmony import */ var _logic_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logic.js */ \"./src/modules/logic.js\");\n\n\n\n\n\n\nlet selected = null;\n\nfunction createNav() {\n  const nav = document.querySelector(\"nav\");\n\n  const navDiv = document.createElement(\"div\");\n  navDiv.classList.add(\"nav-div\");\n\n  const icon = document.createElement(\"img\");\n  icon.classList.add(\"icon\");\n  icon.src = _images_check_icon_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\n  icon.alt = \"ToDo Icon\";\n\n  const title = document.createElement(\"h1\");\n  title.classList.add(\"project-title\");\n  title.textContent = \"TODO List\";\n\n  const githubButton = document.createElement(\"a\");\n  githubButton.classList.add(\"github-button\");\n  githubButton.textContent = \"View on Github\";\n  githubButton.href = \"https://github.com/Valex99/todo-list\";\n\n  navDiv.appendChild(icon);\n  navDiv.appendChild(title);\n  navDiv.appendChild(githubButton);\n\n  nav.appendChild(navDiv);\n\n  // FUNCTION CALLS:\n  // When nav is created add default project to projects array\n  (0,_logic_js__WEBPACK_IMPORTED_MODULE_4__.initializeDefaultProject)();\n  // Create header element\n  createProjectHeader();\n}\n\n// Function that creates selected project header\nfunction createProjectHeader() {\n  const content = document.getElementById(\"content\");\n\n  const currentProjectDiv = document.createElement(\"div\");\n  currentProjectDiv.classList.add(\"current-project-div\");\n\n  //   currentProjectDiv.appendChild(currentProjectDivIcons);\n  content.appendChild(currentProjectDiv);\n\n  // First this needs to be called\n  updateProjectHeader();\n  // Then this, otherwise icons are not appended\n  //appendHeaderIcons();\n  // Once header is created, append sidebar to it\n  projectSidebar();\n}\n\n// Update project header -> last added project\nfunction updateProjectHeader() {\n  const projectHeader = document.querySelector(\".current-project-div\");\n  const lastAddedProject = (0,_logic_js__WEBPACK_IMPORTED_MODULE_4__.getLastAddedProject)().name;\n  console.log(lastAddedProject);\n  projectHeader.textContent = lastAddedProject;\n\n  appendHeaderIcons();\n}\n\nfunction appendHeaderIcons() {\n  const currentProjectDivIcons = document.createElement(\"div\");\n  currentProjectDivIcons.classList.add(\"current-project-div-icons\");\n\n  const currentProjectDiv = document.querySelector(\".current-project-div\");\n\n  const bin = document.createElement(\"img\");\n  bin.src = _icons_bin_icon_png__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n  bin.alt = \"Bin Icon\";\n\n  const pencil = document.createElement(\"img\");\n  pencil.src = _icons_pencil_outline_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n  pencil.alt = \"Pencil Icon\";\n\n  currentProjectDivIcons.appendChild(pencil);\n  currentProjectDivIcons.appendChild(bin);\n\n  currentProjectDiv.appendChild(currentProjectDivIcons);\n}\n\nfunction projectSidebar() {\n  const projectSidebarParentDiv = document.createElement(\"div\");\n  projectSidebarParentDiv.classList.add(\"project-sidebar-parent-div\");\n\n  const projectSidebar = document.createElement(\"div\");\n  projectSidebar.classList.add(\"project-sidebar\");\n  projectSidebar.textContent = \"Projects\";\n\n  const plus = document.createElement(\"img\");\n  plus.src = _icons_plus_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n  plus.alt = \"Plus Icon\";\n\n  projectSidebar.appendChild(plus);\n  content.appendChild(projectSidebar);\n  projectSidebarParentDiv.appendChild(projectSidebar);\n  content.appendChild(projectSidebarParentDiv);\n\n  plus.addEventListener(\"click\", () => {\n    displayProjectModal();\n  });\n\n  // Render ALL projects\n  renderNewProject();\n}\n\n// Function to display the project modal\nfunction displayProjectModal() {\n  // Modal overlay\n  const modalOverlay = document.createElement(\"div\");\n  modalOverlay.classList.add(\"modal-overlay\");\n\n  // Modal content\n  const modalContent = document.createElement(\"div\");\n  modalContent.classList.add(\"modal-content\");\n\n  // Title\n  const modalTitle = document.createElement(\"h2\");\n  modalTitle.textContent = \"Project\";\n\n  // Close button\n  const closeButton = document.createElement(\"button\");\n  closeButton.classList.add(\"modal-close\");\n  closeButton.textContent = \"✕\";\n\n  // Input field\n  const inputContainer = document.createElement(\"div\");\n  const inputLabel = document.createElement(\"label\");\n  inputLabel.textContent = \"Name*\";\n  const inputField = document.createElement(\"input\");\n  inputField.type = \"text\";\n  inputField.placeholder = \"Enter project name\";\n\n  inputContainer.appendChild(inputLabel);\n  inputContainer.appendChild(inputField);\n\n  // Submit button\n  const submitButton = document.createElement(\"button\");\n  submitButton.classList.add(\"modal-submit\");\n  submitButton.textContent = \"SUBMIT\";\n\n  // Append children to modal\n  modalContent.appendChild(modalTitle);\n  modalContent.appendChild(closeButton);\n  modalContent.appendChild(inputContainer);\n  modalContent.appendChild(submitButton);\n  modalOverlay.appendChild(modalContent);\n\n  // Add the modal to the body\n  document.body.appendChild(modalOverlay);\n\n  // Close modal logic\n  closeButton.addEventListener(\"click\", () => {\n    document.body.removeChild(modalOverlay);\n  });\n  // Close modal when clicking on the overlay (background)\n  modalOverlay.addEventListener(\"click\", (e) => {\n    if (e.target === modalOverlay) {\n      document.body.removeChild(modalOverlay);\n    }\n  });\n  // Handle submit button (add your logic here)\n  submitButton.addEventListener(\"click\", () => {\n    const projectName = inputField.value.trim();\n    if (projectName) {\n      console.log(\"New project name:\", projectName);\n      // Add new project to projects array\n      (0,_logic_js__WEBPACK_IMPORTED_MODULE_4__.addProject)(projectName);\n      // Then display new project\n      renderNewProject();\n      document.body.removeChild(modalOverlay);\n    } else {\n      alert(\"Project name is required!\");\n    }\n  });\n}\n\n// Rendering new projects\nfunction renderNewProject() {\n  const projectSidebarParent = document.querySelector(\n    \".project-sidebar-parent-div\"\n  );\n\n  const projectDiv = document.createElement(\"div\");\n  const lastAddedProject = (0,_logic_js__WEBPACK_IMPORTED_MODULE_4__.getLastAddedProject)().name;\n\n  // Call function to remove all selected classes BEFORE adding IT\n  removeSelectedClass();\n\n\n  \n  // Must call it!\n  updateProjectHeader()\n\n  projectDiv.textContent = lastAddedProject;\n  projectDiv.classList.add(\"project\");\n  projectDiv.classList.add(\"selected\");\n\n  // Add event listener to each project div\n  projectDiv.addEventListener(\"click\", () => {\n    removeSelectedClass();\n    const currentProjectDiv = document.querySelector(\".current-project-div\");\n\n    projectDiv.classList.add(\"selected\");\n    selected = projectDiv.textContent;\n    console.log(selected);\n    currentProjectDiv.textContent = selected;\n\n    appendHeaderIcons();\n  });\n\n  const taskCounter = document.createElement(\"p\");\n  taskCounter.classList.add(\"task-counter\");\n  \n  // UPDATE THIS WITH FUNCTION CALL LATER\n  taskCounter.textContent = \"0\";\n  projectDiv.appendChild(taskCounter);\n  projectSidebarParent.appendChild(projectDiv);\n}\n\n// Select element with class .selected, if there is any remove it!\nfunction removeSelectedClass() {\n  const selected = document.querySelector(\".selected\");\n  if (selected) {\n    selected.classList.remove(\"selected\");\n  }\n}\n\n// SOlution, add a new div and place preoject-sidebar in it (parent div to project sidebar)\n// Let parent div have display flex direction column and keep direction row to sidebar div\n\n// getLastAddedProject HOLDS THE REFERENCE TO THE LAST ADDED PROJECT, CHECK CONSOLE\n// FIGURE OUT HOW TO HIGHLIGHT IT EACH TIME A PROJECT IS ADDED!\n\n// EXPLAIN CODE TO YOURSELF - WHAT CALLS WHAT!\n\n// It should work like this...\n// Last project in the projects array is always selected (index - 1)\n// If user clicks on any of of the projects, call function to override selected project\n// first it clears all projects and then it selects that project\n\n//# sourceURL=webpack://todo-list/./src/modules/UI.js?");

/***/ }),

/***/ "./src/modules/logic.js":
/*!******************************!*\
  !*** ./src/modules/logic.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addProject: () => (/* binding */ addProject),\n/* harmony export */   defaultProject: () => (/* binding */ defaultProject),\n/* harmony export */   getAllProjects: () => (/* binding */ getAllProjects),\n/* harmony export */   getLastAddedProject: () => (/* binding */ getLastAddedProject),\n/* harmony export */   initializeDefaultProject: () => (/* binding */ initializeDefaultProject)\n/* harmony export */ });\nconst projects = [];\n\nconst defaultProject = \"Default Project\";\n\nfunction Project(name) {\n  return { name, tasks: [] }; // Each project has tasks\n}\n\nfunction addProject(name) {\n  const newProject = Project(name);\n  projects.push(newProject);\n  return newProject;\n}\n\nfunction getAllProjects() {\n  console.log(\"Projects Array: \", projects);\n  return projects;\n}\n\n// function removeProject(name) {\n//   const index = projects.findIndex((project) => project.name === name);\n//   if (index !== -1) {\n//     projects.splice(index, 1);\n//   }\n// }\n\nfunction initializeDefaultProject() {\n  const allProjects = getAllProjects();\n  if (allProjects.length === 0) {\n    addProject(\"Default Project\");\n    console.log(\"1 Default project added: \", getAllProjects());\n  }\n}\n\n// Function to track last added project\nfunction getLastAddedProject() {\n  console.log(\"2\",projects.length > 0 ? projects[projects.length - 1] : null);\n  return projects.length > 0 ? projects[projects.length - 1] : null;\n}\n\n\n\n// Figure out how can you import all of those three things to UI module.\n\n// WHAT SHOULD HAPPEN WHEN A CERTAIN PROJECT IS CLICKED?\n// 1) Selected element should get highlighted\n// DONE //  Div below nav bar should get name of clicked project\n// Edit and Delete icons should work for that specific project\n// Bin icon should NOT work if this is the ONLY project in the projects arr\n\n// Make sure the last created project is always selected\n\n\n//# sourceURL=webpack://todo-list/./src/modules/logic.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;