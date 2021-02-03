const path = require('path')

module.exports = {
	stories: [
		'../src/stories/Welcome.stories.js',
		// '../src/**/*.stories.mdx',
		'../src/stories/Logo.stories.js',
		'../src/stories/Colors.stories.js',
		'../src/stories/EditSimple.stories.js',
		'../src/stories/EditLabel.stories.js',
		'../src/**/*.stories.@(js|jsx|ts|tsx)',
	],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-a11y',
	],

	webpackFinal: async (config, { configType }) => {
		// `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
		// You can change the configuration based on that.
		// 'PRODUCTION' is used when building the static version of storybook.

		config.resolve.alias['~storybook'] = path.resolve(__dirname)
		config.resolve.alias['@'] = path.resolve(__dirname, '..', 'src')
		// Make whatever fine-grained changes you need
		config.module.rules.push({
			test: /\.scss$/,
			use: ['style-loader', 'css-loader', 'sass-loader'],
			include: path.resolve(__dirname, '../'),
		})

		config.module.rules.push({
			test: /\.pug$/,
			use: [{ loader: 'pug-plain-loader' }],
		})

		// THIS is the tricky stuff!
		config.module.rules.push({
			test: /\.sass$/,
			use: [
				'style-loader',
				'css-loader',
				{
					loader: 'sass-loader',
					options: {
						sassOptions: {
							indentedSyntax: true,
						},
						// additionalData: "@import '`#`/styles/styles.sass'",
					},
				},
			],
			include: path.resolve(__dirname, '../'),
		})

		// Return the altered config
		return config
	},
}
