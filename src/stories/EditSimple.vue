<template lang="pug">
.line
	.content(tabindex="0" contenteditable id="div" ref="div") {{ $t('clicktoedit') }}
	v-icon(small @click="clear").clear mdi-close-circle
</template>

<script>

export default {
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

.line {
	line-height: 130%;
	color: $link;
	display: inline-block;
	padding: 0 1.6rem 0 0;
	position: relative;
	&:focus-within {
		border-bottom: 1px dotted $link;
		.clear {
			display: block;
		}
	}
}
.content {
	min-width: 50px;
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
