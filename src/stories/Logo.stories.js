import Logo from './Logo.vue'

export default {
	title: 'Docsvision brand',
	component: Logo,
}

const Template = (args, { argTypes }) => ({
	components: { Logo },
	props: Object.keys(argTypes, args),
	template: '<Logo />',
})

export const Логотип = Template.bind({})
