<template lang="pug">
table.line(:style="calcClass")
	tr
		td.rel
			v-icon(v-if="icon" color="link") mdi-heart
			.content(tabindex="0" contenteditable id="div" ref="div") {{ $t('clicktoedit') }}
			v-icon(small @click="clear").clear mdi-close-circle
</template>

<script>

export default {
	props: {
		fixedwidth: {
			type: Boolean,
			default: false
		},
		width: {
			type: String,
			default: '300px'
		},
		icon: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		calcClass () {
			if (this.fixedwidth) {
				return `width: ${this.width};`
			} else return ''
		}
	},
	methods: {
		clear () {
			this.$refs.div.textContent = ''
			this.$refs.div.focus()
		}
	}
}
</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';
td {
	border: 1px solid black;
}
.line {
	td {
		padding: 5px;
	}
	/* width: 50%; */
	&.fixed {
		width: 400px;
	}
	&:focus-within {
		border-bottom: 1px dotted $link;
		margin-right: 10px;
		.clear {
			display: block;
		}
	}
}
.rel {
	position: relative;
}
.content {
	color: $link;
	min-width: 50px;
	margin-left: 5px;
	&:focus {
		outline: none;
		color: #000;
	}
}
.clear {
	display: none;
	position: absolute;
	right: 0;
	top: 50%;
	transform: translateY(-50%);
	cursor: pointer;
	color: #aaa;
	&:hover {
		color: #333;
	}
}
.theme--dark .content:focus {
	color: #ccc;
}
</style>
