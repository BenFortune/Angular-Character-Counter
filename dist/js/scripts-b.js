(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _characterCounter = require('./character-counter.controller');

var _characterCounter2 = _interopRequireDefault(_characterCounter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CharacterCounter = {
    template: require('./character-counter.template.html'),
    controller: _characterCounter2.default,
    bindings: {
        'countDown': '<',
        'countUp': '<',
        'maxLength': '<'
    }
};

exports.default = CharacterCounter;

},{"./character-counter.controller":2,"./character-counter.template.html":3}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CharacterCounterController = function () {
    function CharacterCounterController() {
        // Probably not necessary, but maybe?

        _classCallCheck(this, CharacterCounterController);
    }

    _createClass(CharacterCounterController, [{
        key: '$onInit',
        value: function $onInit() {
            // Check for max length attribute to determine if countdown or just a counter
            if (this.maxLength) {
                this.characterCounterLabel = 'Characters Remaining';
                this.characters = this.maxLength;
            } else {
                this.characterCounterLabel = 'Characters';
                this.characters = 0;
            }
        }
    }, {
        key: '$onChanges',
        value: function $onChanges(changes) {
            // Determine which change to act upon
            if (changes.countDown && changes.countDown.currentValue) {
                this.characters = this.maxLength - changes.countDown.currentValue.length;
            } else if (changes.countUp && changes.countUp.currentValue) {
                this.characters = changes.countUp.currentValue.length;
            }
        }
    }]);

    return CharacterCounterController;
}();

exports.default = CharacterCounterController;

},{}],3:[function(require,module,exports){
module.exports = "<p>{{$ctrl.characterCounterLabel}}: {{$ctrl.characters}}</p>\n";

},{}],4:[function(require,module,exports){
'use strict';

var _characterCounter = require('./character-counter.component');

var _characterCounter2 = _interopRequireDefault(_characterCounter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

angular.module('character.counter.app', ['ngRoute']).component('characterCounter', _characterCounter2.default);

},{"./character-counter.component":1}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _characterCounterPage = require('./character-counter-page.controller');

var _characterCounterPage2 = _interopRequireDefault(_characterCounterPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CharacterCounterPage = {
    template: require('./character-counter-page.template.html'),
    controller: _characterCounterPage2.default
};

exports.default = CharacterCounterPage;

},{"./character-counter-page.controller":6,"./character-counter-page.template.html":7}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CharacterCounterPageController = function CharacterCounterPageController() {
    _classCallCheck(this, CharacterCounterPageController);
}

// CHARACTER COUNTER FUNCTIONS
;

exports.default = CharacterCounterPageController;

},{}],7:[function(require,module,exports){
module.exports = "<header>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <h1>Angular Character Counter</h1>\n            </div>\n        </div>\n    </div>\n</header>\n<section class=\"container\">\n    <form>\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <div class=\"form-group\">\n                    <textarea class=\"form-control\" data-ng-model=\"$ctrl.characterCountUp\" name=\"name\" rows=\"6\" cols=\"40\"></textarea>\n                    <character-counter count-up=\"$ctrl.characterCountUp\"></character-counter>\n                </div>\n                <div class=\"form-group\">\n                    <textarea class=\"form-control\" data-ng-model=\"$ctrl.characterCountDown\" name=\"name\" rows=\"6\" cols=\"40\"></textarea>\n                    <character-counter count-down=\"$ctrl.characterCountDown\" max-length=\"200\"></character-counter>\n                </div>\n            </div>\n        </div>\n    </form>\n</section>\n";

},{}],8:[function(require,module,exports){
'use strict';

var _characterCounterPage = require('./character-counter-page.component');

var _characterCounterPage2 = _interopRequireDefault(_characterCounterPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

angular.module('character.counter.page', ['ngRoute']).component('characterCounterPage', _characterCounterPage2.default);

},{"./character-counter-page.component":5}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Config;
function Config($routeProvider) {
    $routeProvider.when('/', {
        template: '<character-counter-page></character-counter-page>'
    }).otherwise({
        redirectTo: '/'
    });
}

},{}],10:[function(require,module,exports){
'use strict';

var _characterCounter = require('./character-counter.config');

var _characterCounter2 = _interopRequireDefault(_characterCounter);

require('./character-counter-component');

require('./character-counter-page');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

angular.module('app', ['ngRoute', 'character.counter.app', 'character.counter.page']).config(_characterCounter2.default);

},{"./character-counter-component":4,"./character-counter-page":8,"./character-counter.config":9}]},{},[10]);
