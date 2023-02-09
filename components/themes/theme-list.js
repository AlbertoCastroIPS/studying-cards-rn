import { ListContainer } from '../lists'
import ThemeListItem from './theme-list-item'

export default function ThemeList({
    themes,
    onThemePressed,
}) {
    function renderTheme(props) {
        return <ThemeListItem
            {...props}
            onPress={onThemePressed}
        />
    }

    return <ListContainer
        items={themes}
        renderItem={renderTheme}
    />
}
