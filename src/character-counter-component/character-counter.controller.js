export default class CharacterCounterController {

    constructor() {
        // Probably not necessary, but maybe?
    }

    $onInit() {
        // Check for max length attribute to determine if countdown or just a counter
        if (this.maxLength) {
            this.characterCounterLabel = 'Characters Remaining';
            this.characters = this.maxLength;
        } else {
            this.characterCounterLabel = 'Characters';
            this.characters = 0;
        }
    }

    $onChanges(changes) {
        // Determine which change to act upon
        if (changes.countDown && changes.countDown.currentValue) {
            this.characters = this.maxLength - changes.countDown.currentValue.length;
        } else if (changes.countUp && changes.countUp.currentValue) {
            this.characters = changes.countUp.currentValue.length;
        }
    }
}
