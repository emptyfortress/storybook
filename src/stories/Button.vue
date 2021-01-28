<template lang="pug">
v-btn(color="primary") {{label}}

</template>

<script>
// import '/Users/admin/Develop/storybook/node_modules/vuetify/src/components/VBtn/VBtn.sass'

// import './button.css'

export default {
	name: 'Button',
	props: {
		label: {
			type: String,
			required: true,
		},
		primary: {
			type: Boolean,
			default: false,
		},
		size: {
			type: String,
			default: 'medium',
			validator: function(value) {
				return ['small', 'medium', 'large'].indexOf(value) !== -1
			},
		},
		backgroundColor: {
			type: String,
		},
	},

	computed: {
		// classes() {
		// 	return {
		// 		'storybook-button': true,
		// 		'storybook-button--primary': this.primary,
		// 		'storybook-button--secondary': !this.primary,
		// 		[`storybook-button--${this.size}`]: true,
		// 	}
		// },
		// style() {
		// 	return {
		// 		backgroundColor: this.backgroundColor,
		// 	}
		// },
	},

	methods: {
		onClick() {
			this.$emit('onClick')
		},
	},
}
</script>
