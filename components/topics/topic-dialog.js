import { useContext } from 'react'
import { ThemesContext } from '../../contexts'
import { EditTopicAction, RegisterTopicAction } from '../../contexts/actions'
import { useForm } from '../../hooks'
import { EntityDialog } from '../dialogs'
import { Input } from '../forms'

export default function TopicDialog({
	hideDialog,
	onSaveTopic,
}) {
	const {topic, saveTopicError, wasTopicSaved, dispatch} = useContext(ThemesContext)
	const isEditingTopic = topic != null && topic != undefined
	const [formData, setFormField, areFormFieldsValid, formErrors] = useForm(getDefaultFormData())

	function getDefaultFormData() {
		if (isEditingTopic) {
			return {
				name: topic.name,
			}
		}

		return {
			name: '',
		}
	}


	return <EntityDialog
		hideDialog={hideDialog}
		entityName='topic'
		registerActionType={RegisterTopicAction}
		editActionType={EditTopicAction}
		dispatch={dispatch}
		wasEntitySaved={wasTopicSaved}
		saveEntityError={saveTopicError}
		formData={formData}
		areFormFieldsValid={areFormFieldsValid}
		onSave={onSaveTopic}
		isEditing={isEditingTopic}
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