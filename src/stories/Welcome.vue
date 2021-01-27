<template lang="pug">
.all
	h2 Welcome to Docsvision storybook
	p Это попытка разработки UI элементов в изолированной среде.<br>К сожалению, пока (?), все компоненты написаны на vue. Возможно, в дальнейшем появится какой-то конвертор.
	.flex
		img(src="./assets/vue.png" width="120")
		span.big &rlarr;
		img(src="./assets/react-logo.svg" width="130")
</template>

<script>

export default {
	data() {
		return {
		}
	},
}

</script>

<style scoped lang="scss">
.all {
	color: #666;
	max-width: 800px;
	margin: 0 auto;
	.flex {
		display: flex;
		align-items: center;
	}
	.big {
		font-size: 2rem;
		margin: 0 2rem;
	}
}

</style>
