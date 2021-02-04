<template lang="pug">
.flex
	.label(v-if="label") {{ $t('label')}}:
	.line(:style="calcClass")
		v-icon(v-if="icon" color="link").heart mdi-heart
		v-icon(v-if="icon" color="link" @click="dialog = true").heart1 mdi-book-open-page-variant-outline
		.book(v-if="!icon")
			v-icon(@click="dialog = true").open mdi-book-open-page-variant-outline
		.content(tabindex="0" contenteditable id="div" ref="div") {{ $t('clicktoedit') }}
		v-icon(small @click="clear").clear mdi-close-circle
		.wind
			.item(v-for="n in 3")
				v-avatar(color="#ccc" size="24")
					img(src="@/assets/img/user0.svg")
				.name Фамилия Имя Отчество
	v-dialog(v-model="dialog" width="500")
		v-card
			v-card-title(class="headline grey lighten-2") Это справочник
			v-card-text.mt-3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
			v-divider
			v-card-actions
				v-spacer
				v-btn(color="link" text @click="dialog = false") Закрыть

</template>

<script>

export default {
	data () {
		return {
			dialog: false
		}
	},
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
		},
		label: {
			type: Boolean,
			default: true
		},
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
		.open {
			color: #fff;
			font-size: 1.3rem;
		}
	}
	.heart1 {
		display: none;
		top: -2px;
	}
	&:focus-within {
		border-bottom: 1px dotted $link;
		margin-right: 10px;
		.clear, .book, .heart1, .wind {
			display: block;
			cursor: pointer;
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
.wind {
	display: none;
	position: absolute;
	background: #fff;
	top: 28px;
	left: 0;
	z-index: 10;
	border: 1px solid #ccc;
	box-shadow: 0 1px 3px rgba(0,0,0, .2);
	.item {
		display: flex;
		align-items: center;
		cursor: pointer;
		padding: .5rem .5rem;
		&:hover {
			background: #eee;
		}
	}
	.name {
		font-size: .85rem;
		white-space: nowrap;
		margin-left: .3rem;
	}
}
</style>
