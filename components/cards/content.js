import {
    StyleSheet,
    View,
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
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    }
})