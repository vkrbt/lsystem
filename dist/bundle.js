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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Canvas.ts":
/*!***********************!*\
  !*** ./src/Canvas.ts ***!
  \***********************/
/*! exports provided: Canvas2D */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Canvas2D", function() { return Canvas2D; });
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var toRadians = function (angle) { return (-angle * Math.PI / 180); };
var toDegrees = function (angle) { return -(angle * 180 / Math.PI); };
var Canvas2D = /** @class */ (function () {
    function Canvas2D(width, height, parent, id, opacity) {
        if (parent === void 0) { parent = document.body; }
        if (id === void 0) { id = 'canvas'; }
        if (opacity === void 0) { opacity = 1; }
        this.angle = 0;
        this.lastpos = { x: 0, y: 0 };
        var canvas = document.createElement('canvas');
        canvas.id = id;
        canvas.width = width;
        canvas.height = height;
        parent.appendChild(canvas);
        this.parent = parent;
        this.ctx = canvas.getContext('2d');
        this.resize = this.resize.bind(this);
        this.opacity = opacity;
        // window.addEventListener('resize', this.resize);
    }
    Canvas2D.prototype.moveTo = function (x, y) {
        this.ctx.moveTo(x, y);
        this.lastpos = { x: x, y: y };
    };
    Canvas2D.prototype.drawLine = function (length, opacity, color) {
        if (opacity === void 0) { opacity = this.opacity; }
        if (color === void 0) { color = 'rgb(0,0,0)'; }
        this.ctx.strokeStyle = "rgba(" + color.slice(4, -1) + ", " + opacity + ")";
        var xPos = length * Math.cos(this.angle);
        var yPos = length * Math.sin(this.angle);
        var point = { x: this.lastpos.x + xPos, y: this.lastpos.y + yPos };
        this.ctx.beginPath();
        this.moveTo(this.lastpos.x, this.lastpos.y);
        this.ctx.lineTo(point.x, point.y);
        this.ctx.stroke();
        this.ctx.closePath();
        this.lastpos = point;
    };
    Canvas2D.prototype.getAngle = function () {
        return toDegrees(this.angle);
    };
    Canvas2D.prototype.setAngle = function (angle) {
        this.angle = toRadians(angle);
    };
    Canvas2D.prototype.rotate = function (angle) {
        this.setAngle(toDegrees(this.angle) + angle);
    };
    Canvas2D.prototype.clear = function () {
        this.ctx.fillStyle = '#e6e6e6';
        this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    };
    Canvas2D.prototype.getLastPoint = function () {
        return __assign({}, this.lastpos);
    };
    Canvas2D.prototype.setLastPoint = function (point) {
        this.lastpos = __assign({}, point);
    };
    Canvas2D.prototype.getSize = function () {
        return {
            height: this.ctx.canvas.height,
            width: this.ctx.canvas.width,
        };
    };
    Canvas2D.prototype.setLineWidth = function (width) {
        this.ctx.lineWidth = width;
    };
    Canvas2D.prototype.reset = function () {
        this.clear();
        this.setLastPoint({
            x: this.ctx.canvas.width / 2,
            y: this.ctx.canvas.height / 2,
        });
        this.angle = 0;
    };
    Canvas2D.prototype.resize = function () {
        var canvas = this.ctx.canvas;
        this.ctx.canvas.width = this.parent.clientWidth;
        this.ctx.canvas.height = this.parent.clientHeight;
        this.ctx.drawImage(canvas, 0, 0);
    };
    return Canvas2D;
}());



/***/ }),

/***/ "./src/Drawer.ts":
/*!***********************!*\
  !*** ./src/Drawer.ts ***!
  \***********************/
/*! exports provided: Drawer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Drawer", function() { return Drawer; });
var Drawer = /** @class */ (function () {
    function Drawer() {
    }
    Drawer.draw = function (lsystemString, angle, canvas, length, width) {
        if (length === void 0) { length = 50; }
        if (width === void 0) { width = 1; }
        var stack = [];
        canvas.setLineWidth(width);
        lsystemString.split('').forEach(function (letter) {
            switch (letter) {
                case 'F':
                case 'G':
                    canvas.drawLine(length);
                    return;
                case '+':
                    canvas.rotate(angle);
                    return;
                case '-':
                    canvas.rotate(-angle);
                    return;
                case '[':
                    stack.push({ point: canvas.getLastPoint(), angle: canvas.getAngle() });
                    return;
                case ']':
                    var savedData = stack.pop();
                    if (savedData) {
                        canvas.setAngle(savedData.angle);
                        canvas.setLastPoint(savedData.point);
                    }
                    return;
            }
        });
    };
    return Drawer;
}());



/***/ }),

/***/ "./src/LSystem.ts":
/*!************************!*\
  !*** ./src/LSystem.ts ***!
  \************************/
/*! exports provided: LSystem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LSystem", function() { return LSystem; });
var LSystem = /** @class */ (function () {
    function LSystem(axiom, rules) {
        this.axiom = axiom;
        this.rules = LSystem.mapRules(rules);
    }
    LSystem.mapRules = function (rules) {
        return rules.reduce(function (rulesObj, rule) {
            rulesObj[rule.from] = rule.to;
            return rulesObj;
        }, Object());
    };
    LSystem.prototype.generate = function (iterations) {
        var output = this.axiom;
        for (var i = 0; i < iterations; ++i) {
            output = this.map(output);
        }
        return output;
    };
    LSystem.prototype.getAxiom = function () {
        return this.axiom;
    };
    LSystem.prototype.getRules = function () {
        return this.rules;
    };
    LSystem.prototype.map = function (axiom) {
        var _this = this;
        var output = axiom.split('');
        output = output.map(function (letter) {
            var mapping = _this.rules[letter];
            return mapping || letter;
        });
        return output.join('');
    };
    return LSystem;
}());



