<template lang="pug">
div
	v-btn(v-bind="siz" :color="calcColor" :dark="dark") {{ label }}

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
		dark () {
			switch (this.color) {
			case 'none': return false
			case 'docolor': return true
			case 'taskcolor': return true
			default: return false
			}
		},
		calcColor () {
			switch (this.color) {
			case 'none': return ''
			case 'docolor': return 'docolor'
			case 'taskcolor': return 'taskcolor'
			case 'accent': return 'accent'
			case 'secondary': return 'secondary'
			case 'error': return 'error'
			case 'info': return 'info'
			case 'warning': return 'warning'
			default: return ''
			}
		}
	},
	props: {
		label: {
			type: String,
			required: true,
		},
		color: {
			type: String,
			default: '',
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

<style scoped lang="scss">
.test {
	color: #ee44aa;

}

</style>
