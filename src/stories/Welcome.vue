<template lang="pug">
.all
	img(src="./assets/kit.svg" width="350")
	h2 Welcome to Docsvision kit
	p Это попытка разработки UI элементов в изолированной среде.<br>К сожалению, пока (?), все компоненты написаны на vue. Возможно, в дальнейшем появится какой-то конвертор.
	.flex
		img(src="./assets/vue.png" width="50")
		span.big &rlarr;
		img(src="./assets/react-logo.svg" width="50")
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
