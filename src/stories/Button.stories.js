// import the helper!
import { storyFactory } from '~storybook/util/helpers'

import Button from './Button.vue'

// set the default properties
export default storyFactory({
	title: 'Components/Button',
	component: Button,
	description: 'This can be **markdown**!',
	args: { // these will become controls
		label: 'Button',
		prop2: 42,
	},
})

// create a base template to share
const Template = (args, { argTypes }) => ({
	components: { Button },
	props: Object.keys(argTypes),
	template: '<Button :label="label" :prop2="prop2" />',
})

// now the stories, you need at least one
export const Default = Template.bind({})

// export default {
// 	title: 'Components/Button',
// 	component: Button,
// 	argTypes: {
// 		backgroundColor: { control: 'color' },
// 		size: {
// 			control: { type: 'select', options: ['small', 'medium', 'large'] },
// 		},
// 	},
// }

// const Template = (args, { argTypes }) => ({
// 	props: Object.keys(argTypes),
// 	components: { Button },
// 	template: '<Button @onClick="onClick" v-bind="$props" />',
// })

// export const Primary = Template.bind({})
// Primary.args = {
// 	primary: true,
// 	label: 'Button',
// }

// export const Secondary = Template.bind({})
// Secondary.args = {
// 	label: 'Button',
// }

// export const Large = Template.bind({})
// Large.args = {
// 	size: 'large',
// 	label: 'Button',
// }

// export const Small = Template.bind({})
// Small.args = {
// 	size: 'small',
// 	label: 'Button',
// }
