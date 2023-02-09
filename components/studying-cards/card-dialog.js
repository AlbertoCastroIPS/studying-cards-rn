import { useContext } from 'react'
import { ThemesContext } from '../../contexts'
import { EditCardAction, RegisterCardAction } from '../../contexts/actions'
import { useForm } from '../../hooks'
import { EntityDialog } from '../dialogs'
import { Input } from '../forms'

export default function CardDialog ({
	hideDialog,
	onSaveCard,
}) {
	const {saveCardError, wasCardSaved, card, dispatch} = useContext(ThemesContext)
	const isEditingCard = card != null && card != undefined
	const [formData, setFormField, areFormFieldsValid, formErrors] = useForm(getDefaultFormData())

	function getDefaultFormData() {
		if (isEditingCard) {
			return {
				name: card.name,
				text: card.text,
			}
		}

		return {
			name: '',
			text: '',
		}
	}

	return <EntityDialog
		hideDialog={hideDialog}
		entityName='card'
		registerActionType={RegisterCardAction}
		editActionType={EditCardAction}
		dispatch={dispatch}
		wasEntitySaved={wasCardSaved}
		saveEntityError={saveCardError}
		formData={formData}
		areFormFieldsValid={areFormFieldsValid}
		onSave={onSaveCard}
		isEditing={isEditingCard}
	>
		<Input
			name='name'
			label='Name'
			value={formData.name}
			onValueChange={setFormField}
			autoFocus={true}
			errors={formErrors}
		/>
		<Input
			name='text'
			label='Text'
			value={formData.text}
			onValueChange={setFormField}
			multiline={true}
			errors={formErrors}
		/>
	</EntityDialog>
}