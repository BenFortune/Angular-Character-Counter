'use strict';

import CharacterCounterPage from './character-counter-page.component';

angular.module('character.counter.page', [
        'ngRoute'
    ])
    .component('characterCounterPage', CharacterCounterPage);
