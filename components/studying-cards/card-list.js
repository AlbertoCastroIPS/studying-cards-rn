import { ListContainer } from '../lists'
import Card from './card'

export default function CardList({
    cards,
    onCardPressed,
}) {
    function renderCard(props) {
        return <Card
            {...props}
            onPress={onCardPressed}
        />
    }

    return <ListContainer
        items={cards}
        renderItem={renderCard}
    />
}