<template lang="pug">
table
	tr
		td
			EditLabel(:label="false" :icon="icon")
</template>

<script>
import EditLabel from './EditLabel'

export default {
	props: {
		icon: {
			type: Boolean,
			default: false
		},
	},
	components: {
		EditLabel
	}
}
</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';
.theme--light td {
	border: 1px solid black;
}
.theme--dark td {
	border: 1px solid #ccc;
}
</style>
