import MyButton from './MyButton.vue'

export default {
	title: 'Components/Button',
	component: MyButton,
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
		size: {
			control: {
				type: 'inline-radio',
				options: {
					xsmall: 'x-small',
					small: 'small',
					medium: 'medium',
					large: 'large',
					xlarge: 'x-large',
				},
			},
		},
		color: {
			control: {
				type: 'inline-radio',
				options: {
					none: 'none',
					doc: 'docolor',
					task: 'taskcolor',
					dark: 'dark',
					accent: 'accent',
					error: 'error',
					info: 'info',
					warning: 'warning',
				},
			},
		},
		depressed: {
			control: 'boolean',
		},
		// backgroundColor: { control: 'color' },
	},
}

// create a base template to share
const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { MyButton },
	template: '<my-button :label="label" v-bind="$props" @onClick="onClick"/>',
})

// now the stories, you need at least one
export const Default = Template.bind({})
Default.args = {
	color: 'none',
	label: 'Button',
	text: false,
	icon: false,
}
export const Text = Template.bind({})
Text.args = {
	color: 'none',
	label: 'Button',
	text: true,
	icon: false,
}
export const Icon = Template.bind({})
Icon.args = {
	color: 'info',
	label: '',
	text: true,
	icon: true,
}
