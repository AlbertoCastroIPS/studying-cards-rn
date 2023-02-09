import { useContext } from 'react'
import {
    StyleSheet,
    View,
    Text,
} from 'react-native'
import { ThemeContext } from '../../contexts'

export default function CardSubInfo({
    icon,
    text,
}) {
    const {normalText} = useContext(ThemeContext)

    return <View style={{
        ...styles.container,
        color: normalText,
    }}>
        {icon({width: 18, height: 18})}
        <Text style={{
            ...styles.text,
            color: normalText,
        }}>
            {text}
        </Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 20,
    },
    text: {
        marginLeft: 5,
    },
})