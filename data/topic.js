import Entity from './entity'

export default class Topic extends Entity {
    constructor({
        id,
        name,
        cards = [],
    }) {
        super({
            id,
            name,
            children: cards,
        })
    }

    clone() {
        return new Topic({
            ...this,
            cards: [...this.children],
        })
    }

    get cards() {
        return this.children
    }

    getCardsCount() {
        return this.childCount()
    }

    registerCard(card) {
        const newCard = this.registerChild(card)

        return [this.clone(), newCard]
    }

    replaceCard(card) {
        this.replaceChild(card)

        return [this.clone(), card]
    }
}