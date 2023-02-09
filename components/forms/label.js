import { useContext } from 'react'
import {
    StyleSheet,
    Text,
} from 'react-native'
import { ThemeContext } from '../../contexts'

export default function Label({
    text,
}) {
    const {normalText} = useContext(ThemeContext)

    return <Text style={{
        ...styles.label,
        color: normalText,
    }}>
        {text}
    </Text>
}

const styles = StyleSheet.create({
    label: {
        marginBottom: 10,
        fontWeight: 'bold',
    },
})