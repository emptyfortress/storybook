<template lang="pug">
div
	v-btn(:class="calcClass") {{ label }}

</template>

<script>

export default {
	name: 'Button',
	computed: {
		calcClass() {
			return 'v-size--' + this.size
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
			default: 'small',
			validator: function(value) {
				return ['x-small', 'small', 'medium', 'large'].indexOf(value) !== -1
			},
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
