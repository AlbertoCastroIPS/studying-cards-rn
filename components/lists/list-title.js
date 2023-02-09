import { useContext } from 'react'
import {
    Text,
    StyleSheet
} from 'react-native'
import { ThemeContext } from '../../contexts'

export default function ListTitle({
    text,
}) {
    const {normalText} = useContext(ThemeContext)

    return <Text
        style={{
            ...styles.listTitle,
            color: normalText,
        }}>
        {text}
    </Text>
}

const styles = StyleSheet.create({
    listTitle: {
        fontSize: '2rem',
        fontFamily: 'Mermaid Swash Caps',
        fontWeight: 'bold',
    }
})