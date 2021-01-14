/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/styles.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/styles.scss ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body,\nhtml {\n  width: auto; }\n\nbody {\n  box-sizing: border-box;\n  font-family: 'Open Sans', sans-serif;\n  margin: auto;\n  color: #000000; }\n\n.main-header {\n  background-color: #f6adc6;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1%;\n  height: 15vh;\n  width: 100vw; }\n\n.error-message {\n  margin: 0px; }\n\n.button-container {\n  display: flex;\n  align-items: center;\n  height: 100%;\n  width: 50%;\n  justify-content: space-evenly;\n  padding-top: 5%; }\n\n.button-wrapper {\n  height: 100%;\n  width: 30%;\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n\n.nav-button {\n  background-color: #f6adc6;\n  font-size: 1.3em;\n  margin: 1%;\n  display: flex; }\n  .nav-button:hover {\n    background-color: #cff2da; }\n  .nav-button:active {\n    background-color: #C3C2C6; }\n\nh1 {\n  color: #FFFFFF;\n  border-right: 2px solid #000;\n  font-size: 255%;\n  margin-top: 0;\n  margin-bottom: 0;\n  width: 30%; }\n\n.user-info {\n  font-size: 1.8em;\n  text-align: center;\n  width: 40%; }\n\n.search-bar {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  margin-top: 2vh; }\n\n.search-button {\n  border: 1px solid #000;\n  width: 20%;\n  height: 8vh; }\n\n.search-image {\n  height: 25px;\n  width: 25px; }\n  .search-image:hover {\n    background-color: #cff2da; }\n  .search-image:active {\n    background-color: #C3C2C6; }\n\n.search-input {\n  height: 7vh;\n  width: 30%; }\n\nmain {\n  background-color: #FFFFFF;\n  height: 100%;\n  width: 100%; }\n\n.card-button {\n  border: 1px solid #FFFFFF;\n  height: 29px;\n  margin: 3px; }\n  .card-button:hover {\n    background-color: #cff2da; }\n  .card-button:active {\n    background-color: #C3C2C6; }\n\n.add {\n  width: 5vh; }\n\n.hidden {\n  display: none; }\n\n.favorite {\n  background-color: #f6adc6;\n  background-image: url(https://image.flaticon.com/icons/svg/149/149222.svg);\n  background-repeat: no-repeat;\n  background-position: center;\n  width: 13%; }\n\n.all-cards {\n  display: grid;\n  grid-gap: 1% 3%;\n  grid-template-columns: repeat(4, 1fr);\n  padding: 30px 0 30px 30px;\n  margin: 5%; }\n\nimg {\n  cursor: pointer; }\n\n.card {\n  background-color: #FFFFFF;\n  border: 3px solid #000;\n  width: 100%; }\n\n.card-header {\n  border-bottom: 1px solid #000;\n  display: flex;\n  justify-content: space-between; }\n\n.all {\n  grid-gap: 0px;\n  grid-template-columns: repeat(1, 1fr); }\n\n.all-recipe-info {\n  display: flex;\n  background-color: #000000;\n  flex-direction: column;\n  color: #FFFFFF;\n  align-items: center; }\n\nol {\n  color: #f6adc6;\n  font-size: 2.2em;\n  width: 100%; }\n\n.recipe-container {\n  padding: 6%;\n  padding-top: 0; }\n\n.recipe-name {\n  display: block;\n  font-size: 1.5em;\n  text-align: center; }\n\n.card-picture {\n  border: 1px solid #000;\n  height: 200px;\n  margin: 10px 3% 8px 2.6%;\n  width: 94%; }\n  .card-picture:active {\n    border: 2px solid #FFFFFF; }\n  .card-picture:hover {\n    opacity: 0.5;\n    border: 2px solid #cff2da; }\n\n.favorite-active {\n  background-image: url(https://image.flaticon.com/icons/svg/148/148841.svg);\n  background-repeat: no-repeat; }\n\n.no-results > article {\n  padding: 2rem;\n  text-align: center;\n  font-size: 1.5rem; }\n\n@media screen and (max-width: 480px) {\n  .main-header {\n    height: 12vh;\n    right: auto;\n    flex-flow: row wrap;\n    justify-content: center; }\n  .main {\n    width: auto; }\n  .all-cards {\n    grid-gap: 15px;\n    grid-template-columns: repeat(2, 1fr);\n    padding: 15px 15px 15px 15px;\n    padding-top: 5%; }\n  .card {\n    width: 35vw;\n    height: 35vh;\n    margin: auto;\n    display: flex;\n    flex-direction: column; }\n  .nav-button {\n    font-size: .7em;\n    width: 28vw;\n    height: 6vh;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center; }\n  h1 {\n    color: #FFFFFF;\n    border-right: 2px solid #000;\n    font-size: 2.1em;\n    width: 25%;\n    padding-right: 3vw; }\n  .user-info {\n    width: 30%; }\n  .card-picture {\n    border: 1px solid #000;\n    height: 40%;\n    margin: 10px 3% 8px 2.6%;\n    width: 74%;\n    align-self: center;\n    border: 2px solid #FFFFFF; }\n  .recipe-name {\n    display: block;\n    font-size: 4vw;\n    text-align: center; }\n  .add {\n    width: 3vh; }\n  .favorite {\n    width: 4vh; }\n  .search-bar {\n    padding-top: 2vw;\n    align-items: center;\n    height: 6vh;\n    margin-top: 13vh; }\n  .search-button {\n    border: 1px solid #000;\n    width: 6vh;\n    height: 6vh; }\n  .search-input {\n    height: 5vh; }\n  .user-info {\n    font-size: 1.2em;\n    width: 68%; }\n  .button-container {\n    display: flex;\n    width: 75%;\n    align-self: center; } }\n", "",{"version":3,"sources":["webpack://./src/css/styles.scss","webpack://./src/css/_variables.scss"],"names":[],"mappings":"AACA;;EAEI,WAAW,EAAA;;AAGf;EACI,sBAAsB;EACtB,oCAAoC;EACpC,YAAY;EACZ,cCNmB,EAAA;;ADSvB;EACI,yBCdiB;EDejB,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,YAAY,EAAA;;AAGhB;EACI,WAAW,EAAA;;AAGf;EACI,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,UAAU;EACV,6BAA6B;EAC7B,eAAe,EAAA;;AAGnB;EACI,YAAY;EACZ,UAAU;EACV,aAAa;EACb,sBAAsB;EACtB,mBAAmB,EAAA;;AAGvB;EACI,yBC9CiB;ED+CjB,gBAAgB;EAChB,UAAU;EACV,aAAa,EAAA;EAJjB;IAMQ,yBClDa,EAAA;ED4CrB;IAUQ,yBCrDc,EAAA;;AD0DtB;EACI,cC1DsB;ED2DtB,4BAA4B;EAC5B,eAAe;EACf,aAAa;EACb,gBAAgB;EAChB,UAAU,EAAA;;AAGd;EACI,gBAAgB;EAChB,kBAAkB;EAClB,UACJ,EAAA;;AAEA;EACI,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,eAAe,EAAA;;AAGnB;EACI,sBAAsB;EACtB,UAAU;EACV,WAAW,EAAA;;AAGf;EACI,YAAY;EACZ,WAAW,EAAA;EAFf;IAIQ,yBC5Fa,EAAA;EDwFrB;IAQQ,yBC/Fc,EAAA;;ADoGtB;EACI,WAAW;EACX,UAAU,EAAA;;AAGd;EACI,yBCtGe;EDuGf,YAAY;EACZ,WAAW,EAAA;;AAGf;EACI,yBC3GiB;ED4GjB,YAAY;EACZ,WAAW,EAAA;EAHf;IAKQ,yBCrHa,EAAA;EDgHrB;IASQ,yBCxHc,EAAA;;AD6HtB;EACI,UAAU,EAAA;;AAGd;EACI,aAAa,EAAA;;AAGjB;EACI,yBCxIiB;EDyIjB,0EAA0E;EAC1E,4BAA4B;EAC5B,2BAA2B;EAC3B,UAAU,EAAA;;AAGd;EACI,aAAa;EACb,eAAe;EACf,qCAAqC;EACrC,yBAAyB;EACzB,UAAU,EAAA;;AAGd;EACI,eAAe,EAAA;;AAGnB;EACI,yBCvJe;EDwJf,sBAAsB;EACtB,WAAW,EAAA;;AAGf;EAEI,6BAA6B;EAC7B,aAAa;EACb,8BAA8B,EAAA;;AAGlC;EACI,aAAa;EACb,qCAAqC,EAAA;;AAGzC;EACI,aAAa;EACb,yBC3KmB;ED6KnB,sBAAsB;EACtB,cC7Ke;ED8Kf,mBAAmB,EAAA;;AAGvB;EACI,cCvLiB;EDwLjB,gBAAgB;EAChB,WAAW,EAAA;;AAGf;EACI,WAAW;EACX,cAAc,EAAA;;AAGlB;EACI,cAAc;EACd,gBAAgB;EAChB,kBAAkB,EAAA;;AAGtB;EACI,sBAAsB;EACtB,aAAa;EACb,wBAAwB;EACxB,UAAU,EAAA;EAJd;IAMQ,yBCtMa,EAAA;EDgMrB;IASQ,YAAY;IACZ,yBChNa,EAAA;;ADoNrB;EACI,0EAA0E;EAC1E,4BAA4B,EAAA;;AAGhC;EACE,aAAa;EACb,kBAAkB;EAClB,iBAAiB,EAAA;;AAGnB;EACI;IACI,YAAY;IACZ,WAAW;IACX,mBAAmB;IACnB,uBAAuB,EAAA;EAE3B;IACI,WACJ,EAAA;EACA;IACI,cAAc;IACd,qCAAqC;IACrC,4BAA4B;IAC5B,eAAe,EAAA;EAEnB;IACI,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,sBAAsB,EAAA;EAE1B;IACI,eAAe;IACf,WAAW;IACX,WAAW;IACX,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB,EAAA;EAEvB;IACI,cC7PkB;ID8PlB,4BAA4B;IAC5B,gBAAgB;IAChB,UAAU;IACV,kBAAkB,EAAA;EAEtB;IACI,UAAU,EAAA;EAEd;IACI,sBAAsB;IACtB,WAAW;IACX,wBAAwB;IACxB,UAAU;IACV,kBAAkB;IAClB,yBCxQa,EAAA;ED0QjB;IACI,cAAc;IACd,cAAc;IACd,kBAAkB,EAAA;EAEtB;IACI,UAAU,EAAA;EAEd;IACI,UAAU,EAAA;EAEd;IACI,gBAAgB;IAChB,mBAAmB;IACnB,WAAW;IACX,gBAAgB,EAAA;EAEpB;IACI,sBAAsB;IACtB,UAAU;IACV,WAAW,EAAA;EAEf;IACI,WAAW,EAAA;EAEf;IACI,gBAAgB;IAEhB,UACJ,EAAA;EACA;IACI,aAAa;IACb,UAAU;IACV,kBAAkB,EAAA,EACrB","sourcesContent":["@import 'variables';\nbody,\nhtml {\n    width: auto;\n}\n\nbody {\n    box-sizing: border-box;\n    font-family: 'Open Sans', sans-serif;\n    margin: auto;\n    color: $mainTextColor;\n}\n\n.main-header {\n    background-color: $headerColor;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    padding: 1%;\n    height: 15vh;\n    width: 100vw;\n}\n\n.error-message {\n    margin: 0px;\n}\n\n.button-container {\n    display: flex;\n    align-items: center;\n    height: 100%;\n    width: 50%;\n    justify-content: space-evenly;\n    padding-top: 5%;\n}\n\n.button-wrapper {\n    height: 100%;\n    width: 30%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.nav-button {\n    background-color: $headerColor;\n    font-size: 1.3em;\n    margin: 1%;\n    display: flex;\n    &:hover {\n        background-color: $buttonHover;\n    }\n    ;\n    &:active {\n        background-color: $buttonActive;\n    }\n    ;\n}\n\nh1 {\n    color: $headingTextColor;\n    border-right: 2px solid #000;\n    font-size: 255%;\n    margin-top: 0;\n    margin-bottom: 0;\n    width: 30%;\n}\n\n.user-info {\n    font-size: 1.8em;\n    text-align: center;\n    width: 40%\n}\n\n.search-bar {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    margin-top: 2vh;\n}\n\n.search-button {\n    border: 1px solid #000;\n    width: 20%;\n    height: 8vh;\n}\n\n.search-image {\n    height: 25px;\n    width: 25px;\n    &:hover {\n        background-color: $buttonHover;\n    }\n    ;\n    &:active {\n        background-color: $buttonActive;\n    }\n    ;\n}\n\n.search-input {\n    height: 7vh;\n    width: 30%;\n}\n\nmain {\n    background-color: $mainColor;\n    height: 100%;\n    width: 100%;\n}\n\n.card-button {\n    border: 1px solid $borderColor;\n    height: 29px;\n    margin: 3px;\n    &:hover {\n        background-color: $buttonHover;\n    }\n    ;\n    &:active {\n        background-color: $buttonActive;\n    }\n    ;\n}\n\n.add {\n    width: 5vh;\n}\n\n.hidden {\n    display: none;\n}\n\n.favorite {\n    background-color: $headerColor;\n    background-image: url(https://image.flaticon.com/icons/svg/149/149222.svg);\n    background-repeat: no-repeat;\n    background-position: center;\n    width: 13%;\n}\n\n.all-cards {\n    display: grid;\n    grid-gap: 1% 3%;\n    grid-template-columns: repeat(4, 1fr);\n    padding: 30px 0 30px 30px;\n    margin: 5%;\n}\n\nimg {\n    cursor: pointer;\n}\n\n.card {\n    background-color: $cardColor;\n    border: 3px solid #000;\n    width: 100%;\n}\n\n.card-header {\n    // background-color: #EBF5EE;\n    border-bottom: 1px solid #000;\n    display: flex;\n    justify-content: space-between;\n}\n\n.all {\n    grid-gap: 0px;\n    grid-template-columns: repeat(1, 1fr);\n}\n\n.all-recipe-info {\n    display: flex;\n    background-color: $mainTextColor;\n    // font-size: 220%;\n    flex-direction: column;\n    color: $cardColor;\n    align-items: center;\n}\n\nol {\n    color: $headerColor;\n    font-size: 2.2em;\n    width: 100%;\n}\n\n.recipe-container {\n    padding: 6%;\n    padding-top: 0;\n}\n\n.recipe-name {\n    display: block;\n    font-size: 1.5em;\n    text-align: center;\n}\n\n.card-picture {\n    border: 1px solid #000;\n    height: 200px;\n    margin: 10px 3% 8px 2.6%;\n    width: 94%;\n    &:active {\n        border: 2px solid $borderColor;\n    }\n    &:hover {\n        opacity: 0.5;\n        border: 2px solid $buttonHover;\n    }\n}\n\n.favorite-active {\n    background-image: url(https://image.flaticon.com/icons/svg/148/148841.svg);\n    background-repeat: no-repeat;\n}\n\n.no-results>article {\n  padding: 2rem;\n  text-align: center;\n  font-size: 1.5rem;\n}\n\n@media screen and (max-width: 480px) {\n    .main-header {\n        height: 12vh;\n        right: auto;\n        flex-flow: row wrap;\n        justify-content: center;\n    }\n    .main {\n        width: auto\n    }\n    .all-cards {\n        grid-gap: 15px;\n        grid-template-columns: repeat(2, 1fr);\n        padding: 15px 15px 15px 15px;\n        padding-top: 5%;\n    }\n    .card {\n        width: 35vw;\n        height: 35vh;\n        margin: auto;\n        display: flex;\n        flex-direction: column;\n    }\n    .nav-button {\n        font-size: .7em;\n        width: 28vw;\n        height: 6vh;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n    }\n    h1 {\n        color: $headingTextColor;\n        border-right: 2px solid #000;\n        font-size: 2.1em;\n        width: 25%;\n        padding-right: 3vw;\n    }\n    .user-info {\n        width: 30%;\n    }\n    .card-picture {\n        border: 1px solid #000;\n        height: 40%;\n        margin: 10px 3% 8px 2.6%;\n        width: 74%;\n        align-self: center;\n        border: 2px solid $borderColor;\n    }\n    .recipe-name {\n        display: block;\n        font-size: 4vw;\n        text-align: center;\n    }\n    .add {\n        width: 3vh;\n    }\n    .favorite {\n        width: 4vh;\n    }\n    .search-bar {\n        padding-top: 2vw;\n        align-items: center;\n        height: 6vh;\n        margin-top: 13vh;\n    }\n    .search-button {\n        border: 1px solid #000;\n        width: 6vh;\n        height: 6vh;\n    }\n    .search-input {\n        height: 5vh;\n    }\n    .user-info {\n        font-size: 1.2em;\n        // text-align: center;\n        width: 68%\n    }\n    .button-container {\n        display: flex;\n        width: 75%;\n        align-self: center;\n    }\n}\n","$headerColor: #f6adc6;\n$buttonHover: #cff2da;\n$buttonActive: #C3C2C6;\n$headingTextColor: #FFFFFF;\n$mainTextColor: #000000;\n$cardColor: #FFFFFF;\n$mainColor: #FFFFFF;\n$borderColor: #FFFFFF;\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/cookbook.js":
/*!*************************!*\
  !*** ./src/cookbook.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Cookbook {
  constructor(data) {
    this.recipes = data;
  }

  addIngredientNames(ingredientsData) {
    this.recipes.forEach(recipe => {
      recipe.ingredients.forEach(ingredient => {
        let ingredientObject = ingredientsData.find(ingredientData => ingredient.id === ingredientData.id)
        if (ingredientObject.id === ingredient.id) {
          ingredient.name = ingredientObject.name;
        }
      })
    })
  }

  findRecipe(searchText) {
    if (this.findAllRecipes(searchText)) {
      return this.checkForDuplicates(this.findAllRecipes(searchText));
    } else if (this.findRecipeByName(searchText)) {
      return this.findRecipeByName(searchText)
    } else if (this.findRecipeByTag(searchText)) {
      return this.findRecipeByTag(searchText);
    } else if (this.findRecipeByIngredient(searchText)) {
      return this.findRecipeByIngredient(searchText);
    }
  }

  findRecipeByName(searchText) {
    const byNames = this.recipes.filter(recipe => recipe.name.includes(this.capitalize(searchText)))
    if (byNames.length) {
      return byNames;
    }
  }

  findRecipeByTag(searchText) {
    const byTag = this.recipes.filter(recipe => recipe.tags.find(tag => tag.includes(searchText.toLowerCase())));
    if (byTag.length) {
      return byTag;
    }
  }

  findRecipeByIngredient(searchText) {
    return this.recipes.filter(recipe => recipe.ingredients.find(ingredient => {
      if (ingredient.name.includes(searchText.toLowerCase())) {
        return recipe;
      }
    }))
  }

  findAllRecipes(searchText) {
    if (this.findRecipeByName(searchText) && this.findRecipeByTag(searchText) && this.findRecipeByIngredient(searchText)) {
      return this.findRecipeByName(searchText).concat(this.findRecipeByTag(searchText), this.findRecipeByIngredient(searchText));
    } else if (this.findRecipeByName(searchText) && this.findRecipeByTag(searchText)) {
      return this.findRecipeByName(searchText).concat(this.findRecipeByTag(searchText));
    } else if (this.findRecipeByTag(searchText) && this.findRecipeByIngredient(searchText)) {
      return this.findRecipeByTag(searchText).concat(this.findRecipeByIngredient(searchText));
    } else if (this.findRecipeByName(searchText) && this.findRecipeByIngredient(searchText)) {
      return this.findRecipeByName(searchText).concat(this.findRecipeByIngredient(searchText));
    }
  }

  checkForDuplicates(filteredRecipes) {
    return filteredRecipes.filter((recipe, index) => filteredRecipes.indexOf(recipe) === index)
  }

  capitalize(searchText) {
    return searchText.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Cookbook);

/***/ }),

