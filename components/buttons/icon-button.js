import { TouchableHighlight } from 'react-native'

export default function IconButton({
    children,
    style,
    onPress,
}) {
    return <TouchableHighlight 
        onPress={onPress}
        style={style}>
        {children}
    </TouchableHighlight>
}