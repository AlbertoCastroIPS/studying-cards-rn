import { useContext } from 'react'
import { ThemesContext } from '../../contexts'
import { goHome, navigateTo } from '../../utils/navigation'
import { MainContainer } from '../layout'
import { TopicDialog, TopicList } from '../topics'
import { ThemeDialog } from '../themes'
import { ClearThemeAction } from '../../contexts/actions'
import { useSearch } from '../../hooks'

export default function Theme({
    navigation
}) {
    const {theme, dispatch} = useContext(ThemesContext)
    const [filteredTopics, onSearch] = useSearch({data: theme.topics})

    function onTopicPressed(topic) {
        navigateTo({
            contextProperty: 'topic',
            propertyValue: topic,
            screenName: 'topic',
            navigation,
            dispatch,
        })
    }

    function onSaveTopic(hideDialog) {
        hideDialog()
        navigation.push('topic')
    }

    function renderTopicDialog(hideDialog) {
        return <TopicDialog
            hideDialog={hideDialog}
            onSaveTopic={() => onSaveTopic(hideDialog)}
        />
    }

    function renderThemeDialog(hideDialog) {
        return <ThemeDialog
            hideDialog={hideDialog}
            onSaveTheme={hideDialog}
        />
    }

    function onBack() {
        dispatch({type: ClearThemeAction})
        navigation.goBack()
    }

    return <MainContainer
        title={theme.name}
        backVisible={true}
        onBack={onBack}
        addDialog={renderTopicDialog}
        editDialog={renderThemeDialog}
        onSearch={onSearch}
        onGoHome={() => goHome({dispatch, navigation})}
    >
        <TopicList
            topics={filteredTopics}
            onTopicPressed={onTopicPressed}
        />
    </MainContainer>
}