/***/ "./src/css/styles.scss":
/*!*****************************!*\
  !*** ./src/css/styles.scss ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/styles.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/domUpdates.js":
/*!***************************!*\
  !*** ./src/domUpdates.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let domUpdates = {

  displayCards(recipesList, cardArea) {
    cardArea.classList.remove('all')
    cardArea.innerHTML = '';
    if (Array.isArray(recipesList)) {
      recipesList.forEach(recipe => {
        cardArea.insertAdjacentHTML('afterbegin', `<div id='${recipe.id}'
       class='card'>
       <header id='${recipe.id}' class='card-header'>
       <label for='add-button' class='hidden'>Click to add recipe</label>
       <button id='${recipe.id}'  class='add-button card-button' aria-label='add to my recipes button'>
       <img id='${recipe.id}' class='add'
       src='https://image.flaticon.com/icons/svg/32/32339.svg' alt='Add to
       recipes to cook'></button>
       <label for='favorite-button' class='hidden'>Click to favorite recipe
       </label>
       <button id='${recipe.id}'class='favorite favorite${recipe.id} card-button' aria-label='add to my favorites button'>
       </button></header>
       <img id='${recipe.id}' tabindex='0' class='card-picture'
       src='${recipe.image}' alt='Food from recipe'>
       <span id='${recipe.id}' class='recipe-name'>${recipe.name}</span>
       </div>`)
      });
    } else {
      const recipe = recipesList;

      cardArea.innerHTML = `<div id='${recipe.id}'
      class='card'>
      <header id='${recipe.id}' class='card-header'>
      <label for='add-button' class='hidden'>Click to add recipe</label>
      <button id='${recipe.id}'  class='add-button card-button' aria-label='add to my recipes button'>
      <img id='${recipe.id}' class='add'
      src='https://image.flaticon.com/icons/svg/32/ 32339.svg' alt='Add to
      recipes to cook'></button>
      <label for='favorite-button' class='hidden'>Click to favorite recipe
      </label>
      <button id='${recipe.id}'class='favorite favorite${recipe.id} card-button' aria-label='add to my favorites button'>
      </button></header>
      <img id='${recipe.id}' tabindex='0' class='card- picture'
      src='${recipe.image}' alt='Food from recipe'>
      <span id='${recipe.id}' class='recipe-name'>${recipe.name}</span>
      </div>`
    }
  },

  displayNoResults(cardArea) {
    cardArea.classList.remove('all-cards')
    cardArea.classList.add('no-results')
    cardArea.innerHTML = `<article>Sorry, we couldn't find anything matching your search criteria. Try something else!</article>`
  },

  greetUser(user) {
    const userName = document.querySelector('.user-info');
    userName.innerText = `Welcome, ${user.name}.`;
  },

  connectWithClassList(method, className, event, element) {
    if (method === 'add' && element) {
      element.classList.add(className);
    } else if (method === 'remove' && element) {
      element.classList.remove(className);
    } else if (method === 'add' && element === undefined) {
      event.target.classList.add(className);
    } else if (method === 'remove' && element === undefined) {
      event.target.classList.remove(className);
    } else if (method === 'contains') {
      return event.target.classList.contains(className);
    }
  },


  populateRecipeCard(cardArea, recipeObject, costInDollars) {
   
    cardArea.innerHTML = `<h2>${recipeObject.name}</h2>
    <p class='all-recipe-info'>
    It will cost: <span class='cost recipe-info'>
    $${costInDollars}</span><br><br>
    You will need:<span class='ingredients recipe-info'></span>
    Instructions:<ol><span class='instructions recipe-info'>
    </span></ol>
    </p>`;


    const ingredientsSpan = document.querySelector('.ingredients');
    const instructionsSpan = document.querySelector('.instructions');

    recipeObject.ingredients.forEach(ingredient => {
      ingredientsSpan.insertAdjacentHTML('afterbegin', `<ul><li>
      ${ingredient.quantity.amount.toFixed(2)} ${ingredient.quantity.unit}
      ${ingredient.name} </li></ul>
      `)

    });

    recipeObject.instructions.forEach(instruction => {
      instructionsSpan.insertAdjacentHTML('beforebegin', `<li>
      ${instruction.instruction}</li>
      `)
    });

  }
}
/* harmony default export */ __webpack_exports__["default"] = (domUpdates);

