import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export const options = {
	icons: {
		// iconfont: 'mdiSvg',
		iconfont: 'md',
	},
	theme: {
		options: {
			customProperties: true,
		},
		themes: {
			light: {
				primary: '#ee44aa',
				secondary: '#424242',
				accent: '#82B1FF',
				error: '#FF5252',
				info: '#2196F3',
				success: '#4CAF50',
				warning: '#ff9307',
				docolor: '#008AD1',
				taskcolor: '#6DAE50',
				dark: '#2C4159',
				link: '#0077CE'
			},
			dark: {
				primary: '#ee44aa',
				secondary: '#424242',
				accent: '#82B1FF',
				error: '#FF5252',
				info: '#2196F3',
				success: '#4CAF50',
				warning: '#ff9307',
				docolor: '#008AD1',
				taskcolor: '#6DAE50',
				dark: '#2C4159',
				link: '#0077CE'
			},
		},
	},
}

export default new Vuetify(options)
