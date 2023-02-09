import {
    StyleSheet,
    View,
} from 'react-native'
import { Visible } from '../utils'
import Label from './label'

export default function InputContainer({
    label,
    children,
}) {
    const isLabelVisible = label != '' && label != null && label != undefined

    return <View style={styles.container}>
        <Visible visible={isLabelVisible}>
            <Label text={label} />
        </Visible>
        {children}
    </View>
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 2,
    },
})