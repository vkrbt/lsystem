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
    function Canvas2D(width, height, parent, id) {
        if (parent === void 0) { parent = document.body; }
        if (id === void 0) { id = 'canvas'; }
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
        // window.addEventListener('resize', this.resize);
    }
    Canvas2D.prototype.moveTo = function (x, y) {
        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
        this.lastpos = { x: x, y: y };
    };
    Canvas2D.prototype.drawLine = function (length, color) {
        if (color === void 0) { color = '#000'; }
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
        rules: 'F => F-G+F+G-F\nG => GG',
    }, {
        angle: 60,
        axiom: 'F',
        name: 'Sierpinski arrow head triangle',
        rules: 'F => G-F-G\nG => F+G+F',
    }, {
        angle: 90,
        axiom: 'FX',
        name: 'Dragon curve',
        rules: 'X => X+YF+\nY => -FX-Y',
    }, {
        angle: 25,
        axiom: '+++X',
        name: 'Plant',
        rules: 'X => F[-X][X]F[-X]+FX\nF => FF',
    }, {
        angle: 90,
        axiom: 'A',
        name: 'Hilbert Curve',
        rules: 'A => -BF+AFA+FB-\nB => +AF-BFB-FA+',
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
    var canvas = new _Canvas__WEBPACK_IMPORTED_MODULE_0__["Canvas2D"](window.innerWidth * 0.7, window.innerHeight, rootElement);
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
    presets.forEach(function (preset) {
        var option = document.createElement('option');
        option.innerHTML = preset.name;
        presetsElem.appendChild(option);
    });
    var rules = parseRules(rulesElem.value);
    var lsystem = new _LSystem__WEBPACK_IMPORTED_MODULE_2__["LSystem"]('F-G-G', rules);
    var draw = function (iterations, angle, lineLength) {
        canvas.reset();
        _Drawer__WEBPACK_IMPORTED_MODULE_1__["Drawer"].draw(lsystem.generate(iterations), angle, canvas, lineLength);
    };
    draw(+iterationsElem.value, +angleElem.value, +lineElem.value);
    presetsElem.addEventListener('change', function (e) {
        var preset = presets.find(function (currentPreset) { return currentPreset.name === e.target.value; });
        if (preset) {
            lsystem = new _LSystem__WEBPACK_IMPORTED_MODULE_2__["LSystem"](preset.axiom, parseRules(preset.rules));
            angleElem.value = "" + preset.angle;
            rulesElem.value = "" + preset.rules;
        }
        draw(+iterationsElem.value, +angleElem.value, +lineElem.value);
    });
    axiomElem.addEventListener('input', function (e) {
        if (e.currentTarget) {
            lsystem = new _LSystem__WEBPACK_IMPORTED_MODULE_2__["LSystem"](e.currentTarget.value, rules);
        }
        draw(+iterationsElem.value, +angleElem.value, +lineElem.value);
    });
    iterationsElem.addEventListener('input', function (e) {
        draw(+e.currentTarget.value, +angleElem.value, +lineElem.value);
    });
    angleElem.addEventListener('input', function (e) {
        draw(+iterationsElem.value, +e.currentTarget.value, +lineElem.value);
    });
    lineElem.addEventListener('input', function (e) {
        draw(+iterationsElem.value, +angleElem.value, +e.currentTarget.value);
    });
    rulesElem.addEventListener('input', function (e) {
        if (e.currentTarget) {
            lsystem = new _LSystem__WEBPACK_IMPORTED_MODULE_2__["LSystem"](axiomElem.value, parseRules(e.target.value));
        }
        draw(+iterationsElem.value, +angleElem.value, +lineElem.value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NhbnZhcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRHJhd2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9MU3lzdGVtLnRzIiwid2VicGFjazovLy8uL3NyYy9SdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9VSS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEVBLElBQU0sU0FBUyxHQUFHLFVBQUMsS0FBYSxJQUFhLFFBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsRUFBeEIsQ0FBd0IsQ0FBQztBQUV0RSxJQUFNLFNBQVMsR0FBRyxVQUFDLEtBQWEsSUFBYSxRQUFDLENBQUMsS0FBSyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQXhCLENBQXdCLENBQUM7QUFFdEU7SUFNRSxrQkFDRSxLQUFhLEVBQ2IsTUFBYyxFQUNkLE1BQW1DLEVBQ25DLEVBQXFCO1FBRHJCLGtDQUFzQixRQUFRLENBQUMs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QUFDO0lBQ0gsUUFBUSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDLENBQU07UUFDeEMsSUFBSSxDQUFDLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hFLENBQUMsQ0FBQyxDQUFDO0lBQ0gsU0FBUyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDLENBQU07UUFDekMsSUFBSSxDQUFDLENBQUMsYUFBYSxFQUFFO1lBQ25CLE9BQU8sR0FBRyxJQUFJLGdEQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ3BFO1FBQ0QsSUFBSSxDQUFDLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakUsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzlJMkI7QUFDN0IsaURBQUssRUFBRSxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImltcG9ydCB7IElDYW52YXMgfSBmcm9tICcuL0lDYW52YXMnO1xuaW1wb3J0IHsgSVBvaW50IH0gZnJvbSAnLi9Qb2ludCc7XG5cbmNvbnN0IHRvUmFkaWFucyA9IChhbmdsZTogbnVtYmVyKTogbnVtYmVyID0+ICgtYW5nbGUgKiBNYXRoLlBJIC8gMTgwKTtcblxuY29uc3QgdG9EZWdyZWVzID0gKGFuZ2xlOiBudW1iZXIpOiBudW1iZXIgPT4gLShhbmdsZSAqIDE4MCAvIE1hdGguUEkpO1xuXG5jbGFzcyBDYW52YXMyRCBpbXBsZW1lbnRzIElDYW52YXMge1xuICBwcml2YXRlIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICBwcml2YXRlIGFuZ2xlOiBudW1iZXIgPSAwO1xuICBwcml2YXRlIGxhc3Rwb3M6IElQb2ludCA9IHsgeDogMCwgeTogMCB9O1xuICBwcml2YXRlIHBhcmVudDogSFRNTEVsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgd2lkdGg6IG51bWJlcixcbiAgICBoZWlnaHQ6IG51bWJlcixcbiAgICBwYXJlbnQ6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuYm9keSxcbiAgICBpZDogc3RyaW5nID0gJ2NhbnZhcycsXG4gICkge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIGNhbnZhcy5pZCA9IGlkO1xuICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGNhbnZhcyk7XG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKSBhcyBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gICAgdGhpcy5yZXNpemUgPSB0aGlzLnJlc2l6ZS5iaW5kKHRoaXMpO1xuICAgIC8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnJlc2l6ZSk7XG4gIH1cbiAgcHVibGljIG1vdmVUbyh4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgIHRoaXMuY3R4Lm1vdmVUbyh4LCB5KTtcbiAgICB0aGlzLmxhc3Rwb3MgPSB7IHgsIHkgfTtcbiAgfVxuXG4gIHB1YmxpYyBkcmF3TGluZShsZW5ndGg6IG51bWJlciwgY29sb3I6IHN0cmluZyA9ICcjMDAwJykge1xuICAgIGNvbnN0IHhQb3MgPSBsZW5ndGggKiBNYXRoLmNvcyh0aGlzLmFuZ2xlKTtcbiAgICBjb25zdCB5UG9zID0gbGVuZ3RoICogTWF0aC5zaW4odGhpcy5hbmdsZSk7XG4gICAgY29uc3QgcG9pbnQgPSB7IHg6IHRoaXMubGFzdHBvcy54ICsgeFBvcywgeTogdGhpcy5sYXN0cG9zLnkgKyB5UG9zIH07XG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgdGhpcy5tb3ZlVG8odGhpcy5sYXN0cG9zLngsIHRoaXMubGFzdHBvcy55KTtcbiAgICB0aGlzLmN0eC5saW5lVG8ocG9pbnQueCwgcG9pbnQueSk7XG4gICAgdGhpcy5jdHguc3Ryb2tlKCk7XG4gICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gICAgdGhpcy5sYXN0cG9zID0gcG9pbnQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0QW5nbGUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdG9EZWdyZWVzKHRoaXMuYW5nbGUpO1xuICB9XG5cbiAgcHVibGljIHNldEFuZ2xlKGFuZ2xlOiBudW1iZXIpIHtcbiAgICB0aGlzLmFuZ2xlID0gdG9SYWRpYW5zKGFuZ2xlKTtcbiAgfVxuXG4gIHB1YmxpYyByb3RhdGUoYW5nbGU6IG51bWJlcikge1xuICAgIHRoaXMuc2V0QW5nbGUodG9EZWdyZWVzKHRoaXMuYW5nbGUpICsgYW5nbGUpO1xuICB9XG5cbiAgcHVibGljIGNsZWFyKCkge1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICcjZTZlNmU2JztcbiAgICB0aGlzLmN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmN0eC5jYW52YXMud2lkdGgsIHRoaXMuY3R4LmNhbnZhcy5oZWlnaHQpO1xuICB9XG5cbiAgcHVibGljIGdldExhc3RQb2ludCgpOiBJUG9pbnQge1xuICAgIHJldHVybiB7IC4uLnRoaXMubGFzdHBvcyB9O1xuICB9XG5cbiAgcHVibGljIHNldExhc3RQb2ludChwb2ludDogSVBvaW50KSB7XG4gICAgdGhpcy5sYXN0cG9zID0geyAuLi5wb2ludCB9O1xuICB9XG5cbiAgcHVibGljIGdldFNpemUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhlaWdodDogdGhpcy5jdHguY2FudmFzLmhlaWdodCxcbiAgICAgIHdpZHRoOiB0aGlzLmN0eC5jYW52YXMud2lkdGgsXG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyByZXNldCgpIHtcbiAgICB0aGlzLmNsZWFyKCk7XG4gICAgdGhpcy5zZXRMYXN0UG9pbnQoXG4gICAgICB7XG4gICAgICAgIHg6IHRoaXMuY3R4LmNhbnZhcy53aWR0aCAvIDIsXG4gICAgICAgIHk6IHRoaXMuY3R4LmNhbnZhcy5oZWlnaHQgLyAyLFxuICAgICAgfSxcbiAgICApO1xuICAgIHRoaXMuYW5nbGUgPSAwO1xuICB9XG5cbiAgcHJpdmF0ZSByZXNpemUoKSB7XG4gICAgY29uc3QgY2FudmFzID0gdGhpcy5jdHguY2FudmFzO1xuICAgIHRoaXMuY3R4LmNhbnZhcy53aWR0aCA9IHRoaXMucGFyZW50LmNsaWVudFdpZHRoO1xuICAgIHRoaXMuY3R4LmNhbnZhcy5oZWlnaHQgPSB0aGlzLnBhcmVudC5jbGllbnRIZWlnaHQ7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKGNhbnZhcywgMCwgMCk7XG4gIH1cblxufVxuXG5leHBvcnQgeyBDYW52YXMyRCB9O1xuIiwiaW1wb3J0IHsgSUNhbnZhcyB9IGZyb20gJy4vSUNhbnZhcyc7XG5pbXBvcnQgeyBJUG9pbnQgfSBmcm9tICcuL1BvaW50JztcbmNsYXNzIERyYXdlciB7XG4gIHB1YmxpYyBzdGF0aWMgZHJhdyhsc3lzdGVtU3RyaW5nOiBzdHJpbmcsIGFuZ2xlOiBudW1iZXIsIGNhbnZhczogSUNhbnZhcywgbGVuZ3RoOiBudW1iZXIgPSA1MCkge1xuICAgIGNvbnN0IHN0YWNrOiBBcnJheTx7IHBvaW50OiBJUG9pbnQsIGFuZ2xlOiBudW1iZXIgfT4gPSBbXTtcbiAgICBsc3lzdGVtU3RyaW5nLnNwbGl0KCcnKS5mb3JFYWNoKChsZXR0ZXI6IHN0cmluZykgPT4ge1xuICAgICAgc3dpdGNoIChsZXR0ZXIpIHtcbiAgICAgICAgY2FzZSAnRic6XG4gICAgICAgIGNhc2UgJ0cnOlxuICAgICAgICAgIGNhbnZhcy5kcmF3TGluZShsZW5ndGgpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY2FzZSAnKyc6XG4gICAgICAgICAgY2FudmFzLnJvdGF0ZShhbmdsZSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjYXNlICctJzpcbiAgICAgICAgICBjYW52YXMucm90YXRlKC1hbmdsZSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjYXNlICdbJzpcbiAgICAgICAgICBzdGFjay5wdXNoKHsgcG9pbnQ6IGNhbnZhcy5nZXRMYXN0UG9pbnQoKSwgYW5nbGU6IGNhbnZhcy5nZXRBbmdsZSgpIH0pO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY2FzZSAnXSc6XG4gICAgICAgICAgY29uc3Qgc2F2ZWREYXRhID0gc3RhY2sucG9wKCk7XG4gICAgICAgICAgaWYgKHNhdmVkRGF0YSkge1xuICAgICAgICAgICAgY2FudmFzLnNldEFuZ2xlKHNhdmVkRGF0YS5hbmdsZSk7XG4gICAgICAgICAgICBjYW52YXMuc2V0TGFzdFBvaW50KHNhdmVkRGF0YS5wb2ludCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgeyBEcmF3ZXIgfTtcbiIsImltcG9ydCB7IElSdWxlIH0gZnJvbSAnLi9SdWxlJztcblxuY2xhc3MgTFN5c3RlbSB7XG4gIHB1YmxpYyBzdGF0aWMgbWFwUnVsZXMocnVsZXM6IElSdWxlW10pIHtcbiAgICByZXR1cm4gcnVsZXMucmVkdWNlKChydWxlc09iajogb2JqZWN0LCBydWxlOiBJUnVsZSkgPT4ge1xuICAgICAgcnVsZXNPYmpbcnVsZS5mcm9tXSA9IHJ1bGUudG87XG4gICAgICByZXR1cm4gcnVsZXNPYmo7XG4gICAgfSwgT2JqZWN0KCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBheGlvbTogc3RyaW5nO1xuICBwcml2YXRlIHJ1bGVzOiBJUnVsZVtdO1xuXG4gIGNvbnN0cnVjdG9yKGF4aW9tOiBzdHJpbmcsIHJ1bGVzOiBJUnVsZVtdKSB7XG4gICAgdGhpcy5heGlvbSA9IGF4aW9tO1xuICAgIHRoaXMucnVsZXMgPSBMU3lzdGVtLm1hcFJ1bGVzKHJ1bGVzKTtcbiAgfVxuXG4gIHB1YmxpYyBnZW5lcmF0ZShpdGVyYXRpb25zOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGxldCBvdXRwdXQ6IHN0cmluZyA9IHRoaXMuYXhpb207XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVyYXRpb25zOyArK2kpIHtcbiAgICAgIG91dHB1dCA9IHRoaXMubWFwKG91dHB1dCk7XG4gICAgfVxuICAgIHJldHVybiBvdXRwdXQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0QXhpb20oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5heGlvbTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRSdWxlcygpOiBJUnVsZVtdIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlcztcbiAgfVxuXG4gIHByaXZhdGUgbWFwKGF4aW9tOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGxldCBvdXRwdXQ6IHN0cmluZ1tdID0gYXhpb20uc3BsaXQoJycpO1xuICAgIG91dHB1dCA9IG91dHB1dC5tYXAoKGxldHRlcikgPT4ge1xuICAgICAgY29uc3QgbWFwcGluZzogc3RyaW5nID0gdGhpcy5ydWxlc1tsZXR0ZXJdO1xuICAgICAgcmV0dXJuIG1hcHBpbmcgfHwgbGV0dGVyO1xuICAgIH0pO1xuICAgIHJldHVybiBvdXRwdXQuam9pbignJyk7XG4gIH1cbn1cblxuZXhwb3J0IHsgTFN5c3RlbSB9O1xuIiwiZXhwb3J0IGludGVyZmFjZSBJUnVsZSB7XG4gIGZyb206IHN0cmluZztcbiAgdG86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IGlzSVJ1bGUgPSAob2JqOiBhbnkpID0+IHtcbiAgaWYgKCEob2JqIGluc3RhbmNlb2YgT2JqZWN0KSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgaWYgKGtleXMubGVuZ3RoICE9PSAyKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiBrZXlzLmluZGV4T2YoJ2Zyb20nKSArIGtleXMuaW5kZXhPZigndG8nKSA9PT0gMTtcbn07XG4iLCJpbXBvcnQgeyBDYW52YXMyRCB9IGZyb20gJy4vQ2FudmFzJztcbmltcG9ydCB7IERyYXdlciB9IGZyb20gJy4vRHJhd2VyJztcbmltcG9ydCB7IExTeXN0ZW0gfSBmcm9tICcuL0xTeXN0ZW0nO1xuaW1wb3J0IHsgSVJ1bGUsIGlzSVJ1bGUgfSBmcm9tICcuL1J1bGUnO1xuXG5jb25zdCBwcmVzZXRzID0gW1xuICB7XG4gICAgYW5nbGU6IDYwLFxuICAgIGF4aW9tOiAnRi0tRi0tRicsXG4gICAgbmFtZTogJ0tvY2ggU25vd2ZsYWtlJyxcbiAgICBydWxlczogJ0YgPiBGK0YtLUYrRicsXG4gIH0sIHtcbiAgICBhbmdsZTogOTAsXG4gICAgYXhpb206ICdGJyxcbiAgICBuYW1lOiAnS29jaCBDdXJ2ZScsXG4gICAgcnVsZXM6ICdGID4gRitGLUYtRitGJyxcbiAgfSwge1xuICAgIGFuZ2xlOiA2MCxcbiAgICBheGlvbTogJ0YrRitGK0YrRitGJyxcbiAgICBuYW1lOiAnSGV4YSBmbGFrZScsXG4gICAgcnVsZXM6ICdGID4gRitGK0YtLUYtLUYrRitGJyxcbiAgfSwge1xuICAgIGFuZ2xlOiA5MCxcbiAgICBheGlvbTogJ1gnLFxuICAgIG5hbWU6ICdMaW5kZW5tYXllciBjdXJ2ZScsXG4gICAgcnVsZXM6ICdYID4gWEZZRlgrRitZRlhGWS1GLVhGWUZYXFxuWSA+IFlGWEZZLUYtWEZZRlgrRitZRlhGWScsXG4gIH0sIHtcbiAgICBhbmdsZTogNjAsXG4gICAgYXhpb206ICdGJyxcbiAgICBuYW1lOiAnR29zcGVyIGN1cnZlJyxcbiAgICBydWxlczogJ0YgPiBGLUctLUcrRisrRkYrRy1cXG5HID4gK0YtR0ctLUctRisrRitHJyxcbiAgfSwge1xuICAgIGFuZ2xlOiAxMjAsXG4gICAgYXhpb206ICdGLUctRycsXG4gICAgbmFtZTogJ1NpZXJwaW5za2kgdHJpYW5nbGUnLFxuICAgIHJ1bGVzOiAnRiA9PiBGLUcrRitHLUZcXG5HID0+IEdHJyxcbiAgfSwge1xuICAgIGFuZ2xlOiA2MCxcbiAgICBheGlvbTogJ0YnLFxuICAgIG5hbWU6ICdTaWVycGluc2tpIGFycm93IGhlYWQgdHJpYW5nbGUnLFxuICAgIHJ1bGVzOiAnRiA9PiBHLUYtR1xcbkcgPT4gRitHK0YnLFxuICB9LCB7XG4gICAgYW5nbGU6IDkwLFxuICAgIGF4aW9tOiAnRlgnLFxuICAgIG5hbWU6ICdEcmFnb24gY3VydmUnLFxuICAgIHJ1bGVzOiAnWCA9PiBYK1lGK1xcblkgPT4gLUZYLVknLFxuICB9LCB7XG4gICAgYW5nbGU6IDI1LFxuICAgIGF4aW9tOiAnKysrWCcsXG4gICAgbmFtZTogJ1BsYW50JyxcbiAgICBydWxlczogJ1ggPT4gRlstWF1bWF1GWy1YXStGWFxcbkYgPT4gRkYnLFxuICB9LCB7XG4gICAgYW5nbGU6IDkwLFxuICAgIGF4aW9tOiAnQScsXG4gICAgbmFtZTogJ0hpbGJlcnQgQ3VydmUnLFxuICAgIHJ1bGVzOiAnQSA9PiAtQkYrQUZBK0ZCLVxcbkIgPT4gK0FGLUJGQi1GQSsnLFxuICB9LFxuXTtcblxuY29uc3QgcGFyc2VSdWxlcyA9IChydWxlc1N0cmluZzogc3RyaW5nKTogSVJ1bGVbXSA9PiBydWxlc1N0cmluZy5zcGxpdCgnXFxuJykubWFwKChsaW5lKSA9PiB7XG4gIGNvbnN0IHJ1bGVBcnJheTogc3RyaW5nW10gPSBsaW5lLnNwbGl0KCc+Jyk7XG4gIHJldHVybiB7XG4gICAgZnJvbTogcnVsZUFycmF5WzBdICYmIHJ1bGVBcnJheVswXS50cmltKCksXG4gICAgdG86IHJ1bGVBcnJheVsxXSAmJiBydWxlQXJyYXlbMV0udHJpbSgpLFxuICB9O1xufSkuZmlsdGVyKChydWxlOiBJUnVsZSkgPT4gaXNJUnVsZShydWxlKSk7XG5cbmV4cG9ydCBjb25zdCBzZXR1cCA9ICgpID0+IHtcblxuICBsZXQgcm9vdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xuICBpZiAoIXJvb3RFbGVtZW50KSB7XG4gICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW0uaWQgPSAncm9vdCc7XG4gICAgcm9vdEVsZW1lbnQgPSBlbGVtO1xuICB9XG5cbiAgY29uc3QgY2FudmFzID0gbmV3IENhbnZhczJEKHdpbmRvdy5pbm5lcldpZHRoICogMC43LCB3aW5kb3cuaW5uZXJIZWlnaHQsIHJvb3RFbGVtZW50KTtcbiAgY29uc3QgY2FudmFzU2l6ZSA9IGNhbnZhcy5nZXRTaXplKCk7XG4gIGNhbnZhcy5zZXRMYXN0UG9pbnQoXG4gICAge1xuICAgICAgeDogY2FudmFzU2l6ZS53aWR0aCAvIDIsXG4gICAgICB5OiBjYW52YXNTaXplLmhlaWdodCAvIDIsXG4gICAgfSxcbiAgKTtcblxuICBjb25zdCBheGlvbUVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXhpb20nKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICBjb25zdCBpdGVyYXRpb25zRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVyYXRpb25zJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgY29uc3QgYW5nbGVFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FuZ2xlJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgY29uc3QgbGluZUVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGluZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gIGNvbnN0IHJ1bGVzRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdydWxlcycpIGFzIEhUTUxUZXh0QXJlYUVsZW1lbnQ7XG5cbiAgY29uc3QgcHJlc2V0c0VsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJlc2V0cycpIGFzIEhUTUxTZWxlY3RFbGVtZW50O1xuXG4gIHByZXNldHMuZm9yRWFjaCgocHJlc2V0KSA9PiB7XG4gICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgb3B0aW9uLmlubmVySFRNTCA9IHByZXNldC5uYW1lO1xuICAgIHByZXNldHNFbGVtLmFwcGVuZENoaWxkKG9wdGlvbik7XG4gIH0pO1xuXG4gIGNvbnN0IHJ1bGVzID0gcGFyc2VSdWxlcyhydWxlc0VsZW0udmFsdWUpO1xuXG4gIGxldCBsc3lzdGVtID0gbmV3IExTeXN0ZW0oJ0YtRy1HJywgcnVsZXMpO1xuXG4gIGNvbnN0IGRyYXcgPSAoaXRlcmF0aW9uczogbnVtYmVyLCBhbmdsZTogbnVtYmVyLCBsaW5lTGVuZ3RoOiBudW1iZXIpID0+IHtcbiAgICBjYW52YXMucmVzZXQoKTtcbiAgICBEcmF3ZXIuZHJhdyhsc3lzdGVtLmdlbmVyYXRlKGl0ZXJhdGlvbnMpLCBhbmdsZSwgY2FudmFzLCBsaW5lTGVuZ3RoKTtcbiAgfTtcblxuICBkcmF3KCtpdGVyYXRpb25zRWxlbS52YWx1ZSwgK2FuZ2xlRWxlbS52YWx1ZSwgK2xpbmVFbGVtLnZhbHVlKTtcblxuICBwcmVzZXRzRWxlbS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZTogYW55KSA9PiB7XG4gICAgY29uc3QgcHJlc2V0ID0gcHJlc2V0cy5maW5kKChjdXJyZW50UHJlc2V0OiBhbnkpID0+IGN1cnJlbnRQcmVzZXQubmFtZSA9PT0gZS50YXJnZXQudmFsdWUpO1xuICAgIGlmIChwcmVzZXQpIHtcbiAgICAgIGxzeXN0ZW0gPSBuZXcgTFN5c3RlbShwcmVzZXQuYXhpb20sIHBhcnNlUnVsZXMocHJlc2V0LnJ1bGVzKSk7XG4gICAgICBhbmdsZUVsZW0udmFsdWUgPSBgJHtwcmVzZXQuYW5nbGV9YDtcbiAgICAgIHJ1bGVzRWxlbS52YWx1ZSA9IGAke3ByZXNldC5ydWxlc31gO1xuICAgIH1cbiAgICBkcmF3KCtpdGVyYXRpb25zRWxlbS52YWx1ZSwgK2FuZ2xlRWxlbS52YWx1ZSwgK2xpbmVFbGVtLnZhbHVlKTtcbiAgfSk7XG5cbiAgYXhpb21FbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGU6IGFueSkgPT4ge1xuICAgIGlmIChlLmN1cnJlbnRUYXJnZXQpIHtcbiAgICAgIGxzeXN0ZW0gPSBuZXcgTFN5c3RlbShlLmN1cnJlbnRUYXJnZXQudmFsdWUsIHJ1bGVzKTtcbiAgICB9XG4gICAgZHJhdygraXRlcmF0aW9uc0VsZW0udmFsdWUsICthbmdsZUVsZW0udmFsdWUsICtsaW5lRWxlbS52YWx1ZSk7XG4gIH0pO1xuXG4gIGl0ZXJhdGlvbnNFbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGU6IGFueSkgPT4ge1xuICAgIGRyYXcoK2UuY3VycmVudFRhcmdldC52YWx1ZSwgK2FuZ2xlRWxlbS52YWx1ZSwgK2xpbmVFbGVtLnZhbHVlKTtcbiAgfSk7XG4gIGFuZ2xlRWxlbS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlOiBhbnkpID0+IHtcbiAgICBkcmF3KCtpdGVyYXRpb25zRWxlbS52YWx1ZSwgK2UuY3VycmVudFRhcmdldC52YWx1ZSwgK2xpbmVFbGVtLnZhbHVlKTtcbiAgfSk7XG4gIGxpbmVFbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGU6IGFueSkgPT4ge1xuICAgIGRyYXcoK2l0ZXJhdGlvbnNFbGVtLnZhbHVlLCArYW5nbGVFbGVtLnZhbHVlLCArZS5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcbiAgfSk7XG4gIHJ1bGVzRWxlbS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlOiBhbnkpID0+IHtcbiAgICBpZiAoZS5jdXJyZW50VGFyZ2V0KSB7XG4gICAgICBsc3lzdGVtID0gbmV3IExTeXN0ZW0oYXhpb21FbGVtLnZhbHVlLCBwYXJzZVJ1bGVzKGUudGFyZ2V0LnZhbHVlKSk7XG4gICAgfVxuICAgIGRyYXcoK2l0ZXJhdGlvbnNFbGVtLnZhbHVlLCArYW5nbGVFbGVtLnZhbHVlLCArbGluZUVsZW0udmFsdWUpO1xuICB9KTtcbn07XG4iLCJpbXBvcnQgeyBzZXR1cCB9IGZyb20gJy4vVUknO1xuc2V0dXAoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=