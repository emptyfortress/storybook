<template lang="pug">
	v-app
		v-app-bar(app color="primary" dark)
			.d-flex.align-center
				v-img(class="shrink mr-2" contain src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png" transition="scale-transition" width="40")
				v-img(class="shrink mt-1 hidden-sm-and-down" contain min-width="100" src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png" width="100")
			v-spacer

		v-main
			.pa-5
				v-btn(color="primary" text)  {{ $t('button') }}
				v-btn(icon)
					v-icon mdi-heart
				br
				HelloI18n
				.locale-changer
					select(v-model="$i18n.locale")
						option(v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang") {{ lang }}
				.overline Сведения о деле

</template>

<script>
import HelloI18n from '@/components/HelloI18n'

export default {
	name: 'App',

	components: {
		HelloI18n
	},
	data() {
		return {
			langs: ['en', 'ru']
		}
	}

}
</script>
