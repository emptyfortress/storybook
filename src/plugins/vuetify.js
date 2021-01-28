import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export const options = {
	icons: {
		iconfont: 'mdiSvg',
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
				warning: '#FFC107',
			},
		},
	},
}

export default new Vuetify(options)

// export default new Vuetify({
// 	theme: {
// 		options: {
// 			customProperties: true,
// 		},
// 		themes: {
// 			light: {
// 				primary: '#ee44aa',
// 				secondary: '#424242',
// 				accent: '#82B1FF',
// 				error: '#FF5252',
// 				info: '#2196F3',
// 				success: '#4CAF50',
// 				warning: '#FFC107',
// 			},
// 		},
// 	},
// })