/***/ }),

/***/ "./src/Rule.ts":
/*!*********************!*\
  !*** ./src/Rule.ts ***!
  \*********************/
/*! exports provided: isIRule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIRule", function() { return isIRule; });
var isIRule = function (obj) {
    if (!(obj instanceof Object)) {
        return false;
    }
    var keys = Object.keys(obj);
    if (keys.length !== 2) {
        return false;
    }
    return keys.indexOf('from') + keys.indexOf('to') === 1;
};


/***/ }),

/***/ "./src/UI.ts":
/*!*******************!*\
  !*** ./src/UI.ts ***!
  \*******************/
/*! exports provided: setup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setup", function() { return setup; });
/* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Canvas */ "./src/Canvas.ts");
/* harmony import */ var _Drawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Drawer */ "./src/Drawer.ts");
/* harmony import */ var _LSystem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LSystem */ "./src/LSystem.ts");
/* harmony import */ var _Rule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Rule */ "./src/Rule.ts");




var presets = [
    {
        angle: 60,
        axiom: 'F--F--F',
        name: 'Koch Snowflake',
        rules: 'F > F+F--F+F',
    }, {
        angle: 90,
        axiom: 'F',
        name: 'Koch Curve',
        rules: 'F > F+F-F-F+F',
    }, {
        angle: 60,
        axiom: 'F+F+F+F+F+F',
        name: 'Hexa flake',
        rules: 'F > F+F+F--F--F+F+F',
    }, {
        angle: 90,
        axiom: 'X',
        name: 'Lindenmayer curve',
        rules: 'X > XFYFX+F+YFXFY-F-XFYFX\nY > YFXFY-F-XFYFX+F+YFXFY',
    }, {
        angle: 60,
        axiom: 'F',
        name: 'Gosper curve',
        rules: 'F > F-G--G+F++FF+G-\nG > +F-GG--G-F++F+G',
    }, {
        angle: 120,
        axiom: 'F-G-G',
        name: 'Sierpinski triangle',
        rules: 'F > F-G+F+G-F\nG > GG',
    }, {
        angle: 60,
        axiom: 'F',
        name: 'Sierpinski arrow head triangle',
        rules: 'F > G-F-G\nG > F+G+F',
    }, {
        angle: 90,
        axiom: 'FX',
        name: 'Dragon curve',
        rules: 'X > X+YF+\nY > -FX-Y',
    }, {
        angle: 25,
        axiom: '+++X',
        name: 'Plant',
        rules: 'X > F[-X][X]F[-X]+FX\nF > FF',
    }, {
        angle: 90,
        axiom: 'A',
        name: 'Hilbert Curve',
        rules: 'A > -BF+AFA+FB-\nB > +AF-BFB-FA+',
    },
];
var parseRules = function (rulesString) { return rulesString.split('\n').map(function (line) {
    var ruleArray = line.split('>');
    return {
        from: ruleArray[0] && ruleArray[0].trim(),
        to: ruleArray[1] && ruleArray[1].trim(),
    };
}).filter(function (rule) { return Object(_Rule__WEBPACK_IMPORTED_MODULE_3__["isIRule"])(rule); }); };
var setup = function () {
    var rootElement = document.getElementById('root');
    if (!rootElement) {
        var elem = document.createElement('div');
        elem.id = 'root';
        rootElement = elem;
    }
    var canvasWidth = window.innerWidth < 768 ? window.innerWidth : window.innerWidth * 0.7;
    var canvasHeight = window.innerWidth < 768 ? window.innerHeight * 0.5 : window.innerHeight;
    var canvas = new _Canvas__WEBPACK_IMPORTED_MODULE_0__["Canvas2D"](canvasWidth, canvasHeight, rootElement);
    var canvasSize = canvas.getSize();
    canvas.setLastPoint({
        x: canvasSize.width / 2,
        y: canvasSize.height / 2,
    });
    var axiomElem = document.getElementById('axiom');
    var iterationsElem = document.getElementById('iterations');
    var angleElem = document.getElementById('angle');
    var lineElem = document.getElementById('line');
    var lineWidthElem = document.getElementById('linewidth');
    var rulesElem = document.getElementById('rules');
    var presetsElem = document.getElementById('presets');
    var startAngleElem = document.getElementById('startangle');
    presets.forEach(function (preset) {
        var option = document.createElement('option');
        option.innerHTML = preset.name;
        presetsElem.appendChild(option);
    });
    var timeOutId;
    var lsystem = new _LSystem__WEBPACK_IMPORTED_MODULE_2__["LSystem"](presets[0].axiom, parseRules(presets[0].rules));
    var draw = function (iterations, angle, lineLength, startangle, width) {
        clearTimeout(timeOutId);
        return setTimeout(function () {
            canvas.reset();
            canvas.setAngle(startangle);
            requestAnimationFrame(function () {
                _Drawer__WEBPACK_IMPORTED_MODULE_1__["Drawer"].draw(lsystem.generate(iterations), angle, canvas, lineLength, width);
            });
        }, 0);
    };
    angleElem.value = "" + presets[0].angle;
    rulesElem.value = "" + presets[0].rules;
    axiomElem.value = "" + presets[0].axiom;
    var rules = parseRules(rulesElem.value);
    timeOutId = draw(+iterationsElem.value, +angleElem.value, +lineElem.value, +startAngleElem.value, +lineWidthElem.value);
    startAngleElem.addEventListener('input', function (e) {
        if (e.currentTarget) {
            draw(+iterationsElem.value, +angleElem.value, +lineElem.value, +e.currentTarget.value, +lineWidthElem.value);
        }
    });
    presetsElem.addEventListener('change', function (e) {
        var preset = presets.find(function (currentPreset) { return currentPreset.name === e.target.value; });
        if (preset) {
            angleElem.value = "" + preset.angle;
            rulesElem.value = "" + preset.rules;
            lsystem = new _LSystem__WEBPACK_IMPORTED_MODULE_2__["LSystem"](preset.axiom, parseRules(preset.rules));
        }
        draw(+iterationsElem.value, +angleElem.value, +lineElem.value, +startAngleElem.value, +lineWidthElem.value);
    });
    axiomElem.addEventListener('input', function (e) {
        if (e.currentTarget) {
            lsystem = new _LSystem__WEBPACK_IMPORTED_MODULE_2__["LSystem"](e.currentTarget.value, rules);
            draw(+iterationsElem.value, +angleElem.value, +lineElem.value, +startAngleElem.value, +lineWidthElem.value);
        }
    });
    iterationsElem.addEventListener('input', function (e) {
        if (e.currentTarget) {
            draw(+e.currentTarget.value, +angleElem.value, +lineElem.value, +startAngleElem.value, +lineWidthElem.value);
        }
    });
    angleElem.addEventListener('input', function (e) {
        if (e.currentTarget) {
            draw(+iterationsElem.value, +e.currentTarget.value, +lineElem.value, +startAngleElem.value, +lineWidthElem.value);
        }
    });
    lineElem.addEventListener('input', function (e) {
        if (e.currentTarget) {
            draw(+iterationsElem.value, +angleElem.value, +e.currentTarget.value, +startAngleElem.value, +lineWidthElem.value);
        }
    });
    rulesElem.addEventListener('input', function (e) {
        if (e.currentTarget) {
            rules = parseRules(e.currentTarget.value);
            lsystem = new _LSystem__WEBPACK_IMPORTED_MODULE_2__["LSystem"](axiomElem.value, rules);
            draw(+iterationsElem.value, +angleElem.value, +lineElem.value, +startAngleElem.value, +lineWidthElem.value);
        }
    });
    lineWidthElem.addEventListener('input', function (e) {
        if (e.currentTarget) {
            draw(+iterationsElem.value, +angleElem.value, +lineElem.value, +startAngleElem.value, +e.currentTarget.value);
        }
    });
};


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ "./src/UI.ts");

