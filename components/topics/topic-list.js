import { ListContainer } from '../lists'
import TopicListItem from './topic-list-item'

export default function TopicList({
    topics,
    onTopicPressed,
}) {
    function renderTopic(props) {
        return <TopicListItem
            {...props}
            onPress={onTopicPressed}
        />
    }

    return <ListContainer
        items={topics}
        renderItem={renderTopic}
    />
}