import {
    View,
    StyleSheet,
} from 'react-native'

import TopBar from './top-bar'
import Title from './title'
import Content from './content'
import { Visible } from '../utils'
import { useVisible } from '../../hooks'
import { useContext } from 'react'
import { ThemeContext } from '../../contexts'

export default function MainContainer({
    children,
    title,
    addDialog = ()=>{},
    addDialogVisible = false,
    backVisible = false,
    onBack = ()=>{},
    editVisible = true,
    editDialog = ()=>{},
    onSearch = ()=>{},
    onGoHome,
}) {
    const {mainBackground} = useContext(ThemeContext)
    const [isAddDialogVisible, showAddDialog, hideAddDialog] = useVisible(false)
    const [isEditDialogVisible, showEditDialog, hideEditDialog] = useVisible(false)

    return <View style={{
        ...styles.mainContainer,
        backgroundColor: mainBackground,
    }}>
        <TopBar
            onAdd={showAddDialog}
            backVisible={backVisible}
            onBack={onBack}
            editVisible={editVisible}
            onEdit={showEditDialog}
            onSearch={onSearch}
            onGoHome={onGoHome}
        />
        <Title title={title} />
        <Content>
            {children}
        </Content>
        <Visible visible={isAddDialogVisible || addDialogVisible}>
            {addDialog(hideAddDialog)}
        </Visible>
        <Visible visible={isEditDialogVisible}>
            {editDialog(hideEditDialog)}
        </Visible>
    </View>
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: '1rem',
    },
})