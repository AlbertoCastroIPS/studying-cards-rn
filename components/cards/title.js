import { useContext } from 'react'
import {
    StyleSheet,
    Text,
} from 'react-native'
import { ThemeContext } from '../../contexts'

export default function Title({
    text,
    centeredText = false,
}) {
    const {normalText} = useContext(ThemeContext)
    const justifyContent = centeredText ? 'center' : 'flex-start'

    return <Text
        style={{
            ...styles.title,
            color: normalText,
            justifyContent,
        }}
    >
        {text}
    </Text>
}

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: '1.1rem',
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
    }
})