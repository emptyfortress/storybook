<template lang="pug">
.colors
	.card(v-for="color in colors" :key="color.id")
		.name {{ color.name }}
		.val {{ color.val }}
		.color(:style="{background: color.val}")
</template>

<script>

export default {
	data() {
		return {
			colors: [
				{ id: 0, name: 'dv Violet', val: '#271F47' },
				{ id: 1, name: 'dv Green', val: '#BBD02D' },
				{ id: 2, name: 'dv Biruza', val: 'rgb(0,173,187)' },
				{ id: 3, name: 'dv Orange', val: 'rgb(241,138,0)' },
				{ id: 4, name: 'dv Red', val: 'rgb(202,54,37)' },
				{ id: 5, name: 'dv Grey', val: 'rgb(85,86,90)' },
			]
		}
	},
}

</script>

<style scoped lang="scss">
.colors {
	margin: 2rem;
	display: flex;
	flex-direction: column;
	gap: .5rem;
}
.card {
	background: #fff;
	padding: 1rem;
	display: flex;
	width: 350px;
	justify-content: space-between;
	align-items: center;
	box-shadow: 0 1px 2px rgba(0,0,0, .2);
	.val {
		font-size: .8rem;
		color: #999;
	}
	.color {
		width: 3rem;
		height: 3rem;
		background: #ccc;
	}
}

</style>
