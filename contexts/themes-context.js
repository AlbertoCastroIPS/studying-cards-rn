import {
    useReducer,
    createContext,
} from 'react'
import { Card, Theme, ThemeList, Topic } from '../data'
import { useTurnOffFlag } from '../hooks'
import { ClearCard, ClearThemeAction, ClearTopicAction, EditCardAction, EditThemeAction, EditTopicAction, RegisterCardAction, RegisterThemeAction, RegisterTopicAction, SetCard, SetProperty, ToggleFlag } from './actions'

const initialData = {
    themeList: new ThemeList(),
    theme: null,
    saveThemeError: null,
    wasThemeSaved: false,

    topic: null,
    saveTopicError: null,
    wasTopicSaved: false,
    cards: null,

    card: null,
    saveCardError: null,
    wasCardSaved: false,

    dispatch: ()=>{},
}

export const ThemesContext = createContext(initialData)

function registerEntity({
    entityProperty,
    wasSavedProperty,
    errorProperty,
    registerFn,
    state,
}) {
    const newState = {...state}

    try {
        const [newThemeList, entity] = registerFn()
        newState.themeList = newThemeList

        newState[entityProperty] = entity
        newState[wasSavedProperty] = true
    } catch (error) {
        console.error(error)

        newState[errorProperty] = error
    } finally {
        return newState
    }
}

function themesReducer(state, action) {
    switch (action.type) {
        case RegisterThemeAction: {
            return registerEntity({
                entityProperty: 'theme',
                wasSavedProperty: 'wasThemeSaved',
                errorProperty: 'saveThemeError',
                registerFn: () => state.themeList.registerTheme(new Theme(action.theme)),
                state,
            })
        }

        case EditThemeAction: {
            return registerEntity({
                entityProperty: 'theme',
                wasSavedProperty: 'wasThemeSaved',
                errorProperty: 'saveThemeError',
                registerFn: () => {
                    return state.themeList.replaceTheme(new Theme({
                        ...state.theme,
                        topics: state.theme.topics,
                        ...action.theme,
                    }))
                },
                state,
            })
        }

        case ClearThemeAction: {
            return {
                ...state,
                theme: null,
                topic: null,
                card: null,
            }
        }

        case RegisterTopicAction: {
            let newTheme = null
            const newState = registerEntity({
                entityProperty: 'topic',
                wasSavedProperty: 'wasTopicSaved',
                errorProperty: 'saveTopicError',
                registerFn: () => {
                    const [newThemeList, theme, topic] = state.themeList.registerTopic({
                        theme: state.theme,
                        topic: new Topic(action.topic),
                    })

                    newTheme = theme

                    return [newThemeList, topic]
                },
                state,
            })

            if (newState.wasTopicSaved) {
                newState.theme = newTheme
            }

            return newState
        }

        case EditTopicAction: {
            let newTheme = null
            const newState = registerEntity({
                entityProperty: 'topic',
                wasSavedProperty: 'wasTopicSaved',
                errorProperty: 'saveTopicError',
                registerFn: () => {
                    const newTopic = new Topic({
                        ...state.topic,
                        cards: state.topic.cards,
                        ...action.topic,
                    })
                    const [newThemeList, theme, replacedTopic] = state.themeList.replaceTopic({
                        topic: newTopic,
                        theme: state.theme,
                    })

                    newTheme = theme

                    return [newThemeList, replacedTopic]
                },
                state,
            })

            if (newState.wasTopicSave) {
                newState.theme = newTheme
            }

            return newState
        }

        case ClearTopicAction: {
            return {
                ...state,
                topic: null,
                card: null,
            }
        }

        case RegisterCardAction: {
            let newTheme = null
            let newTopic = null

            const newState = registerEntity({
                entityProperty: 'card',
                wasSavedProperty: 'wasCardSaved',
                errorProperty: 'saveCardError',
                registerFn: () => {
                    const [newThemeList, theme, topic, card] = state.themeList.registerCard({
                        theme: state.theme,
                        topic: state.topic,
                        card: new Card(action.card),
                    })

                    newTheme = theme
                    newTopic = topic
                    return [newThemeList, card]
                },
                state,
            })

            if (newState.wasCardSaved) {
                newState.theme = newTheme
                newState.topic = newTopic
            }

            return newState
        }

        case EditCardAction: {
            let newTheme = null
            let newTopic = null

            const newState = registerEntity({
                entityProperty: 'card',
                wasSavedProperty: 'wasCardSaved',
                errorProperty: 'saveCardError',
                registerFn: () => {
                    const newCard = new Card({
                        ...state.card,
                        ...action.card,
                    })
                    const [newThemeList, theme, topic, card] = state.themeList.replaceCard({
                        theme: state.theme,
                        topic: state.topic,
                        card: newCard,
                    })

                    newTheme = theme
                    newTopic = topic
                    return [newThemeList, card]
                },
                state,
            })

            if (newState.wasCardSaved) {
                newState.theme = newTheme
                newState.topic = newTopic
            }

            return newState
        }

        case SetCard: {
            return {
                ...state,
                card: action.card,
            }
        }

        case ClearCard: {
            return {
                ...state,
                card: null,
            }
        }

        case SetProperty: {
            const newState = {...state}
            newState[action.propertyName] = action.propertyValue

            return {...newState}
        }

        case ToggleFlag: {
            const newState = {...state}
            newState[action.flagName] = !newState[action.flagName]
            return {...newState}
        }

        default:
            console.error(`${action.type} action not being handled`)
    }

    return state
}

export default function ThemesContextComponent({
    children,
}) {
    const [state, dispatch] = useReducer(themesReducer, initialData)
    useTurnOffFlag({
        flag: state.wasThemeSaved,
        flagName: 'wasThemeSaved',
        dispatch,
    })
    useTurnOffFlag({
        flag: state.wasTopicSaved,
        flagName: 'wasTopicSaved',
        dispatch,
    })
    useTurnOffFlag({
        flag: state.wasCardSaved,
        flagName: 'wasCardSaved',
        dispatch,
    })

    return <ThemesContext.Provider value={{...state, dispatch}}>
        {children}
    </ThemesContext.Provider>
}