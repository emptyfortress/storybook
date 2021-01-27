import myBt from '../components/myBt.vue'

export default {
	title: 'Components/myBt',
	component: myBt,
}

const Template = (args, { argTypes }) => ({
	components: { myBt },
	props: Object.keys(argTypes, args),
	template: '<myBt />',
})

export const Default = Template.bind({})
