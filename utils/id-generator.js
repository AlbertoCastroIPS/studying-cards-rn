export default class IdGenerator {
    id = 0

    generateId() {
        return ++this.id
    }
}