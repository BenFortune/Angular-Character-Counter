'use strict';

import CharacterCounter from './character-counter.component';

angular.module('character.counter.app', [
        'ngRoute'
    ])
    .component('characterCounter', CharacterCounter);
