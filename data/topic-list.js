export default class TopicList {
    topics = []

    constructor(topics = []) {
        this.topics = topics
    }

    getCardsCount() {
        return this.topics.reduce((total, topic) => {
            return total + topic.getCardsCount()
        }, 0)
    }

    getCount() {
        return this.topics.length
    }
}