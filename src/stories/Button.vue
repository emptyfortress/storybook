<template lang="pug">
div
	v-btn(v-bind="siz" :color="calcColor") {{ label }}

</template>

<script>

export default {
	name: 'Button',
	computed: {
		siz () {
			switch (this.size) {
			case 'x-small': return { 'x-small': true }
			case 'small': return { 'small': true }
			case 'medium': return { 'medium': true }
			case 'large': return { 'large': true }
			case 'x-large': return { 'x-large': true }
			default: return {'medium': true}
			}
		},
		calcColor () {
			switch (this.primary) {
			case true: return 'primary'
			default: return ''
			}
		}
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

