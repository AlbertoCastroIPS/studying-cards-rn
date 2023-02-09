import { File, ListUiAlt } from 'react-native-unicons'
import { Card, CardSubInfo } from '../cards'

export default function ThemeListItem({
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
            icon={ListUiAlt}
            text={item.getTopicsCount()}
        />
        <CardSubInfo
            icon={File}
            text={item.getCardsCount()}
        />
    </Card>
}