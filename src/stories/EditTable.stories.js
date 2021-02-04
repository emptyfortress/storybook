import EditTable from './EditTable'

export default {
	title: 'Edit in place/Table',
	component: EditTable,
	args: {
		dark: false,
	},
	argTypes: {
		locale: {
			defaultValue: 'en',
			control: {
				type: 'inline-radio',
				options: { English: 'en', Русский: 'ru' },
			},
		},
	},
}

const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { EditTable },
	template: '<edit-table :icon="icon" />',
})

export const Table = Template.bind({})
Table.args = {
	icon: false,
}
