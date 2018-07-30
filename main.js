(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fullscreen\r\n{\r\n     display: flex;\r\n     align-content: initial;\r\n     justify-content: center;\r\n     height: 100vh;\r\n}\r\n\r\n.page\r\n{\r\n    position: relative;\r\n    max-width: 600px;\r\n    height: auto;\r\n    color: #eeeeee;\r\n}\r\n\r\n.page-header\r\n{\r\n     background-color:\t#7289da;\r\n     border-radius: 3px 3px 0px 0px;\r\n     width: 100%;\r\n     height: auto;\r\n     color: #eeeeee;\r\n     padding: 20px;\r\n     text-align: center;\r\n     font-size: 24pt;\r\n     font-weight: bolder;\r\n}\r\n\r\n.page-content\r\n{\r\n    position: relative;\r\n    background-color: #2c2f33;\r\n     border-radius: 0px 0px 3px 3px;\r\n     width: 100%;\r\n     height: auto;\r\n     color: #eeeeee;\r\n     padding: 20px;\r\n}\r\n\r\n.page-content img {\r\n    width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<app-animate-field></app-animate-field>\r\n<div class=\"fullscreen\">\r\n  <div class=\"page\">\r\n    <div class=\"page-header\">\r\n      Now Testing!\r\n    </div>\r\n    <div class=\"page-content\">\r\n      <h3>\r\n        Communist Manifesto Desu!\r\n      </h3>\r\n      \r\n      <img src=\"assets/C6Mp-QfWcAAiMZc.jpg\">\r\n\r\n      <div>\r\n        <app-markdown-wrapper [filename]=\"'assets/markdown/communist-manifesto.md'\"></app-markdown-wrapper>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    ;
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-markdown */ "./node_modules/ngx-markdown/fesm5/ngx-markdown.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _common_markdown_wrapper_markdown_wrapper_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/markdown-wrapper/markdown-wrapper.component */ "./src/app/common/markdown-wrapper/markdown-wrapper.component.ts");
/* harmony import */ var _common_animate_animate_field_animate_field_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/animate/animate-field/animate-field.component */ "./src/app/common/animate/animate-field/animate-field.component.ts");
/* harmony import */ var _common_animate_animate_obj_animate_obj_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/animate/animate-obj/animate-obj.component */ "./src/app/common/animate/animate-obj/animate-obj.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _common_markdown_wrapper_markdown_wrapper_component__WEBPACK_IMPORTED_MODULE_5__["MarkdownWrapperComponent"],
                _common_animate_animate_field_animate_field_component__WEBPACK_IMPORTED_MODULE_6__["AnimateFieldComponent"],
                _common_animate_animate_obj_animate_obj_component__WEBPACK_IMPORTED_MODULE_7__["AnimateObjComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                ngx_markdown__WEBPACK_IMPORTED_MODULE_2__["MarkdownModule"].forRoot({ loader: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common/animate/animate-field/animate-field.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/common/animate/animate-field/animate-field.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".animate-field {\r\n  position: fixed;\r\n  overflow: hidden;\r\n  left: 0;\r\n  top: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n  z-index: 100;\r\n}\r\n\r\n.swirly-button {\r\n    --rotation: 180deg;\r\n\r\n    text-align: center;\r\n    vertical-align: middle;\r\n\r\n    background-color: tomato;\r\n\r\n    color: #223344;\r\n    position: absolute;\r\n    left: -18px;\r\n    top: -18px;\r\n\r\n    width: 36px;\r\n    height: 36px;\r\n    border-radius: 50%;\r\n    border: solid 3px currentColor;\r\n    border-bottom: solid 3px transparent;\r\n}\r\n\r\n.swirly-button:hover {\r\n    color: #227744;\r\n    background-color: salmon;\r\n    position: absolute;\r\n    width: 36px;\r\n    height: 36px;\r\n    border-radius: 50%;\r\n    border: solid 3px currentColor;\r\n    border-bottom: solid 3px transparent;\r\n}"

/***/ }),

/***/ "./src/app/common/animate/animate-field/animate-field.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/common/animate/animate-field/animate-field.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animate-field\" (mousemove)=\"onMouseUpdate($event)\" (mousedown)=\"onMouseUpdate($event)\" (mouseup)=\"onMouseUpdate($event)\">\r\n  <app-animate-obj class=\"animated\"></app-animate-obj>\r\n</div>"

/***/ }),

/***/ "./src/app/common/animate/animate-field/animate-field.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/common/animate/animate-field/animate-field.component.ts ***!
  \*************************************************************************/
