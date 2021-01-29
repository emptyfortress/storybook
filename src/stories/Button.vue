<template lang="pug">
div
	v-btn(v-bind="siz") {{ label }}

</template>

<script>

export default {
	name: 'Button',
	computed: {
		siz() {
			switch (this.size) {
			case 'x-small': return { 'x-small': true }
			case 'small': return { 'small': true }
			case 'medium': return { 'medium': true }
			case 'large': return { 'large': true }
			case 'x-large': return { 'x-large': true }
			}
		}
	},
	mounted() {
		console.log(this.size)
	},
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
			// // validator: function(value) {
			// 	return ['x-small', 'small', 'medium', 'large'].indexOf(value) !== -1
			// },
		},
		backgroundColor: {
			type: String,
		},
	},
	methods: {
		onClick() {
			this.$emit('onClick')
		},
	},
}
</script>
