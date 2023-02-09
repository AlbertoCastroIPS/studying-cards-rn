import Entity from './entity'

export default class Theme extends Entity {
    constructor({
        id,
        name,
        topics = [],
    }) {
        super({
            id,
            name,
            children: topics,
        })
    }

    clone() {
        return new Theme({
            ...this,
            topics: [...this.children],
        })
    }

    get topics() {
        return this.children
    }

    getCardsCount() {
        return this.children.reduce((cardsCount, topic) => {
            return cardsCount + topic.getCardsCount()
        }, 0)
    }

    getTopicsCount() {
        return this.childCount()
    }

    registerTopic(topic) {
        const newTopic = this.registerChild(topic)
        return [this.clone(), newTopic]
    }

    replaceTopic(topic) {
        this.replaceChild(topic)

        return [this.clone(), topic]
    }

    registerCard({
        topic,
        card,
    }) {
        const [newTopic, newCard] = topic.registerCard(card)

        this.replaceChild(newTopic)

        return [this.clone(), newTopic, newCard]
    }

    replaceCard({
        topic,
        card,
    }) {
        const [newTopic, newCard] = topic.replaceCard(card)

        this.replaceChild(newTopic)

        return [this.clone(), newTopic, newCard]
    }
}