/*! exports provided: AnimateFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimateFieldComponent", function() { return AnimateFieldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../animate.service */ "./src/app/common/animate/animate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnimateFieldComponent = /** @class */ (function () {
    function AnimateFieldComponent(animateService) {
        this.animateService = animateService;
        this.fps = 30;
    }
    AnimateFieldComponent.prototype.ngOnInit = function () {
        // set service variables to communicate to components
        this.animateService.setMouse(0, 0, 0);
        var window = document.getElementsByClassName("animate-field")[0];
        this.animateService.setWindow(window.clientHeight, window.clientWidth);
        this.frame = this.frame.bind(this);
        setInterval(this.frame, 1000 / this.fps);
    };
    AnimateFieldComponent.prototype.frame = function () {
        this.animateService.updateElements();
    };
    // React to a change in the mouse
    AnimateFieldComponent.prototype.onMouseUpdate = function (event) {
        // If performance is really an issue, I can look into octoganal distances
        this.animateService.setMouse(event.clientX, event.clientY, event.buttons);
    };
    // React to window size change
    AnimateFieldComponent.prototype.onResize = function (event) {
        var window = document.getElementsByClassName("animate-field")[0];
        this.animateService.setWindow(window.clientHeight, window.clientWidth);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AnimateFieldComponent.prototype, "onResize", null);
    AnimateFieldComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-animate-field',
            template: __webpack_require__(/*! ./animate-field.component.html */ "./src/app/common/animate/animate-field/animate-field.component.html"),
            styles: [__webpack_require__(/*! ./animate-field.component.css */ "./src/app/common/animate/animate-field/animate-field.component.css")]
        }),
        __metadata("design:paramtypes", [_animate_service__WEBPACK_IMPORTED_MODULE_1__["AnimateService"]])
    ], AnimateFieldComponent);
    return AnimateFieldComponent;
}());



/***/ }),

/***/ "./src/app/common/animate/animate-obj/animate-obj.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/common/animate/animate-obj/animate-obj.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".swirly-ball {\r\n    --rotation: 180deg;\r\n\r\n    text-align: center;\r\n    vertical-align: middle;\r\n\r\n    background-color: tomato;\r\n\r\n    color: #223344;\r\n    position: absolute;\r\n    left: -18px;\r\n    top: -18px;\r\n\r\n    width: 36px;\r\n    height: 36px;\r\n    border-radius: 50%;\r\n    border: solid 3px currentColor;\r\n    border-bottom: solid 3px transparent;\r\n}\r\n.swirly-ball:hover {\r\n    color: #227744;\r\n    background-color: salmon;\r\n    position: absolute;\r\n    width: 36px;\r\n    height: 36px;\r\n    border-radius: 50%;\r\n    border: solid 3px currentColor;\r\n    border-bottom: solid 3px transparent;\r\n}"

/***/ }),

/***/ "./src/app/common/animate/animate-obj/animate-obj.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/common/animate/animate-obj/animate-obj.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"swirly-ball\"  [ngStyle]=\"{'transform': 'matrix(' + styleFrame['m'] + ')'}\"></div>"

/***/ }),

/***/ "./src/app/common/animate/animate-obj/animate-obj.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/common/animate/animate-obj/animate-obj.component.ts ***!
  \*********************************************************************/
/*! exports provided: AnimateObjComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimateObjComponent", function() { return AnimateObjComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../animate.service */ "./src/app/common/animate/animate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnimateObjComponent = /** @class */ (function () {
    function AnimateObjComponent(animateService) {
        this.animateService = animateService;
        this.obj = {
            r: 18,
            vx: 0,
            vy: 0,
            ax: 0,
            ay: 0,
            elastic: 0.75,
            drag: 0.02,
            g: 1.5
        };
        this.m = {
            a: 1,
            b: 0,
            c: 0,
            d: 1,
            x: 50,
            y: 50
        };
        this.rot = 0;
        this.styleFrame = {
            m: this.matToStyleStr(this.m)
        };
    }
    AnimateObjComponent.prototype.ngOnInit = function () {
        this.animateService.addElement(this);
    };
    AnimateObjComponent.prototype.update = function () {
        this.rot = (this.rot + Math.PI / 90) % (2 * Math.PI);
        // let stretchx = 1 / (1 + Math.exp(-this.obj.vy));
        // let stretchy = 1 / stretchx;
        this.m.a = Math.cos(this.rot);
        this.m.d = this.m.a;
        this.m.c = Math.sin(this.rot);
        this.m.b = -this.m.c;
        // this.m.a *= stretchx;
        // this.m.b *= stretchx;
        // this.m.c *= stretchy;
        // this.m.d *= stretchy;
        // this.m.x = this.m.a * 1 + this.m.c * 18;
        // this.m.y = this.m.b * 1 + this.m.d * 18;
        this.styleFrame['m'] = this.matToStyleStr(this.m);
        var mouse = this.animateService.getMouse();
        if (this.animateService.checkMouseButton(0) && this.distance(mouse.x, mouse.y, this.m.x, this.m.y) < 36) {
            // Reset velocities
            this.obj.vx = 0;
            this.obj.vy = 0;
            // Set velocities
            this.obj.ax = -this.obj.vx * this.obj.drag;
            this.obj.ay = -this.obj.vy * this.obj.drag;
            this.obj.vx += this.obj.ax + (mouse.x - this.m.x);
            this.obj.vy += this.obj.ay + (mouse.y - this.m.y);
        }
        else {
            this.obj.ax = -this.obj.vx * this.obj.drag;
            this.obj.ay = this.obj.g; // lol. no vertical drag
            this.obj.vx += this.obj.ax;
            this.obj.vy += this.obj.ay;
        }
        this.m.x += this.obj.vx;
        this.m.y += this.obj.vy;
        // border collision
        var height = this.animateService.getWindowHeight();
        var width = this.animateService.getWindowWidth();
        if (this.m.x + this.obj.r > width) {
            this.m.x = width - this.obj.r;
            this.obj.vx = -this.obj.vx * this.obj.elastic;
            this.obj.vx = Math.abs(this.obj.vx) < 1 ? 0 : this.obj.vx;
        }
        if (this.m.x - this.obj.r < 0) {
            this.m.x = this.obj.r;
            this.obj.vx = -this.obj.vx * this.obj.elastic;
            this.obj.vx = Math.abs(this.obj.vx) < 1 ? 0 : this.obj.vx;
        }
        if (this.m.y + this.obj.r > height) {
            this.m.y = height - this.obj.r;
            this.obj.vy = -this.obj.vy * this.obj.elastic;
            this.obj.vy = Math.abs(this.obj.vy) < 1 ? 0 : this.obj.vy;
        }
        if (this.m.y - this.obj.r < 0) {
            this.m.y = this.obj.r;
            this.obj.vy = -this.obj.vy * this.obj.elastic;
            this.obj.vy = Math.abs(this.obj.vy) < 1 ? 0 : this.obj.vy;
        }
    };
    AnimateObjComponent.prototype.matToStyleStr = function (m) {
        return m.a + ',' + m.b + ',' + m.c + ',' + m.d + ',' + m.x + ',' + m.y;
    };
    AnimateObjComponent.prototype.distance = function (x1, y1, x2, y2) {
        return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
    };
    AnimateObjComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-animate-obj',
            template: __webpack_require__(/*! ./animate-obj.component.html */ "./src/app/common/animate/animate-obj/animate-obj.component.html"),
            styles: [__webpack_require__(/*! ./animate-obj.component.css */ "./src/app/common/animate/animate-obj/animate-obj.component.css")]
        }),
        __metadata("design:paramtypes", [_animate_service__WEBPACK_IMPORTED_MODULE_1__["AnimateService"]])
    ], AnimateObjComponent);
    return AnimateObjComponent;
}());



