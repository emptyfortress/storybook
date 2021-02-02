import Button from './Button.vue'

export default {
	title: 'Components/Button',
	component: Button,
	description:
		'Компонент для кнопки. Может быть текстовой, с иконкой, плавающей и тп.',
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
					accent: 'accent',
					secondary: 'secondary',
					error: 'error',
					info: 'info',
					warning: 'warning',
				},
			},
		},

		backgroundColor: { control: 'color' },
	},
}

// create a base template to share
const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { Button },
	template: '<Button :label="label" v-bind="$props" @onClick="onClick"/>',
})

// now the stories, you need at least one
export const Default = Template.bind({ label: 'Normal' })
Default.args = {
	color: 'none',
	label: 'Normal',
}
