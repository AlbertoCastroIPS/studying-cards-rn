import {
    View,
    StyleSheet,
    SafeAreaView,
    FlatList,
} from 'react-native'
import { Conditional } from '../utils'
import EmptyList from './empty-list'

export default function ListContainer({
    items = [],
    renderItem = () => {return <View></View>},
    horizontal = false,
}) {
    const noItems = items.length == 0

    return <SafeAreaView style={styles.listContainer}>
        <Conditional
            condition={noItems}
            trueComponent={<EmptyList />}
            falseComponent={
                <FlatList
                    data={items}
                    renderItem={renderItem}
                    horizontal={horizontal}
                    style={{
                        width: '100%',
                    }}
                />
            }
        />
    </SafeAreaView>
}

const styles = StyleSheet.create({
    listContainer: {
        display: 'flex',
        flex: 29,
        marginTop: '1.5rem',
    }
})