<template lang="pug">
v-btn(color="primary") {{ label }}

</template>


<script>

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
	methods: {
		onClick() {
			this.$emit('onClick')
		},
	},
}
</script>
