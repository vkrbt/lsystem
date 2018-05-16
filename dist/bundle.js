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
        this.ctx.beginPath();
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
    Drawer.draw = function (lsystemString, angle, canvas, length) {
        if (length === void 0) { length = 50; }
        var stack = [];
        lsystemString.split('').forEach(function (letter) {
            switch (letter) {
                case 'F':
                case 'G':
                    canvas.drawLine(length, 0.5);
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
    var rulesElem = document.getElementById('rules');
    var presetsElem = document.getElementById('presets');
    var startAngleElem = document.getElementById('startangle');
    presets.forEach(function (preset) {
        var option = document.createElement('option');
        option.innerHTML = preset.name;
        presetsElem.appendChild(option);
    });
    var rules = parseRules(rulesElem.value);
    var lsystem = new _LSystem__WEBPACK_IMPORTED_MODULE_2__["LSystem"](presets[0].axiom, parseRules(presets[0].rules));
    var draw = function (iterations, angle, lineLength, startangle) {
        canvas.reset();
        canvas.setAngle(startangle);
        _Drawer__WEBPACK_IMPORTED_MODULE_1__["Drawer"].draw(lsystem.generate(iterations), angle, canvas, lineLength);
    };
    angleElem.value = "" + presets[0].angle;
    rulesElem.value = "" + presets[0].rules;
    draw(+iterationsElem.value, +angleElem.value, +lineElem.value, +startAngleElem.value);
    startAngleElem.addEventListener('input', function (e) {
        if (e.currentTarget) {
            draw(+iterationsElem.value, +angleElem.value, +lineElem.value, +e.currentTarget.value);
        }
    });
    presetsElem.addEventListener('change', function (e) {
        var preset = presets.find(function (currentPreset) { return currentPreset.name === e.target.value; });
        if (preset) {
            angleElem.value = "" + preset.angle;
            rulesElem.value = "" + preset.rules;
            axiomElem.value = "" + preset.axiom;
            lsystem = new _LSystem__WEBPACK_IMPORTED_MODULE_2__["LSystem"](preset.axiom, parseRules(preset.rules));
        }
        draw(+iterationsElem.value, +angleElem.value, +lineElem.value, +startAngleElem.value);
    });
    axiomElem.addEventListener('input', function (e) {
        if (e.currentTarget) {
            lsystem = new _LSystem__WEBPACK_IMPORTED_MODULE_2__["LSystem"](e.currentTarget.value, rules);
            draw(+iterationsElem.value, +angleElem.value, +lineElem.value, +startAngleElem.value);
        }
    });
    iterationsElem.addEventListener('input', function (e) {
        if (e.currentTarget) {
            draw(+e.currentTarget.value, +angleElem.value, +lineElem.value, +startAngleElem.value);
        }
    });
    angleElem.addEventListener('input', function (e) {
        if (e.currentTarget) {
            draw(+iterationsElem.value, +e.currentTarget.value, +lineElem.value, +startAngleElem.value);
        }
    });
    lineElem.addEventListener('input', function (e) {
        if (e.currentTarget) {
            draw(+iterationsElem.value, +angleElem.value, +e.currentTarget.value, +startAngleElem.value);
        }
    });
    rulesElem.addEventListener('input', function (e) {
        if (e.currentTarget) {
            lsystem = new _LSystem__WEBPACK_IMPORTED_MODULE_2__["LSystem"](axiomElem.value, parseRules(e.target.value));
            draw(+iterationsElem.value, +angleElem.value, +lineElem.value, +startAngleElem.value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NhbnZhcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRHJhd2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9MU3lzdGVtLnRzIiwid2VicGFjazovLy8uL3NyYy9SdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9VSS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEVBLElBQU0sU0FBUyxHQUFHLFVBQUMsS0FBYSxJQUFhLFFBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsRUFBeEIsQ0FBd0IsQ0FBQztBQUV0RSxJQUFNLFNBQVMsR0FBRyxVQUFDLEtBQWEsSUFBYSxRQUFDLENBQUMsS0FBSyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQXhCLENBQXdCLENBQUM7QUFFdEU7SUFPRSxrQkFDRSxLQUFhLEVBQ2IsTUFBYyxFQUNkLE1BQW1DLEVBQ25DLEVBQXFCLEVBQ3JCLE9BQW1CO1FBRm5CLGtDQUFz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Ozs7Ozs7Ozs7OztBQy9KMkI7QUFDN0IsaURBQUssRUFBRSxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImltcG9ydCB7IElDYW52YXMgfSBmcm9tICcuL0lDYW52YXMnO1xuaW1wb3J0IHsgSVBvaW50IH0gZnJvbSAnLi9Qb2ludCc7XG5cbmNvbnN0IHRvUmFkaWFucyA9IChhbmdsZTogbnVtYmVyKTogbnVtYmVyID0+ICgtYW5nbGUgKiBNYXRoLlBJIC8gMTgwKTtcblxuY29uc3QgdG9EZWdyZWVzID0gKGFuZ2xlOiBudW1iZXIpOiBudW1iZXIgPT4gLShhbmdsZSAqIDE4MCAvIE1hdGguUEkpO1xuXG5jbGFzcyBDYW52YXMyRCBpbXBsZW1lbnRzIElDYW52YXMge1xuICBwcml2YXRlIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICBwcml2YXRlIGFuZ2xlOiBudW1iZXIgPSAwO1xuICBwcml2YXRlIGxhc3Rwb3M6IElQb2ludCA9IHsgeDogMCwgeTogMCB9O1xuICBwcml2YXRlIHBhcmVudDogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgb3BhY2l0eTogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHdpZHRoOiBudW1iZXIsXG4gICAgaGVpZ2h0OiBudW1iZXIsXG4gICAgcGFyZW50OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmJvZHksXG4gICAgaWQ6IHN0cmluZyA9ICdjYW52YXMnLFxuICAgIG9wYWNpdHk6IG51bWJlciA9IDEsXG4gICkge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIGNhbnZhcy5pZCA9IGlkO1xuICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGNhbnZhcyk7XG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKSBhcyBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gICAgdGhpcy5yZXNpemUgPSB0aGlzLnJlc2l6ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub3BhY2l0eSA9IG9wYWNpdHk7XG4gICAgLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVzaXplKTtcbiAgfVxuICBwdWJsaWMgbW92ZVRvKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgdGhpcy5jdHgubW92ZVRvKHgsIHkpO1xuICAgIHRoaXMubGFzdHBvcyA9IHsgeCwgeSB9O1xuICB9XG5cbiAgcHVibGljIGRyYXdMaW5lKGxlbmd0aDogbnVtYmVyLCBvcGFjaXR5OiBudW1iZXIgPSB0aGlzLm9wYWNpdHksIGNvbG9yOiBzdHJpbmcgPSAncmdiKDAsMCwwKScpIHtcbiAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IGByZ2JhKCR7Y29sb3Iuc2xpY2UoNCwgLTEpfSwgJHtvcGFjaXR5fSlgO1xuICAgIGNvbnN0IHhQb3MgPSBsZW5ndGggKiBNYXRoLmNvcyh0aGlzLmFuZ2xlKTtcbiAgICBjb25zdCB5UG9zID0gbGVuZ3RoICogTWF0aC5zaW4odGhpcy5hbmdsZSk7XG4gICAgY29uc3QgcG9pbnQgPSB7IHg6IHRoaXMubGFzdHBvcy54ICsgeFBvcywgeTogdGhpcy5sYXN0cG9zLnkgKyB5UG9zIH07XG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgdGhpcy5tb3ZlVG8odGhpcy5sYXN0cG9zLngsIHRoaXMubGFzdHBvcy55KTtcbiAgICB0aGlzLmN0eC5saW5lVG8ocG9pbnQueCwgcG9pbnQueSk7XG4gICAgdGhpcy5jdHguc3Ryb2tlKCk7XG4gICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gICAgdGhpcy5sYXN0cG9zID0gcG9pbnQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0QW5nbGUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdG9EZWdyZWVzKHRoaXMuYW5nbGUpO1xuICB9XG5cbiAgcHVibGljIHNldEFuZ2xlKGFuZ2xlOiBudW1iZXIpIHtcbiAgICB0aGlzLmFuZ2xlID0gdG9SYWRpYW5zKGFuZ2xlKTtcbiAgfVxuXG4gIHB1YmxpYyByb3RhdGUoYW5nbGU6IG51bWJlcikge1xuICAgIHRoaXMuc2V0QW5nbGUodG9EZWdyZWVzKHRoaXMuYW5nbGUpICsgYW5nbGUpO1xuICB9XG5cbiAgcHVibGljIGNsZWFyKCkge1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICcjZTZlNmU2JztcbiAgICB0aGlzLmN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmN0eC5jYW52YXMud2lkdGgsIHRoaXMuY3R4LmNhbnZhcy5oZWlnaHQpO1xuICB9XG5cbiAgcHVibGljIGdldExhc3RQb2ludCgpOiBJUG9pbnQge1xuICAgIHJldHVybiB7IC4uLnRoaXMubGFzdHBvcyB9O1xuICB9XG5cbiAgcHVibGljIHNldExhc3RQb2ludChwb2ludDogSVBvaW50KSB7XG4gICAgdGhpcy5sYXN0cG9zID0geyAuLi5wb2ludCB9O1xuICB9XG5cbiAgcHVibGljIGdldFNpemUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhlaWdodDogdGhpcy5jdHguY2FudmFzLmhlaWdodCxcbiAgICAgIHdpZHRoOiB0aGlzLmN0eC5jYW52YXMud2lkdGgsXG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyByZXNldCgpIHtcbiAgICB0aGlzLmNsZWFyKCk7XG4gICAgdGhpcy5zZXRMYXN0UG9pbnQoXG4gICAgICB7XG4gICAgICAgIHg6IHRoaXMuY3R4LmNhbnZhcy53aWR0aCAvIDIsXG4gICAgICAgIHk6IHRoaXMuY3R4LmNhbnZhcy5oZWlnaHQgLyAyLFxuICAgICAgfSxcbiAgICApO1xuICAgIHRoaXMuYW5nbGUgPSAwO1xuICB9XG5cbiAgcHJpdmF0ZSByZXNpemUoKSB7XG4gICAgY29uc3QgY2FudmFzID0gdGhpcy5jdHguY2FudmFzO1xuICAgIHRoaXMuY3R4LmNhbnZhcy53aWR0aCA9IHRoaXMucGFyZW50LmNsaWVudFdpZHRoO1xuICAgIHRoaXMuY3R4LmNhbnZhcy5oZWlnaHQgPSB0aGlzLnBhcmVudC5jbGllbnRIZWlnaHQ7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKGNhbnZhcywgMCwgMCk7XG4gIH1cblxufVxuXG5leHBvcnQgeyBDYW52YXMyRCB9O1xuIiwiaW1wb3J0IHsgSUNhbnZhcyB9IGZyb20gJy4vSUNhbnZhcyc7XG5pbXBvcnQgeyBJUG9pbnQgfSBmcm9tICcuL1BvaW50JztcbmNsYXNzIERyYXdlciB7XG4gIHB1YmxpYyBzdGF0aWMgZHJhdyhsc3lzdGVtU3RyaW5nOiBzdHJpbmcsIGFuZ2xlOiBudW1iZXIsIGNhbnZhczogSUNhbnZhcywgbGVuZ3RoOiBudW1iZXIgPSA1MCkge1xuICAgIGNvbnN0IHN0YWNrOiBBcnJheTx7IHBvaW50OiBJUG9pbnQsIGFuZ2xlOiBudW1iZXIgfT4gPSBbXTtcbiAgICBsc3lzdGVtU3RyaW5nLnNwbGl0KCcnKS5mb3JFYWNoKChsZXR0ZXI6IHN0cmluZykgPT4ge1xuICAgICAgc3dpdGNoIChsZXR0ZXIpIHtcbiAgICAgICAgY2FzZSAnRic6XG4gICAgICAgIGNhc2UgJ0cnOlxuICAgICAgICAgIGNhbnZhcy5kcmF3TGluZShsZW5ndGgsIDAuNSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjYXNlICcrJzpcbiAgICAgICAgICBjYW52YXMucm90YXRlKGFuZ2xlKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNhc2UgJy0nOlxuICAgICAgICAgIGNhbnZhcy5yb3RhdGUoLWFuZ2xlKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNhc2UgJ1snOlxuICAgICAgICAgIHN0YWNrLnB1c2goeyBwb2ludDogY2FudmFzLmdldExhc3RQb2ludCgpLCBhbmdsZTogY2FudmFzLmdldEFuZ2xlKCkgfSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjYXNlICddJzpcbiAgICAgICAgICBjb25zdCBzYXZlZERhdGEgPSBzdGFjay5wb3AoKTtcbiAgICAgICAgICBpZiAoc2F2ZWREYXRhKSB7XG4gICAgICAgICAgICBjYW52YXMuc2V0QW5nbGUoc2F2ZWREYXRhLmFuZ2xlKTtcbiAgICAgICAgICAgIGNhbnZhcy5zZXRMYXN0UG9pbnQoc2F2ZWREYXRhLnBvaW50KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCB7IERyYXdlciB9O1xuIiwiaW1wb3J0IHsgSVJ1bGUgfSBmcm9tICcuL1J1bGUnO1xuXG5jbGFzcyBMU3lzdGVtIHtcbiAgcHVibGljIHN0YXRpYyBtYXBSdWxlcyhydWxlczogSVJ1bGVbXSkge1xuICAgIHJldHVybiBydWxlcy5yZWR1Y2UoKHJ1bGVzT2JqOiBvYmplY3QsIHJ1bGU6IElSdWxlKSA9PiB7XG4gICAgICBydWxlc09ialtydWxlLmZyb21dID0gcnVsZS50bztcbiAgICAgIHJldHVybiBydWxlc09iajtcbiAgICB9LCBPYmplY3QoKSk7XG4gIH1cblxuICBwcml2YXRlIGF4aW9tOiBzdHJpbmc7XG4gIHByaXZhdGUgcnVsZXM6IElSdWxlW107XG5cbiAgY29uc3RydWN0b3IoYXhpb206IHN0cmluZywgcnVsZXM6IElSdWxlW10pIHtcbiAgICB0aGlzLmF4aW9tID0gYXhpb207XG4gICAgdGhpcy5ydWxlcyA9IExTeXN0ZW0ubWFwUnVsZXMocnVsZXMpO1xuICB9XG5cbiAgcHVibGljIGdlbmVyYXRlKGl0ZXJhdGlvbnM6IG51bWJlcik6IHN0cmluZyB7XG4gICAgbGV0IG91dHB1dDogc3RyaW5nID0gdGhpcy5heGlvbTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZXJhdGlvbnM7ICsraSkge1xuICAgICAgb3V0cHV0ID0gdGhpcy5tYXAob3V0cHV0KTtcbiAgICB9XG4gICAgcmV0dXJuIG91dHB1dDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRBeGlvbSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmF4aW9tO1xuICB9XG5cbiAgcHVibGljIGdldFJ1bGVzKCk6IElSdWxlW10ge1xuICAgIHJldHVybiB0aGlzLnJ1bGVzO1xuICB9XG5cbiAgcHJpdmF0ZSBtYXAoYXhpb206IHN0cmluZyk6IHN0cmluZyB7XG4gICAgbGV0IG91dHB1dDogc3RyaW5nW10gPSBheGlvbS5zcGxpdCgnJyk7XG4gICAgb3V0cHV0ID0gb3V0cHV0Lm1hcCgobGV0dGVyKSA9PiB7XG4gICAgICBjb25zdCBtYXBwaW5nOiBzdHJpbmcgPSB0aGlzLnJ1bGVzW2xldHRlcl07XG4gICAgICByZXR1cm4gbWFwcGluZyB8fCBsZXR0ZXI7XG4gICAgfSk7XG4gICAgcmV0dXJuIG91dHB1dC5qb2luKCcnKTtcbiAgfVxufVxuXG5leHBvcnQgeyBMU3lzdGVtIH07XG4iLCJleHBvcnQgaW50ZXJmYWNlIElSdWxlIHtcbiAgZnJvbTogc3RyaW5nO1xuICB0bzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgaXNJUnVsZSA9IChvYmo6IGFueSkgPT4ge1xuICBpZiAoIShvYmogaW5zdGFuY2VvZiBPYmplY3QpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICBpZiAoa2V5cy5sZW5ndGggIT09IDIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIGtleXMuaW5kZXhPZignZnJvbScpICsga2V5cy5pbmRleE9mKCd0bycpID09PSAxO1xufTtcbiIsImltcG9ydCB7IENhbnZhczJEIH0gZnJvbSAnLi9DYW52YXMnO1xuaW1wb3J0IHsgRHJhd2VyIH0gZnJvbSAnLi9EcmF3ZXInO1xuaW1wb3J0IHsgTFN5c3RlbSB9IGZyb20gJy4vTFN5c3RlbSc7XG5pbXBvcnQgeyBJUnVsZSwgaXNJUnVsZSB9IGZyb20gJy4vUnVsZSc7XG5cbmNvbnN0IHByZXNldHMgPSBbXG4gIHtcbiAgICBhbmdsZTogNjAsXG4gICAgYXhpb206ICdGLS1GLS1GJyxcbiAgICBuYW1lOiAnS29jaCBTbm93Zmxha2UnLFxuICAgIHJ1bGVzOiAnRiA+IEYrRi0tRitGJyxcbiAgfSwge1xuICAgIGFuZ2xlOiA5MCxcbiAgICBheGlvbTogJ0YnLFxuICAgIG5hbWU6ICdLb2NoIEN1cnZlJyxcbiAgICBydWxlczogJ0YgPiBGK0YtRi1GK0YnLFxuICB9LCB7XG4gICAgYW5nbGU6IDYwLFxuICAgIGF4aW9tOiAnRitGK0YrRitGK0YnLFxuICAgIG5hbWU6ICdIZXhhIGZsYWtlJyxcbiAgICBydWxlczogJ0YgPiBGK0YrRi0tRi0tRitGK0YnLFxuICB9LCB7XG4gICAgYW5nbGU6IDkwLFxuICAgIGF4aW9tOiAnWCcsXG4gICAgbmFtZTogJ0xpbmRlbm1heWVyIGN1cnZlJyxcbiAgICBydWxlczogJ1ggPiBYRllGWCtGK1lGWEZZLUYtWEZZRlhcXG5ZID4gWUZYRlktRi1YRllGWCtGK1lGWEZZJyxcbiAgfSwge1xuICAgIGFuZ2xlOiA2MCxcbiAgICBheGlvbTogJ0YnLFxuICAgIG5hbWU6ICdHb3NwZXIgY3VydmUnLFxuICAgIHJ1bGVzOiAnRiA+IEYtRy0tRytGKytGRitHLVxcbkcgPiArRi1HRy0tRy1GKytGK0cnLFxuICB9LCB7XG4gICAgYW5nbGU6IDEyMCxcbiAgICBheGlvbTogJ0YtRy1HJyxcbiAgICBuYW1lOiAnU2llcnBpbnNraSB0cmlhbmdsZScsXG4gICAgcnVsZXM6ICdGID4gRi1HK0YrRy1GXFxuRyA+IEdHJyxcbiAgfSwge1xuICAgIGFuZ2xlOiA2MCxcbiAgICBheGlvbTogJ0YnLFxuICAgIG5hbWU6ICdTaWVycGluc2tpIGFycm93IGhlYWQgdHJpYW5nbGUnLFxuICAgIHJ1bGVzOiAnRiA+IEctRi1HXFxuRyA+IEYrRytGJyxcbiAgfSwge1xuICAgIGFuZ2xlOiA5MCxcbiAgICBheGlvbTogJ0ZYJyxcbiAgICBuYW1lOiAnRHJhZ29uIGN1cnZlJyxcbiAgICBydWxlczogJ1ggPiBYK1lGK1xcblkgPiAtRlgtWScsXG4gIH0sIHtcbiAgICBhbmdsZTogMjUsXG4gICAgYXhpb206ICcrKytYJyxcbiAgICBuYW1lOiAnUGxhbnQnLFxuICAgIHJ1bGVzOiAnWCA+IEZbLVhdW1hdRlstWF0rRlhcXG5GID4gRkYnLFxuICB9LCB7XG4gICAgYW5nbGU6IDkwLFxuICAgIGF4aW9tOiAnQScsXG4gICAgbmFtZTogJ0hpbGJlcnQgQ3VydmUnLFxuICAgIHJ1bGVzOiAnQSA+IC1CRitBRkErRkItXFxuQiA+ICtBRi1CRkItRkErJyxcbiAgfSxcbl07XG5cbmNvbnN0IHBhcnNlUnVsZXMgPSAocnVsZXNTdHJpbmc6IHN0cmluZyk6IElSdWxlW10gPT4gcnVsZXNTdHJpbmcuc3BsaXQoJ1xcbicpLm1hcCgobGluZSkgPT4ge1xuICBjb25zdCBydWxlQXJyYXk6IHN0cmluZ1tdID0gbGluZS5zcGxpdCgnPicpO1xuICByZXR1cm4ge1xuICAgIGZyb206IHJ1bGVBcnJheVswXSAmJiBydWxlQXJyYXlbMF0udHJpbSgpLFxuICAgIHRvOiBydWxlQXJyYXlbMV0gJiYgcnVsZUFycmF5WzFdLnRyaW0oKSxcbiAgfTtcbn0pLmZpbHRlcigocnVsZTogSVJ1bGUpID0+IGlzSVJ1bGUocnVsZSkpO1xuXG5leHBvcnQgY29uc3Qgc2V0dXAgPSAoKSA9PiB7XG5cbiAgbGV0IHJvb3RFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKTtcbiAgaWYgKCFyb290RWxlbWVudCkge1xuICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtLmlkID0gJ3Jvb3QnO1xuICAgIHJvb3RFbGVtZW50ID0gZWxlbTtcbiAgfVxuICBjb25zdCBjYW52YXNXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIDwgNzY4ID8gd2luZG93LmlubmVyV2lkdGggOiB3aW5kb3cuaW5uZXJXaWR0aCAqIDAuNztcbiAgY29uc3QgY2FudmFzSGVpZ2h0ID0gd2luZG93LmlubmVyV2lkdGggPCA3NjggPyB3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjUgOiB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIGNvbnN0IGNhbnZhcyA9IG5ldyBDYW52YXMyRChjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0LCByb290RWxlbWVudCk7XG4gIGNvbnN0IGNhbnZhc1NpemUgPSBjYW52YXMuZ2V0U2l6ZSgpO1xuICBjYW52YXMuc2V0TGFzdFBvaW50KFxuICAgIHtcbiAgICAgIHg6IGNhbnZhc1NpemUud2lkdGggLyAyLFxuICAgICAgeTogY2FudmFzU2l6ZS5oZWlnaHQgLyAyLFxuICAgIH0sXG4gICk7XG5cbiAgY29uc3QgYXhpb21FbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F4aW9tJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgY29uc3QgaXRlcmF0aW9uc0VsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlcmF0aW9ucycpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gIGNvbnN0IGFuZ2xlRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbmdsZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gIGNvbnN0IGxpbmVFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpbmUnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICBjb25zdCBydWxlc0VsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncnVsZXMnKSBhcyBIVE1MVGV4dEFyZWFFbGVtZW50O1xuICBjb25zdCBwcmVzZXRzRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmVzZXRzJykgYXMgSFRNTFNlbGVjdEVsZW1lbnQ7XG4gIGNvbnN0IHN0YXJ0QW5nbGVFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0YW5nbGUnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuXG4gIHByZXNldHMuZm9yRWFjaCgocHJlc2V0KSA9PiB7XG4gICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgb3B0aW9uLmlubmVySFRNTCA9IHByZXNldC5uYW1lO1xuICAgIHByZXNldHNFbGVtLmFwcGVuZENoaWxkKG9wdGlvbik7XG4gIH0pO1xuXG4gIGNvbnN0IHJ1bGVzID0gcGFyc2VSdWxlcyhydWxlc0VsZW0udmFsdWUpO1xuXG4gIGxldCBsc3lzdGVtID0gbmV3IExTeXN0ZW0ocHJlc2V0c1swXS5heGlvbSwgcGFyc2VSdWxlcyhwcmVzZXRzWzBdLnJ1bGVzKSk7XG5cbiAgY29uc3QgZHJhdyA9IChpdGVyYXRpb25zOiBudW1iZXIsIGFuZ2xlOiBudW1iZXIsIGxpbmVMZW5ndGg6IG51bWJlciwgc3RhcnRhbmdsZTogbnVtYmVyKSA9PiB7XG4gICAgY2FudmFzLnJlc2V0KCk7XG4gICAgY2FudmFzLnNldEFuZ2xlKHN0YXJ0YW5nbGUpO1xuICAgIERyYXdlci5kcmF3KGxzeXN0ZW0uZ2VuZXJhdGUoaXRlcmF0aW9ucyksIGFuZ2xlLCBjYW52YXMsIGxpbmVMZW5ndGgpO1xuICB9O1xuXG4gIGFuZ2xlRWxlbS52YWx1ZSA9IGAke3ByZXNldHNbMF0uYW5nbGV9YDtcbiAgcnVsZXNFbGVtLnZhbHVlID0gYCR7cHJlc2V0c1swXS5ydWxlc31gO1xuICBkcmF3KCtpdGVyYXRpb25zRWxlbS52YWx1ZSwgK2FuZ2xlRWxlbS52YWx1ZSwgK2xpbmVFbGVtLnZhbHVlLCArc3RhcnRBbmdsZUVsZW0udmFsdWUpO1xuXG4gIHN0YXJ0QW5nbGVFbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGU6IGFueSkgPT4ge1xuICAgIGlmIChlLmN1cnJlbnRUYXJnZXQpIHtcbiAgICAgIGRyYXcoK2l0ZXJhdGlvbnNFbGVtLnZhbHVlLCArYW5nbGVFbGVtLnZhbHVlLCArbGluZUVsZW0udmFsdWUsICtlLmN1cnJlbnRUYXJnZXQudmFsdWUpO1xuICAgIH1cbiAgfSk7XG5cbiAgcHJlc2V0c0VsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGU6IGFueSkgPT4ge1xuICAgIGNvbnN0IHByZXNldCA9IHByZXNldHMuZmluZCgoY3VycmVudFByZXNldDogYW55KSA9PiBjdXJyZW50UHJlc2V0Lm5hbWUgPT09IGUudGFyZ2V0LnZhbHVlKTtcbiAgICBpZiAocHJlc2V0KSB7XG4gICAgICBhbmdsZUVsZW0udmFsdWUgPSBgJHtwcmVzZXQuYW5nbGV9YDtcbiAgICAgIHJ1bGVzRWxlbS52YWx1ZSA9IGAke3ByZXNldC5ydWxlc31gO1xuICAgICAgYXhpb21FbGVtLnZhbHVlID0gYCR7cHJlc2V0LmF4aW9tfWA7XG4gICAgICBsc3lzdGVtID0gbmV3IExTeXN0ZW0ocHJlc2V0LmF4aW9tLCBwYXJzZVJ1bGVzKHByZXNldC5ydWxlcykpO1xuICAgIH1cbiAgICBkcmF3KCtpdGVyYXRpb25zRWxlbS52YWx1ZSwgK2FuZ2xlRWxlbS52YWx1ZSwgK2xpbmVFbGVtLnZhbHVlLCArc3RhcnRBbmdsZUVsZW0udmFsdWUpO1xuICB9KTtcblxuICBheGlvbUVsZW0uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZTogYW55KSA9PiB7XG4gICAgaWYgKGUuY3VycmVudFRhcmdldCkge1xuICAgICAgbHN5c3RlbSA9IG5ldyBMU3lzdGVtKGUuY3VycmVudFRhcmdldC52YWx1ZSwgcnVsZXMpO1xuICAgICAgZHJhdygraXRlcmF0aW9uc0VsZW0udmFsdWUsICthbmdsZUVsZW0udmFsdWUsICtsaW5lRWxlbS52YWx1ZSwgK3N0YXJ0QW5nbGVFbGVtLnZhbHVlKTtcbiAgICB9XG4gIH0pO1xuXG4gIGl0ZXJhdGlvbnNFbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGU6IGFueSkgPT4ge1xuICAgIGlmIChlLmN1cnJlbnRUYXJnZXQpIHtcbiAgICAgIGRyYXcoK2UuY3VycmVudFRhcmdldC52YWx1ZSwgK2FuZ2xlRWxlbS52YWx1ZSwgK2xpbmVFbGVtLnZhbHVlLCArc3RhcnRBbmdsZUVsZW0udmFsdWUpO1xuICAgIH1cbiAgfSk7XG4gIGFuZ2xlRWxlbS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlOiBhbnkpID0+IHtcbiAgICBpZiAoZS5jdXJyZW50VGFyZ2V0KSB7XG4gICAgICBkcmF3KCtpdGVyYXRpb25zRWxlbS52YWx1ZSwgK2UuY3VycmVudFRhcmdldC52YWx1ZSwgK2xpbmVFbGVtLnZhbHVlLCArc3RhcnRBbmdsZUVsZW0udmFsdWUpO1xuICAgIH1cbiAgfSk7XG4gIGxpbmVFbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGU6IGFueSkgPT4ge1xuICAgIGlmIChlLmN1cnJlbnRUYXJnZXQpIHtcbiAgICAgIGRyYXcoK2l0ZXJhdGlvbnNFbGVtLnZhbHVlLCArYW5nbGVFbGVtLnZhbHVlLCArZS5jdXJyZW50VGFyZ2V0LnZhbHVlLCArc3RhcnRBbmdsZUVsZW0udmFsdWUpO1xuICAgIH1cbiAgfSk7XG4gIHJ1bGVzRWxlbS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlOiBhbnkpID0+IHtcbiAgICBpZiAoZS5jdXJyZW50VGFyZ2V0KSB7XG4gICAgICBsc3lzdGVtID0gbmV3IExTeXN0ZW0oYXhpb21FbGVtLnZhbHVlLCBwYXJzZVJ1bGVzKGUudGFyZ2V0LnZhbHVlKSk7XG4gICAgICBkcmF3KCtpdGVyYXRpb25zRWxlbS52YWx1ZSwgK2FuZ2xlRWxlbS52YWx1ZSwgK2xpbmVFbGVtLnZhbHVlLCArc3RhcnRBbmdsZUVsZW0udmFsdWUpO1xuICAgIH1cbiAgfSk7XG59O1xuIiwiaW1wb3J0IHsgc2V0dXAgfSBmcm9tICcuL1VJJztcbnNldHVwKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9