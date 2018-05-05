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
        console.log(e);
        if (e.currentTarget) {
            draw(+iterationsElem.value, +angleElem.value, +lineElem.value, +e.currentTarget.value);
        }
    });
    presetsElem.addEventListener('change', function (e) {
        var preset = presets.find(function (currentPreset) { return currentPreset.name === e.target.value; });
        if (preset) {
            angleElem.value = "" + preset.angle;
            rulesElem.value = "" + preset.rules;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NhbnZhcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRHJhd2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9MU3lzdGVtLnRzIiwid2VicGFjazovLy8uL3NyYy9SdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9VSS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEVBLElBQU0sU0FBUyxHQUFHLFVBQUMsS0FBYSxJQUFhLFFBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsRUFBeEIsQ0FBd0IsQ0FBQztBQUV0RSxJQUFNLFNBQVMsR0FBRyxVQUFDLEtBQWEsSUFBYSxRQUFDLENBQUMsS0FBSyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQXhCLENBQXdCLENBQUM7QUFFdEU7SUFPRSxrQkFDRSxLQUFhLEVBQ2IsTUFBYyxFQUNkLE1BQW1DLEVBQ25DLEVBQXFCLEVBQ3JCLE9BQW1CO1FBRm5CLGtDQUFz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LENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM3RjtJQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0gsUUFBUSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDLENBQU07UUFDeEMsSUFBSSxDQUFDLENBQUMsYUFBYSxFQUFFO1lBQ25CLElBQUksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDOUY7SUFDSCxDQUFDLENBQUMsQ0FBQztJQUNILFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQyxDQUFNO1FBQ3pDLElBQUksQ0FBQyxDQUFDLGFBQWEsRUFBRTtZQUNuQixPQUFPLEdBQUcsSUFBSSxnREFBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNuRSxJQUFJLENBQUMsQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdkY7SUFDSCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDOUoyQjtBQUM3QixpREFBSyxFQUFFLENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0IHsgSUNhbnZhcyB9IGZyb20gJy4vSUNhbnZhcyc7XG5pbXBvcnQgeyBJUG9pbnQgfSBmcm9tICcuL1BvaW50JztcblxuY29uc3QgdG9SYWRpYW5zID0gKGFuZ2xlOiBudW1iZXIpOiBudW1iZXIgPT4gKC1hbmdsZSAqIE1hdGguUEkgLyAxODApO1xuXG5jb25zdCB0b0RlZ3JlZXMgPSAoYW5nbGU6IG51bWJlcik6IG51bWJlciA9PiAtKGFuZ2xlICogMTgwIC8gTWF0aC5QSSk7XG5cbmNsYXNzIENhbnZhczJEIGltcGxlbWVudHMgSUNhbnZhcyB7XG4gIHByaXZhdGUgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gIHByaXZhdGUgYW5nbGU6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgbGFzdHBvczogSVBvaW50ID0geyB4OiAwLCB5OiAwIH07XG4gIHByaXZhdGUgcGFyZW50OiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBvcGFjaXR5OiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgd2lkdGg6IG51bWJlcixcbiAgICBoZWlnaHQ6IG51bWJlcixcbiAgICBwYXJlbnQ6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuYm9keSxcbiAgICBpZDogc3RyaW5nID0gJ2NhbnZhcycsXG4gICAgb3BhY2l0eTogbnVtYmVyID0gMSxcbiAgKSB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgY2FudmFzLmlkID0gaWQ7XG4gICAgY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY2FudmFzKTtcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpIGFzIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcbiAgICB0aGlzLnJlc2l6ZSA9IHRoaXMucmVzaXplLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vcGFjaXR5ID0gb3BhY2l0eTtcbiAgICAvLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZXNpemUpO1xuICB9XG4gIHB1YmxpYyBtb3ZlVG8oeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICB0aGlzLmN0eC5tb3ZlVG8oeCwgeSk7XG4gICAgdGhpcy5sYXN0cG9zID0geyB4LCB5IH07XG4gIH1cblxuICBwdWJsaWMgZHJhd0xpbmUobGVuZ3RoOiBudW1iZXIsIG9wYWNpdHk6IG51bWJlciA9IHRoaXMub3BhY2l0eSwgY29sb3I6IHN0cmluZyA9ICdyZ2IoMCwwLDApJykge1xuICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gYHJnYmEoJHtjb2xvci5zbGljZSg0LCAtMSl9LCAke29wYWNpdHl9KWA7XG4gICAgY29uc3QgeFBvcyA9IGxlbmd0aCAqIE1hdGguY29zKHRoaXMuYW5nbGUpO1xuICAgIGNvbnN0IHlQb3MgPSBsZW5ndGggKiBNYXRoLnNpbih0aGlzLmFuZ2xlKTtcbiAgICBjb25zdCBwb2ludCA9IHsgeDogdGhpcy5sYXN0cG9zLnggKyB4UG9zLCB5OiB0aGlzLmxhc3Rwb3MueSArIHlQb3MgfTtcbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICB0aGlzLm1vdmVUbyh0aGlzLmxhc3Rwb3MueCwgdGhpcy5sYXN0cG9zLnkpO1xuICAgIHRoaXMuY3R4LmxpbmVUbyhwb2ludC54LCBwb2ludC55KTtcbiAgICB0aGlzLmN0eC5zdHJva2UoKTtcbiAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICB0aGlzLmxhc3Rwb3MgPSBwb2ludDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRBbmdsZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0b0RlZ3JlZXModGhpcy5hbmdsZSk7XG4gIH1cblxuICBwdWJsaWMgc2V0QW5nbGUoYW5nbGU6IG51bWJlcikge1xuICAgIHRoaXMuYW5nbGUgPSB0b1JhZGlhbnMoYW5nbGUpO1xuICB9XG5cbiAgcHVibGljIHJvdGF0ZShhbmdsZTogbnVtYmVyKSB7XG4gICAgdGhpcy5zZXRBbmdsZSh0b0RlZ3JlZXModGhpcy5hbmdsZSkgKyBhbmdsZSk7XG4gIH1cblxuICBwdWJsaWMgY2xlYXIoKSB7XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJyNlNmU2ZTYnO1xuICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuY3R4LmNhbnZhcy53aWR0aCwgdGhpcy5jdHguY2FudmFzLmhlaWdodCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0TGFzdFBvaW50KCk6IElQb2ludCB7XG4gICAgcmV0dXJuIHsgLi4udGhpcy5sYXN0cG9zIH07XG4gIH1cblxuICBwdWJsaWMgc2V0TGFzdFBvaW50KHBvaW50OiBJUG9pbnQpIHtcbiAgICB0aGlzLmxhc3Rwb3MgPSB7IC4uLnBvaW50IH07XG4gIH1cblxuICBwdWJsaWMgZ2V0U2l6ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGVpZ2h0OiB0aGlzLmN0eC5jYW52YXMuaGVpZ2h0LFxuICAgICAgd2lkdGg6IHRoaXMuY3R4LmNhbnZhcy53aWR0aCxcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIHJlc2V0KCkge1xuICAgIHRoaXMuY2xlYXIoKTtcbiAgICB0aGlzLnNldExhc3RQb2ludChcbiAgICAgIHtcbiAgICAgICAgeDogdGhpcy5jdHguY2FudmFzLndpZHRoIC8gMixcbiAgICAgICAgeTogdGhpcy5jdHguY2FudmFzLmhlaWdodCAvIDIsXG4gICAgICB9LFxuICAgICk7XG4gICAgdGhpcy5hbmdsZSA9IDA7XG4gIH1cblxuICBwcml2YXRlIHJlc2l6ZSgpIHtcbiAgICBjb25zdCBjYW52YXMgPSB0aGlzLmN0eC5jYW52YXM7XG4gICAgdGhpcy5jdHguY2FudmFzLndpZHRoID0gdGhpcy5wYXJlbnQuY2xpZW50V2lkdGg7XG4gICAgdGhpcy5jdHguY2FudmFzLmhlaWdodCA9IHRoaXMucGFyZW50LmNsaWVudEhlaWdodDtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoY2FudmFzLCAwLCAwKTtcbiAgfVxuXG59XG5cbmV4cG9ydCB7IENhbnZhczJEIH07XG4iLCJpbXBvcnQgeyBJQ2FudmFzIH0gZnJvbSAnLi9JQ2FudmFzJztcbmltcG9ydCB7IElQb2ludCB9IGZyb20gJy4vUG9pbnQnO1xuY2xhc3MgRHJhd2VyIHtcbiAgcHVibGljIHN0YXRpYyBkcmF3KGxzeXN0ZW1TdHJpbmc6IHN0cmluZywgYW5nbGU6IG51bWJlciwgY2FudmFzOiBJQ2FudmFzLCBsZW5ndGg6IG51bWJlciA9IDUwKSB7XG4gICAgY29uc3Qgc3RhY2s6IEFycmF5PHsgcG9pbnQ6IElQb2ludCwgYW5nbGU6IG51bWJlciB9PiA9IFtdO1xuICAgIGxzeXN0ZW1TdHJpbmcuc3BsaXQoJycpLmZvckVhY2goKGxldHRlcjogc3RyaW5nKSA9PiB7XG4gICAgICBzd2l0Y2ggKGxldHRlcikge1xuICAgICAgICBjYXNlICdGJzpcbiAgICAgICAgY2FzZSAnRyc6XG4gICAgICAgICAgY2FudmFzLmRyYXdMaW5lKGxlbmd0aCwgMC41KTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNhc2UgJysnOlxuICAgICAgICAgIGNhbnZhcy5yb3RhdGUoYW5nbGUpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY2FzZSAnLSc6XG4gICAgICAgICAgY2FudmFzLnJvdGF0ZSgtYW5nbGUpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY2FzZSAnWyc6XG4gICAgICAgICAgc3RhY2sucHVzaCh7IHBvaW50OiBjYW52YXMuZ2V0TGFzdFBvaW50KCksIGFuZ2xlOiBjYW52YXMuZ2V0QW5nbGUoKSB9KTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNhc2UgJ10nOlxuICAgICAgICAgIGNvbnN0IHNhdmVkRGF0YSA9IHN0YWNrLnBvcCgpO1xuICAgICAgICAgIGlmIChzYXZlZERhdGEpIHtcbiAgICAgICAgICAgIGNhbnZhcy5zZXRBbmdsZShzYXZlZERhdGEuYW5nbGUpO1xuICAgICAgICAgICAgY2FudmFzLnNldExhc3RQb2ludChzYXZlZERhdGEucG9pbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IHsgRHJhd2VyIH07XG4iLCJpbXBvcnQgeyBJUnVsZSB9IGZyb20gJy4vUnVsZSc7XG5cbmNsYXNzIExTeXN0ZW0ge1xuICBwdWJsaWMgc3RhdGljIG1hcFJ1bGVzKHJ1bGVzOiBJUnVsZVtdKSB7XG4gICAgcmV0dXJuIHJ1bGVzLnJlZHVjZSgocnVsZXNPYmo6IG9iamVjdCwgcnVsZTogSVJ1bGUpID0+IHtcbiAgICAgIHJ1bGVzT2JqW3J1bGUuZnJvbV0gPSBydWxlLnRvO1xuICAgICAgcmV0dXJuIHJ1bGVzT2JqO1xuICAgIH0sIE9iamVjdCgpKTtcbiAgfVxuXG4gIHByaXZhdGUgYXhpb206IHN0cmluZztcbiAgcHJpdmF0ZSBydWxlczogSVJ1bGVbXTtcblxuICBjb25zdHJ1Y3RvcihheGlvbTogc3RyaW5nLCBydWxlczogSVJ1bGVbXSkge1xuICAgIHRoaXMuYXhpb20gPSBheGlvbTtcbiAgICB0aGlzLnJ1bGVzID0gTFN5c3RlbS5tYXBSdWxlcyhydWxlcyk7XG4gIH1cblxuICBwdWJsaWMgZ2VuZXJhdGUoaXRlcmF0aW9uczogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBsZXQgb3V0cHV0OiBzdHJpbmcgPSB0aGlzLmF4aW9tO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlcmF0aW9uczsgKytpKSB7XG4gICAgICBvdXRwdXQgPSB0aGlzLm1hcChvdXRwdXQpO1xuICAgIH1cbiAgICByZXR1cm4gb3V0cHV0O1xuICB9XG5cbiAgcHVibGljIGdldEF4aW9tKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuYXhpb207XG4gIH1cblxuICBwdWJsaWMgZ2V0UnVsZXMoKTogSVJ1bGVbXSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZXM7XG4gIH1cblxuICBwcml2YXRlIG1hcChheGlvbTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBsZXQgb3V0cHV0OiBzdHJpbmdbXSA9IGF4aW9tLnNwbGl0KCcnKTtcbiAgICBvdXRwdXQgPSBvdXRwdXQubWFwKChsZXR0ZXIpID0+IHtcbiAgICAgIGNvbnN0IG1hcHBpbmc6IHN0cmluZyA9IHRoaXMucnVsZXNbbGV0dGVyXTtcbiAgICAgIHJldHVybiBtYXBwaW5nIHx8IGxldHRlcjtcbiAgICB9KTtcbiAgICByZXR1cm4gb3V0cHV0LmpvaW4oJycpO1xuICB9XG59XG5cbmV4cG9ydCB7IExTeXN0ZW0gfTtcbiIsImV4cG9ydCBpbnRlcmZhY2UgSVJ1bGUge1xuICBmcm9tOiBzdHJpbmc7XG4gIHRvOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBpc0lSdWxlID0gKG9iajogYW55KSA9PiB7XG4gIGlmICghKG9iaiBpbnN0YW5jZW9mIE9iamVjdCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gIGlmIChrZXlzLmxlbmd0aCAhPT0gMikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4ga2V5cy5pbmRleE9mKCdmcm9tJykgKyBrZXlzLmluZGV4T2YoJ3RvJykgPT09IDE7XG59O1xuIiwiaW1wb3J0IHsgQ2FudmFzMkQgfSBmcm9tICcuL0NhbnZhcyc7XG5pbXBvcnQgeyBEcmF3ZXIgfSBmcm9tICcuL0RyYXdlcic7XG5pbXBvcnQgeyBMU3lzdGVtIH0gZnJvbSAnLi9MU3lzdGVtJztcbmltcG9ydCB7IElSdWxlLCBpc0lSdWxlIH0gZnJvbSAnLi9SdWxlJztcblxuY29uc3QgcHJlc2V0cyA9IFtcbiAge1xuICAgIGFuZ2xlOiA2MCxcbiAgICBheGlvbTogJ0YtLUYtLUYnLFxuICAgIG5hbWU6ICdLb2NoIFNub3dmbGFrZScsXG4gICAgcnVsZXM6ICdGID4gRitGLS1GK0YnLFxuICB9LCB7XG4gICAgYW5nbGU6IDkwLFxuICAgIGF4aW9tOiAnRicsXG4gICAgbmFtZTogJ0tvY2ggQ3VydmUnLFxuICAgIHJ1bGVzOiAnRiA+IEYrRi1GLUYrRicsXG4gIH0sIHtcbiAgICBhbmdsZTogNjAsXG4gICAgYXhpb206ICdGK0YrRitGK0YrRicsXG4gICAgbmFtZTogJ0hleGEgZmxha2UnLFxuICAgIHJ1bGVzOiAnRiA+IEYrRitGLS1GLS1GK0YrRicsXG4gIH0sIHtcbiAgICBhbmdsZTogOTAsXG4gICAgYXhpb206ICdYJyxcbiAgICBuYW1lOiAnTGluZGVubWF5ZXIgY3VydmUnLFxuICAgIHJ1bGVzOiAnWCA+IFhGWUZYK0YrWUZYRlktRi1YRllGWFxcblkgPiBZRlhGWS1GLVhGWUZYK0YrWUZYRlknLFxuICB9LCB7XG4gICAgYW5nbGU6IDYwLFxuICAgIGF4aW9tOiAnRicsXG4gICAgbmFtZTogJ0dvc3BlciBjdXJ2ZScsXG4gICAgcnVsZXM6ICdGID4gRi1HLS1HK0YrK0ZGK0ctXFxuRyA+ICtGLUdHLS1HLUYrK0YrRycsXG4gIH0sIHtcbiAgICBhbmdsZTogMTIwLFxuICAgIGF4aW9tOiAnRi1HLUcnLFxuICAgIG5hbWU6ICdTaWVycGluc2tpIHRyaWFuZ2xlJyxcbiAgICBydWxlczogJ0YgPiBGLUcrRitHLUZcXG5HID4gR0cnLFxuICB9LCB7XG4gICAgYW5nbGU6IDYwLFxuICAgIGF4aW9tOiAnRicsXG4gICAgbmFtZTogJ1NpZXJwaW5za2kgYXJyb3cgaGVhZCB0cmlhbmdsZScsXG4gICAgcnVsZXM6ICdGID4gRy1GLUdcXG5HID4gRitHK0YnLFxuICB9LCB7XG4gICAgYW5nbGU6IDkwLFxuICAgIGF4aW9tOiAnRlgnLFxuICAgIG5hbWU6ICdEcmFnb24gY3VydmUnLFxuICAgIHJ1bGVzOiAnWCA+IFgrWUYrXFxuWSA+IC1GWC1ZJyxcbiAgfSwge1xuICAgIGFuZ2xlOiAyNSxcbiAgICBheGlvbTogJysrK1gnLFxuICAgIG5hbWU6ICdQbGFudCcsXG4gICAgcnVsZXM6ICdYID4gRlstWF1bWF1GWy1YXStGWFxcbkYgPiBGRicsXG4gIH0sIHtcbiAgICBhbmdsZTogOTAsXG4gICAgYXhpb206ICdBJyxcbiAgICBuYW1lOiAnSGlsYmVydCBDdXJ2ZScsXG4gICAgcnVsZXM6ICdBID4gLUJGK0FGQStGQi1cXG5CID4gK0FGLUJGQi1GQSsnLFxuICB9LFxuXTtcblxuY29uc3QgcGFyc2VSdWxlcyA9IChydWxlc1N0cmluZzogc3RyaW5nKTogSVJ1bGVbXSA9PiBydWxlc1N0cmluZy5zcGxpdCgnXFxuJykubWFwKChsaW5lKSA9PiB7XG4gIGNvbnN0IHJ1bGVBcnJheTogc3RyaW5nW10gPSBsaW5lLnNwbGl0KCc+Jyk7XG4gIHJldHVybiB7XG4gICAgZnJvbTogcnVsZUFycmF5WzBdICYmIHJ1bGVBcnJheVswXS50cmltKCksXG4gICAgdG86IHJ1bGVBcnJheVsxXSAmJiBydWxlQXJyYXlbMV0udHJpbSgpLFxuICB9O1xufSkuZmlsdGVyKChydWxlOiBJUnVsZSkgPT4gaXNJUnVsZShydWxlKSk7XG5cbmV4cG9ydCBjb25zdCBzZXR1cCA9ICgpID0+IHtcblxuICBsZXQgcm9vdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xuICBpZiAoIXJvb3RFbGVtZW50KSB7XG4gICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW0uaWQgPSAncm9vdCc7XG4gICAgcm9vdEVsZW1lbnQgPSBlbGVtO1xuICB9XG5cbiAgY29uc3QgY2FudmFzID0gbmV3IENhbnZhczJEKHdpbmRvdy5pbm5lcldpZHRoICogMC43LCB3aW5kb3cuaW5uZXJIZWlnaHQsIHJvb3RFbGVtZW50KTtcbiAgY29uc3QgY2FudmFzU2l6ZSA9IGNhbnZhcy5nZXRTaXplKCk7XG4gIGNhbnZhcy5zZXRMYXN0UG9pbnQoXG4gICAge1xuICAgICAgeDogY2FudmFzU2l6ZS53aWR0aCAvIDIsXG4gICAgICB5OiBjYW52YXNTaXplLmhlaWdodCAvIDIsXG4gICAgfSxcbiAgKTtcblxuICBjb25zdCBheGlvbUVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXhpb20nKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICBjb25zdCBpdGVyYXRpb25zRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVyYXRpb25zJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgY29uc3QgYW5nbGVFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FuZ2xlJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgY29uc3QgbGluZUVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGluZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gIGNvbnN0IHJ1bGVzRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdydWxlcycpIGFzIEhUTUxUZXh0QXJlYUVsZW1lbnQ7XG4gIGNvbnN0IHByZXNldHNFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXNldHMnKSBhcyBIVE1MU2VsZWN0RWxlbWVudDtcbiAgY29uc3Qgc3RhcnRBbmdsZUVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnRhbmdsZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgcHJlc2V0cy5mb3JFYWNoKChwcmVzZXQpID0+IHtcbiAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBvcHRpb24uaW5uZXJIVE1MID0gcHJlc2V0Lm5hbWU7XG4gICAgcHJlc2V0c0VsZW0uYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgfSk7XG5cbiAgY29uc3QgcnVsZXMgPSBwYXJzZVJ1bGVzKHJ1bGVzRWxlbS52YWx1ZSk7XG5cbiAgbGV0IGxzeXN0ZW0gPSBuZXcgTFN5c3RlbShwcmVzZXRzWzBdLmF4aW9tLCBwYXJzZVJ1bGVzKHByZXNldHNbMF0ucnVsZXMpKTtcblxuICBjb25zdCBkcmF3ID0gKGl0ZXJhdGlvbnM6IG51bWJlciwgYW5nbGU6IG51bWJlciwgbGluZUxlbmd0aDogbnVtYmVyLCBzdGFydGFuZ2xlOiBudW1iZXIpID0+IHtcbiAgICBjYW52YXMucmVzZXQoKTtcbiAgICBjYW52YXMuc2V0QW5nbGUoc3RhcnRhbmdsZSk7XG4gICAgRHJhd2VyLmRyYXcobHN5c3RlbS5nZW5lcmF0ZShpdGVyYXRpb25zKSwgYW5nbGUsIGNhbnZhcywgbGluZUxlbmd0aCk7XG4gIH07XG5cbiAgYW5nbGVFbGVtLnZhbHVlID0gYCR7cHJlc2V0c1swXS5hbmdsZX1gO1xuICBydWxlc0VsZW0udmFsdWUgPSBgJHtwcmVzZXRzWzBdLnJ1bGVzfWA7XG4gIGRyYXcoK2l0ZXJhdGlvbnNFbGVtLnZhbHVlLCArYW5nbGVFbGVtLnZhbHVlLCArbGluZUVsZW0udmFsdWUsICtzdGFydEFuZ2xlRWxlbS52YWx1ZSk7XG5cbiAgc3RhcnRBbmdsZUVsZW0uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZTogYW55KSA9PiB7XG4gICAgY29uc29sZS5sb2coZSk7XG4gICAgaWYgKGUuY3VycmVudFRhcmdldCkge1xuICAgICAgZHJhdygraXRlcmF0aW9uc0VsZW0udmFsdWUsICthbmdsZUVsZW0udmFsdWUsICtsaW5lRWxlbS52YWx1ZSwgK2UuY3VycmVudFRhcmdldC52YWx1ZSk7XG4gICAgfVxuICB9KTtcblxuICBwcmVzZXRzRWxlbS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZTogYW55KSA9PiB7XG4gICAgY29uc3QgcHJlc2V0ID0gcHJlc2V0cy5maW5kKChjdXJyZW50UHJlc2V0OiBhbnkpID0+IGN1cnJlbnRQcmVzZXQubmFtZSA9PT0gZS50YXJnZXQudmFsdWUpO1xuICAgIGlmIChwcmVzZXQpIHtcbiAgICAgIGFuZ2xlRWxlbS52YWx1ZSA9IGAke3ByZXNldC5hbmdsZX1gO1xuICAgICAgcnVsZXNFbGVtLnZhbHVlID0gYCR7cHJlc2V0LnJ1bGVzfWA7XG4gICAgICBsc3lzdGVtID0gbmV3IExTeXN0ZW0ocHJlc2V0LmF4aW9tLCBwYXJzZVJ1bGVzKHByZXNldC5ydWxlcykpO1xuICAgIH1cbiAgICBkcmF3KCtpdGVyYXRpb25zRWxlbS52YWx1ZSwgK2FuZ2xlRWxlbS52YWx1ZSwgK2xpbmVFbGVtLnZhbHVlLCArc3RhcnRBbmdsZUVsZW0udmFsdWUpO1xuICB9KTtcblxuICBheGlvbUVsZW0uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZTogYW55KSA9PiB7XG4gICAgaWYgKGUuY3VycmVudFRhcmdldCkge1xuICAgICAgbHN5c3RlbSA9IG5ldyBMU3lzdGVtKGUuY3VycmVudFRhcmdldC52YWx1ZSwgcnVsZXMpO1xuICAgICAgZHJhdygraXRlcmF0aW9uc0VsZW0udmFsdWUsICthbmdsZUVsZW0udmFsdWUsICtsaW5lRWxlbS52YWx1ZSwgK3N0YXJ0QW5nbGVFbGVtLnZhbHVlKTtcbiAgICB9XG4gIH0pO1xuXG4gIGl0ZXJhdGlvbnNFbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGU6IGFueSkgPT4ge1xuICAgIGlmIChlLmN1cnJlbnRUYXJnZXQpIHtcbiAgICAgIGRyYXcoK2UuY3VycmVudFRhcmdldC52YWx1ZSwgK2FuZ2xlRWxlbS52YWx1ZSwgK2xpbmVFbGVtLnZhbHVlLCArc3RhcnRBbmdsZUVsZW0udmFsdWUpO1xuICAgIH1cbiAgfSk7XG4gIGFuZ2xlRWxlbS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlOiBhbnkpID0+IHtcbiAgICBpZiAoZS5jdXJyZW50VGFyZ2V0KSB7XG4gICAgICBkcmF3KCtpdGVyYXRpb25zRWxlbS52YWx1ZSwgK2UuY3VycmVudFRhcmdldC52YWx1ZSwgK2xpbmVFbGVtLnZhbHVlLCArc3RhcnRBbmdsZUVsZW0udmFsdWUpO1xuICAgIH1cbiAgfSk7XG4gIGxpbmVFbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGU6IGFueSkgPT4ge1xuICAgIGlmIChlLmN1cnJlbnRUYXJnZXQpIHtcbiAgICAgIGRyYXcoK2l0ZXJhdGlvbnNFbGVtLnZhbHVlLCArYW5nbGVFbGVtLnZhbHVlLCArZS5jdXJyZW50VGFyZ2V0LnZhbHVlLCArc3RhcnRBbmdsZUVsZW0udmFsdWUpO1xuICAgIH1cbiAgfSk7XG4gIHJ1bGVzRWxlbS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlOiBhbnkpID0+IHtcbiAgICBpZiAoZS5jdXJyZW50VGFyZ2V0KSB7XG4gICAgICBsc3lzdGVtID0gbmV3IExTeXN0ZW0oYXhpb21FbGVtLnZhbHVlLCBwYXJzZVJ1bGVzKGUudGFyZ2V0LnZhbHVlKSk7XG4gICAgICBkcmF3KCtpdGVyYXRpb25zRWxlbS52YWx1ZSwgK2FuZ2xlRWxlbS52YWx1ZSwgK2xpbmVFbGVtLnZhbHVlLCArc3RhcnRBbmdsZUVsZW0udmFsdWUpO1xuICAgIH1cbiAgfSk7XG59O1xuIiwiaW1wb3J0IHsgc2V0dXAgfSBmcm9tICcuL1VJJztcbnNldHVwKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9