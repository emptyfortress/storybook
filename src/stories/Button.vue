<template lang="pug">
div
	v-btn(v-bind="siz" :color="calcColor" :dark="dark" :depressed="depressed" :text="text" :icon="icon" :tile="tile" @click="onClick")
		v-icon(v-show="icon") mdi-heart
		span(v-show="!icon") {{ label }}

</template>

<script>
export default {
	name: 'Button',
	computed: {
		siz() {
			switch (this.size) {
			case 'x-small':
				return { 'x-small': true }
			case 'small':
				return { small: true }
			case 'medium':
				return { medium: true }
			case 'large':
				return { large: true }
			case 'x-large':
				return { 'x-large': true }
			default:
				return { medium: true }
			}
		},
		dark() {
			switch (this.color) {
			case 'none':
				return false
			case 'docolor':
				return true
			case 'taskcolor':
				return true
			case 'dark':
				return true
			default:
				return false
			}
		},
		calcColor() {
			switch (this.color) {
			case 'none':
				return ''
			case 'docolor':
				return 'docolor'
			case 'taskcolor':
				return 'taskcolor'
			case 'accent':
				return 'accent'
			case 'dark':
				return 'dark'
			case 'error':
				return 'error'
			case 'info':
				return 'info'
			case 'warning':
				return 'warning'
			default:
				return ''
			}
		},
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
		depressed: {
			type: Boolean,
			default: false,
		},
		tile: {
			type: Boolean,
			default: false,
		},
		text: {
			type: Boolean,
			default: false,
		},
		icon: {
			type: Boolean,
			default: false,
		}
		// backgroundColor: {
		// 	type: String,
		// },
	},
	methods: {
		onClick() {
			this.$emit('onClick')
		},
	},
}
</script>
