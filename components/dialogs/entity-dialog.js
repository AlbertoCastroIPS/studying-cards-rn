import { useActionReporter } from '../../hooks'
import { Form } from '../forms'
import Dialog from './dialog'

export default function EntityDialog({
	hideDialog,
	entityName,
	registerActionType,
	editActionType,
	dispatch,
	wasEntitySaved,
	saveEntityError,
	formData,
	areFormFieldsValid = ()=>{},
	onSave,
	children,
	isEditing = false,
}) {
	function handleSubmit() {
		if (areFormFieldsValid()) {
			saveEntity()
		}
	}


	function saveEntity() {
		const action = {type: isEditing ? editActionType : registerActionType}
		action[entityName] = {
			...formData,
		}

		dispatch(action)
	}

	useActionReporter({
		trigger: wasEntitySaved,
		callback: onSave,
	})

	const title = `${isEditing ? 'Edit' : 'New'} ${entityName}`

	return <Dialog
		title={title}
		onClose={hideDialog}
	>
		<Form
			error={saveEntityError}
			onSubmit={handleSubmit}
		>
			{children}
		</Form>
	</Dialog>
}