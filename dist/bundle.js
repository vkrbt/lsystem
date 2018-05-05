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
    var lsystem = new _LSystem__WEBPACK_IMPORTED_MODULE_2__["LSystem"](presets[0].axiom, parseRules(presets[0].rules));
    var draw = function (iterations, angle, lineLength) {
        canvas.reset();
        _Drawer__WEBPACK_IMPORTED_MODULE_1__["Drawer"].draw(lsystem.generate(iterations), angle, canvas, lineLength);
    };
    angleElem.value = "" + presets[0].angle;
    rulesElem.value = "" + presets[0].rules;
    draw(+iterationsElem.value, +angleElem.value, +lineElem.value);
    presetsElem.addEventListener('change', function (e) {
        var preset = presets.find(function (currentPreset) { return currentPreset.name === e.target.value; });
        if (preset) {
            angleElem.value = "" + preset.angle;
            rulesElem.value = "" + preset.rules;
            lsystem = new _LSystem__WEBPACK_IMPORTED_MODULE_2__["LSystem"](preset.axiom, parseRules(preset.rules));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NhbnZhcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRHJhd2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9MU3lzdGVtLnRzIiwid2VicGFjazovLy8uL3NyYy9SdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9VSS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEVBLElBQU0sU0FBUyxHQUFHLFVBQUMsS0FBYSxJQUFhLFFBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsRUFBeEIsQ0FBd0IsQ0FBQztBQUV0RSxJQUFNLFNBQVMsR0FBRyxVQUFDLEtBQWEsSUFBYSxRQUFDLENBQUMsS0FBSyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQXhCLENBQXdCLENBQUM7QUFFdEU7SUFNRSxrQkFDRSxLQUFhLEVBQ2IsTUFBYyxFQUNkLE1BQW1DLEVBQ25DLEVBQXFCO1FBRHJCLGtDQUFzQixRQUFRLENBQUMs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LENBQUM7SUFDbEUsQ0FBQyxDQUFDLENBQUM7SUFDSCxTQUFTLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUMsQ0FBTTtRQUN6QyxJQUFJLENBQUMsQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkUsQ0FBQyxDQUFDLENBQUM7SUFDSCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUMsQ0FBTTtRQUN4QyxJQUFJLENBQUMsQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEUsQ0FBQyxDQUFDLENBQUM7SUFDSCxTQUFTLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUMsQ0FBTTtRQUN6QyxJQUFJLENBQUMsQ0FBQyxhQUFhLEVBQUU7WUFDbkIsT0FBTyxHQUFHLElBQUksZ0RBQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDcEU7UUFDRCxJQUFJLENBQUMsQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqRSxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDaEoyQjtBQUM3QixpREFBSyxFQUFFLENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0IHsgSUNhbnZhcyB9IGZyb20gJy4vSUNhbnZhcyc7XG5pbXBvcnQgeyBJUG9pbnQgfSBmcm9tICcuL1BvaW50JztcblxuY29uc3QgdG9SYWRpYW5zID0gKGFuZ2xlOiBudW1iZXIpOiBudW1iZXIgPT4gKC1hbmdsZSAqIE1hdGguUEkgLyAxODApO1xuXG5jb25zdCB0b0RlZ3JlZXMgPSAoYW5nbGU6IG51bWJlcik6IG51bWJlciA9PiAtKGFuZ2xlICogMTgwIC8gTWF0aC5QSSk7XG5cbmNsYXNzIENhbnZhczJEIGltcGxlbWVudHMgSUNhbnZhcyB7XG4gIHByaXZhdGUgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gIHByaXZhdGUgYW5nbGU6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgbGFzdHBvczogSVBvaW50ID0geyB4OiAwLCB5OiAwIH07XG4gIHByaXZhdGUgcGFyZW50OiBIVE1MRWxlbWVudDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICB3aWR0aDogbnVtYmVyLFxuICAgIGhlaWdodDogbnVtYmVyLFxuICAgIHBhcmVudDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5ib2R5LFxuICAgIGlkOiBzdHJpbmcgPSAnY2FudmFzJyxcbiAgKSB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgY2FudmFzLmlkID0gaWQ7XG4gICAgY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY2FudmFzKTtcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpIGFzIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcbiAgICB0aGlzLnJlc2l6ZSA9IHRoaXMucmVzaXplLmJpbmQodGhpcyk7XG4gICAgLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVzaXplKTtcbiAgfVxuICBwdWJsaWMgbW92ZVRvKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgdGhpcy5jdHgubW92ZVRvKHgsIHkpO1xuICAgIHRoaXMubGFzdHBvcyA9IHsgeCwgeSB9O1xuICB9XG5cbiAgcHVibGljIGRyYXdMaW5lKGxlbmd0aDogbnVtYmVyLCBjb2xvcjogc3RyaW5nID0gJyMwMDAnKSB7XG4gICAgY29uc3QgeFBvcyA9IGxlbmd0aCAqIE1hdGguY29zKHRoaXMuYW5nbGUpO1xuICAgIGNvbnN0IHlQb3MgPSBsZW5ndGggKiBNYXRoLnNpbih0aGlzLmFuZ2xlKTtcbiAgICBjb25zdCBwb2ludCA9IHsgeDogdGhpcy5sYXN0cG9zLnggKyB4UG9zLCB5OiB0aGlzLmxhc3Rwb3MueSArIHlQb3MgfTtcbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICB0aGlzLm1vdmVUbyh0aGlzLmxhc3Rwb3MueCwgdGhpcy5sYXN0cG9zLnkpO1xuICAgIHRoaXMuY3R4LmxpbmVUbyhwb2ludC54LCBwb2ludC55KTtcbiAgICB0aGlzLmN0eC5zdHJva2UoKTtcbiAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICB0aGlzLmxhc3Rwb3MgPSBwb2ludDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRBbmdsZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0b0RlZ3JlZXModGhpcy5hbmdsZSk7XG4gIH1cblxuICBwdWJsaWMgc2V0QW5nbGUoYW5nbGU6IG51bWJlcikge1xuICAgIHRoaXMuYW5nbGUgPSB0b1JhZGlhbnMoYW5nbGUpO1xuICB9XG5cbiAgcHVibGljIHJvdGF0ZShhbmdsZTogbnVtYmVyKSB7XG4gICAgdGhpcy5zZXRBbmdsZSh0b0RlZ3JlZXModGhpcy5hbmdsZSkgKyBhbmdsZSk7XG4gIH1cblxuICBwdWJsaWMgY2xlYXIoKSB7XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJyNlNmU2ZTYnO1xuICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuY3R4LmNhbnZhcy53aWR0aCwgdGhpcy5jdHguY2FudmFzLmhlaWdodCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0TGFzdFBvaW50KCk6IElQb2ludCB7XG4gICAgcmV0dXJuIHsgLi4udGhpcy5sYXN0cG9zIH07XG4gIH1cblxuICBwdWJsaWMgc2V0TGFzdFBvaW50KHBvaW50OiBJUG9pbnQpIHtcbiAgICB0aGlzLmxhc3Rwb3MgPSB7IC4uLnBvaW50IH07XG4gIH1cblxuICBwdWJsaWMgZ2V0U2l6ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGVpZ2h0OiB0aGlzLmN0eC5jYW52YXMuaGVpZ2h0LFxuICAgICAgd2lkdGg6IHRoaXMuY3R4LmNhbnZhcy53aWR0aCxcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIHJlc2V0KCkge1xuICAgIHRoaXMuY2xlYXIoKTtcbiAgICB0aGlzLnNldExhc3RQb2ludChcbiAgICAgIHtcbiAgICAgICAgeDogdGhpcy5jdHguY2FudmFzLndpZHRoIC8gMixcbiAgICAgICAgeTogdGhpcy5jdHguY2FudmFzLmhlaWdodCAvIDIsXG4gICAgICB9LFxuICAgICk7XG4gICAgdGhpcy5hbmdsZSA9IDA7XG4gIH1cblxuICBwcml2YXRlIHJlc2l6ZSgpIHtcbiAgICBjb25zdCBjYW52YXMgPSB0aGlzLmN0eC5jYW52YXM7XG4gICAgdGhpcy5jdHguY2FudmFzLndpZHRoID0gdGhpcy5wYXJlbnQuY2xpZW50V2lkdGg7XG4gICAgdGhpcy5jdHguY2FudmFzLmhlaWdodCA9IHRoaXMucGFyZW50LmNsaWVudEhlaWdodDtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoY2FudmFzLCAwLCAwKTtcbiAgfVxuXG59XG5cbmV4cG9ydCB7IENhbnZhczJEIH07XG4iLCJpbXBvcnQgeyBJQ2FudmFzIH0gZnJvbSAnLi9JQ2FudmFzJztcbmltcG9ydCB7IElQb2ludCB9IGZyb20gJy4vUG9pbnQnO1xuY2xhc3MgRHJhd2VyIHtcbiAgcHVibGljIHN0YXRpYyBkcmF3KGxzeXN0ZW1TdHJpbmc6IHN0cmluZywgYW5nbGU6IG51bWJlciwgY2FudmFzOiBJQ2FudmFzLCBsZW5ndGg6IG51bWJlciA9IDUwKSB7XG4gICAgY29uc3Qgc3RhY2s6IEFycmF5PHsgcG9pbnQ6IElQb2ludCwgYW5nbGU6IG51bWJlciB9PiA9IFtdO1xuICAgIGxzeXN0ZW1TdHJpbmcuc3BsaXQoJycpLmZvckVhY2goKGxldHRlcjogc3RyaW5nKSA9PiB7XG4gICAgICBzd2l0Y2ggKGxldHRlcikge1xuICAgICAgICBjYXNlICdGJzpcbiAgICAgICAgY2FzZSAnRyc6XG4gICAgICAgICAgY2FudmFzLmRyYXdMaW5lKGxlbmd0aCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjYXNlICcrJzpcbiAgICAgICAgICBjYW52YXMucm90YXRlKGFuZ2xlKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNhc2UgJy0nOlxuICAgICAgICAgIGNhbnZhcy5yb3RhdGUoLWFuZ2xlKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNhc2UgJ1snOlxuICAgICAgICAgIHN0YWNrLnB1c2goeyBwb2ludDogY2FudmFzLmdldExhc3RQb2ludCgpLCBhbmdsZTogY2FudmFzLmdldEFuZ2xlKCkgfSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjYXNlICddJzpcbiAgICAgICAgICBjb25zdCBzYXZlZERhdGEgPSBzdGFjay5wb3AoKTtcbiAgICAgICAgICBpZiAoc2F2ZWREYXRhKSB7XG4gICAgICAgICAgICBjYW52YXMuc2V0QW5nbGUoc2F2ZWREYXRhLmFuZ2xlKTtcbiAgICAgICAgICAgIGNhbnZhcy5zZXRMYXN0UG9pbnQoc2F2ZWREYXRhLnBvaW50KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCB7IERyYXdlciB9O1xuIiwiaW1wb3J0IHsgSVJ1bGUgfSBmcm9tICcuL1J1bGUnO1xuXG5jbGFzcyBMU3lzdGVtIHtcbiAgcHVibGljIHN0YXRpYyBtYXBSdWxlcyhydWxlczogSVJ1bGVbXSkge1xuICAgIHJldHVybiBydWxlcy5yZWR1Y2UoKHJ1bGVzT2JqOiBvYmplY3QsIHJ1bGU6IElSdWxlKSA9PiB7XG4gICAgICBydWxlc09ialtydWxlLmZyb21dID0gcnVsZS50bztcbiAgICAgIHJldHVybiBydWxlc09iajtcbiAgICB9LCBPYmplY3QoKSk7XG4gIH1cblxuICBwcml2YXRlIGF4aW9tOiBzdHJpbmc7XG4gIHByaXZhdGUgcnVsZXM6IElSdWxlW107XG5cbiAgY29uc3RydWN0b3IoYXhpb206IHN0cmluZywgcnVsZXM6IElSdWxlW10pIHtcbiAgICB0aGlzLmF4aW9tID0gYXhpb207XG4gICAgdGhpcy5ydWxlcyA9IExTeXN0ZW0ubWFwUnVsZXMocnVsZXMpO1xuICB9XG5cbiAgcHVibGljIGdlbmVyYXRlKGl0ZXJhdGlvbnM6IG51bWJlcik6IHN0cmluZyB7XG4gICAgbGV0IG91dHB1dDogc3RyaW5nID0gdGhpcy5heGlvbTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZXJhdGlvbnM7ICsraSkge1xuICAgICAgb3V0cHV0ID0gdGhpcy5tYXAob3V0cHV0KTtcbiAgICB9XG4gICAgcmV0dXJuIG91dHB1dDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRBeGlvbSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmF4aW9tO1xuICB9XG5cbiAgcHVibGljIGdldFJ1bGVzKCk6IElSdWxlW10ge1xuICAgIHJldHVybiB0aGlzLnJ1bGVzO1xuICB9XG5cbiAgcHJpdmF0ZSBtYXAoYXhpb206IHN0cmluZyk6IHN0cmluZyB7XG4gICAgbGV0IG91dHB1dDogc3RyaW5nW10gPSBheGlvbS5zcGxpdCgnJyk7XG4gICAgb3V0cHV0ID0gb3V0cHV0Lm1hcCgobGV0dGVyKSA9PiB7XG4gICAgICBjb25zdCBtYXBwaW5nOiBzdHJpbmcgPSB0aGlzLnJ1bGVzW2xldHRlcl07XG4gICAgICByZXR1cm4gbWFwcGluZyB8fCBsZXR0ZXI7XG4gICAgfSk7XG4gICAgcmV0dXJuIG91dHB1dC5qb2luKCcnKTtcbiAgfVxufVxuXG5leHBvcnQgeyBMU3lzdGVtIH07XG4iLCJleHBvcnQgaW50ZXJmYWNlIElSdWxlIHtcbiAgZnJvbTogc3RyaW5nO1xuICB0bzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgaXNJUnVsZSA9IChvYmo6IGFueSkgPT4ge1xuICBpZiAoIShvYmogaW5zdGFuY2VvZiBPYmplY3QpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICBpZiAoa2V5cy5sZW5ndGggIT09IDIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIGtleXMuaW5kZXhPZignZnJvbScpICsga2V5cy5pbmRleE9mKCd0bycpID09PSAxO1xufTtcbiIsImltcG9ydCB7IENhbnZhczJEIH0gZnJvbSAnLi9DYW52YXMnO1xuaW1wb3J0IHsgRHJhd2VyIH0gZnJvbSAnLi9EcmF3ZXInO1xuaW1wb3J0IHsgTFN5c3RlbSB9IGZyb20gJy4vTFN5c3RlbSc7XG5pbXBvcnQgeyBJUnVsZSwgaXNJUnVsZSB9IGZyb20gJy4vUnVsZSc7XG5cbmNvbnN0IHByZXNldHMgPSBbXG4gIHtcbiAgICBhbmdsZTogNjAsXG4gICAgYXhpb206ICdGLS1GLS1GJyxcbiAgICBuYW1lOiAnS29jaCBTbm93Zmxha2UnLFxuICAgIHJ1bGVzOiAnRiA+IEYrRi0tRitGJyxcbiAgfSwge1xuICAgIGFuZ2xlOiA5MCxcbiAgICBheGlvbTogJ0YnLFxuICAgIG5hbWU6ICdLb2NoIEN1cnZlJyxcbiAgICBydWxlczogJ0YgPiBGK0YtRi1GK0YnLFxuICB9LCB7XG4gICAgYW5nbGU6IDYwLFxuICAgIGF4aW9tOiAnRitGK0YrRitGK0YnLFxuICAgIG5hbWU6ICdIZXhhIGZsYWtlJyxcbiAgICBydWxlczogJ0YgPiBGK0YrRi0tRi0tRitGK0YnLFxuICB9LCB7XG4gICAgYW5nbGU6IDkwLFxuICAgIGF4aW9tOiAnWCcsXG4gICAgbmFtZTogJ0xpbmRlbm1heWVyIGN1cnZlJyxcbiAgICBydWxlczogJ1ggPiBYRllGWCtGK1lGWEZZLUYtWEZZRlhcXG5ZID4gWUZYRlktRi1YRllGWCtGK1lGWEZZJyxcbiAgfSwge1xuICAgIGFuZ2xlOiA2MCxcbiAgICBheGlvbTogJ0YnLFxuICAgIG5hbWU6ICdHb3NwZXIgY3VydmUnLFxuICAgIHJ1bGVzOiAnRiA+IEYtRy0tRytGKytGRitHLVxcbkcgPiArRi1HRy0tRy1GKytGK0cnLFxuICB9LCB7XG4gICAgYW5nbGU6IDEyMCxcbiAgICBheGlvbTogJ0YtRy1HJyxcbiAgICBuYW1lOiAnU2llcnBpbnNraSB0cmlhbmdsZScsXG4gICAgcnVsZXM6ICdGID4gRi1HK0YrRy1GXFxuRyA+IEdHJyxcbiAgfSwge1xuICAgIGFuZ2xlOiA2MCxcbiAgICBheGlvbTogJ0YnLFxuICAgIG5hbWU6ICdTaWVycGluc2tpIGFycm93IGhlYWQgdHJpYW5nbGUnLFxuICAgIHJ1bGVzOiAnRiA+IEctRi1HXFxuRyA+IEYrRytGJyxcbiAgfSwge1xuICAgIGFuZ2xlOiA5MCxcbiAgICBheGlvbTogJ0ZYJyxcbiAgICBuYW1lOiAnRHJhZ29uIGN1cnZlJyxcbiAgICBydWxlczogJ1ggPiBYK1lGK1xcblkgPiAtRlgtWScsXG4gIH0sIHtcbiAgICBhbmdsZTogMjUsXG4gICAgYXhpb206ICcrKytYJyxcbiAgICBuYW1lOiAnUGxhbnQnLFxuICAgIHJ1bGVzOiAnWCA+IEZbLVhdW1hdRlstWF0rRlhcXG5GID4gRkYnLFxuICB9LCB7XG4gICAgYW5nbGU6IDkwLFxuICAgIGF4aW9tOiAnQScsXG4gICAgbmFtZTogJ0hpbGJlcnQgQ3VydmUnLFxuICAgIHJ1bGVzOiAnQSA+IC1CRitBRkErRkItXFxuQiA+ICtBRi1CRkItRkErJyxcbiAgfSxcbl07XG5cbmNvbnN0IHBhcnNlUnVsZXMgPSAocnVsZXNTdHJpbmc6IHN0cmluZyk6IElSdWxlW10gPT4gcnVsZXNTdHJpbmcuc3BsaXQoJ1xcbicpLm1hcCgobGluZSkgPT4ge1xuICBjb25zdCBydWxlQXJyYXk6IHN0cmluZ1tdID0gbGluZS5zcGxpdCgnPicpO1xuICByZXR1cm4ge1xuICAgIGZyb206IHJ1bGVBcnJheVswXSAmJiBydWxlQXJyYXlbMF0udHJpbSgpLFxuICAgIHRvOiBydWxlQXJyYXlbMV0gJiYgcnVsZUFycmF5WzFdLnRyaW0oKSxcbiAgfTtcbn0pLmZpbHRlcigocnVsZTogSVJ1bGUpID0+IGlzSVJ1bGUocnVsZSkpO1xuXG5leHBvcnQgY29uc3Qgc2V0dXAgPSAoKSA9PiB7XG5cbiAgbGV0IHJvb3RFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKTtcbiAgaWYgKCFyb290RWxlbWVudCkge1xuICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtLmlkID0gJ3Jvb3QnO1xuICAgIHJvb3RFbGVtZW50ID0gZWxlbTtcbiAgfVxuXG4gIGNvbnN0IGNhbnZhcyA9IG5ldyBDYW52YXMyRCh3aW5kb3cuaW5uZXJXaWR0aCAqIDAuNywgd2luZG93LmlubmVySGVpZ2h0LCByb290RWxlbWVudCk7XG4gIGNvbnN0IGNhbnZhc1NpemUgPSBjYW52YXMuZ2V0U2l6ZSgpO1xuICBjYW52YXMuc2V0TGFzdFBvaW50KFxuICAgIHtcbiAgICAgIHg6IGNhbnZhc1NpemUud2lkdGggLyAyLFxuICAgICAgeTogY2FudmFzU2l6ZS5oZWlnaHQgLyAyLFxuICAgIH0sXG4gICk7XG5cbiAgY29uc3QgYXhpb21FbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F4aW9tJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgY29uc3QgaXRlcmF0aW9uc0VsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlcmF0aW9ucycpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gIGNvbnN0IGFuZ2xlRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbmdsZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gIGNvbnN0IGxpbmVFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpbmUnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICBjb25zdCBydWxlc0VsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncnVsZXMnKSBhcyBIVE1MVGV4dEFyZWFFbGVtZW50O1xuXG4gIGNvbnN0IHByZXNldHNFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXNldHMnKSBhcyBIVE1MU2VsZWN0RWxlbWVudDtcblxuICBwcmVzZXRzLmZvckVhY2goKHByZXNldCkgPT4ge1xuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG9wdGlvbi5pbm5lckhUTUwgPSBwcmVzZXQubmFtZTtcbiAgICBwcmVzZXRzRWxlbS5hcHBlbmRDaGlsZChvcHRpb24pO1xuICB9KTtcblxuICBjb25zdCBydWxlcyA9IHBhcnNlUnVsZXMocnVsZXNFbGVtLnZhbHVlKTtcblxuICBsZXQgbHN5c3RlbSA9IG5ldyBMU3lzdGVtKHByZXNldHNbMF0uYXhpb20sIHBhcnNlUnVsZXMocHJlc2V0c1swXS5ydWxlcykpO1xuXG4gIGNvbnN0IGRyYXcgPSAoaXRlcmF0aW9uczogbnVtYmVyLCBhbmdsZTogbnVtYmVyLCBsaW5lTGVuZ3RoOiBudW1iZXIpID0+IHtcbiAgICBjYW52YXMucmVzZXQoKTtcbiAgICBEcmF3ZXIuZHJhdyhsc3lzdGVtLmdlbmVyYXRlKGl0ZXJhdGlvbnMpLCBhbmdsZSwgY2FudmFzLCBsaW5lTGVuZ3RoKTtcbiAgfTtcblxuICBhbmdsZUVsZW0udmFsdWUgPSBgJHtwcmVzZXRzWzBdLmFuZ2xlfWA7XG4gIHJ1bGVzRWxlbS52YWx1ZSA9IGAke3ByZXNldHNbMF0ucnVsZXN9YDtcbiAgZHJhdygraXRlcmF0aW9uc0VsZW0udmFsdWUsICthbmdsZUVsZW0udmFsdWUsICtsaW5lRWxlbS52YWx1ZSk7XG5cbiAgcHJlc2V0c0VsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGU6IGFueSkgPT4ge1xuICAgIGNvbnN0IHByZXNldCA9IHByZXNldHMuZmluZCgoY3VycmVudFByZXNldDogYW55KSA9PiBjdXJyZW50UHJlc2V0Lm5hbWUgPT09IGUudGFyZ2V0LnZhbHVlKTtcbiAgICBpZiAocHJlc2V0KSB7XG4gICAgICBhbmdsZUVsZW0udmFsdWUgPSBgJHtwcmVzZXQuYW5nbGV9YDtcbiAgICAgIHJ1bGVzRWxlbS52YWx1ZSA9IGAke3ByZXNldC5ydWxlc31gO1xuICAgICAgbHN5c3RlbSA9IG5ldyBMU3lzdGVtKHByZXNldC5heGlvbSwgcGFyc2VSdWxlcyhwcmVzZXQucnVsZXMpKTtcbiAgICB9XG4gICAgZHJhdygraXRlcmF0aW9uc0VsZW0udmFsdWUsICthbmdsZUVsZW0udmFsdWUsICtsaW5lRWxlbS52YWx1ZSk7XG4gIH0pO1xuXG4gIGF4aW9tRWxlbS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlOiBhbnkpID0+IHtcbiAgICBpZiAoZS5jdXJyZW50VGFyZ2V0KSB7XG4gICAgICBsc3lzdGVtID0gbmV3IExTeXN0ZW0oZS5jdXJyZW50VGFyZ2V0LnZhbHVlLCBydWxlcyk7XG4gICAgfVxuICAgIGRyYXcoK2l0ZXJhdGlvbnNFbGVtLnZhbHVlLCArYW5nbGVFbGVtLnZhbHVlLCArbGluZUVsZW0udmFsdWUpO1xuICB9KTtcblxuICBpdGVyYXRpb25zRWxlbS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlOiBhbnkpID0+IHtcbiAgICBkcmF3KCtlLmN1cnJlbnRUYXJnZXQudmFsdWUsICthbmdsZUVsZW0udmFsdWUsICtsaW5lRWxlbS52YWx1ZSk7XG4gIH0pO1xuICBhbmdsZUVsZW0uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZTogYW55KSA9PiB7XG4gICAgZHJhdygraXRlcmF0aW9uc0VsZW0udmFsdWUsICtlLmN1cnJlbnRUYXJnZXQudmFsdWUsICtsaW5lRWxlbS52YWx1ZSk7XG4gIH0pO1xuICBsaW5lRWxlbS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlOiBhbnkpID0+IHtcbiAgICBkcmF3KCtpdGVyYXRpb25zRWxlbS52YWx1ZSwgK2FuZ2xlRWxlbS52YWx1ZSwgK2UuY3VycmVudFRhcmdldC52YWx1ZSk7XG4gIH0pO1xuICBydWxlc0VsZW0uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZTogYW55KSA9PiB7XG4gICAgaWYgKGUuY3VycmVudFRhcmdldCkge1xuICAgICAgbHN5c3RlbSA9IG5ldyBMU3lzdGVtKGF4aW9tRWxlbS52YWx1ZSwgcGFyc2VSdWxlcyhlLnRhcmdldC52YWx1ZSkpO1xuICAgIH1cbiAgICBkcmF3KCtpdGVyYXRpb25zRWxlbS52YWx1ZSwgK2FuZ2xlRWxlbS52YWx1ZSwgK2xpbmVFbGVtLnZhbHVlKTtcbiAgfSk7XG59O1xuIiwiaW1wb3J0IHsgc2V0dXAgfSBmcm9tICcuL1VJJztcbnNldHVwKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9