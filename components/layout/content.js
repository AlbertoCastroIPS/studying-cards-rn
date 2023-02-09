import {
    View,
    StyleSheet
} from 'react-native'

export default function Content({
    children,
}) {
    return <View style={styles.content}>
        {children}
    </View>
}

const styles = StyleSheet.create({
    content: {
        flex: 28,
    }, 
})