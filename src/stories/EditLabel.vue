<template lang="pug">
.flex
	.label {{ $t('label')}}:
	.line(:style="calcClass")
		v-icon(v-if="icon" color="link").heart mdi-heart
		v-icon(v-if="icon" color="link").heart1 mdi-book-open-page-variant-outline
		.book(v-if="!icon")
			v-icon mdi-book-open-page-variant-outline
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
.flex {
	display: inline-flex;
}
.line {
	display: inline-flex;
	padding: 0 1.6rem 0 0;
	margin: 0 0 0 13px;
	position: relative;
	&.fixed {
		width: 400px;
	}
	.book {
		display: none;
		background: $link;
		padding: 0 6px;
		border-radius: 10px 0 0 10px;
		position: absolute;
		top: 0;
		left: -30px;
		i {
			font-size: 1.3rem;
			color: #fff;
		}
	}
	.heart1 {
		display: none;
		top: -2px;
	}
	&:focus-within {
		border-bottom: 1px dotted $link;
		margin-right: 10px;
		.clear, .book, .heart1 {
			display: block;
		}
		.heart {
			display: none;
		}
	}
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
