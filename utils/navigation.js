import { ClearThemeAction, SetProperty } from '../contexts/actions'

export function navigateTo({
    contextProperty,
    propertyValue,
    screenName,
    dispatch,
    navigation,
}) {
    dispatch({
        type: SetProperty,
        propertyName: contextProperty,
        propertyValue: propertyValue
    })

    navigation.push(screenName)
}

export function goHome({
    dispatch,
    navigation,
}) {
    dispatch({type: ClearThemeAction})

    navigation.navigate('home')
}