import Card from './card'
import Entity from './entity'
import Theme from './theme'
import Topic from './topic'

export default class ThemeList extends Entity {
    constructor() {
        super({
            children: [
                new Theme({
                    id: -2,
                    name: 'Accessibility',
                    topics: [
                        new Topic({
                            id: -22,
                            name: 'Screen readers',
                            cards: [
                                new Card({
                                    id: -222,
                                    name: 'Screen reader',
                                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum lectus et massa auctor, nec accumsan quam scelerisque. Nulla in dolor a odio rhoncus euismod. Donec euismod sodales dui eu aliquam. Fusce nec maximus libero. Donec convallis magna sed urna suscipit auctor a eget ex. In sit amet pellentesque nibh. Nullam fringilla purus id arcu blandit, a sodales justo interdum. Quisque et massa non odio faucibus vestibulum. Curabitur tristique malesuada eros, quis vehicula sapien posuere eu. Nam sem lorem, pretium sed nisl quis, iaculis malesuada neque. Sed a tortor leo. Donec lobortis purus elit, a imperdiet massa vehicula sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum lectus et massa auctor, nec accumsan quam scelerisque. Nulla in dolor a odio rhoncus euismod. Donec euismod sodales dui eu aliquam. Fusce nec maximus libero. Donec convallis magna sed urna suscipit auctor a eget ex. In sit amet pellentesque nibh. Nullam fringilla purus id arcu blandit, a sodales justo interdum. Quisque et massa non odio faucibus vestibulum. Curabitur tristique malesuada eros, quis vehicula sapien posuere eu. Nam sem lorem, pretium sed nisl quis, iaculis malesuada neque. Sed a tortor leo. Donec lobortis purus elit, a imperdiet massa vehicula sed.',
                                }),
                                new Card({
                                    id: -221,
                                    name: 'NVDA',
                                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum lectus et massa auctor, nec accumsan quam scelerisque. Nulla in dolor a odio rhoncus euismod. Donec euismod sodales dui eu aliquam. Fusce nec maximus libero. Donec convallis magna sed urna suscipit auctor a eget ex. In sit amet pellentesque nibh. Nullam fringilla purus id arcu blandit, a sodales justo interdum. Quisque et massa non odio faucibus vestibulum. Curabitur tristique malesuada eros, quis vehicula sapien posuere eu. Nam sem lorem, pretium sed nisl quis, iaculis malesuada neque. Sed a tortor leo. Donec lobortis purus elit, a imperdiet massa vehicula sed.',
                                }),
                            ],
                        }),
                    ],
                })
            ]
        })
    }

    clone() {
        const clone = new ThemeList()
        clone.children = [...this.children]

        return clone
    }

    get themes() {
        return this.children
    }

    registerTheme(theme) {
        const newTheme = this.registerChild(theme)
        return [this.clone(), newTheme]
    }

    replaceTheme(theme) {
        return [this.clone(), this.replaceChild(theme)]
    }

    registerTopic({
        theme,
        topic,
    }) {
        const [newTheme, newTopic] = theme.registerTopic(topic)

        this.replaceChild(newTheme)

        return [this.clone(), newTheme, newTopic]
    }

    replaceTopic({
        theme,
        topic,
    }) {
        const [newTheme, newTopic] = theme.replaceTopic(topic)

        this.replaceChild(newTheme)

        return [this.clone(), newTheme, newTopic]
    }

    registerCard({
        theme,
        topic,
        card,
    }) {
        const [newTheme, newTopic, newCard] = theme.registerCard({
            topic,
            card,
        })
        this.replaceChild(newTheme)

        return [this.clone(), newTheme, newTopic, newCard]
    }

    replaceCard({
        theme,
        topic,
        card,
    }) {
        const [newTheme, newTopic, newCard] = theme.replaceCard({
            topic,
            card,
        })

        this.replaceChild(newTheme)

        return [this.clone(), newTheme, newTopic, newCard]
    }
}