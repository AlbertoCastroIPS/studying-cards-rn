import { useContext } from 'react'
import {
    TouchableHighlight,
    Text,
    StyleSheet,
} from 'react-native'
import { ThemeContext } from '../../contexts'

export default function MainButton({
    label,
    onPress,
    style = {},
}) {
    const {mainButtonBackground, mainButtonBorder, mainButtonLabel} = useContext(ThemeContext)

    return <TouchableHighlight
        onPress={onPress}
        style={{
            ...styles.button,
            backgroundColor: mainButtonBackground,
            borderColor: mainButtonBorder,
            ...style,
        }}>
        <Text style={{
            ...styles.label,
            color: mainButtonLabel,
        }}>
            {label}
        </Text>
    </TouchableHighlight>
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        borderWidth: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: '0.6rem',
    },
    label: {
        fontSize: '1.1rem',
        fontWeight: 'bold',
    },
})