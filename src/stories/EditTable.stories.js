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
		fixedwidth: {
			control: 'boolean',
		},
	},
}

const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { EditTable },
	template: '<edit-table :fixedwidth="fixedwidth" :width="width" :icon="icon" >',
})

export const Table = Template.bind({})
Table.args = {
	width: '400px',
	icon: false
}
