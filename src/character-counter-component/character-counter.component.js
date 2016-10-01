import CharacterCounterController from './character-counter.controller';

const CharacterCounter = {
    template: require('./character-counter.template.html'),
    controller: CharacterCounterController,
    bindings: {
        'countDown': '<',
        'countUp': '<',
        'maxLength': '<'
    }
};

export default CharacterCounter
