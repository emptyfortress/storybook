<template lang="pug">
#app
	HelloWorld(msg="Welcome to Your Vue.js App")
	myBt
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import myBt from '@/components/myBt'

export default {
	name: 'App',
	components: {
		HelloWorld,
		myBt,
	},
}
</script>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
