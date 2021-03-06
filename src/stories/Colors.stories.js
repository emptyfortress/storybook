import Colors from './Colors.vue'

export default {
	title: 'Brand/Цвета',
	component: Colors,
}
const Template = (args, { argTypes }) => ({
	components: { Colors },
	props: Object.keys(argTypes, args),
	template: '<Colors />',
})

export const Цвета = Template.bind({})
