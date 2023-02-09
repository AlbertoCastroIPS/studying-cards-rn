import {
    StyleSheet,
    View,
} from 'react-native'
import { isStringEmpty } from '../../utils/string'
import { MainButton } from '../buttons'
import { Visible } from '../utils'
import Error from './error'

export default function Form({
    children,
    onSubmit,
    error,
}) {
    const isErrorVisible = !isStringEmpty(error)

    return <View style={styles.form}>
        {children}
        <MainButton
            onPress={onSubmit}
            label='Save'
        />
        <Visible visible={isErrorVisible}>
            <Error text={error} />
        </Visible>
    </View>
}

const styles = StyleSheet.create({
    form: {
        paddingTop: '1rem',
    },
})