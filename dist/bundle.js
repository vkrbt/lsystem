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
        angle: 90,
        axiom: 'A',
        name: 'Hilbert Curve',
        rules: 'A > -BF+AFA+FB-\nB > +AF-BFB-FA+',
    }, {
        angle: 25,
        axiom: '+++X',
        name: 'Plant',
        rules: 'X > F[-X][X]F[-X]+FX\nF > FF',
    }, {
        angle: 25.7,
        axiom: 'F',
        name: 'Plant 1',
        rules: 'F > F[+F]F[-F]F',
    }, {
        angle: 20,
        axiom: 'F',
        name: 'Plant 2',
        rules: 'F > F[+F]F[-F][F]',
    }, {
        angle: 22.5,
        axiom: 'F',
        name: 'Plant 3',
        rules: 'F > FF-[-F+F+F]+[+F-F-F]',
    }, {
        angle: 20,
        axiom: 'X',
        name: 'Plant 4',
        rules: 'X > F[+X]F[-X]+X\nF > FF',
    }, {
        angle: 25.7,
        axiom: 'X',
        name: 'Plant 5',
        rules: 'X > F[+X][-X]FX\nF > FF',
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
            axiomElem.value = "" + preset.axiom;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NhbnZhcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRHJhd2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9MU3lzdGVtLnRzIiwid2VicGFjazovLy8uL3NyYy9SdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9VSS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEVBLElBQU0sU0FBUyxHQUFHLFVBQUMsS0FBYSxJQUFhLFFBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsRUFBeEIsQ0FBd0IsQ0FBQztBQUV0RSxJQUFNLFNBQVMsR0FBRyxVQUFDLEtBQWEsSUFBYSxRQUFDLENBQUMsS0FBSyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQXhCLENBQXdCLENBQUM7QUFFdEU7SUFPRSxrQkFDRSxLQUFhLEVBQ2IsTUFBYyxFQUNkLE1BQW1DLEVBQ25DLEVBQXFCLEVBQ3JCLE9BQW1CO1FBRm5CLGtDQUFz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LENBQUMsQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzdHO0lBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDSCxhQUFhLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUMsQ0FBTTtRQUM3QyxJQUFJLENBQUMsQ0FBQyxhQUFhLEVBQUU7WUFDbkIsSUFBSSxDQUFDLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDL0c7SUFDSCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDak4yQjtBQUM3QixpREFBSyxFQUFFLENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0IHsgSUNhbnZhcyB9IGZyb20gJy4vSUNhbnZhcyc7XG5pbXBvcnQgeyBJUG9pbnQgfSBmcm9tICcuL1BvaW50JztcblxuY29uc3QgdG9SYWRpYW5zID0gKGFuZ2xlOiBudW1iZXIpOiBudW1iZXIgPT4gKC1hbmdsZSAqIE1hdGguUEkgLyAxODApO1xuXG5jb25zdCB0b0RlZ3JlZXMgPSAoYW5nbGU6IG51bWJlcik6IG51bWJlciA9PiAtKGFuZ2xlICogMTgwIC8gTWF0aC5QSSk7XG5cbmNsYXNzIENhbnZhczJEIGltcGxlbWVudHMgSUNhbnZhcyB7XG4gIHByaXZhdGUgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gIHByaXZhdGUgYW5nbGU6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgbGFzdHBvczogSVBvaW50ID0geyB4OiAwLCB5OiAwIH07XG4gIHByaXZhdGUgcGFyZW50OiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBvcGFjaXR5OiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgd2lkdGg6IG51bWJlcixcbiAgICBoZWlnaHQ6IG51bWJlcixcbiAgICBwYXJlbnQ6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuYm9keSxcbiAgICBpZDogc3RyaW5nID0gJ2NhbnZhcycsXG4gICAgb3BhY2l0eTogbnVtYmVyID0gMSxcbiAgKSB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgY2FudmFzLmlkID0gaWQ7XG4gICAgY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY2FudmFzKTtcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpIGFzIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcbiAgICB0aGlzLnJlc2l6ZSA9IHRoaXMucmVzaXplLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vcGFjaXR5ID0gb3BhY2l0eTtcbiAgfVxuICBwdWJsaWMgbW92ZVRvKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgdGhpcy5jdHgubW92ZVRvKHgsIHkpO1xuICAgIHRoaXMubGFzdHBvcyA9IHsgeCwgeSB9O1xuICB9XG5cbiAgcHVibGljIGRyYXdMaW5lKGxlbmd0aDogbnVtYmVyLCBvcGFjaXR5OiBudW1iZXIgPSB0aGlzLm9wYWNpdHksIGNvbG9yOiBzdHJpbmcgPSAncmdiKDAsMCwwKScpIHtcbiAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IGByZ2JhKCR7Y29sb3Iuc2xpY2UoNCwgLTEpfSwgJHtvcGFjaXR5fSlgO1xuICAgIGNvbnN0IHhQb3MgPSBsZW5ndGggKiBNYXRoLmNvcyh0aGlzLmFuZ2xlKTtcbiAgICBjb25zdCB5UG9zID0gbGVuZ3RoICogTWF0aC5zaW4odGhpcy5hbmdsZSk7XG4gICAgY29uc3QgcG9pbnQgPSB7IHg6IHRoaXMubGFzdHBvcy54ICsgeFBvcywgeTogdGhpcy5sYXN0cG9zLnkgKyB5UG9zIH07XG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgdGhpcy5tb3ZlVG8odGhpcy5sYXN0cG9zLngsIHRoaXMubGFzdHBvcy55KTtcbiAgICB0aGlzLmN0eC5saW5lVG8ocG9pbnQueCwgcG9pbnQueSk7XG4gICAgdGhpcy5jdHguc3Ryb2tlKCk7XG4gICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gICAgdGhpcy5sYXN0cG9zID0gcG9pbnQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0QW5nbGUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdG9EZWdyZWVzKHRoaXMuYW5nbGUpO1xuICB9XG5cbiAgcHVibGljIHNldEFuZ2xlKGFuZ2xlOiBudW1iZXIpIHtcbiAgICB0aGlzLmFuZ2xlID0gdG9SYWRpYW5zKGFuZ2xlKTtcbiAgfVxuXG4gIHB1YmxpYyByb3RhdGUoYW5nbGU6IG51bWJlcikge1xuICAgIHRoaXMuc2V0QW5nbGUodG9EZWdyZWVzKHRoaXMuYW5nbGUpICsgYW5nbGUpO1xuICB9XG5cbiAgcHVibGljIGNsZWFyKCkge1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICcjZTZlNmU2JztcbiAgICB0aGlzLmN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmN0eC5jYW52YXMud2lkdGgsIHRoaXMuY3R4LmNhbnZhcy5oZWlnaHQpO1xuICB9XG5cbiAgcHVibGljIGdldExhc3RQb2ludCgpOiBJUG9pbnQge1xuICAgIHJldHVybiB7IC4uLnRoaXMubGFzdHBvcyB9O1xuICB9XG5cbiAgcHVibGljIHNldExhc3RQb2ludChwb2ludDogSVBvaW50KSB7XG4gICAgdGhpcy5sYXN0cG9zID0geyAuLi5wb2ludCB9O1xuICB9XG5cbiAgcHVibGljIGdldFNpemUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhlaWdodDogdGhpcy5jdHguY2FudmFzLmhlaWdodCxcbiAgICAgIHdpZHRoOiB0aGlzLmN0eC5jYW52YXMud2lkdGgsXG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRMaW5lV2lkdGgod2lkdGg6IG51bWJlcikge1xuICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IHdpZHRoO1xuICB9XG5cbiAgcHVibGljIHJlc2V0KCkge1xuICAgIHRoaXMuY2xlYXIoKTtcbiAgICB0aGlzLnNldExhc3RQb2ludChcbiAgICAgIHtcbiAgICAgICAgeDogdGhpcy5jdHguY2FudmFzLndpZHRoIC8gMixcbiAgICAgICAgeTogdGhpcy5jdHguY2FudmFzLmhlaWdodCAvIDIsXG4gICAgICB9LFxuICAgICk7XG4gICAgdGhpcy5hbmdsZSA9IDA7XG4gIH1cblxuICBwcml2YXRlIHJlc2l6ZSgpIHtcbiAgICBjb25zdCBjYW52YXMgPSB0aGlzLmN0eC5jYW52YXM7XG4gICAgdGhpcy5jdHguY2FudmFzLndpZHRoID0gdGhpcy5wYXJlbnQuY2xpZW50V2lkdGg7XG4gICAgdGhpcy5jdHguY2FudmFzLmhlaWdodCA9IHRoaXMucGFyZW50LmNsaWVudEhlaWdodDtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoY2FudmFzLCAwLCAwKTtcbiAgfVxuXG59XG5cbmV4cG9ydCB7IENhbnZhczJEIH07XG4iLCJpbXBvcnQgeyBDYW52YXMyRCB9IGZyb20gJy4vQ2FudmFzJztcbmltcG9ydCB7IElQb2ludCB9IGZyb20gJy4vUG9pbnQnO1xuY2xhc3MgRHJhd2VyIHtcbiAgcHVibGljIHN0YXRpYyBkcmF3KGxzeXN0ZW1TdHJpbmc6IHN0cmluZywgYW5nbGU6IG51bWJlciwgY2FudmFzOiBDYW52YXMyRCwgbGVuZ3RoOiBudW1iZXIgPSA1MCwgd2lkdGg6IG51bWJlciA9IDEpIHtcbiAgICBjb25zdCBzdGFjazogQXJyYXk8eyBwb2ludDogSVBvaW50LCBhbmdsZTogbnVtYmVyIH0+ID0gW107XG4gICAgY2FudmFzLnNldExpbmVXaWR0aCh3aWR0aCk7XG4gICAgbHN5c3RlbVN0cmluZy5zcGxpdCgnJykuZm9yRWFjaCgobGV0dGVyOiBzdHJpbmcpID0+IHtcbiAgICAgIHN3aXRjaCAobGV0dGVyKSB7XG4gICAgICAgIGNhc2UgJ0YnOlxuICAgICAgICBjYXNlICdHJzpcbiAgICAgICAgICBjYW52YXMuZHJhd0xpbmUobGVuZ3RoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNhc2UgJysnOlxuICAgICAgICAgIGNhbnZhcy5yb3RhdGUoYW5nbGUpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY2FzZSAnLSc6XG4gICAgICAgICAgY2FudmFzLnJvdGF0ZSgtYW5nbGUpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY2FzZSAnWyc6XG4gICAgICAgICAgc3RhY2sucHVzaCh7IHBvaW50OiBjYW52YXMuZ2V0TGFzdFBvaW50KCksIGFuZ2xlOiBjYW52YXMuZ2V0QW5nbGUoKSB9KTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNhc2UgJ10nOlxuICAgICAgICAgIGNvbnN0IHNhdmVkRGF0YSA9IHN0YWNrLnBvcCgpO1xuICAgICAgICAgIGlmIChzYXZlZERhdGEpIHtcbiAgICAgICAgICAgIGNhbnZhcy5zZXRBbmdsZShzYXZlZERhdGEuYW5nbGUpO1xuICAgICAgICAgICAgY2FudmFzLnNldExhc3RQb2ludChzYXZlZERhdGEucG9pbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IHsgRHJhd2VyIH07XG4iLCJpbXBvcnQgeyBJUnVsZSB9IGZyb20gJy4vUnVsZSc7XG5cbmNsYXNzIExTeXN0ZW0ge1xuICBwdWJsaWMgc3RhdGljIG1hcFJ1bGVzKHJ1bGVzOiBJUnVsZVtdKSB7XG4gICAgcmV0dXJuIHJ1bGVzLnJlZHVjZSgocnVsZXNPYmo6IG9iamVjdCwgcnVsZTogSVJ1bGUpID0+IHtcbiAgICAgIHJ1bGVzT2JqW3J1bGUuZnJvbV0gPSBydWxlLnRvO1xuICAgICAgcmV0dXJuIHJ1bGVzT2JqO1xuICAgIH0sIE9iamVjdCgpKTtcbiAgfVxuXG4gIHByaXZhdGUgYXhpb206IHN0cmluZztcbiAgcHJpdmF0ZSBydWxlczogSVJ1bGVbXTtcblxuICBjb25zdHJ1Y3RvcihheGlvbTogc3RyaW5nLCBydWxlczogSVJ1bGVbXSkge1xuICAgIHRoaXMuYXhpb20gPSBheGlvbTtcbiAgICB0aGlzLnJ1bGVzID0gTFN5c3RlbS5tYXBSdWxlcyhydWxlcyk7XG4gIH1cblxuICBwdWJsaWMgZ2VuZXJhdGUoaXRlcmF0aW9uczogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBsZXQgb3V0cHV0OiBzdHJpbmcgPSB0aGlzLmF4aW9tO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlcmF0aW9uczsgKytpKSB7XG4gICAgICBvdXRwdXQgPSB0aGlzLm1hcChvdXRwdXQpO1xuICAgIH1cbiAgICByZXR1cm4gb3V0cHV0O1xuICB9XG5cbiAgcHVibGljIGdldEF4aW9tKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuYXhpb207XG4gIH1cblxuICBwdWJsaWMgZ2V0UnVsZXMoKTogSVJ1bGVbXSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZXM7XG4gIH1cblxuICBwcml2YXRlIG1hcChheGlvbTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBsZXQgb3V0cHV0OiBzdHJpbmdbXSA9IGF4aW9tLnNwbGl0KCcnKTtcbiAgICBvdXRwdXQgPSBvdXRwdXQubWFwKChsZXR0ZXIpID0+IHtcbiAgICAgIGNvbnN0IG1hcHBpbmc6IHN0cmluZyA9IHRoaXMucnVsZXNbbGV0dGVyXTtcbiAgICAgIHJldHVybiBtYXBwaW5nIHx8IGxldHRlcjtcbiAgICB9KTtcbiAgICByZXR1cm4gb3V0cHV0LmpvaW4oJycpO1xuICB9XG59XG5cbmV4cG9ydCB7IExTeXN0ZW0gfTtcbiIsImV4cG9ydCBpbnRlcmZhY2UgSVJ1bGUge1xuICBmcm9tOiBzdHJpbmc7XG4gIHRvOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBpc0lSdWxlID0gKG9iajogYW55KSA9PiB7XG4gIGlmICghKG9iaiBpbnN0YW5jZW9mIE9iamVjdCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gIGlmIChrZXlzLmxlbmd0aCAhPT0gMikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4ga2V5cy5pbmRleE9mKCdmcm9tJykgKyBrZXlzLmluZGV4T2YoJ3RvJykgPT09IDE7XG59O1xuIiwiaW1wb3J0IHsgQ2FudmFzMkQgfSBmcm9tICcuL0NhbnZhcyc7XG5pbXBvcnQgeyBEcmF3ZXIgfSBmcm9tICcuL0RyYXdlcic7XG5pbXBvcnQgeyBMU3lzdGVtIH0gZnJvbSAnLi9MU3lzdGVtJztcbmltcG9ydCB7IElSdWxlLCBpc0lSdWxlIH0gZnJvbSAnLi9SdWxlJztcblxuY29uc3QgcHJlc2V0cyA9IFtcbiAge1xuICAgIGFuZ2xlOiA2MCxcbiAgICBheGlvbTogJ0YtLUYtLUYnLFxuICAgIG5hbWU6ICdLb2NoIFNub3dmbGFrZScsXG4gICAgcnVsZXM6ICdGID4gRitGLS1GK0YnLFxuICB9LCB7XG4gICAgYW5nbGU6IDkwLFxuICAgIGF4aW9tOiAnRicsXG4gICAgbmFtZTogJ0tvY2ggQ3VydmUnLFxuICAgIHJ1bGVzOiAnRiA+IEYrRi1GLUYrRicsXG4gIH0sIHtcbiAgICBhbmdsZTogNjAsXG4gICAgYXhpb206ICdGK0YrRitGK0YrRicsXG4gICAgbmFtZTogJ0hleGEgZmxha2UnLFxuICAgIHJ1bGVzOiAnRiA+IEYrRitGLS1GLS1GK0YrRicsXG4gIH0sIHtcbiAgICBhbmdsZTogOTAsXG4gICAgYXhpb206ICdYJyxcbiAgICBuYW1lOiAnTGluZGVubWF5ZXIgY3VydmUnLFxuICAgIHJ1bGVzOiAnWCA+IFhGWUZYK0YrWUZYRlktRi1YRllGWFxcblkgPiBZRlhGWS1GLVhGWUZYK0YrWUZYRlknLFxuICB9LCB7XG4gICAgYW5nbGU6IDYwLFxuICAgIGF4aW9tOiAnRicsXG4gICAgbmFtZTogJ0dvc3BlciBjdXJ2ZScsXG4gICAgcnVsZXM6ICdGID4gRi1HLS1HK0YrK0ZGK0ctXFxuRyA+ICtGLUdHLS1HLUYrK0YrRycsXG4gIH0sIHtcbiAgICBhbmdsZTogMTIwLFxuICAgIGF4aW9tOiAnRi1HLUcnLFxuICAgIG5hbWU6ICdTaWVycGluc2tpIHRyaWFuZ2xlJyxcbiAgICBydWxlczogJ0YgPiBGLUcrRitHLUZcXG5HID4gR0cnLFxuICB9LCB7XG4gICAgYW5nbGU6IDYwLFxuICAgIGF4aW9tOiAnRicsXG4gICAgbmFtZTogJ1NpZXJwaW5za2kgYXJyb3cgaGVhZCB0cmlhbmdsZScsXG4gICAgcnVsZXM6ICdGID4gRy1GLUdcXG5HID4gRitHK0YnLFxuICB9LCB7XG4gICAgYW5nbGU6IDkwLFxuICAgIGF4aW9tOiAnRlgnLFxuICAgIG5hbWU6ICdEcmFnb24gY3VydmUnLFxuICAgIHJ1bGVzOiAnWCA+IFgrWUYrXFxuWSA+IC1GWC1ZJyxcbiAgfSwge1xuICAgIGFuZ2xlOiA5MCxcbiAgICBheGlvbTogJ0EnLFxuICAgIG5hbWU6ICdIaWxiZXJ0IEN1cnZlJyxcbiAgICBydWxlczogJ0EgPiAtQkYrQUZBK0ZCLVxcbkIgPiArQUYtQkZCLUZBKycsXG4gIH0sIHtcbiAgICBhbmdsZTogMjUsXG4gICAgYXhpb206ICcrKytYJyxcbiAgICBuYW1lOiAnUGxhbnQnLFxuICAgIHJ1bGVzOiAnWCA+IEZbLVhdW1hdRlstWF0rRlhcXG5GID4gRkYnLFxuICB9LCB7XG4gICAgYW5nbGU6IDI1LjcsXG4gICAgYXhpb206ICdGJyxcbiAgICBuYW1lOiAnUGxhbnQgMScsXG4gICAgcnVsZXM6ICdGID4gRlsrRl1GWy1GXUYnLFxuICB9LCB7XG4gICAgYW5nbGU6IDIwLFxuICAgIGF4aW9tOiAnRicsXG4gICAgbmFtZTogJ1BsYW50IDInLFxuICAgIHJ1bGVzOiAnRiA+IEZbK0ZdRlstRl1bRl0nLFxuICB9LCB7XG4gICAgYW5nbGU6IDIyLjUsXG4gICAgYXhpb206ICdGJyxcbiAgICBuYW1lOiAnUGxhbnQgMycsXG4gICAgcnVsZXM6ICdGID4gRkYtWy1GK0YrRl0rWytGLUYtRl0nLFxuICB9LCB7XG4gICAgYW5nbGU6IDIwLFxuICAgIGF4aW9tOiAnWCcsXG4gICAgbmFtZTogJ1BsYW50IDQnLFxuICAgIHJ1bGVzOiAnWCA+IEZbK1hdRlstWF0rWFxcbkYgPiBGRicsXG4gIH0sIHtcbiAgICBhbmdsZTogMjUuNyxcbiAgICBheGlvbTogJ1gnLFxuICAgIG5hbWU6ICdQbGFudCA1JyxcbiAgICBydWxlczogJ1ggPiBGWytYXVstWF1GWFxcbkYgPiBGRicsXG4gIH0sXG5dO1xuXG5jb25zdCBwYXJzZVJ1bGVzID0gKHJ1bGVzU3RyaW5nOiBzdHJpbmcpOiBJUnVsZVtdID0+IHJ1bGVzU3RyaW5nLnNwbGl0KCdcXG4nKS5tYXAoKGxpbmUpID0+IHtcbiAgY29uc3QgcnVsZUFycmF5OiBzdHJpbmdbXSA9IGxpbmUuc3BsaXQoJz4nKTtcbiAgcmV0dXJuIHtcbiAgICBmcm9tOiBydWxlQXJyYXlbMF0gJiYgcnVsZUFycmF5WzBdLnRyaW0oKSxcbiAgICB0bzogcnVsZUFycmF5WzFdICYmIHJ1bGVBcnJheVsxXS50cmltKCksXG4gIH07XG59KS5maWx0ZXIoKHJ1bGU6IElSdWxlKSA9PiBpc0lSdWxlKHJ1bGUpKTtcblxuZXhwb3J0IGNvbnN0IHNldHVwID0gKCkgPT4ge1xuXG4gIGxldCByb290RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jyk7XG4gIGlmICghcm9vdEVsZW1lbnQpIHtcbiAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbS5pZCA9ICdyb290JztcbiAgICByb290RWxlbWVudCA9IGVsZW07XG4gIH1cbiAgY29uc3QgY2FudmFzV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCA8IDc2OCA/IHdpbmRvdy5pbm5lcldpZHRoIDogd2luZG93LmlubmVyV2lkdGggKiAwLjc7XG4gIGNvbnN0IGNhbnZhc0hlaWdodCA9IHdpbmRvdy5pbm5lcldpZHRoIDwgNzY4ID8gd2luZG93LmlubmVySGVpZ2h0ICogMC41IDogd2luZG93LmlubmVySGVpZ2h0O1xuICBjb25zdCBjYW52YXMgPSBuZXcgQ2FudmFzMkQoY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCwgcm9vdEVsZW1lbnQpO1xuICBjb25zdCBjYW52YXNTaXplID0gY2FudmFzLmdldFNpemUoKTtcbiAgY2FudmFzLnNldExhc3RQb2ludChcbiAgICB7XG4gICAgICB4OiBjYW52YXNTaXplLndpZHRoIC8gMixcbiAgICAgIHk6IGNhbnZhc1NpemUuaGVpZ2h0IC8gMixcbiAgICB9LFxuICApO1xuXG4gIGNvbnN0IGF4aW9tRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdheGlvbScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gIGNvbnN0IGl0ZXJhdGlvbnNFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZXJhdGlvbnMnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICBjb25zdCBhbmdsZUVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYW5nbGUnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICBjb25zdCBsaW5lRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaW5lJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgY29uc3QgbGluZVdpZHRoRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaW5ld2lkdGgnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICBjb25zdCBydWxlc0VsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncnVsZXMnKSBhcyBIVE1MVGV4dEFyZWFFbGVtZW50O1xuICBjb25zdCBwcmVzZXRzRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmVzZXRzJykgYXMgSFRNTFNlbGVjdEVsZW1lbnQ7XG4gIGNvbnN0IHN0YXJ0QW5nbGVFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0YW5nbGUnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuXG4gIHByZXNldHMuZm9yRWFjaCgocHJlc2V0KSA9PiB7XG4gICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgb3B0aW9uLmlubmVySFRNTCA9IHByZXNldC5uYW1lO1xuICAgIHByZXNldHNFbGVtLmFwcGVuZENoaWxkKG9wdGlvbik7XG4gIH0pO1xuXG4gIGxldCB0aW1lT3V0SWQ6IG51bWJlcjtcblxuICBsZXQgbHN5c3RlbSA9IG5ldyBMU3lzdGVtKHByZXNldHNbMF0uYXhpb20sIHBhcnNlUnVsZXMocHJlc2V0c1swXS5ydWxlcykpO1xuICBjb25zdCBkcmF3ID0gKGl0ZXJhdGlvbnM6IG51bWJlciwgYW5nbGU6IG51bWJlciwgbGluZUxlbmd0aDogbnVtYmVyLCBzdGFydGFuZ2xlOiBudW1iZXIsIHdpZHRoOiBudW1iZXIpID0+IHtcbiAgICBjbGVhclRpbWVvdXQodGltZU91dElkKTtcbiAgICByZXR1cm4gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjYW52YXMucmVzZXQoKTtcbiAgICAgIGNhbnZhcy5zZXRBbmdsZShzdGFydGFuZ2xlKTtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIERyYXdlci5kcmF3KGxzeXN0ZW0uZ2VuZXJhdGUoaXRlcmF0aW9ucyksIGFuZ2xlLCBjYW52YXMsIGxpbmVMZW5ndGgsIHdpZHRoKTtcbiAgICAgIH0pO1xuICAgIH0sIDApO1xuICB9O1xuXG4gIGFuZ2xlRWxlbS52YWx1ZSA9IGAke3ByZXNldHNbMF0uYW5nbGV9YDtcbiAgcnVsZXNFbGVtLnZhbHVlID0gYCR7cHJlc2V0c1swXS5ydWxlc31gO1xuICBheGlvbUVsZW0udmFsdWUgPSBgJHtwcmVzZXRzWzBdLmF4aW9tfWA7XG4gIGxldCBydWxlcyA9IHBhcnNlUnVsZXMocnVsZXNFbGVtLnZhbHVlKTtcbiAgdGltZU91dElkID0gZHJhdyhcbiAgICAraXRlcmF0aW9uc0VsZW0udmFsdWUsXG4gICAgK2FuZ2xlRWxlbS52YWx1ZSxcbiAgICArbGluZUVsZW0udmFsdWUsXG4gICAgK3N0YXJ0QW5nbGVFbGVtLnZhbHVlLFxuICAgICtsaW5lV2lkdGhFbGVtLnZhbHVlLFxuICApO1xuXG4gIHN0YXJ0QW5nbGVFbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGU6IGFueSkgPT4ge1xuICAgIGlmIChlLmN1cnJlbnRUYXJnZXQpIHtcbiAgICAgIGRyYXcoK2l0ZXJhdGlvbnNFbGVtLnZhbHVlLCArYW5nbGVFbGVtLnZhbHVlLCArbGluZUVsZW0udmFsdWUsICtlLmN1cnJlbnRUYXJnZXQudmFsdWUsICtsaW5lV2lkdGhFbGVtLnZhbHVlKTtcbiAgICB9XG4gIH0pO1xuXG4gIHByZXNldHNFbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlOiBhbnkpID0+IHtcbiAgICBjb25zdCBwcmVzZXQgPSBwcmVzZXRzLmZpbmQoKGN1cnJlbnRQcmVzZXQ6IGFueSkgPT4gY3VycmVudFByZXNldC5uYW1lID09PSBlLnRhcmdldC52YWx1ZSk7XG4gICAgaWYgKHByZXNldCkge1xuICAgICAgYW5nbGVFbGVtLnZhbHVlID0gYCR7cHJlc2V0LmFuZ2xlfWA7XG4gICAgICBydWxlc0VsZW0udmFsdWUgPSBgJHtwcmVzZXQucnVsZXN9YDtcbiAgICAgIGF4aW9tRWxlbS52YWx1ZSA9IGAke3ByZXNldC5heGlvbX1gO1xuICAgICAgbHN5c3RlbSA9IG5ldyBMU3lzdGVtKHByZXNldC5heGlvbSwgcGFyc2VSdWxlcyhwcmVzZXQucnVsZXMpKTtcbiAgICB9XG4gICAgZHJhdygraXRlcmF0aW9uc0VsZW0udmFsdWUsICthbmdsZUVsZW0udmFsdWUsICtsaW5lRWxlbS52YWx1ZSwgK3N0YXJ0QW5nbGVFbGVtLnZhbHVlLCArbGluZVdpZHRoRWxlbS52YWx1ZSk7XG4gIH0pO1xuXG4gIGF4aW9tRWxlbS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlOiBhbnkpID0+IHtcbiAgICBpZiAoZS5jdXJyZW50VGFyZ2V0KSB7XG4gICAgICBsc3lzdGVtID0gbmV3IExTeXN0ZW0oZS5jdXJyZW50VGFyZ2V0LnZhbHVlLCBydWxlcyk7XG4gICAgICBkcmF3KCtpdGVyYXRpb25zRWxlbS52YWx1ZSwgK2FuZ2xlRWxlbS52YWx1ZSwgK2xpbmVFbGVtLnZhbHVlLCArc3RhcnRBbmdsZUVsZW0udmFsdWUsICtsaW5lV2lkdGhFbGVtLnZhbHVlKTtcbiAgICB9XG4gIH0pO1xuXG4gIGl0ZXJhdGlvbnNFbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGU6IGFueSkgPT4ge1xuICAgIGlmIChlLmN1cnJlbnRUYXJnZXQpIHtcbiAgICAgIGRyYXcoK2UuY3VycmVudFRhcmdldC52YWx1ZSwgK2FuZ2xlRWxlbS52YWx1ZSwgK2xpbmVFbGVtLnZhbHVlLCArc3RhcnRBbmdsZUVsZW0udmFsdWUsICtsaW5lV2lkdGhFbGVtLnZhbHVlKTtcbiAgICB9XG4gIH0pO1xuICBhbmdsZUVsZW0uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZTogYW55KSA9PiB7XG4gICAgaWYgKGUuY3VycmVudFRhcmdldCkge1xuICAgICAgZHJhdygraXRlcmF0aW9uc0VsZW0udmFsdWUsICtlLmN1cnJlbnRUYXJnZXQudmFsdWUsICtsaW5lRWxlbS52YWx1ZSwgK3N0YXJ0QW5nbGVFbGVtLnZhbHVlLCArbGluZVdpZHRoRWxlbS52YWx1ZSk7XG4gICAgfVxuICB9KTtcbiAgbGluZUVsZW0uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZTogYW55KSA9PiB7XG4gICAgaWYgKGUuY3VycmVudFRhcmdldCkge1xuICAgICAgZHJhdyhcbiAgICAgICAgK2l0ZXJhdGlvbnNFbGVtLnZhbHVlLFxuICAgICAgICArYW5nbGVFbGVtLnZhbHVlLFxuICAgICAgICArZS5jdXJyZW50VGFyZ2V0LnZhbHVlLFxuICAgICAgICArc3RhcnRBbmdsZUVsZW0udmFsdWUsXG4gICAgICAgICtsaW5lV2lkdGhFbGVtLnZhbHVlLFxuICAgICAgKTtcbiAgICB9XG4gIH0pO1xuICBydWxlc0VsZW0uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZTogYW55KSA9PiB7XG4gICAgaWYgKGUuY3VycmVudFRhcmdldCkge1xuICAgICAgcnVsZXMgPSBwYXJzZVJ1bGVzKGUuY3VycmVudFRhcmdldC52YWx1ZSk7XG4gICAgICBsc3lzdGVtID0gbmV3IExTeXN0ZW0oYXhpb21FbGVtLnZhbHVlLCBydWxlcyk7XG4gICAgICBkcmF3KCtpdGVyYXRpb25zRWxlbS52YWx1ZSwgK2FuZ2xlRWxlbS52YWx1ZSwgK2xpbmVFbGVtLnZhbHVlLCArc3RhcnRBbmdsZUVsZW0udmFsdWUsICtsaW5lV2lkdGhFbGVtLnZhbHVlKTtcbiAgICB9XG4gIH0pO1xuICBsaW5lV2lkdGhFbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGU6IGFueSkgPT4ge1xuICAgIGlmIChlLmN1cnJlbnRUYXJnZXQpIHtcbiAgICAgIGRyYXcoK2l0ZXJhdGlvbnNFbGVtLnZhbHVlLCArYW5nbGVFbGVtLnZhbHVlLCArbGluZUVsZW0udmFsdWUsICtzdGFydEFuZ2xlRWxlbS52YWx1ZSwgK2UuY3VycmVudFRhcmdldC52YWx1ZSk7XG4gICAgfVxuICB9KTtcbn07XG4iLCJpbXBvcnQgeyBzZXR1cCB9IGZyb20gJy4vVUknO1xuc2V0dXAoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=