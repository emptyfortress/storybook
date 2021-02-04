import EditLabel from './EditLabel'

export default {
	title: 'Edit in place/Label',
	component: EditLabel,
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
	components: { EditLabel },
	template: '<edit-label :fixedwidth="fixedwidth" :width="width" :icon="icon" />',
})

export const Label = Template.bind({})
Label.args = {
	width: '400px',
	icon: false
}
