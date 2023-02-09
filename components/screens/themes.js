import { useContext } from 'react'
import { ThemesContext } from '../../contexts'
import { SetTheme } from '../../contexts/actions'
import { useSearch } from '../../hooks'
import { goHome, navigateTo } from '../../utils/navigation'
import { MainContainer } from '../layout'
import {
    ThemeList,
    ThemeDialog,
} from '../themes'

export default function Themes({
    navigation
}) {
    const {themeList, dispatch} = useContext(ThemesContext)
    const [filteredThemes, onSearch] = useSearch({data: themeList.themes})

    function onSaveTheme(hideDialog) {
        hideDialog()
        navigation.push('theme')
    }

    function onThemePressed(theme) {
        navigateTo({
            contextProperty: 'theme',
            propertyValue: theme,
            screenName: 'theme',
            dispatch,
            navigation,
        })
    }

    function renderThemeDialog(hideDialog) {
        return <ThemeDialog
            hideDialog={hideDialog}
            onSaveTheme={() => onSaveTheme(hideDialog)}
        />
    }

    return <MainContainer
        title='Themes'
        addDialog={renderThemeDialog}
        editVisible={false}
        onSearch={onSearch}
        onGoHome={() => goHome({dispatch, navigation})}
    >
        <ThemeList
            themes={filteredThemes}
            onThemePressed={onThemePressed}
        />
    </MainContainer>
}