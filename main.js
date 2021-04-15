(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\cairo\Desktop\nutrition-analysis\nutrition-analysis\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BuAD":
/*!******************************************************!*\
  !*** ./src/app/pages/analysis/analysis.component.ts ***!
  \******************************************************/
/*! exports provided: AnalysisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalysisComponent", function() { return AnalysisComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_service_nutrition_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/service/nutrition.service */ "CIF4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");





function AnalysisComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AnalysisComponent_div_1_li_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r9);
} }
function AnalysisComponent_div_1_li_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r10);
} }
function AnalysisComponent_div_1_li_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r11);
} }
function AnalysisComponent_div_1_div_45_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnalysisComponent_div_1_div_45_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r14.Labels(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "show-more"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, "label"), " ");
} }
function AnalysisComponent_div_1_div_45_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnalysisComponent_div_1_div_45_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r16.lessLabels(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "show-less"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, "label"), " ");
} }
function AnalysisComponent_div_1_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AnalysisComponent_div_1_div_45_button_1_Template, 4, 6, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AnalysisComponent_div_1_div_45_button_2_Template, 4, 6, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.moreLabels);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.moreLabels);
} }
function AnalysisComponent_div_1_button_91_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnalysisComponent_div_1_button_91_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r18.moreDaily(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "show-more"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, "daily"), " ");
} }
function AnalysisComponent_div_1_div_92_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](40, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](45, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](50, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](55, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](60, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](65, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](70, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](75, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](80, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnalysisComponent_div_1_div_92_Template_button_click_82_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r20.lessDaily(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](84, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.Nutrition == null ? null : ctx_r8.Nutrition.totalDaily.K.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 49, ctx_r8.Nutrition == null ? null : ctx_r8.Nutrition.totalDaily.K.quantity, "1.2-2"), " ", ctx_r8.Nutrition == null ? null : ctx_r8.Nutrition.totalDaily.K.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.Nutrition == null ? null : ctx_r8.Nutrition.totalDaily.MG.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 52, ctx_r8.Nutrition == null ? null : ctx_r8.Nutrition.totalDaily.MG.quantity, "1.2-2"), " ", ctx_r8.Nutrition == null ? null : ctx_r8.Nutrition.totalDaily.MG.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.Nutrition == null ? null : ctx_r8.Nutrition.totalDaily.NA.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](15, 55, ctx_r8.Nutrition == null ? null : ctx_r8.Nutrition.totalDaily.NA.quantity, "1.2-2"), " ", ctx_r8.Nutrition == null ? null : ctx_r8.Nutrition.totalDaily.NA.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.Nutrition == null ? null : ctx_r8.Nutrition.totalDaily.NIA.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](20, 58, ctx_r8.Nutrition == null ? null : ctx_r8.Nutrition.totalDaily.NIA.quantity, "1.2-2"), " ", ctx_r8.Nutrition == null ? null : ctx_r8.Nutrition.totalDaily.NIA.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.Nutrition == null ? null : ctx_r8.Nutrition.totalDaily.P.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](25, 61, ctx_r8.Nutrition == null ? null : ctx_r8.Nutrition.totalDaily.P.quantity, "1.2-2"), " ", ctx_r8.Nutrition == null ? null : ctx_r8.Nutrition.totalDaily.P.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.Nutrition == null ? null : ctx_r8.Nutrition.totalDaily.PROCNT.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](30, 64, ctx_r8.Nutrition == null ? null : ctx_r8.Nutrition.totalDaily.PROCNT.quantity, "1.2-2"), " ", ctx_r8.Nutrition == null ? null : ctx_r8.Nutrition.totalDaily.PROCNT.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.Nutrition == null ? null : ctx_r8.Nutrition.totalDaily.RIBF.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](35, 67, ctx_r8.Nutrition == null ? null : ctx_r8.Nutrition.totalDaily.RIBF.quantity, "1.2-2"), " ", ctx_r8.Nutrition == null ? null : ctx_r8.Nutrition.totalDaily.RIBF.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.Nutrition == null ? null : ctx_r8.Nutrition.totalDaily.THIA.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](40, 70, ctx_r8.Nutrition == null ? null : ctx_r8.Nutrition.totalDaily.THIA.quantity, "1.2-2"), " ", ctx_r8.Nutrition == null ? null : ctx_r8.Nutrition.totalDaily.THIA.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.Nutrition == null ? null : ctx_r8.Nutrition.totalDaily.TOCPHA.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](45, 73, ctx_r8.Nutrition == null ? null : ctx_r8.Nutrition.totalDaily.TOCPHA.quantity, "1.2-2"), " ", ctx_r8.Nutrition == null ? null : ctx_r8.Nutrition.totalDaily.TOCPHA.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.Nutrition == null ? null : ctx_r8.Nutrition.totalDaily.VITA_RAE.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](50, 76, ctx_r8.Nutrition == null ? null : ctx_r8.Nutrition.totalDaily.VITA_RAE.quantity, "1.2-2"), " ", ctx_r8.Nutrition == null ? null : ctx_r8.Nutrition.totalDaily.VITA_RAE.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.Nutrition == null ? null : ctx_r8.Nutrition.totalDaily.VITB6A.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](55, 79, ctx_r8.Nutrition == null ? null : ctx_r8.Nutrition.totalDaily.VITB6A.quantity, "1.2-2"), " ", ctx_r8.Nutrition == null ? null : ctx_r8.Nutrition.totalDaily.VITB6A.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.Nutrition == null ? null : ctx_r8.Nutrition.totalDaily.VITB12.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](60, 82, ctx_r8.Nutrition == null ? null : ctx_r8.Nutrition.totalDaily.VITB12.quantity, "1.2-2"), " ", ctx_r8.Nutrition == null ? null : ctx_r8.Nutrition.totalDaily.VITB12.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.Nutrition == null ? null : ctx_r8.Nutrition.totalDaily.VITC.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](65, 85, ctx_r8.Nutrition == null ? null : ctx_r8.Nutrition.totalDaily.VITC.quantity, "1.2-2"), " ", ctx_r8.Nutrition == null ? null : ctx_r8.Nutrition.totalDaily.VITC.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.Nutrition == null ? null : ctx_r8.Nutrition.totalDaily.VITD.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](70, 88, ctx_r8.Nutrition == null ? null : ctx_r8.Nutrition.totalDaily.VITD.quantity, "1.2-2"), " ", ctx_r8.Nutrition == null ? null : ctx_r8.Nutrition.totalDaily.VITD.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.Nutrition == null ? null : ctx_r8.Nutrition.totalDaily.VITK1.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](75, 91, ctx_r8.Nutrition == null ? null : ctx_r8.Nutrition.totalDaily.VITK1.quantity, "1.2-2"), " ", ctx_r8.Nutrition == null ? null : ctx_r8.Nutrition.totalDaily.VITK1.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.Nutrition == null ? null : ctx_r8.Nutrition.totalDaily.ZN.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](80, 94, ctx_r8.Nutrition == null ? null : ctx_r8.Nutrition.totalDaily.ZN.quantity, "1.2-2"), " ", ctx_r8.Nutrition == null ? null : ctx_r8.Nutrition.totalDaily.ZN.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](84, 97, "show-less"), " ");
} }
function AnalysisComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, AnalysisComponent_div_1_li_34_Template, 2, 1, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, AnalysisComponent_div_1_li_40_Template, 2, 1, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, AnalysisComponent_div_1_li_43_Template, 2, 1, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](44, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, AnalysisComponent_div_1_div_45_Template, 3, 2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h6", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](48, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](49, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](54, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](59, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](64, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](69, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](74, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](79, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](84, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](89, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](91, AnalysisComponent_div_1_button_91_Template, 4, 6, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](92, AnalysisComponent_div_1_div_92_Template, 85, 99, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 41, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 43, "name")), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 45, ctx_r1.name), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 47, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 49, "count")), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.count, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 51, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 53, "calories")), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.Nutrition == null ? null : ctx_r1.Nutrition.calories, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 55, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 57, "totalWeight")), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.Nutrition == null ? null : ctx_r1.Nutrition.totalWeight, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 59, "Nutrition-cautions"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.Nutrition == null ? null : ctx_r1.Nutrition.cautions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](38, 61, "Nutrition-diet-Labels"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.Nutrition == null ? null : ctx_r1.Nutrition.dietLabels);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](44, 63, ctx_r1.Nutrition == null ? null : ctx_r1.Nutrition.healthLabels, 0, ctx_r1.manyLabels));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r1.Nutrition == null ? null : ctx_r1.Nutrition.healthLabels.length) < 5 ? false : true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](48, 67, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](49, 69, "totalDaily")), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.Nutrition == null ? null : ctx_r1.Nutrition.totalDaily.CA.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](54, 71, ctx_r1.Nutrition == null ? null : ctx_r1.Nutrition.totalDaily.CA.quantity, "1.2-2"), " ", ctx_r1.Nutrition == null ? null : ctx_r1.Nutrition.totalDaily.CA.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.Nutrition == null ? null : ctx_r1.Nutrition.totalDaily.CHOCDF.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](59, 74, ctx_r1.Nutrition == null ? null : ctx_r1.Nutrition.totalDaily.CHOCDF.quantity, "1.2-2"), " ", ctx_r1.Nutrition == null ? null : ctx_r1.Nutrition.totalDaily.CHOCDF.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.Nutrition == null ? null : ctx_r1.Nutrition.totalDaily.ENERC_KCAL.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](64, 77, ctx_r1.Nutrition == null ? null : ctx_r1.Nutrition.totalDaily.ENERC_KCAL.quantity, "1.2-2"), " ", ctx_r1.Nutrition == null ? null : ctx_r1.Nutrition.totalDaily.ENERC_KCAL.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.Nutrition == null ? null : ctx_r1.Nutrition.totalDaily.FASAT.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](69, 80, ctx_r1.Nutrition == null ? null : ctx_r1.Nutrition.totalDaily.FASAT.quantity, "1.2-2"), " ", ctx_r1.Nutrition == null ? null : ctx_r1.Nutrition.totalDaily.FASAT.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.Nutrition == null ? null : ctx_r1.Nutrition.totalDaily.FAT.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](74, 83, ctx_r1.Nutrition == null ? null : ctx_r1.Nutrition.totalDaily.FAT.quantity, "1.2-2"), " ", ctx_r1.Nutrition == null ? null : ctx_r1.Nutrition.totalDaily.FAT.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.Nutrition == null ? null : ctx_r1.Nutrition.totalDaily.FE.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](79, 86, ctx_r1.Nutrition == null ? null : ctx_r1.Nutrition.totalDaily.FE.quantity, "1.2-2"), " ", ctx_r1.Nutrition == null ? null : ctx_r1.Nutrition.totalDaily.FE.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.Nutrition == null ? null : ctx_r1.Nutrition.totalDaily.FIBTG.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](84, 89, ctx_r1.Nutrition == null ? null : ctx_r1.Nutrition.totalDaily.FIBTG.quantity, "1.2-2"), " ", ctx_r1.Nutrition == null ? null : ctx_r1.Nutrition.totalDaily.FIBTG.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.Nutrition == null ? null : ctx_r1.Nutrition.totalDaily.FOLDFE.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](89, 92, ctx_r1.Nutrition == null ? null : ctx_r1.Nutrition.totalDaily.FOLDFE.quantity, "1.2-2"), " ", ctx_r1.Nutrition == null ? null : ctx_r1.Nutrition.totalDaily.FOLDFE.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.daily);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.daily);
} }
const _c0 = function () { return ["/search"]; };
function AnalysisComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 4, "Oh"), "! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 6, "Something"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 8, "Home"), " ");
} }
class AnalysisComponent {
    constructor(_ActivatedRoute, _NutritionService, Router) {
        this._ActivatedRoute = _ActivatedRoute;
        this._NutritionService = _NutritionService;
        this.Router = Router;
        this.name = '';
        this.quantity = '';
        this.count = 0;
        this.spinner = true;
        this.daily = true;
        this.manyLabels = 4;
        this.moreLabels = true;
        this.error = false;
        this.name = this._ActivatedRoute.snapshot.paramMap.get('name');
        this.quantity = this._ActivatedRoute.snapshot.paramMap.get('quantity');
        this.count = this._ActivatedRoute.snapshot.paramMap.get('count');
    }
    ngOnInit() {
        this.getNutrition();
    }
    getNutrition() {
        this.spinner = true;
        this._NutritionService
            .getAnalysis(this.count, this.quantity, this.name)
            .subscribe((data) => {
            this.spinner = false;
            this.Nutrition = data;
            this.error = false;
        }, (err) => {
            this.spinner = false;
            this.error = true;
        });
    }
    moreDaily() {
        this.daily = false;
    }
    lessDaily() {
        this.daily = true;
    }
    Labels() {
        this.manyLabels = this.Nutrition.healthLabels.length;
        this.moreLabels = false;
    }
    lessLabels() {
        this.moreLabels = true;
        this.manyLabels = 4;
    }
    home() {
        this.Router.navigate(['/search']);
    }
}
AnalysisComponent.ɵfac = function AnalysisComponent_Factory(t) { return new (t || AnalysisComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_service_nutrition_service__WEBPACK_IMPORTED_MODULE_2__["NutritionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AnalysisComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AnalysisComponent, selectors: [["app-analysis"]], decls: 3, vars: 3, consts: [["class", "text-center", 4, "ngIf"], ["class", "container my-5", 4, "ngIf"], ["class", "mt-5 pt-5", 4, "ngIf"], [1, "text-center"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "sr-only"], [1, "container", "my-5"], [1, "row"], [1, "col-md-5", "mx-auto"], [1, "shadow", "bg-nav", "analysis", "p-3", "rounded"], [1, ""], [1, "float-item"], [1, "border-top", "pt-2"], ["class", "warn mb-3", 4, "ngFor", "ngForOf"], ["class", "mb-3", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], ["class", "text-center my-2", 4, "ngIf"], [1, "my-3", "text-center", "t_border", "border-top", "pt-2"], ["class", "but rounded-pill my-2 px-5 py-1", 3, "click", 4, "ngIf"], [4, "ngIf"], [1, "warn", "mb-3"], [1, "mb-3"], [1, "text-center", "my-2"], ["class", "but rounded-pill px-5 py-1", 3, "click", 4, "ngIf"], [1, "but", "rounded-pill", "px-5", "py-1", 3, "click"], [1, "but", "rounded-pill", "my-2", "px-5", "py-1", 3, "click"], [1, "mt-5", "pt-5"], [1, "container"], [1, "card", "error"], [1, "icon"], [1, "rounded-pill", "px-1", "py-1", 3, "routerLink"]], template: function AnalysisComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AnalysisComponent_div_0_Template, 4, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AnalysisComponent_div_1_Template, 93, 95, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AnalysisComponent_div_2_Template, 16, 11, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.spinner);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.spinner && (ctx.Nutrition == null ? null : ctx.Nutrition.calories) != 0 ? true :  false && false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.spinner && (ctx.Nutrition == null ? null : ctx.Nutrition.calories) == 0 ? true :  false || ctx.error);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["UpperCasePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DecimalPipe"]], styles: [".card[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  padding: 4rem;\n  color: white;\n  border-radius: 0.25rem;\n  border: none !important;\n}\n.card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  top: 0;\n  right: 20%;\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  background: linear-gradient(-90deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0) 20%);\n}\n.card[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  position: relative;\n  width: 4rem;\n  height: 4rem;\n  border-radius: 50%;\n  border: 1px solid white;\n  margin: 0 auto;\n}\n.card[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:after, .card[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:before {\n  position: absolute;\n  top: 1rem;\n  left: 50%;\n  content: \"\";\n  width: 2rem;\n  height: 0.75rem;\n  border: 1px solid white;\n}\n.error[_ngcontent-%COMP%] {\n  background: linear-gradient(298deg, #da2c4d, #f8ab37);\n}\n.error[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:before, .error[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:after {\n  top: 50%;\n  transform: translate(-50%, -50%) rotate(45deg);\n  height: 0rem;\n}\n.error[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:after {\n  transform: translate(-50%, -50%) rotate(-45deg);\n}\n.error[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  border: 1px solid #fff;\n  color: #fff;\n  cursor: pointer !important;\n  z-index: 5555555555555;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhbmFseXNpcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNDLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFBRDtBQUNDO0VBQ0MsV0FBQTtFQUNBLE1BQUE7RUFBUSxVQUFBO0VBQVksU0FBQTtFQUFXLE9BQUE7RUFDL0Isa0JBQUE7RUFDQSwwRkFBQTtBQUlGO0FBREM7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUFHRjtBQURFO0VBQ0Msa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUVBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FBRUg7QUFPQTtFQUNDLHFEQUFBO0FBSkQ7QUFPRTtFQUNDLFFBQUE7RUFDQSw4Q0FBQTtFQUNBLFlBQUE7QUFMSDtBQVFFO0VBQ0MsK0NBQUE7QUFOSDtBQWFJO0VBQ0ksc0JBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtBQVZSIiwiZmlsZSI6ImFuYWx5c2lzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5jYXJkIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdHBhZGRpbmc6IDRyZW07XHJcblx0Y29sb3I6IHdoaXRlO1xyXG5cdGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcblx0Ym9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcblx0JjphZnRlciB7XHJcblx0XHRjb250ZW50OiAnJztcclxuXHRcdHRvcDogMDsgcmlnaHQ6IDIwJTsgYm90dG9tOiAwOyBsZWZ0OiAwO1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC05MGRlZywgcmdiYSh3aGl0ZSwgMC4wOCksIHJnYmEod2hpdGUsIDApIDIwJSk7XHJcblx0fVxyXG5cdFxyXG5cdC5pY29uIHtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdHdpZHRoOiA0cmVtO1xyXG5cdFx0aGVpZ2h0OiA0cmVtO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0Ym9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcblx0XHRtYXJnaW46IDAgYXV0bztcclxuXHRcdFxyXG5cdFx0JjphZnRlciwgJjpiZWZvcmUge1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdHRvcDogMXJlbTtcclxuXHRcdFx0bGVmdDogNTAlO1xyXG5cclxuXHRcdFx0Y29udGVudDogJyc7XHJcblx0XHRcdHdpZHRoOiAycmVtO1xyXG5cdFx0XHRoZWlnaHQ6IDAuNzVyZW07XHJcblx0XHRcdGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHRcclxufVxyXG5cclxuXHJcblxyXG4uZXJyb3Ige1xyXG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyOThkZWcsICNkYTJjNGQsI2Y4YWIzNyk7XHJcblx0XHJcblx0Lmljb24ge1xyXG5cdFx0JjpiZWZvcmUsICY6YWZ0ZXIge1xyXG5cdFx0XHR0b3A6IDUwJTtcclxuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDQ1ZGVnKTtcclxuXHRcdFx0aGVpZ2h0OiAwcmVtO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQmOmFmdGVyIHtcclxuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKC00NWRlZyk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4uZXJyb3IgXHJcbntcclxuICAgIGF7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICAgICAgICBjb2xvcjogI2ZmZiA7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgei1pbmRleDogNTU1NTU1NTU1NTU1NTtcclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ "CIF4":
/*!***************************************************!*\
  !*** ./src/app/core/service/nutrition.service.ts ***!
  \***************************************************/
/*! exports provided: NutritionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NutritionService", function() { return NutritionService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class NutritionService {
    constructor(_httpClient) {
        this._httpClient = _httpClient;
        this.Base_url = `https://api.edamam.com/api/nutrition-data?app_id=b92dcd8f&app_key=229e9d381c70e9e1a3bbf3f8f5c01e76&ingr=`;
    }
    /*
        many %20 quantity %20 name
    */
    getAnalysis(count, quantity, name) {
        return this._httpClient.get(this.Base_url + `${count}%20${quantity}%20${name}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handelError));
    }
    handelError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            errorMessage = `Error: ${error.error.message}`;
        }
        else {
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(errorMessage);
    }
}
NutritionService.ɵfac = function NutritionService_Factory(t) { return new (t || NutritionService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
NutritionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: NutritionService, factory: NutritionService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "HwYc":
/*!********************************************************!*\
  !*** ./src/app/component/loading/loading.component.ts ***!
  \********************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LoadingComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoadingComponent.ɵfac = function LoadingComponent_Factory(t) { return new (t || LoadingComponent)(); };
LoadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingComponent, selectors: [["app-loading"]], decls: 8, vars: 0, consts: [[1, "loading-app"], [1, "preloader", "loading"], [1, "slice"]], template: function LoadingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@keyframes preload-show-1 {\n  from {\n    transform: rotateZ(60deg) rotateY(-90deg) rotateX(0deg);\n    border-left-color: #9c2f2f;\n  }\n}\n@keyframes preload-hide-1 {\n  to {\n    transform: rotateZ(60deg) rotateY(-90deg) rotateX(0deg);\n    border-left-color: #9c2f2f;\n  }\n}\n@keyframes preload-cycle-1 {\n  5% {\n    transform: rotateZ(60deg) rotateY(90deg) rotateX(0deg);\n    border-left-color: #9c2f2f;\n  }\n  10%, 75% {\n    transform: rotateZ(60deg) rotateY(0) rotateX(0deg);\n    border-left-color: #f7484e;\n  }\n  80%, 100% {\n    transform: rotateZ(60deg) rotateY(90deg) rotateX(0deg);\n    border-left-color: #9c2f2f;\n  }\n}\n@keyframes preload-show-2 {\n  from {\n    transform: rotateZ(120deg) rotateY(-90deg) rotateX(0deg);\n    border-left-color: #9c2f2f;\n  }\n}\n@keyframes preload-hide-2 {\n  to {\n    transform: rotateZ(120deg) rotateY(-90deg) rotateX(0deg);\n    border-left-color: #9c2f2f;\n  }\n}\n@keyframes preload-cycle-2 {\n  10% {\n    transform: rotateZ(120deg) rotateY(90deg) rotateX(0deg);\n    border-left-color: #9c2f2f;\n  }\n  15%, 70% {\n    transform: rotateZ(120deg) rotateY(0) rotateX(0deg);\n    border-left-color: #f7484e;\n  }\n  75%, 100% {\n    transform: rotateZ(120deg) rotateY(90deg) rotateX(0deg);\n    border-left-color: #9c2f2f;\n  }\n}\n@keyframes preload-show-3 {\n  from {\n    transform: rotateZ(180deg) rotateY(-90deg) rotateX(0deg);\n    border-left-color: #9c2f2f;\n  }\n}\n@keyframes preload-hide-3 {\n  to {\n    transform: rotateZ(180deg) rotateY(-90deg) rotateX(0deg);\n    border-left-color: #9c2f2f;\n  }\n}\n@keyframes preload-cycle-3 {\n  15% {\n    transform: rotateZ(180deg) rotateY(90deg) rotateX(0deg);\n    border-left-color: #9c2f2f;\n  }\n  20%, 65% {\n    transform: rotateZ(180deg) rotateY(0) rotateX(0deg);\n    border-left-color: #f7484e;\n  }\n  70%, 100% {\n    transform: rotateZ(180deg) rotateY(90deg) rotateX(0deg);\n    border-left-color: #9c2f2f;\n  }\n}\n@keyframes preload-show-4 {\n  from {\n    transform: rotateZ(240deg) rotateY(-90deg) rotateX(0deg);\n    border-left-color: #9c2f2f;\n  }\n}\n@keyframes preload-hide-4 {\n  to {\n    transform: rotateZ(240deg) rotateY(-90deg) rotateX(0deg);\n    border-left-color: #9c2f2f;\n  }\n}\n@keyframes preload-cycle-4 {\n  20% {\n    transform: rotateZ(240deg) rotateY(90deg) rotateX(0deg);\n    border-left-color: #9c2f2f;\n  }\n  25%, 60% {\n    transform: rotateZ(240deg) rotateY(0) rotateX(0deg);\n    border-left-color: #f7484e;\n  }\n  65%, 100% {\n    transform: rotateZ(240deg) rotateY(90deg) rotateX(0deg);\n    border-left-color: #9c2f2f;\n  }\n}\n@keyframes preload-show-5 {\n  from {\n    transform: rotateZ(300deg) rotateY(-90deg) rotateX(0deg);\n    border-left-color: #9c2f2f;\n  }\n}\n@keyframes preload-hide-5 {\n  to {\n    transform: rotateZ(300deg) rotateY(-90deg) rotateX(0deg);\n    border-left-color: #9c2f2f;\n  }\n}\n@keyframes preload-cycle-5 {\n  25% {\n    transform: rotateZ(300deg) rotateY(90deg) rotateX(0deg);\n    border-left-color: #9c2f2f;\n  }\n  30%, 55% {\n    transform: rotateZ(300deg) rotateY(0) rotateX(0deg);\n    border-left-color: #f7484e;\n  }\n  60%, 100% {\n    transform: rotateZ(300deg) rotateY(90deg) rotateX(0deg);\n    border-left-color: #9c2f2f;\n  }\n}\n@keyframes preload-show-6 {\n  from {\n    transform: rotateZ(360deg) rotateY(-90deg) rotateX(0deg);\n    border-left-color: #9c2f2f;\n  }\n}\n@keyframes preload-hide-6 {\n  to {\n    transform: rotateZ(360deg) rotateY(-90deg) rotateX(0deg);\n    border-left-color: #9c2f2f;\n  }\n}\n@keyframes preload-cycle-6 {\n  30% {\n    transform: rotateZ(360deg) rotateY(90deg) rotateX(0deg);\n    border-left-color: #9c2f2f;\n  }\n  35%, 50% {\n    transform: rotateZ(360deg) rotateY(0) rotateX(0deg);\n    border-left-color: #f7484e;\n  }\n  55%, 100% {\n    transform: rotateZ(360deg) rotateY(90deg) rotateX(0deg);\n    border-left-color: #9c2f2f;\n  }\n}\n@keyframes preload-flip {\n  0% {\n    transform: rotateY(0deg) rotateZ(-60deg);\n  }\n  100% {\n    transform: rotateY(360deg) rotateZ(-60deg);\n  }\n}\n.loading-app[_ngcontent-%COMP%] {\n  background-color: #1F2029;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 10000000000000003000000000 !important;\n}\n.preloader[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  font-size: 20px;\n  display: block;\n  width: 3.75em;\n  height: 4.25em;\n  margin-left: -1.875em;\n  margin-top: -2.125em;\n  transform-origin: center center;\n  transform: rotateY(180deg) rotateZ(-60deg);\n}\n.preloader[_ngcontent-%COMP%]   .slice[_ngcontent-%COMP%] {\n  border-top: 1.125em solid transparent;\n  border-right: none;\n  border-bottom: 1em solid transparent;\n  border-left: 1.875em solid #f7484e;\n  position: absolute;\n  top: 0px;\n  left: 50%;\n  transform-origin: left bottom;\n  border-radius: 3px 3px 0 0;\n}\n.preloader[_ngcontent-%COMP%]   .slice[_ngcontent-%COMP%]:nth-child(1) {\n  transform: rotateZ(60deg) rotateY(0deg) rotateX(0);\n  animation: 0.15s linear 0.82s preload-hide-1 both 1;\n}\n.preloader[_ngcontent-%COMP%]   .slice[_ngcontent-%COMP%]:nth-child(2) {\n  transform: rotateZ(120deg) rotateY(0deg) rotateX(0);\n  animation: 0.15s linear 0.74s preload-hide-2 both 1;\n}\n.preloader[_ngcontent-%COMP%]   .slice[_ngcontent-%COMP%]:nth-child(3) {\n  transform: rotateZ(180deg) rotateY(0deg) rotateX(0);\n  animation: 0.15s linear 0.66s preload-hide-3 both 1;\n}\n.preloader[_ngcontent-%COMP%]   .slice[_ngcontent-%COMP%]:nth-child(4) {\n  transform: rotateZ(240deg) rotateY(0deg) rotateX(0);\n  animation: 0.15s linear 0.58s preload-hide-4 both 1;\n}\n.preloader[_ngcontent-%COMP%]   .slice[_ngcontent-%COMP%]:nth-child(5) {\n  transform: rotateZ(300deg) rotateY(0deg) rotateX(0);\n  animation: 0.15s linear 0.5s preload-hide-5 both 1;\n}\n.preloader[_ngcontent-%COMP%]   .slice[_ngcontent-%COMP%]:nth-child(6) {\n  transform: rotateZ(360deg) rotateY(0deg) rotateX(0);\n  animation: 0.15s linear 0.42s preload-hide-6 both 1;\n}\n.preloader.loading[_ngcontent-%COMP%] {\n  animation: 2s preload-flip steps(2) infinite both;\n}\n.preloader.loading[_ngcontent-%COMP%]   .slice[_ngcontent-%COMP%]:nth-child(1) {\n  transform: rotateZ(60deg) rotateY(90deg) rotateX(0);\n  animation: 2s preload-cycle-1 linear infinite both;\n}\n.preloader.loading[_ngcontent-%COMP%]   .slice[_ngcontent-%COMP%]:nth-child(2) {\n  transform: rotateZ(120deg) rotateY(90deg) rotateX(0);\n  animation: 2s preload-cycle-2 linear infinite both;\n}\n.preloader.loading[_ngcontent-%COMP%]   .slice[_ngcontent-%COMP%]:nth-child(3) {\n  transform: rotateZ(180deg) rotateY(90deg) rotateX(0);\n  animation: 2s preload-cycle-3 linear infinite both;\n}\n.preloader.loading[_ngcontent-%COMP%]   .slice[_ngcontent-%COMP%]:nth-child(4) {\n  transform: rotateZ(240deg) rotateY(90deg) rotateX(0);\n  animation: 2s preload-cycle-4 linear infinite both;\n}\n.preloader.loading[_ngcontent-%COMP%]   .slice[_ngcontent-%COMP%]:nth-child(5) {\n  transform: rotateZ(300deg) rotateY(90deg) rotateX(0);\n  animation: 2s preload-cycle-5 linear infinite both;\n}\n.preloader.loading[_ngcontent-%COMP%]   .slice[_ngcontent-%COMP%]:nth-child(6) {\n  transform: rotateZ(360deg) rotateY(90deg) rotateX(0);\n  animation: 2s preload-cycle-6 linear infinite both;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsb2FkaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNDO0VBQ0M7SUFDQyx1REFBQTtJQUNBLDBCQUFBO0VBQUQ7QUFDRjtBQUVDO0VBQ0M7SUFDQyx1REFBQTtJQUNBLDBCQUFBO0VBQUQ7QUFDRjtBQUdDO0VBS0M7SUFDQyxzREFBQTtJQUNBLDBCQUFBO0VBTEQ7RUFPQTtJQUVDLGtEQUFBO0lBQ0EsMEJBQUE7RUFORDtFQVNBO0lBRUMsc0RBQUE7SUFDQSwwQkFBQTtFQVJEO0FBQ0Y7QUF4QkM7RUFDQztJQUNDLHdEQUFBO0lBQ0EsMEJBQUE7RUEwQkQ7QUFDRjtBQXhCQztFQUNDO0lBQ0Msd0RBQUE7SUFDQSwwQkFBQTtFQTBCRDtBQUNGO0FBdkJDO0VBS0M7SUFDQyx1REFBQTtJQUNBLDBCQUFBO0VBcUJEO0VBbkJBO0lBRUMsbURBQUE7SUFDQSwwQkFBQTtFQW9CRDtFQWpCQTtJQUVDLHVEQUFBO0lBQ0EsMEJBQUE7RUFrQkQ7QUFDRjtBQWxEQztFQUNDO0lBQ0Msd0RBQUE7SUFDQSwwQkFBQTtFQW9ERDtBQUNGO0FBbERDO0VBQ0M7SUFDQyx3REFBQTtJQUNBLDBCQUFBO0VBb0REO0FBQ0Y7QUFqREM7RUFLQztJQUNDLHVEQUFBO0lBQ0EsMEJBQUE7RUErQ0Q7RUE3Q0E7SUFFQyxtREFBQTtJQUNBLDBCQUFBO0VBOENEO0VBM0NBO0lBRUMsdURBQUE7SUFDQSwwQkFBQTtFQTRDRDtBQUNGO0FBNUVDO0VBQ0M7SUFDQyx3REFBQTtJQUNBLDBCQUFBO0VBOEVEO0FBQ0Y7QUE1RUM7RUFDQztJQUNDLHdEQUFBO0lBQ0EsMEJBQUE7RUE4RUQ7QUFDRjtBQTNFQztFQUtDO0lBQ0MsdURBQUE7SUFDQSwwQkFBQTtFQXlFRDtFQXZFQTtJQUVDLG1EQUFBO0lBQ0EsMEJBQUE7RUF3RUQ7RUFyRUE7SUFFQyx1REFBQTtJQUNBLDBCQUFBO0VBc0VEO0FBQ0Y7QUF0R0M7RUFDQztJQUNDLHdEQUFBO0lBQ0EsMEJBQUE7RUF3R0Q7QUFDRjtBQXRHQztFQUNDO0lBQ0Msd0RBQUE7SUFDQSwwQkFBQTtFQXdHRDtBQUNGO0FBckdDO0VBS0M7SUFDQyx1REFBQTtJQUNBLDBCQUFBO0VBbUdEO0VBakdBO0lBRUMsbURBQUE7SUFDQSwwQkFBQTtFQWtHRDtFQS9GQTtJQUVDLHVEQUFBO0lBQ0EsMEJBQUE7RUFnR0Q7QUFDRjtBQWhJQztFQUNDO0lBQ0Msd0RBQUE7SUFDQSwwQkFBQTtFQWtJRDtBQUNGO0FBaElDO0VBQ0M7SUFDQyx3REFBQTtJQUNBLDBCQUFBO0VBa0lEO0FBQ0Y7QUEvSEM7RUFLQztJQUNDLHVEQUFBO0lBQ0EsMEJBQUE7RUE2SEQ7RUEzSEE7SUFFQyxtREFBQTtJQUNBLDBCQUFBO0VBNEhEO0VBekhBO0lBRUMsdURBQUE7SUFDQSwwQkFBQTtFQTBIRDtBQUNGO0FBdEhBO0VBQ0M7SUFDQyx3Q0FBQTtFQXdIQTtFQXRIRDtJQUNDLDBDQUFBO0VBd0hBO0FBQ0Y7QUFySEE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFFQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw4Q0FBQTtBQXNISjtBQXBIQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDRCxlQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQyxvQkFBQTtFQUNELCtCQUFBO0VBQ0EsMENBQUE7QUF1SEQ7QUFySEM7RUFDQyxxQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0FBdUhGO0FBbkhHO0VBQ0Msa0RBQUE7RUFDQSxtREFBQTtBQXFISjtBQXZIRztFQUNDLG1EQUFBO0VBQ0EsbURBQUE7QUF5SEo7QUEzSEc7RUFDQyxtREFBQTtFQUNBLG1EQUFBO0FBNkhKO0FBL0hHO0VBQ0MsbURBQUE7RUFDQSxtREFBQTtBQWlJSjtBQW5JRztFQUNDLG1EQUFBO0VBQ0Esa0RBQUE7QUFxSUo7QUF2SUc7RUFDQyxtREFBQTtFQUNBLG1EQUFBO0FBeUlKO0FBcElDO0VBQ0MsaURBQUE7QUFzSUY7QUFwSUk7RUFDQyxtREFBQTtFQUNBLGtEQUFBO0FBc0lMO0FBeElJO0VBQ0Msb0RBQUE7RUFDQSxrREFBQTtBQTBJTDtBQTVJSTtFQUNDLG9EQUFBO0VBQ0Esa0RBQUE7QUE4SUw7QUFoSkk7RUFDQyxvREFBQTtFQUNBLGtEQUFBO0FBa0pMO0FBcEpJO0VBQ0Msb0RBQUE7RUFDQSxrREFBQTtBQXNKTDtBQXhKSTtFQUNDLG9EQUFBO0VBQ0Esa0RBQUE7QUEwSkwiLCJmaWxlIjoibG9hZGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb3IgJGkgZnJvbSAxIHRocm91Z2ggNiB7XHJcblx0QGtleWZyYW1lcyBwcmVsb2FkLXNob3ctI3skaX17XHJcblx0XHRmcm9te1xyXG5cdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZVooNjAqICRpICsgZGVnKSByb3RhdGVZKC05MGRlZykgcm90YXRlWCgwZGVnKTtcclxuXHRcdFx0Ym9yZGVyLWxlZnQtY29sb3I6ICM5YzJmMmY7XHJcblx0XHR9XHJcblx0fVxyXG5cdEBrZXlmcmFtZXMgcHJlbG9hZC1oaWRlLSN7JGl9e1xyXG5cdFx0dG97XHJcblx0XHRcdHRyYW5zZm9ybTogcm90YXRlWig2MCogJGkgKyBkZWcpIHJvdGF0ZVkoLTkwZGVnKSByb3RhdGVYKDBkZWcpO1xyXG5cdFx0XHRib3JkZXItbGVmdC1jb2xvcjogIzljMmYyZjtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdEBrZXlmcmFtZXMgcHJlbG9hZC1jeWNsZS0jeyRpfXtcclxuXHRcdFxyXG5cdFx0JHN0YXJ0SW5kZXg6ICRpKjU7XHJcblx0XHQkcmV2ZXJzZUluZGV4OiAoODAgLSAkaSo1KTtcclxuXHJcblx0XHQjeyRzdGFydEluZGV4ICogMSV9e1xyXG5cdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZVooNjAqICRpICsgZGVnKSByb3RhdGVZKDkwZGVnKSByb3RhdGVYKDBkZWcpO1xyXG5cdFx0XHRib3JkZXItbGVmdC1jb2xvcjogIzljMmYyZjtcclxuXHRcdH1cclxuXHRcdCN7JHN0YXJ0SW5kZXggKyA1JX0sXHJcblx0XHQjeyRyZXZlcnNlSW5kZXggKiAxJX17XHJcblx0XHRcdHRyYW5zZm9ybTogcm90YXRlWig2MCogJGkgKyBkZWcpIHJvdGF0ZVkoMCkgcm90YXRlWCgwZGVnKTtcclxuXHRcdFx0Ym9yZGVyLWxlZnQtY29sb3I6ICNmNzQ4NGU7XHJcblx0XHR9XHJcblxyXG5cdFx0I3skcmV2ZXJzZUluZGV4ICsgNSV9LFxyXG5cdFx0MTAwJXtcclxuXHRcdFx0dHJhbnNmb3JtOiByb3RhdGVaKDYwKiAkaSArIGRlZykgcm90YXRlWSg5MGRlZykgcm90YXRlWCgwZGVnKTtcclxuXHRcdFx0Ym9yZGVyLWxlZnQtY29sb3I6ICM5YzJmMmY7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHByZWxvYWQtZmxpcHtcclxuXHQwJXtcclxuXHRcdHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKSByb3RhdGVaKC02MGRlZyk7XHJcblx0fVxyXG5cdDEwMCV7XHJcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZVkoMzYwZGVnKSByb3RhdGVaKC02MGRlZyk7XHJcblx0fVxyXG59XHJcblxyXG4ubG9hZGluZy1hcHB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUYyMDI5O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG5cclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgei1pbmRleDogOTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OSAhaW1wb3J0YW50O1xyXG59XHJcbi5wcmVsb2FkZXJ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuXHRmb250LXNpemU6IDIwcHg7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0d2lkdGg6IDMuNzVlbTtcclxuXHRoZWlnaHQ6IDQuMjVlbTtcclxuXHRtYXJnaW4tbGVmdDogLTEuODc1ZW07XHJcbiAgbWFyZ2luLXRvcDogLTIuMTI1ZW07XHJcblx0dHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcclxuXHR0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKSByb3RhdGVaKC02MGRlZyk7XHJcblxyXG5cdC5zbGljZXtcclxuXHRcdGJvcmRlci10b3A6IDEuMTI1ZW0gc29saWQgdHJhbnNwYXJlbnQ7XHJcblx0XHRib3JkZXItcmlnaHQ6IG5vbmU7XHJcblx0XHRib3JkZXItYm90dG9tOiAxZW0gc29saWQgdHJhbnNwYXJlbnQ7XHJcblx0XHRib3JkZXItbGVmdDogMS44NzVlbSBzb2xpZCAjZjc0ODRlO1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0dG9wOiAwcHg7XHJcblx0XHRsZWZ0OiA1MCU7XHJcblx0XHR0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDNweCAzcHggMCAwO1xyXG5cdH1cclxuXHJcblx0QGZvciAkaSBmcm9tIDEgdGhyb3VnaCA2IHtcclxuXHQgIC5zbGljZTpudGgtY2hpbGQoI3skaX0pIHsgXHJcblx0ICBcdHRyYW5zZm9ybTogcm90YXRlWig2MCogJGkgKyBkZWcpIHJvdGF0ZVkoMGRlZykgcm90YXRlWCgwKTtcclxuXHQgIFx0YW5pbWF0aW9uOiAuMTVzIGxpbmVhciAuOSAtICRpKi4wOHMgcHJlbG9hZC1oaWRlLSN7JGl9IGJvdGggMTtcclxuXHQgIH1cclxuXHR9XHJcblxyXG5cclxuXHQmLmxvYWRpbmd7XHJcblx0XHRhbmltYXRpb246IDJzIHByZWxvYWQtZmxpcCBzdGVwcygyKSBpbmZpbml0ZSBib3RoO1xyXG5cdFx0QGZvciAkaSBmcm9tIDEgdGhyb3VnaCA2IHtcclxuXHRcdCAgLnNsaWNlOm50aC1jaGlsZCgjeyRpfSkgeyBcclxuXHRcdCAgXHR0cmFuc2Zvcm06IHJvdGF0ZVooNjAqICRpICsgZGVnKSByb3RhdGVZKDkwZGVnKSByb3RhdGVYKDApO1xyXG5cdFx0ICBcdGFuaW1hdGlvbjogMnMgcHJlbG9hZC1jeWNsZS0jeyRpfSBsaW5lYXIgaW5maW5pdGUgYm90aDtcclxuXHRcdCAgfVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcbn0iXX0= */"] });


/***/ }),

/***/ "Q09e":
/*!************************************************!*\
  !*** ./src/app/component/nav/nav.component.ts ***!
  \************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function NavComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.switchLang("ar"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0627\u0644\u0639\u0631\u0628\u064A\u0647 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.switchLang("en"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " English ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/"]; };
class NavComponent {
    constructor(translate) {
        this.translate = translate;
        this.dir = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mood = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.lang = "";
        this.checked = 'light';
        this.lang = localStorage.getItem("lang") || "en";
        translate.setDefaultLang(this.lang);
    }
    ngOnInit() {
        this.checked = localStorage.getItem("mood") || 'light';
    }
    switchLang(lang) {
        localStorage.setItem("lang", lang);
        this.lang = lang;
        this.translate.use(lang);
        if (lang == "ar") {
            localStorage.setItem("dir", "rtl");
            this.dir.emit("rtl");
        }
        else {
            localStorage.setItem("dir", "ltr");
            this.dir.emit("ltr");
        }
    }
    change() {
        this.mood.emit("dark");
        localStorage.setItem("mood", 'dark');
    }
    changeMood(event) {
        let body = document.getElementsByTagName('body')[0];
        let e = event.target.checked;
        if (e == true) {
            this.mood.emit("dark");
            localStorage.setItem("mood", 'dark');
        }
        else {
            this.mood.emit("light");
            localStorage.setItem("mood", 'light');
        }
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"])); };
NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], outputs: { dir: "dir", mood: "mood" }, decls: 17, vars: 8, consts: [[1, "d-flex", "shadow", "bg-nav", "p-2", "middle", "fixed-top"], [1, "d-flex", "logo", "middle", "justify-content-center", "align-items-center"], [3, "routerLink"], [1, "m__fix-auto", "pt-1", "middle"], ["class", "language-change but rounded-pill", 3, "click", 4, "ngIf"], [1, "d-flex", "justify-content-center", "align-items-center", "mx-3", "middle"], [1, "container-switch"], ["for", "checkbox", "title", "Change color scheme to dark mode", 1, "switch"], ["type", "checkbox", "id", "checkbox", 3, "checked", "change"], [1, "slider", "round"], [1, "toggle-sun"], [1, "toggle-moon"], [1, "language-change", "but", "rounded-pill", 3, "click"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NavComponent_button_6_Template, 2, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NavComponent_button_7_Template, 2, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function NavComponent_Template_input_change_11_listener($event) { return ctx.changeMood($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u2600\uFE0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\uD83C\uDF19");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, "logo"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.lang === "en" ? true : false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.lang === "ar" ? true : false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.checked === "dark" ? true : false);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]], styles: [".middle[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n\n.language-change[_ngcontent-%COMP%] {\n  padding: 5px 15px;\n  border: none !important;\n}\n\n.container-switch[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n\n.container-switch[_ngcontent-%COMP%]   .switch[_ngcontent-%COMP%] {\n  display: flex;\n  height: 36px;\n  position: relative;\n  width: 70px;\n  cursor: pointer;\n}\n\n.container-switch[_ngcontent-%COMP%]   .switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.container-switch[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%] {\n  background-color: #101211;\n  border: 1px solid #000;\n  bottom: 0;\n  cursor: pointer;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  transition: 0.4s;\n}\n\n.container-switch[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]:before {\n  background-color: #333;\n  border: 1px solid #000;\n  bottom: 3px;\n  content: \"\";\n  height: 26px;\n  left: 4px;\n  position: absolute;\n  transition: 0.4s;\n  width: 26px;\n  z-index: 421;\n}\n\n.container-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%] {\n  background-color: #CFCFCF;\n}\n\n.container-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]:before {\n  transform: translateX(34px);\n  border-color: #CFCFCF;\n  background-color: #EFEFEF;\n}\n\n.container-switch[_ngcontent-%COMP%]   .slider.round[_ngcontent-%COMP%] {\n  border-radius: 34px;\n}\n\n.container-switch[_ngcontent-%COMP%]   .slider.round[_ngcontent-%COMP%]:before {\n  border-radius: 50%;\n}\n\n.container-switch[_ngcontent-%COMP%]   .toggle-moon[_ngcontent-%COMP%], .container-switch[_ngcontent-%COMP%]   .toggle-sun[_ngcontent-%COMP%] {\n  width: 50%;\n  text-align: center;\n  padding: 0.25em;\n  position: relative;\n  z-index: 420;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxuYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxzQkFBQTtBQUFKOztBQUdBO0VBQ0ksaUJBQUE7RUFDQSx1QkFBQTtBQUFKOztBQUdBO0VBQ0ksc0JBQUE7QUFBSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUdFO0VBQ0UsYUFBQTtBQURKOztBQUlFO0VBQ0UseUJBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxnQkFBQTtBQUZKOztBQUtFO0VBQ0Usc0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFISjs7QUFNRTtFQUNFLHlCQUFBO0FBSko7O0FBT0U7RUFDRSwyQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUFMSjs7QUFRRTtFQUNFLG1CQUFBO0FBTko7O0FBU0U7RUFDRSxrQkFBQTtBQVBKOztBQVVFO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQVJKIiwiZmlsZSI6Im5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5taWRkbGVcclxue1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHJcbn1cclxuLmxhbmd1YWdlLWNoYW5nZXtcclxuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xyXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcbi5jb250YWluZXItc3dpdGNoe1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHJcbi5zd2l0Y2gge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogMzZweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICAuc3dpdGNoIGlucHV0IHtcclxuICAgIGRpc3BsYXk6bm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLnNsaWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTAxMjExO1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjMDAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgdHJhbnNpdGlvbjogLjRzO1xyXG4gIH1cclxuICBcclxuICAuc2xpZGVyOmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjMDAwO1xyXG4gICAgYm90dG9tOiAzcHg7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgbGVmdDogNHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdHJhbnNpdGlvbjogLjRzO1xyXG4gICAgd2lkdGg6IDI2cHg7XHJcbiAgICB6LWluZGV4OjQyMTtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0NGQ0ZDRjtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzNHB4KTtcclxuICAgIGJvcmRlci1jb2xvcjojQ0ZDRkNGO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojRUZFRkVGO1xyXG4gIH1cclxuICBcclxuICAuc2xpZGVyLnJvdW5kIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDM0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zbGlkZXIucm91bmQ6YmVmb3JlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB9XHJcbiAgXHJcbiAgLnRvZ2dsZS1tb29uLCAudG9nZ2xlLXN1biB7XHJcbiAgICB3aWR0aDo1MCU7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIHBhZGRpbmc6MC4yNWVtO1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OjQyMDtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _component_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/nav/nav.component */ "Q09e");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _component_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/loading/loading.component */ "HwYc");





function AppComponent_app_loading_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading");
} }
const _c0 = function (a0, a1) { return { "dark": a0, "light": a1 }; };
class AppComponent {
    constructor() {
        this.title = "nutrition-analysis";
        this.dir = '';
        this.mood = '';
        this.loading = true;
        this.dir = localStorage.getItem('dir') || 'ltr';
        this.mood = localStorage.getItem('mood') || 'light';
    }
    ngOnInit() {
        setTimeout(() => {
            this.loading = false;
        }, 1000);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 6, consts: [[3, "dir", "ngClass"], [4, "ngIf"], [3, "dir", "mood"], [1, "fix__margin", "d-flex", "align-items-center", "justify-content-center", "w-100"], [1, "w-100"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_app_loading_1_Template, 1, 0, "app-loading", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dir", function AppComponent_Template_app_nav_dir_2_listener($event) { return ctx.dir = $event; })("mood", function AppComponent_Template_app_nav_mood_2_listener($event) { return ctx.mood = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dir", ctx.dir)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c0, ctx.mood == "dark" ? true : false, ctx.mood == "light" ? true : false));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _component_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__["NavComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _component_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__["LoadingComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "YQc0":
/*!**************************************************!*\
  !*** ./src/app/pages/search/search.component.ts ***!
  \**************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");






function SearchComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 3, "oops"), "!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 5, "name"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 7, "required"), " ");
} }
function SearchComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 3, "oops"), "!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 5, "quantity"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 7, "required"), " ");
} }
function SearchComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 4, "oops"), "!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 6, "count"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 8, "required"), "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 10, "number"), " ");
} }
class SearchComponent {
    constructor(_route) {
        this._route = _route;
        this.from = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            quantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            count: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(0)]),
        });
    }
    ngOnInit() {
    }
    onSubmit() {
        this._route.navigate(["/analysis", this.from.value.count, this.from.value.name, this.from.value.quantity]);
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], decls: 38, vars: 20, consts: [[1, "container", "w-100"], [1, "shadow", "bg-search", "rounded", "pt-5", "pb-1", "px-2"], [3, "formGroup", "ngSubmit"], [1, "row", "w-100"], [1, "col-md-6"], ["type", "text", "name", "name", "formControlName", "name", 1, "w-100", "py-1", "roundrd", 3, "placeholder"], ["class", "mt-2", 4, "ngIf"], [1, "col-md-3"], ["name", "quantity", "formControlName", "quantity", "id", "", 1, "w-100", "roundrd"], ["value", "small"], ["value", "xsmall"], ["value", "large"], ["value", "xlarge"], ["value", "cub"], ["type", "number", "formControlName", "count", "name", "count", "id", "", 1, "w-100", "py-1", "roundrd", 3, "placeholder"], [1, "text-center", "my-3", "w-100"], [1, "mx-auto", "px-4", "py-1", "but", "text-center", "rounded-pill", 3, "disabled"], [1, "mt-2"], ["role", "alert", 1, "alert", "alert-warning", "alert-dismissible", "fade", "show"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function SearchComponent_Template_form_ngSubmit_2_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, SearchComponent_div_10_Template, 11, 9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "xsmall");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "large");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "xlarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "cub");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, SearchComponent_div_27_Template, 11, 9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, SearchComponent_div_34_Template, 12, 12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.from);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 10, "name"), " :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 12, "name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.from.controls.name.errors != null && ctx.from.controls.name.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 14, "quantity"), " :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.from.controls.quantity.errors != null && ctx.from.controls.quantity.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](31, 16, "count"), ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](33, 18, "count"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.from.controls.count.errors != null && ctx.from.controls.count.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.from.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_z"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWFyY2guY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule, httpTranslateLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpTranslateLoader", function() { return httpTranslateLoader; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _component_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/loading/loading.component */ "HwYc");
/* harmony import */ var _component_nav_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/nav/nav.component */ "Q09e");
/* harmony import */ var _pages_search_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/search/search.component */ "YQc0");
/* harmony import */ var _pages_analysis_analysis_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/analysis/analysis.component */ "BuAD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");


// ? component





// todo Modules







class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_7__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_7__["HashLocationStrategy"] }, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateLoader"],
                    useFactory: httpTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]]
                }
            })
        ], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _component_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__["LoadingComponent"],
        _component_nav_nav_component__WEBPACK_IMPORTED_MODULE_4__["NavComponent"],
        _pages_search_search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"],
        _pages_analysis_analysis_component__WEBPACK_IMPORTED_MODULE_6__["AnalysisComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"]], exports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"]] }); })();
function httpTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_search_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/search/search.component */ "YQc0");
/* harmony import */ var _pages_analysis_analysis_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/analysis/analysis.component */ "BuAD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    {
        path: '',
        redirectTo: '/search',
        pathMatch: 'full',
    },
    {
        path: 'search',
        component: _pages_search_search_component__WEBPACK_IMPORTED_MODULE_1__["SearchComponent"],
    },
    {
        path: 'analysis/:count/:name/:quantity',
        component: _pages_analysis_analysis_component__WEBPACK_IMPORTED_MODULE_2__["AnalysisComponent"],
    },
    {
        path: '**',
        redirectTo: '/search',
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map