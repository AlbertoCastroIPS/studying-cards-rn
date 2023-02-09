import Entity from './entity'

export default class Card extends Entity {
    text = ''

    constructor({
        id,
        name,
        text,
    }) {
        super({id, name})
        this.text = text
    }
}