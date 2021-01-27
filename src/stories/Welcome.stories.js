import Welcome from './Welcome.vue'

export default {
	title: 'Docsvision kit',
	component: Welcome,
}

const Template = (args, { argTypes }) => ({
	components: { Welcome },
	props: Object.keys(argTypes, args),
	template: '<Welcome />',
})

export const Введение = Template.bind({})
