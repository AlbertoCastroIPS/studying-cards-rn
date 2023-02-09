import { useContext } from 'react'
import {
    ThemesContext,
    RegisterThemeAction,
} from '../../contexts'
import { EditThemeAction } from '../../contexts/actions'
import { useForm } from '../../hooks'
import { EntityDialog } from '../dialogs'
import {
    Input,
} from '../forms'

export default function ThemeDialog({
    hideDialog,
    onSaveTheme,
}) {
    const {saveThemeError, wasThemeSaved, dispatch, theme} = useContext(ThemesContext)
    const isEditingTheme = theme != null && theme != undefined
    const [formData, setFormField, areFormFieldsValid, formErrors] = useForm(getDefaultFormData())

    function getDefaultFormData() {
        if (isEditingTheme) {
            return {
                name: theme.name,
            }
        }

        return {
            name: '',
        }
    }

    return <EntityDialog
        hideDialog={hideDialog}
        entityName='theme'
        registerActionType={RegisterThemeAction}
        editActionType={EditThemeAction}
        dispatch={dispatch}
        wasEntitySaved={wasThemeSaved}
        saveEntityError={saveThemeError}
        formData={formData}
        areFormFieldsValid={areFormFieldsValid}
        onSave={onSaveTheme}
        isEditing={isEditingTheme}
    >
            <Input
                name='name'
                label='Name'
                value={formData.name}
                onValueChange={setFormField}
                autoFocus={true}
                errors={formErrors}
            />
    </EntityDialog>
}