/***/ }),

/***/ "./src/recipe.js":
/*!***********************!*\
  !*** ./src/recipe.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Recipe {
  constructor(recipe, ingredientsData) {
    this.name = recipe.name;
    this.id = recipe.id;
    this.ingredients = recipe.ingredients;
    this.instructions = recipe.instructions;
    this.tags = recipe.tags;
    this.ingredientsData = ingredientsData;
  }

  calculateCost() {
    let costCounter = 0;
    this.ingredients.forEach(ingredient => {
      this.ingredientsData.find(specificIngredient => {
        if (specificIngredient.id === ingredient.id) {
          costCounter += (Number(specificIngredient.estimatedCostInCents) *
          Number(ingredient.quantity.amount))
        }
      })
    });
    return costCounter;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Recipe);


/***/ }),

/***/ "./src/scripts.js":
/*!************************!*\
  !*** ./src/scripts.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/styles.scss */ "./src/css/styles.scss");
/* harmony import */ var _recipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipe */ "./src/recipe.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./src/user.js");
/* harmony import */ var _cookbook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cookbook */ "./src/cookbook.js");
/* harmony import */ var _domUpdates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./domUpdates */ "./src/domUpdates.js");







const homeButton = document.querySelector('.home');
const viewFavoritesButton = document.querySelector('.view-favorites');
const viewRecipesToCookButton = document.querySelector('.view-to-cook');
const searchButton = document.querySelector('#search-button');
const cardArea = document.querySelector('.all-cards');

let user, users, cookbook, ingredientData;

window.onload = loadData();

homeButton.addEventListener('click', conditionalsCardButtons);
viewFavoritesButton.addEventListener('click', viewFavorites);
viewRecipesToCookButton.addEventListener('click', viewRecipesToCook);
searchButton.addEventListener('click', displaySearchRecipes);
cardArea.addEventListener('click', conditionalsCardButtons);

//API calls
function loadData() {
  getIngredientData();
  getRecipeData();
  getUserData();
}

function getUserData() {
  fetch('http://localhost:3001/api/v1/users')
    .then((response) => response.json())
    .then(userData => users = userData)
    .then(() => onStartup())
}

function getIngredientData() {
  fetch('http://localhost:3001/api/v1/ingredients')
    .then(response => response.json())
    .then(data => {
      ingredientData = data
      getRecipeData()
    })
}

function getRecipeData() {
  fetch('http://localhost:3001/api/v1/recipes')
    .then((response) => response.json())
    .then((recipeData) => {
      cookbook = new _cookbook__WEBPACK_IMPORTED_MODULE_3__["default"](recipeData)
      cookbook.addIngredientNames(ingredientData)
      _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].displayCards(cookbook.recipes, cardArea)
    })
}

function onStartup() {
  const userId = (Math.floor(Math.random() * 49) + 1);
  const newUser = users.find(user => user.id === Number(userId));
  user = new _user__WEBPACK_IMPORTED_MODULE_2__["default"](userId, newUser.name, newUser.pantry);
  _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].greetUser(user);
  getFavorites();
  getRecipesToCook();
}

function viewFavorites() {
  if (user.favoriteRecipes.length) {
    _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].connectWithClassList('add', 'hidden', event, viewFavoritesButton);
    _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].displayCards(user.favoriteRecipes, cardArea);
    getFavorites();
  }
}

function viewRecipesToCook() {
  if (user.recipesToCook.length) {
    _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].connectWithClassList('add', 'hidden', event, viewRecipesToCookButton);
    _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].displayCards(user.recipesToCook, cardArea);
    getRecipesToCook();
  }
}

function favoriteCard(event) {
  const specificRecipe = cookbook.recipes.find(recipe => recipe.id === Number(event.target.id));

  if (!_domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].connectWithClassList('contains', 'favorite-active', event)) {
    _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].connectWithClassList('add', 'favorite-active', event);
    user.addToFavorites(specificRecipe, 'favoriteRecipes');
  } else if (_domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].connectWithClassList('contains', 'favorite-active', event)) {
    _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].connectWithClassList('remove', 'favorite-active', event);
    user.removeFromFavorites(specificRecipe, 'favoriteRecipes');
    _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].displayCards(user.favoriteRecipes, cardArea);
    getFavorites();
  }
}

function addCardToCookList(event) {
  const specificRecipe = cookbook.recipes.find(recipe => recipe.id === Number(event.target.id))

  if (!_domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].connectWithClassList('contains', 'cook-list-active', event)) {
    _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].connectWithClassList('add', 'cook-list-active', event);
    user.addToRecipesToCook(specificRecipe, 'recipesToCook');
  } else if (_domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].connectWithClassList('contains', 'cook-list-active', event)) {
    _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].connectWithClassList('remove', 'cook-list-active', event);
    user.removeFromRecipesToCook(specificRecipe, 'recipesToCook');
    _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].displayCards(user.recipesToCook, cardArea);
    getRecipesToCook();
  }
}

function conditionalsCardButtons(event) {
  if (_domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].connectWithClassList('contains', 'favorite', event)) {
    favoriteCard(event);
  } else if (_domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].connectWithClassList('contains', 'add-button', event) || _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].connectWithClassList('contains', 'add', event)) {
    addCardToCookList(event);
  } else if (_domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].connectWithClassList('contains', 'card-picture', event)) {
    displayDirections(event);
  } else if (_domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].connectWithClassList('contains', 'home', event)) {
    _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].connectWithClassList('remove', 'hidden', event, viewFavoritesButton);
    _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].displayCards(cookbook.recipes, cardArea);
    getFavorites();
  }
}

function displayDirections(event) {
  _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].connectWithClassList('remove', 'hidden', event, viewFavoritesButton);
  const newRecipeInfo = cookbook.recipes.find(recipe => recipe.id === Number(event.target.id));
  const recipeObject = new _recipe__WEBPACK_IMPORTED_MODULE_1__["default"](newRecipeInfo, ingredientData);
  const cost = recipeObject.calculateCost();
  const dollarCost = (cost / 100).toFixed(2);
  _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].connectWithClassList('add', 'all', event, cardArea);
  _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].populateRecipeCard(cardArea, recipeObject, dollarCost, ingredientData);
}

function getFavorites() {
  if (user.favoriteRecipes.length) {
    user.favoriteRecipes.forEach(recipe => {
      const recipeID = document.querySelector(`.favorite${recipe.id}`);
      _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].connectWithClassList('add', 'favorite-active', event, recipeID);
    })
  }
}

function getRecipesToCook() {
  if (user.recipesToCook.length) {
    user.recipesToCook.forEach(recipe => {
      const recipeID = document.querySelector(`.recipe${recipe.id}`);
      _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].connectWithClassList('add', 'cook-list-active', event, recipeID);
    })
  }
}

function displaySearchRecipes(event) {
  event.preventDefault();
  const searchInput = document.querySelector('#search-input');
  const filteredRecipes = cookbook.findRecipe(searchInput.value, ingredientData);
  if (filteredRecipes.length) {
    _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].displayCards(filteredRecipes, cardArea);
  } else {
    _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].displayNoResults(cardArea);
  }
}

/***/ }),

