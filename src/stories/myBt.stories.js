import myBt from '../components/myBt.vue'

export default {
	title: 'myBtlaksj',
	component: myBt,
}

const Template = (args, { argTypes }) => ({
	components: { myBt },
	props: Object.keys(argTypes, args),
	template: '<myBt />',
})

export const Default = Template.bind({})
