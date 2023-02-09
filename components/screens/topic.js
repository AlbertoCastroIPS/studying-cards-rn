import { useContext } from 'react'
import { ThemesContext } from '../../contexts'
import { ClearCard, ClearTopicAction, SetCard } from '../../contexts/actions'
import { useSearch, useVisible } from '../../hooks'
import { goHome } from '../../utils/navigation'
import { MainContainer } from '../layout'
import { CardDialog, CardList, ViewCardDialog } from '../studying-cards'
import { TopicDialog } from '../topics'

export default function Topic({
    navigation
}) {
    const {topic, card, dispatch} = useContext(ThemesContext)
    const [cardDialogVisible, showCardDialog, hideCardDialog] = useVisible(false)
    const [filteredCards, onSearch] = useSearch({
        data: topic.cards,
        searchProperties: ['name', 'text'],
    })

    function onBack() {
        dispatch({type: ClearTopicAction})
        navigation.goBack()
    }

    function renderCardDialog(hideDialog) {
        function actualHideDialog() {
            hideCardDialog()
            hideDialog()
        }

        return <CardDialog
            hideDialog={actualHideDialog}
            onSaveCard={actualHideDialog}
        />
    }

    function renderEditDialog(hideDialog) {
        return <TopicDialog
            hideDialog={hideDialog}
            onSaveTopic={hideDialog}
        />
    }

    function onCardPressed(card) {
        dispatch({
            type: SetCard,
            card,
        })
    }

    function onViewCardDialogClose() {
        dispatch({type: ClearCard})
    }

    return <MainContainer
        title={topic.name}
        backVisible={true}
        onBack={onBack}
        addDialog={renderCardDialog}
        addDialogVisible={cardDialogVisible}
        editDialog={renderEditDialog}
        onSearch={onSearch}
        onGoHome={() => goHome({dispatch, navigation})}
    >
        <CardList
            cards={filteredCards}
            onCardPressed={onCardPressed}
        />
        <ViewCardDialog
            card={card}
            onClose={onViewCardDialogClose}
            onEdit={showCardDialog}
        />
    </MainContainer>
}