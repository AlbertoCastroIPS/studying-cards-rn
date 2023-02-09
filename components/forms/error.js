import { useContext } from 'react'
import {
    StyleSheet,
    Text,
} from 'react-native'
import { ExclamationTriangle } from 'react-native-unicons'
import { ThemeContext } from '../../contexts'

export default function Error({
    text,
    style = {}
}) {
    const {errorText} = useContext(ThemeContext)

    return <Text
        style={{
            ...styles.error,
            color: errorText,
            ...style,
        }}
    >
        <ExclamationTriangle style={styles.icon} />
        {text}
    </Text>
}

const styles = StyleSheet.create({
    error: {
        marginVertical: '1rem',
        fontSize: '1.1rem',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginRight: 5,
    }
})