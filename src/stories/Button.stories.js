import Button from './Button.vue'

export default {
	title: 'Components/Button',
	component: Button,
	description: 'Компонент для кнопки. Может быть текстовой, с иконкой, плавающей и тп.',
	args: {
		dark: false,
	},
	argTypes: {
		locale: {
			defaultValue: 'en',
			control: {
				type: 'inline-radio',
				options: { English: 'en', 'Русский': 'ru' },
			},
		},
		backgroundColor: { control: 'color' },
		size: {
			control: { 
				type: 'inline-radio', 
				options: {xsmall: 'x-small', small: 'small', medium: 'medium', large: 'large' } 
			},
		},
		// size: {
		// 	control: { 
		// 		type: 'select', 
		// 		options: ['small', 'medium', 'large'] },
		// },
	},
}

// create a base template to share
const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { Button },
	template: '<Button :label="label" v-bind="$props" @onClick="onClick"/>',
})

// now the stories, you need at least one
export const Default = Template.bind({label: 'Normal'})
Default.args = {
	primary: true,
	label: 'Normal',
}
