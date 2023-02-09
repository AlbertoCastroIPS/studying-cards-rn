import { useContext } from 'react'
import {
    StyleSheet,
    TouchableHighlight,
    View,
} from 'react-native'
import { ThemeContext } from '../../contexts'
import { Visible } from '../utils'
import Content from './content'
import Title from './title'

export default function Card({
    title,
    children,
    onPress,
    centeredText = false,
}) {
    const {cardBackground} = useContext(ThemeContext)
    const contentVisible = children != undefined && children.length != 0

    return <TouchableHighlight
        onPress={onPress}
    >
        <View style={{
            ...styles.card,
            backgroundColor: cardBackground,
        }}>
            <Title
                text={title}
                centeredText={centeredText}
            />
            <Visible visible={contentVisible}>
                <Content>
                    {children}
                </Content>
            </Visible>
        </View>
    </TouchableHighlight>
}

const styles = StyleSheet.create({
    card: {
        padding: '1rem',
        marginBottom: '1rem',
        borderRadius: 10,
    },
})