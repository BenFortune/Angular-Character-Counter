export default class CharacterCounterController {

    constructor() {
        this.characters = 0;
        this.charactersLeft = 200;
    }

    // CHARACTER COUNTER FUNCTIONS
    getCount() {
        this.characters = this.someEffCount.length;
    }

    getCountdown() {
        this.charactersLeft = 200 - this.someEffCount2.length;
    }
}
