// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"K4Xi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var string = "\n.skin *{box-sizing: border-box;margin: 0; padding: 0;}\n.skin *::before, .skin *::after{box-sizing: border-box;}\n.skin{\n    position: relative;\n    background-color: #ffe600;\n    min-height: 100vh;\n\n}\n.nose{\n    border: 10px solid black;\n    border-color: black transparent transparent transparent;\n    width: 0px;\n    height: 0px;\n    position: relative;\n    left: 50%;\n    top: 145px;\n    margin-left: -10px;\n    z-index: 4;\n}\n@keyframes wave{\n    0%{\n        transform: rotate(0deg);\n    }\n    33%{\n        transform: rotate(5deg);\n    }\n    66%{\n        transform: rotate(-5deg);\n    }\n    100%{\n        transform: rotate(0deg);\n    }\n}\n.nose:hover{\n    transform-origin: 50% 100%;\n    animation: wave 100ms infinite;\n}\n.yuan{\n    position: absolute;\n    width: 20px;\n    height: 6px;\n    top: -16px;\n    left: -10px;\n    border-radius: 10px 10px 0 0;\n    background-color: black;\n}\n.eye {\n    border: 3px solid black;\n    width: 64px;\n    height: 64px;\n    position: absolute;\n    left: 50%;\n    top:100px;\n    margin-left: -32px;\n    background-color: #464646;\n    border-radius: 50%;\n}\n.eye::before{\n    content: '';\n    display: block;\n    border: 3px solid #000;\n    width: 30px;\n    height: 30px;\n    border-radius: 50%;\n    background-color: #fff;\n    position: relative;\n    left: 4px;\n    top: 2px;\n}\n.eye.left{\n    transform: translateX(-100px);\n}\n.eye.right{\n    transform: translateX(100px);\n}\n.mouth{\n    width: 200px;\n    height: 200px;\n    position: absolute;\n    left: 50%;\n    top: 170px;\n    margin-left: -100px;\n}\n.mouth .up{\n    position: relative;    \n    top: -20px;\n    z-index: 1;\n}\n.mouth .up .lip{\n    border: 3px solid black;\n    height: 30px;\n    width: 100px;\n    border-top-color: transparent;\n    border-right-color: transparent;\n    position: relative;\n    position: absolute;\n    left: 50%;\n    margin-left: -50px;\n    background-color: #ffe600;\n}\n.mouth .up .lip.left{  \n    border-radius: 0 0 0 50px;   \n    transform: rotate(-15deg) translateX(-53px);\n}\n.mouth .up .lip.right{    \n    border-radius: 0 0 50px 0;   \n    transform: rotate(15deg) translateX(53px);    \n}\n.mouth .up .lip::before{\n    content: '';\n    display: block;\n    width: 7px;\n    height: 30px;\n    position: absolute;\n    bottom: 0;\n    background-color: #ffe600;\n}\n.mouth .up .lip.left::before{\n    right: -6px;\n}\n.mouth .up .lip.right::before{  \n    left: -6px;\n}\n.mouth .down{\n    height: 180px;\n    position: absolute;\n    width:100%;\n    top: 0px;\n    overflow: hidden;\n}\n.mouth .down .yuan1{\n    border: 3px solid black;\n    width: 150px;\n    height: 1000px;\n    position: absolute;\n    margin-left: -75px;\n    bottom: 0;\n    left:50%;\n    border-radius: 75px/300px;\n    background-color: rgb(155, 0, 10);\n    overflow: hidden;\n}\n.mouth .down .yuan1 .yuan2{\n    width: 200px;\n    height: 300px;\n    position: absolute;\n    bottom: -155px;\n    left: 50%;\n    margin-left: -100px;\n    background-color: rgb(255, 72, 95);\n    border-radius: 100px;\n}\n.face{\n    position: absolute;\n    left: 50%;\n    border: 3px solid black;\n    width: 88px;\n    height: 88px;\n    top: 200px;\n    margin-left: -44px;\n}\n.face.left{\n    transform: translateX(-180px);\n    background-color: #f00;\n    border-radius: 50%;\n}\n.face.right{\n    transform: translateX(180px);\n    background-color: #f00;\n    border-radius: 50%;\n}\n";
exports.default = string;
},{}],"HdJB":[function(require,module,exports) {
'use strict';

var _css = require('./css.js');

var _css2 = _interopRequireDefault(_css);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
    id: undefined,
    time: 100,
    ui: {
        demo: document.querySelector('#demo'),
        demo2: document.querySelector('#demo2')
    },
    n: 1,
    init: function init() {
        player.ui.demo.innerText = _css2.default.substr(0, player.n);
        player.ui.demo2.innerHTML = _css2.default.substr(0, player.n);
        player.play();
        player.bindEvents();
    },
    events: {
        '#btnPause': 'pause',
        '#btnPlay': 'play',
        '#btnSlow': 'slow',
        '#btnNormal': 'normal',
        '#btnFast': 'fast'
    },
    bindEvents: function bindEvents() {
        for (var key in player.events) {
            if (player.events.hasOwnProperty(key)) {
                document.querySelector(key).onclick = player[player.events[key]];
            }
        }
    },
    run: function run() {
        player.n += 1;
        if (player.n > _css2.default.length) {
            window.clearInterval(player.id);
            return;
        }
        player.ui.demo.innerText = _css2.default.substr(0, player.n);
        player.ui.demo2.innerHTML = _css2.default.substr(0, player.n);
        player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
    },
    play: function play() {
        player.pause();
        player.id = setInterval(player.run, player.time);
    },
    pause: function pause() {
        window.clearInterval(player.id);
    },
    slow: function slow() {
        player.pause();
        player.time = 150;
        player.play();
    },
    normal: function normal() {
        player.pause();
        player.time = 50;
        player.play();
    },
    fast: function fast() {
        player.pause();
        player.time = 0;
        player.play();
    }
};
player.init();
},{"./css.js":"K4Xi"}]},{},["HdJB"], null)
//# sourceMappingURL=test.515d6033.map