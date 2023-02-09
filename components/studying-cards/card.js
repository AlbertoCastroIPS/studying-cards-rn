import {
    Card as CardCore
} from '../cards'

export default function Card({
    item,
    onPress
}) {
    const {name, id} = item

    function handlePress() {
        onPress(item)
    }

    return <CardCore
        key={id}
        title={name}
        centeredText={true}
        onPress={handlePress}
    />
}