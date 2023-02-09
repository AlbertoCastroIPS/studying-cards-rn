import { IdGenerator } from '../utils'

export default class Entity {
	id = 0
	name = ''
	children = []
	idGenerator = new IdGenerator()

	constructor({
		id,
		name,
		children = [],
	}) {
		this.id = id
		this.name = name
		this.children = children
	}

	isChildNameAlreadyTaken(childName) {
		return this.children.some((child) => child.name == childName)
	}

	hasChildWithId(childId) {
		return this.children.some((child) => child.id == childId)
	}

	registerChild(child) {
        if (this.isChildNameAlreadyTaken(child.name)) {
            throw 'Name already taken'
        }

        const childId = this.idGenerator.generateId()

        const childToRegister = child.constructor({
			...child,
			id: childId,
		})

        this.children.push(childToRegister)

        return childToRegister
	}

	replaceChild(child) {
		if (!this.hasChildWithId(child.id)) {
			throw 'Id does not exists'
		}

		const childIndex = this.childIndexById(child.id)
		this.children[childIndex] = child

		return this.children[childIndex]
	}

	childIndexById(childId) {
		return this.children.findIndex((child) => child.id == childId)
	}

	childCount() {
		return this.children.length
	}
}