/***/ "./src/user.js":
/*!*********************!*\
  !*** ./src/user.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class User {
    constructor(id, name, pantry) {
        this.id = id;
        this.name = name;
        this.pantry = pantry;
        this.favoriteRecipes = [];
        this.recipesToCook = [];

    }

    addToFavorites(recipe) {
        if (!this.favoriteRecipes.includes(recipe)) {
            this.favoriteRecipes.push(recipe)
        }
    }

    addToRecipesToCook(recipe) {
        if (!this.recipesToCook.includes(recipe)) {
            this.recipesToCook.push(recipe)
        }
    }

    removeFromFavorites(recipe) {
        const i = this.favoriteRecipes.indexOf(recipe);
        this.favoriteRecipes.splice(i, 1)
    }

    removeFromRecipesToCook(recipe) {
        const i = this.recipesToCook.indexOf(recipe);
        this.recipesToCook.splice(i, 1)
    }

    filterFavorites(tag) {
        return this.favoriteRecipes.filter(recipe => recipe.tags.includes(tag));
    }

    filterRecipeToCooks(tag) {
        return this.recipesToCook.filter(recipe => recipe.tags.includes(tag));
    }

    findFavorites(strgToSrch) {
        return this.favoriteRecipes.filter(recipe =>
            recipe.name.includes(strgToSrch) ||
            recipe.ingredients.find(ingredient => ingredient.name.includes(strgToSrch))
        );
    }

    findRecipesToCook(strgToSrch) {
        return this.recipesToCook.filter(recipe =>
            recipe.name.includes(strgToSrch) || recipe.ingredients.find(ingredient => ingredient.name.includes(strgToSrch))
        )
    }

    checkPantry(ingredientsToFind) {

        let result

        let pantryNameList = []

        this.pantry.forEach(pantryItem => pantryNameList.push(pantryItem.id))

        if (ingredientsToFind.every(ingredient => pantryNameList.includes(ingredient.id))) {
            result = 'You have the ingredients!'
        } else {
            result = ingredientsToFind.reduce((acc, ingredient) => {
                if (!ingredientsToFind.every(ingredient => pantryNameList.includes(ingredient.id))) {
                    acc[ingredient.name] = ingredient.quantity.amount
                }
                return acc
            }, {})
        }
        return result
    }
}


/* harmony default export */ __webpack_exports__["default"] = (User);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29va2Jvb2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zdHlsZXMuc2Nzcz83YjJmIiwid2VicGFjazovLy8uL3NyYy9kb21VcGRhdGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWNpcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwy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QUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsSUFBSTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7O0FBR2UsbUVBQUksRSIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3NjcmlwdHMuanNcIik7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHksXFxuaHRtbCB7XFxuICB3aWR0aDogYXV0bzsgfVxcblxcbmJvZHkge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGNvbG9yOiAjMDAwMDAwOyB9XFxuXFxuLm1haW4taGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmFkYzY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxJTtcXG4gIGhlaWdodDogMTV2aDtcXG4gIHdpZHRoOiAxMDB2dzsgfVxcblxcbi5lcnJvci1tZXNzYWdlIHtcXG4gIG1hcmdpbjogMHB4OyB9XFxuXFxuLmJ1dHRvbi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogNTAlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBwYWRkaW5nLXRvcDogNSU7IH1cXG5cXG4uYnV0dG9uLXdyYXBwZXIge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDMwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcblxcbi5uYXYtYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmFkYzY7XFxuICBmb250LXNpemU6IDEuM2VtO1xcbiAgbWFyZ2luOiAxJTtcXG4gIGRpc3BsYXk6IGZsZXg7IH1cXG4gIC5uYXYtYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NmZjJkYTsgfVxcbiAgLm5hdi1idXR0b246YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0MzQzJDNjsgfVxcblxcbmgxIHtcXG4gIGNvbG9yOiAjRkZGRkZGO1xcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzAwMDtcXG4gIGZvbnQtc2l6ZTogMjU1JTtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgd2lkdGg6IDMwJTsgfVxcblxcbi51c2VyLWluZm8ge1xcbiAgZm9udC1zaXplOiAxLjhlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiA0MCU7IH1cXG5cXG4uc2VhcmNoLWJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tdG9wOiAydmg7IH1cXG5cXG4uc2VhcmNoLWJ1dHRvbiB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcbiAgd2lkdGg6IDIwJTtcXG4gIGhlaWdodDogOHZoOyB9XFxuXFxuLnNlYXJjaC1pbWFnZSB7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICB3aWR0aDogMjVweDsgfVxcbiAgLnNlYXJjaC1pbWFnZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZmYyZGE7IH1cXG4gIC5zZWFyY2gtaW1hZ2U6YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0MzQzJDNjsgfVxcblxcbi5zZWFyY2gtaW5wdXQge1xcbiAgaGVpZ2h0OiA3dmg7XFxuICB3aWR0aDogMzAlOyB9XFxuXFxubWFpbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4uY2FyZC1idXR0b24ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI0ZGRkZGRjtcXG4gIGhlaWdodDogMjlweDtcXG4gIG1hcmdpbjogM3B4OyB9XFxuICAuY2FyZC1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZmMmRhOyB9XFxuICAuY2FyZC1idXR0b246YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0MzQzJDNjsgfVxcblxcbi5hZGQge1xcbiAgd2lkdGg6IDV2aDsgfVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbi5mYXZvcml0ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZhZGM2O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vaW1hZ2UuZmxhdGljb24uY29tL2ljb25zL3N2Zy8xNDkvMTQ5MjIyLnN2Zyk7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgd2lkdGg6IDEzJTsgfVxcblxcbi5hbGwtY2FyZHMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtZ2FwOiAxJSAzJTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuICBwYWRkaW5nOiAzMHB4IDAgMzBweCAzMHB4O1xcbiAgbWFyZ2luOiA1JTsgfVxcblxcbmltZyB7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4uY2FyZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xcbiAgYm9yZGVyOiAzcHggc29saWQgIzAwMDtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLmNhcmQtaGVhZGVyIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxcblxcbi5hbGwge1xcbiAgZ3JpZC1nYXA6IDBweDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7IH1cXG5cXG4uYWxsLXJlY2lwZS1pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGNvbG9yOiAjRkZGRkZGO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcblxcbm9sIHtcXG4gIGNvbG9yOiAjZjZhZGM2O1xcbiAgZm9udC1zaXplOiAyLjJlbTtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLnJlY2lwZS1jb250YWluZXIge1xcbiAgcGFkZGluZzogNiU7XFxuICBwYWRkaW5nLXRvcDogMDsgfVxcblxcbi5yZWNpcGUtbmFtZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4uY2FyZC1waWN0dXJlIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgbWFyZ2luOiAxMHB4IDMlIDhweCAyLjYlO1xcbiAgd2lkdGg6IDk0JTsgfVxcbiAgLmNhcmQtcGljdHVyZTphY3RpdmUge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjRkZGRkZGOyB9XFxuICAuY2FyZC1waWN0dXJlOmhvdmVyIHtcXG4gICAgb3BhY2l0eTogMC41O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjY2ZmMmRhOyB9XFxuXFxuLmZhdm9yaXRlLWFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9pbWFnZS5mbGF0aWNvbi5jb20vaWNvbnMvc3ZnLzE0OC8xNDg4NDEuc3ZnKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IH1cXG5cXG4ubm8tcmVzdWx0cyA+IGFydGljbGUge1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtOyB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcXG4gIC5tYWluLWhlYWRlciB7XFxuICAgIGhlaWdodDogMTJ2aDtcXG4gICAgcmlnaHQ6IGF1dG87XFxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XFxuICAubWFpbiB7XFxuICAgIHdpZHRoOiBhdXRvOyB9XFxuICAuYWxsLWNhcmRzIHtcXG4gICAgZ3JpZC1nYXA6IDE1cHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgIHBhZGRpbmc6IDE1cHggMTVweCAxNXB4IDE1cHg7XFxuICAgIHBhZGRpbmctdG9wOiA1JTsgfVxcbiAgLmNhcmQge1xcbiAgICB3aWR0aDogMzV2dztcXG4gICAgaGVpZ2h0OiAzNXZoO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG4gIC5uYXYtYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAuN2VtO1xcbiAgICB3aWR0aDogMjh2dztcXG4gICAgaGVpZ2h0OiA2dmg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuICBoMSB7XFxuICAgIGNvbG9yOiAjRkZGRkZGO1xcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjMDAwO1xcbiAgICBmb250LXNpemU6IDIuMWVtO1xcbiAgICB3aWR0aDogMjUlO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAzdnc7IH1cXG4gIC51c2VyLWluZm8ge1xcbiAgICB3aWR0aDogMzAlOyB9XFxuICAuY2FyZC1waWN0dXJlIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXG4gICAgaGVpZ2h0OiA0MCU7XFxuICAgIG1hcmdpbjogMTBweCAzJSA4cHggMi42JTtcXG4gICAgd2lkdGg6IDc0JTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjRkZGRkZGOyB9XFxuICAucmVjaXBlLW5hbWUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgZm9udC1zaXplOiA0dnc7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgLmFkZCB7XFxuICAgIHdpZHRoOiAzdmg7IH1cXG4gIC5mYXZvcml0ZSB7XFxuICAgIHdpZHRoOiA0dmg7IH1cXG4gIC5zZWFyY2gtYmFyIHtcXG4gICAgcGFkZGluZy10b3A6IDJ2dztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA2dmg7XFxuICAgIG1hcmdpbi10b3A6IDEzdmg7IH1cXG4gIC5zZWFyY2gtYnV0dG9uIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXG4gICAgd2lkdGg6IDZ2aDtcXG4gICAgaGVpZ2h0OiA2dmg7IH1cXG4gIC5zZWFyY2gtaW5wdXQge1xcbiAgICBoZWlnaHQ6IDV2aDsgfVxcbiAgLnVzZXItaW5mbyB7XFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxuICAgIHdpZHRoOiA2OCU7IH1cXG4gIC5idXR0b24tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDc1JTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyOyB9IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3N0eWxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL192YXJpYWJsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTs7RUFFSSxXQUFXLEVBQUE7O0FBR2Y7RUFDSSxz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VztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQixFQUFBO0VBRTFCO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUIsRUFBQTtFQUV2QjtJQUNJLGNDN1BrQjtJRDhQbEIsNEJBQTRCO0lBQzVCLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1Ysa0JBQWtCLEVBQUE7RUFFdEI7SUFDSSxVQUFVLEVBQUE7RUFFZDtJQUNJLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsd0JBQXdCO0lBQ3hCLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIseUJDeFFhLEVBQUE7RUQwUWpCO0lBQ0ksY0FBYztJQUNkLGNBQWM7SUFDZCxrQkFBa0IsRUFBQTtFQUV0QjtJQUNJLFVBQVUsRUFBQTtFQUVkO0lBQ0ksVUFBVSxFQUFBO0VBRWQ7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxnQkFBZ0IsRUFBQTtFQUVwQjtJQUNJLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsV0FBVyxFQUFBO0VBRWY7SUFDSSxXQUFXLEVBQUE7RUFFZjtJQUNJLGdCQUFnQjtJQUVoQixVQUNKLEVBQUE7RUFDQTtJQUNJLGFBQWE7SUFDYixVQUFVO0lBQ1Ysa0JBQWtCLEVBQUEsRUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAndmFyaWFibGVzJztcXG5ib2R5LFxcbmh0bWwge1xcbiAgICB3aWR0aDogYXV0bztcXG59XFxuXFxuYm9keSB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBjb2xvcjogJG1haW5UZXh0Q29sb3I7XFxufVxcblxcbi5tYWluLWhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRoZWFkZXJDb2xvcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxJTtcXG4gICAgaGVpZ2h0OiAxNXZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxufVxcblxcbi5lcnJvci1tZXNzYWdlIHtcXG4gICAgbWFyZ2luOiAwcHg7XFxufVxcblxcbi5idXR0b24tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgcGFkZGluZy10b3A6IDUlO1xcbn1cXG5cXG4uYnV0dG9uLXdyYXBwZXIge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAzMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5uYXYtYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGhlYWRlckNvbG9yO1xcbiAgICBmb250LXNpemU6IDEuM2VtO1xcbiAgICBtYXJnaW46IDElO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAmOmhvdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRidXR0b25Ib3ZlcjtcXG4gICAgfVxcbiAgICA7XFxuICAgICY6YWN0aXZlIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRidXR0b25BY3RpdmU7XFxuICAgIH1cXG4gICAgO1xcbn1cXG5cXG5oMSB7XFxuICAgIGNvbG9yOiAkaGVhZGluZ1RleHRDb2xvcjtcXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzAwMDtcXG4gICAgZm9udC1zaXplOiAyNTUlO1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICB3aWR0aDogMzAlO1xcbn1cXG5cXG4udXNlci1pbmZvIHtcXG4gICAgZm9udC1zaXplOiAxLjhlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDogNDAlXFxufVxcblxcbi5zZWFyY2gtYmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tdG9wOiAydmg7XFxufVxcblxcbi5zZWFyY2gtYnV0dG9uIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgaGVpZ2h0OiA4dmg7XFxufVxcblxcbi5zZWFyY2gtaW1hZ2Uge1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICAmOmhvdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRidXR0b25Ib3ZlcjtcXG4gICAgfVxcbiAgICA7XFxuICAgICY6YWN0aXZlIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRidXR0b25BY3RpdmU7XFxuICAgIH1cXG4gICAgO1xcbn1cXG5cXG4uc2VhcmNoLWlucHV0IHtcXG4gICAgaGVpZ2h0OiA3dmg7XFxuICAgIHdpZHRoOiAzMCU7XFxufVxcblxcbm1haW4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbkNvbG9yO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY2FyZC1idXR0b24ge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkYm9yZGVyQ29sb3I7XFxuICAgIGhlaWdodDogMjlweDtcXG4gICAgbWFyZ2luOiAzcHg7XFxuICAgICY6aG92ZXIge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJ1dHRvbkhvdmVyO1xcbiAgICB9XFxuICAgIDtcXG4gICAgJjphY3RpdmUge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJ1dHRvbkFjdGl2ZTtcXG4gICAgfVxcbiAgICA7XFxufVxcblxcbi5hZGQge1xcbiAgICB3aWR0aDogNXZoO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmZhdm9yaXRlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGhlYWRlckNvbG9yO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9pbWFnZS5mbGF0aWNvbi5jb20vaWNvbnMvc3ZnLzE0OS8xNDkyMjIuc3ZnKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICB3aWR0aDogMTMlO1xcbn1cXG5cXG4uYWxsLWNhcmRzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1nYXA6IDElIDMlO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgICBwYWRkaW5nOiAzMHB4IDAgMzBweCAzMHB4O1xcbiAgICBtYXJnaW46IDUlO1xcbn1cXG5cXG5pbWcge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jYXJkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNhcmRDb2xvcjtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzAwMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jYXJkLWhlYWRlciB7XFxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNFQkY1RUU7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5hbGwge1xcbiAgICBncmlkLWdhcDogMHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xcbn1cXG5cXG4uYWxsLXJlY2lwZS1pbmZvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG1haW5UZXh0Q29sb3I7XFxuICAgIC8vIGZvbnQtc2l6ZTogMjIwJTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgY29sb3I6ICRjYXJkQ29sb3I7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbm9sIHtcXG4gICAgY29sb3I6ICRoZWFkZXJDb2xvcjtcXG4gICAgZm9udC1zaXplOiAyLjJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5yZWNpcGUtY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogNiU7XFxuICAgIHBhZGRpbmctdG9wOiAwO1xcbn1cXG5cXG4ucmVjaXBlLW5hbWUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY2FyZC1waWN0dXJlIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgbWFyZ2luOiAxMHB4IDMlIDhweCAyLjYlO1xcbiAgICB3aWR0aDogOTQlO1xcbiAgICAmOmFjdGl2ZSB7XFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkYm9yZGVyQ29sb3I7XFxuICAgIH1cXG4gICAgJjpob3ZlciB7XFxuICAgICAgICBvcGFjaXR5OiAwLjU7XFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkYnV0dG9uSG92ZXI7XFxuICAgIH1cXG59XFxuXFxuLmZhdm9yaXRlLWFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2ltYWdlLmZsYXRpY29uLmNvbS9pY29ucy9zdmcvMTQ4LzE0ODg0MS5zdmcpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG4ubm8tcmVzdWx0cz5hcnRpY2xlIHtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcXG4gICAgLm1haW4taGVhZGVyIHtcXG4gICAgICAgIGhlaWdodDogMTJ2aDtcXG4gICAgICAgIHJpZ2h0OiBhdXRvO1xcbiAgICAgICAgZmxleC1mbG93OiByb3cgd3JhcDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB9XFxuICAgIC5tYWluIHtcXG4gICAgICAgIHdpZHRoOiBhdXRvXFxuICAgIH1cXG4gICAgLmFsbC1jYXJkcyB7XFxuICAgICAgICBncmlkLWdhcDogMTVweDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgICAgICBwYWRkaW5nOiAxNXB4IDE1cHggMTVweCAxNXB4O1xcbiAgICAgICAgcGFkZGluZy10b3A6IDUlO1xcbiAgICB9XFxuICAgIC5jYXJkIHtcXG4gICAgICAgIHdpZHRoOiAzNXZ3O1xcbiAgICAgICAgaGVpZ2h0OiAzNXZoO1xcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG4gICAgLm5hdi1idXR0b24ge1xcbiAgICAgICAgZm9udC1zaXplOiAuN2VtO1xcbiAgICAgICAgd2lkdGg6IDI4dnc7XFxuICAgICAgICBoZWlnaHQ6IDZ2aDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG4gICAgaDEge1xcbiAgICAgICAgY29sb3I6ICRoZWFkaW5nVGV4dENvbG9yO1xcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzAwMDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMi4xZW07XFxuICAgICAgICB3aWR0aDogMjUlO1xcbiAgICAgICAgcGFkZGluZy1yaWdodDogM3Z3O1xcbiAgICB9XFxuICAgIC51c2VyLWluZm8ge1xcbiAgICAgICAgd2lkdGg6IDMwJTtcXG4gICAgfVxcbiAgICAuY2FyZC1waWN0dXJlIHtcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxuICAgICAgICBoZWlnaHQ6IDQwJTtcXG4gICAgICAgIG1hcmdpbjogMTBweCAzJSA4cHggMi42JTtcXG4gICAgICAgIHdpZHRoOiA3NCU7XFxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkYm9yZGVyQ29sb3I7XFxuICAgIH1cXG4gICAgLnJlY2lwZS1uYW1lIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgZm9udC1zaXplOiA0dnc7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG4gICAgLmFkZCB7XFxuICAgICAgICB3aWR0aDogM3ZoO1xcbiAgICB9XFxuICAgIC5mYXZvcml0ZSB7XFxuICAgICAgICB3aWR0aDogNHZoO1xcbiAgICB9XFxuICAgIC5zZWFyY2gtYmFyIHtcXG4gICAgICAgIHBhZGRpbmctdG9wOiAydnc7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgaGVpZ2h0OiA2dmg7XFxuICAgICAgICBtYXJnaW4tdG9wOiAxM3ZoO1xcbiAgICB9XFxuICAgIC5zZWFyY2gtYnV0dG9uIHtcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxuICAgICAgICB3aWR0aDogNnZoO1xcbiAgICAgICAgaGVpZ2h0OiA2dmg7XFxuICAgIH1cXG4gICAgLnNlYXJjaC1pbnB1dCB7XFxuICAgICAgICBoZWlnaHQ6IDV2aDtcXG4gICAgfVxcbiAgICAudXNlci1pbmZvIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XFxuICAgICAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICB3aWR0aDogNjglXFxuICAgIH1cXG4gICAgLmJ1dHRvbi1jb250YWluZXIge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIHdpZHRoOiA3NSU7XFxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIH1cXG59XFxuXCIsXCIkaGVhZGVyQ29sb3I6ICNmNmFkYzY7XFxuJGJ1dHRvbkhvdmVyOiAjY2ZmMmRhO1xcbiRidXR0b25BY3RpdmU6ICNDM0MyQzY7XFxuJGhlYWRpbmdUZXh0Q29sb3I6ICNGRkZGRkY7XFxuJG1haW5UZXh0Q29sb3I6ICMwMDAwMDA7XFxuJGNhcmRDb2xvcjogI0ZGRkZGRjtcXG4kbWFpbkNvbG9yOiAjRkZGRkZGO1xcbiRib3JkZXJDb2xvcjogI0ZGRkZGRjtcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiY2xhc3MgQ29va2Jvb2sge1xuICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgdGhpcy5yZWNpcGVzID0gZGF0YTtcbiAgfVxuXG4gIGFkZEluZ3JlZGllbnROYW1lcyhpbmdyZWRpZW50c0RhdGEpIHtcbiAgICB0aGlzLnJlY2lwZXMuZm9yRWFjaChyZWNpcGUgPT4ge1xuICAgICAgcmVjaXBlLmluZ3JlZGllbnRzLmZvckVhY2goaW5ncmVkaWVudCA9PiB7XG4gICAgICAgIGxldCBpbmdyZWRpZW50T2JqZWN0ID0gaW5ncmVkaWVudHNEYXRhLmZpbmQoaW5ncmVkaWVudERhdGEgPT4gaW5ncmVkaWVudC5pZCA9PT0gaW5ncmVkaWVudERhdGEuaWQpXG4gICAgICAgIGlmIChpbmdyZWRpZW50T2JqZWN0LmlkID09PSBpbmdyZWRpZW50LmlkKSB7XG4gICAgICAgICAgaW5ncmVkaWVudC5uYW1lID0gaW5ncmVkaWVudE9iamVjdC5uYW1lO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBmaW5kUmVjaXBlKHNlYXJjaFRleHQpIHtcbiAgICBpZiAodGhpcy5maW5kQWxsUmVjaXBlcyhzZWFyY2hUZXh0KSkge1xuICAgICAgcmV0dXJuIHRoaXMuY2hlY2tGb3JEdXBsaWNhdGVzKHRoaXMuZmluZEFsbFJlY2lwZXMoc2VhcmNoVGV4dCkpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5maW5kUmVjaXBlQnlOYW1lKHNlYXJjaFRleHQpKSB7XG4gICAgICByZXR1cm4gdGhpcy5maW5kUmVjaXBlQnlOYW1lKHNlYXJjaFRleHQpXG4gICAgfSBlbHNlIGlmICh0aGlzLmZpbmRSZWNpcGVCeVRhZyhzZWFyY2hUZXh0KSkge1xuICAgICAgcmV0dXJuIHRoaXMuZmluZFJlY2lwZUJ5VGFnKHNlYXJjaFRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5maW5kUmVjaXBlQnlJbmdyZWRpZW50KHNlYXJjaFRleHQpKSB7XG4gICAgICByZXR1cm4gdGhpcy5maW5kUmVjaXBlQnlJbmdyZWRpZW50KHNlYXJjaFRleHQpO1xuICAgIH1cbiAgfVxuXG4gIGZpbmRSZWNpcGVCeU5hbWUoc2VhcmNoVGV4dCkge1xuICAgIGNvbnN0IGJ5TmFtZXMgPSB0aGlzLnJlY2lwZXMuZmlsdGVyKHJlY2lwZSA9PiByZWNpcGUubmFtZS5pbmNsdWRlcyh0aGlzLmNhcGl0YWxpemUoc2VhcmNoVGV4dCkpKVxuICAgIGlmIChieU5hbWVzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGJ5TmFtZXM7XG4gICAgfVxuICB9XG5cbiAgZmluZFJlY2lwZUJ5VGFnKHNlYXJjaFRleHQpIHtcbiAgICBjb25zdCBieVRhZyA9IHRoaXMucmVjaXBlcy5maWx0ZXIocmVjaXBlID0+IHJlY2lwZS50YWdzLmZpbmQodGFnID0+IHRhZy5pbmNsdWRlcyhzZWFyY2hUZXh0LnRvTG93ZXJDYXNlKCkpKSk7XG4gICAgaWYgKGJ5VGFnLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGJ5VGFnO1xuICAgIH1cbiAgfVxuXG4gIGZpbmRSZWNpcGVCeUluZ3JlZGllbnQoc2VhcmNoVGV4dCkge1xuICAgIHJldHVybiB0aGlzLnJlY2lwZXMuZmlsdGVyKHJlY2lwZSA9PiByZWNpcGUuaW5ncmVkaWVudHMuZmluZChpbmdyZWRpZW50ID0+IHtcbiAgICAgIGlmIChpbmdyZWRpZW50Lm5hbWUuaW5jbHVkZXMoc2VhcmNoVGV4dC50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICByZXR1cm4gcmVjaXBlO1xuICAgICAgfVxuICAgIH0pKVxuICB9XG5cbiAgZmluZEFsbFJlY2lwZXMoc2VhcmNoVGV4dCkge1xuICAgIGlmICh0aGlzLmZpbmRSZWNpcGVCeU5hbWUoc2VhcmNoVGV4dCkgJiYgdGhpcy5maW5kUmVjaXBlQnlUYWcoc2VhcmNoVGV4dCkgJiYgdGhpcy5maW5kUmVjaXBlQnlJbmdyZWRpZW50KHNlYXJjaFRleHQpKSB7XG4gICAgICByZXR1cm4gdGhpcy5maW5kUmVjaXBlQnlOYW1lKHNlYXJjaFRleHQpLmNvbmNhdCh0aGlzLmZpbmRSZWNpcGVCeVRhZyhzZWFyY2hUZXh0KSwgdGhpcy5maW5kUmVjaXBlQnlJbmdyZWRpZW50KHNlYXJjaFRleHQpKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZmluZFJlY2lwZUJ5TmFtZShzZWFyY2hUZXh0KSAmJiB0aGlzLmZpbmRSZWNpcGVCeVRhZyhzZWFyY2hUZXh0KSkge1xuICAgICAgcmV0dXJuIHRoaXMuZmluZFJlY2lwZUJ5TmFtZShzZWFyY2hUZXh0KS5jb25jYXQodGhpcy5maW5kUmVjaXBlQnlUYWcoc2VhcmNoVGV4dCkpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5maW5kUmVjaXBlQnlUYWcoc2VhcmNoVGV4dCkgJiYgdGhpcy5maW5kUmVjaXBlQnlJbmdyZWRpZW50KHNlYXJjaFRleHQpKSB7XG4gICAgICByZXR1cm4gdGhpcy5maW5kUmVjaXBlQnlUYWcoc2VhcmNoVGV4dCkuY29uY2F0KHRoaXMuZmluZFJlY2lwZUJ5SW5ncmVkaWVudChzZWFyY2hUZXh0KSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmZpbmRSZWNpcGVCeU5hbWUoc2VhcmNoVGV4dCkgJiYgdGhpcy5maW5kUmVjaXBlQnlJbmdyZWRpZW50KHNlYXJjaFRleHQpKSB7XG4gICAgICByZXR1cm4gdGhpcy5maW5kUmVjaXBlQnlOYW1lKHNlYXJjaFRleHQpLmNvbmNhdCh0aGlzLmZpbmRSZWNpcGVCeUluZ3JlZGllbnQoc2VhcmNoVGV4dCkpO1xuICAgIH1cbiAgfVxuXG4gIGNoZWNrRm9yRHVwbGljYXRlcyhmaWx0ZXJlZFJlY2lwZXMpIHtcbiAgICByZXR1cm4gZmlsdGVyZWRSZWNpcGVzLmZpbHRlcigocmVjaXBlLCBpbmRleCkgPT4gZmlsdGVyZWRSZWNpcGVzLmluZGV4T2YocmVjaXBlKSA9PT0gaW5kZXgpXG4gIH1cblxuICBjYXBpdGFsaXplKHNlYXJjaFRleHQpIHtcbiAgICByZXR1cm4gc2VhcmNoVGV4dC50b0xvd2VyQ2FzZSgpLnNwbGl0KCcgJykubWFwKHdvcmQgPT4gd29yZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdvcmQuc2xpY2UoMSkpLmpvaW4oJyAnKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb29rYm9vazsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImxldCBkb21VcGRhdGVzID0ge1xuXG4gIGRpc3BsYXlDYXJkcyhyZWNpcGVzTGlzdCwgY2FyZEFyZWEpIHtcbiAgICBjYXJkQXJlYS5jbGFzc0xpc3QucmVtb3ZlKCdhbGwnKVxuICAgIGNhcmRBcmVhLmlubmVySFRNTCA9ICcnO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHJlY2lwZXNMaXN0KSkge1xuICAgICAgcmVjaXBlc0xpc3QuZm9yRWFjaChyZWNpcGUgPT4ge1xuICAgICAgICBjYXJkQXJlYS5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBgPGRpdiBpZD0nJHtyZWNpcGUuaWR9J1xuICAgICAgIGNsYXNzPSdjYXJkJz5cbiAgICAgICA8aGVhZGVyIGlkPScke3JlY2lwZS5pZH0nIGNsYXNzPSdjYXJkLWhlYWRlcic+XG4gICAgICAgPGxhYmVsIGZvcj0nYWRkLWJ1dHRvbicgY2xhc3M9J2hpZGRlbic+Q2xpY2sgdG8gYWRkIHJlY2lwZTwvbGFiZWw+XG4gICAgICAgPGJ1dHRvbiBpZD0nJHtyZWNpcGUuaWR9JyAgY2xhc3M9J2FkZC1idXR0b24gY2FyZC1idXR0b24nIGFyaWEtbGFiZWw9J2FkZCB0byBteSByZWNpcGVzIGJ1dHRvbic+XG4gICAgICAgPGltZyBpZD0nJHtyZWNpcGUuaWR9JyBjbGFzcz0nYWRkJ1xuICAgICAgIHNyYz0naHR0cHM6Ly9pbWFnZS5mbGF0aWNvbi5jb20vaWNvbnMvc3ZnLzMyLzMyMzM5LnN2ZycgYWx0PSdBZGQgdG9cbiAgICAgICByZWNpcGVzIHRvIGNvb2snPjwvYnV0dG9uPlxuICAgICAgIDxsYWJlbCBmb3I9J2Zhdm9yaXRlLWJ1dHRvbicgY2xhc3M9J2hpZGRlbic+Q2xpY2sgdG8gZmF2b3JpdGUgcmVjaXBlXG4gICAgICAgPC9sYWJlbD5cbiAgICAgICA8YnV0dG9uIGlkPScke3JlY2lwZS5pZH0nY2xhc3M9J2Zhdm9yaXRlIGZhdm9yaXRlJHtyZWNpcGUuaWR9IGNhcmQtYnV0dG9uJyBhcmlhLWxhYmVsPSdhZGQgdG8gbXkgZmF2b3JpdGVzIGJ1dHRvbic+XG4gICAgICAgPC9idXR0b24+PC9oZWFkZXI+XG4gICAgICAgPGltZyBpZD0nJHtyZWNpcGUuaWR9JyB0YWJpbmRleD0nMCcgY2xhc3M9J2NhcmQtcGljdHVyZSdcbiAgICAgICBzcmM9JyR7cmVjaXBlLmltYWdlfScgYWx0PSdGb29kIGZyb20gcmVjaXBlJz5cbiAgICAgICA8c3BhbiBpZD0nJHtyZWNpcGUuaWR9JyBjbGFzcz0ncmVjaXBlLW5hbWUnPiR7cmVjaXBlLm5hbWV9PC9zcGFuPlxuICAgICAgIDwvZGl2PmApXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcmVjaXBlID0gcmVjaXBlc0xpc3Q7XG5cbiAgICAgIGNhcmRBcmVhLmlubmVySFRNTCA9IGA8ZGl2IGlkPScke3JlY2lwZS5pZH0nXG4gICAgICBjbGFzcz0nY2FyZCc+XG4gICAgICA8aGVhZGVyIGlkPScke3JlY2lwZS5pZH0nIGNsYXNzPSdjYXJkLWhlYWRlcic+XG4gICAgICA8bGFiZWwgZm9yPSdhZGQtYnV0dG9uJyBjbGFzcz0naGlkZGVuJz5DbGljayB0byBhZGQgcmVjaXBlPC9sYWJlbD5cbiAgICAgIDxidXR0b24gaWQ9JyR7cmVjaXBlLmlkfScgIGNsYXNzPSdhZGQtYnV0dG9uIGNhcmQtYnV0dG9uJyBhcmlhLWxhYmVsPSdhZGQgdG8gbXkgcmVjaXBlcyBidXR0b24nPlxuICAgICAgPGltZyBpZD0nJHtyZWNpcGUuaWR9JyBjbGFzcz0nYWRkJ1xuICAgICAgc3JjPSdodHRwczovL2ltYWdlLmZsYXRpY29uLmNvbS9pY29ucy9zdmcvMzIvIDMyMzM5LnN2ZycgYWx0PSdBZGQgdG9cbiAgICAgIHJlY2lwZXMgdG8gY29vayc+PC9idXR0b24+XG4gICAgICA8bGFiZWwgZm9yPSdmYXZvcml0ZS1idXR0b24nIGNsYXNzPSdoaWRkZW4nPkNsaWNrIHRvIGZhdm9yaXRlIHJlY2lwZVxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxidXR0b24gaWQ9JyR7cmVjaXBlLmlkfSdjbGFzcz0nZmF2b3JpdGUgZmF2b3JpdGUke3JlY2lwZS5pZH0gY2FyZC1idXR0b24nIGFyaWEtbGFiZWw9J2FkZCB0byBteSBmYXZvcml0ZXMgYnV0dG9uJz5cbiAgICAgIDwvYnV0dG9uPjwvaGVhZGVyPlxuICAgICAgPGltZyBpZD0nJHtyZWNpcGUuaWR9JyB0YWJpbmRleD0nMCcgY2xhc3M9J2NhcmQtIHBpY3R1cmUnXG4gICAgICBzcmM9JyR7cmVjaXBlLmltYWdlfScgYWx0PSdGb29kIGZyb20gcmVjaXBlJz5cbiAgICAgIDxzcGFuIGlkPScke3JlY2lwZS5pZH0nIGNsYXNzPSdyZWNpcGUtbmFtZSc+JHtyZWNpcGUubmFtZX08L3NwYW4+XG4gICAgICA8L2Rpdj5gXG4gICAgfVxuICB9LFxuXG4gIGRpc3BsYXlOb1Jlc3VsdHMoY2FyZEFyZWEpIHtcbiAgICBjYXJkQXJlYS5jbGFzc0xpc3QucmVtb3ZlKCdhbGwtY2FyZHMnKVxuICAgIGNhcmRBcmVhLmNsYXNzTGlzdC5hZGQoJ25vLXJlc3VsdHMnKVxuICAgIGNhcmRBcmVhLmlubmVySFRNTCA9IGA8YXJ0aWNsZT5Tb3JyeSwgd2UgY291bGRuJ3QgZmluZCBhbnl0aGluZyBtYXRjaGluZyB5b3VyIHNlYXJjaCBjcml0ZXJpYS4gVHJ5IHNvbWV0aGluZyBlbHNlITwvYXJ0aWNsZT5gXG4gIH0sXG5cbiAgZ3JlZXRVc2VyKHVzZXIpIHtcbiAgICBjb25zdCB1c2VyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51c2VyLWluZm8nKTtcbiAgICB1c2VyTmFtZS5pbm5lclRleHQgPSBgV2VsY29tZSwgJHt1c2VyLm5hbWV9LmA7XG4gIH0sXG5cbiAgY29ubmVjdFdpdGhDbGFzc0xpc3QobWV0aG9kLCBjbGFzc05hbWUsIGV2ZW50LCBlbGVtZW50KSB7XG4gICAgaWYgKG1ldGhvZCA9PT0gJ2FkZCcgJiYgZWxlbWVudCkge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgfSBlbHNlIGlmIChtZXRob2QgPT09ICdyZW1vdmUnICYmIGVsZW1lbnQpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgIH0gZWxzZSBpZiAobWV0aG9kID09PSAnYWRkJyAmJiBlbGVtZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgfSBlbHNlIGlmIChtZXRob2QgPT09ICdyZW1vdmUnICYmIGVsZW1lbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICB9IGVsc2UgaWYgKG1ldGhvZCA9PT0gJ2NvbnRhaW5zJykge1xuICAgICAgcmV0dXJuIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTtcbiAgICB9XG4gIH0sXG5cblxuICBwb3B1bGF0ZVJlY2lwZUNhcmQoY2FyZEFyZWEsIHJlY2lwZU9iamVjdCwgY29zdEluRG9sbGFycykge1xuICAgXG4gICAgY2FyZEFyZWEuaW5uZXJIVE1MID0gYDxoMj4ke3JlY2lwZU9iamVjdC5uYW1lfTwvaDI+XG4gICAgPHAgY2xhc3M9J2FsbC1yZWNpcGUtaW5mbyc+XG4gICAgSXQgd2lsbCBjb3N0OiA8c3BhbiBjbGFzcz0nY29zdCByZWNpcGUtaW5mbyc+XG4gICAgJCR7Y29zdEluRG9sbGFyc308L3NwYW4+PGJyPjxicj5cbiAgICBZb3Ugd2lsbCBuZWVkOjxzcGFuIGNsYXNzPSdpbmdyZWRpZW50cyByZWNpcGUtaW5mbyc+PC9zcGFuPlxuICAgIEluc3RydWN0aW9uczo8b2w+PHNwYW4gY2xhc3M9J2luc3RydWN0aW9ucyByZWNpcGUtaW5mbyc+XG4gICAgPC9zcGFuPjwvb2w+XG4gICAgPC9wPmA7XG5cblxuICAgIGNvbnN0IGluZ3JlZGllbnRzU3BhbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmdyZWRpZW50cycpO1xuICAgIGNvbnN0IGluc3RydWN0aW9uc1NwYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5zdHJ1Y3Rpb25zJyk7XG5cbiAgICByZWNpcGVPYmplY3QuaW5ncmVkaWVudHMuZm9yRWFjaChpbmdyZWRpZW50ID0+IHtcbiAgICAgIGluZ3JlZGllbnRzU3Bhbi5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBgPHVsPjxsaT5cbiAgICAgICR7aW5ncmVkaWVudC5xdWFudGl0eS5hbW91bnQudG9GaXhlZCgyKX0gJHtpbmdyZWRpZW50LnF1YW50aXR5LnVuaXR9XG4gICAgICAke2luZ3JlZGllbnQubmFtZX0gPC9saT48L3VsPlxuICAgICAgYClcblxuICAgIH0pO1xuXG4gICAgcmVjaXBlT2JqZWN0Lmluc3RydWN0aW9ucy5mb3JFYWNoKGluc3RydWN0aW9uID0+IHtcbiAgICAgIGluc3RydWN0aW9uc1NwYW4uaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmViZWdpbicsIGA8bGk+XG4gICAgICAke2luc3RydWN0aW9uLmluc3RydWN0aW9ufTwvbGk+XG4gICAgICBgKVxuICAgIH0pO1xuXG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGRvbVVwZGF0ZXM7IiwiY2xhc3MgUmVjaXBlIHtcbiAgY29uc3RydWN0b3IocmVjaXBlLCBpbmdyZWRpZW50c0RhdGEpIHtcbiAgICB0aGlzLm5hbWUgPSByZWNpcGUubmFtZTtcbiAgICB0aGlzLmlkID0gcmVjaXBlLmlkO1xuICAgIHRoaXMuaW5ncmVkaWVudHMgPSByZWNpcGUuaW5ncmVkaWVudHM7XG4gICAgdGhpcy5pbnN0cnVjdGlvbnMgPSByZWNpcGUuaW5zdHJ1Y3Rpb25zO1xuICAgIHRoaXMudGFncyA9IHJlY2lwZS50YWdzO1xuICAgIHRoaXMuaW5ncmVkaWVudHNEYXRhID0gaW5ncmVkaWVudHNEYXRhO1xuICB9XG5cbiAgY2FsY3VsYXRlQ29zdCgpIHtcbiAgICBsZXQgY29zdENvdW50ZXIgPSAwO1xuICAgIHRoaXMuaW5ncmVkaWVudHMuZm9yRWFjaChpbmdyZWRpZW50ID0+IHtcbiAgICAgIHRoaXMuaW5ncmVkaWVudHNEYXRhLmZpbmQoc3BlY2lmaWNJbmdyZWRpZW50ID0+IHtcbiAgICAgICAgaWYgKHNwZWNpZmljSW5ncmVkaWVudC5pZCA9PT0gaW5ncmVkaWVudC5pZCkge1xuICAgICAgICAgIGNvc3RDb3VudGVyICs9IChOdW1iZXIoc3BlY2lmaWNJbmdyZWRpZW50LmVzdGltYXRlZENvc3RJbkNlbnRzKSAqXG4gICAgICAgICAgTnVtYmVyKGluZ3JlZGllbnQucXVhbnRpdHkuYW1vdW50KSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KTtcbiAgICByZXR1cm4gY29zdENvdW50ZXI7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWNpcGU7XG4iLCJpbXBvcnQgJy4vY3NzL3N0eWxlcy5zY3NzJztcblxuaW1wb3J0IFJlY2lwZSBmcm9tICcuL3JlY2lwZSc7XG5pbXBvcnQgVXNlciBmcm9tICcuL3VzZXInO1xuaW1wb3J0IENvb2tib29rIGZyb20gJy4vY29va2Jvb2snO1xuaW1wb3J0IGRvbVVwZGF0ZXMgZnJvbSAnLi9kb21VcGRhdGVzJztcblxuY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lJyk7XG5jb25zdCB2aWV3RmF2b3JpdGVzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZpZXctZmF2b3JpdGVzJyk7XG5jb25zdCB2aWV3UmVjaXBlc1RvQ29va0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52aWV3LXRvLWNvb2snKTtcbmNvbnN0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gtYnV0dG9uJyk7XG5jb25zdCBjYXJkQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwtY2FyZHMnKTtcblxubGV0IHVzZXIsIHVzZXJzLCBjb29rYm9vaywgaW5ncmVkaWVudERhdGE7XG5cbndpbmRvdy5vbmxvYWQgPSBsb2FkRGF0YSgpO1xuXG5ob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29uZGl0aW9uYWxzQ2FyZEJ1dHRvbnMpO1xudmlld0Zhdm9yaXRlc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHZpZXdGYXZvcml0ZXMpO1xudmlld1JlY2lwZXNUb0Nvb2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB2aWV3UmVjaXBlc1RvQ29vayk7XG5zZWFyY2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5U2VhcmNoUmVjaXBlcyk7XG5jYXJkQXJlYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbmRpdGlvbmFsc0NhcmRCdXR0b25zKTtcblxuLy9BUEkgY2FsbHNcbmZ1bmN0aW9uIGxvYWREYXRhKCkge1xuICBnZXRJbmdyZWRpZW50RGF0YSgpO1xuICBnZXRSZWNpcGVEYXRhKCk7XG4gIGdldFVzZXJEYXRhKCk7XG59XG5cbmZ1bmN0aW9uIGdldFVzZXJEYXRhKCkge1xuICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS91c2VycycpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4odXNlckRhdGEgPT4gdXNlcnMgPSB1c2VyRGF0YSlcbiAgICAudGhlbigoKSA9PiBvblN0YXJ0dXAoKSlcbn1cblxuZnVuY3Rpb24gZ2V0SW5ncmVkaWVudERhdGEoKSB7XG4gIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3YxL2luZ3JlZGllbnRzJylcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICBpbmdyZWRpZW50RGF0YSA9IGRhdGFcbiAgICAgIGdldFJlY2lwZURhdGEoKVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGdldFJlY2lwZURhdGEoKSB7XG4gIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3YxL3JlY2lwZXMnKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKChyZWNpcGVEYXRhKSA9PiB7XG4gICAgICBjb29rYm9vayA9IG5ldyBDb29rYm9vayhyZWNpcGVEYXRhKVxuICAgICAgY29va2Jvb2suYWRkSW5ncmVkaWVudE5hbWVzKGluZ3JlZGllbnREYXRhKVxuICAgICAgZG9tVXBkYXRlcy5kaXNwbGF5Q2FyZHMoY29va2Jvb2sucmVjaXBlcywgY2FyZEFyZWEpXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gb25TdGFydHVwKCkge1xuICBjb25zdCB1c2VySWQgPSAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNDkpICsgMSk7XG4gIGNvbnN0IG5ld1VzZXIgPSB1c2Vycy5maW5kKHVzZXIgPT4gdXNlci5pZCA9PT0gTnVtYmVyKHVzZXJJZCkpO1xuICB1c2VyID0gbmV3IFVzZXIodXNlcklkLCBuZXdVc2VyLm5hbWUsIG5ld1VzZXIucGFudHJ5KTtcbiAgZG9tVXBkYXRlcy5ncmVldFVzZXIodXNlcik7XG4gIGdldEZhdm9yaXRlcygpO1xuICBnZXRSZWNpcGVzVG9Db29rKCk7XG59XG5cbmZ1bmN0aW9uIHZpZXdGYXZvcml0ZXMoKSB7XG4gIGlmICh1c2VyLmZhdm9yaXRlUmVjaXBlcy5sZW5ndGgpIHtcbiAgICBkb21VcGRhdGVzLmNvbm5lY3RXaXRoQ2xhc3NMaXN0KCdhZGQnLCAnaGlkZGVuJywgZXZlbnQsIHZpZXdGYXZvcml0ZXNCdXR0b24pO1xuICAgIGRvbVVwZGF0ZXMuZGlzcGxheUNhcmRzKHVzZXIuZmF2b3JpdGVSZWNpcGVzLCBjYXJkQXJlYSk7XG4gICAgZ2V0RmF2b3JpdGVzKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdmlld1JlY2lwZXNUb0Nvb2soKSB7XG4gIGlmICh1c2VyLnJlY2lwZXNUb0Nvb2subGVuZ3RoKSB7XG4gICAgZG9tVXBkYXRlcy5jb25uZWN0V2l0aENsYXNzTGlzdCgnYWRkJywgJ2hpZGRlbicsIGV2ZW50LCB2aWV3UmVjaXBlc1RvQ29va0J1dHRvbik7XG4gICAgZG9tVXBkYXRlcy5kaXNwbGF5Q2FyZHModXNlci5yZWNpcGVzVG9Db29rLCBjYXJkQXJlYSk7XG4gICAgZ2V0UmVjaXBlc1RvQ29vaygpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZhdm9yaXRlQ2FyZChldmVudCkge1xuICBjb25zdCBzcGVjaWZpY1JlY2lwZSA9IGNvb2tib29rLnJlY2lwZXMuZmluZChyZWNpcGUgPT4gcmVjaXBlLmlkID09PSBOdW1iZXIoZXZlbnQudGFyZ2V0LmlkKSk7XG5cbiAgaWYgKCFkb21VcGRhdGVzLmNvbm5lY3RXaXRoQ2xhc3NMaXN0KCdjb250YWlucycsICdmYXZvcml0ZS1hY3RpdmUnLCBldmVudCkpIHtcbiAgICBkb21VcGRhdGVzLmNvbm5lY3RXaXRoQ2xhc3NMaXN0KCdhZGQnLCAnZmF2b3JpdGUtYWN0aXZlJywgZXZlbnQpO1xuICAgIHVzZXIuYWRkVG9GYXZvcml0ZXMoc3BlY2lmaWNSZWNpcGUsICdmYXZvcml0ZVJlY2lwZXMnKTtcbiAgfSBlbHNlIGlmIChkb21VcGRhdGVzLmNvbm5lY3RXaXRoQ2xhc3NMaXN0KCdjb250YWlucycsICdmYXZvcml0ZS1hY3RpdmUnLCBldmVudCkpIHtcbiAgICBkb21VcGRhdGVzLmNvbm5lY3RXaXRoQ2xhc3NMaXN0KCdyZW1vdmUnLCAnZmF2b3JpdGUtYWN0aXZlJywgZXZlbnQpO1xuICAgIHVzZXIucmVtb3ZlRnJvbUZhdm9yaXRlcyhzcGVjaWZpY1JlY2lwZSwgJ2Zhdm9yaXRlUmVjaXBlcycpO1xuICAgIGRvbVVwZGF0ZXMuZGlzcGxheUNhcmRzKHVzZXIuZmF2b3JpdGVSZWNpcGVzLCBjYXJkQXJlYSk7XG4gICAgZ2V0RmF2b3JpdGVzKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkQ2FyZFRvQ29va0xpc3QoZXZlbnQpIHtcbiAgY29uc3Qgc3BlY2lmaWNSZWNpcGUgPSBjb29rYm9vay5yZWNpcGVzLmZpbmQocmVjaXBlID0+IHJlY2lwZS5pZCA9PT0gTnVtYmVyKGV2ZW50LnRhcmdldC5pZCkpXG5cbiAgaWYgKCFkb21VcGRhdGVzLmNvbm5lY3RXaXRoQ2xhc3NMaXN0KCdjb250YWlucycsICdjb29rLWxpc3QtYWN0aXZlJywgZXZlbnQpKSB7XG4gICAgZG9tVXBkYXRlcy5jb25uZWN0V2l0aENsYXNzTGlzdCgnYWRkJywgJ2Nvb2stbGlzdC1hY3RpdmUnLCBldmVudCk7XG4gICAgdXNlci5hZGRUb1JlY2lwZXNUb0Nvb2soc3BlY2lmaWNSZWNpcGUsICdyZWNpcGVzVG9Db29rJyk7XG4gIH0gZWxzZSBpZiAoZG9tVXBkYXRlcy5jb25uZWN0V2l0aENsYXNzTGlzdCgnY29udGFpbnMnLCAnY29vay1saXN0LWFjdGl2ZScsIGV2ZW50KSkge1xuICAgIGRvbVVwZGF0ZXMuY29ubmVjdFdpdGhDbGFzc0xpc3QoJ3JlbW92ZScsICdjb29rLWxpc3QtYWN0aXZlJywgZXZlbnQpO1xuICAgIHVzZXIucmVtb3ZlRnJvbVJlY2lwZXNUb0Nvb2soc3BlY2lmaWNSZWNpcGUsICdyZWNpcGVzVG9Db29rJyk7XG4gICAgZG9tVXBkYXRlcy5kaXNwbGF5Q2FyZHModXNlci5yZWNpcGVzVG9Db29rLCBjYXJkQXJlYSk7XG4gICAgZ2V0UmVjaXBlc1RvQ29vaygpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvbmRpdGlvbmFsc0NhcmRCdXR0b25zKGV2ZW50KSB7XG4gIGlmIChkb21VcGRhdGVzLmNvbm5lY3RXaXRoQ2xhc3NMaXN0KCdjb250YWlucycsICdmYXZvcml0ZScsIGV2ZW50KSkge1xuICAgIGZhdm9yaXRlQ2FyZChldmVudCk7XG4gIH0gZWxzZSBpZiAoZG9tVXBkYXRlcy5jb25uZWN0V2l0aENsYXNzTGlzdCgnY29udGFpbnMnLCAnYWRkLWJ1dHRvbicsIGV2ZW50KSB8fCBkb21VcGRhdGVzLmNvbm5lY3RXaXRoQ2xhc3NMaXN0KCdjb250YWlucycsICdhZGQnLCBldmVudCkpIHtcbiAgICBhZGRDYXJkVG9Db29rTGlzdChldmVudCk7XG4gIH0gZWxzZSBpZiAoZG9tVXBkYXRlcy5jb25uZWN0V2l0aENsYXNzTGlzdCgnY29udGFpbnMnLCAnY2FyZC1waWN0dXJlJywgZXZlbnQpKSB7XG4gICAgZGlzcGxheURpcmVjdGlvbnMoZXZlbnQpO1xuICB9IGVsc2UgaWYgKGRvbVVwZGF0ZXMuY29ubmVjdFdpdGhDbGFzc0xpc3QoJ2NvbnRhaW5zJywgJ2hvbWUnLCBldmVudCkpIHtcbiAgICBkb21VcGRhdGVzLmNvbm5lY3RXaXRoQ2xhc3NMaXN0KCdyZW1vdmUnLCAnaGlkZGVuJywgZXZlbnQsIHZpZXdGYXZvcml0ZXNCdXR0b24pO1xuICAgIGRvbVVwZGF0ZXMuZGlzcGxheUNhcmRzKGNvb2tib29rLnJlY2lwZXMsIGNhcmRBcmVhKTtcbiAgICBnZXRGYXZvcml0ZXMoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5RGlyZWN0aW9ucyhldmVudCkge1xuICBkb21VcGRhdGVzLmNvbm5lY3RXaXRoQ2xhc3NMaXN0KCdyZW1vdmUnLCAnaGlkZGVuJywgZXZlbnQsIHZpZXdGYXZvcml0ZXNCdXR0b24pO1xuICBjb25zdCBuZXdSZWNpcGVJbmZvID0gY29va2Jvb2sucmVjaXBlcy5maW5kKHJlY2lwZSA9PiByZWNpcGUuaWQgPT09IE51bWJlcihldmVudC50YXJnZXQuaWQpKTtcbiAgY29uc3QgcmVjaXBlT2JqZWN0ID0gbmV3IFJlY2lwZShuZXdSZWNpcGVJbmZvLCBpbmdyZWRpZW50RGF0YSk7XG4gIGNvbnN0IGNvc3QgPSByZWNpcGVPYmplY3QuY2FsY3VsYXRlQ29zdCgpO1xuICBjb25zdCBkb2xsYXJDb3N0ID0gKGNvc3QgLyAxMDApLnRvRml4ZWQoMik7XG4gIGRvbVVwZGF0ZXMuY29ubmVjdFdpdGhDbGFzc0xpc3QoJ2FkZCcsICdhbGwnLCBldmVudCwgY2FyZEFyZWEpO1xuICBkb21VcGRhdGVzLnBvcHVsYXRlUmVjaXBlQ2FyZChjYXJkQXJlYSwgcmVjaXBlT2JqZWN0LCBkb2xsYXJDb3N0LCBpbmdyZWRpZW50RGF0YSk7XG59XG5cbmZ1bmN0aW9uIGdldEZhdm9yaXRlcygpIHtcbiAgaWYgKHVzZXIuZmF2b3JpdGVSZWNpcGVzLmxlbmd0aCkge1xuICAgIHVzZXIuZmF2b3JpdGVSZWNpcGVzLmZvckVhY2gocmVjaXBlID0+IHtcbiAgICAgIGNvbnN0IHJlY2lwZUlEID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmZhdm9yaXRlJHtyZWNpcGUuaWR9YCk7XG4gICAgICBkb21VcGRhdGVzLmNvbm5lY3RXaXRoQ2xhc3NMaXN0KCdhZGQnLCAnZmF2b3JpdGUtYWN0aXZlJywgZXZlbnQsIHJlY2lwZUlEKTtcbiAgICB9KVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldFJlY2lwZXNUb0Nvb2soKSB7XG4gIGlmICh1c2VyLnJlY2lwZXNUb0Nvb2subGVuZ3RoKSB7XG4gICAgdXNlci5yZWNpcGVzVG9Db29rLmZvckVhY2gocmVjaXBlID0+IHtcbiAgICAgIGNvbnN0IHJlY2lwZUlEID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnJlY2lwZSR7cmVjaXBlLmlkfWApO1xuICAgICAgZG9tVXBkYXRlcy5jb25uZWN0V2l0aENsYXNzTGlzdCgnYWRkJywgJ2Nvb2stbGlzdC1hY3RpdmUnLCBldmVudCwgcmVjaXBlSUQpO1xuICAgIH0pXG4gIH1cbn1cblxuZnVuY3Rpb24gZGlzcGxheVNlYXJjaFJlY2lwZXMoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoLWlucHV0Jyk7XG4gIGNvbnN0IGZpbHRlcmVkUmVjaXBlcyA9IGNvb2tib29rLmZpbmRSZWNpcGUoc2VhcmNoSW5wdXQudmFsdWUsIGluZ3JlZGllbnREYXRhKTtcbiAgaWYgKGZpbHRlcmVkUmVjaXBlcy5sZW5ndGgpIHtcbiAgICBkb21VcGRhdGVzLmRpc3BsYXlDYXJkcyhmaWx0ZXJlZFJlY2lwZXMsIGNhcmRBcmVhKTtcbiAgfSBlbHNlIHtcbiAgICBkb21VcGRhdGVzLmRpc3BsYXlOb1Jlc3VsdHMoY2FyZEFyZWEpO1xuICB9XG59IiwiY2xhc3MgVXNlciB7XG4gICAgY29uc3RydWN0b3IoaWQsIG5hbWUsIHBhbnRyeSkge1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMucGFudHJ5ID0gcGFudHJ5O1xuICAgICAgICB0aGlzLmZhdm9yaXRlUmVjaXBlcyA9IFtdO1xuICAgICAgICB0aGlzLnJlY2lwZXNUb0Nvb2sgPSBbXTtcblxuICAgIH1cblxuICAgIGFkZFRvRmF2b3JpdGVzKHJlY2lwZSkge1xuICAgICAgICBpZiAoIXRoaXMuZmF2b3JpdGVSZWNpcGVzLmluY2x1ZGVzKHJlY2lwZSkpIHtcbiAgICAgICAgICAgIHRoaXMuZmF2b3JpdGVSZWNpcGVzLnB1c2gocmVjaXBlKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkVG9SZWNpcGVzVG9Db29rKHJlY2lwZSkge1xuICAgICAgICBpZiAoIXRoaXMucmVjaXBlc1RvQ29vay5pbmNsdWRlcyhyZWNpcGUpKSB7XG4gICAgICAgICAgICB0aGlzLnJlY2lwZXNUb0Nvb2sucHVzaChyZWNpcGUpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmVGcm9tRmF2b3JpdGVzKHJlY2lwZSkge1xuICAgICAgICBjb25zdCBpID0gdGhpcy5mYXZvcml0ZVJlY2lwZXMuaW5kZXhPZihyZWNpcGUpO1xuICAgICAgICB0aGlzLmZhdm9yaXRlUmVjaXBlcy5zcGxpY2UoaSwgMSlcbiAgICB9XG5cbiAgICByZW1vdmVGcm9tUmVjaXBlc1RvQ29vayhyZWNpcGUpIHtcbiAgICAgICAgY29uc3QgaSA9IHRoaXMucmVjaXBlc1RvQ29vay5pbmRleE9mKHJlY2lwZSk7XG4gICAgICAgIHRoaXMucmVjaXBlc1RvQ29vay5zcGxpY2UoaSwgMSlcbiAgICB9XG5cbiAgICBmaWx0ZXJGYXZvcml0ZXModGFnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZhdm9yaXRlUmVjaXBlcy5maWx0ZXIocmVjaXBlID0+IHJlY2lwZS50YWdzLmluY2x1ZGVzKHRhZykpO1xuICAgIH1cblxuICAgIGZpbHRlclJlY2lwZVRvQ29va3ModGFnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlY2lwZXNUb0Nvb2suZmlsdGVyKHJlY2lwZSA9PiByZWNpcGUudGFncy5pbmNsdWRlcyh0YWcpKTtcbiAgICB9XG5cbiAgICBmaW5kRmF2b3JpdGVzKHN0cmdUb1NyY2gpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmF2b3JpdGVSZWNpcGVzLmZpbHRlcihyZWNpcGUgPT5cbiAgICAgICAgICAgIHJlY2lwZS5uYW1lLmluY2x1ZGVzKHN0cmdUb1NyY2gpIHx8XG4gICAgICAgICAgICByZWNpcGUuaW5ncmVkaWVudHMuZmluZChpbmdyZWRpZW50ID0+IGluZ3JlZGllbnQubmFtZS5pbmNsdWRlcyhzdHJnVG9TcmNoKSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBmaW5kUmVjaXBlc1RvQ29vayhzdHJnVG9TcmNoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlY2lwZXNUb0Nvb2suZmlsdGVyKHJlY2lwZSA9PlxuICAgICAgICAgICAgcmVjaXBlLm5hbWUuaW5jbHVkZXMoc3RyZ1RvU3JjaCkgfHwgcmVjaXBlLmluZ3JlZGllbnRzLmZpbmQoaW5ncmVkaWVudCA9PiBpbmdyZWRpZW50Lm5hbWUuaW5jbHVkZXMoc3RyZ1RvU3JjaCkpXG4gICAgICAgIClcbiAgICB9XG5cbiAgICBjaGVja1BhbnRyeShpbmdyZWRpZW50c1RvRmluZCkge1xuXG4gICAgICAgIGxldCByZXN1bHRcblxuICAgICAgICBsZXQgcGFudHJ5TmFtZUxpc3QgPSBbXVxuXG4gICAgICAgIHRoaXMucGFudHJ5LmZvckVhY2gocGFudHJ5SXRlbSA9PiBwYW50cnlOYW1lTGlzdC5wdXNoKHBhbnRyeUl0ZW0uaWQpKVxuXG4gICAgICAgIGlmIChpbmdyZWRpZW50c1RvRmluZC5ldmVyeShpbmdyZWRpZW50ID0+IHBhbnRyeU5hbWVMaXN0LmluY2x1ZGVzKGluZ3JlZGllbnQuaWQpKSkge1xuICAgICAgICAgICAgcmVzdWx0ID0gJ1lvdSBoYXZlIHRoZSBpbmdyZWRpZW50cyEnXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgPSBpbmdyZWRpZW50c1RvRmluZC5yZWR1Y2UoKGFjYywgaW5ncmVkaWVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghaW5ncmVkaWVudHNUb0ZpbmQuZXZlcnkoaW5ncmVkaWVudCA9PiBwYW50cnlOYW1lTGlzdC5pbmNsdWRlcyhpbmdyZWRpZW50LmlkKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgYWNjW2luZ3JlZGllbnQubmFtZV0gPSBpbmdyZWRpZW50LnF1YW50aXR5LmFtb3VudFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gYWNjXG4gICAgICAgICAgICB9LCB7fSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFVzZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==