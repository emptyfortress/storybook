import EditSimple from './EditSimple'

export default {
	title: 'Edit in place/Simple',
	component: EditSimple,
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
	components: { EditSimple },
	template: '<edit-simple />',
})

export const Simple = Template.bind({})