Object(_UI__WEBPACK_IMPORTED_MODULE_0__["setup"])();


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NhbnZhcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRHJhd2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9MU3lzdGVtLnRzIiwid2VicGFjazovLy8uL3NyYy9SdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9VSS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEVBLElBQU0sU0FBUyxHQUFHLFVBQUMsS0FBYSxJQUFhLFFBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsRUFBeEIsQ0FBd0IsQ0FBQztBQUV0RSxJQUFNLFNBQVMsR0FBRyxVQUFDLEtBQWEsSUFBYSxRQUFDLENBQUMsS0FBSyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQXhCLENBQXdCLENBQUM7QUFFdEU7SUFPRSxrQkFDRSxLQUFhLEVBQ2IsTUFBYyxFQUNkLE1BQW1DLEVBQ25DLEVBQXFCLEVBQ3JCLE9BQW1CO1FBRm5CLGtDQUFz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dXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImltcG9ydCB7IElDYW52YXMgfSBmcm9tICcuL0lDYW52YXMnO1xuaW1wb3J0IHsgSVBvaW50IH0gZnJvbSAnLi9Qb2ludCc7XG5cbmNvbnN0IHRvUmFkaWFucyA9IChhbmdsZTogbnVtYmVyKTogbnVtYmVyID0+ICgtYW5nbGUgKiBNYXRoLlBJIC8gMTgwKTtcblxuY29uc3QgdG9EZWdyZWVzID0gKGFuZ2xlOiBudW1iZXIpOiBudW1iZXIgPT4gLShhbmdsZSAqIDE4MCAvIE1hdGguUEkpO1xuXG5jbGFzcyBDYW52YXMyRCBpbXBsZW1lbnRzIElDYW52YXMge1xuICBwcml2YXRlIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICBwcml2YXRlIGFuZ2xlOiBudW1iZXIgPSAwO1xuICBwcml2YXRlIGxhc3Rwb3M6IElQb2ludCA9IHsgeDogMCwgeTogMCB9O1xuICBwcml2YXRlIHBhcmVudDogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgb3BhY2l0eTogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHdpZHRoOiBudW1iZXIsXG4gICAgaGVpZ2h0OiBudW1iZXIsXG4gICAgcGFyZW50OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmJvZHksXG4gICAgaWQ6IHN0cmluZyA9ICdjYW52YXMnLFxuICAgIG9wYWNpdHk6IG51bWJlciA9IDEsXG4gICkge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIGNhbnZhcy5pZCA9IGlkO1xuICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGNhbnZhcyk7XG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKSBhcyBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gICAgdGhpcy5yZXNpemUgPSB0aGlzLnJlc2l6ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub3BhY2l0eSA9IG9wYWNpdHk7XG4gICAgLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVzaXplKTtcbiAgfVxuICBwdWJsaWMgbW92ZVRvKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgdGhpcy5jdHgubW92ZVRvKHgsIHkpO1xuICAgIHRoaXMubGFzdHBvcyA9IHsgeCwgeSB9O1xuICB9XG5cbiAgcHVibGljIGRyYXdMaW5lKGxlbmd0aDogbnVtYmVyLCBvcGFjaXR5OiBudW1iZXIgPSB0aGlzLm9wYWNpdHksIGNvbG9yOiBzdHJpbmcgPSAncmdiKDAsMCwwKScpIHtcbiAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IGByZ2JhKCR7Y29sb3Iuc2xpY2UoNCwgLTEpfSwgJHtvcGFjaXR5fSlgO1xuICAgIGNvbnN0IHhQb3MgPSBsZW5ndGggKiBNYXRoLmNvcyh0aGlzLmFuZ2xlKTtcbiAgICBjb25zdCB5UG9zID0gbGVuZ3RoICogTWF0aC5zaW4odGhpcy5hbmdsZSk7XG4gICAgY29uc3QgcG9pbnQgPSB7IHg6IHRoaXMubGFzdHBvcy54ICsgeFBvcywgeTogdGhpcy5sYXN0cG9zLnkgKyB5UG9zIH07XG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgdGhpcy5tb3ZlVG8odGhpcy5sYXN0cG9zLngsIHRoaXMubGFzdHBvcy55KTtcbiAgICB0aGlzLmN0eC5saW5lVG8ocG9pbnQueCwgcG9pbnQueSk7XG4gICAgdGhpcy5jdHguc3Ryb2tlKCk7XG4gICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gICAgdGhpcy5sYXN0cG9zID0gcG9pbnQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0QW5nbGUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdG9EZWdyZWVzKHRoaXMuYW5nbGUpO1xuICB9XG5cbiAgcHVibGljIHNldEFuZ2xlKGFuZ2xlOiBudW1iZXIpIHtcbiAgICB0aGlzLmFuZ2xlID0gdG9SYWRpYW5zKGFuZ2xlKTtcbiAgfVxuXG4gIHB1YmxpYyByb3RhdGUoYW5nbGU6IG51bWJlcikge1xuICAgIHRoaXMuc2V0QW5nbGUodG9EZWdyZWVzKHRoaXMuYW5nbGUpICsgYW5nbGUpO1xuICB9XG5cbiAgcHVibGljIGNsZWFyKCkge1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICcjZTZlNmU2JztcbiAgICB0aGlzLmN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmN0eC5jYW52YXMud2lkdGgsIHRoaXMuY3R4LmNhbnZhcy5oZWlnaHQpO1xuICB9XG5cbiAgcHVibGljIGdldExhc3RQb2ludCgpOiBJUG9pbnQge1xuICAgIHJldHVybiB7IC4uLnRoaXMubGFzdHBvcyB9O1xuICB9XG5cbiAgcHVibGljIHNldExhc3RQb2ludChwb2ludDogSVBvaW50KSB7XG4gICAgdGhpcy5sYXN0cG9zID0geyAuLi5wb2ludCB9O1xuICB9XG5cbiAgcHVibGljIGdldFNpemUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhlaWdodDogdGhpcy5jdHguY2FudmFzLmhlaWdodCxcbiAgICAgIHdpZHRoOiB0aGlzLmN0eC5jYW52YXMud2lkdGgsXG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRMaW5lV2lkdGgod2lkdGg6IG51bWJlcikge1xuICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IHdpZHRoO1xuICB9XG5cbiAgcHVibGljIHJlc2V0KCkge1xuICAgIHRoaXMuY2xlYXIoKTtcbiAgICB0aGlzLnNldExhc3RQb2ludChcbiAgICAgIHtcbiAgICAgICAgeDogdGhpcy5jdHguY2FudmFzLndpZHRoIC8gMixcbiAgICAgICAgeTogdGhpcy5jdHguY2FudmFzLmhlaWdodCAvIDIsXG4gICAgICB9LFxuICAgICk7XG4gICAgdGhpcy5hbmdsZSA9IDA7XG4gIH1cblxuICBwcml2YXRlIHJlc2l6ZSgpIHtcbiAgICBjb25zdCBjYW52YXMgPSB0aGlzLmN0eC5jYW52YXM7XG4gICAgdGhpcy5jdHguY2FudmFzLndpZHRoID0gdGhpcy5wYXJlbnQuY2xpZW50V2lkdGg7XG4gICAgdGhpcy5jdHguY2FudmFzLmhlaWdodCA9IHRoaXMucGFyZW50LmNsaWVudEhlaWdodDtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoY2FudmFzLCAwLCAwKTtcbiAgfVxuXG59XG5cbmV4cG9ydCB7IENhbnZhczJEIH07XG4iLCJpbXBvcnQgeyBDYW52YXMyRCB9IGZyb20gJy4vQ2FudmFzJztcbmltcG9ydCB7IElQb2ludCB9IGZyb20gJy4vUG9pbnQnO1xuY2xhc3MgRHJhd2VyIHtcbiAgcHVibGljIHN0YXRpYyBkcmF3KGxzeXN0ZW1TdHJpbmc6IHN0cmluZywgYW5nbGU6IG51bWJlciwgY2FudmFzOiBDYW52YXMyRCwgbGVuZ3RoOiBudW1iZXIgPSA1MCwgd2lkdGg6IG51bWJlciA9IDEpIHtcbiAgICBjb25zdCBzdGFjazogQXJyYXk8eyBwb2ludDogSVBvaW50LCBhbmdsZTogbnVtYmVyIH0+ID0gW107XG4gICAgY2FudmFzLnNldExpbmVXaWR0aCh3aWR0aCk7XG4gICAgbHN5c3RlbVN0cmluZy5zcGxpdCgnJykuZm9yRWFjaCgobGV0dGVyOiBzdHJpbmcpID0+IHtcbiAgICAgIHN3aXRjaCAobGV0dGVyKSB7XG4gICAgICAgIGNhc2UgJ0YnOlxuICAgICAgICBjYXNlICdHJzpcbiAgICAgICAgICBjYW52YXMuZHJhd0xpbmUobGVuZ3RoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNhc2UgJysnOlxuICAgICAgICAgIGNhbnZhcy5yb3RhdGUoYW5nbGUpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY2FzZSAnLSc6XG4gICAgICAgICAgY2FudmFzLnJvdGF0ZSgtYW5nbGUpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY2FzZSAnWyc6XG4gICAgICAgICAgc3RhY2sucHVzaCh7IHBvaW50OiBjYW52YXMuZ2V0TGFzdFBvaW50KCksIGFuZ2xlOiBjYW52YXMuZ2V0QW5nbGUoKSB9KTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNhc2UgJ10nOlxuICAgICAgICAgIGNvbnN0IHNhdmVkRGF0YSA9IHN0YWNrLnBvcCgpO1xuICAgICAgICAgIGlmIChzYXZlZERhdGEpIHtcbiAgICAgICAgICAgIGNhbnZhcy5zZXRBbmdsZShzYXZlZERhdGEuYW5nbGUpO1xuICAgICAgICAgICAgY2FudmFzLnNldExhc3RQb2ludChzYXZlZERhdGEucG9pbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IHsgRHJhd2VyIH07XG4iLCJpbXBvcnQgeyBJUnVsZSB9IGZyb20gJy4vUnVsZSc7XG5cbmNsYXNzIExTeXN0ZW0ge1xuICBwdWJsaWMgc3RhdGljIG1hcFJ1bGVzKHJ1bGVzOiBJUnVsZVtdKSB7XG4gICAgcmV0dXJuIHJ1bGVzLnJlZHVjZSgocnVsZXNPYmo6IG9iamVjdCwgcnVsZTogSVJ1bGUpID0+IHtcbiAgICAgIHJ1bGVzT2JqW3J1bGUuZnJvbV0gPSBydWxlLnRvO1xuICAgICAgcmV0dXJuIHJ1bGVzT2JqO1xuICAgIH0sIE9iamVjdCgpKTtcbiAgfVxuXG4gIHByaXZhdGUgYXhpb206IHN0cmluZztcbiAgcHJpdmF0ZSBydWxlczogSVJ1bGVbXTtcblxuICBjb25zdHJ1Y3RvcihheGlvbTogc3RyaW5nLCBydWxlczogSVJ1bGVbXSkge1xuICAgIHRoaXMuYXhpb20gPSBheGlvbTtcbiAgICB0aGlzLnJ1bGVzID0gTFN5c3RlbS5tYXBSdWxlcyhydWxlcyk7XG4gIH1cblxuICBwdWJsaWMgZ2VuZXJhdGUoaXRlcmF0aW9uczogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBsZXQgb3V0cHV0OiBzdHJpbmcgPSB0aGlzLmF4aW9tO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlcmF0aW9uczsgKytpKSB7XG4gICAgICBvdXRwdXQgPSB0aGlzLm1hcChvdXRwdXQpO1xuICAgIH1cbiAgICByZXR1cm4gb3V0cHV0O1xuICB9XG5cbiAgcHVibGljIGdldEF4aW9tKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuYXhpb207XG4gIH1cblxuICBwdWJsaWMgZ2V0UnVsZXMoKTogSVJ1bGVbXSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZXM7XG4gIH1cblxuICBwcml2YXRlIG1hcChheGlvbTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBsZXQgb3V0cHV0OiBzdHJpbmdbXSA9IGF4aW9tLnNwbGl0KCcnKTtcbiAgICBvdXRwdXQgPSBvdXRwdXQubWFwKChsZXR0ZXIpID0+IHtcbiAgICAgIGNvbnN0IG1hcHBpbmc6IHN0cmluZyA9IHRoaXMucnVsZXNbbGV0dGVyXTtcbiAgICAgIHJldHVybiBtYXBwaW5nIHx8IGxldHRlcjtcbiAgICB9KTtcbiAgICByZXR1cm4gb3V0cHV0LmpvaW4oJycpO1xuICB9XG59XG5cbmV4cG9ydCB7IExTeXN0ZW0gfTtcbiIsImV4cG9ydCBpbnRlcmZhY2UgSVJ1bGUge1xuICBmcm9tOiBzdHJpbmc7XG4gIHRvOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBpc0lSdWxlID0gKG9iajogYW55KSA9PiB7XG4gIGlmICghKG9iaiBpbnN0YW5jZW9mIE9iamVjdCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gIGlmIChrZXlzLmxlbmd0aCAhPT0gMikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4ga2V5cy5pbmRleE9mKCdmcm9tJykgKyBrZXlzLmluZGV4T2YoJ3RvJykgPT09IDE7XG59O1xuIiwiaW1wb3J0IHsgQ2FudmFzMkQgfSBmcm9tICcuL0NhbnZhcyc7XG5pbXBvcnQgeyBEcmF3ZXIgfSBmcm9tICcuL0RyYXdlcic7XG5pbXBvcnQgeyBMU3lzdGVtIH0gZnJvbSAnLi9MU3lzdGVtJztcbmltcG9ydCB7IElSdWxlLCBpc0lSdWxlIH0gZnJvbSAnLi9SdWxlJztcblxuY29uc3QgcHJlc2V0cyA9IFtcbiAge1xuICAgIGFuZ2xlOiA2MCxcbiAgICBheGlvbTogJ0YtLUYtLUYnLFxuICAgIG5hbWU6ICdLb2NoIFNub3dmbGFrZScsXG4gICAgcnVsZXM6ICdGID4gRitGLS1GK0YnLFxuICB9LCB7XG4gICAgYW5nbGU6IDkwLFxuICAgIGF4aW9tOiAnRicsXG4gICAgbmFtZTogJ0tvY2ggQ3VydmUnLFxuICAgIHJ1bGVzOiAnRiA+IEYrRi1GLUYrRicsXG4gIH0sIHtcbiAgICBhbmdsZTogNjAsXG4gICAgYXhpb206ICdGK0YrRitGK0YrRicsXG4gICAgbmFtZTogJ0hleGEgZmxha2UnLFxuICAgIHJ1bGVzOiAnRiA+IEYrRitGLS1GLS1GK0YrRicsXG4gIH0sIHtcbiAgICBhbmdsZTogOTAsXG4gICAgYXhpb206ICdYJyxcbiAgICBuYW1lOiAnTGluZGVubWF5ZXIgY3VydmUnLFxuICAgIHJ1bGVzOiAnWCA+IFhGWUZYK0YrWUZYRlktRi1YRllGWFxcblkgPiBZRlhGWS1GLVhGWUZYK0YrWUZYRlknLFxuICB9LCB7XG4gICAgYW5nbGU6IDYwLFxuICAgIGF4aW9tOiAnRicsXG4gICAgbmFtZTogJ0dvc3BlciBjdXJ2ZScsXG4gICAgcnVsZXM6ICdGID4gRi1HLS1HK0YrK0ZGK0ctXFxuRyA+ICtGLUdHLS1HLUYrK0YrRycsXG4gIH0sIHtcbiAgICBhbmdsZTogMTIwLFxuICAgIGF4aW9tOiAnRi1HLUcnLFxuICAgIG5hbWU6ICdTaWVycGluc2tpIHRyaWFuZ2xlJyxcbiAgICBydWxlczogJ0YgPiBGLUcrRitHLUZcXG5HID4gR0cnLFxuICB9LCB7XG4gICAgYW5nbGU6IDYwLFxuICAgIGF4aW9tOiAnRicsXG4gICAgbmFtZTogJ1NpZXJwaW5za2kgYXJyb3cgaGVhZCB0cmlhbmdsZScsXG4gICAgcnVsZXM6ICdGID4gRy1GLUdcXG5HID4gRitHK0YnLFxuICB9LCB7XG4gICAgYW5nbGU6IDkwLFxuICAgIGF4aW9tOiAnRlgnLFxuICAgIG5hbWU6ICdEcmFnb24gY3VydmUnLFxuICAgIHJ1bGVzOiAnWCA+IFgrWUYrXFxuWSA+IC1GWC1ZJyxcbiAgfSwge1xuICAgIGFuZ2xlOiAyNSxcbiAgICBheGlvbTogJysrK1gnLFxuICAgIG5hbWU6ICdQbGFudCcsXG4gICAgcnVsZXM6ICdYID4gRlstWF1bWF1GWy1YXStGWFxcbkYgPiBGRicsXG4gIH0sIHtcbiAgICBhbmdsZTogOTAsXG4gICAgYXhpb206ICdBJyxcbiAgICBuYW1lOiAnSGlsYmVydCBDdXJ2ZScsXG4gICAgcnVsZXM6ICdBID4gLUJGK0FGQStGQi1cXG5CID4gK0FGLUJGQi1GQSsnLFxuICB9LFxuXTtcblxuY29uc3QgcGFyc2VSdWxlcyA9IChydWxlc1N0cmluZzogc3RyaW5nKTogSVJ1bGVbXSA9PiBydWxlc1N0cmluZy5zcGxpdCgnXFxuJykubWFwKChsaW5lKSA9PiB7XG4gIGNvbnN0IHJ1bGVBcnJheTogc3RyaW5nW10gPSBsaW5lLnNwbGl0KCc+Jyk7XG4gIHJldHVybiB7XG4gICAgZnJvbTogcnVsZUFycmF5WzBdICYmIHJ1bGVBcnJheVswXS50cmltKCksXG4gICAgdG86IHJ1bGVBcnJheVsxXSAmJiBydWxlQXJyYXlbMV0udHJpbSgpLFxuICB9O1xufSkuZmlsdGVyKChydWxlOiBJUnVsZSkgPT4gaXNJUnVsZShydWxlKSk7XG5cbmV4cG9ydCBjb25zdCBzZXR1cCA9ICgpID0+IHtcblxuICBsZXQgcm9vdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xuICBpZiAoIXJvb3RFbGVtZW50KSB7XG4gICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW0uaWQgPSAncm9vdCc7XG4gICAgcm9vdEVsZW1lbnQgPSBlbGVtO1xuICB9XG4gIGNvbnN0IGNhbnZhc1dpZHRoID0gd2luZG93LmlubmVyV2lkdGggPCA3NjggPyB3aW5kb3cuaW5uZXJXaWR0aCA6IHdpbmRvdy5pbm5lcldpZHRoICogMC43O1xuICBjb25zdCBjYW52YXNIZWlnaHQgPSB3aW5kb3cuaW5uZXJXaWR0aCA8IDc2OCA/IHdpbmRvdy5pbm5lckhlaWdodCAqIDAuNSA6IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgY29uc3QgY2FudmFzID0gbmV3IENhbnZhczJEKGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQsIHJvb3RFbGVtZW50KTtcbiAgY29uc3QgY2FudmFzU2l6ZSA9IGNhbnZhcy5nZXRTaXplKCk7XG4gIGNhbnZhcy5zZXRMYXN0UG9pbnQoXG4gICAge1xuICAgICAgeDogY2FudmFzU2l6ZS53aWR0aCAvIDIsXG4gICAgICB5OiBjYW52YXNTaXplLmhlaWdodCAvIDIsXG4gICAgfSxcbiAgKTtcblxuICBjb25zdCBheGlvbUVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXhpb20nKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICBjb25zdCBpdGVyYXRpb25zRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVyYXRpb25zJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgY29uc3QgYW5nbGVFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FuZ2xlJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgY29uc3QgbGluZUVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGluZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gIGNvbnN0IGxpbmVXaWR0aEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGluZXdpZHRoJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgY29uc3QgcnVsZXNFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3J1bGVzJykgYXMgSFRNTFRleHRBcmVhRWxlbWVudDtcbiAgY29uc3QgcHJlc2V0c0VsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJlc2V0cycpIGFzIEhUTUxTZWxlY3RFbGVtZW50O1xuICBjb25zdCBzdGFydEFuZ2xlRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydGFuZ2xlJykgYXMgSFRNTElucHV0RWxlbWVudDtcblxuICBwcmVzZXRzLmZvckVhY2goKHByZXNldCkgPT4ge1xuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG9wdGlvbi5pbm5lckhUTUwgPSBwcmVzZXQubmFtZTtcbiAgICBwcmVzZXRzRWxlbS5hcHBlbmRDaGlsZChvcHRpb24pO1xuICB9KTtcblxuICBsZXQgdGltZU91dElkOiBudW1iZXI7XG5cbiAgbGV0IGxzeXN0ZW0gPSBuZXcgTFN5c3RlbShwcmVzZXRzWzBdLmF4aW9tLCBwYXJzZVJ1bGVzKHByZXNldHNbMF0ucnVsZXMpKTtcbiAgY29uc3QgZHJhdyA9IChpdGVyYXRpb25zOiBudW1iZXIsIGFuZ2xlOiBudW1iZXIsIGxpbmVMZW5ndGg6IG51bWJlciwgc3RhcnRhbmdsZTogbnVtYmVyLCB3aWR0aDogbnVtYmVyKSA9PiB7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVPdXRJZCk7XG4gICAgcmV0dXJuIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY2FudmFzLnJlc2V0KCk7XG4gICAgICBjYW52YXMuc2V0QW5nbGUoc3RhcnRhbmdsZSk7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICBEcmF3ZXIuZHJhdyhsc3lzdGVtLmdlbmVyYXRlKGl0ZXJhdGlvbnMpLCBhbmdsZSwgY2FudmFzLCBsaW5lTGVuZ3RoLCB3aWR0aCk7XG4gICAgICB9KTtcbiAgICB9LCAwKTtcbiAgfTtcblxuICBhbmdsZUVsZW0udmFsdWUgPSBgJHtwcmVzZXRzWzBdLmFuZ2xlfWA7XG4gIHJ1bGVzRWxlbS52YWx1ZSA9IGAke3ByZXNldHNbMF0ucnVsZXN9YDtcbiAgYXhpb21FbGVtLnZhbHVlID0gYCR7cHJlc2V0c1swXS5heGlvbX1gO1xuICBsZXQgcnVsZXMgPSBwYXJzZVJ1bGVzKHJ1bGVzRWxlbS52YWx1ZSk7XG4gIHRpbWVPdXRJZCA9IGRyYXcoXG4gICAgK2l0ZXJhdGlvbnNFbGVtLnZhbHVlLFxuICAgICthbmdsZUVsZW0udmFsdWUsXG4gICAgK2xpbmVFbGVtLnZhbHVlLFxuICAgICtzdGFydEFuZ2xlRWxlbS52YWx1ZSxcbiAgICArbGluZVdpZHRoRWxlbS52YWx1ZSxcbiAgKTtcblxuICBzdGFydEFuZ2xlRWxlbS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlOiBhbnkpID0+IHtcbiAgICBpZiAoZS5jdXJyZW50VGFyZ2V0KSB7XG4gICAgICBkcmF3KCtpdGVyYXRpb25zRWxlbS52YWx1ZSwgK2FuZ2xlRWxlbS52YWx1ZSwgK2xpbmVFbGVtLnZhbHVlLCArZS5jdXJyZW50VGFyZ2V0LnZhbHVlLCArbGluZVdpZHRoRWxlbS52YWx1ZSk7XG4gICAgfVxuICB9KTtcblxuICBwcmVzZXRzRWxlbS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZTogYW55KSA9PiB7XG4gICAgY29uc3QgcHJlc2V0ID0gcHJlc2V0cy5maW5kKChjdXJyZW50UHJlc2V0OiBhbnkpID0+IGN1cnJlbnRQcmVzZXQubmFtZSA9PT0gZS50YXJnZXQudmFsdWUpO1xuICAgIGlmIChwcmVzZXQpIHtcbiAgICAgIGFuZ2xlRWxlbS52YWx1ZSA9IGAke3ByZXNldC5hbmdsZX1gO1xuICAgICAgcnVsZXNFbGVtLnZhbHVlID0gYCR7cHJlc2V0LnJ1bGVzfWA7XG4gICAgICBsc3lzdGVtID0gbmV3IExTeXN0ZW0ocHJlc2V0LmF4aW9tLCBwYXJzZVJ1bGVzKHByZXNldC5ydWxlcykpO1xuICAgIH1cbiAgICBkcmF3KCtpdGVyYXRpb25zRWxlbS52YWx1ZSwgK2FuZ2xlRWxlbS52YWx1ZSwgK2xpbmVFbGVtLnZhbHVlLCArc3RhcnRBbmdsZUVsZW0udmFsdWUsICtsaW5lV2lkdGhFbGVtLnZhbHVlKTtcbiAgfSk7XG5cbiAgYXhpb21FbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGU6IGFueSkgPT4ge1xuICAgIGlmIChlLmN1cnJlbnRUYXJnZXQpIHtcbiAgICAgIGxzeXN0ZW0gPSBuZXcgTFN5c3RlbShlLmN1cnJlbnRUYXJnZXQudmFsdWUsIHJ1bGVzKTtcbiAgICAgIGRyYXcoK2l0ZXJhdGlvbnNFbGVtLnZhbHVlLCArYW5nbGVFbGVtLnZhbHVlLCArbGluZUVsZW0udmFsdWUsICtzdGFydEFuZ2xlRWxlbS52YWx1ZSwgK2xpbmVXaWR0aEVsZW0udmFsdWUpO1xuICAgIH1cbiAgfSk7XG5cbiAgaXRlcmF0aW9uc0VsZW0uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZTogYW55KSA9PiB7XG4gICAgaWYgKGUuY3VycmVudFRhcmdldCkge1xuICAgICAgZHJhdygrZS5jdXJyZW50VGFyZ2V0LnZhbHVlLCArYW5nbGVFbGVtLnZhbHVlLCArbGluZUVsZW0udmFsdWUsICtzdGFydEFuZ2xlRWxlbS52YWx1ZSwgK2xpbmVXaWR0aEVsZW0udmFsdWUpO1xuICAgIH1cbiAgfSk7XG4gIGFuZ2xlRWxlbS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlOiBhbnkpID0+IHtcbiAgICBpZiAoZS5jdXJyZW50VGFyZ2V0KSB7XG4gICAgICBkcmF3KCtpdGVyYXRpb25zRWxlbS52YWx1ZSwgK2UuY3VycmVudFRhcmdldC52YWx1ZSwgK2xpbmVFbGVtLnZhbHVlLCArc3RhcnRBbmdsZUVsZW0udmFsdWUsICtsaW5lV2lkdGhFbGVtLnZhbHVlKTtcbiAgICB9XG4gIH0pO1xuICBsaW5lRWxlbS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlOiBhbnkpID0+IHtcbiAgICBpZiAoZS5jdXJyZW50VGFyZ2V0KSB7XG4gICAgICBkcmF3KFxuICAgICAgICAraXRlcmF0aW9uc0VsZW0udmFsdWUsXG4gICAgICAgICthbmdsZUVsZW0udmFsdWUsXG4gICAgICAgICtlLmN1cnJlbnRUYXJnZXQudmFsdWUsXG4gICAgICAgICtzdGFydEFuZ2xlRWxlbS52YWx1ZSxcbiAgICAgICAgK2xpbmVXaWR0aEVsZW0udmFsdWUsXG4gICAgICApO1xuICAgIH1cbiAgfSk7XG4gIHJ1bGVzRWxlbS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlOiBhbnkpID0+IHtcbiAgICBpZiAoZS5jdXJyZW50VGFyZ2V0KSB7XG4gICAgICBydWxlcyA9IHBhcnNlUnVsZXMoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcbiAgICAgIGxzeXN0ZW0gPSBuZXcgTFN5c3RlbShheGlvbUVsZW0udmFsdWUsIHJ1bGVzKTtcbiAgICAgIGRyYXcoK2l0ZXJhdGlvbnNFbGVtLnZhbHVlLCArYW5nbGVFbGVtLnZhbHVlLCArbGluZUVsZW0udmFsdWUsICtzdGFydEFuZ2xlRWxlbS52YWx1ZSwgK2xpbmVXaWR0aEVsZW0udmFsdWUpO1xuICAgIH1cbiAgfSk7XG4gIGxpbmVXaWR0aEVsZW0uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZTogYW55KSA9PiB7XG4gICAgaWYgKGUuY3VycmVudFRhcmdldCkge1xuICAgICAgZHJhdygraXRlcmF0aW9uc0VsZW0udmFsdWUsICthbmdsZUVsZW0udmFsdWUsICtsaW5lRWxlbS52YWx1ZSwgK3N0YXJ0QW5nbGVFbGVtLnZhbHVlLCArZS5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcbiAgICB9XG4gIH0pO1xufTtcbiIsImltcG9ydCB7IHNldHVwIH0gZnJvbSAnLi9VSSc7XG5zZXR1cCgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==