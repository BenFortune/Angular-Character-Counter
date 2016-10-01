'use strict';

import Config from './character-counter.config';
import './character-counter-component';
import './character-counter-page';

angular.module('app', [
    'ngRoute',
    'character.counter.app',
    'character.counter.page'
])
    .config(Config);
