import { File } from 'react-native-unicons'
import { Card, CardSubInfo } from '../cards'

export default function TopicListItem({
    item,
    onPress,
}) {
    const {name, id} = item

    function handlePress() {
        onPress(item)
    }

    return <Card
        key={id}
        title={name}
        onPress={handlePress}
    >
        <CardSubInfo
            icon={File}
            text={item.getCardsCount()}
        />
    </Card>
}