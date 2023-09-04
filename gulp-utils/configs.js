const isProduction = process.argv.includes('--production');
const isDevelopment = !isProduction;

export default {
	isProduction,
	isDevelopment,

	htmlmin: {
		collapseWhitespace: true,
		removeComments: isProduction
	},

	webpack: {
		mode: isProduction ? 'production' : 'development',
		optimization: {
			minimize: true,
		},
	},

	imagemin: {
		verbose: true,
	},

	fonter: {
		formats: ['ttf', 'woff', 'eot', 'svg']
	}
}
