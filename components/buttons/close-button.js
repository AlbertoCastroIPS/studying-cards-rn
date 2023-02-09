import { useContext } from 'react'
import { Times } from 'react-native-unicons'
import { ThemeContext } from '../../contexts'
import IconButton from './icon-button'

export default function CloseButton({
    onPress
}) {
    const {normalText} = useContext(ThemeContext)

    return <IconButton
        onPress={onPress}>
        <Times
            color={normalText}
        />
    </IconButton>
}