/***/ }),

/***/ "./src/app/common/animate/animate.service.ts":
/*!***************************************************!*\
  !*** ./src/app/common/animate/animate.service.ts ***!
  \***************************************************/
/*! exports provided: AnimateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimateService", function() { return AnimateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AnimateService = /** @class */ (function () {
    function AnimateService() {
        this.elements = [];
    }
    AnimateService.prototype.setMouse = function (x, y, buttons) {
        this.mouse = {
            x: x,
            y: y,
            buttons: buttons
        };
    };
    AnimateService.prototype.setWindow = function (height, width) {
        this.window = {
            height: height,
            width: width
        };
    };
    AnimateService.prototype.getMouse = function () {
        return this.mouse;
    };
    AnimateService.prototype.checkMouseButton = function (button) {
        return ((this.mouse.buttons >> button) & 1) != 0;
    };
    AnimateService.prototype.getWindowHeight = function () {
        return this.window.height;
    };
    AnimateService.prototype.getWindowWidth = function () {
        return this.window.width;
    };
    AnimateService.prototype.addElement = function (element) {
        this.elements.push(element);
    };
    AnimateService.prototype.updateElements = function () {
        this.elements.forEach(function (element) { return element.update(); });
    };
    AnimateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AnimateService);
    return AnimateService;
}());



/***/ }),

/***/ "./src/app/common/markdown-wrapper/markdown-wrapper.component.css":
/*!************************************************************************!*\
  !*** ./src/app/common/markdown-wrapper/markdown-wrapper.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/common/markdown-wrapper/markdown-wrapper.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/common/markdown-wrapper/markdown-wrapper.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<markdown *ngIf=\"text != ''\">{{ text }}</markdown>"

/***/ }),

/***/ "./src/app/common/markdown-wrapper/markdown-wrapper.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/common/markdown-wrapper/markdown-wrapper.component.ts ***!
  \***********************************************************************/
/*! exports provided: MarkdownWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkdownWrapperComponent", function() { return MarkdownWrapperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MarkdownWrapperComponent = /** @class */ (function () {
    function MarkdownWrapperComponent(http) {
        this.http = http;
        this.text = '';
    }
    ;
    MarkdownWrapperComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get(this.filename, { responseType: 'text' }).subscribe(function (data) {
            _this.text = data;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MarkdownWrapperComponent.prototype, "filename", void 0);
    MarkdownWrapperComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-markdown-wrapper',
            template: __webpack_require__(/*! ./markdown-wrapper.component.html */ "./src/app/common/markdown-wrapper/markdown-wrapper.component.html"),
            styles: [__webpack_require__(/*! ./markdown-wrapper.component.css */ "./src/app/common/markdown-wrapper/markdown-wrapper.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MarkdownWrapperComponent);
    return MarkdownWrapperComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Documents\CommunistManifestoDesu\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map