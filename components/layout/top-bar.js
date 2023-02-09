import { useContext } from 'react'
import {
    View,
    StyleSheet
} from 'react-native'
import {
    AngleLeftB,
    Bars,
    Pen,
    Plus,
    Search
} from 'react-native-unicons'
import { useVisible } from '../../hooks'

import { IconButton } from '../buttons'
import { Visible } from '../utils'
import { LeftMenu } from '../left-menu'
import SearchInput from './search-input'
import { ThemeContext } from '../../contexts'

export default function TopBar({
    onAdd,
    onBack,
    onEdit,
    onSearch,
    backVisible = false,
    editVisible = true,
    onGoHome,
}) {
    const {normalText} = useContext(ThemeContext)
    const [isSearchInputVisible, showSearchInput, hideSearchInput] = useVisible(false)
    const [isLeftMenuVisible, showLeftMenu, hideLeftMenu] = useVisible(false)
    const iconStyle = {color: normalText}

    return <View style={styles.topBar}>
        <View style={styles.topBarIcons}>
            <View style={styles.topBarIconsSection}>
                <IconButton onPress={showLeftMenu}>
                    <Bars style={iconStyle} />
                </IconButton>
                <Visible visible={backVisible}>
                    <IconButton
                        onPress={onBack}
                        style={styles.iconWithMarginLeft}
                    >
                        <AngleLeftB
                            style={iconStyle}
                        />
                    </IconButton>
                </Visible>
            </View>
            <View style={styles.topBarIconsSection}>
                <IconButton
                    onPress={showSearchInput}
                >
                    <Search style={iconStyle}/>
                </IconButton>
                <Visible visible={editVisible}>
                    <IconButton
                        onPress={onEdit}
                        style={styles.iconWithMarginLeft}
                    >
                        <Pen style={iconStyle} />
                    </IconButton>
                </Visible>
                <IconButton
                    onPress={onAdd}
                    style={styles.iconWithMarginLeft}
                >
                    <Plus style={iconStyle} />
                </IconButton>
            </View>
        </View>
        <SearchInput
            visible={isSearchInputVisible}
            onHide={hideSearchInput}
            onSearch={onSearch}
        />
        <LeftMenu
            visible={isLeftMenuVisible}
            onGoHome={onGoHome}
            onClose={hideLeftMenu}
        />
    </View>
}

const styles = StyleSheet.create({
    topBar: {
        marginBottom: '1rem'
    },
    topBarIcons: {
        flex: 1,
        display: 'flex',
        flexFlow: 'row',
        justifyContent: 'space-between',
        marginVertical: '1rem',
    },
    topBarIconsSection: {
        display: 'flex',
        flexFlow: 'row',
    },
    iconWithMarginLeft: {
        marginLeft: '1.5rem'
    }
})