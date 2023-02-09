export default class CardList {
    cards = []

    constructor(cards = []) {
        this.cards = cards
    }

    getCount() {
        return this.cards.length
    }
}